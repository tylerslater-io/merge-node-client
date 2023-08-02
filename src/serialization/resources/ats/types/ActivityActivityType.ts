/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ActivityActivityType: core.serialization.Schema<
    serializers.ats.ActivityActivityType.Raw,
    Merge.ats.ActivityActivityType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.ActivityTypeEnum),
    core.serialization.string(),
]);

export declare namespace ActivityActivityType {
    type Raw = serializers.ats.ActivityTypeEnum.Raw | string;
}