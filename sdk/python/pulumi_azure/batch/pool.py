# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Pool(pulumi.CustomResource):
    account_name: pulumi.Output[str]
    """
    Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
    """
    auto_scale: pulumi.Output[dict]
    """
    A `auto_scale` block that describes the scale settings when using auto scale.
    
      * `evaluationInterval` (`str`)
      * `formula` (`str`)
    """
    certificates: pulumi.Output[list]
    """
    One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
    
      * `id` (`str`) - The Batch pool ID.
      * `storeLocation` (`str`)
      * `storeName` (`str`)
      * `visibilities` (`list`)
    """
    container_configuration: pulumi.Output[dict]
    """
    The container configuration used in the pool's VMs.
    
      * `containerRegistries` (`list`)
    
        * `password` (`str`)
        * `registryServer` (`str`)
        * `userName` (`str`)
    
      * `type` (`str`)
    """
    display_name: pulumi.Output[str]
    """
    Specifies the display name of the Batch pool.
    """
    fixed_scale: pulumi.Output[dict]
    """
    A `fixed_scale` block that describes the scale settings when using fixed scale.
    
      * `resizeTimeout` (`str`)
      * `targetDedicatedNodes` (`float`)
      * `targetLowPriorityNodes` (`float`)
    """
    max_tasks_per_node: pulumi.Output[float]
    """
    Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
    """
    metadata: pulumi.Output[dict]
    """
    A map of custom batch pool metadata.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Batch pool. Changing this forces a new resource to be created.
    """
    node_agent_sku_id: pulumi.Output[str]
    """
    Specifies the Sku of the node agents that will be created in the Batch pool.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
    """
    start_task: pulumi.Output[dict]
    """
    A `start_task` block that describes the start task settings for the Batch pool.
    
      * `commandLine` (`str`)
      * `environment` (`dict`)
      * `maxTaskRetryCount` (`float`)
      * `resourceFiles` (`list`)
    
        * `autoStorageContainerName` (`str`)
        * `blobPrefix` (`str`)
        * `fileMode` (`str`)
        * `filePath` (`str`)
        * `httpUrl` (`str`)
        * `storageContainerUrl` (`str`)
    
      * `userIdentity` (`dict`)
    
        * `autoUser` (`dict`)
    
          * `elevationLevel` (`str`)
          * `scope` (`str`)
    
        * `userName` (`str`)
    
      * `waitForSuccess` (`bool`)
    """
    stop_pending_resize_operation: pulumi.Output[bool]
    storage_image_reference: pulumi.Output[dict]
    """
    A `storage_image_reference` for the virtual machines that will compose the Batch pool.
    
      * `id` (`str`) - The Batch pool ID.
      * `offer` (`str`)
      * `publisher` (`str`)
      * `sku` (`str`)
      * `version` (`str`)
    """
    vm_size: pulumi.Output[str]
    """
    Specifies the size of the VM created in the Batch pool.
    """
    def __init__(__self__, resource_name, opts=None, account_name=None, auto_scale=None, certificates=None, container_configuration=None, display_name=None, fixed_scale=None, max_tasks_per_node=None, metadata=None, name=None, node_agent_sku_id=None, resource_group_name=None, start_task=None, stop_pending_resize_operation=None, storage_image_reference=None, vm_size=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Azure Batch pool.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] account_name: Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] auto_scale: A `auto_scale` block that describes the scale settings when using auto scale.
        :param pulumi.Input[list] certificates: One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
        :param pulumi.Input[dict] container_configuration: The container configuration used in the pool's VMs.
        :param pulumi.Input[str] display_name: Specifies the display name of the Batch pool.
        :param pulumi.Input[dict] fixed_scale: A `fixed_scale` block that describes the scale settings when using fixed scale.
        :param pulumi.Input[float] max_tasks_per_node: Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] metadata: A map of custom batch pool metadata.
        :param pulumi.Input[str] name: Specifies the name of the Batch pool. Changing this forces a new resource to be created.
        :param pulumi.Input[str] node_agent_sku_id: Specifies the Sku of the node agents that will be created in the Batch pool.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] start_task: A `start_task` block that describes the start task settings for the Batch pool.
        :param pulumi.Input[dict] storage_image_reference: A `storage_image_reference` for the virtual machines that will compose the Batch pool.
        :param pulumi.Input[str] vm_size: Specifies the size of the VM created in the Batch pool.
        
        The **auto_scale** object supports the following:
        
          * `evaluationInterval` (`pulumi.Input[str]`)
          * `formula` (`pulumi.Input[str]`)
        
        The **certificates** object supports the following:
        
          * `id` (`pulumi.Input[str]`) - The Batch pool ID.
          * `storeLocation` (`pulumi.Input[str]`)
          * `storeName` (`pulumi.Input[str]`)
          * `visibilities` (`pulumi.Input[list]`)
        
        The **container_configuration** object supports the following:
        
          * `containerRegistries` (`pulumi.Input[list]`)
        
            * `password` (`pulumi.Input[str]`)
            * `registryServer` (`pulumi.Input[str]`)
            * `userName` (`pulumi.Input[str]`)
        
          * `type` (`pulumi.Input[str]`)
        
        The **fixed_scale** object supports the following:
        
          * `resizeTimeout` (`pulumi.Input[str]`)
          * `targetDedicatedNodes` (`pulumi.Input[float]`)
          * `targetLowPriorityNodes` (`pulumi.Input[float]`)
        
        The **start_task** object supports the following:
        
          * `commandLine` (`pulumi.Input[str]`)
          * `environment` (`pulumi.Input[dict]`)
          * `maxTaskRetryCount` (`pulumi.Input[float]`)
          * `resourceFiles` (`pulumi.Input[list]`)
        
            * `autoStorageContainerName` (`pulumi.Input[str]`)
            * `blobPrefix` (`pulumi.Input[str]`)
            * `fileMode` (`pulumi.Input[str]`)
            * `filePath` (`pulumi.Input[str]`)
            * `httpUrl` (`pulumi.Input[str]`)
            * `storageContainerUrl` (`pulumi.Input[str]`)
        
          * `userIdentity` (`pulumi.Input[dict]`)
        
            * `autoUser` (`pulumi.Input[dict]`)
        
              * `elevationLevel` (`pulumi.Input[str]`)
              * `scope` (`pulumi.Input[str]`)
        
            * `userName` (`pulumi.Input[str]`)
        
          * `waitForSuccess` (`pulumi.Input[bool]`)
        
        The **storage_image_reference** object supports the following:
        
          * `id` (`pulumi.Input[str]`) - The Batch pool ID.
          * `offer` (`pulumi.Input[str]`)
          * `publisher` (`pulumi.Input[str]`)
          * `sku` (`pulumi.Input[str]`)
          * `version` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_pool.html.markdown.
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

            if account_name is None:
                raise TypeError("Missing required property 'account_name'")
            __props__['account_name'] = account_name
            __props__['auto_scale'] = auto_scale
            __props__['certificates'] = certificates
            __props__['container_configuration'] = container_configuration
            __props__['display_name'] = display_name
            __props__['fixed_scale'] = fixed_scale
            __props__['max_tasks_per_node'] = max_tasks_per_node
            __props__['metadata'] = metadata
            __props__['name'] = name
            if node_agent_sku_id is None:
                raise TypeError("Missing required property 'node_agent_sku_id'")
            __props__['node_agent_sku_id'] = node_agent_sku_id
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['start_task'] = start_task
            __props__['stop_pending_resize_operation'] = stop_pending_resize_operation
            if storage_image_reference is None:
                raise TypeError("Missing required property 'storage_image_reference'")
            __props__['storage_image_reference'] = storage_image_reference
            if vm_size is None:
                raise TypeError("Missing required property 'vm_size'")
            __props__['vm_size'] = vm_size
        super(Pool, __self__).__init__(
            'azure:batch/pool:Pool',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, account_name=None, auto_scale=None, certificates=None, container_configuration=None, display_name=None, fixed_scale=None, max_tasks_per_node=None, metadata=None, name=None, node_agent_sku_id=None, resource_group_name=None, start_task=None, stop_pending_resize_operation=None, storage_image_reference=None, vm_size=None):
        """
        Get an existing Pool resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] account_name: Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] auto_scale: A `auto_scale` block that describes the scale settings when using auto scale.
        :param pulumi.Input[list] certificates: One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
        :param pulumi.Input[dict] container_configuration: The container configuration used in the pool's VMs.
        :param pulumi.Input[str] display_name: Specifies the display name of the Batch pool.
        :param pulumi.Input[dict] fixed_scale: A `fixed_scale` block that describes the scale settings when using fixed scale.
        :param pulumi.Input[float] max_tasks_per_node: Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] metadata: A map of custom batch pool metadata.
        :param pulumi.Input[str] name: Specifies the name of the Batch pool. Changing this forces a new resource to be created.
        :param pulumi.Input[str] node_agent_sku_id: Specifies the Sku of the node agents that will be created in the Batch pool.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] start_task: A `start_task` block that describes the start task settings for the Batch pool.
        :param pulumi.Input[dict] storage_image_reference: A `storage_image_reference` for the virtual machines that will compose the Batch pool.
        :param pulumi.Input[str] vm_size: Specifies the size of the VM created in the Batch pool.
        
        The **auto_scale** object supports the following:
        
          * `evaluationInterval` (`pulumi.Input[str]`)
          * `formula` (`pulumi.Input[str]`)
        
        The **certificates** object supports the following:
        
          * `id` (`pulumi.Input[str]`) - The Batch pool ID.
          * `storeLocation` (`pulumi.Input[str]`)
          * `storeName` (`pulumi.Input[str]`)
          * `visibilities` (`pulumi.Input[list]`)
        
        The **container_configuration** object supports the following:
        
          * `containerRegistries` (`pulumi.Input[list]`)
        
            * `password` (`pulumi.Input[str]`)
            * `registryServer` (`pulumi.Input[str]`)
            * `userName` (`pulumi.Input[str]`)
        
          * `type` (`pulumi.Input[str]`)
        
        The **fixed_scale** object supports the following:
        
          * `resizeTimeout` (`pulumi.Input[str]`)
          * `targetDedicatedNodes` (`pulumi.Input[float]`)
          * `targetLowPriorityNodes` (`pulumi.Input[float]`)
        
        The **start_task** object supports the following:
        
          * `commandLine` (`pulumi.Input[str]`)
          * `environment` (`pulumi.Input[dict]`)
          * `maxTaskRetryCount` (`pulumi.Input[float]`)
          * `resourceFiles` (`pulumi.Input[list]`)
        
            * `autoStorageContainerName` (`pulumi.Input[str]`)
            * `blobPrefix` (`pulumi.Input[str]`)
            * `fileMode` (`pulumi.Input[str]`)
            * `filePath` (`pulumi.Input[str]`)
            * `httpUrl` (`pulumi.Input[str]`)
            * `storageContainerUrl` (`pulumi.Input[str]`)
        
          * `userIdentity` (`pulumi.Input[dict]`)
        
            * `autoUser` (`pulumi.Input[dict]`)
        
              * `elevationLevel` (`pulumi.Input[str]`)
              * `scope` (`pulumi.Input[str]`)
        
            * `userName` (`pulumi.Input[str]`)
        
          * `waitForSuccess` (`pulumi.Input[bool]`)
        
        The **storage_image_reference** object supports the following:
        
          * `id` (`pulumi.Input[str]`) - The Batch pool ID.
          * `offer` (`pulumi.Input[str]`)
          * `publisher` (`pulumi.Input[str]`)
          * `sku` (`pulumi.Input[str]`)
          * `version` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_pool.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["account_name"] = account_name
        __props__["auto_scale"] = auto_scale
        __props__["certificates"] = certificates
        __props__["container_configuration"] = container_configuration
        __props__["display_name"] = display_name
        __props__["fixed_scale"] = fixed_scale
        __props__["max_tasks_per_node"] = max_tasks_per_node
        __props__["metadata"] = metadata
        __props__["name"] = name
        __props__["node_agent_sku_id"] = node_agent_sku_id
        __props__["resource_group_name"] = resource_group_name
        __props__["start_task"] = start_task
        __props__["stop_pending_resize_operation"] = stop_pending_resize_operation
        __props__["storage_image_reference"] = storage_image_reference
        __props__["vm_size"] = vm_size
        return Pool(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

