// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import * as gcp from "@pulumi/gcp";

export class AppEngineWebApp extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'gcpwebapp:index:AppEngineWebApp';

    /**
     * Returns true if the given object is an instance of AppEngineWebApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppEngineWebApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppEngineWebApp.__pulumiType;
    }

    /**
     * The app engine that has been built.
     */
    public /*out*/ readonly appEngineServer!: pulumi.Output<gcp.appengine.StandardAppVersion>;
    /**
     * The server/API URL.
     */
    public /*out*/ readonly serverUrl!: pulumi.Output<string>;
    /**
     * The website URL.
     */
    public /*out*/ readonly websiteUrl!: pulumi.Output<string>;

    /**
     * Create a AppEngineWebApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppEngineWebAppArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appEngineRuntime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appEngineRuntime'");
            }
            if ((!args || args.backendDirectory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendDirectory'");
            }
            if ((!args || args.frontendDirectory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendDirectory'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.regionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regionId'");
            }
            if ((!args || args.websiteErrorPage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'websiteErrorPage'");
            }
            if ((!args || args.websiteIndexPage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'websiteIndexPage'");
            }
            inputs["appEngineEntrypoint"] = args ? args.appEngineEntrypoint : undefined;
            inputs["appEngineRuntime"] = args ? args.appEngineRuntime : undefined;
            inputs["backendDirectory"] = args ? args.backendDirectory : undefined;
            inputs["bucketAdminMembers"] = args ? args.bucketAdminMembers : undefined;
            inputs["frontendDirectory"] = args ? args.frontendDirectory : undefined;
            inputs["project"] = args ? args.project : undefined;
            inputs["regionId"] = args ? args.regionId : undefined;
            inputs["websiteErrorPage"] = args ? args.websiteErrorPage : undefined;
            inputs["websiteIndexPage"] = args ? args.websiteIndexPage : undefined;
            inputs["appEngineServer"] = undefined /*out*/;
            inputs["serverUrl"] = undefined /*out*/;
            inputs["websiteUrl"] = undefined /*out*/;
        } else {
            inputs["appEngineServer"] = undefined /*out*/;
            inputs["serverUrl"] = undefined /*out*/;
            inputs["websiteUrl"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(AppEngineWebApp.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a AppEngineWebApp resource.
 */
export interface AppEngineWebAppArgs {
    /**
     * The entrypoint for the application.
     */
    appEngineEntrypoint?: pulumi.Input<gcp.types.input.appengine.StandardAppVersionEntrypointArgs>;
    /**
     * Desired runtime (e.g. nodejs14).
     */
    appEngineRuntime: pulumi.Input<string>;
    /**
     * The directory containing backend files.
     */
    backendDirectory: pulumi.Input<string>;
    /**
     * Members that you want to give admin privileges to, expected to be in Google's supported formats.
     */
    bucketAdminMembers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The directory containing frontend files.
     */
    frontendDirectory: pulumi.Input<string>;
    /**
     * The ID of the project in which the resources should be constructed.
     */
    project: pulumi.Input<string>;
    /**
     * The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
     */
    regionId: pulumi.Input<string>;
    /**
     * The file that represents the error page of your site.
     */
    websiteErrorPage: pulumi.Input<string>;
    /**
     * The file that represents the start page of your site (e.g. index.html).
     */
    websiteIndexPage: pulumi.Input<string>;
}
