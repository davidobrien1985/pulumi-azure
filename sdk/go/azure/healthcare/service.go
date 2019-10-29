// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package healthcare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Healthcare Service Resource.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/healthcare_service.html.markdown.
type Service struct {
	s *pulumi.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOpt) (*Service, error) {
	if args == nil || args.AccessPolicyObjectIds == nil {
		return nil, errors.New("missing required argument 'AccessPolicyObjectIds'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accessPolicyObjectIds"] = nil
		inputs["authenticationConfiguration"] = nil
		inputs["corsConfiguration"] = nil
		inputs["cosmosdbThroughput"] = nil
		inputs["kind"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["accessPolicyObjectIds"] = args.AccessPolicyObjectIds
		inputs["authenticationConfiguration"] = args.AuthenticationConfiguration
		inputs["corsConfiguration"] = args.CorsConfiguration
		inputs["cosmosdbThroughput"] = args.CosmosdbThroughput
		inputs["kind"] = args.Kind
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:healthcare/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ServiceState, opts ...pulumi.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accessPolicyObjectIds"] = state.AccessPolicyObjectIds
		inputs["authenticationConfiguration"] = state.AuthenticationConfiguration
		inputs["corsConfiguration"] = state.CorsConfiguration
		inputs["cosmosdbThroughput"] = state.CosmosdbThroughput
		inputs["kind"] = state.Kind
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:healthcare/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Service) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *Service) AccessPolicyObjectIds() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["accessPolicyObjectIds"])
}

// An `authenticationConfiguration` block as defined below.
func (r *Service) AuthenticationConfiguration() *pulumi.Output {
	return r.s.State["authenticationConfiguration"]
}

// A `corsConfiguration` block as defined below.
func (r *Service) CorsConfiguration() *pulumi.Output {
	return r.s.State["corsConfiguration"]
}

// The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
func (r *Service) CosmosdbThroughput() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["cosmosdbThroughput"])
}

// The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
func (r *Service) Kind() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kind"])
}

// Specifies the supported Azure Region where the Service should be created.
func (r *Service) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// The name of the service instance. Used for service endpoint, must be unique within the audience.
func (r *Service) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the Resource Group in which to create the Service.
func (r *Service) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *Service) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	AccessPolicyObjectIds interface{}
	// An `authenticationConfiguration` block as defined below.
	AuthenticationConfiguration interface{}
	// A `corsConfiguration` block as defined below.
	CorsConfiguration interface{}
	// The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
	CosmosdbThroughput interface{}
	// The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
	Kind interface{}
	// Specifies the supported Azure Region where the Service should be created.
	Location interface{}
	// The name of the service instance. Used for service endpoint, must be unique within the audience.
	Name interface{}
	// The name of the Resource Group in which to create the Service.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	AccessPolicyObjectIds interface{}
	// An `authenticationConfiguration` block as defined below.
	AuthenticationConfiguration interface{}
	// A `corsConfiguration` block as defined below.
	CorsConfiguration interface{}
	// The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
	CosmosdbThroughput interface{}
	// The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
	Kind interface{}
	// Specifies the supported Azure Region where the Service should be created.
	Location interface{}
	// The name of the service instance. Used for service endpoint, must be unique within the audience.
	Name interface{}
	// The name of the Resource Group in which to create the Service.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
