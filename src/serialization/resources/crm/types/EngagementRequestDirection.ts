/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EngagementRequestDirection: core.serialization.Schema<
    serializers.crm.EngagementRequestDirection.Raw,
    Merge.crm.EngagementRequestDirection
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.DirectionEnum),
    core.serialization.string(),
]);

export declare namespace EngagementRequestDirection {
    type Raw = serializers.crm.DirectionEnum.Raw | string;
}