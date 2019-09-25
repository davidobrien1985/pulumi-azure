# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class AlertRule(pulumi.CustomResource):
    aggregation: pulumi.Output[str]
    """
    Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
    """
    description: pulumi.Output[str]
    """
    A verbose description of the alert rule that will be included in the alert email.
    """
    email_action: pulumi.Output[dict]
    """
    A `email_action` block as defined below.
    
      * `customEmails` (`list`) - A list of email addresses to be notified when the alert is triggered.
      * `sendToServiceOwners` (`bool`) - If `true`, the administrators (service and co-administrators) of the subscription are notified when the alert is triggered. Defaults to `false`.
    """
    enabled: pulumi.Output[bool]
    """
    If `true`, the alert rule is enabled. Defaults to `true`.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    metric_name: pulumi.Output[str]
    """
    The metric that defines what the rule monitors.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the alert rule. Changing this forces a new resource to be created.
    """
    operator: pulumi.Output[str]
    """
    The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
    """
    period: pulumi.Output[str]
    """
    The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
    """
    resource_id: pulumi.Output[str]
    """
    The ID of the resource monitored by the alert rule.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
    """
    threshold: pulumi.Output[float]
    """
    The threshold value that activates the alert.
    """
    webhook_action: pulumi.Output[dict]
    """
    A `webhook_action` block as defined below.
    
      * `properties` (`dict`) - A dictionary of custom properties to include with the webhook POST operation payload.
      * `service_uri` (`str`) - The service uri of the webhook to POST the notification when the alert is triggered.
    """
    def __init__(__self__, resource_name, opts=None, aggregation=None, description=None, email_action=None, enabled=None, location=None, metric_name=None, name=None, operator=None, period=None, resource_group_name=None, resource_id=None, tags=None, threshold=None, webhook_action=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a [metric-based alert rule](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitor-quick-resource-metric-alert-portal) in Azure Monitor.
        
        > **NOTE:** This resource has been [deprecated](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/monitoring-classic-retirement) in favour of the `monitoring.MetricAlert` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aggregation: Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
        :param pulumi.Input[str] description: A verbose description of the alert rule that will be included in the alert email.
        :param pulumi.Input[dict] email_action: A `email_action` block as defined below.
        :param pulumi.Input[bool] enabled: If `true`, the alert rule is enabled. Defaults to `true`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] metric_name: The metric that defines what the rule monitors.
        :param pulumi.Input[str] name: Specifies the name of the alert rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] operator: The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
        :param pulumi.Input[str] period: The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_id: The ID of the resource monitored by the alert rule.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[float] threshold: The threshold value that activates the alert.
        :param pulumi.Input[dict] webhook_action: A `webhook_action` block as defined below.
        
        The **email_action** object supports the following:
        
          * `customEmails` (`pulumi.Input[list]`) - A list of email addresses to be notified when the alert is triggered.
          * `sendToServiceOwners` (`pulumi.Input[bool]`) - If `true`, the administrators (service and co-administrators) of the subscription are notified when the alert is triggered. Defaults to `false`.
        
        The **webhook_action** object supports the following:
        
          * `properties` (`pulumi.Input[dict]`) - A dictionary of custom properties to include with the webhook POST operation payload.
          * `service_uri` (`pulumi.Input[str]`) - The service uri of the webhook to POST the notification when the alert is triggered.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/metric_alertrule.html.markdown.
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

            if aggregation is None:
                raise TypeError("Missing required property 'aggregation'")
            __props__['aggregation'] = aggregation
            __props__['description'] = description
            __props__['email_action'] = email_action
            __props__['enabled'] = enabled
            __props__['location'] = location
            if metric_name is None:
                raise TypeError("Missing required property 'metric_name'")
            __props__['metric_name'] = metric_name
            __props__['name'] = name
            if operator is None:
                raise TypeError("Missing required property 'operator'")
            __props__['operator'] = operator
            if period is None:
                raise TypeError("Missing required property 'period'")
            __props__['period'] = period
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if resource_id is None:
                raise TypeError("Missing required property 'resource_id'")
            __props__['resource_id'] = resource_id
            __props__['tags'] = tags
            if threshold is None:
                raise TypeError("Missing required property 'threshold'")
            __props__['threshold'] = threshold
            __props__['webhook_action'] = webhook_action
        super(AlertRule, __self__).__init__(
            'azure:monitoring/alertRule:AlertRule',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, aggregation=None, description=None, email_action=None, enabled=None, location=None, metric_name=None, name=None, operator=None, period=None, resource_group_name=None, resource_id=None, tags=None, threshold=None, webhook_action=None):
        """
        Get an existing AlertRule resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aggregation: Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
        :param pulumi.Input[str] description: A verbose description of the alert rule that will be included in the alert email.
        :param pulumi.Input[dict] email_action: A `email_action` block as defined below.
        :param pulumi.Input[bool] enabled: If `true`, the alert rule is enabled. Defaults to `true`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] metric_name: The metric that defines what the rule monitors.
        :param pulumi.Input[str] name: Specifies the name of the alert rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] operator: The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
        :param pulumi.Input[str] period: The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_id: The ID of the resource monitored by the alert rule.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[float] threshold: The threshold value that activates the alert.
        :param pulumi.Input[dict] webhook_action: A `webhook_action` block as defined below.
        
        The **email_action** object supports the following:
        
          * `customEmails` (`pulumi.Input[list]`) - A list of email addresses to be notified when the alert is triggered.
          * `sendToServiceOwners` (`pulumi.Input[bool]`) - If `true`, the administrators (service and co-administrators) of the subscription are notified when the alert is triggered. Defaults to `false`.
        
        The **webhook_action** object supports the following:
        
          * `properties` (`pulumi.Input[dict]`) - A dictionary of custom properties to include with the webhook POST operation payload.
          * `service_uri` (`pulumi.Input[str]`) - The service uri of the webhook to POST the notification when the alert is triggered.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/metric_alertrule.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["aggregation"] = aggregation
        __props__["description"] = description
        __props__["email_action"] = email_action
        __props__["enabled"] = enabled
        __props__["location"] = location
        __props__["metric_name"] = metric_name
        __props__["name"] = name
        __props__["operator"] = operator
        __props__["period"] = period
        __props__["resource_group_name"] = resource_group_name
        __props__["resource_id"] = resource_id
        __props__["tags"] = tags
        __props__["threshold"] = threshold
        __props__["webhook_action"] = webhook_action
        return AlertRule(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

