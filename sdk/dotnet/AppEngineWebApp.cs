// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gcpwebapp
{
    [GcpwebappResourceType("gcpwebapp:index:AppEngineWebApp")]
    public partial class AppEngineWebApp : Pulumi.ComponentResource
    {
        /// <summary>
        /// The app engine that has been built.
        /// </summary>
        [Output("appEngineServer")]
        public Output<Pulumi.Gcp.AppEngine.StandardAppVersion> AppEngineServer { get; private set; } = null!;

        /// <summary>
        /// The server/API URL.
        /// </summary>
        [Output("serverUrl")]
        public Output<string> ServerUrl { get; private set; } = null!;

        /// <summary>
        /// The website URL.
        /// </summary>
        [Output("websiteUrl")]
        public Output<string> WebsiteUrl { get; private set; } = null!;


        /// <summary>
        /// Create a AppEngineWebApp resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AppEngineWebApp(string name, AppEngineWebAppArgs args, ComponentResourceOptions? options = null)
            : base("gcpwebapp:index:AppEngineWebApp", name, args ?? new AppEngineWebAppArgs(), MakeResourceOptions(options, ""), remote: true)
        {
        }

        private static ComponentResourceOptions MakeResourceOptions(ComponentResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new ComponentResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = ComponentResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class AppEngineWebAppArgs : Pulumi.ResourceArgs
    {
        [Input("appEngineEntrypoint")]
        private InputMap<string>? _appEngineEntrypoint;
        public InputMap<string> AppEngineEntrypoint
        {
            get => _appEngineEntrypoint ?? (_appEngineEntrypoint = new InputMap<string>());
            set => _appEngineEntrypoint = value;
        }

        /// <summary>
        /// Desired runtime (e.g. nodejs14).
        /// </summary>
        [Input("appEngineRuntime", required: true)]
        public Input<string> AppEngineRuntime { get; set; } = null!;

        /// <summary>
        /// The directory containing backend files.
        /// </summary>
        [Input("backendDirectory", required: true)]
        public Input<string> BackendDirectory { get; set; } = null!;

        [Input("bucketAdminMembers")]
        private InputList<string>? _bucketAdminMembers;

        /// <summary>
        /// Members that you want to give admin privileges to, expected to be in Google's supported formats.
        /// </summary>
        public InputList<string> BucketAdminMembers
        {
            get => _bucketAdminMembers ?? (_bucketAdminMembers = new InputList<string>());
            set => _bucketAdminMembers = value;
        }

        /// <summary>
        /// The directory containing frontend files.
        /// </summary>
        [Input("frontendDirectory", required: true)]
        public Input<string> FrontendDirectory { get; set; } = null!;

        /// <summary>
        /// The ID of the project in which the resources should be constructed.
        /// </summary>
        [Input("project", required: true)]
        public Input<string> Project { get; set; } = null!;

        /// <summary>
        /// The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
        /// </summary>
        [Input("regionId", required: true)]
        public Input<string> RegionId { get; set; } = null!;

        /// <summary>
        /// The file that represents the error page of your site.
        /// </summary>
        [Input("websiteErrorPage", required: true)]
        public Input<string> WebsiteErrorPage { get; set; } = null!;

        /// <summary>
        /// The file that represents the start page of your site (e.g. index.html).
        /// </summary>
        [Input("websiteIndexPage", required: true)]
        public Input<string> WebsiteIndexPage { get; set; } = null!;

        public AppEngineWebAppArgs()
        {
        }
    }
}
