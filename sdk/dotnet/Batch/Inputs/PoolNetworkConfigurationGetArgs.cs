// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Batch.Inputs
{

    public sealed class PoolNetworkConfigurationGetArgs : Pulumi.ResourceArgs
    {
        [Input("endpointConfigurations")]
        private InputList<Inputs.PoolNetworkConfigurationEndpointConfigurationGetArgs>? _endpointConfigurations;

        /// <summary>
        /// A list of inbound NAT pools that can be used to address specific ports on an individual compute node externally. Set as documented in the inbound_nat_pools block below. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<Inputs.PoolNetworkConfigurationEndpointConfigurationGetArgs> EndpointConfigurations
        {
            get => _endpointConfigurations ?? (_endpointConfigurations = new InputList<Inputs.PoolNetworkConfigurationEndpointConfigurationGetArgs>());
            set => _endpointConfigurations = value;
        }

        [Input("publicIps")]
        private InputList<string>? _publicIps;

        /// <summary>
        /// A list of public ip ids that will be allocated to nodes. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<string> PublicIps
        {
            get => _publicIps ?? (_publicIps = new InputList<string>());
            set => _publicIps = value;
        }

        /// <summary>
        /// The ARM resource identifier of the virtual network subnet which the compute nodes of the pool will join. Changing this forces a new resource to be created.
        /// </summary>
        [Input("subnetId", required: true)]
        public Input<string> SubnetId { get; set; } = null!;

        public PoolNetworkConfigurationGetArgs()
        {
        }
    }
}