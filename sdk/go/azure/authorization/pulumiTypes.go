// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package authorization

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type RoleDefinitionPermission struct {
	// One or more Allowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	Actions []string `pulumi:"actions"`
	// One or more Allowed Data Actions, such as `*`, `Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	DataActions []string `pulumi:"dataActions"`
	// One or more Disallowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	NotActions []string `pulumi:"notActions"`
	// One or more Disallowed Data Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	NotDataActions []string `pulumi:"notDataActions"`
}

type RoleDefinitionPermissionInput interface {
	pulumi.Input

	ToRoleDefinitionPermissionOutput() RoleDefinitionPermissionOutput
	ToRoleDefinitionPermissionOutputWithContext(context.Context) RoleDefinitionPermissionOutput
}

type RoleDefinitionPermissionArgs struct {
	// One or more Allowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	Actions pulumi.StringArrayInput `pulumi:"actions"`
	// One or more Allowed Data Actions, such as `*`, `Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	DataActions pulumi.StringArrayInput `pulumi:"dataActions"`
	// One or more Disallowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	NotActions pulumi.StringArrayInput `pulumi:"notActions"`
	// One or more Disallowed Data Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
	NotDataActions pulumi.StringArrayInput `pulumi:"notDataActions"`
}

func (RoleDefinitionPermissionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*RoleDefinitionPermission)(nil)).Elem()
}

func (i RoleDefinitionPermissionArgs) ToRoleDefinitionPermissionOutput() RoleDefinitionPermissionOutput {
	return i.ToRoleDefinitionPermissionOutputWithContext(context.Background())
}

func (i RoleDefinitionPermissionArgs) ToRoleDefinitionPermissionOutputWithContext(ctx context.Context) RoleDefinitionPermissionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RoleDefinitionPermissionOutput)
}

type RoleDefinitionPermissionArrayInput interface {
	pulumi.Input

	ToRoleDefinitionPermissionArrayOutput() RoleDefinitionPermissionArrayOutput
	ToRoleDefinitionPermissionArrayOutputWithContext(context.Context) RoleDefinitionPermissionArrayOutput
}

type RoleDefinitionPermissionArray []RoleDefinitionPermissionInput

func (RoleDefinitionPermissionArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]RoleDefinitionPermission)(nil)).Elem()
}

func (i RoleDefinitionPermissionArray) ToRoleDefinitionPermissionArrayOutput() RoleDefinitionPermissionArrayOutput {
	return i.ToRoleDefinitionPermissionArrayOutputWithContext(context.Background())
}

func (i RoleDefinitionPermissionArray) ToRoleDefinitionPermissionArrayOutputWithContext(ctx context.Context) RoleDefinitionPermissionArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RoleDefinitionPermissionArrayOutput)
}

type RoleDefinitionPermissionOutput struct{ *pulumi.OutputState }

func (RoleDefinitionPermissionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RoleDefinitionPermission)(nil)).Elem()
}

func (o RoleDefinitionPermissionOutput) ToRoleDefinitionPermissionOutput() RoleDefinitionPermissionOutput {
	return o
}

func (o RoleDefinitionPermissionOutput) ToRoleDefinitionPermissionOutputWithContext(ctx context.Context) RoleDefinitionPermissionOutput {
	return o
}

// One or more Allowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
func (o RoleDefinitionPermissionOutput) Actions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v RoleDefinitionPermission) []string { return v.Actions }).(pulumi.StringArrayOutput)
}

// One or more Allowed Data Actions, such as `*`, `Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
func (o RoleDefinitionPermissionOutput) DataActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v RoleDefinitionPermission) []string { return v.DataActions }).(pulumi.StringArrayOutput)
}

// One or more Disallowed Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
func (o RoleDefinitionPermissionOutput) NotActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v RoleDefinitionPermission) []string { return v.NotActions }).(pulumi.StringArrayOutput)
}

// One or more Disallowed Data Actions, such as `*`, `Microsoft.Resources/subscriptions/resourceGroups/read`. See ['Azure Resource Manager resource provider operations'](https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations) for details.
func (o RoleDefinitionPermissionOutput) NotDataActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v RoleDefinitionPermission) []string { return v.NotDataActions }).(pulumi.StringArrayOutput)
}

type RoleDefinitionPermissionArrayOutput struct{ *pulumi.OutputState }

func (RoleDefinitionPermissionArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]RoleDefinitionPermission)(nil)).Elem()
}

func (o RoleDefinitionPermissionArrayOutput) ToRoleDefinitionPermissionArrayOutput() RoleDefinitionPermissionArrayOutput {
	return o
}

func (o RoleDefinitionPermissionArrayOutput) ToRoleDefinitionPermissionArrayOutputWithContext(ctx context.Context) RoleDefinitionPermissionArrayOutput {
	return o
}

func (o RoleDefinitionPermissionArrayOutput) Index(i pulumi.IntInput) RoleDefinitionPermissionOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) RoleDefinitionPermission {
		return vs[0].([]RoleDefinitionPermission)[vs[1].(int)]
	}).(RoleDefinitionPermissionOutput)
}

