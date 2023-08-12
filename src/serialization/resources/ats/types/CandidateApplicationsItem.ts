/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CandidateApplicationsItem: core.serialization.Schema<
    serializers.ats.CandidateApplicationsItem.Raw,
    Merge.ats.CandidateApplicationsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Application),
]);

export declare namespace CandidateApplicationsItem {
    type Raw = string | serializers.ats.Application.Raw;
}