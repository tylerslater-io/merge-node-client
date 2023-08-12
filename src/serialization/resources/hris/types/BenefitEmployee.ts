/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const BenefitEmployee: core.serialization.Schema<
    serializers.hris.BenefitEmployee.Raw,
    Merge.hris.BenefitEmployee
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).hris.Employee),
]);

export declare namespace BenefitEmployee {
    type Raw = string | serializers.hris.Employee.Raw;
}