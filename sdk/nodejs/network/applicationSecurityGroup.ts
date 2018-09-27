// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage an Application Security Group.
 */
export class ApplicationSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationSecurityGroupState): ApplicationSecurityGroup {
        return new ApplicationSecurityGroup(name, <any>state, { id });
    }

    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Application Security Group. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Application Security Group.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a ApplicationSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationSecurityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationSecurityGroupArgs | ApplicationSecurityGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ApplicationSecurityGroupState = argsOrState as ApplicationSecurityGroupState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ApplicationSecurityGroupArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("azure:network/applicationSecurityGroup:ApplicationSecurityGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApplicationSecurityGroup resources.
 */
export interface ApplicationSecurityGroupState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Security Group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Application Security Group.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ApplicationSecurityGroup resource.
 */
export interface ApplicationSecurityGroupArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Security Group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Application Security Group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
