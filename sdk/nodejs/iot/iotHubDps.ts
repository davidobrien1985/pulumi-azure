// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an IotHub Device Provisioning Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleIotHubDps = new azure.iot.IotHubDps("example", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "S1",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_dps.html.markdown.
 */
export class IotHubDps extends pulumi.CustomResource {
    /**
     * Get an existing IotHubDps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotHubDpsState, opts?: pulumi.CustomResourceOptions): IotHubDps {
        return new IotHubDps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/iotHubDps:IotHubDps';

    /**
     * Returns true if the given object is an instance of IotHubDps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubDps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubDps.__pulumiType;
    }

    /**
     * The allocation policy of the IoT Device Provisioning Service.
     */
    public /*out*/ readonly allocationPolicy!: pulumi.Output<string>;
    /**
     * The device endpoint of the IoT Device Provisioning Service.
     */
    public /*out*/ readonly deviceProvisioningHostName!: pulumi.Output<string>;
    /**
     * The unique identifier of the IoT Device Provisioning Service.
     */
    public /*out*/ readonly idScope!: pulumi.Output<string>;
    /**
     * A `linkedHub` block as defined below.
     */
    public readonly linkedHubs!: pulumi.Output<outputs.iot.IotHubDpsLinkedHub[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The service endpoint of the IoT Device Provisioning Service.
     */
    public /*out*/ readonly serviceOperationsHostName!: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku!: pulumi.Output<outputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a IotHubDps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubDpsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotHubDpsArgs | IotHubDpsState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IotHubDpsState | undefined;
            inputs["allocationPolicy"] = state ? state.allocationPolicy : undefined;
            inputs["deviceProvisioningHostName"] = state ? state.deviceProvisioningHostName : undefined;
            inputs["idScope"] = state ? state.idScope : undefined;
            inputs["linkedHubs"] = state ? state.linkedHubs : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serviceOperationsHostName"] = state ? state.serviceOperationsHostName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IotHubDpsArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["linkedHubs"] = args ? args.linkedHubs : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["allocationPolicy"] = undefined /*out*/;
            inputs["deviceProvisioningHostName"] = undefined /*out*/;
            inputs["idScope"] = undefined /*out*/;
            inputs["serviceOperationsHostName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(IotHubDps.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IotHubDps resources.
 */
export interface IotHubDpsState {
    /**
     * The allocation policy of the IoT Device Provisioning Service.
     */
    readonly allocationPolicy?: pulumi.Input<string>;
    /**
     * The device endpoint of the IoT Device Provisioning Service.
     */
    readonly deviceProvisioningHostName?: pulumi.Input<string>;
    /**
     * The unique identifier of the IoT Device Provisioning Service.
     */
    readonly idScope?: pulumi.Input<string>;
    /**
     * A `linkedHub` block as defined below.
     */
    readonly linkedHubs?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsLinkedHub>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The service endpoint of the IoT Device Provisioning Service.
     */
    readonly serviceOperationsHostName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku?: pulumi.Input<inputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a IotHubDps resource.
 */
export interface IotHubDpsArgs {
    /**
     * A `linkedHub` block as defined below.
     */
    readonly linkedHubs?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsLinkedHub>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Input<inputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
