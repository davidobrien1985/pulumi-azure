// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing App Service Certificate Order.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.appservice.getCertificateOrder({
 *     name: "example-cert-order",
 *     resourceGroupName: "example-resources",
 * });
 * 
 * export const certificateOrderId = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/app_service_certificate_order.html.markdown.
 */
export function getCertificateOrder(args: GetCertificateOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateOrderResult> & GetCertificateOrderResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetCertificateOrderResult> = pulumi.runtime.invoke("azure:appservice/getCertificateOrder:getCertificateOrder", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCertificateOrder.
 */
export interface GetCertificateOrderArgs {
    /**
     * The name of the App Service.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the App Service exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getCertificateOrder.
 */
export interface GetCertificateOrderResult {
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    readonly appServiceCertificateNotRenewableReasons: string[];
    /**
     * true if the certificate should be automatically renewed when it expires; otherwise, false.
     */
    readonly autoRenew: boolean;
    /**
     * State of the Key Vault secret. A `certificates` block as defined below.
     */
    readonly certificates: outputs.appservice.GetCertificateOrderCertificate[];
    /**
     * Last CSR that was created for this order.
     */
    readonly csr: string;
    /**
     * The Distinguished Name for the App Service Certificate Order.
     */
    readonly distinguishedName: string;
    /**
     * Domain verification token.
     */
    readonly domainVerificationToken: string;
    /**
     * Certificate expiration time.
     */
    readonly expirationTime: string;
    /**
     * Certificate thumbprint intermediate certificate.
     */
    readonly intermediateThumbprint: string;
    /**
     * Whether the private key is external or not.
     */
    readonly isPrivateKeyExternal: boolean;
    /**
     * Certificate key size.
     */
    readonly keySize: number;
    /**
     * The Azure location where the App Service exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * Certificate product type, such as `Standard` or `WildCard`.
     */
    readonly productType: string;
    readonly resourceGroupName: string;
    /**
     * Certificate thumbprint for root certificate.
     */
    readonly rootThumbprint: string;
    /**
     * Certificate thumbprint for signed certificate.
     */
    readonly signedCertificateThumbprint: string;
    /**
     * Current order status.
     */
    readonly status: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * Duration in years (must be between 1 and 3).
     */
    readonly validityInYears: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
