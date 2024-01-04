/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Candidate Object
 * ### Description
 * The `Candidate` object is used to represent profile information about a given Candidate. Because it is specific to a Candidate, this information stays constant across applications.
 * ### Usage Example
 * Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates.
 */
export interface CandidateRequest {
    /** The candidate's first name. */
    firstName?: string;
    /** The candidate's last name. */
    lastName?: string;
    /** The candidate's current company. */
    company?: string;
    /** The candidate's current title. */
    title?: string;
    /** When the most recent interaction with the candidate occurred. */
    lastInteractionAt?: Date;
    /** Whether or not the candidate is private. */
    isPrivate?: boolean;
    /** Whether or not the candidate can be emailed. */
    canEmail?: boolean;
    /** The candidate's locations. */
    locations?: (string | undefined)[];
    phoneNumbers?: Merge.ats.PhoneNumberRequest[];
    emailAddresses?: Merge.ats.EmailAddressRequest[];
    urls?: Merge.ats.UrlRequest[];
    /** Array of `Tag` names as strings. */
    tags?: (string | undefined)[];
    /** Array of `Application` object IDs. */
    applications?: (Merge.ats.CandidateRequestApplicationsItem | undefined)[];
    /** Array of `Attachment` object IDs. */
    attachments?: (Merge.ats.CandidateRequestAttachmentsItem | undefined)[];
    remoteTemplateId?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
