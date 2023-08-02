/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const UrlRequestUrlType: core.serialization.Schema<
    serializers.ats.UrlRequestUrlType.Raw,
    Merge.ats.UrlRequestUrlType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.UrlTypeEnum),
    core.serialization.string(),
]);

export declare namespace UrlRequestUrlType {
    type Raw = serializers.ats.UrlTypeEnum.Raw | string;
}