/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountDetailsAndActionsIntegration: core.serialization.ObjectSchema<
    serializers.ticketing.AccountDetailsAndActionsIntegration.Raw,
    Merge.ticketing.AccountDetailsAndActionsIntegration
> = core.serialization.object({
    name: core.serialization.string(),
    categories: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../..")).ticketing.CategoriesEnum)
    ),
    image: core.serialization.string().optional(),
    squareImage: core.serialization.property("square_image", core.serialization.string().optional()),
    color: core.serialization.string(),
    slug: core.serialization.string(),
    passthroughAvailable: core.serialization.property("passthrough_available", core.serialization.boolean()),
    availableModelOperations: core.serialization.property(
        "available_model_operations",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.ModelOperation))
            .optional()
    ),
});

export declare namespace AccountDetailsAndActionsIntegration {
    interface Raw {
        name: string;
        categories: serializers.ticketing.CategoriesEnum.Raw[];
        image?: string | null;
        square_image?: string | null;
        color: string;
        slug: string;
        passthrough_available: boolean;
        available_model_operations?: serializers.ticketing.ModelOperation.Raw[] | null;
    }
}