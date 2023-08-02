/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Comment Object
 * ### Description
 * The `Comment` object is used to represent a comment on a ticket.
 *
 * ### Usage Example
 * TODO
 */
export interface CommentRequest {
    /** The author of the Comment, if the author is a User. */
    user?: string;
    /** The author of the Comment, if the author is a Contact. */
    contact?: string;
    /** The comment's text body. */
    body?: string;
    /** The comment's text body formatted as html. */
    htmlBody?: string;
    /** The ticket associated with the comment. */
    ticket?: string;
    /** Whether or not the comment is internal. */
    isPrivate?: boolean;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}