// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manage a ServiceBus Subscription Rule.
 * 
 * ## Example Usage (SQL Filter)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "tfex-servicebus-subscription-rule-sql",
 * });
 * const exampleNamespace = new azure.servicebus.Namespace("example", {
 *     location: exampleResourceGroup.location,
 *     name: "tfexSevicebusNamespace",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     tags: {
 *         source: "example",
 *     },
 * });
 * const exampleTopic = new azure.servicebus.Topic("example", {
 *     enablePartitioning: true,
 *     name: "tfexSevicebusTopic",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubscription = new azure.servicebus.Subscription("example", {
 *     maxDeliveryCount: 1,
 *     name: "tfexSevicebusSubscription",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     topicName: exampleTopic.name,
 * });
 * const exampleSubscriptionRule = new azure.servicebus.SubscriptionRule("example", {
 *     filterType: "SqlFilter",
 *     name: "tfexSevicebusRule",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sqlFilter: "color = 'red'",
 *     subscriptionName: exampleSubscription.name,
 *     topicName: exampleTopic.name,
 * });
 * ```
 * 
 * ## Example Usage (Correlation Filter)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "tfex-servicebus-subscription-rule-cor",
 * });
 * const exampleNamespace = new azure.servicebus.Namespace("example", {
 *     location: exampleResourceGroup.location,
 *     name: "tfexSevicebusNamespace",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     tags: {
 *         source: "example",
 *     },
 * });
 * const exampleTopic = new azure.servicebus.Topic("example", {
 *     enablePartitioning: true,
 *     name: "tfexSevicebusTopic",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubscription = new azure.servicebus.Subscription("example", {
 *     maxDeliveryCount: 1,
 *     name: "tfexSevicebusSubscription",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     topicName: exampleTopic.name,
 * });
 * const exampleSubscriptionRule = new azure.servicebus.SubscriptionRule("example", {
 *     correlationFilter: {
 *         correlationId: "high",
 *         label: "red",
 *     },
 *     filterType: "CorrelationFilter",
 *     name: "tfexSevicebusRule",
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     subscriptionName: exampleSubscription.name,
 *     topicName: exampleTopic.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_subscription_rule_legacy.html.markdown.
 */
export class SubscriptionRule extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionRuleState, opts?: pulumi.CustomResourceOptions): SubscriptionRule {
        return new SubscriptionRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventhub/subscriptionRule:SubscriptionRule';

    /**
     * Returns true if the given object is an instance of SubscriptionRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubscriptionRule.__pulumiType;
    }

    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
     */
    public readonly correlationFilter!: pulumi.Output<outputs.eventhub.SubscriptionRuleCorrelationFilter | undefined>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    public readonly filterType!: pulumi.Output<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
     */
    public readonly sqlFilter!: pulumi.Output<string | undefined>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    public readonly subscriptionName!: pulumi.Output<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    public readonly topicName!: pulumi.Output<string>;

    /**
     * Create a SubscriptionRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubscriptionRuleArgs | SubscriptionRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubscriptionRuleState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["correlationFilter"] = state ? state.correlationFilter : undefined;
            inputs["filterType"] = state ? state.filterType : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sqlFilter"] = state ? state.sqlFilter : undefined;
            inputs["subscriptionName"] = state ? state.subscriptionName : undefined;
            inputs["topicName"] = state ? state.topicName : undefined;
        } else {
            const args = argsOrState as SubscriptionRuleArgs | undefined;
            if (!args || args.filterType === undefined) {
                throw new Error("Missing required property 'filterType'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.subscriptionName === undefined) {
                throw new Error("Missing required property 'subscriptionName'");
            }
            if (!args || args.topicName === undefined) {
                throw new Error("Missing required property 'topicName'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["correlationFilter"] = args ? args.correlationFilter : undefined;
            inputs["filterType"] = args ? args.filterType : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sqlFilter"] = args ? args.sqlFilter : undefined;
            inputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            inputs["topicName"] = args ? args.topicName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SubscriptionRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubscriptionRule resources.
 */
export interface SubscriptionRuleState {
    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    readonly action?: pulumi.Input<string>;
    /**
     * A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
     */
    readonly correlationFilter?: pulumi.Input<inputs.eventhub.SubscriptionRuleCorrelationFilter>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    readonly filterType?: pulumi.Input<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
     */
    readonly sqlFilter?: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    readonly subscriptionName?: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    readonly topicName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubscriptionRule resource.
 */
export interface SubscriptionRuleArgs {
    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    readonly action?: pulumi.Input<string>;
    /**
     * A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
     */
    readonly correlationFilter?: pulumi.Input<inputs.eventhub.SubscriptionRuleCorrelationFilter>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    readonly filterType: pulumi.Input<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
     */
    readonly sqlFilter?: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    readonly subscriptionName: pulumi.Input<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    readonly topicName: pulumi.Input<string>;
}
