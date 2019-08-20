// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Linux Virtual Machine within a Dev Test Lab.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as fs from "fs";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const testLab = new azure.devtest.Lab("test", {
 *     location: testResourceGroup.location,
 *     name: "example-devtestlab",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * const testVirtualNetwork = new azure.devtest.VirtualNetwork("test", {
 *     labName: testLab.name,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 *     subnet: {
 *         useInVirtualMachineCreation: "Allow",
 *         usePublicIpAddress: "Allow",
 *     },
 * });
 * const testLinuxVirtualMachine = new azure.devtest.LinuxVirtualMachine("test", {
 *     galleryImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "18.04-LTS",
 *         version: "latest",
 *     },
 *     labName: testLab.name,
 *     labSubnetName: testVirtualNetwork.subnet.name,
 *     labVirtualNetworkId: testVirtualNetwork.id,
 *     location: testResourceGroup.location,
 *     name: "example-vm03",
 *     notes: "Some notes about this Virtual Machine.",
 *     resourceGroupName: testResourceGroup.name,
 *     size: "Standard_DS2",
 *     sshKey: fs.readFileSync("~/.ssh/id_rsa.pub", "utf-8"),
 *     storageType: "Premium",
 *     username: "exampleuser99",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_linux_virtual_machine.html.markdown.
 */
export class LinuxVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing LinuxVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinuxVirtualMachineState, opts?: pulumi.CustomResourceOptions): LinuxVirtualMachine {
        return new LinuxVirtualMachine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:devtest/linuxVirtualMachine:LinuxVirtualMachine';

    /**
     * Returns true if the given object is an instance of LinuxVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinuxVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinuxVirtualMachine.__pulumiType;
    }

    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    public readonly allowClaim!: pulumi.Output<boolean | undefined>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    public readonly disallowPublicIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * The FQDN of the Virtual Machine.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    public readonly galleryImageReference!: pulumi.Output<outputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    public readonly inboundNatRules!: pulumi.Output<outputs.devtest.LinuxVirtualMachineInboundNatRule[] | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    public readonly labName!: pulumi.Output<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    public readonly labSubnetName!: pulumi.Output<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    public readonly labVirtualNetworkId!: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    public readonly size!: pulumi.Output<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly sshKey!: pulumi.Output<string | undefined>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    public readonly storageType!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a LinuxVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinuxVirtualMachineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LinuxVirtualMachineArgs | LinuxVirtualMachineState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LinuxVirtualMachineState | undefined;
            inputs["allowClaim"] = state ? state.allowClaim : undefined;
            inputs["disallowPublicIpAddress"] = state ? state.disallowPublicIpAddress : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["galleryImageReference"] = state ? state.galleryImageReference : undefined;
            inputs["inboundNatRules"] = state ? state.inboundNatRules : undefined;
            inputs["labName"] = state ? state.labName : undefined;
            inputs["labSubnetName"] = state ? state.labSubnetName : undefined;
            inputs["labVirtualNetworkId"] = state ? state.labVirtualNetworkId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notes"] = state ? state.notes : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["sshKey"] = state ? state.sshKey : undefined;
            inputs["storageType"] = state ? state.storageType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueIdentifier"] = state ? state.uniqueIdentifier : undefined;
            inputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as LinuxVirtualMachineArgs | undefined;
            if (!args || args.galleryImageReference === undefined) {
                throw new Error("Missing required property 'galleryImageReference'");
            }
            if (!args || args.labName === undefined) {
                throw new Error("Missing required property 'labName'");
            }
            if (!args || args.labSubnetName === undefined) {
                throw new Error("Missing required property 'labSubnetName'");
            }
            if (!args || args.labVirtualNetworkId === undefined) {
                throw new Error("Missing required property 'labVirtualNetworkId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.size === undefined) {
                throw new Error("Missing required property 'size'");
            }
            if (!args || args.storageType === undefined) {
                throw new Error("Missing required property 'storageType'");
            }
            if (!args || args.username === undefined) {
                throw new Error("Missing required property 'username'");
            }
            inputs["allowClaim"] = args ? args.allowClaim : undefined;
            inputs["disallowPublicIpAddress"] = args ? args.disallowPublicIpAddress : undefined;
            inputs["galleryImageReference"] = args ? args.galleryImageReference : undefined;
            inputs["inboundNatRules"] = args ? args.inboundNatRules : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["labSubnetName"] = args ? args.labSubnetName : undefined;
            inputs["labVirtualNetworkId"] = args ? args.labVirtualNetworkId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["sshKey"] = args ? args.sshKey : undefined;
            inputs["storageType"] = args ? args.storageType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["username"] = args ? args.username : undefined;
            inputs["fqdn"] = undefined /*out*/;
            inputs["uniqueIdentifier"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LinuxVirtualMachine.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LinuxVirtualMachine resources.
 */
export interface LinuxVirtualMachineState {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    readonly allowClaim?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    readonly disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * The FQDN of the Virtual Machine.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    readonly galleryImageReference?: pulumi.Input<inputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly inboundNatRules?: pulumi.Input<pulumi.Input<inputs.devtest.LinuxVirtualMachineInboundNatRule>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labName?: pulumi.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    readonly labSubnetName?: pulumi.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labVirtualNetworkId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    readonly size?: pulumi.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly sshKey?: pulumi.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    readonly storageType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LinuxVirtualMachine resource.
 */
export interface LinuxVirtualMachineArgs {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    readonly allowClaim?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    readonly disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    readonly galleryImageReference: pulumi.Input<inputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly inboundNatRules?: pulumi.Input<pulumi.Input<inputs.devtest.LinuxVirtualMachineInboundNatRule>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    readonly labSubnetName: pulumi.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labVirtualNetworkId: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    readonly size: pulumi.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly sshKey?: pulumi.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    readonly storageType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly username: pulumi.Input<string>;
}
