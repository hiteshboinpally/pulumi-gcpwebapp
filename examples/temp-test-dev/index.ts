import * as google from "@pulumi/google-native";
import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import * as fs from "fs";
import * as mime from "mime";
import * as gcpwebapp from "@pulumi/gcpwebapp";

const config = new pulumi.Config("google-native");
const project = config.require("project");
const regionId = config.require("regionId");
const bucketName = pulumi.interpolate `pulumi-goog-native-ts-hiteshhack`;

const webapp = new gcpwebapp.AppEngineWebApp("simple-web-app")

// Create a Google Cloud resource (Storage Bucket)
const bucket = new google.storage.v1.Bucket("my-bucket", {
    name: bucketName,
    bucket: bucketName,
    project: project,
    website: {
        mainPageSuffix: "index.html",
        notFoundPage: "error.html",
    },
    iamConfiguration: {
        uniformBucketLevelAccess: {
            enabled: true,
        }
    },
});

const bucketPolicy = new google.storage.v1.BucketIamPolicy("bucket-policy", {
    bucket: bucket.name,
    bindings: [
        {
            role: "roles/storage.objectViewer",
            members: ["allUsers"],
        },
        {
            role: "roles/storage.admin",
            members: ["user:t-hitesh@pulumi.com"] 
        }
    ],
});

const frontendDir = "app/frontend" // directory that contains frontend files
for (const item of fs.readdirSync(frontendDir)) {
    const filePath = require("path").join(frontendDir, item);
    const stats = fs.statSync(filePath);
    constBucketObject(filePath, item, stats.isDirectory());
}

const backendDir = "app/backend"; // directory that contains backend files
const backendZipObj = constBucketObject(backendDir, "backend", true);

function constBucketObject(filePath: string, objName: string, isDir?: boolean) {
    let src;
    if (isDir) {
        src = new pulumi.asset.FileArchive(filePath);
    } else {
        src = new pulumi.asset.FileAsset(filePath);
    }
    return new google.storage.v1.BucketObject(objName, {
        name: objName,
        bucket: bucket.name,
        source: src,
        object: objName,
        contentType: mime.getType(objName) || undefined,
    });
}

const appEngine = new gcp.appengine.StandardAppVersion("backend-server", {
    project: project,
    versionId: "v1",
    service: "myapp",
    runtime: "nodejs14",
    entrypoint: {
        shell: "node ./server.js",
    },
    deployment: {
        zip: {
            sourceUrl: pulumi.interpolate`https://storage.googleapis.com/${bucket.name}/${backendZipObj.name}`,
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

// Then build multilang component on top of the appengine program

// Export the bucket self-link
export const bucketSelfLink = bucket.selfLink;
// Export the bucket frontend url
export const bucketEndpoint = pulumi.concat("http://storage.googleapis.com/", bucket.name, "index.html");
export const frontendDirContents = new pulumi.asset.FileArchive(frontendDir);
export const appEngineEndpoint = pulumi.interpolate`https://${appEngine.service}-dot-${appEngine.project}.${regionId}.r.appspot.com`;
