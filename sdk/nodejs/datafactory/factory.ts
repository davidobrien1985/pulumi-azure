// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage an Azure Data Factory (Version 2).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "northeurope",
 *     name: "example",
 * });
 * const exampleFactory = new azure.datafactory.Factory("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 */
export class Factory extends pulumi.CustomResource {
    /**
     * Get an existing Factory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FactoryState, opts?: pulumi.CustomResourceOptions): Factory {
        return new Factory(name, <any>state, { ...opts, id: id });
    }

    /**
     * A `github_configuration` block as defined below.
     */
    public readonly githubConfiguration!: pulumi.Output<{ accountName: string, branchName: string, gitUrl: string, repositoryName: string, rootFolder: string } | undefined>;
    /**
     * An `identity` block as defined below.
     */
    public readonly identity!: pulumi.Output<{ principalId: string, tenantId: string, type: string }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    public readonly vstsConfiguration!: pulumi.Output<{ accountName: string, branchName: string, projectName: string, repositoryName: string, rootFolder: string, tenantId: string } | undefined>;

    /**
     * Create a Factory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FactoryArgs | FactoryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FactoryState | undefined;
            inputs["githubConfiguration"] = state ? state.githubConfiguration : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vstsConfiguration"] = state ? state.vstsConfiguration : undefined;
        } else {
            const args = argsOrState as FactoryArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["githubConfiguration"] = args ? args.githubConfiguration : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vstsConfiguration"] = args ? args.vstsConfiguration : undefined;
        }
        super("azure:datafactory/factory:Factory", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Factory resources.
 */
export interface FactoryState {
    /**
     * A `github_configuration` block as defined below.
     */
    readonly githubConfiguration?: pulumi.Input<{ accountName: pulumi.Input<string>, branchName: pulumi.Input<string>, gitUrl: pulumi.Input<string>, repositoryName: pulumi.Input<string>, rootFolder: pulumi.Input<string> }>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: pulumi.Input<{ principalId?: pulumi.Input<string>, tenantId?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    readonly vstsConfiguration?: pulumi.Input<{ accountName: pulumi.Input<string>, branchName: pulumi.Input<string>, projectName: pulumi.Input<string>, repositoryName: pulumi.Input<string>, rootFolder: pulumi.Input<string>, tenantId: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a Factory resource.
 */
export interface FactoryArgs {
    /**
     * A `github_configuration` block as defined below.
     */
    readonly githubConfiguration?: pulumi.Input<{ accountName: pulumi.Input<string>, branchName: pulumi.Input<string>, gitUrl: pulumi.Input<string>, repositoryName: pulumi.Input<string>, rootFolder: pulumi.Input<string> }>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: pulumi.Input<{ principalId?: pulumi.Input<string>, tenantId?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    readonly vstsConfiguration?: pulumi.Input<{ accountName: pulumi.Input<string>, branchName: pulumi.Input<string>, projectName: pulumi.Input<string>, repositoryName: pulumi.Input<string>, rootFolder: pulumi.Input<string>, tenantId: pulumi.Input<string> }>;
}