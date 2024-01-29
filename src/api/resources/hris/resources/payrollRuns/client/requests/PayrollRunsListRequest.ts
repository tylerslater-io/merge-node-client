/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         remoteFields: Merge.hris.PayrollRunsListRequestRemoteFields.RunState,
 *         runType: Merge.hris.PayrollRunsListRequestRunType.Correction,
 *         showEnumOrigins: Merge.hris.PayrollRunsListRequestShowEnumOrigins.RunState
 *     }
 */
export interface PayrollRunsListRequest {
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: Date;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: Date;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return payroll runs ended after this datetime.
     */
    endedAfter?: Date;
    /**
     * If provided, will only return payroll runs ended before this datetime.
     */
    endedBefore?: Date;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: Merge.hris.PayrollRunsListRequestRemoteFields;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * If provided, will only return PayrollRun's with this status. Options: ('REGULAR', 'OFF_CYCLE', 'CORRECTION', 'TERMINATION', 'SIGN_ON_BONUS')
     *
     * - `REGULAR` - REGULAR
     * - `OFF_CYCLE` - OFF_CYCLE
     * - `CORRECTION` - CORRECTION
     * - `TERMINATION` - TERMINATION
     * - `SIGN_ON_BONUS` - SIGN_ON_BONUS
     */
    runType?: Merge.hris.PayrollRunsListRequestRunType;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: Merge.hris.PayrollRunsListRequestShowEnumOrigins;
    /**
     * If provided, will only return payroll runs started after this datetime.
     */
    startedAfter?: Date;
    /**
     * If provided, will only return payroll runs started before this datetime.
     */
    startedBefore?: Date;
}
