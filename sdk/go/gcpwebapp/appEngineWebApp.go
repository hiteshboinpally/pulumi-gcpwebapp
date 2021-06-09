// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package gcpwebapp

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi-gcp/sdk/v5/go/gcp/appengine"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type AppEngineWebApp struct {
	pulumi.ResourceState

	// The app engine that has been built.
	AppEngineServer appengine.StandardAppVersionOutput `pulumi:"appEngineServer"`
	// The server/API URL.
	ServerUrl pulumi.StringOutput `pulumi:"serverUrl"`
	// The website URL.
	WebsiteUrl pulumi.StringOutput `pulumi:"websiteUrl"`
}

// NewAppEngineWebApp registers a new resource with the given unique name, arguments, and options.
func NewAppEngineWebApp(ctx *pulumi.Context,
	name string, args *AppEngineWebAppArgs, opts ...pulumi.ResourceOption) (*AppEngineWebApp, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AppEngineRuntime == nil {
		return nil, errors.New("invalid value for required argument 'AppEngineRuntime'")
	}
	if args.BackendDirectory == nil {
		return nil, errors.New("invalid value for required argument 'BackendDirectory'")
	}
	if args.FrontendDirectory == nil {
		return nil, errors.New("invalid value for required argument 'FrontendDirectory'")
	}
	if args.Project == nil {
		return nil, errors.New("invalid value for required argument 'Project'")
	}
	if args.RegionId == nil {
		return nil, errors.New("invalid value for required argument 'RegionId'")
	}
	if args.WebsiteErrorPage == nil {
		return nil, errors.New("invalid value for required argument 'WebsiteErrorPage'")
	}
	if args.WebsiteIndexPage == nil {
		return nil, errors.New("invalid value for required argument 'WebsiteIndexPage'")
	}
	var resource AppEngineWebApp
	err := ctx.RegisterRemoteComponentResource("gcpwebapp:index:AppEngineWebApp", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type appEngineWebAppArgs struct {
	AppEngineEntrypoint map[string]string `pulumi:"appEngineEntrypoint"`
	// Desired runtime (e.g. nodejs14).
	AppEngineRuntime string `pulumi:"appEngineRuntime"`
	// The directory containing backend files.
	BackendDirectory string `pulumi:"backendDirectory"`
	// Members that you want to give admin privileges to, expected to be in Google's supported formats.
	BucketAdminMembers []string `pulumi:"bucketAdminMembers"`
	// The directory containing frontend files.
	FrontendDirectory string `pulumi:"frontendDirectory"`
	// The ID of the project in which the resources should be constructed.
	Project string `pulumi:"project"`
	// The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
	RegionId string `pulumi:"regionId"`
	// The file that represents the error page of your site.
	WebsiteErrorPage string `pulumi:"websiteErrorPage"`
	// The file that represents the start page of your site (e.g. index.html).
	WebsiteIndexPage string `pulumi:"websiteIndexPage"`
}

// The set of arguments for constructing a AppEngineWebApp resource.
type AppEngineWebAppArgs struct {
	AppEngineEntrypoint pulumi.StringMapInput
	// Desired runtime (e.g. nodejs14).
	AppEngineRuntime pulumi.StringInput
	// The directory containing backend files.
	BackendDirectory pulumi.StringInput
	// Members that you want to give admin privileges to, expected to be in Google's supported formats.
	BucketAdminMembers pulumi.StringArrayInput
	// The directory containing frontend files.
	FrontendDirectory pulumi.StringInput
	// The ID of the project in which the resources should be constructed.
	Project pulumi.StringInput
	// The ID of the region you're deploying into. Required to fill in the URL of the server (e.g. uc for us-central).
	RegionId pulumi.StringInput
	// The file that represents the error page of your site.
	WebsiteErrorPage pulumi.StringInput
	// The file that represents the start page of your site (e.g. index.html).
	WebsiteIndexPage pulumi.StringInput
}

func (AppEngineWebAppArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*appEngineWebAppArgs)(nil)).Elem()
}

