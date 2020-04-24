// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Monitoring.Inputs
{

    public sealed class ActionGroupItsmReceiverArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The unique connection identifier of the ITSM connection.
        /// </summary>
        [Input("connectionId", required: true)]
        public Input<string> ConnectionId { get; set; } = null!;

        /// <summary>
        /// The name of the ITSM receiver.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The region of the workspace.
        /// </summary>
        [Input("region", required: true)]
        public Input<string> Region { get; set; } = null!;

        /// <summary>
        /// A JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
        /// </summary>
        [Input("ticketConfiguration", required: true)]
        public Input<string> TicketConfiguration { get; set; } = null!;

        /// <summary>
        /// The Azure Log Analytics workspace ID where this connection is defined.
        /// </summary>
        [Input("workspaceId", required: true)]
        public Input<string> WorkspaceId { get; set; } = null!;

        public ActionGroupItsmReceiverArgs()
        {
        }
    }
}