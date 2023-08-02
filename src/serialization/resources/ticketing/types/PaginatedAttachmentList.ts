/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAttachmentList: core.serialization.ObjectSchema<
    serializers.ticketing.PaginatedAttachmentList.Raw,
    Merge.ticketing.PaginatedAttachmentList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Attachment))
        .optional(),
});

export declare namespace PaginatedAttachmentList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ticketing.Attachment.Raw[] | null;
    }
}