// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package logicapps

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Logic App Workflow.
type Workflow struct {
	pulumi.CustomResourceState

	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint pulumi.StringOutput `pulumi:"accessEndpoint"`
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses pulumi.StringArrayOutput `pulumi:"connectorEndpointIpAddresses"`
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses pulumi.StringArrayOutput `pulumi:"connectorOutboundIpAddresses"`
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapOutput `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses pulumi.StringArrayOutput `pulumi:"workflowEndpointIpAddresses"`
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses pulumi.StringArrayOutput `pulumi:"workflowOutboundIpAddresses"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrOutput `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrOutput `pulumi:"workflowVersion"`
}

// NewWorkflow registers a new resource with the given unique name, arguments, and options.
func NewWorkflow(ctx *pulumi.Context,
	name string, args *WorkflowArgs, opts ...pulumi.ResourceOption) (*Workflow, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &WorkflowArgs{}
	}
	var resource Workflow
	err := ctx.RegisterResource("azure:logicapps/workflow:Workflow", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkflow gets an existing Workflow resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkflow(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkflowState, opts ...pulumi.ResourceOption) (*Workflow, error) {
	var resource Workflow
	err := ctx.ReadResource("azure:logicapps/workflow:Workflow", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Workflow resources.
type workflowState struct {
	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint *string `pulumi:"accessEndpoint"`
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses []string `pulumi:"connectorEndpointIpAddresses"`
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses []string `pulumi:"connectorOutboundIpAddresses"`
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses []string `pulumi:"workflowEndpointIpAddresses"`
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses []string `pulumi:"workflowOutboundIpAddresses"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema *string `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion *string `pulumi:"workflowVersion"`
}

type WorkflowState struct {
	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint pulumi.StringPtrInput
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses pulumi.StringArrayInput
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses pulumi.StringArrayInput
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapInput
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses pulumi.StringArrayInput
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses pulumi.StringArrayInput
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrInput
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrInput
}

func (WorkflowState) ElementType() reflect.Type {
	return reflect.TypeOf((*workflowState)(nil)).Elem()
}

type workflowArgs struct {
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema *string `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion *string `pulumi:"workflowVersion"`
}

// The set of arguments for constructing a Workflow resource.
type WorkflowArgs struct {
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapInput
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrInput
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrInput
}

func (WorkflowArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workflowArgs)(nil)).Elem()
}
