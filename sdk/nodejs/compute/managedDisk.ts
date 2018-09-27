// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a managed disk.
 */
export class ManagedDisk extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedDiskState): ManagedDisk {
        return new ManagedDisk(name, <any>state, { id });
    }

    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    public readonly createOption: pulumi.Output<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    public readonly diskSizeGb: pulumi.Output<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    public readonly encryptionSettings: pulumi.Output<{ diskEncryptionKey?: { secretUrl: string, sourceVaultId: string }, enabled: boolean, keyEncryptionKey?: { keyUrl: string, sourceVaultId: string } } | undefined>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    public readonly imageReferenceId: pulumi.Output<string | undefined>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    public readonly osType: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * ID of an existing managed disk to copy when `create_option` is `Copy`.
     */
    public readonly sourceResourceId: pulumi.Output<string | undefined>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    public readonly sourceUri: pulumi.Output<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS` or `Premium_LRS`.
     */
    public readonly storageAccountType: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    public readonly zones: pulumi.Output<string | undefined>;

    /**
     * Create a ManagedDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDiskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagedDiskArgs | ManagedDiskState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ManagedDiskState = argsOrState as ManagedDiskState | undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["diskSizeGb"] = state ? state.diskSizeGb : undefined;
            inputs["encryptionSettings"] = state ? state.encryptionSettings : undefined;
            inputs["imageReferenceId"] = state ? state.imageReferenceId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["osType"] = state ? state.osType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sourceResourceId"] = state ? state.sourceResourceId : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountType"] = state ? state.storageAccountType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ManagedDiskArgs | undefined;
            if (!args || args.createOption === undefined) {
                throw new Error("Missing required property 'createOption'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountType === undefined) {
                throw new Error("Missing required property 'storageAccountType'");
            }
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["diskSizeGb"] = args ? args.diskSizeGb : undefined;
            inputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            inputs["imageReferenceId"] = args ? args.imageReferenceId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["osType"] = args ? args.osType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountType"] = args ? args.storageAccountType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        super("azure:compute/managedDisk:ManagedDisk", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ManagedDisk resources.
 */
export interface ManagedDiskState {
    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    readonly encryptionSettings?: pulumi.Input<{ diskEncryptionKey?: pulumi.Input<{ secretUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }>, enabled: pulumi.Input<boolean>, keyEncryptionKey?: pulumi.Input<{ keyUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }> }>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    readonly imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * ID of an existing managed disk to copy when `create_option` is `Copy`.
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS` or `Premium_LRS`.
     */
    readonly storageAccountType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagedDisk resource.
 */
export interface ManagedDiskArgs {
    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    readonly createOption: pulumi.Input<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    readonly encryptionSettings?: pulumi.Input<{ diskEncryptionKey?: pulumi.Input<{ secretUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }>, enabled: pulumi.Input<boolean>, keyEncryptionKey?: pulumi.Input<{ keyUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }> }>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    readonly imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * ID of an existing managed disk to copy when `create_option` is `Copy`.
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS` or `Premium_LRS`.
     */
    readonly storageAccountType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: pulumi.Input<string>;
}
