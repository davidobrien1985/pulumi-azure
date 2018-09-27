// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows you to manage an Azure SQL Database
 */
export class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState): Database {
        return new Database(name, <any>state, { id });
    }

    /**
     * The name of the collation. Applies only if `create_mode` is `Default`.  Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    public readonly collation: pulumi.Output<string>;
    /**
     * Specifies the type of database to create. Defaults to `Default`. See below for the accepted values/
     */
    public readonly createMode: pulumi.Output<string | undefined>;
    /**
     * The creation date of the SQL Database.
     */
    public /*out*/ readonly creationDate: pulumi.Output<string>;
    /**
     * The default secondary location of the SQL Database.
     */
    public /*out*/ readonly defaultSecondaryLocation: pulumi.Output<string>;
    /**
     * The edition of the database to be created. Applies only if `create_mode` is `Default`. Valid values are: `Basic`, `Standard`, `Premium`, or `DataWarehouse`. Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    public readonly edition: pulumi.Output<string>;
    /**
     * The name of the elastic database pool.
     */
    public readonly elasticPoolName: pulumi.Output<string>;
    public /*out*/ readonly encryption: pulumi.Output<string>;
    /**
     * A Database Import block as documented below. `create_mode` must be set to `Default`.
     */
    public readonly import: pulumi.Output<{ administratorLogin: string, administratorLoginPassword: string, authenticationType: string, operationMode?: string, storageKey: string, storageKeyType: string, storageUri: string } | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * The maximum size that the database can grow to. Applies only if `create_mode` is `Default`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    public readonly maxSizeBytes: pulumi.Output<string>;
    /**
     * The name of the database.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Use `requested_service_objective_id` or `requested_service_objective_name` to set the performance level for the database.
     * Valid values are: `S0`, `S1`, `S2`, `S3`, `P1`, `P2`, `P4`, `P6`, `P11` and `ElasticPool`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    public readonly requestedServiceObjectiveId: pulumi.Output<string>;
    /**
     * Use `requested_service_objective_name` or `requested_service_objective_id` to set the performance level for the database.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    public readonly requestedServiceObjectiveName: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the database.  This must be the same as Database Server resource group currently.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The point in time for the restore. Only applies if `create_mode` is `PointInTimeRestore` e.g. 2013-11-08T22:00:40Z
     */
    public readonly restorePointInTime: pulumi.Output<string>;
    /**
     * The name of the SQL Server on which to create the database.
     */
    public readonly serverName: pulumi.Output<string>;
    /**
     * The deletion date time of the source database. Only applies to deleted databases where `create_mode` is `PointInTimeRestore`.
     */
    public readonly sourceDatabaseDeletionDate: pulumi.Output<string>;
    /**
     * The URI of the source database if `create_mode` value is not `Default`.
     */
    public readonly sourceDatabaseId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * Threat detection policy configuration. The `threat_detection_policy` block supports fields documented below.
     */
    public readonly threatDetectionPolicy: pulumi.Output<{ disabledAlerts?: string[], emailAccountAdmins?: string, emailAddresses?: string[], retentionDays?: number, state?: string, storageAccountAccessKey?: string, storageEndpoint?: string, useServerDefault?: string }>;

    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseArgs | DatabaseState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DatabaseState = argsOrState as DatabaseState | undefined;
            inputs["collation"] = state ? state.collation : undefined;
            inputs["createMode"] = state ? state.createMode : undefined;
            inputs["creationDate"] = state ? state.creationDate : undefined;
            inputs["defaultSecondaryLocation"] = state ? state.defaultSecondaryLocation : undefined;
            inputs["edition"] = state ? state.edition : undefined;
            inputs["elasticPoolName"] = state ? state.elasticPoolName : undefined;
            inputs["encryption"] = state ? state.encryption : undefined;
            inputs["import"] = state ? state.import : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["maxSizeBytes"] = state ? state.maxSizeBytes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["requestedServiceObjectiveId"] = state ? state.requestedServiceObjectiveId : undefined;
            inputs["requestedServiceObjectiveName"] = state ? state.requestedServiceObjectiveName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["restorePointInTime"] = state ? state.restorePointInTime : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["sourceDatabaseDeletionDate"] = state ? state.sourceDatabaseDeletionDate : undefined;
            inputs["sourceDatabaseId"] = state ? state.sourceDatabaseId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["threatDetectionPolicy"] = state ? state.threatDetectionPolicy : undefined;
        } else {
            const args = argsOrState as DatabaseArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            inputs["collation"] = args ? args.collation : undefined;
            inputs["createMode"] = args ? args.createMode : undefined;
            inputs["edition"] = args ? args.edition : undefined;
            inputs["elasticPoolName"] = args ? args.elasticPoolName : undefined;
            inputs["import"] = args ? args.import : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maxSizeBytes"] = args ? args.maxSizeBytes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["requestedServiceObjectiveId"] = args ? args.requestedServiceObjectiveId : undefined;
            inputs["requestedServiceObjectiveName"] = args ? args.requestedServiceObjectiveName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["restorePointInTime"] = args ? args.restorePointInTime : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sourceDatabaseDeletionDate"] = args ? args.sourceDatabaseDeletionDate : undefined;
            inputs["sourceDatabaseId"] = args ? args.sourceDatabaseId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["threatDetectionPolicy"] = args ? args.threatDetectionPolicy : undefined;
            inputs["creationDate"] = undefined /*out*/;
            inputs["defaultSecondaryLocation"] = undefined /*out*/;
            inputs["encryption"] = undefined /*out*/;
        }
        super("azure:sql/database:Database", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    /**
     * The name of the collation. Applies only if `create_mode` is `Default`.  Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    readonly collation?: pulumi.Input<string>;
    /**
     * Specifies the type of database to create. Defaults to `Default`. See below for the accepted values/
     */
    readonly createMode?: pulumi.Input<string>;
    /**
     * The creation date of the SQL Database.
     */
    readonly creationDate?: pulumi.Input<string>;
    /**
     * The default secondary location of the SQL Database.
     */
    readonly defaultSecondaryLocation?: pulumi.Input<string>;
    /**
     * The edition of the database to be created. Applies only if `create_mode` is `Default`. Valid values are: `Basic`, `Standard`, `Premium`, or `DataWarehouse`. Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * The name of the elastic database pool.
     */
    readonly elasticPoolName?: pulumi.Input<string>;
    readonly encryption?: pulumi.Input<string>;
    /**
     * A Database Import block as documented below. `create_mode` must be set to `Default`.
     */
    readonly import?: pulumi.Input<{ administratorLogin: pulumi.Input<string>, administratorLoginPassword: pulumi.Input<string>, authenticationType: pulumi.Input<string>, operationMode?: pulumi.Input<string>, storageKey: pulumi.Input<string>, storageKeyType: pulumi.Input<string>, storageUri: pulumi.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The maximum size that the database can grow to. Applies only if `create_mode` is `Default`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly maxSizeBytes?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Use `requested_service_objective_id` or `requested_service_objective_name` to set the performance level for the database.
     * Valid values are: `S0`, `S1`, `S2`, `S3`, `P1`, `P2`, `P4`, `P6`, `P11` and `ElasticPool`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly requestedServiceObjectiveId?: pulumi.Input<string>;
    /**
     * Use `requested_service_objective_name` or `requested_service_objective_id` to set the performance level for the database.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly requestedServiceObjectiveName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the database.  This must be the same as Database Server resource group currently.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The point in time for the restore. Only applies if `create_mode` is `PointInTimeRestore` e.g. 2013-11-08T22:00:40Z
     */
    readonly restorePointInTime?: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to create the database.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * The deletion date time of the source database. Only applies to deleted databases where `create_mode` is `PointInTimeRestore`.
     */
    readonly sourceDatabaseDeletionDate?: pulumi.Input<string>;
    /**
     * The URI of the source database if `create_mode` value is not `Default`.
     */
    readonly sourceDatabaseId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Threat detection policy configuration. The `threat_detection_policy` block supports fields documented below.
     */
    readonly threatDetectionPolicy?: pulumi.Input<{ disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>, emailAccountAdmins?: pulumi.Input<string>, emailAddresses?: pulumi.Input<pulumi.Input<string>[]>, retentionDays?: pulumi.Input<number>, state?: pulumi.Input<string>, storageAccountAccessKey?: pulumi.Input<string>, storageEndpoint?: pulumi.Input<string>, useServerDefault?: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * The name of the collation. Applies only if `create_mode` is `Default`.  Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    readonly collation?: pulumi.Input<string>;
    /**
     * Specifies the type of database to create. Defaults to `Default`. See below for the accepted values/
     */
    readonly createMode?: pulumi.Input<string>;
    /**
     * The edition of the database to be created. Applies only if `create_mode` is `Default`. Valid values are: `Basic`, `Standard`, `Premium`, or `DataWarehouse`. Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * The name of the elastic database pool.
     */
    readonly elasticPoolName?: pulumi.Input<string>;
    /**
     * A Database Import block as documented below. `create_mode` must be set to `Default`.
     */
    readonly import?: pulumi.Input<{ administratorLogin: pulumi.Input<string>, administratorLoginPassword: pulumi.Input<string>, authenticationType: pulumi.Input<string>, operationMode?: pulumi.Input<string>, storageKey: pulumi.Input<string>, storageKeyType: pulumi.Input<string>, storageUri: pulumi.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The maximum size that the database can grow to. Applies only if `create_mode` is `Default`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly maxSizeBytes?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Use `requested_service_objective_id` or `requested_service_objective_name` to set the performance level for the database.
     * Valid values are: `S0`, `S1`, `S2`, `S3`, `P1`, `P2`, `P4`, `P6`, `P11` and `ElasticPool`.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly requestedServiceObjectiveId?: pulumi.Input<string>;
    /**
     * Use `requested_service_objective_name` or `requested_service_objective_id` to set the performance level for the database.  Please see [Azure SQL Database Service Tiers](https://azure.microsoft.com/en-gb/documentation/articles/sql-database-service-tiers/).
     */
    readonly requestedServiceObjectiveName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the database.  This must be the same as Database Server resource group currently.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The point in time for the restore. Only applies if `create_mode` is `PointInTimeRestore` e.g. 2013-11-08T22:00:40Z
     */
    readonly restorePointInTime?: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to create the database.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The deletion date time of the source database. Only applies to deleted databases where `create_mode` is `PointInTimeRestore`.
     */
    readonly sourceDatabaseDeletionDate?: pulumi.Input<string>;
    /**
     * The URI of the source database if `create_mode` value is not `Default`.
     */
    readonly sourceDatabaseId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Threat detection policy configuration. The `threat_detection_policy` block supports fields documented below.
     */
    readonly threatDetectionPolicy?: pulumi.Input<{ disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>, emailAccountAdmins?: pulumi.Input<string>, emailAddresses?: pulumi.Input<pulumi.Input<string>[]>, retentionDays?: pulumi.Input<number>, state?: pulumi.Input<string>, storageAccountAccessKey?: pulumi.Input<string>, storageEndpoint?: pulumi.Input<string>, useServerDefault?: pulumi.Input<string> }>;
}
