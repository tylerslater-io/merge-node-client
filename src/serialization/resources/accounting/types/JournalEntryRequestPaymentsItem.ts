/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryRequestPaymentsItem: core.serialization.Schema<
    serializers.accounting.JournalEntryRequestPaymentsItem.Raw,
    Merge.accounting.JournalEntryRequestPaymentsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Payment),
]);

export declare namespace JournalEntryRequestPaymentsItem {
    type Raw = string | serializers.accounting.Payment.Raw;
}
