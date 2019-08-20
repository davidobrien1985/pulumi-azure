// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing API Management User.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.apimanagement.getUser({
 *     apiManagementName: "example-apim",
 *     resourceGroupName: "search-service",
 *     userId: "my-user",
 * });
 * 
 * export const notes = test.notes;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/api_management_user.html.markdown.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> & GetUserResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetUserResult> = pulumi.runtime.invoke("azure:apimanagement/getUser:getUser", {
        "apiManagementName": args.apiManagementName,
        "resourceGroupName": args.resourceGroupName,
        "userId": args.userId,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    /**
     * The Name of the API Management Service in which this User exists.
     */
    readonly apiManagementName: string;
    /**
     * The Name of the Resource Group in which the API Management Service exists.
     */
    readonly resourceGroupName: string;
    /**
     * The Identifier for the User.
     */
    readonly userId: string;
}

/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly apiManagementName: string;
    /**
     * The Email Address used for this User.
     */
    readonly email: string;
    /**
     * The First Name for the User.
     */
    readonly firstName: string;
    /**
     * The Last Name for the User.
     */
    readonly lastName: string;
    /**
     * Any notes about this User.
     */
    readonly note: string;
    readonly resourceGroupName: string;
    /**
     * The current state of this User, for example `active`, `blocked` or `pending`.
     */
    readonly state: string;
    readonly userId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
