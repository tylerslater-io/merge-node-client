/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PhoneNumberRequest: core.serialization.ObjectSchema<
    serializers.ats.PhoneNumberRequest.Raw,
    Merge.ats.PhoneNumberRequest
> = core.serialization.object({
    value: core.serialization.string().optional(),
    phoneNumberType: core.serialization.property(
        "phone_number_type",
        core.serialization.lazy(async () => (await import("../../..")).ats.PhoneNumberRequestPhoneNumberType).optional()
    ),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace PhoneNumberRequest {
    interface Raw {
        value?: string | null;
        phone_number_type?: serializers.ats.PhoneNumberRequestPhoneNumberType.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}