// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an EventGrid Domain
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventgrid_domain.html.markdown.
type EventGridDomain struct {
	s *pulumi.ResourceState
}

// NewEventGridDomain registers a new resource with the given unique name, arguments, and options.
func NewEventGridDomain(ctx *pulumi.Context,
	name string, args *EventGridDomainArgs, opts ...pulumi.ResourceOpt) (*EventGridDomain, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["inputMappingDefaultValues"] = nil
		inputs["inputMappingFields"] = nil
		inputs["inputSchema"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["inputMappingDefaultValues"] = args.InputMappingDefaultValues
		inputs["inputMappingFields"] = args.InputMappingFields
		inputs["inputSchema"] = args.InputSchema
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["endpoint"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/eventGridDomain:EventGridDomain", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridDomain{s: s}, nil
}

// GetEventGridDomain gets an existing EventGridDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventGridDomain(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EventGridDomainState, opts ...pulumi.ResourceOpt) (*EventGridDomain, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["endpoint"] = state.Endpoint
		inputs["inputMappingDefaultValues"] = state.InputMappingDefaultValues
		inputs["inputMappingFields"] = state.InputMappingFields
		inputs["inputSchema"] = state.InputSchema
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:eventhub/eventGridDomain:EventGridDomain", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridDomain{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EventGridDomain) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventGridDomain) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The Endpoint associated with the EventGrid Domain.
func (r *EventGridDomain) Endpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["endpoint"])
}

// A `inputMappingDefaultValues` block as defined below.
func (r *EventGridDomain) InputMappingDefaultValues() *pulumi.Output {
	return r.s.State["inputMappingDefaultValues"]
}

// A `inputMappingFields` block as defined below.
func (r *EventGridDomain) InputMappingFields() *pulumi.Output {
	return r.s.State["inputMappingFields"]
}

// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
func (r *EventGridDomain) InputSchema() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["inputSchema"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *EventGridDomain) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
func (r *EventGridDomain) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
func (r *EventGridDomain) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *EventGridDomain) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering EventGridDomain resources.
type EventGridDomainState struct {
	// The Endpoint associated with the EventGrid Domain.
	Endpoint interface{}
	// A `inputMappingDefaultValues` block as defined below.
	InputMappingDefaultValues interface{}
	// A `inputMappingFields` block as defined below.
	InputMappingFields interface{}
	// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
	InputSchema interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a EventGridDomain resource.
type EventGridDomainArgs struct {
	// A `inputMappingDefaultValues` block as defined below.
	InputMappingDefaultValues interface{}
	// A `inputMappingFields` block as defined below.
	InputMappingFields interface{}
	// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
	InputSchema interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
