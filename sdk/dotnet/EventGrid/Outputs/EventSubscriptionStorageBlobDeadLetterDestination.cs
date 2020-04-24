// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.EventGrid.Outputs
{

    [OutputType]
    public sealed class EventSubscriptionStorageBlobDeadLetterDestination
    {
        /// <summary>
        /// Specifies the id of the storage account id where the storage blob is located.
        /// </summary>
        public readonly string StorageAccountId;
        /// <summary>
        /// Specifies the name of the Storage blob container that is the destination of the deadletter events
        /// </summary>
        public readonly string StorageBlobContainerName;

        [OutputConstructor]
        private EventSubscriptionStorageBlobDeadLetterDestination(
            string storageAccountId,

            string storageBlobContainerName)
        {
            StorageAccountId = storageAccountId;
            StorageBlobContainerName = storageBlobContainerName;
        }
    }
}