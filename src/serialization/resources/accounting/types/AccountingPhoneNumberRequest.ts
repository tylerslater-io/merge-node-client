/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountingPhoneNumberRequest: core.serialization.ObjectSchema<
    serializers.accounting.AccountingPhoneNumberRequest.Raw,
    Merge.accounting.AccountingPhoneNumberRequest
> = core.serialization.object({
    number: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AccountingPhoneNumberRequest {
    interface Raw {
        number?: string | null;
        type?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}