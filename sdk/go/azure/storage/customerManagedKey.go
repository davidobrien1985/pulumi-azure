// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Customer Managed Key for a Storage Account.
type CustomerManagedKey struct {
	pulumi.CustomResourceState

	// The name of Key Vault Key.
	KeyName pulumi.StringOutput `pulumi:"keyName"`
	// The ID of the Key Vault. Changing this forces a new resource to be created.
	KeyVaultId pulumi.StringOutput `pulumi:"keyVaultId"`
	// The version of Key Vault Key.
	KeyVersion pulumi.StringOutput `pulumi:"keyVersion"`
	// The ID of the Storage Account. Changing this forces a new resource to be created.
	StorageAccountId pulumi.StringOutput `pulumi:"storageAccountId"`
}

// NewCustomerManagedKey registers a new resource with the given unique name, arguments, and options.
func NewCustomerManagedKey(ctx *pulumi.Context,
	name string, args *CustomerManagedKeyArgs, opts ...pulumi.ResourceOption) (*CustomerManagedKey, error) {
	if args == nil || args.KeyName == nil {
		return nil, errors.New("missing required argument 'KeyName'")
	}
	if args == nil || args.KeyVaultId == nil {
		return nil, errors.New("missing required argument 'KeyVaultId'")
	}
	if args == nil || args.KeyVersion == nil {
		return nil, errors.New("missing required argument 'KeyVersion'")
	}
	if args == nil || args.StorageAccountId == nil {
		return nil, errors.New("missing required argument 'StorageAccountId'")
	}
	if args == nil {
		args = &CustomerManagedKeyArgs{}
	}
	var resource CustomerManagedKey
	err := ctx.RegisterResource("azure:storage/customerManagedKey:CustomerManagedKey", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomerManagedKey gets an existing CustomerManagedKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomerManagedKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomerManagedKeyState, opts ...pulumi.ResourceOption) (*CustomerManagedKey, error) {
	var resource CustomerManagedKey
	err := ctx.ReadResource("azure:storage/customerManagedKey:CustomerManagedKey", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomerManagedKey resources.
type customerManagedKeyState struct {
	// The name of Key Vault Key.
	KeyName *string `pulumi:"keyName"`
	// The ID of the Key Vault. Changing this forces a new resource to be created.
	KeyVaultId *string `pulumi:"keyVaultId"`
	// The version of Key Vault Key.
	KeyVersion *string `pulumi:"keyVersion"`
	// The ID of the Storage Account. Changing this forces a new resource to be created.
	StorageAccountId *string `pulumi:"storageAccountId"`
}

type CustomerManagedKeyState struct {
	// The name of Key Vault Key.
	KeyName pulumi.StringPtrInput
	// The ID of the Key Vault. Changing this forces a new resource to be created.
	KeyVaultId pulumi.StringPtrInput
	// The version of Key Vault Key.
	KeyVersion pulumi.StringPtrInput
	// The ID of the Storage Account. Changing this forces a new resource to be created.
	StorageAccountId pulumi.StringPtrInput
}

func (CustomerManagedKeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*customerManagedKeyState)(nil)).Elem()
}

type customerManagedKeyArgs struct {
	// The name of Key Vault Key.
	KeyName string `pulumi:"keyName"`
	// The ID of the Key Vault. Changing this forces a new resource to be created.
	KeyVaultId string `pulumi:"keyVaultId"`
	// The version of Key Vault Key.
	KeyVersion string `pulumi:"keyVersion"`
	// The ID of the Storage Account. Changing this forces a new resource to be created.
	StorageAccountId string `pulumi:"storageAccountId"`
}

// The set of arguments for constructing a CustomerManagedKey resource.
type CustomerManagedKeyArgs struct {
	// The name of Key Vault Key.
	KeyName pulumi.StringInput
	// The ID of the Key Vault. Changing this forces a new resource to be created.
	KeyVaultId pulumi.StringInput
	// The version of Key Vault Key.
	KeyVersion pulumi.StringInput
	// The ID of the Storage Account. Changing this forces a new resource to be created.
	StorageAccountId pulumi.StringInput
}

func (CustomerManagedKeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customerManagedKeyArgs)(nil)).Elem()
}
