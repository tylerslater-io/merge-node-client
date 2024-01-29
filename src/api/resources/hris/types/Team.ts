/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Team Object
 *
 * ### Description
 *
 * The `Team` object is used to represent a subdivision of the company, usually a department. Each employee will be grouped into one specific Team.
 *
 * ### Usage Example
 *
 * If you're building a way to filter by `Team`, you'd hit the `GET Teams` endpoint to fetch the `Teams`, and then use the `ID` of the team your user selects to filter the `GET Employees` endpoint.
 */
export interface Team {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The team's name. */
    name?: string;
    /** The team's parent team. */
    parentTeam?: Merge.hris.TeamParentTeam;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
