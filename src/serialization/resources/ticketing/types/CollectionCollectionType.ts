/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CollectionCollectionType: core.serialization.Schema<
    serializers.ticketing.CollectionCollectionType.Raw,
    Merge.ticketing.CollectionCollectionType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ticketing.CollectionTypeEnum),
    core.serialization.string(),
]);

export declare namespace CollectionCollectionType {
    type Raw = serializers.ticketing.CollectionTypeEnum.Raw | string;
}