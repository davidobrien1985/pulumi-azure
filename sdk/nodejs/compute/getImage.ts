// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Image.
 * 
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/image.html.markdown.
 */
export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:compute/getImage:getImage", {
        "name": args.name,
        "nameRegex": args.nameRegex,
        "resourceGroupName": args.resourceGroupName,
        "sortDescending": args.sortDescending,
    }, opts);
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    /**
     * The name of the Image.
     */
    readonly name?: string;
    /**
     * Regex pattern of the image to match.
     */
    readonly nameRegex?: string;
    /**
     * The Name of the Resource Group where this Image exists.
     */
    readonly resourceGroupName: string;
    /**
     * By default when matching by regex, images are sorted by name in ascending order and the first match is chosen, to sort descending, set this flag.
     */
    readonly sortDescending?: boolean;
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * a collection of `dataDisk` blocks as defined below.
     */
    readonly dataDisks: outputs.compute.GetImageDataDisk[];
    /**
     * the Azure Location where this Image exists.
     */
    readonly location: string;
    /**
     * the name of the Image.
     */
    readonly name?: string;
    readonly nameRegex?: string;
    /**
     * a `osDisk` block as defined below.
     */
    readonly osDisks: outputs.compute.GetImageOsDisk[];
    readonly resourceGroupName: string;
    readonly sortDescending?: boolean;
    /**
     * a mapping of tags to assigned to the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * is zone resiliency enabled?
     */
    readonly zoneResilient: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
