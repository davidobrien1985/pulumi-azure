// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Authorization Rule for an Event Hub Namespace.
type EventHubNamespaceAuthorizationRule struct {
	s *pulumi.ResourceState
}

// NewEventHubNamespaceAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewEventHubNamespaceAuthorizationRule(ctx *pulumi.Context,
	name string, args *EventHubNamespaceAuthorizationRuleArgs, opts ...pulumi.ResourceOpt) (*EventHubNamespaceAuthorizationRule, error) {
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["listen"] = nil
		inputs["location"] = nil
		inputs["manage"] = nil
		inputs["name"] = nil
		inputs["namespaceName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["send"] = nil
	} else {
		inputs["listen"] = args.Listen
		inputs["location"] = args.Location
		inputs["manage"] = args.Manage
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["send"] = args.Send
	}
	inputs["primaryConnectionString"] = nil
	inputs["primaryKey"] = nil
	inputs["secondaryConnectionString"] = nil
	inputs["secondaryKey"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/eventHubNamespaceAuthorizationRule:EventHubNamespaceAuthorizationRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHubNamespaceAuthorizationRule{s: s}, nil
}

// GetEventHubNamespaceAuthorizationRule gets an existing EventHubNamespaceAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHubNamespaceAuthorizationRule(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EventHubNamespaceAuthorizationRuleState, opts ...pulumi.ResourceOpt) (*EventHubNamespaceAuthorizationRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["listen"] = state.Listen
		inputs["location"] = state.Location
		inputs["manage"] = state.Manage
		inputs["name"] = state.Name
		inputs["namespaceName"] = state.NamespaceName
		inputs["primaryConnectionString"] = state.PrimaryConnectionString
		inputs["primaryKey"] = state.PrimaryKey
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryConnectionString"] = state.SecondaryConnectionString
		inputs["secondaryKey"] = state.SecondaryKey
		inputs["send"] = state.Send
	}
	s, err := ctx.ReadResource("azure:eventhub/eventHubNamespaceAuthorizationRule:EventHubNamespaceAuthorizationRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHubNamespaceAuthorizationRule{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EventHubNamespaceAuthorizationRule) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventHubNamespaceAuthorizationRule) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Grants listen access to this this Authorization Rule. Defaults to `false`.
func (r *EventHubNamespaceAuthorizationRule) Listen() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["listen"])
}

func (r *EventHubNamespaceAuthorizationRule) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
func (r *EventHubNamespaceAuthorizationRule) Manage() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["manage"])
}

// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
func (r *EventHubNamespaceAuthorizationRule) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
func (r *EventHubNamespaceAuthorizationRule) NamespaceName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["namespaceName"])
}

// The Primary Connection String for the Authorization Rule.
func (r *EventHubNamespaceAuthorizationRule) PrimaryConnectionString() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryConnectionString"])
}

// The Primary Key for the Authorization Rule.
func (r *EventHubNamespaceAuthorizationRule) PrimaryKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryKey"])
}

// The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
func (r *EventHubNamespaceAuthorizationRule) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The Secondary Connection String for the Authorization Rule.
func (r *EventHubNamespaceAuthorizationRule) SecondaryConnectionString() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryConnectionString"])
}

// The Secondary Key for the Authorization Rule.
func (r *EventHubNamespaceAuthorizationRule) SecondaryKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryKey"])
}

// Grants send access to this this Authorization Rule. Defaults to `false`.
func (r *EventHubNamespaceAuthorizationRule) Send() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["send"])
}

// Input properties used for looking up and filtering EventHubNamespaceAuthorizationRule resources.
type EventHubNamespaceAuthorizationRuleState struct {
	// Grants listen access to this this Authorization Rule. Defaults to `false`.
	Listen interface{}
	Location interface{}
	// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The Primary Connection String for the Authorization Rule.
	PrimaryConnectionString interface{}
	// The Primary Key for the Authorization Rule.
	PrimaryKey interface{}
	// The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Secondary Connection String for the Authorization Rule.
	SecondaryConnectionString interface{}
	// The Secondary Key for the Authorization Rule.
	SecondaryKey interface{}
	// Grants send access to this this Authorization Rule. Defaults to `false`.
	Send interface{}
}

// The set of arguments for constructing a EventHubNamespaceAuthorizationRule resource.
type EventHubNamespaceAuthorizationRuleArgs struct {
	// Grants listen access to this this Authorization Rule. Defaults to `false`.
	Listen interface{}
	Location interface{}
	// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Grants send access to this this Authorization Rule. Defaults to `false`.
	Send interface{}
}