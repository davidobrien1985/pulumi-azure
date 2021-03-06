// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Connection for a Virtual Hub.
 * 
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_hub_connection.html.markdown.
 */
export class VirtualHubConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualHubConnectionState, opts?: pulumi.CustomResourceOptions): VirtualHubConnection {
        return new VirtualHubConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/virtualHubConnection:VirtualHubConnection';

    /**
     * Returns true if the given object is an instance of VirtualHubConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubConnection.__pulumiType;
    }

    /**
     * Is the Virtual Hub traffic allowed to transit via the Remote Virtual Network? Changing this forces a new resource to be created.
     */
    public readonly hubToVitualNetworkTrafficAllowed!: pulumi.Output<boolean | undefined>;
    /**
     * Should Internet Security be enabled to secure internet traffic? Changing this forces a new resource to be created.
     */
    public readonly internetSecurityEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The Name which should be used for this Connection, which must be unique within the Virtual Hub. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the Virtual Network which the Virtual Hub should be connected to. Changing this forces a new resource to be created.
     */
    public readonly remoteVirtualNetworkId!: pulumi.Output<string>;
    /**
     * The ID of the Virtual Hub within which this connection should be created. Changing this forces a new resource to be created.
     */
    public readonly virtualHubId!: pulumi.Output<string>;
    /**
     * Is Remote Virtual Network traffic allowed to transit the Hub's Virtual Network Gateway's? Changing this forces a new resource to be created.
     */
    public readonly vitualNetworkToHubGatewaysTrafficAllowed!: pulumi.Output<boolean | undefined>;

    /**
     * Create a VirtualHubConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualHubConnectionArgs | VirtualHubConnectionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VirtualHubConnectionState | undefined;
            inputs["hubToVitualNetworkTrafficAllowed"] = state ? state.hubToVitualNetworkTrafficAllowed : undefined;
            inputs["internetSecurityEnabled"] = state ? state.internetSecurityEnabled : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["remoteVirtualNetworkId"] = state ? state.remoteVirtualNetworkId : undefined;
            inputs["virtualHubId"] = state ? state.virtualHubId : undefined;
            inputs["vitualNetworkToHubGatewaysTrafficAllowed"] = state ? state.vitualNetworkToHubGatewaysTrafficAllowed : undefined;
        } else {
            const args = argsOrState as VirtualHubConnectionArgs | undefined;
            if (!args || args.remoteVirtualNetworkId === undefined) {
                throw new Error("Missing required property 'remoteVirtualNetworkId'");
            }
            if (!args || args.virtualHubId === undefined) {
                throw new Error("Missing required property 'virtualHubId'");
            }
            inputs["hubToVitualNetworkTrafficAllowed"] = args ? args.hubToVitualNetworkTrafficAllowed : undefined;
            inputs["internetSecurityEnabled"] = args ? args.internetSecurityEnabled : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["remoteVirtualNetworkId"] = args ? args.remoteVirtualNetworkId : undefined;
            inputs["virtualHubId"] = args ? args.virtualHubId : undefined;
            inputs["vitualNetworkToHubGatewaysTrafficAllowed"] = args ? args.vitualNetworkToHubGatewaysTrafficAllowed : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VirtualHubConnection.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VirtualHubConnection resources.
 */
export interface VirtualHubConnectionState {
    /**
     * Is the Virtual Hub traffic allowed to transit via the Remote Virtual Network? Changing this forces a new resource to be created.
     */
    readonly hubToVitualNetworkTrafficAllowed?: pulumi.Input<boolean>;
    /**
     * Should Internet Security be enabled to secure internet traffic? Changing this forces a new resource to be created.
     */
    readonly internetSecurityEnabled?: pulumi.Input<boolean>;
    /**
     * The Name which should be used for this Connection, which must be unique within the Virtual Hub. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Network which the Virtual Hub should be connected to. Changing this forces a new resource to be created.
     */
    readonly remoteVirtualNetworkId?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this connection should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId?: pulumi.Input<string>;
    /**
     * Is Remote Virtual Network traffic allowed to transit the Hub's Virtual Network Gateway's? Changing this forces a new resource to be created.
     */
    readonly vitualNetworkToHubGatewaysTrafficAllowed?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VirtualHubConnection resource.
 */
export interface VirtualHubConnectionArgs {
    /**
     * Is the Virtual Hub traffic allowed to transit via the Remote Virtual Network? Changing this forces a new resource to be created.
     */
    readonly hubToVitualNetworkTrafficAllowed?: pulumi.Input<boolean>;
    /**
     * Should Internet Security be enabled to secure internet traffic? Changing this forces a new resource to be created.
     */
    readonly internetSecurityEnabled?: pulumi.Input<boolean>;
    /**
     * The Name which should be used for this Connection, which must be unique within the Virtual Hub. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Network which the Virtual Hub should be connected to. Changing this forces a new resource to be created.
     */
    readonly remoteVirtualNetworkId: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this connection should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Input<string>;
    /**
     * Is Remote Virtual Network traffic allowed to transit the Hub's Virtual Network Gateway's? Changing this forces a new resource to be created.
     */
    readonly vitualNetworkToHubGatewaysTrafficAllowed?: pulumi.Input<boolean>;
}
