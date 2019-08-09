// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Azure Firewall.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/firewall.html.markdown.
type Firewall struct {
	s *pulumi.ResourceState
}

// NewFirewall registers a new resource with the given unique name, arguments, and options.
func NewFirewall(ctx *pulumi.Context,
	name string, args *FirewallArgs, opts ...pulumi.ResourceOpt) (*Firewall, error) {
	if args == nil || args.IpConfiguration == nil {
		return nil, errors.New("missing required argument 'IpConfiguration'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["ipConfiguration"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["ipConfiguration"] = args.IpConfiguration
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:network/firewall:Firewall", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Firewall{s: s}, nil
}

// GetFirewall gets an existing Firewall resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFirewall(ctx *pulumi.Context,
	name string, id pulumi.ID, state *FirewallState, opts ...pulumi.ResourceOpt) (*Firewall, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["ipConfiguration"] = state.IpConfiguration
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:network/firewall:Firewall", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Firewall{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Firewall) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Firewall) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// A `ipConfiguration` block as documented below.
func (r *Firewall) IpConfiguration() *pulumi.Output {
	return r.s.State["ipConfiguration"]
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Firewall) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Firewall. Changing this forces a new resource to be created.
func (r *Firewall) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
func (r *Firewall) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *Firewall) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Firewall resources.
type FirewallState struct {
	// A `ipConfiguration` block as documented below.
	IpConfiguration interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Firewall. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Firewall resource.
type FirewallArgs struct {
	// A `ipConfiguration` block as documented below.
	IpConfiguration interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Firewall. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
