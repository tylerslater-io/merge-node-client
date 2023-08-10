/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DependentsRetrieveRequest {
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include sensitive fields (such as social security numbers) in the response.
     */
    includeSensitiveFields?: boolean;
}
