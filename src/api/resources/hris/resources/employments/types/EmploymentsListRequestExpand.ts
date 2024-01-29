/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type EmploymentsListRequestExpand = "employee" | "employee,pay_group" | "pay_group";

export const EmploymentsListRequestExpand = {
    Employee: "employee",
    EmployeePayGroup: "employee,pay_group",
    PayGroup: "pay_group",
} as const;