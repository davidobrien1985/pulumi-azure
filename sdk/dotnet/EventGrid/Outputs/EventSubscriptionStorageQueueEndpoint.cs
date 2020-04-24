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
    public sealed class EventSubscriptionStorageQueueEndpoint
    {
        /// <summary>
        /// Specifies the name of the storage queue where the Event Subscriptio will receive events.
        /// </summary>
        public readonly string QueueName;
        /// <summary>
        /// Specifies the id of the storage account id where the storage queue is located.
        /// </summary>
        public readonly string StorageAccountId;

        [OutputConstructor]
        private EventSubscriptionStorageQueueEndpoint(
            string queueName,

            string storageAccountId)
        {
            QueueName = queueName;
            StorageAccountId = storageAccountId;
        }
    }
}