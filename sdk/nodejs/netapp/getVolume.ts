// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Uses this data source to access information about an existing NetApp Volume.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/netapp_volume.html.markdown.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:netapp/getVolume:getVolume", {
        "accountName": args.accountName,
        "name": args.name,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getVolume.
 */
export interface GetVolumeArgs {
    /**
     * The name of the NetApp account where the NetApp pool exists.
     */
    readonly accountName: string;
    /**
     * The name of the NetApp Volume.
     */
    readonly name: string;
    /**
     * The name of the NetApp pool where the NetApp volume exists.
     */
    readonly poolName: string;
    /**
     * The Name of the Resource Group where the NetApp Volume exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getVolume.
 */
export interface GetVolumeResult {
    readonly accountName: string;
    /**
     * The Azure Region where the NetApp Volume exists.
     */
    readonly location: string;
    readonly name: string;
    readonly poolName: string;
    readonly protocols: string[];
    readonly resourceGroupName: string;
    /**
     * The service level of the file system.
     */
    readonly serviceLevel: string;
    /**
     * The maximum Storage Quota in Gigabytes allowed for a file system.
     */
    readonly storageQuotaInGb: number;
    /**
     * The ID of a Subnet in which the NetApp Volume resides.
     */
    readonly subnetId: string;
    /**
     * The unique file path of the volume.
     */
    readonly volumePath: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
