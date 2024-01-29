/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Engagement Object
 *
 * ### Description
 *
 * The `Engagement` object is used to represent an interaction noted in a CRM system.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Engagement {
    /** The engagement's owner. */
    owner?: Merge.crm.EngagementOwner;
    /** The engagement's content. */
    content?: string;
    /** The engagement's subject. */
    subject?: string;
    /**
     * The engagement's direction.
     *
     * - `INBOUND` - INBOUND
     * - `OUTBOUND` - OUTBOUND
     */
    direction?: Merge.crm.EngagementDirection;
    /** The engagement type of the engagement. */
    engagementType?: Merge.crm.EngagementEngagementType;
    /** The time at which the engagement started. */
    startTime?: Date;
    /** The time at which the engagement ended. */
    endTime?: Date;
    /** The account of the engagement. */
    account?: Merge.crm.EngagementAccount;
    contacts?: (Merge.crm.EngagementContactsItem | undefined)[];
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
