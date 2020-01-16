// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.PostgreSql
{
    /// <summary>
    /// Manages a PostgreSQL Server.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/postgresql_server.html.markdown.
    /// </summary>
    public partial class Server : Pulumi.CustomResource
    {
        /// <summary>
        /// The Administrator Login for the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Output("administratorLogin")]
        public Output<string> AdministratorLogin { get; private set; } = null!;

        /// <summary>
        /// The Password associated with the `administrator_login` for the PostgreSQL Server.
        /// </summary>
        [Output("administratorLoginPassword")]
        public Output<string> AdministratorLoginPassword { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the PostgreSQL Server.
        /// </summary>
        [Output("fqdn")]
        public Output<string> Fqdn { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        [Output("sku")]
        public Output<Outputs.ServerSku> Sku { get; private set; } = null!;

        /// <summary>
        /// Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#sku).
        /// </summary>
        [Output("skuName")]
        public Output<string> SkuName { get; private set; } = null!;

        /// <summary>
        /// Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        /// </summary>
        [Output("sslEnforcement")]
        public Output<string> SslEnforcement { get; private set; } = null!;

        /// <summary>
        /// A `storage_profile` block as defined below.
        /// </summary>
        [Output("storageProfile")]
        public Output<Outputs.ServerStorageProfile> StorageProfile { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("version")]
        public Output<string> Version { get; private set; } = null!;


        /// <summary>
        /// Create a Server resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Server(string name, ServerArgs args, CustomResourceOptions? options = null)
            : base("azure:postgresql/server:Server", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Server(string name, Input<string> id, ServerState? state = null, CustomResourceOptions? options = null)
            : base("azure:postgresql/server:Server", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Server resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Server Get(string name, Input<string> id, ServerState? state = null, CustomResourceOptions? options = null)
        {
            return new Server(name, id, state, options);
        }
    }

    public sealed class ServerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Administrator Login for the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("administratorLogin", required: true)]
        public Input<string> AdministratorLogin { get; set; } = null!;

        /// <summary>
        /// The Password associated with the `administrator_login` for the PostgreSQL Server.
        /// </summary>
        [Input("administratorLoginPassword", required: true)]
        public Input<string> AdministratorLoginPassword { get; set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("sku")]
        public Input<Inputs.ServerSkuArgs>? Sku { get; set; }

        /// <summary>
        /// Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#sku).
        /// </summary>
        [Input("skuName")]
        public Input<string>? SkuName { get; set; }

        /// <summary>
        /// Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        /// </summary>
        [Input("sslEnforcement", required: true)]
        public Input<string> SslEnforcement { get; set; } = null!;

        /// <summary>
        /// A `storage_profile` block as defined below.
        /// </summary>
        [Input("storageProfile", required: true)]
        public Input<Inputs.ServerStorageProfileArgs> StorageProfile { get; set; } = null!;

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("version", required: true)]
        public Input<string> Version { get; set; } = null!;

        public ServerArgs()
        {
        }
    }

    public sealed class ServerState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Administrator Login for the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("administratorLogin")]
        public Input<string>? AdministratorLogin { get; set; }

        /// <summary>
        /// The Password associated with the `administrator_login` for the PostgreSQL Server.
        /// </summary>
        [Input("administratorLoginPassword")]
        public Input<string>? AdministratorLoginPassword { get; set; }

        /// <summary>
        /// The FQDN of the PostgreSQL Server.
        /// </summary>
        [Input("fqdn")]
        public Input<string>? Fqdn { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("sku")]
        public Input<Inputs.ServerSkuGetArgs>? Sku { get; set; }

        /// <summary>
        /// Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#sku).
        /// </summary>
        [Input("skuName")]
        public Input<string>? SkuName { get; set; }

        /// <summary>
        /// Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        /// </summary>
        [Input("sslEnforcement")]
        public Input<string>? SslEnforcement { get; set; }

        /// <summary>
        /// A `storage_profile` block as defined below.
        /// </summary>
        [Input("storageProfile")]
        public Input<Inputs.ServerStorageProfileGetArgs>? StorageProfile { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        public ServerState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class ServerSkuArgs : Pulumi.ResourceArgs
    {
        [Input("capacity", required: true)]
        public Input<int> Capacity { get; set; } = null!;

        [Input("family", required: true)]
        public Input<string> Family { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public ServerSkuArgs()
        {
        }
    }

    public sealed class ServerSkuGetArgs : Pulumi.ResourceArgs
    {
        [Input("capacity", required: true)]
        public Input<int> Capacity { get; set; } = null!;

        [Input("family", required: true)]
        public Input<string> Family { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public ServerSkuGetArgs()
        {
        }
    }

    public sealed class ServerStorageProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable/Disable auto-growing of the storage. Valid values for this property are `Enabled` or `Disabled`. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `Enabled`.  
        /// </summary>
        [Input("autoGrow")]
        public Input<string>? AutoGrow { get; set; }

        /// <summary>
        /// Backup retention days for the server, supported values are between `7` and `35` days.
        /// </summary>
        [Input("backupRetentionDays")]
        public Input<int>? BackupRetentionDays { get; set; }

        /// <summary>
        /// Enable/Disable Geo-redundant for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.  This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. The Basic tier only offers locally redundant backup storage.
        /// </summary>
        [Input("geoRedundantBackup")]
        public Input<string>? GeoRedundantBackup { get; set; }

        /// <summary>
        /// Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#StorageProfile).
        /// </summary>
        [Input("storageMb", required: true)]
        public Input<int> StorageMb { get; set; } = null!;

        public ServerStorageProfileArgs()
        {
        }
    }

    public sealed class ServerStorageProfileGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable/Disable auto-growing of the storage. Valid values for this property are `Enabled` or `Disabled`. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `Enabled`.  
        /// </summary>
        [Input("autoGrow")]
        public Input<string>? AutoGrow { get; set; }

        /// <summary>
        /// Backup retention days for the server, supported values are between `7` and `35` days.
        /// </summary>
        [Input("backupRetentionDays")]
        public Input<int>? BackupRetentionDays { get; set; }

        /// <summary>
        /// Enable/Disable Geo-redundant for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.  This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. The Basic tier only offers locally redundant backup storage.
        /// </summary>
        [Input("geoRedundantBackup")]
        public Input<string>? GeoRedundantBackup { get; set; }

        /// <summary>
        /// Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#StorageProfile).
        /// </summary>
        [Input("storageMb", required: true)]
        public Input<int> StorageMb { get; set; } = null!;

        public ServerStorageProfileGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class ServerSku
    {
        public readonly int Capacity;
        public readonly string Family;
        /// <summary>
        /// Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string Name;
        public readonly string Tier;

        [OutputConstructor]
        private ServerSku(
            int capacity,
            string family,
            string name,
            string tier)
        {
            Capacity = capacity;
            Family = family;
            Name = name;
            Tier = tier;
        }
    }

    [OutputType]
    public sealed class ServerStorageProfile
    {
        /// <summary>
        /// Enable/Disable auto-growing of the storage. Valid values for this property are `Enabled` or `Disabled`. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `Enabled`.  
        /// </summary>
        public readonly string? AutoGrow;
        /// <summary>
        /// Backup retention days for the server, supported values are between `7` and `35` days.
        /// </summary>
        public readonly int? BackupRetentionDays;
        /// <summary>
        /// Enable/Disable Geo-redundant for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.  This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. The Basic tier only offers locally redundant backup storage.
        /// </summary>
        public readonly string? GeoRedundantBackup;
        /// <summary>
        /// Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#StorageProfile).
        /// </summary>
        public readonly int StorageMb;

        [OutputConstructor]
        private ServerStorageProfile(
            string? autoGrow,
            int? backupRetentionDays,
            string? geoRedundantBackup,
            int storageMb)
        {
            AutoGrow = autoGrow;
            BackupRetentionDays = backupRetentionDays;
            GeoRedundantBackup = geoRedundantBackup;
            StorageMb = storageMb;
        }
    }
    }
}
