/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AsyncPassthroughReciept: core.serialization.ObjectSchema<
    serializers.ats.AsyncPassthroughReciept.Raw,
    Merge.ats.AsyncPassthroughReciept
> = core.serialization.object({
    asyncPassthroughReceiptId: core.serialization.property("async_passthrough_receipt_id", core.serialization.string()),
});

export declare namespace AsyncPassthroughReciept {
    interface Raw {
        async_passthrough_receipt_id: string;
    }
}
