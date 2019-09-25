// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package bot

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Bot Connection.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/bot_connection.html.markdown.
type Connection struct {
	s *pulumi.ResourceState
}

// NewConnection registers a new resource with the given unique name, arguments, and options.
func NewConnection(ctx *pulumi.Context,
	name string, args *ConnectionArgs, opts ...pulumi.ResourceOpt) (*Connection, error) {
	if args == nil || args.BotName == nil {
		return nil, errors.New("missing required argument 'BotName'")
	}
	if args == nil || args.ClientId == nil {
		return nil, errors.New("missing required argument 'ClientId'")
	}
	if args == nil || args.ClientSecret == nil {
		return nil, errors.New("missing required argument 'ClientSecret'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServiceProviderName == nil {
		return nil, errors.New("missing required argument 'ServiceProviderName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["botName"] = nil
		inputs["clientId"] = nil
		inputs["clientSecret"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["parameters"] = nil
		inputs["resourceGroupName"] = nil
		inputs["scopes"] = nil
		inputs["serviceProviderName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["botName"] = args.BotName
		inputs["clientId"] = args.ClientId
		inputs["clientSecret"] = args.ClientSecret
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["parameters"] = args.Parameters
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["scopes"] = args.Scopes
		inputs["serviceProviderName"] = args.ServiceProviderName
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:bot/connection:Connection", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Connection{s: s}, nil
}

// GetConnection gets an existing Connection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConnection(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ConnectionState, opts ...pulumi.ResourceOpt) (*Connection, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["botName"] = state.BotName
		inputs["clientId"] = state.ClientId
		inputs["clientSecret"] = state.ClientSecret
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["parameters"] = state.Parameters
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["scopes"] = state.Scopes
		inputs["serviceProviderName"] = state.ServiceProviderName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:bot/connection:Connection", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Connection{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Connection) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Connection) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
func (r *Connection) BotName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["botName"])
}

// The Client ID that will be used to authenticate with the service provider.
func (r *Connection) ClientId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clientId"])
}

// The Client Secret that will be used to authenticate with the service provider.
func (r *Connection) ClientSecret() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clientSecret"])
}

// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Connection) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
func (r *Connection) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A map of additional parameters to apply to the connection.
func (r *Connection) Parameters() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["parameters"])
}

// The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
func (r *Connection) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The Scopes at which the connection should be applied.
func (r *Connection) Scopes() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["scopes"])
}

// The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
func (r *Connection) ServiceProviderName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["serviceProviderName"])
}

// A mapping of tags to assign to the resource.
func (r *Connection) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Connection resources.
type ConnectionState struct {
	// The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
	BotName interface{}
	// The Client ID that will be used to authenticate with the service provider.
	ClientId interface{}
	// The Client Secret that will be used to authenticate with the service provider.
	ClientSecret interface{}
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
	Name interface{}
	// A map of additional parameters to apply to the connection.
	Parameters interface{}
	// The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Scopes at which the connection should be applied.
	Scopes interface{}
	// The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
	ServiceProviderName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Connection resource.
type ConnectionArgs struct {
	// The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
	BotName interface{}
	// The Client ID that will be used to authenticate with the service provider.
	ClientId interface{}
	// The Client Secret that will be used to authenticate with the service provider.
	ClientSecret interface{}
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
	Name interface{}
	// A map of additional parameters to apply to the connection.
	Parameters interface{}
	// The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Scopes at which the connection should be applied.
	Scopes interface{}
	// The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
	ServiceProviderName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
