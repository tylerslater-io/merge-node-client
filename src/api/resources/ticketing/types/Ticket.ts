/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Ticket Object
 *
 * ### Description
 *
 * The `Ticket` object is used to represent a ticket or a task within a system.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Ticket {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The ticket's name. */
    name?: string;
    assignees?: (Merge.ticketing.TicketAssigneesItem | undefined)[];
    /** The user who created this ticket. */
    creator?: Merge.ticketing.TicketCreator;
    /** The ticket's due date. */
    dueDate?: Date;
    /**
     * The current status of the ticket.
     *
     * - `OPEN` - OPEN
     * - `CLOSED` - CLOSED
     * - `IN_PROGRESS` - IN_PROGRESS
     * - `ON_HOLD` - ON_HOLD
     */
    status?: Merge.ticketing.TicketStatus;
    /** The ticket’s description. HTML version of description is mapped if supported by the third-party platform. */
    description?: string;
    collections?: (Merge.ticketing.TicketCollectionsItem | undefined)[];
    /** The ticket's type. */
    ticketType?: string;
    /** The account associated with the ticket. */
    account?: Merge.ticketing.TicketAccount;
    /** The contact associated with the ticket. */
    contact?: Merge.ticketing.TicketContact;
    /** The ticket's parent ticket. */
    parentTicket?: Merge.ticketing.TicketParentTicket;
    attachments?: (Merge.ticketing.TicketAttachmentsItem | undefined)[];
    tags?: (string | undefined)[];
    /** When the third party's ticket was created. */
    remoteCreatedAt?: Date;
    /** When the third party's ticket was updated. */
    remoteUpdatedAt?: Date;
    /** When the ticket was completed. */
    completedAt?: Date;
    remoteWasDeleted?: boolean;
    /** The 3rd party url of the Ticket. */
    ticketUrl?: string;
    /**
     * The priority or urgency of the Ticket.
     *
     * - `URGENT` - URGENT
     * - `HIGH` - HIGH
     * - `NORMAL` - NORMAL
     * - `LOW` - LOW
     */
    priority?: Merge.ticketing.TicketPriority;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
    remoteFields?: Merge.ticketing.RemoteField[];
}
