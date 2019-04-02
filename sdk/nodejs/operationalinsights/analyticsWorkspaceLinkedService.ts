// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Links a Log Analytics (formally Operational Insights) Workspace to another resource. The (currently) only linkable service is an Azure Automation Account.
 * 
 * > **NOTE:** This resource has been deprecated in favour of the `azurerm_log_analytics_linked_service` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "resourcegroup-01",
 * });
 * const testAccount = new azure.automation.Account("test", {
 *     location: testResourceGroup.location,
 *     name: "automation-01",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         name: "Basic",
 *     },
 *     tags: {
 *         environment: "development",
 *     },
 * });
 * const testAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("test", {
 *     location: testResourceGroup.location,
 *     name: "workspace-01",
 *     resourceGroupName: testResourceGroup.name,
 *     retentionInDays: 30,
 *     sku: "PerGB2018",
 * });
 * const testAnalyticsWorkspaceLinkedService = new azure.operationalinsights.AnalyticsWorkspaceLinkedService("test", {
 *     resourceGroupName: testResourceGroup.name,
 *     resourceId: testAccount.id,
 *     workspaceName: testAnalyticsWorkspace.name,
 * });
 * ```
 */
export class AnalyticsWorkspaceLinkedService extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsWorkspaceLinkedService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyticsWorkspaceLinkedServiceState, opts?: pulumi.CustomResourceOptions): AnalyticsWorkspaceLinkedService {
        return new AnalyticsWorkspaceLinkedService(name, <any>state, { ...opts, id: id });
    }

    /**
     * Name of the type of linkedServices resource to connect to the Log Analytics Workspace specified in `workspace_name`. Currently it defaults to and only supports `automation` as a value. Changing this forces a new resource to be created.
     */
    public readonly linkedServiceName: pulumi.Output<string | undefined>;
    /**
     * A `linked_service_properties` block as defined below.
     */
    public readonly linkedServiceProperties: pulumi.Output<{ resourceId: string }[]>;
    /**
     * The automatically generated name of the Linked Service. This cannot be specified. The format is always `<workspace_name>/<linked_service_name>` e.g. `workspace1/Automation`
     */
    public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Log Analytics Linked Service is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This field has been deprecated in favour of the top-level `resource_id` field and will be removed in v2.0 of the AzureRM Provider.
     */
    public readonly resourceId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * Name of the Log Analytics Workspace that will contain the linkedServices resource. Changing this forces a new resource to be created.
     */
    public readonly workspaceName: pulumi.Output<string>;

    /**
     * Create a AnalyticsWorkspaceLinkedService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsWorkspaceLinkedServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AnalyticsWorkspaceLinkedServiceArgs | AnalyticsWorkspaceLinkedServiceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AnalyticsWorkspaceLinkedServiceState = argsOrState as AnalyticsWorkspaceLinkedServiceState | undefined;
            inputs["linkedServiceName"] = state ? state.linkedServiceName : undefined;
            inputs["linkedServiceProperties"] = state ? state.linkedServiceProperties : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["resourceId"] = state ? state.resourceId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["workspaceName"] = state ? state.workspaceName : undefined;
        } else {
            const args = argsOrState as AnalyticsWorkspaceLinkedServiceArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.workspaceName === undefined) {
                throw new Error("Missing required property 'workspaceName'");
            }
            inputs["linkedServiceName"] = args ? args.linkedServiceName : undefined;
            inputs["linkedServiceProperties"] = args ? args.linkedServiceProperties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceId"] = args ? args.resourceId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["workspaceName"] = args ? args.workspaceName : undefined;
            inputs["name"] = undefined /*out*/;
        }
        super("azure:operationalinsights/analyticsWorkspaceLinkedService:AnalyticsWorkspaceLinkedService", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AnalyticsWorkspaceLinkedService resources.
 */
export interface AnalyticsWorkspaceLinkedServiceState {
    /**
     * Name of the type of linkedServices resource to connect to the Log Analytics Workspace specified in `workspace_name`. Currently it defaults to and only supports `automation` as a value. Changing this forces a new resource to be created.
     */
    readonly linkedServiceName?: pulumi.Input<string>;
    /**
     * A `linked_service_properties` block as defined below.
     */
    readonly linkedServiceProperties?: pulumi.Input<pulumi.Input<{ resourceId: pulumi.Input<string> }>[]>;
    /**
     * The automatically generated name of the Linked Service. This cannot be specified. The format is always `<workspace_name>/<linked_service_name>` e.g. `workspace1/Automation`
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Log Analytics Linked Service is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This field has been deprecated in favour of the top-level `resource_id` field and will be removed in v2.0 of the AzureRM Provider.
     */
    readonly resourceId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Name of the Log Analytics Workspace that will contain the linkedServices resource. Changing this forces a new resource to be created.
     */
    readonly workspaceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AnalyticsWorkspaceLinkedService resource.
 */
export interface AnalyticsWorkspaceLinkedServiceArgs {
    /**
     * Name of the type of linkedServices resource to connect to the Log Analytics Workspace specified in `workspace_name`. Currently it defaults to and only supports `automation` as a value. Changing this forces a new resource to be created.
     */
    readonly linkedServiceName?: pulumi.Input<string>;
    /**
     * A `linked_service_properties` block as defined below.
     */
    readonly linkedServiceProperties?: pulumi.Input<pulumi.Input<{ resourceId: pulumi.Input<string> }>[]>;
    /**
     * The name of the resource group in which the Log Analytics Linked Service is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource id of the resource that will be linked to the workspace. This field has been deprecated in favour of the top-level `resource_id` field and will be removed in v2.0 of the AzureRM Provider.
     */
    readonly resourceId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Name of the Log Analytics Workspace that will contain the linkedServices resource. Changing this forces a new resource to be created.
     */
    readonly workspaceName: pulumi.Input<string>;
}