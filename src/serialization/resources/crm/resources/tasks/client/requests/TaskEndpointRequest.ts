/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const TaskEndpointRequest: core.serialization.Schema<
    serializers.crm.TaskEndpointRequest.Raw,
    Omit<Merge.crm.TaskEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).crm.TaskRequest),
});

export declare namespace TaskEndpointRequest {
    interface Raw {
        model: serializers.crm.TaskRequest.Raw;
    }
}