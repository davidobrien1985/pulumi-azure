// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datashare

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type AccountIdentity struct {
	// The Principal ID for the Service Principal associated with the Identity of this Data Share Account.
	PrincipalId *string `pulumi:"principalId"`
	// The Tenant ID for the Service Principal associated with the Identity of this Data Share Account.
	TenantId *string `pulumi:"tenantId"`
	// Specifies the identity type of the Data Share Account. At this time the only allowed value is `SystemAssigned`.
	Type string `pulumi:"type"`
}

// AccountIdentityInput is an input type that accepts AccountIdentityArgs and AccountIdentityOutput values.
// You can construct a concrete instance of `AccountIdentityInput` via:
//
// 		 AccountIdentityArgs{...}
//
type AccountIdentityInput interface {
	pulumi.Input

	ToAccountIdentityOutput() AccountIdentityOutput
	ToAccountIdentityOutputWithContext(context.Context) AccountIdentityOutput
}

type AccountIdentityArgs struct {
	// The Principal ID for the Service Principal associated with the Identity of this Data Share Account.
	PrincipalId pulumi.StringPtrInput `pulumi:"principalId"`
	// The Tenant ID for the Service Principal associated with the Identity of this Data Share Account.
	TenantId pulumi.StringPtrInput `pulumi:"tenantId"`
	// Specifies the identity type of the Data Share Account. At this time the only allowed value is `SystemAssigned`.
	Type pulumi.StringInput `pulumi:"type"`
}

func (AccountIdentityArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AccountIdentity)(nil)).Elem()
}

func (i AccountIdentityArgs) ToAccountIdentityOutput() AccountIdentityOutput {
	return i.ToAccountIdentityOutputWithContext(context.Background())
}

func (i AccountIdentityArgs) ToAccountIdentityOutputWithContext(ctx context.Context) AccountIdentityOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountIdentityOutput)
}

func (i AccountIdentityArgs) ToAccountIdentityPtrOutput() AccountIdentityPtrOutput {
	return i.ToAccountIdentityPtrOutputWithContext(context.Background())
}

func (i AccountIdentityArgs) ToAccountIdentityPtrOutputWithContext(ctx context.Context) AccountIdentityPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountIdentityOutput).ToAccountIdentityPtrOutputWithContext(ctx)
}

// AccountIdentityPtrInput is an input type that accepts AccountIdentityArgs, AccountIdentityPtr and AccountIdentityPtrOutput values.
// You can construct a concrete instance of `AccountIdentityPtrInput` via:
//
// 		 AccountIdentityArgs{...}
//
//  or:
//
// 		 nil
//
type AccountIdentityPtrInput interface {
	pulumi.Input

	ToAccountIdentityPtrOutput() AccountIdentityPtrOutput
	ToAccountIdentityPtrOutputWithContext(context.Context) AccountIdentityPtrOutput
}

type accountIdentityPtrType AccountIdentityArgs

func AccountIdentityPtr(v *AccountIdentityArgs) AccountIdentityPtrInput {
	return (*accountIdentityPtrType)(v)
}

func (*accountIdentityPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**AccountIdentity)(nil)).Elem()
}

func (i *accountIdentityPtrType) ToAccountIdentityPtrOutput() AccountIdentityPtrOutput {
	return i.ToAccountIdentityPtrOutputWithContext(context.Background())
}

func (i *accountIdentityPtrType) ToAccountIdentityPtrOutputWithContext(ctx context.Context) AccountIdentityPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountIdentityPtrOutput)
}

type AccountIdentityOutput struct{ *pulumi.OutputState }

func (AccountIdentityOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AccountIdentity)(nil)).Elem()
}

func (o AccountIdentityOutput) ToAccountIdentityOutput() AccountIdentityOutput {
	return o
}

func (o AccountIdentityOutput) ToAccountIdentityOutputWithContext(ctx context.Context) AccountIdentityOutput {
	return o
}

