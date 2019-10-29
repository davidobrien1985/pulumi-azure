// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about existing resources.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/resources.html.markdown.
func LookupResources(ctx *pulumi.Context, args *GetResourcesArgs) (*GetResourcesResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["requiredTags"] = args.RequiredTags
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["type"] = args.Type
	}
	outputs, err := ctx.Invoke("azure:core/getResources:getResources", inputs)
	if err != nil {
		return nil, err
	}
	return &GetResourcesResult{
		Name: outputs["name"],
		RequiredTags: outputs["requiredTags"],
		ResourceGroupName: outputs["resourceGroupName"],
		Resources: outputs["resources"],
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getResources.
type GetResourcesArgs struct {
	// The name of the Resource.
	Name interface{}
	// A mapping of tags which the resource has to have in order to be included in the result.
	RequiredTags interface{}
	// The name of the Resource group where the Resources are located.
	ResourceGroupName interface{}
	// The Resource Type of the Resources you want to list (e.g. `Microsoft.Network/virtualNetworks`). A full list of available Resource Types can be found [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/azure-services-resource-providers).
	Type interface{}
}

// A collection of values returned by getResources.
type GetResourcesResult struct {
	// The name of this resource.
	Name interface{}
	RequiredTags interface{}
	ResourceGroupName interface{}
	// One or more `resource` blocks as defined below.
	Resources interface{}
	// The type of this resoource.
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
