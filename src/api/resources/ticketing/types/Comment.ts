/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Comment Object
 *
 * ### Description
 *
 * The `Comment` object is used to represent a comment on a ticket.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Comment {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The author of the Comment, if the author is a User. */
    user?: Merge.ticketing.CommentUser;
    /** The author of the Comment, if the author is a Contact. */
    contact?: Merge.ticketing.CommentContact;
    /** The comment's text body. */
    body?: string;
    /** The comment's text body formatted as html. */
    htmlBody?: string;
    /** The ticket associated with the comment. */
    ticket?: Merge.ticketing.CommentTicket;
    /** Whether or not the comment is internal. */
    isPrivate?: boolean;
    /** When the third party's comment was created. */
    remoteCreatedAt?: Date;
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
