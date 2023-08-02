/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.ats.forceResync.syncStatusResyncCreate.Response.Raw,
    Merge.ats.SyncStatus[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../../..")).ats.SyncStatus));

export declare namespace Response {
    type Raw = serializers.ats.SyncStatus.Raw[];
}