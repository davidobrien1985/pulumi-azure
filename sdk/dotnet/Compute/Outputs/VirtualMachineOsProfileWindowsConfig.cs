// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute.Outputs
{

    [OutputType]
    public sealed class VirtualMachineOsProfileWindowsConfig
    {
        /// <summary>
        /// A `additional_unattend_config` block.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig> AdditionalUnattendConfigs;
        /// <summary>
        /// Are automatic updates enabled on this Virtual Machine? Defaults to `false.`
        /// </summary>
        public readonly bool? EnableAutomaticUpgrades;
        /// <summary>
        /// Should the Azure Virtual Machine Guest Agent be installed on this Virtual Machine? Defaults to `false`.
        /// </summary>
        public readonly bool? ProvisionVmAgent;
        /// <summary>
        /// Specifies the time zone of the virtual machine, [the possible values are defined here](http://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
        /// </summary>
        public readonly string? Timezone;
        /// <summary>
        /// One or more `winrm` block.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualMachineOsProfileWindowsConfigWinrm> Winrms;

        [OutputConstructor]
        private VirtualMachineOsProfileWindowsConfig(
            ImmutableArray<Outputs.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig> additionalUnattendConfigs,

            bool? enableAutomaticUpgrades,

            bool? provisionVmAgent,

            string? timezone,

            ImmutableArray<Outputs.VirtualMachineOsProfileWindowsConfigWinrm> winrms)
        {
            AdditionalUnattendConfigs = additionalUnattendConfigs;
            EnableAutomaticUpgrades = enableAutomaticUpgrades;
            ProvisionVmAgent = provisionVmAgent;
            Timezone = timezone;
            Winrms = winrms;
        }
    }
}