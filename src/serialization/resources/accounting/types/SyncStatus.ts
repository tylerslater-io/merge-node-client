/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const SyncStatus: core.serialization.ObjectSchema<
    serializers.accounting.SyncStatus.Raw,
    Merge.accounting.SyncStatus
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    modelId: core.serialization.property("model_id", core.serialization.string()),
    lastSyncStart: core.serialization.property("last_sync_start", core.serialization.date().optional()),
    nextSyncStart: core.serialization.property("next_sync_start", core.serialization.date().optional()),
    status: core.serialization.lazy(async () => (await import("../../..")).accounting.SyncStatusStatusEnum),
    isInitialSync: core.serialization.property("is_initial_sync", core.serialization.boolean()),
    selectiveSyncConfigurationsUsage: core.serialization.property(
        "selective_sync_configurations_usage",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.SelectiveSyncConfigurationsUsageEnum)
            .optional()
    ),
});

export declare namespace SyncStatus {
    interface Raw {
        model_name: string;
        model_id: string;
        last_sync_start?: string | null;
        next_sync_start?: string | null;
        status: serializers.accounting.SyncStatusStatusEnum.Raw;
        is_initial_sync: boolean;
        selective_sync_configurations_usage?: serializers.accounting.SelectiveSyncConfigurationsUsageEnum.Raw | null;
    }
}
