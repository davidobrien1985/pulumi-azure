# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EventHub(pulumi.CustomResource):
    capture_description: pulumi.Output[dict]
    """
    A `capture_description` block as defined below.
    """
    location: pulumi.Output[str]
    message_retention: pulumi.Output[float]
    """
    Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
    """
    namespace_name: pulumi.Output[str]
    """
    Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
    """
    partition_count: pulumi.Output[float]
    """
    Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
    """
    partition_ids: pulumi.Output[list]
    """
    The identifiers for partitions created for Event Hubs.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, capture_description=None, location=None, message_retention=None, name=None, namespace_name=None, partition_count=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a Event Hubs as a nested resource within a Event Hubs namespace.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] capture_description: A `capture_description` block as defined below.
        :param pulumi.Input[float] message_retention: Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
        :param pulumi.Input[str] name: Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] namespace_name: Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
        :param pulumi.Input[float] partition_count: Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['capture_description'] = capture_description

        __props__['location'] = location

        if message_retention is None:
            raise TypeError('Missing required property message_retention')
        __props__['message_retention'] = message_retention

        __props__['name'] = name

        if namespace_name is None:
            raise TypeError('Missing required property namespace_name')
        __props__['namespace_name'] = namespace_name

        if partition_count is None:
            raise TypeError('Missing required property partition_count')
        __props__['partition_count'] = partition_count

        if resource_group_name is None:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['partition_ids'] = None

        super(EventHub, __self__).__init__(
            'azure:eventhub/eventHub:EventHub',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

