// Copyright 2016-2021, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as googlenative from "@pulumi/google-native";
import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import * as fs from "fs";
import * as mime from "mime";

export interface AppEngineWebAppArgs {
    frontendDirectory: pulumi.Input<string>;
    backendDirectory: pulumi.Input<string>;
    /**
     * The file that represents the start page of your site (e.g. index.html)
     */
    websiteIndexPage: pulumi.Input<string>;
    /** 
     * The file that represents the error page
     */
    websiteErrorPage: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs.
     */ 
    project: pulumi.Input<string>;
    /**
     * Required to fill in the URL of the server (e.g. uc for us-central)
     */
    regionId: pulumi.Input<string>;
    /**
     * Members that you want to give admin privileges to, expected to be in one one of the following formats:
     * allUsers — A special identifier that represents anyone on the internet; with or without a Google account.
     * allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.
     * user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.
     * serviceAccount:emailid — An email address that represents a service account. For example, serviceAccount:my-other-app@appspot.gserviceaccount.com .
     * group:emailid — An email address that represents a Google group. For example, group:admins@example.com.
     * domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.
     * projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project
     * projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project
     * projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project
     */
    bucketAdminMembers?: pulumi.Input<string>[];
    /**
     * Desired runtime. Example nodejs14.
     */
    appEngineRuntime: pulumi.Input<string>;
    /**
     * The entrypoint for the application.
     */
    appEngineEntrypoint?: gcp.appengine.StandardAppVersionArgs["entrypoint"];
}

export class AppEngineWebApp extends pulumi.ComponentResource {
    public readonly bucket: googlenative.storage.v1.Bucket;
    public readonly websiteUrl: pulumi.Output<string>;
    // TODO: How to make this populated within site easily?
    // test this out more!
    public readonly serverUrl: pulumi.Output<string>;


    constructor(name: string, args: AppEngineWebAppArgs, opts?: pulumi.ComponentResourceOptions) {
        super("xyz:index:AppEngineWebApp", name, args, opts);

        // Create a Google Cloud resource (Storage Bucket)
        const bucket = new googlenative.storage.v1.Bucket(`${name}-bucket`, {
            name: `${name}-bucket`,
            bucket: `${name}-bucket`,
            project: args.project,
            website: {
                mainPageSuffix: args.websiteIndexPage,
                notFoundPage: args.websiteErrorPage,
            },
            iamConfiguration: {
                uniformBucketLevelAccess: {
                    enabled: true,
                }
            },
        });
        this.bucket = bucket;

        // Set the access policy for the bucket so all objects are readable. Also gives
        // admin access to any member referenced in `args.bucketAdminMembers`.
        const bucketPolicy = new googlenative.storage.v1.BucketIamPolicy(`${name}-bucket-policy`, {
            bucket: this.bucket.name,
            bindings: [
                {
                    role: "roles/storage.objectViewer",
                    members: ["allUsers"],
                },
                {
                    role: "roles/storage.admin",
                    members: args.bucketAdminMembers,
                }
            ],
        });

        // Upload web app files to newly created storage bucket
        pulumi.output(args.frontendDirectory).apply(frontendDirectory => {
            for (const item of fs.readdirSync(frontendDirectory)) {
                const filePath = require("path").join(args.frontendDirectory, item);
                const stats = fs.statSync(filePath);
                this.constBucketObject(filePath, item, stats.isDirectory());
            }
        });
        
        const backendZipObj = pulumi.output(args.backendDirectory).apply(backendDirectory => this.constBucketObject(backendDirectory, "backend", true));

        const appEngineServer = new gcp.appengine.StandardAppVersion(`${name}-backend-server`, {
            project: args.project,
            versionId: "v1",
            service: `${name}-backend-server`,
            runtime: args.appEngineRuntime,
            entrypoint: args.appEngineEntrypoint,
            deployment: {
                zip: {
                    sourceUrl: pulumi.interpolate`https://storage.googleapis.com/${this.bucket.name}/${backendZipObj.name}`,
                }
            },
            envVariables: {
                port: "8080",
            },
            basicScaling: {
                maxInstances: 5,
            },
            noopOnDestroy: true,
        });

        this.websiteUrl = pulumi.interpolate`http://storage.googleapis.com/${bucket.name}${args.websiteIndexPage}`;
        this.serverUrl = pulumi.interpolate`https://${appEngineServer.service}-dot-${appEngineServer.project}.${args.regionId}.r.appspot.com`;

        this.registerOutputs({
            websiteUrl: this.websiteUrl,
            serverUrl: this.serverUrl,
            bucket,
            appEngineServer,
        });
    }

    constBucketObject(filePath: string, objName: string, isDir?: boolean) {
        let src;
        if (isDir) {
            src = new pulumi.asset.FileArchive(filePath);
        } else {
            src = new pulumi.asset.FileAsset(filePath);
        }
        return new googlenative.storage.v1.BucketObject(objName, {
            name: objName,
            bucket: this.bucket.name,
            source: src,
            object: objName,
            contentType: mime.getType(objName) || undefined,
        });
    }
}
