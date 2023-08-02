/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OverallRecommendationEnum: core.serialization.Schema<
    serializers.ats.OverallRecommendationEnum.Raw,
    Merge.ats.OverallRecommendationEnum
> = core.serialization.enum_(["DEFINITELY_NO", "NO", "YES", "STRONG_YES", "NO_DECISION"]);

export declare namespace OverallRecommendationEnum {
    type Raw = "DEFINITELY_NO" | "NO" | "YES" | "STRONG_YES" | "NO_DECISION";
}