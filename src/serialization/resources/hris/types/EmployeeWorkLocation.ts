/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeeWorkLocation: core.serialization.Schema<
    serializers.hris.EmployeeWorkLocation.Raw,
    Merge.hris.EmployeeWorkLocation
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).hris.Location),
]);

export declare namespace EmployeeWorkLocation {
    type Raw = string | serializers.hris.Location.Raw;
}
