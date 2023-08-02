/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmploymentPayPeriod: core.serialization.Schema<
    serializers.hris.EmploymentPayPeriod.Raw,
    Merge.hris.EmploymentPayPeriod
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.PayPeriodEnum),
    core.serialization.string(),
]);

export declare namespace EmploymentPayPeriod {
    type Raw = serializers.hris.PayPeriodEnum.Raw | string;
}