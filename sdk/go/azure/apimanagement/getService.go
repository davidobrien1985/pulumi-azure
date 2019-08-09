// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing API Management Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/api_management.html.markdown.
func LookupService(ctx *pulumi.Context, args *GetServiceArgs) (*GetServiceResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:apimanagement/getService:getService", inputs)
	if err != nil {
		return nil, err
	}
	return &GetServiceResult{
		AdditionalLocations: outputs["additionalLocations"],
		GatewayRegionalUrl: outputs["gatewayRegionalUrl"],
		GatewayUrl: outputs["gatewayUrl"],
		HostnameConfigurations: outputs["hostnameConfigurations"],
		Location: outputs["location"],
		ManagementApiUrl: outputs["managementApiUrl"],
		Name: outputs["name"],
		NotificationSenderEmail: outputs["notificationSenderEmail"],
		PortalUrl: outputs["portalUrl"],
		PublicIpAddresses: outputs["publicIpAddresses"],
		PublisherEmail: outputs["publisherEmail"],
		PublisherName: outputs["publisherName"],
		ResourceGroupName: outputs["resourceGroupName"],
		ScmUrl: outputs["scmUrl"],
		Sku: outputs["sku"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getService.
type GetServiceArgs struct {
	// The name of the API Management service.
	Name interface{}
	// The Name of the Resource Group in which the API Management Service exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getService.
type GetServiceResult struct {
	// One or more `additionalLocation` blocks as defined below
	AdditionalLocations interface{}
	// Gateway URL of the API Management service in the Region.
	GatewayRegionalUrl interface{}
	// The URL for the API Management Service's Gateway.
	GatewayUrl interface{}
	// A `hostnameConfiguration` block as defined below.
	HostnameConfigurations interface{}
	// The location name of the additional region among Azure Data center regions.
	Location interface{}
	// The URL for the Management API.
	ManagementApiUrl interface{}
	// Specifies the plan's pricing tier.
	Name interface{}
	// The email address from which the notification will be sent.
	NotificationSenderEmail interface{}
	// The URL of the Publisher Portal.
	PortalUrl interface{}
	// Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
	PublicIpAddresses interface{}
	// The email of Publisher/Company of the API Management Service.
	PublisherEmail interface{}
	// The name of the Publisher/Company of the API Management Service.
	PublisherName interface{}
	ResourceGroupName interface{}
	// The SCM (Source Code Management) endpoint.
	ScmUrl interface{}
	// A `sku` block as documented below.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
