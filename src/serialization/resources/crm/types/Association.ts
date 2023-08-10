/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Association: core.serialization.ObjectSchema<serializers.crm.Association.Raw, Merge.crm.Association> =
    core.serialization.object({
        sourceObject: core.serialization.property(
            "source_object",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        targetObject: core.serialization.property(
            "target_object",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        associationType: core.serialization.property(
            "association_type",
            core.serialization.lazy(async () => (await import("../../..")).crm.AssociationAssociationType).optional()
        ),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    });

export declare namespace Association {
    interface Raw {
        source_object?: Record<string, unknown> | null;
        target_object?: Record<string, unknown> | null;
        association_type?: serializers.crm.AssociationAssociationType.Raw | null;
        modified_at?: string | null;
    }
}
