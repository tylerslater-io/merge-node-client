/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: Merge.filestorage.FilesRetrieveRequestExpand.Drive
 *     }
 */
export interface FilesRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.filestorage.FilesRetrieveRequestExpand;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
}
