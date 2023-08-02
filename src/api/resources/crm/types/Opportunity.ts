/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Opportunity Object
 * ### Description
 * The `Opportunity` object is used to represent a deal opportunity in a CRM system.
 * ### Usage Example
 * TODO
 */
export interface Opportunity {
    /** The opportunity's name. */
    name?: string;
    /** The opportunity's description. */
    description?: string;
    /** The opportunity's amount. */
    amount?: number;
    /** The opportunity's owner. */
    owner?: string;
    /** The account of the opportunity. */
    account?: string;
    /** The stage of the opportunity. */
    stage?: string;
    /**
     * The opportunity's status.
     *
     * * `OPEN` - OPEN
     * * `WON` - WON
     * * `LOST` - LOST
     */
    status?: Merge.crm.OpportunityStatus;
    /** When the opportunity's last activity occurred. */
    lastActivityAt?: string;
    /** When the opportunity was closed. */
    closeDate?: string;
    /** When the third party's opportunity was created. */
    remoteCreatedAt?: string;
    remoteWasDeleted?: boolean;
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}