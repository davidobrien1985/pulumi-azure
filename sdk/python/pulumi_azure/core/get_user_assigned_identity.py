# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

warnings.warn("azure.core.getUserAssignedIdentity has been deprecated in favour of azure.authorization.getUserAssignedIdentity", DeprecationWarning)
class GetUserAssignedIdentityResult:
    """
    A collection of values returned by getUserAssignedIdentity.
    """
    def __init__(__self__, client_id=None, id=None, location=None, name=None, principal_id=None, resource_group_name=None, tags=None):
        if client_id and not isinstance(client_id, str):
            raise TypeError("Expected argument 'client_id' to be a str")
        __self__.client_id = client_id
        """
        The Client ID of the User Assigned Identity.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The Azure location where the User Assigned Identity exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if principal_id and not isinstance(principal_id, str):
            raise TypeError("Expected argument 'principal_id' to be a str")
        __self__.principal_id = principal_id
        """
        The Service Principal ID of the User Assigned Identity.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags assigned to the User Assigned Identity.
        """
class AwaitableGetUserAssignedIdentityResult(GetUserAssignedIdentityResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetUserAssignedIdentityResult(
            client_id=self.client_id,
            id=self.id,
            location=self.location,
            name=self.name,
            principal_id=self.principal_id,
            resource_group_name=self.resource_group_name,
            tags=self.tags)

def get_user_assigned_identity(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing User Assigned Identity.

    Deprecated: azure.core.getUserAssignedIdentity has been deprecated in favour of azure.authorization.getUserAssignedIdentity


    :param str name: The name of the User Assigned Identity.
    :param str resource_group_name: The name of the Resource Group in which the User Assigned Identity exists.
    """
    pulumi.log.warn("get_user_assigned_identity is deprecated: azure.core.getUserAssignedIdentity has been deprecated in favour of azure.authorization.getUserAssignedIdentity")
    __args__ = dict()


    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:core/getUserAssignedIdentity:getUserAssignedIdentity', __args__, opts=opts).value

    return AwaitableGetUserAssignedIdentityResult(
        client_id=__ret__.get('clientId'),
        id=__ret__.get('id'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        principal_id=__ret__.get('principalId'),
        resource_group_name=__ret__.get('resourceGroupName'),
        tags=__ret__.get('tags'))
