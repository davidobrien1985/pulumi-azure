// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing EventGrid Topic
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = pulumi.output(azure.eventgrid.getTopic({
 *     name: "my-eventgrid-topic",
 *     resourceGroupName: "example-resources",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/eventgrid_topic.html.markdown.
 */
export function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:eventgrid/getTopic:getTopic", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getTopic.
 */
export interface GetTopicArgs {
    /**
     * The name of the EventGrid Topic resource.
     */
    readonly name: string;
    /**
     * The name of the resource group in which the EventGrid Topic exists.
     */
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getTopic.
 */
export interface GetTopicResult {
    /**
     * The Endpoint associated with the EventGrid Topic.
     */
    readonly endpoint: string;
    readonly location: string;
    readonly name: string;
    /**
     * The Primary Shared Access Key associated with the EventGrid Topic.
     */
    readonly primaryAccessKey: string;
    readonly resourceGroupName: string;
    /**
     * The Secondary Shared Access Key associated with the EventGrid Topic.
     */
    readonly secondaryAccessKey: string;
    readonly tags?: {[key: string]: string};
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
