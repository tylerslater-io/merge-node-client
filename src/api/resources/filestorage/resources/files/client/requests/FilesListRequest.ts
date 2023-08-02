/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface FilesListRequest {
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
     * If provided, will only return files in this drive. If null, will return files in the top level drive.
     */
    driveId?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.filestorage.FilesListRequestExpand;
    /**
     * If provided, will only return files in this folder. If null, will return files in root directory.
     */
    folderId?: string;
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
     * If provided, will only return files with this name. This performs an exact match.
     */
    name?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
}