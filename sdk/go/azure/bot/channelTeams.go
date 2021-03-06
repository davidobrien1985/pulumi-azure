// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package bot

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a MS Teams integration for a Bot Channel
//
// > **Note** A bot can only have a single MS Teams Channel associated with it.
type ChannelTeams struct {
	pulumi.CustomResourceState

	// The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
	BotName pulumi.StringOutput `pulumi:"botName"`
	// Specifies the webhook for Microsoft Teams channel calls.
	CallingWebHook pulumi.StringPtrOutput `pulumi:"callingWebHook"`
	// Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
	EnableCalling pulumi.BoolPtrOutput `pulumi:"enableCalling"`
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
}

// NewChannelTeams registers a new resource with the given unique name, arguments, and options.
func NewChannelTeams(ctx *pulumi.Context,
	name string, args *ChannelTeamsArgs, opts ...pulumi.ResourceOption) (*ChannelTeams, error) {
	if args == nil || args.BotName == nil {
		return nil, errors.New("missing required argument 'BotName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &ChannelTeamsArgs{}
	}
	var resource ChannelTeams
	err := ctx.RegisterResource("azure:bot/channelTeams:ChannelTeams", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetChannelTeams gets an existing ChannelTeams resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetChannelTeams(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ChannelTeamsState, opts ...pulumi.ResourceOption) (*ChannelTeams, error) {
	var resource ChannelTeams
	err := ctx.ReadResource("azure:bot/channelTeams:ChannelTeams", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ChannelTeams resources.
type channelTeamsState struct {
	// The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
	BotName *string `pulumi:"botName"`
	// Specifies the webhook for Microsoft Teams channel calls.
	CallingWebHook *string `pulumi:"callingWebHook"`
	// Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
	EnableCalling *bool `pulumi:"enableCalling"`
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
}

type ChannelTeamsState struct {
	// The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
	BotName pulumi.StringPtrInput
	// Specifies the webhook for Microsoft Teams channel calls.
	CallingWebHook pulumi.StringPtrInput
	// Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
	EnableCalling pulumi.BoolPtrInput
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
}

func (ChannelTeamsState) ElementType() reflect.Type {
	return reflect.TypeOf((*channelTeamsState)(nil)).Elem()
}

type channelTeamsArgs struct {
	// The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
	BotName string `pulumi:"botName"`
	// Specifies the webhook for Microsoft Teams channel calls.
	CallingWebHook *string `pulumi:"callingWebHook"`
	// Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
	EnableCalling *bool `pulumi:"enableCalling"`
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a ChannelTeams resource.
type ChannelTeamsArgs struct {
	// The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
	BotName pulumi.StringInput
	// Specifies the webhook for Microsoft Teams channel calls.
	CallingWebHook pulumi.StringPtrInput
	// Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
	EnableCalling pulumi.BoolPtrInput
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
}

func (ChannelTeamsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*channelTeamsArgs)(nil)).Elem()
}