type GetRoleDefinitionPermission struct {
	// a list of actions supported by this role
	Actions     []string `pulumi:"actions"`
	DataActions []string `pulumi:"dataActions"`
	// a list of actions which are denied by this role
	NotActions     []string `pulumi:"notActions"`
	NotDataActions []string `pulumi:"notDataActions"`
}

type GetRoleDefinitionPermissionInput interface {
	pulumi.Input

	ToGetRoleDefinitionPermissionOutput() GetRoleDefinitionPermissionOutput
	ToGetRoleDefinitionPermissionOutputWithContext(context.Context) GetRoleDefinitionPermissionOutput
}

type GetRoleDefinitionPermissionArgs struct {
	// a list of actions supported by this role
	Actions     pulumi.StringArrayInput `pulumi:"actions"`
	DataActions pulumi.StringArrayInput `pulumi:"dataActions"`
	// a list of actions which are denied by this role
	NotActions     pulumi.StringArrayInput `pulumi:"notActions"`
	NotDataActions pulumi.StringArrayInput `pulumi:"notDataActions"`
}

func (GetRoleDefinitionPermissionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetRoleDefinitionPermission)(nil)).Elem()
}

func (i GetRoleDefinitionPermissionArgs) ToGetRoleDefinitionPermissionOutput() GetRoleDefinitionPermissionOutput {
	return i.ToGetRoleDefinitionPermissionOutputWithContext(context.Background())
}

func (i GetRoleDefinitionPermissionArgs) ToGetRoleDefinitionPermissionOutputWithContext(ctx context.Context) GetRoleDefinitionPermissionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetRoleDefinitionPermissionOutput)
}

type GetRoleDefinitionPermissionArrayInput interface {
	pulumi.Input

	ToGetRoleDefinitionPermissionArrayOutput() GetRoleDefinitionPermissionArrayOutput
	ToGetRoleDefinitionPermissionArrayOutputWithContext(context.Context) GetRoleDefinitionPermissionArrayOutput
}

type GetRoleDefinitionPermissionArray []GetRoleDefinitionPermissionInput

func (GetRoleDefinitionPermissionArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetRoleDefinitionPermission)(nil)).Elem()
}

func (i GetRoleDefinitionPermissionArray) ToGetRoleDefinitionPermissionArrayOutput() GetRoleDefinitionPermissionArrayOutput {
	return i.ToGetRoleDefinitionPermissionArrayOutputWithContext(context.Background())
}

func (i GetRoleDefinitionPermissionArray) ToGetRoleDefinitionPermissionArrayOutputWithContext(ctx context.Context) GetRoleDefinitionPermissionArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetRoleDefinitionPermissionArrayOutput)
}

type GetRoleDefinitionPermissionOutput struct{ *pulumi.OutputState }

func (GetRoleDefinitionPermissionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetRoleDefinitionPermission)(nil)).Elem()
}

func (o GetRoleDefinitionPermissionOutput) ToGetRoleDefinitionPermissionOutput() GetRoleDefinitionPermissionOutput {
	return o
}

func (o GetRoleDefinitionPermissionOutput) ToGetRoleDefinitionPermissionOutputWithContext(ctx context.Context) GetRoleDefinitionPermissionOutput {
	return o
}

// a list of actions supported by this role
func (o GetRoleDefinitionPermissionOutput) Actions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v GetRoleDefinitionPermission) []string { return v.Actions }).(pulumi.StringArrayOutput)
}

func (o GetRoleDefinitionPermissionOutput) DataActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v GetRoleDefinitionPermission) []string { return v.DataActions }).(pulumi.StringArrayOutput)
}

// a list of actions which are denied by this role
func (o GetRoleDefinitionPermissionOutput) NotActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v GetRoleDefinitionPermission) []string { return v.NotActions }).(pulumi.StringArrayOutput)
}

func (o GetRoleDefinitionPermissionOutput) NotDataActions() pulumi.StringArrayOutput {
	return o.ApplyT(func(v GetRoleDefinitionPermission) []string { return v.NotDataActions }).(pulumi.StringArrayOutput)
}

type GetRoleDefinitionPermissionArrayOutput struct{ *pulumi.OutputState }

func (GetRoleDefinitionPermissionArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetRoleDefinitionPermission)(nil)).Elem()
}

func (o GetRoleDefinitionPermissionArrayOutput) ToGetRoleDefinitionPermissionArrayOutput() GetRoleDefinitionPermissionArrayOutput {
	return o
}

func (o GetRoleDefinitionPermissionArrayOutput) ToGetRoleDefinitionPermissionArrayOutputWithContext(ctx context.Context) GetRoleDefinitionPermissionArrayOutput {
	return o
}

func (o GetRoleDefinitionPermissionArrayOutput) Index(i pulumi.IntInput) GetRoleDefinitionPermissionOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) GetRoleDefinitionPermission {
		return vs[0].([]GetRoleDefinitionPermission)[vs[1].(int)]
	}).(GetRoleDefinitionPermissionOutput)
}

func init() {
	pulumi.RegisterOutputType(RoleDefinitionPermissionOutput{})
	pulumi.RegisterOutputType(RoleDefinitionPermissionArrayOutput{})
	pulumi.RegisterOutputType(GetRoleDefinitionPermissionOutput{})
	pulumi.RegisterOutputType(GetRoleDefinitionPermissionArrayOutput{})
}