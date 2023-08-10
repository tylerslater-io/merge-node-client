/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Note: core.serialization.ObjectSchema<serializers.crm.Note.Raw, Merge.crm.Note> =
    core.serialization.object({
        owner: core.serialization.lazy(async () => (await import("../../..")).crm.NoteOwner).optional(),
        content: core.serialization.string().optional(),
        contact: core.serialization.lazy(async () => (await import("../../..")).crm.NoteContact).optional(),
        account: core.serialization.lazy(async () => (await import("../../..")).crm.NoteAccount).optional(),
        opportunity: core.serialization.lazy(async () => (await import("../../..")).crm.NoteOpportunity).optional(),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
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

export declare namespace Note {
    interface Raw {
        owner?: serializers.crm.NoteOwner.Raw | null;
        content?: string | null;
        contact?: serializers.crm.NoteContact.Raw | null;
        account?: serializers.crm.NoteAccount.Raw | null;
        opportunity?: serializers.crm.NoteOpportunity.Raw | null;
        remote_updated_at?: string | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.crm.RemoteData.Raw[] | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}
