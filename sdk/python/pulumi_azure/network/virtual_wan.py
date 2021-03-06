# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class VirtualWan(pulumi.CustomResource):
    allow_branch_to_branch_traffic: pulumi.Output[bool]
    """
    Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
    """
    allow_vnet_to_vnet_traffic: pulumi.Output[bool]
    """
    Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
    """
    disable_vpn_encryption: pulumi.Output[bool]
    """
    Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
    """
    office365_local_breakout_category: pulumi.Output[str]
    """
    Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the Virtual WAN.
    """
    type: pulumi.Output[str]
    """
    Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
    """
    def __init__(__self__, resource_name, opts=None, allow_branch_to_branch_traffic=None, allow_vnet_to_vnet_traffic=None, disable_vpn_encryption=None, location=None, name=None, office365_local_breakout_category=None, resource_group_name=None, tags=None, type=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Virtual WAN.



        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] allow_branch_to_branch_traffic: Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
        :param pulumi.Input[bool] allow_vnet_to_vnet_traffic: Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
        :param pulumi.Input[bool] disable_vpn_encryption: Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
        :param pulumi.Input[str] office365_local_breakout_category: Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the Virtual WAN.
        :param pulumi.Input[str] type: Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['allow_branch_to_branch_traffic'] = allow_branch_to_branch_traffic
            __props__['allow_vnet_to_vnet_traffic'] = allow_vnet_to_vnet_traffic
            __props__['disable_vpn_encryption'] = disable_vpn_encryption
            __props__['location'] = location
            __props__['name'] = name
            __props__['office365_local_breakout_category'] = office365_local_breakout_category
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['type'] = type
        super(VirtualWan, __self__).__init__(
            'azure:network/virtualWan:VirtualWan',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, allow_branch_to_branch_traffic=None, allow_vnet_to_vnet_traffic=None, disable_vpn_encryption=None, location=None, name=None, office365_local_breakout_category=None, resource_group_name=None, tags=None, type=None):
        """
        Get an existing VirtualWan resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] allow_branch_to_branch_traffic: Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
        :param pulumi.Input[bool] allow_vnet_to_vnet_traffic: Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
        :param pulumi.Input[bool] disable_vpn_encryption: Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
        :param pulumi.Input[str] office365_local_breakout_category: Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the Virtual WAN.
        :param pulumi.Input[str] type: Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["allow_branch_to_branch_traffic"] = allow_branch_to_branch_traffic
        __props__["allow_vnet_to_vnet_traffic"] = allow_vnet_to_vnet_traffic
        __props__["disable_vpn_encryption"] = disable_vpn_encryption
        __props__["location"] = location
        __props__["name"] = name
        __props__["office365_local_breakout_category"] = office365_local_breakout_category
        __props__["resource_group_name"] = resource_group_name
        __props__["tags"] = tags
        __props__["type"] = type
        return VirtualWan(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

