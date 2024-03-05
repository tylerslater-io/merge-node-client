/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingApiInstanceResponse: core.serialization.ObjectSchema<
    serializers.ticketing.FieldMappingApiInstanceResponse.Raw,
    Merge.ticketing.FieldMappingApiInstanceResponse
> = core.serialization.object({
    ticket: core.serialization.property(
        "Ticket",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    comment: core.serialization.property(
        "Comment",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    project: core.serialization.property(
        "Project",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    collection: core.serialization.property(
        "Collection",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    user: core.serialization.property(
        "User",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    role: core.serialization.property(
        "Role",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    account: core.serialization.property(
        "Account",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    team: core.serialization.property(
        "Team",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    attachment: core.serialization.property(
        "Attachment",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    tag: core.serialization.property(
        "Tag",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
    contact: core.serialization.property(
        "Contact",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).ticketing.FieldMappingApiInstance)
            )
            .optional()
    ),
});

export declare namespace FieldMappingApiInstanceResponse {
    interface Raw {
        Ticket?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Comment?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Project?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Collection?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        User?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Role?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Account?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Team?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Attachment?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Tag?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
        Contact?: serializers.ticketing.FieldMappingApiInstance.Raw[] | null;
    }
}