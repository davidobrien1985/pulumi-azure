// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to access information about an existing Batch Account.
func LookupAccount(ctx *pulumi.Context, args *LookupAccountArgs, opts ...pulumi.InvokeOption) (*LookupAccountResult, error) {
	var rv LookupAccountResult
	err := ctx.Invoke("azure:batch/getAccount:getAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getAccount.
type LookupAccountArgs struct {
	// The name of the Batch account.
	Name string `pulumi:"name"`
	// The Name of the Resource Group where this Batch account exists.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A collection of values returned by getAccount.
type LookupAccountResult struct {
	// The account endpoint used to interact with the Batch service.
	AccountEndpoint string `pulumi:"accountEndpoint"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The `keyVaultReference` block that describes the Azure KeyVault reference to use when deploying the Azure Batch account using the `UserSubscription` pool allocation mode.
	KeyVaultReferences []GetAccountKeyVaultReference `pulumi:"keyVaultReferences"`
	// The Azure Region in which this Batch account exists.
	Location string `pulumi:"location"`
	// The Batch account name.
	Name string `pulumi:"name"`
	// The pool allocation mode configured for this Batch account.
	PoolAllocationMode string `pulumi:"poolAllocationMode"`
	// The Batch account primary access key.
	PrimaryAccessKey  string `pulumi:"primaryAccessKey"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Batch account secondary access key.
	SecondaryAccessKey string `pulumi:"secondaryAccessKey"`
	// The ID of the Storage Account used for this Batch account.
	StorageAccountId string `pulumi:"storageAccountId"`
	// A map of tags assigned to the Batch account.
	Tags map[string]string `pulumi:"tags"`
}
