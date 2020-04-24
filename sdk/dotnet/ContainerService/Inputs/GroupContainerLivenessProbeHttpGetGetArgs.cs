// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.ContainerService.Inputs
{

    public sealed class GroupContainerLivenessProbeHttpGetGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Path to access on the HTTP server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The port number the container will expose. Changing this forces a new resource to be created.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        /// <summary>
        /// Scheme to use for connecting to the host. Possible values are `Http` and `Https`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("scheme")]
        public Input<string>? Scheme { get; set; }

        public GroupContainerLivenessProbeHttpGetGetArgs()
        {
        }
    }
}