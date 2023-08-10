/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ReportItem: core.serialization.ObjectSchema<
    serializers.accounting.ReportItem.Raw,
    Merge.accounting.ReportItem
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    value: core.serialization.number().optional(),
    subItems: core.serialization.property(
        "sub_items",
        core.serialization
            .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()))
            .optional()
    ),
    company: core.serialization.string().optional(),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace ReportItem {
    interface Raw {
        remote_id?: string | null;
        name?: string | null;
        value?: number | null;
        sub_items?: Record<string, unknown>[] | null;
        company?: string | null;
        modified_at?: string | null;
    }
}
