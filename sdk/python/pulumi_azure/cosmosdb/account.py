# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Account(pulumi.CustomResource):
    capabilities: pulumi.Output[list]
    """
    The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
    """
    connection_strings: pulumi.Output[list]
    """
    A list of connection strings available for this CosmosDB account. If the kind is `GlobalDocumentDB`, this will be empty.
    """
    consistency_policy: pulumi.Output[dict]
    """
    Specifies a `consistency_policy` resource, used to define the consistency policy for this CosmosDB account.
    """
    enable_automatic_failover: pulumi.Output[bool]
    """
    Enable automatic fail over for this Cosmos DB account.
    """
    enable_multiple_write_locations: pulumi.Output[bool]
    """
    Enable multi-master support for this Cosmos DB account.
    """
    endpoint: pulumi.Output[str]
    """
    The endpoint used to connect to the CosmosDB account.
    """
    failover_policies: pulumi.Output[list]
    geo_locations: pulumi.Output[list]
    """
    Specifies a `geo_location` resource, used to define where data should be replicated with the `failover_priority` 0 specifying the primary location.
    """
    ip_range_filter: pulumi.Output[str]
    """
    CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
    """
    is_virtual_network_filter_enabled: pulumi.Output[bool]
    """
    Enables virtual network filtering for this Cosmos DB account.
    """
    kind: pulumi.Output[str]
    """
    Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
    """
    location: pulumi.Output[str]
    """
    The name of the Azure region to host replicated data.
    """
    name: pulumi.Output[str]
    """
    The capability to enable - Possible values are `EnableTable`, `EnableCassandra`, and `EnableGremlin`.
    """
    offer_type: pulumi.Output[str]
    """
    Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
    """
    primary_master_key: pulumi.Output[str]
    """
    The Primary master key for the CosmosDB Account.
    """
    primary_readonly_master_key: pulumi.Output[str]
    """
    The Primary read-only master Key for the CosmosDB Account.
    """
    read_endpoints: pulumi.Output[list]
    """
    A list of read endpoints available for this CosmosDB account.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
    """
    secondary_master_key: pulumi.Output[str]
    """
    The Secondary master key for the CosmosDB Account.
    """
    secondary_readonly_master_key: pulumi.Output[str]
    """
    The Secondary read-only master key for the CosmosDB Account.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    virtual_network_rules: pulumi.Output[list]
    """
    Specifies a `virtual_network_rules` resource, used to define which subnets are allowed to access this CosmosDB account.
    """
    write_endpoints: pulumi.Output[list]
    """
    A list of write endpoints available for this CosmosDB account.
    """
    def __init__(__self__, resource_name, opts=None, capabilities=None, consistency_policy=None, enable_automatic_failover=None, enable_multiple_write_locations=None, failover_policies=None, geo_locations=None, ip_range_filter=None, is_virtual_network_filter_enabled=None, kind=None, location=None, name=None, offer_type=None, resource_group_name=None, tags=None, virtual_network_rules=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a CosmosDB (formally DocumentDB) Account.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] capabilities: The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
        :param pulumi.Input[dict] consistency_policy: Specifies a `consistency_policy` resource, used to define the consistency policy for this CosmosDB account.
        :param pulumi.Input[bool] enable_automatic_failover: Enable automatic fail over for this Cosmos DB account.
        :param pulumi.Input[bool] enable_multiple_write_locations: Enable multi-master support for this Cosmos DB account.
        :param pulumi.Input[list] geo_locations: Specifies a `geo_location` resource, used to define where data should be replicated with the `failover_priority` 0 specifying the primary location.
        :param pulumi.Input[str] ip_range_filter: CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
        :param pulumi.Input[bool] is_virtual_network_filter_enabled: Enables virtual network filtering for this Cosmos DB account.
        :param pulumi.Input[str] kind: Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] location: The name of the Azure region to host replicated data.
        :param pulumi.Input[str] name: The capability to enable - Possible values are `EnableTable`, `EnableCassandra`, and `EnableGremlin`.
        :param pulumi.Input[str] offer_type: Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[list] virtual_network_rules: Specifies a `virtual_network_rules` resource, used to define which subnets are allowed to access this CosmosDB account.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_account.html.markdown.
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

            __props__['capabilities'] = capabilities
            if consistency_policy is None:
                raise TypeError("Missing required property 'consistency_policy'")
            __props__['consistency_policy'] = consistency_policy
            __props__['enable_automatic_failover'] = enable_automatic_failover
            __props__['enable_multiple_write_locations'] = enable_multiple_write_locations
            __props__['failover_policies'] = failover_policies
            __props__['geo_locations'] = geo_locations
            __props__['ip_range_filter'] = ip_range_filter
            __props__['is_virtual_network_filter_enabled'] = is_virtual_network_filter_enabled
            __props__['kind'] = kind
            __props__['location'] = location
            __props__['name'] = name
            if offer_type is None:
                raise TypeError("Missing required property 'offer_type'")
            __props__['offer_type'] = offer_type
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['virtual_network_rules'] = virtual_network_rules
            __props__['connection_strings'] = None
            __props__['endpoint'] = None
            __props__['primary_master_key'] = None
            __props__['primary_readonly_master_key'] = None
            __props__['read_endpoints'] = None
            __props__['secondary_master_key'] = None
            __props__['secondary_readonly_master_key'] = None
            __props__['write_endpoints'] = None
        super(Account, __self__).__init__(
            'azure:cosmosdb/account:Account',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, capabilities=None, connection_strings=None, consistency_policy=None, enable_automatic_failover=None, enable_multiple_write_locations=None, endpoint=None, failover_policies=None, geo_locations=None, ip_range_filter=None, is_virtual_network_filter_enabled=None, kind=None, location=None, name=None, offer_type=None, primary_master_key=None, primary_readonly_master_key=None, read_endpoints=None, resource_group_name=None, secondary_master_key=None, secondary_readonly_master_key=None, tags=None, virtual_network_rules=None, write_endpoints=None):
        """
        Get an existing Account resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] capabilities: The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
        :param pulumi.Input[list] connection_strings: A list of connection strings available for this CosmosDB account. If the kind is `GlobalDocumentDB`, this will be empty.
        :param pulumi.Input[dict] consistency_policy: Specifies a `consistency_policy` resource, used to define the consistency policy for this CosmosDB account.
        :param pulumi.Input[bool] enable_automatic_failover: Enable automatic fail over for this Cosmos DB account.
        :param pulumi.Input[bool] enable_multiple_write_locations: Enable multi-master support for this Cosmos DB account.
        :param pulumi.Input[str] endpoint: The endpoint used to connect to the CosmosDB account.
        :param pulumi.Input[list] geo_locations: Specifies a `geo_location` resource, used to define where data should be replicated with the `failover_priority` 0 specifying the primary location.
        :param pulumi.Input[str] ip_range_filter: CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
        :param pulumi.Input[bool] is_virtual_network_filter_enabled: Enables virtual network filtering for this Cosmos DB account.
        :param pulumi.Input[str] kind: Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] location: The name of the Azure region to host replicated data.
        :param pulumi.Input[str] name: The capability to enable - Possible values are `EnableTable`, `EnableCassandra`, and `EnableGremlin`.
        :param pulumi.Input[str] offer_type: Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
        :param pulumi.Input[str] primary_master_key: The Primary master key for the CosmosDB Account.
        :param pulumi.Input[str] primary_readonly_master_key: The Primary read-only master Key for the CosmosDB Account.
        :param pulumi.Input[list] read_endpoints: A list of read endpoints available for this CosmosDB account.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] secondary_master_key: The Secondary master key for the CosmosDB Account.
        :param pulumi.Input[str] secondary_readonly_master_key: The Secondary read-only master key for the CosmosDB Account.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[list] virtual_network_rules: Specifies a `virtual_network_rules` resource, used to define which subnets are allowed to access this CosmosDB account.
        :param pulumi.Input[list] write_endpoints: A list of write endpoints available for this CosmosDB account.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_account.html.markdown.
        """
        opts = pulumi.ResourceOptions(id=id) if opts is None else opts.merge(pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["capabilities"] = capabilities
        __props__["connection_strings"] = connection_strings
        __props__["consistency_policy"] = consistency_policy
        __props__["enable_automatic_failover"] = enable_automatic_failover
        __props__["enable_multiple_write_locations"] = enable_multiple_write_locations
        __props__["endpoint"] = endpoint
        __props__["failover_policies"] = failover_policies
        __props__["geo_locations"] = geo_locations
        __props__["ip_range_filter"] = ip_range_filter
        __props__["is_virtual_network_filter_enabled"] = is_virtual_network_filter_enabled
        __props__["kind"] = kind
        __props__["location"] = location
        __props__["name"] = name
        __props__["offer_type"] = offer_type
        __props__["primary_master_key"] = primary_master_key
        __props__["primary_readonly_master_key"] = primary_readonly_master_key
        __props__["read_endpoints"] = read_endpoints
        __props__["resource_group_name"] = resource_group_name
        __props__["secondary_master_key"] = secondary_master_key
        __props__["secondary_readonly_master_key"] = secondary_readonly_master_key
        __props__["tags"] = tags
        __props__["virtual_network_rules"] = virtual_network_rules
        __props__["write_endpoints"] = write_endpoints
        return Account(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

