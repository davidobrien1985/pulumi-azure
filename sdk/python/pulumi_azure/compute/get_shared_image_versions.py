# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetSharedImageVersionsResult:
    """
    A collection of values returned by getSharedImageVersions.
    """
    def __init__(__self__, gallery_name=None, id=None, image_name=None, images=None, resource_group_name=None, tags_filter=None):
        if gallery_name and not isinstance(gallery_name, str):
            raise TypeError("Expected argument 'gallery_name' to be a str")
        __self__.gallery_name = gallery_name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if image_name and not isinstance(image_name, str):
            raise TypeError("Expected argument 'image_name' to be a str")
        __self__.image_name = image_name
        if images and not isinstance(images, list):
            raise TypeError("Expected argument 'images' to be a list")
        __self__.images = images
        """
        An `images` block as defined below:
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if tags_filter and not isinstance(tags_filter, dict):
            raise TypeError("Expected argument 'tags_filter' to be a dict")
        __self__.tags_filter = tags_filter
class AwaitableGetSharedImageVersionsResult(GetSharedImageVersionsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetSharedImageVersionsResult(
            gallery_name=self.gallery_name,
            id=self.id,
            image_name=self.image_name,
            images=self.images,
            resource_group_name=self.resource_group_name,
            tags_filter=self.tags_filter)

def get_shared_image_versions(gallery_name=None,image_name=None,resource_group_name=None,tags_filter=None,opts=None):
    """
    Use this data source to access information about existing Versions of a Shared Image within a Shared Image Gallery.




    :param str gallery_name: The name of the Shared Image in which the Shared Image exists.
    :param str image_name: The name of the Shared Image in which this Version exists.
    :param str resource_group_name: The name of the Resource Group in which the Shared Image Gallery exists.
    :param dict tags_filter: A mapping of tags to filter the list of images against.
    """
    __args__ = dict()


    __args__['galleryName'] = gallery_name
    __args__['imageName'] = image_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['tagsFilter'] = tags_filter
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:compute/getSharedImageVersions:getSharedImageVersions', __args__, opts=opts).value

    return AwaitableGetSharedImageVersionsResult(
        gallery_name=__ret__.get('galleryName'),
        id=__ret__.get('id'),
        image_name=__ret__.get('imageName'),
        images=__ret__.get('images'),
        resource_group_name=__ret__.get('resourceGroupName'),
        tags_filter=__ret__.get('tagsFilter'))
