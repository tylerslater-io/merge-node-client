/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface TimeOffListRequest {
    /**
     * If provided, will only return time off for this approver.
     */
    approverId?: string;
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: string;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: string;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return time off for this employee.
     */
    employeeId?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.hris.TimeOffListRequestExpand;
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
    modifiedAfter?: string;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: Merge.hris.TimeOffListRequestRemoteFields;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * If provided, will only return TimeOff with this request type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
     *
     * * `VACATION` - VACATION
     * * `SICK` - SICK
     * * `PERSONAL` - PERSONAL
     * * `JURY_DUTY` - JURY_DUTY
     * * `VOLUNTEER` - VOLUNTEER
     * * `BEREAVEMENT` - BEREAVEMENT
     */
    requestType?: Merge.hris.TimeOffListRequestRequestType;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: Merge.hris.TimeOffListRequestShowEnumOrigins;
    /**
     * If provided, will only return TimeOff with this status. Options: ('REQUESTED', 'APPROVED', 'DECLINED', 'CANCELLED', 'DELETED')
     *
     * * `REQUESTED` - REQUESTED
     * * `APPROVED` - APPROVED
     * * `DECLINED` - DECLINED
     * * `CANCELLED` - CANCELLED
     * * `DELETED` - DELETED
     */
    status?: Merge.hris.TimeOffListRequestStatus;
}