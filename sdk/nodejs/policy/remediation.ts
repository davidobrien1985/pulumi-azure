// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an Azure Policy Remediation at the specified Scope.
 * 
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/policy_remediation.html.markdown.
 */
export class Remediation extends pulumi.CustomResource {
    /**
     * Get an existing Remediation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RemediationState, opts?: pulumi.CustomResourceOptions): Remediation {
        return new Remediation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:policy/remediation:Remediation';

    /**
     * Returns true if the given object is an instance of Remediation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Remediation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Remediation.__pulumiType;
    }

    /**
     * A list of the resource locations that will be remediated.
     */
    public readonly locationFilters!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    public readonly policyAssignmentId!: pulumi.Output<string>;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    public readonly policyDefinitionReferenceId!: pulumi.Output<string | undefined>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a Remediation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RemediationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RemediationArgs | RemediationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RemediationState | undefined;
            inputs["locationFilters"] = state ? state.locationFilters : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["policyAssignmentId"] = state ? state.policyAssignmentId : undefined;
            inputs["policyDefinitionReferenceId"] = state ? state.policyDefinitionReferenceId : undefined;
            inputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as RemediationArgs | undefined;
            if (!args || args.policyAssignmentId === undefined) {
                throw new Error("Missing required property 'policyAssignmentId'");
            }
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["locationFilters"] = args ? args.locationFilters : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["policyAssignmentId"] = args ? args.policyAssignmentId : undefined;
            inputs["policyDefinitionReferenceId"] = args ? args.policyDefinitionReferenceId : undefined;
            inputs["scope"] = args ? args.scope : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Remediation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Remediation resources.
 */
export interface RemediationState {
    /**
     * A list of the resource locations that will be remediated.
     */
    readonly locationFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    readonly policyAssignmentId?: pulumi.Input<string>;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    readonly scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Remediation resource.
 */
export interface RemediationArgs {
    /**
     * A list of the resource locations that will be remediated.
     */
    readonly locationFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    readonly policyAssignmentId: pulumi.Input<string>;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    readonly scope: pulumi.Input<string>;
}