func (o AccountIdentityOutput) ToAccountIdentityPtrOutput() AccountIdentityPtrOutput {
	return o.ToAccountIdentityPtrOutputWithContext(context.Background())
}

func (o AccountIdentityOutput) ToAccountIdentityPtrOutputWithContext(ctx context.Context) AccountIdentityPtrOutput {
	return o.ApplyT(func(v AccountIdentity) *AccountIdentity {
		return &v
	}).(AccountIdentityPtrOutput)
}

// The Principal ID for the Service Principal associated with the Identity of this Data Share Account.
func (o AccountIdentityOutput) PrincipalId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AccountIdentity) *string { return v.PrincipalId }).(pulumi.StringPtrOutput)
}

// The Tenant ID for the Service Principal associated with the Identity of this Data Share Account.
func (o AccountIdentityOutput) TenantId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AccountIdentity) *string { return v.TenantId }).(pulumi.StringPtrOutput)
}

// Specifies the identity type of the Data Share Account. At this time the only allowed value is `SystemAssigned`.
func (o AccountIdentityOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v AccountIdentity) string { return v.Type }).(pulumi.StringOutput)
}

type AccountIdentityPtrOutput struct{ *pulumi.OutputState }

func (AccountIdentityPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AccountIdentity)(nil)).Elem()
}

func (o AccountIdentityPtrOutput) ToAccountIdentityPtrOutput() AccountIdentityPtrOutput {
	return o
}

func (o AccountIdentityPtrOutput) ToAccountIdentityPtrOutputWithContext(ctx context.Context) AccountIdentityPtrOutput {
	return o
}

func (o AccountIdentityPtrOutput) Elem() AccountIdentityOutput {
	return o.ApplyT(func(v *AccountIdentity) AccountIdentity { return *v }).(AccountIdentityOutput)
}

// The Principal ID for the Service Principal associated with the Identity of this Data Share Account.
func (o AccountIdentityPtrOutput) PrincipalId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *AccountIdentity) *string {
		if v == nil {
			return nil
		}
		return v.PrincipalId
	}).(pulumi.StringPtrOutput)
}

// The Tenant ID for the Service Principal associated with the Identity of this Data Share Account.
func (o AccountIdentityPtrOutput) TenantId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *AccountIdentity) *string {
		if v == nil {
			return nil
		}
		return v.TenantId
	}).(pulumi.StringPtrOutput)
}

// Specifies the identity type of the Data Share Account. At this time the only allowed value is `SystemAssigned`.
func (o AccountIdentityPtrOutput) Type() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *AccountIdentity) *string {
		if v == nil {
			return nil
		}
		return &v.Type
	}).(pulumi.StringPtrOutput)
}

type GetAccountIdentity struct {
	// The ID of the Principal (Client) in Azure Active Directory.
	PrincipalId string `pulumi:"principalId"`
	// The ID of the Azure Active Directory Tenant.
	TenantId string `pulumi:"tenantId"`
	// The identity type of the Data Share Account.
	Type string `pulumi:"type"`
}

// GetAccountIdentityInput is an input type that accepts GetAccountIdentityArgs and GetAccountIdentityOutput values.
// You can construct a concrete instance of `GetAccountIdentityInput` via:
//
// 		 GetAccountIdentityArgs{...}
//
type GetAccountIdentityInput interface {
	pulumi.Input

	ToGetAccountIdentityOutput() GetAccountIdentityOutput
	ToGetAccountIdentityOutputWithContext(context.Context) GetAccountIdentityOutput
}

type GetAccountIdentityArgs struct {
	// The ID of the Principal (Client) in Azure Active Directory.
	PrincipalId pulumi.StringInput `pulumi:"principalId"`
	// The ID of the Azure Active Directory Tenant.
	TenantId pulumi.StringInput `pulumi:"tenantId"`
	// The identity type of the Data Share Account.
	Type pulumi.StringInput `pulumi:"type"`
}

