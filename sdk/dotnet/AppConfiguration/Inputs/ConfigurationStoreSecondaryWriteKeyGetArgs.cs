// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppConfiguration.Inputs
{

    public sealed class ConfigurationStoreSecondaryWriteKeyGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Connection String for this Access Key - comprising of the Endpoint, ID and Secret.
        /// </summary>
        [Input("connectionString")]
        public Input<string>? ConnectionString { get; set; }

        /// <summary>
        /// The ID of the Access Key.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The Secret of the Access Key.
        /// </summary>
        [Input("secret")]
        public Input<string>? Secret { get; set; }

        public ConfigurationStoreSecondaryWriteKeyGetArgs()
        {
        }
    }
}
