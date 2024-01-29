/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: Merge.hris.TimeOffRetrieveRequestExpand.Approver,
 *         remoteFields: Merge.hris.TimeOffRetrieveRequestRemoteFields.RequestType,
 *         showEnumOrigins: Merge.hris.TimeOffRetrieveRequestShowEnumOrigins.RequestType
 *     }
 */
export interface TimeOffRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.hris.TimeOffRetrieveRequestExpand;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: Merge.hris.TimeOffRetrieveRequestRemoteFields;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: Merge.hris.TimeOffRetrieveRequestShowEnumOrigins;
}