func (GetAccountIdentityArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetAccountIdentity)(nil)).Elem()
}

func (i GetAccountIdentityArgs) ToGetAccountIdentityOutput() GetAccountIdentityOutput {
	return i.ToGetAccountIdentityOutputWithContext(context.Background())
}

func (i GetAccountIdentityArgs) ToGetAccountIdentityOutputWithContext(ctx context.Context) GetAccountIdentityOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetAccountIdentityOutput)
}

// GetAccountIdentityArrayInput is an input type that accepts GetAccountIdentityArray and GetAccountIdentityArrayOutput values.
// You can construct a concrete instance of `GetAccountIdentityArrayInput` via:
//
// 		 GetAccountIdentityArray{ GetAccountIdentityArgs{...} }
//
type GetAccountIdentityArrayInput interface {
	pulumi.Input

	ToGetAccountIdentityArrayOutput() GetAccountIdentityArrayOutput
	ToGetAccountIdentityArrayOutputWithContext(context.Context) GetAccountIdentityArrayOutput
}

type GetAccountIdentityArray []GetAccountIdentityInput

func (GetAccountIdentityArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetAccountIdentity)(nil)).Elem()
}

func (i GetAccountIdentityArray) ToGetAccountIdentityArrayOutput() GetAccountIdentityArrayOutput {
	return i.ToGetAccountIdentityArrayOutputWithContext(context.Background())
}

func (i GetAccountIdentityArray) ToGetAccountIdentityArrayOutputWithContext(ctx context.Context) GetAccountIdentityArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetAccountIdentityArrayOutput)
}

type GetAccountIdentityOutput struct{ *pulumi.OutputState }

func (GetAccountIdentityOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetAccountIdentity)(nil)).Elem()
}

func (o GetAccountIdentityOutput) ToGetAccountIdentityOutput() GetAccountIdentityOutput {
	return o
}

func (o GetAccountIdentityOutput) ToGetAccountIdentityOutputWithContext(ctx context.Context) GetAccountIdentityOutput {
	return o
}

// The ID of the Principal (Client) in Azure Active Directory.
func (o GetAccountIdentityOutput) PrincipalId() pulumi.StringOutput {
	return o.ApplyT(func(v GetAccountIdentity) string { return v.PrincipalId }).(pulumi.StringOutput)
}

// The ID of the Azure Active Directory Tenant.
func (o GetAccountIdentityOutput) TenantId() pulumi.StringOutput {
	return o.ApplyT(func(v GetAccountIdentity) string { return v.TenantId }).(pulumi.StringOutput)
}

// The identity type of the Data Share Account.
func (o GetAccountIdentityOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v GetAccountIdentity) string { return v.Type }).(pulumi.StringOutput)
}

type GetAccountIdentityArrayOutput struct{ *pulumi.OutputState }

func (GetAccountIdentityArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetAccountIdentity)(nil)).Elem()
}

func (o GetAccountIdentityArrayOutput) ToGetAccountIdentityArrayOutput() GetAccountIdentityArrayOutput {
	return o
}

func (o GetAccountIdentityArrayOutput) ToGetAccountIdentityArrayOutputWithContext(ctx context.Context) GetAccountIdentityArrayOutput {
	return o
}

func (o GetAccountIdentityArrayOutput) Index(i pulumi.IntInput) GetAccountIdentityOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) GetAccountIdentity {
		return vs[0].([]GetAccountIdentity)[vs[1].(int)]
	}).(GetAccountIdentityOutput)
}

func init() {
	pulumi.RegisterOutputType(AccountIdentityOutput{})
	pulumi.RegisterOutputType(AccountIdentityPtrOutput{})
	pulumi.RegisterOutputType(GetAccountIdentityOutput{})
	pulumi.RegisterOutputType(GetAccountIdentityArrayOutput{})
}
