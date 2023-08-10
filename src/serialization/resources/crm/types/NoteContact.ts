/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const NoteContact: core.serialization.Schema<serializers.crm.NoteContact.Raw, Merge.crm.NoteContact> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).crm.Contact),
    ]);

export declare namespace NoteContact {
    type Raw = string | serializers.crm.Contact.Raw;
}
