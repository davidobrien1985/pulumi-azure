// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cosmosdb

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Table within a Cosmos DB Account.
type Table struct {
	pulumi.CustomResourceState

	// The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
	AccountName pulumi.StringOutput `pulumi:"accountName"`
	// Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
	Throughput pulumi.IntOutput `pulumi:"throughput"`
}

// NewTable registers a new resource with the given unique name, arguments, and options.
func NewTable(ctx *pulumi.Context,
	name string, args *TableArgs, opts ...pulumi.ResourceOption) (*Table, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &TableArgs{}
	}
	var resource Table
	err := ctx.RegisterResource("azure:cosmosdb/table:Table", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTable gets an existing Table resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TableState, opts ...pulumi.ResourceOption) (*Table, error) {
	var resource Table
	err := ctx.ReadResource("azure:cosmosdb/table:Table", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Table resources.
type tableState struct {
	// The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
	AccountName *string `pulumi:"accountName"`
	// Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
	Throughput *int `pulumi:"throughput"`
}

type TableState struct {
	// The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
	AccountName pulumi.StringPtrInput
	// Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
	Throughput pulumi.IntPtrInput
}

func (TableState) ElementType() reflect.Type {
	return reflect.TypeOf((*tableState)(nil)).Elem()
}

type tableArgs struct {
	// The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
	AccountName string `pulumi:"accountName"`
	// Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
	Throughput *int `pulumi:"throughput"`
}

// The set of arguments for constructing a Table resource.
type TableArgs struct {
	// The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
	AccountName pulumi.StringInput
	// Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
	Throughput pulumi.IntPtrInput
}

func (TableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*tableArgs)(nil)).Elem()
}
