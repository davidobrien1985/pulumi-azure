# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class ManagedDisk(pulumi.CustomResource):
    """
    Manage a managed disk.
    """
    def __init__(__self__, __name__, __opts__=None, create_option=None, disk_size_gb=None, encryption_settings=None, image_reference_id=None, location=None, name=None, os_type=None, resource_group_name=None, source_resource_id=None, source_uri=None, storage_account_type=None, tags=None, zones=None):
        """Create a ManagedDisk resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not create_option:
            raise TypeError('Missing required property create_option')
        elif not isinstance(create_option, basestring):
            raise TypeError('Expected property create_option to be a basestring')
        __self__.create_option = create_option
        """
        The method to use when creating the managed disk. Possible values include:
        """
        __props__['createOption'] = create_option

        if disk_size_gb and not isinstance(disk_size_gb, int):
            raise TypeError('Expected property disk_size_gb to be a int')
        __self__.disk_size_gb = disk_size_gb
        """
        Specifies the size of the managed disk to create in gigabytes.
        If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
        """
        __props__['diskSizeGb'] = disk_size_gb

        if encryption_settings and not isinstance(encryption_settings, dict):
            raise TypeError('Expected property encryption_settings to be a dict')
        __self__.encryption_settings = encryption_settings
        """
        an `encryption_settings` block as defined below.
        """
        __props__['encryptionSettings'] = encryption_settings

        if image_reference_id and not isinstance(image_reference_id, basestring):
            raise TypeError('Expected property image_reference_id to be a basestring')
        __self__.image_reference_id = image_reference_id
        """
        ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
        """
        __props__['imageReferenceId'] = image_reference_id

        if not location:
            raise TypeError('Missing required property location')
        elif not isinstance(location, basestring):
            raise TypeError('Expected property location to be a basestring')
        __self__.location = location
        """
        Specified the supported Azure location where the resource exists.
        Changing this forces a new resource to be created.
        """
        __props__['location'] = location

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Specifies the name of the managed disk. Changing this forces a
        new resource to be created.
        """
        __props__['name'] = name

        if os_type and not isinstance(os_type, basestring):
            raise TypeError('Expected property os_type to be a basestring')
        __self__.os_type = os_type
        """
        Specify a value when the source of an `Import` or `Copy`
        operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
        """
        __props__['osType'] = os_type

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        elif not isinstance(resource_group_name, basestring):
            raise TypeError('Expected property resource_group_name to be a basestring')
        __self__.resource_group_name = resource_group_name
        """
        The name of the resource group in which to create
        the managed disk.
        """
        __props__['resourceGroupName'] = resource_group_name

        if source_resource_id and not isinstance(source_resource_id, basestring):
            raise TypeError('Expected property source_resource_id to be a basestring')
        __self__.source_resource_id = source_resource_id
        """
        ID of an existing managed disk to copy when `create_option` is `Copy`.
        """
        __props__['sourceResourceId'] = source_resource_id

        if source_uri and not isinstance(source_uri, basestring):
            raise TypeError('Expected property source_uri to be a basestring')
        __self__.source_uri = source_uri
        """
        URI to a valid VHD file to be used when `create_option` is `Import`.
        """
        __props__['sourceUri'] = source_uri

        if not storage_account_type:
            raise TypeError('Missing required property storage_account_type')
        elif not isinstance(storage_account_type, basestring):
            raise TypeError('Expected property storage_account_type to be a basestring')
        __self__.storage_account_type = storage_account_type
        """
        The type of storage to use for the managed disk.
        Allowable values are `Standard_LRS` or `Premium_LRS`.
        """
        __props__['storageAccountType'] = storage_account_type

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        if zones and not isinstance(zones, basestring):
            raise TypeError('Expected property zones to be a basestring')
        __self__.zones = zones
        """
        A collection containing the availability zone to allocate the Managed Disk in.
        """
        __props__['zones'] = zones

        super(ManagedDisk, __self__).__init__(
            'azure:compute/managedDisk:ManagedDisk',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'createOption' in outs:
            self.create_option = outs['createOption']
        if 'diskSizeGb' in outs:
            self.disk_size_gb = outs['diskSizeGb']
        if 'encryptionSettings' in outs:
            self.encryption_settings = outs['encryptionSettings']
        if 'imageReferenceId' in outs:
            self.image_reference_id = outs['imageReferenceId']
        if 'location' in outs:
            self.location = outs['location']
        if 'name' in outs:
            self.name = outs['name']
        if 'osType' in outs:
            self.os_type = outs['osType']
        if 'resourceGroupName' in outs:
            self.resource_group_name = outs['resourceGroupName']
        if 'sourceResourceId' in outs:
            self.source_resource_id = outs['sourceResourceId']
        if 'sourceUri' in outs:
            self.source_uri = outs['sourceUri']
        if 'storageAccountType' in outs:
            self.storage_account_type = outs['storageAccountType']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'zones' in outs:
            self.zones = outs['zones']
