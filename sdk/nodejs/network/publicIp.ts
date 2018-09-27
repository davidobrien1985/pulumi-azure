// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a Public IP Address.
 */
export class PublicIp extends pulumi.CustomResource {
    /**
     * Get an existing PublicIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpState): PublicIp {
        return new PublicIp(name, <any>state, { id });
    }

    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    public readonly domainNameLabel: pulumi.Output<string | undefined>;
    /**
     * Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone
     */
    public /*out*/ readonly fqdn: pulumi.Output<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    public readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * The IP address value that was allocated.
     */
    public /*out*/ readonly ipAddress: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Defines whether the IP address is static or dynamic. Options are Static or Dynamic.
     */
    public readonly publicIpAddressAllocation: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    public readonly reverseFqdn: pulumi.Output<string | undefined>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    public readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    public readonly zones: pulumi.Output<string | undefined>;

    /**
     * Create a PublicIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIpArgs | PublicIpState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PublicIpState = argsOrState as PublicIpState | undefined;
            inputs["domainNameLabel"] = state ? state.domainNameLabel : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["idleTimeoutInMinutes"] = state ? state.idleTimeoutInMinutes : undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["publicIpAddressAllocation"] = state ? state.publicIpAddressAllocation : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["reverseFqdn"] = state ? state.reverseFqdn : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as PublicIpArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.publicIpAddressAllocation === undefined) {
                throw new Error("Missing required property 'publicIpAddressAllocation'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["domainNameLabel"] = args ? args.domainNameLabel : undefined;
            inputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["publicIpAddressAllocation"] = args ? args.publicIpAddressAllocation : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["reverseFqdn"] = args ? args.reverseFqdn : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["fqdn"] = undefined /*out*/;
            inputs["ipAddress"] = undefined /*out*/;
        }
        super("azure:network/publicIp:PublicIp", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PublicIp resources.
 */
export interface PublicIpState {
    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    readonly domainNameLabel?: pulumi.Input<string>;
    /**
     * Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The IP address value that was allocated.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Defines whether the IP address is static or dynamic. Options are Static or Dynamic.
     */
    readonly publicIpAddressAllocation?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    readonly reverseFqdn?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    readonly zones?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicIp resource.
 */
export interface PublicIpArgs {
    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    readonly domainNameLabel?: pulumi.Input<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Defines whether the IP address is static or dynamic. Options are Static or Dynamic.
     */
    readonly publicIpAddressAllocation: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    readonly reverseFqdn?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    readonly zones?: pulumi.Input<string>;
}
