// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Shared Image within a Shared Image Gallery.
 * 
 * > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.compute.getSharedImage({
 *     galleryName: "my-image-gallery",
 *     name: "my-image",
 *     resourceGroupName: "example-resources",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/shared_image.html.markdown.
 */
export function getSharedImage(args: GetSharedImageArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageResult> & GetSharedImageResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetSharedImageResult> = pulumi.runtime.invoke("azure:compute/getSharedImage:getSharedImage", {
        "galleryName": args.galleryName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSharedImage.
 */
export interface GetSharedImageArgs {
    /**
     * The name of the Shared Image Gallery in which the Shared Image exists.
     */
    readonly galleryName: string;
    /**
     * The name of the Shared Image.
     */
    readonly name: string;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getSharedImage.
 */
export interface GetSharedImageResult {
    /**
     * The description of this Shared Image.
     */
    readonly description: string;
    /**
     * The End User Licence Agreement for the Shared Image.
     */
    readonly eula: string;
    readonly galleryName: string;
    /**
     * An `identifier` block as defined below.
     */
    readonly identifiers: outputs.compute.GetSharedImageIdentifier[];
    /**
     * The supported Azure location where the Shared Image Gallery exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The type of Operating System present in this Shared Image.
     */
    readonly osType: string;
    /**
     * The URI containing the Privacy Statement for this Shared Image.
     */
    readonly privacyStatementUri: string;
    /**
     * The URI containing the Release Notes for this Shared Image.
     */
    readonly releaseNoteUri: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Shared Image.
     */
    readonly tags: {[key: string]: string};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
