# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class ScaleSet(pulumi.CustomResource):
    """
    Manage a virtual machine scale set.
    
    ~> **Note:** All arguments including the administrator login and password will be stored in the raw state as plain-text.
    [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
    """
    def __init__(__self__, __name__, __opts__=None, boot_diagnostics=None, extensions=None, identity=None, license_type=None, location=None, name=None, network_profiles=None, os_profile=None, os_profile_linux_config=None, os_profile_secrets=None, os_profile_windows_config=None, overprovision=None, plan=None, priority=None, resource_group_name=None, single_placement_group=None, sku=None, storage_profile_data_disks=None, storage_profile_image_reference=None, storage_profile_os_disk=None, tags=None, upgrade_policy_mode=None, zones=None):
        """Create a ScaleSet resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if boot_diagnostics and not isinstance(boot_diagnostics, dict):
            raise TypeError('Expected property boot_diagnostics to be a dict')
        __self__.boot_diagnostics = boot_diagnostics
        """
        A boot diagnostics profile block as referenced below.
        """
        __props__['bootDiagnostics'] = boot_diagnostics

        if extensions and not isinstance(extensions, list):
            raise TypeError('Expected property extensions to be a list')
        __self__.extensions = extensions
        """
        Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
        """
        __props__['extensions'] = extensions

        if identity and not isinstance(identity, dict):
            raise TypeError('Expected property identity to be a dict')
        __self__.identity = identity
        __props__['identity'] = identity

        if license_type and not isinstance(license_type, basestring):
            raise TypeError('Expected property license_type to be a basestring')
        __self__.license_type = license_type
        """
        Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
        """
        __props__['licenseType'] = license_type

        if not location:
            raise TypeError('Missing required property location')
        elif not isinstance(location, basestring):
            raise TypeError('Expected property location to be a basestring')
        __self__.location = location
        """
        Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        """
        __props__['location'] = location

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Specifies the name of the image from the marketplace.
        """
        __props__['name'] = name

        if not network_profiles:
            raise TypeError('Missing required property network_profiles')
        elif not isinstance(network_profiles, list):
            raise TypeError('Expected property network_profiles to be a list')
        __self__.network_profiles = network_profiles
        """
        A collection of network profile block as documented below.
        """
        __props__['networkProfiles'] = network_profiles

        if not os_profile:
            raise TypeError('Missing required property os_profile')
        elif not isinstance(os_profile, dict):
            raise TypeError('Expected property os_profile to be a dict')
        __self__.os_profile = os_profile
        """
        A Virtual Machine OS Profile block as documented below.
        """
        __props__['osProfile'] = os_profile

        if os_profile_linux_config and not isinstance(os_profile_linux_config, dict):
            raise TypeError('Expected property os_profile_linux_config to be a dict')
        __self__.os_profile_linux_config = os_profile_linux_config
        """
        A Linux config block as documented below.
        """
        __props__['osProfileLinuxConfig'] = os_profile_linux_config

        if os_profile_secrets and not isinstance(os_profile_secrets, list):
            raise TypeError('Expected property os_profile_secrets to be a list')
        __self__.os_profile_secrets = os_profile_secrets
        """
        A collection of Secret blocks as documented below.
        """
        __props__['osProfileSecrets'] = os_profile_secrets

        if os_profile_windows_config and not isinstance(os_profile_windows_config, dict):
            raise TypeError('Expected property os_profile_windows_config to be a dict')
        __self__.os_profile_windows_config = os_profile_windows_config
        """
        A Windows config block as documented below.
        """
        __props__['osProfileWindowsConfig'] = os_profile_windows_config

        if overprovision and not isinstance(overprovision, bool):
            raise TypeError('Expected property overprovision to be a bool')
        __self__.overprovision = overprovision
        """
        Specifies whether the virtual machine scale set should be overprovisioned. Defaults to `true`.
        """
        __props__['overprovision'] = overprovision

        if plan and not isinstance(plan, dict):
            raise TypeError('Expected property plan to be a dict')
        __self__.plan = plan
        """
        A plan block as documented below.
        """
        __props__['plan'] = plan

        if priority and not isinstance(priority, basestring):
            raise TypeError('Expected property priority to be a basestring')
        __self__.priority = priority
        """
        Specifies the priority for the virtual machines in the scale set, defaults to `Regular`. Possible values are `Low` and `Regular`.
        """
        __props__['priority'] = priority

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        elif not isinstance(resource_group_name, basestring):
            raise TypeError('Expected property resource_group_name to be a basestring')
        __self__.resource_group_name = resource_group_name
        """
        The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
        """
        __props__['resourceGroupName'] = resource_group_name

        if single_placement_group and not isinstance(single_placement_group, bool):
            raise TypeError('Expected property single_placement_group to be a bool')
        __self__.single_placement_group = single_placement_group
        """
        Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Defaults to `true`. Changing this forces a
        new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
        """
        __props__['singlePlacementGroup'] = single_placement_group

        if not sku:
            raise TypeError('Missing required property sku')
        elif not isinstance(sku, dict):
            raise TypeError('Expected property sku to be a dict')
        __self__.sku = sku
        """
        Specifies the SKU of the image used to create the virtual machines.
        """
        __props__['sku'] = sku

        if storage_profile_data_disks and not isinstance(storage_profile_data_disks, list):
            raise TypeError('Expected property storage_profile_data_disks to be a list')
        __self__.storage_profile_data_disks = storage_profile_data_disks
        """
        A storage profile data disk block as documented below
        """
        __props__['storageProfileDataDisks'] = storage_profile_data_disks

        if storage_profile_image_reference and not isinstance(storage_profile_image_reference, dict):
            raise TypeError('Expected property storage_profile_image_reference to be a dict')
        __self__.storage_profile_image_reference = storage_profile_image_reference
        """
        A storage profile image reference block as documented below.
        """
        __props__['storageProfileImageReference'] = storage_profile_image_reference

        if not storage_profile_os_disk:
            raise TypeError('Missing required property storage_profile_os_disk')
        elif not isinstance(storage_profile_os_disk, dict):
            raise TypeError('Expected property storage_profile_os_disk to be a dict')
        __self__.storage_profile_os_disk = storage_profile_os_disk
        """
        A storage profile os disk block as documented below
        """
        __props__['storageProfileOsDisk'] = storage_profile_os_disk

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        if not upgrade_policy_mode:
            raise TypeError('Missing required property upgrade_policy_mode')
        elif not isinstance(upgrade_policy_mode, basestring):
            raise TypeError('Expected property upgrade_policy_mode to be a basestring')
        __self__.upgrade_policy_mode = upgrade_policy_mode
        """
        Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Manual` or `Automatic`.
        """
        __props__['upgradePolicyMode'] = upgrade_policy_mode

        if zones and not isinstance(zones, list):
            raise TypeError('Expected property zones to be a list')
        __self__.zones = zones
        """
        A collection of availability zones to spread the Virtual Machines over.
        """
        __props__['zones'] = zones

        super(ScaleSet, __self__).__init__(
            'azure:compute/scaleSet:ScaleSet',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'bootDiagnostics' in outs:
            self.boot_diagnostics = outs['bootDiagnostics']
        if 'extensions' in outs:
            self.extensions = outs['extensions']
        if 'identity' in outs:
            self.identity = outs['identity']
        if 'licenseType' in outs:
            self.license_type = outs['licenseType']
        if 'location' in outs:
            self.location = outs['location']
        if 'name' in outs:
            self.name = outs['name']
        if 'networkProfiles' in outs:
            self.network_profiles = outs['networkProfiles']
        if 'osProfile' in outs:
            self.os_profile = outs['osProfile']
        if 'osProfileLinuxConfig' in outs:
            self.os_profile_linux_config = outs['osProfileLinuxConfig']
        if 'osProfileSecrets' in outs:
            self.os_profile_secrets = outs['osProfileSecrets']
        if 'osProfileWindowsConfig' in outs:
            self.os_profile_windows_config = outs['osProfileWindowsConfig']
        if 'overprovision' in outs:
            self.overprovision = outs['overprovision']
        if 'plan' in outs:
            self.plan = outs['plan']
        if 'priority' in outs:
            self.priority = outs['priority']
        if 'resourceGroupName' in outs:
            self.resource_group_name = outs['resourceGroupName']
        if 'singlePlacementGroup' in outs:
            self.single_placement_group = outs['singlePlacementGroup']
        if 'sku' in outs:
            self.sku = outs['sku']
        if 'storageProfileDataDisks' in outs:
            self.storage_profile_data_disks = outs['storageProfileDataDisks']
        if 'storageProfileImageReference' in outs:
            self.storage_profile_image_reference = outs['storageProfileImageReference']
        if 'storageProfileOsDisk' in outs:
            self.storage_profile_os_disk = outs['storageProfileOsDisk']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'upgradePolicyMode' in outs:
            self.upgrade_policy_mode = outs['upgradePolicyMode']
        if 'zones' in outs:
            self.zones = outs['zones']
