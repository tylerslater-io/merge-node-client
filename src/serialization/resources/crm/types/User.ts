/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.crm.User.Raw, Merge.crm.User> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        isActive: core.serialization.property("is_active", core.serialization.boolean().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteData))
                .optional()
        ),
        remoteFields: core.serialization.property(
            "remote_fields",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteField))
                .optional()
        ),
    });

export declare namespace User {
    interface Raw {
        name?: string | null;
        email?: string | null;
        is_active?: boolean | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.crm.RemoteData.Raw[] | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}