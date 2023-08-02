/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const PatchedCrmCustomObjectEndpointRequest: core.serialization.Schema<
    serializers.crm.PatchedCrmCustomObjectEndpointRequest.Raw,
    Omit<Merge.crm.PatchedCrmCustomObjectEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).crm.CustomObjectRequest),
});

export declare namespace PatchedCrmCustomObjectEndpointRequest {
    interface Raw {
        model: serializers.crm.CustomObjectRequest.Raw;
    }
}