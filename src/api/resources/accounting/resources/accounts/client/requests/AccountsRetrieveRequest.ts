/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: "company",
 *         remoteFields: Merge.accounting.AccountsRetrieveRequestRemoteFields.Classification,
 *         showEnumOrigins: Merge.accounting.AccountsRetrieveRequestShowEnumOrigins.Classification
 *     }
 */
export interface AccountsRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: "company";
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: Merge.accounting.AccountsRetrieveRequestRemoteFields;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: Merge.accounting.AccountsRetrieveRequestShowEnumOrigins;
}
