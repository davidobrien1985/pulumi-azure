// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Key Vault Secret.
 * 
 * > **Note:** All arguments including the secret value will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 * import sprintf = require("sprintf-js");
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "my-resource-group",
 * });
 * const current = azure.core.getClientConfig({});
 * const server = new random.RandomId("server", {
 *     byteLength: 8,
 *     keepers: {
 *         ami_id: 1,
 *     },
 * });
 * const testKeyVault = new azure.keyvault.KeyVault("test", {
 *     accessPolicies: [{
 *         keyPermissions: [
 *             "create",
 *             "get",
 *         ],
 *         objectId: current.servicePrincipalObjectId,
 *         secretPermissions: [
 *             "set",
 *             "get",
 *             "delete",
 *         ],
 *         tenantId: current.tenantId,
 *     }],
 *     location: testResourceGroup.location,
 *     name: server.hex.apply(hex => sprintf.sprintf("%s%s", "kv", hex)),
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "premium",
 *     tags: {
 *         environment: "Production",
 *     },
 *     tenantId: current.tenantId,
 * });
 * const testSecret = new azure.keyvault.Secret("test", {
 *     keyVaultId: testKeyVault.id,
 *     name: "secret-sauce",
 *     tags: {
 *         environment: "Production",
 *     },
 *     value: "szechuan",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault_secret.html.markdown.
 */
export class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretState, opts?: pulumi.CustomResourceOptions): Secret {
        return new Secret(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:keyvault/secret:Secret';

    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Secret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Secret.__pulumiType;
    }

    /**
     * Specifies the content type for the Key Vault Secret.
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Key Vault where the Secret should be created.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * Specifies the name of the Key Vault Secret. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the value of the Key Vault Secret.
     */
    public readonly value!: pulumi.Output<string>;
    public readonly vaultUri!: pulumi.Output<string>;
    /**
     * The current version of the Key Vault Secret.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretArgs | SecretState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SecretState | undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["value"] = state ? state.value : undefined;
            inputs["vaultUri"] = state ? state.vaultUri : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SecretArgs | undefined;
            if (!args || args.value === undefined) {
                throw new Error("Missing required property 'value'");
            }
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["vaultUri"] = args ? args.vaultUri : undefined;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Secret.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    /**
     * Specifies the content type for the Key Vault Secret.
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault where the Secret should be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Secret. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the value of the Key Vault Secret.
     */
    readonly value?: pulumi.Input<string>;
    readonly vaultUri?: pulumi.Input<string>;
    /**
     * The current version of the Key Vault Secret.
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * Specifies the content type for the Key Vault Secret.
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault where the Secret should be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Secret. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the value of the Key Vault Secret.
     */
    readonly value: pulumi.Input<string>;
    readonly vaultUri?: pulumi.Input<string>;
}
