# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
import pulumi_gcp

__all__ = ['AppEngineWebAppArgs', 'AppEngineWebApp']

@pulumi.input_type
class AppEngineWebAppArgs:
    def __init__(__self__, *,
                 app_engine_runtime: pulumi.Input[str],
                 backend_directory: pulumi.Input[str],
                 frontend_directory: pulumi.Input[str],
                 project: pulumi.Input[str],
                 region_id: pulumi.Input[str],
                 website_error_page: pulumi.Input[str],
                 website_index_page: pulumi.Input[str],
                 app_engine_entrypoint: Optional[pulumi.Input['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']] = None,
                 bucket_admin_members: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        The set of arguments for constructing a AppEngineWebApp resource.
        :param pulumi.Input[str] app_engine_runtime: Desired runtime (e.g. nodejs14).
        :param pulumi.Input[str] backend_directory: The directory containing backend files.
        :param pulumi.Input[str] frontend_directory: The directory containing frontend files.
        :param pulumi.Input[str] project: The ID of the project in which the resources should be constructed.
        :param pulumi.Input[str] region_id: The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
        :param pulumi.Input[str] website_error_page: The file that represents the error page of your site.
        :param pulumi.Input[str] website_index_page: The file that represents the start page of your site (e.g. index.html).
        :param pulumi.Input['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs'] app_engine_entrypoint: The entrypoint for the application.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] bucket_admin_members: Members that you want to give admin privileges to, expected to be in Google's supported formats.
        """
        pulumi.set(__self__, "app_engine_runtime", app_engine_runtime)
        pulumi.set(__self__, "backend_directory", backend_directory)
        pulumi.set(__self__, "frontend_directory", frontend_directory)
        pulumi.set(__self__, "project", project)
        pulumi.set(__self__, "region_id", region_id)
        pulumi.set(__self__, "website_error_page", website_error_page)
        pulumi.set(__self__, "website_index_page", website_index_page)
        if app_engine_entrypoint is not None:
            pulumi.set(__self__, "app_engine_entrypoint", app_engine_entrypoint)
        if bucket_admin_members is not None:
            pulumi.set(__self__, "bucket_admin_members", bucket_admin_members)

    @property
    @pulumi.getter(name="appEngineRuntime")
    def app_engine_runtime(self) -> pulumi.Input[str]:
        """
        Desired runtime (e.g. nodejs14).
        """
        return pulumi.get(self, "app_engine_runtime")

    @app_engine_runtime.setter
    def app_engine_runtime(self, value: pulumi.Input[str]):
        pulumi.set(self, "app_engine_runtime", value)

    @property
    @pulumi.getter(name="backendDirectory")
    def backend_directory(self) -> pulumi.Input[str]:
        """
        The directory containing backend files.
        """
        return pulumi.get(self, "backend_directory")

    @backend_directory.setter
    def backend_directory(self, value: pulumi.Input[str]):
        pulumi.set(self, "backend_directory", value)

    @property
    @pulumi.getter(name="frontendDirectory")
    def frontend_directory(self) -> pulumi.Input[str]:
        """
        The directory containing frontend files.
        """
        return pulumi.get(self, "frontend_directory")

    @frontend_directory.setter
    def frontend_directory(self, value: pulumi.Input[str]):
        pulumi.set(self, "frontend_directory", value)

    @property
    @pulumi.getter
    def project(self) -> pulumi.Input[str]:
        """
        The ID of the project in which the resources should be constructed.
        """
        return pulumi.get(self, "project")

    @project.setter
    def project(self, value: pulumi.Input[str]):
        pulumi.set(self, "project", value)

    @property
    @pulumi.getter(name="regionId")
    def region_id(self) -> pulumi.Input[str]:
        """
        The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
        """
        return pulumi.get(self, "region_id")

    @region_id.setter
    def region_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "region_id", value)

    @property
    @pulumi.getter(name="websiteErrorPage")
    def website_error_page(self) -> pulumi.Input[str]:
        """
        The file that represents the error page of your site.
        """
        return pulumi.get(self, "website_error_page")

    @website_error_page.setter
    def website_error_page(self, value: pulumi.Input[str]):
        pulumi.set(self, "website_error_page", value)

    @property
    @pulumi.getter(name="websiteIndexPage")
    def website_index_page(self) -> pulumi.Input[str]:
        """
        The file that represents the start page of your site (e.g. index.html).
        """
        return pulumi.get(self, "website_index_page")

    @website_index_page.setter
    def website_index_page(self, value: pulumi.Input[str]):
        pulumi.set(self, "website_index_page", value)

    @property
    @pulumi.getter(name="appEngineEntrypoint")
    def app_engine_entrypoint(self) -> Optional[pulumi.Input['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']]:
        """
        The entrypoint for the application.
        """
        return pulumi.get(self, "app_engine_entrypoint")

    @app_engine_entrypoint.setter
    def app_engine_entrypoint(self, value: Optional[pulumi.Input['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']]):
        pulumi.set(self, "app_engine_entrypoint", value)

    @property
    @pulumi.getter(name="bucketAdminMembers")
    def bucket_admin_members(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        Members that you want to give admin privileges to, expected to be in Google's supported formats.
        """
        return pulumi.get(self, "bucket_admin_members")

    @bucket_admin_members.setter
    def bucket_admin_members(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "bucket_admin_members", value)


