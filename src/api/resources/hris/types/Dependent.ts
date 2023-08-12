/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Dependent Object
 * ### Description
 * The `Dependent` object is used to represent a dependent (e.g. child, spouse, domestic partner, etc) of an `Employee`
 *
 * ### Usage Example
 * Fetch from the `LIST Dependents` endpoint and filter by `ID` to show all dependents.
 */
export interface Dependent {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The dependents's first name. */
    firstName?: string;
    /** The dependents's middle name. */
    middleName?: string;
    /** The dependents's last name. */
    lastName?: string;
    /**
     * The dependent's relationship to the employee.
     *
     * * `CHILD` - CHILD
     * * `SPOUSE` - SPOUSE
     * * `DOMESTIC_PARTNER` - DOMESTIC_PARTNER
     */
    relationship?: Merge.hris.DependentRelationship;
    /** The employee this person is a dependent of. */
    employee?: string;
    /** The dependent's date of birth. */
    dateOfBirth?: Date;
    /**
     * The dependent's gender.
     *
     * * `MALE` - MALE
     * * `FEMALE` - FEMALE
     * * `NON-BINARY` - NON-BINARY
     * * `OTHER` - OTHER
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     */
    gender?: Merge.hris.DependentGender;
    /** The dependent's phone number. */
    phoneNumber?: string;
    /** The dependents's home address. */
    homeLocation?: string;
    /** Whether or not the dependent is a student */
    isStudent?: boolean;
    /** The dependents's social security number. */
    ssn?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}