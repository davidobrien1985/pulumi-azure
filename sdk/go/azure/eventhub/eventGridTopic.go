// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an EventGrid Topic
//
// > **Note:** at this time EventGrid Topic's are only available in a limited number of regions.
//
//
//
// Deprecated: azure.eventhub.EventGridTopic has been deprecated in favour of azure.eventgrid.Topic
type EventGridTopic struct {
	pulumi.CustomResourceState

	// The Endpoint associated with the EventGrid Topic.
	Endpoint pulumi.StringOutput `pulumi:"endpoint"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The Primary Shared Access Key associated with the EventGrid Topic.
	PrimaryAccessKey pulumi.StringOutput `pulumi:"primaryAccessKey"`
	// The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The Secondary Shared Access Key associated with the EventGrid Topic.
	SecondaryAccessKey pulumi.StringOutput `pulumi:"secondaryAccessKey"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewEventGridTopic registers a new resource with the given unique name, arguments, and options.
func NewEventGridTopic(ctx *pulumi.Context,
	name string, args *EventGridTopicArgs, opts ...pulumi.ResourceOption) (*EventGridTopic, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &EventGridTopicArgs{}
	}
	var resource EventGridTopic
	err := ctx.RegisterResource("azure:eventhub/eventGridTopic:EventGridTopic", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEventGridTopic gets an existing EventGridTopic resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventGridTopic(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EventGridTopicState, opts ...pulumi.ResourceOption) (*EventGridTopic, error) {
	var resource EventGridTopic
	err := ctx.ReadResource("azure:eventhub/eventGridTopic:EventGridTopic", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EventGridTopic resources.
type eventGridTopicState struct {
	// The Endpoint associated with the EventGrid Topic.
	Endpoint *string `pulumi:"endpoint"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The Primary Shared Access Key associated with the EventGrid Topic.
	PrimaryAccessKey *string `pulumi:"primaryAccessKey"`
	// The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The Secondary Shared Access Key associated with the EventGrid Topic.
	SecondaryAccessKey *string `pulumi:"secondaryAccessKey"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

type EventGridTopicState struct {
	// The Endpoint associated with the EventGrid Topic.
	Endpoint pulumi.StringPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The Primary Shared Access Key associated with the EventGrid Topic.
	PrimaryAccessKey pulumi.StringPtrInput
	// The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The Secondary Shared Access Key associated with the EventGrid Topic.
	SecondaryAccessKey pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (EventGridTopicState) ElementType() reflect.Type {
	return reflect.TypeOf((*eventGridTopicState)(nil)).Elem()
}

type eventGridTopicArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a EventGridTopic resource.
type EventGridTopicArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (EventGridTopicArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*eventGridTopicArgs)(nil)).Elem()
}