class AppEngineWebApp(pulumi.ComponentResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 app_engine_entrypoint: Optional[pulumi.Input[pulumi.InputType['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']]] = None,
                 app_engine_runtime: Optional[pulumi.Input[str]] = None,
                 backend_directory: Optional[pulumi.Input[str]] = None,
                 bucket_admin_members: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 frontend_directory: Optional[pulumi.Input[str]] = None,
                 project: Optional[pulumi.Input[str]] = None,
                 region_id: Optional[pulumi.Input[str]] = None,
                 website_error_page: Optional[pulumi.Input[str]] = None,
                 website_index_page: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Create a AppEngineWebApp resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[pulumi.InputType['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']] app_engine_entrypoint: The entrypoint for the application.
        :param pulumi.Input[str] app_engine_runtime: Desired runtime (e.g. nodejs14).
        :param pulumi.Input[str] backend_directory: The directory containing backend files.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] bucket_admin_members: Members that you want to give admin privileges to, expected to be in Google's supported formats.
        :param pulumi.Input[str] frontend_directory: The directory containing frontend files.
        :param pulumi.Input[str] project: The ID of the project in which the resources should be constructed.
        :param pulumi.Input[str] region_id: The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
        :param pulumi.Input[str] website_error_page: The file that represents the error page of your site.
        :param pulumi.Input[str] website_index_page: The file that represents the start page of your site (e.g. index.html).
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: AppEngineWebAppArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Create a AppEngineWebApp resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param AppEngineWebAppArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(AppEngineWebAppArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 app_engine_entrypoint: Optional[pulumi.Input[pulumi.InputType['pulumi_gcp.appengine.StandardAppVersionEntrypointArgs']]] = None,
                 app_engine_runtime: Optional[pulumi.Input[str]] = None,
                 backend_directory: Optional[pulumi.Input[str]] = None,
                 bucket_admin_members: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 frontend_directory: Optional[pulumi.Input[str]] = None,
                 project: Optional[pulumi.Input[str]] = None,
                 region_id: Optional[pulumi.Input[str]] = None,
                 website_error_page: Optional[pulumi.Input[str]] = None,
                 website_index_page: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is not None:
            raise ValueError('ComponentResource classes do not support opts.id')
        else:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = AppEngineWebAppArgs.__new__(AppEngineWebAppArgs)

            __props__.__dict__["app_engine_entrypoint"] = app_engine_entrypoint
            if app_engine_runtime is None and not opts.urn:
                raise TypeError("Missing required property 'app_engine_runtime'")
            __props__.__dict__["app_engine_runtime"] = app_engine_runtime
            if backend_directory is None and not opts.urn:
                raise TypeError("Missing required property 'backend_directory'")
            __props__.__dict__["backend_directory"] = backend_directory
            __props__.__dict__["bucket_admin_members"] = bucket_admin_members
            if frontend_directory is None and not opts.urn:
                raise TypeError("Missing required property 'frontend_directory'")
            __props__.__dict__["frontend_directory"] = frontend_directory
            if project is None and not opts.urn:
                raise TypeError("Missing required property 'project'")
            __props__.__dict__["project"] = project
            if region_id is None and not opts.urn:
                raise TypeError("Missing required property 'region_id'")
            __props__.__dict__["region_id"] = region_id
            if website_error_page is None and not opts.urn:
                raise TypeError("Missing required property 'website_error_page'")
            __props__.__dict__["website_error_page"] = website_error_page
            if website_index_page is None and not opts.urn:
                raise TypeError("Missing required property 'website_index_page'")
            __props__.__dict__["website_index_page"] = website_index_page
            __props__.__dict__["app_engine_server"] = None
            __props__.__dict__["server_url"] = None
            __props__.__dict__["website_url"] = None
        super(AppEngineWebApp, __self__).__init__(
            'gcpwebapp:index:AppEngineWebApp',
            resource_name,
            __props__,
            opts,
            remote=True)

    @property
    @pulumi.getter(name="appEngineServer")
    def app_engine_server(self) -> pulumi.Output['pulumi_gcp.appengine.StandardAppVersion']:
        """
        The app engine that has been built.
        """
        return pulumi.get(self, "app_engine_server")

    @property
    @pulumi.getter(name="serverUrl")
    def server_url(self) -> pulumi.Output[str]:
        """
        The server/API URL.
        """
        return pulumi.get(self, "server_url")

    @property
    @pulumi.getter(name="websiteUrl")
    def website_url(self) -> pulumi.Output[str]:
        """
        The website URL.
        """
        return pulumi.get(self, "website_url")

