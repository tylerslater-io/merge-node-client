/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AssociationSubType: core.serialization.ObjectSchema<
    serializers.crm.AssociationSubType.Raw,
    Merge.crm.AssociationSubType
> = core.serialization.object({
    id: core.serialization.string().optional(),
    originType: core.serialization.property("origin_type", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace AssociationSubType {
    interface Raw {
        id?: string | null;
        origin_type?: string | null;
        modified_at?: string | null;
    }
}
