/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CustomObjectRequest: core.serialization.ObjectSchema<
    serializers.crm.CustomObjectRequest.Raw,
    Merge.crm.CustomObjectRequest
> = core.serialization.object({
    fields: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace CustomObjectRequest {
    interface Raw {
        fields: Record<string, unknown>;
    }
}