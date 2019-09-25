// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Key Vault.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.keyvault.getKeyVault({
 *     name: "mykeyvault",
 *     resourceGroupName: "some-resource-group",
 * });
 * 
 * export const vaultUri = test.vaultUri;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/key_vault.html.markdown.
 */
export function getKeyVault(args: GetKeyVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyVaultResult> & GetKeyVaultResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetKeyVaultResult> = pulumi.runtime.invoke("azure:keyvault/getKeyVault:getKeyVault", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getKeyVault.
 */
export interface GetKeyVaultArgs {
    /**
     * Specifies the name of the Key Vault.
     */
    readonly name: string;
    /**
     * The name of the Resource Group in which the Key Vault exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getKeyVault.
 */
export interface GetKeyVaultResult {
    /**
     * One or more `accessPolicy` blocks as defined below.
     */
    readonly accessPolicies: outputs.keyvault.GetKeyVaultAccessPolicy[];
    /**
     * Can Azure Virtual Machines retrieve certificates stored as secrets from the Key Vault?
     */
    readonly enabledForDeployment: boolean;
    /**
     * Can Azure Disk Encryption retrieve secrets from the Key Vault?
     */
    readonly enabledForDiskEncryption: boolean;
    /**
     * Can Azure Resource Manager retrieve secrets from the Key Vault?
     */
    readonly enabledForTemplateDeployment: boolean;
    /**
     * The Azure Region in which the Key Vault exists.
     */
    readonly location: string;
    /**
     * The name of the SKU used for this Key Vault.
     */
    readonly name: string;
    readonly networkAcls: outputs.keyvault.GetKeyVaultNetworkAcl[];
    readonly resourceGroupName: string;
    /**
     * A `sku` block as described below.
     */
    readonly sku: outputs.keyvault.GetKeyVaultSku;
    readonly skuName: string;
    /**
     * A mapping of tags assigned to the Key Vault.
     */
    readonly tags: {[key: string]: string};
    /**
     * The Azure Active Directory Tenant ID used to authenticate requests for this Key Vault.
     */
    readonly tenantId: string;
    /**
     * The URI of the vault for performing operations on keys and secrets.
     */
    readonly vaultUri: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
