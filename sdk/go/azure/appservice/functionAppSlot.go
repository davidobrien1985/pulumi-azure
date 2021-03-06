// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appservice

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Function App deployment Slot.
type FunctionAppSlot struct {
	pulumi.CustomResourceState

	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringOutput `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapOutput `pulumi:"appSettings"`
	// An `authSettings` block as defined below.
	AuthSettings FunctionAppSlotAuthSettingsOutput `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolOutput `pulumi:"clientAffinityEnabled"`
	// A `connectionString` block as defined below.
	ConnectionStrings FunctionAppSlotConnectionStringArrayOutput `pulumi:"connectionStrings"`
	// The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
	DailyMemoryTimeQuota pulumi.IntPtrOutput `pulumi:"dailyMemoryTimeQuota"`
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname pulumi.StringOutput `pulumi:"defaultHostname"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrOutput `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled         pulumi.BoolPtrOutput `pulumi:"enabled"`
	FunctionAppName pulumi.StringOutput  `pulumi:"functionAppName"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrOutput `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity FunctionAppSlotIdentityOutput `pulumi:"identity"`
	// The Function App kind - such as `functionapp,linux,container`
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the Function App. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A string indicating the Operating System type for this function app.
	OsType pulumi.StringPtrOutput `pulumi:"osType"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses pulumi.StringOutput `pulumi:"outboundIpAddresses"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses pulumi.StringOutput `pulumi:"possibleOutboundIpAddresses"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig FunctionAppSlotSiteConfigOutput `pulumi:"siteConfig"`
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredentials         FunctionAppSlotSiteCredentialArrayOutput `pulumi:"siteCredentials"`
	StorageAccountAccessKey pulumi.StringOutput                      `pulumi:"storageAccountAccessKey"`
	StorageAccountName      pulumi.StringOutput                      `pulumi:"storageAccountName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewFunctionAppSlot registers a new resource with the given unique name, arguments, and options.
func NewFunctionAppSlot(ctx *pulumi.Context,
	name string, args *FunctionAppSlotArgs, opts ...pulumi.ResourceOption) (*FunctionAppSlot, error) {
	if args == nil || args.AppServicePlanId == nil {
		return nil, errors.New("missing required argument 'AppServicePlanId'")
	}
	if args == nil || args.FunctionAppName == nil {
		return nil, errors.New("missing required argument 'FunctionAppName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageAccountAccessKey == nil {
		return nil, errors.New("missing required argument 'StorageAccountAccessKey'")
	}
	if args == nil || args.StorageAccountName == nil {
		return nil, errors.New("missing required argument 'StorageAccountName'")
	}
	if args == nil {
		args = &FunctionAppSlotArgs{}
	}
	var resource FunctionAppSlot
	err := ctx.RegisterResource("azure:appservice/functionAppSlot:FunctionAppSlot", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFunctionAppSlot gets an existing FunctionAppSlot resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFunctionAppSlot(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FunctionAppSlotState, opts ...pulumi.ResourceOption) (*FunctionAppSlot, error) {
	var resource FunctionAppSlot
	err := ctx.ReadResource("azure:appservice/functionAppSlot:FunctionAppSlot", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering FunctionAppSlot resources.
type functionAppSlotState struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId *string `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings map[string]string `pulumi:"appSettings"`
	// An `authSettings` block as defined below.
	AuthSettings *FunctionAppSlotAuthSettings `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// A `connectionString` block as defined below.
	ConnectionStrings []FunctionAppSlotConnectionString `pulumi:"connectionStrings"`
	// The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
	DailyMemoryTimeQuota *int `pulumi:"dailyMemoryTimeQuota"`
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname *string `pulumi:"defaultHostname"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging *bool `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled         *bool   `pulumi:"enabled"`
	FunctionAppName *string `pulumi:"functionAppName"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity *FunctionAppSlotIdentity `pulumi:"identity"`
	// The Function App kind - such as `functionapp,linux,container`
	Kind *string `pulumi:"kind"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Function App. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A string indicating the Operating System type for this function app.
	OsType *string `pulumi:"osType"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses *string `pulumi:"outboundIpAddresses"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses *string `pulumi:"possibleOutboundIpAddresses"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig *FunctionAppSlotSiteConfig `pulumi:"siteConfig"`
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredentials         []FunctionAppSlotSiteCredential `pulumi:"siteCredentials"`
	StorageAccountAccessKey *string                         `pulumi:"storageAccountAccessKey"`
	StorageAccountName      *string                         `pulumi:"storageAccountName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version *string `pulumi:"version"`
}

type FunctionAppSlotState struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringPtrInput
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapInput
	// An `authSettings` block as defined below.
	AuthSettings FunctionAppSlotAuthSettingsPtrInput
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolPtrInput
	// A `connectionString` block as defined below.
	ConnectionStrings FunctionAppSlotConnectionStringArrayInput
	// The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
	DailyMemoryTimeQuota pulumi.IntPtrInput
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname pulumi.StringPtrInput
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrInput
	// Is the Function App enabled?
	Enabled         pulumi.BoolPtrInput
	FunctionAppName pulumi.StringPtrInput
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrInput
	// An `identity` block as defined below.
	Identity FunctionAppSlotIdentityPtrInput
	// The Function App kind - such as `functionapp,linux,container`
	Kind pulumi.StringPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Function App. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A string indicating the Operating System type for this function app.
	OsType pulumi.StringPtrInput
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses pulumi.StringPtrInput
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses pulumi.StringPtrInput
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringPtrInput
	// A `siteConfig` object as defined below.
	SiteConfig FunctionAppSlotSiteConfigPtrInput
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredentials         FunctionAppSlotSiteCredentialArrayInput
	StorageAccountAccessKey pulumi.StringPtrInput
	StorageAccountName      pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrInput
}

func (FunctionAppSlotState) ElementType() reflect.Type {
	return reflect.TypeOf((*functionAppSlotState)(nil)).Elem()
}

type functionAppSlotArgs struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId string `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings map[string]string `pulumi:"appSettings"`
	// An `authSettings` block as defined below.
	AuthSettings *FunctionAppSlotAuthSettings `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// A `connectionString` block as defined below.
	ConnectionStrings []FunctionAppSlotConnectionString `pulumi:"connectionStrings"`
	// The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
	DailyMemoryTimeQuota *int `pulumi:"dailyMemoryTimeQuota"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging *bool `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled         *bool  `pulumi:"enabled"`
	FunctionAppName string `pulumi:"functionAppName"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity *FunctionAppSlotIdentity `pulumi:"identity"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Function App. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A string indicating the Operating System type for this function app.
	OsType *string `pulumi:"osType"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig              *FunctionAppSlotSiteConfig `pulumi:"siteConfig"`
	StorageAccountAccessKey string                     `pulumi:"storageAccountAccessKey"`
	StorageAccountName      string                     `pulumi:"storageAccountName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version *string `pulumi:"version"`
}

// The set of arguments for constructing a FunctionAppSlot resource.
type FunctionAppSlotArgs struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringInput
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapInput
	// An `authSettings` block as defined below.
	AuthSettings FunctionAppSlotAuthSettingsPtrInput
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolPtrInput
	// A `connectionString` block as defined below.
	ConnectionStrings FunctionAppSlotConnectionStringArrayInput
	// The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
	DailyMemoryTimeQuota pulumi.IntPtrInput
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrInput
	// Is the Function App enabled?
	Enabled         pulumi.BoolPtrInput
	FunctionAppName pulumi.StringInput
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrInput
	// An `identity` block as defined below.
	Identity FunctionAppSlotIdentityPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Function App. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A string indicating the Operating System type for this function app.
	OsType pulumi.StringPtrInput
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringInput
	// A `siteConfig` object as defined below.
	SiteConfig              FunctionAppSlotSiteConfigPtrInput
	StorageAccountAccessKey pulumi.StringInput
	StorageAccountName      pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrInput
}

func (FunctionAppSlotArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*functionAppSlotArgs)(nil)).Elem()
}
