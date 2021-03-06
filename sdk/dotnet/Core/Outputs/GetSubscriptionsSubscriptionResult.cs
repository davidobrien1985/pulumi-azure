// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Core.Outputs
{

    [OutputType]
    public sealed class GetSubscriptionsSubscriptionResult
    {
        /// <summary>
        /// The subscription display name.
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// The subscription location placement ID.
        /// </summary>
        public readonly string LocationPlacementId;
        /// <summary>
        /// The subscription quota ID.
        /// </summary>
        public readonly string QuotaId;
        /// <summary>
        /// The subscription spending limit.
        /// </summary>
        public readonly string SpendingLimit;
        /// <summary>
        /// The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The subscription GUID.
        /// </summary>
        public readonly string SubscriptionId;
        /// <summary>
        /// The subscription tenant ID.
        /// </summary>
        public readonly string TenantId;

        [OutputConstructor]
        private GetSubscriptionsSubscriptionResult(
            string displayName,

            string locationPlacementId,

            string quotaId,

            string spendingLimit,

            string state,

            string subscriptionId,

            string tenantId)
        {
            DisplayName = displayName;
            LocationPlacementId = locationPlacementId;
            QuotaId = quotaId;
            SpendingLimit = spendingLimit;
            State = state;
            SubscriptionId = subscriptionId;
            TenantId = tenantId;
        }
    }
}
