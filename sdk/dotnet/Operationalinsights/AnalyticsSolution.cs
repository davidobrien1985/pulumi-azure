// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.OperationalInsights
{
    /// <summary>
    /// Manages a Log Analytics (formally Operational Insights) Solution.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/log_analytics_solution.html.markdown.
    /// </summary>
    public partial class AnalyticsSolution : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// A `plan` block as documented below.
        /// </summary>
        [Output("plan")]
        public Output<Outputs.AnalyticsSolutionPlan> Plan { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and it's related workspace can only exist in the same resource group.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
        /// </summary>
        [Output("solutionName")]
        public Output<string> SolutionName { get; private set; } = null!;

        /// <summary>
        /// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Output("workspaceName")]
        public Output<string> WorkspaceName { get; private set; } = null!;

        /// <summary>
        /// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Output("workspaceResourceId")]
        public Output<string> WorkspaceResourceId { get; private set; } = null!;


        /// <summary>
        /// Create a AnalyticsSolution resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AnalyticsSolution(string name, AnalyticsSolutionArgs args, CustomResourceOptions? options = null)
            : base("azure:operationalinsights/analyticsSolution:AnalyticsSolution", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private AnalyticsSolution(string name, Input<string> id, AnalyticsSolutionState? state = null, CustomResourceOptions? options = null)
            : base("azure:operationalinsights/analyticsSolution:AnalyticsSolution", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AnalyticsSolution resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AnalyticsSolution Get(string name, Input<string> id, AnalyticsSolutionState? state = null, CustomResourceOptions? options = null)
        {
            return new AnalyticsSolution(name, id, state, options);
        }
    }

    public sealed class AnalyticsSolutionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// A `plan` block as documented below.
        /// </summary>
        [Input("plan", required: true)]
        public Input<Inputs.AnalyticsSolutionPlanArgs> Plan { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and it's related workspace can only exist in the same resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
        /// </summary>
        [Input("solutionName", required: true)]
        public Input<string> SolutionName { get; set; } = null!;

        /// <summary>
        /// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        /// <summary>
        /// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Input("workspaceResourceId", required: true)]
        public Input<string> WorkspaceResourceId { get; set; } = null!;

        public AnalyticsSolutionArgs()
        {
        }
    }

    public sealed class AnalyticsSolutionState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// A `plan` block as documented below.
        /// </summary>
        [Input("plan")]
        public Input<Inputs.AnalyticsSolutionPlanGetArgs>? Plan { get; set; }

        /// <summary>
        /// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and it's related workspace can only exist in the same resource group.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
        /// </summary>
        [Input("solutionName")]
        public Input<string>? SolutionName { get; set; }

        /// <summary>
        /// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Input("workspaceName")]
        public Input<string>? WorkspaceName { get; set; }

        /// <summary>
        /// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        /// </summary>
        [Input("workspaceResourceId")]
        public Input<string>? WorkspaceResourceId { get; set; }

        public AnalyticsSolutionState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class AnalyticsSolutionPlanArgs : Pulumi.ResourceArgs
    {
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("product", required: true)]
        public Input<string> Product { get; set; } = null!;

        [Input("promotionCode")]
        public Input<string>? PromotionCode { get; set; }

        [Input("publisher", required: true)]
        public Input<string> Publisher { get; set; } = null!;

        public AnalyticsSolutionPlanArgs()
        {
        }
    }

    public sealed class AnalyticsSolutionPlanGetArgs : Pulumi.ResourceArgs
    {
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("product", required: true)]
        public Input<string> Product { get; set; } = null!;

        [Input("promotionCode")]
        public Input<string>? PromotionCode { get; set; }

        [Input("publisher", required: true)]
        public Input<string> Publisher { get; set; } = null!;

        public AnalyticsSolutionPlanGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class AnalyticsSolutionPlan
    {
        public readonly string Name;
        public readonly string Product;
        public readonly string? PromotionCode;
        public readonly string Publisher;

        [OutputConstructor]
        private AnalyticsSolutionPlan(
            string name,
            string product,
            string? promotionCode,
            string publisher)
        {
            Name = name;
            Product = product;
            PromotionCode = promotionCode;
            Publisher = publisher;
        }
    }
    }
}