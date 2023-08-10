/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeePayrollRunPayrollRun: core.serialization.Schema<
    serializers.hris.EmployeePayrollRunPayrollRun.Raw,
    Merge.hris.EmployeePayrollRunPayrollRun
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).hris.PayrollRun),
]);

export declare namespace EmployeePayrollRunPayrollRun {
    type Raw = string | serializers.hris.PayrollRun.Raw;
}