type AppEngineWebAppInput interface {
	pulumi.Input

	ToAppEngineWebAppOutput() AppEngineWebAppOutput
	ToAppEngineWebAppOutputWithContext(ctx context.Context) AppEngineWebAppOutput
}

func (*AppEngineWebApp) ElementType() reflect.Type {
	return reflect.TypeOf((*AppEngineWebApp)(nil))
}

func (i *AppEngineWebApp) ToAppEngineWebAppOutput() AppEngineWebAppOutput {
	return i.ToAppEngineWebAppOutputWithContext(context.Background())
}

func (i *AppEngineWebApp) ToAppEngineWebAppOutputWithContext(ctx context.Context) AppEngineWebAppOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppEngineWebAppOutput)
}

func (i *AppEngineWebApp) ToAppEngineWebAppPtrOutput() AppEngineWebAppPtrOutput {
	return i.ToAppEngineWebAppPtrOutputWithContext(context.Background())
}

func (i *AppEngineWebApp) ToAppEngineWebAppPtrOutputWithContext(ctx context.Context) AppEngineWebAppPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppEngineWebAppPtrOutput)
}

type AppEngineWebAppPtrInput interface {
	pulumi.Input

	ToAppEngineWebAppPtrOutput() AppEngineWebAppPtrOutput
	ToAppEngineWebAppPtrOutputWithContext(ctx context.Context) AppEngineWebAppPtrOutput
}

type appEngineWebAppPtrType AppEngineWebAppArgs

func (*appEngineWebAppPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**AppEngineWebApp)(nil))
}

func (i *appEngineWebAppPtrType) ToAppEngineWebAppPtrOutput() AppEngineWebAppPtrOutput {
	return i.ToAppEngineWebAppPtrOutputWithContext(context.Background())
}

func (i *appEngineWebAppPtrType) ToAppEngineWebAppPtrOutputWithContext(ctx context.Context) AppEngineWebAppPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppEngineWebAppPtrOutput)
}

// AppEngineWebAppArrayInput is an input type that accepts AppEngineWebAppArray and AppEngineWebAppArrayOutput values.
// You can construct a concrete instance of `AppEngineWebAppArrayInput` via:
//
//          AppEngineWebAppArray{ AppEngineWebAppArgs{...} }
type AppEngineWebAppArrayInput interface {
	pulumi.Input

	ToAppEngineWebAppArrayOutput() AppEngineWebAppArrayOutput
	ToAppEngineWebAppArrayOutputWithContext(context.Context) AppEngineWebAppArrayOutput
}

type AppEngineWebAppArray []AppEngineWebAppInput

func (AppEngineWebAppArray) ElementType() reflect.Type {
	return reflect.TypeOf(([]*AppEngineWebApp)(nil))
}

func (i AppEngineWebAppArray) ToAppEngineWebAppArrayOutput() AppEngineWebAppArrayOutput {
	return i.ToAppEngineWebAppArrayOutputWithContext(context.Background())
}

func (i AppEngineWebAppArray) ToAppEngineWebAppArrayOutputWithContext(ctx context.Context) AppEngineWebAppArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppEngineWebAppArrayOutput)
}

// AppEngineWebAppMapInput is an input type that accepts AppEngineWebAppMap and AppEngineWebAppMapOutput values.
// You can construct a concrete instance of `AppEngineWebAppMapInput` via:
//
//          AppEngineWebAppMap{ "key": AppEngineWebAppArgs{...} }
type AppEngineWebAppMapInput interface {
	pulumi.Input

	ToAppEngineWebAppMapOutput() AppEngineWebAppMapOutput
	ToAppEngineWebAppMapOutputWithContext(context.Context) AppEngineWebAppMapOutput
}

type AppEngineWebAppMap map[string]AppEngineWebAppInput

