# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class PublicIpPrefix(pulumi.CustomResource):
    ip_prefix: pulumi.Output[str]
    """
    The IP address prefix value that was allocated.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
    """
    prefix_length: pulumi.Output[float]
    """
    Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the public IP.
    """
    sku: pulumi.Output[str]
    """
    The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    zones: pulumi.Output[str]
    """
    A collection containing the availability zone to allocate the Public IP in.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, prefix_length=None, resource_group_name=None, sku=None, tags=None, zones=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Public IP Prefix.
        
        > **NOTE** Public IP Prefix are currently in Public Preview. You can find more information about [Public IP Preifx Preview here](https://docs.microsoft.com/en-us/azure/virtual-network/public-ip-address-prefix).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
        :param pulumi.Input[float] prefix_length: Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the public IP.
        :param pulumi.Input[str] sku: The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] zones: A collection containing the availability zone to allocate the Public IP in.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/public_ip_prefix.html.markdown.
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

            __props__['location'] = location
            __props__['name'] = name
            __props__['prefix_length'] = prefix_length
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['zones'] = zones
            __props__['ip_prefix'] = None
        super(PublicIpPrefix, __self__).__init__(
            'azure:network/publicIpPrefix:PublicIpPrefix',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, ip_prefix=None, location=None, name=None, prefix_length=None, resource_group_name=None, sku=None, tags=None, zones=None):
        """
        Get an existing PublicIpPrefix resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] ip_prefix: The IP address prefix value that was allocated.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
        :param pulumi.Input[float] prefix_length: Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the public IP.
        :param pulumi.Input[str] sku: The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] zones: A collection containing the availability zone to allocate the Public IP in.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/public_ip_prefix.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["ip_prefix"] = ip_prefix
        __props__["location"] = location
        __props__["name"] = name
        __props__["prefix_length"] = prefix_length
        __props__["resource_group_name"] = resource_group_name
        __props__["sku"] = sku
        __props__["tags"] = tags
        __props__["zones"] = zones
        return PublicIpPrefix(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

