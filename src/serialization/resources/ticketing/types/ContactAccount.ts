/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ContactAccount: core.serialization.Schema<
    serializers.ticketing.ContactAccount.Raw,
    Merge.ticketing.ContactAccount
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Account),
]);

export declare namespace ContactAccount {
    type Raw = string | serializers.ticketing.Account.Raw;
}
