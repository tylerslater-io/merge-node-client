/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmailAddress: core.serialization.ObjectSchema<serializers.ats.EmailAddress.Raw, Merge.ats.EmailAddress> =
    core.serialization.object({
        value: core.serialization.string().optional(),
        emailAddressType: core.serialization.property(
            "email_address_type",
            core.serialization.lazy(async () => (await import("../../..")).ats.EmailAddressEmailAddressType).optional()
        ),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    });

export declare namespace EmailAddress {
    interface Raw {
        value?: string | null;
        email_address_type?: serializers.ats.EmailAddressEmailAddressType.Raw | null;
        modified_at?: string | null;
    }
}
