// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Disk Encryption Set.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/disk_encryption_set.html.markdown.
 */
export function getDiskEncryptionSet(args: GetDiskEncryptionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskEncryptionSetResult> & GetDiskEncryptionSetResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetDiskEncryptionSetResult> = pulumi.runtime.invoke("azure:compute/getDiskEncryptionSet:getDiskEncryptionSet", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getDiskEncryptionSet.
 */
export interface GetDiskEncryptionSetArgs {
    /**
     * The name of the Disk Encryption Set exists.
     */
    readonly name: string;
    /**
     * The name of the Resource Group where the Disk Encryption Set exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getDiskEncryptionSet.
 */
export interface GetDiskEncryptionSetResult {
    /**
     * The location where the Disk Encryption Set exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Disk Encryption Set.
     */
    readonly tags: {[key: string]: string};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