func (AppEngineWebAppMap) ElementType() reflect.Type {
	return reflect.TypeOf((map[string]*AppEngineWebApp)(nil))
}

func (i AppEngineWebAppMap) ToAppEngineWebAppMapOutput() AppEngineWebAppMapOutput {
	return i.ToAppEngineWebAppMapOutputWithContext(context.Background())
}

func (i AppEngineWebAppMap) ToAppEngineWebAppMapOutputWithContext(ctx context.Context) AppEngineWebAppMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppEngineWebAppMapOutput)
}

type AppEngineWebAppOutput struct {
	*pulumi.OutputState
}

func (AppEngineWebAppOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AppEngineWebApp)(nil))
}

func (o AppEngineWebAppOutput) ToAppEngineWebAppOutput() AppEngineWebAppOutput {
	return o
}

func (o AppEngineWebAppOutput) ToAppEngineWebAppOutputWithContext(ctx context.Context) AppEngineWebAppOutput {
	return o
}

func (o AppEngineWebAppOutput) ToAppEngineWebAppPtrOutput() AppEngineWebAppPtrOutput {
	return o.ToAppEngineWebAppPtrOutputWithContext(context.Background())
}

func (o AppEngineWebAppOutput) ToAppEngineWebAppPtrOutputWithContext(ctx context.Context) AppEngineWebAppPtrOutput {
	return o.ApplyT(func(v AppEngineWebApp) *AppEngineWebApp {
		return &v
	}).(AppEngineWebAppPtrOutput)
}

type AppEngineWebAppPtrOutput struct {
	*pulumi.OutputState
}

func (AppEngineWebAppPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AppEngineWebApp)(nil))
}

func (o AppEngineWebAppPtrOutput) ToAppEngineWebAppPtrOutput() AppEngineWebAppPtrOutput {
	return o
}

func (o AppEngineWebAppPtrOutput) ToAppEngineWebAppPtrOutputWithContext(ctx context.Context) AppEngineWebAppPtrOutput {
	return o
}

type AppEngineWebAppArrayOutput struct{ *pulumi.OutputState }

func (AppEngineWebAppArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]AppEngineWebApp)(nil))
}

func (o AppEngineWebAppArrayOutput) ToAppEngineWebAppArrayOutput() AppEngineWebAppArrayOutput {
	return o
}

func (o AppEngineWebAppArrayOutput) ToAppEngineWebAppArrayOutputWithContext(ctx context.Context) AppEngineWebAppArrayOutput {
	return o
}

func (o AppEngineWebAppArrayOutput) Index(i pulumi.IntInput) AppEngineWebAppOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) AppEngineWebApp {
		return vs[0].([]AppEngineWebApp)[vs[1].(int)]
	}).(AppEngineWebAppOutput)
}

type AppEngineWebAppMapOutput struct{ *pulumi.OutputState }

func (AppEngineWebAppMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]AppEngineWebApp)(nil))
}

func (o AppEngineWebAppMapOutput) ToAppEngineWebAppMapOutput() AppEngineWebAppMapOutput {
	return o
}

func (o AppEngineWebAppMapOutput) ToAppEngineWebAppMapOutputWithContext(ctx context.Context) AppEngineWebAppMapOutput {
	return o
}

func (o AppEngineWebAppMapOutput) MapIndex(k pulumi.StringInput) AppEngineWebAppOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) AppEngineWebApp {
		return vs[0].(map[string]AppEngineWebApp)[vs[1].(string)]
	}).(AppEngineWebAppOutput)
}

func init() {
	pulumi.RegisterOutputType(AppEngineWebAppOutput{})
	pulumi.RegisterOutputType(AppEngineWebAppPtrOutput{})
	pulumi.RegisterOutputType(AppEngineWebAppArrayOutput{})
	pulumi.RegisterOutputType(AppEngineWebAppMapOutput{})
}
