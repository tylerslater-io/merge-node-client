/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CandidateRequestAttachmentsItem: core.serialization.Schema<
    serializers.ats.CandidateRequestAttachmentsItem.Raw,
    Merge.ats.CandidateRequestAttachmentsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Attachment),
]);

export declare namespace CandidateRequestAttachmentsItem {
    type Raw = string | serializers.ats.Attachment.Raw;
}
