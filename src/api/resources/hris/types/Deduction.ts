/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Deduction Object
 * ### Description
 * The `Deduction` object is used to represent an array of the wages withheld from total earnings for the purpose of paying taxes.
 *
 * ### Usage Example
 * Fetch from the `LIST Deductions` endpoint and filter by `ID` to show all deductions.
 */
export interface Deduction {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    employeePayrollRun?: string;
    /** The deduction's name. */
    name?: string;
    /** The amount of money that is withheld from an employee's gross pay by the employee. */
    employeeDeduction?: number;
    /** The amount of money that is withheld on behalf of an employee by the company. */
    companyDeduction?: number;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}