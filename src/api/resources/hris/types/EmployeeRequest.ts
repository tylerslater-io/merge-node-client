/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Employee Object
 * ### Description
 * The `Employee` object is used to represent any person who has been employed by a company.
 *
 * ### Usage Example
 * Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
 */
export interface EmployeeRequest {
    /** The employee's number that appears in the third-party integration's UI. */
    employeeNumber?: string;
    /** The ID of the employee's company. */
    company?: Merge.hris.EmployeeRequestCompany;
    /** The employee's first name. */
    firstName?: string;
    /** The employee's last name. */
    lastName?: string;
    /** The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name. */
    displayFullName?: string;
    /** The employee's username that appears in the remote UI. */
    username?: string;
    groups?: (Merge.hris.EmployeeRequestGroupsItem | undefined)[];
    /** The employee's work email. */
    workEmail?: string;
    /** The employee's personal email. */
    personalEmail?: string;
    /** The employee's mobile phone number. */
    mobilePhoneNumber?: string;
    /** Array of `Employment` IDs for this Employee. */
    employments?: (Merge.hris.EmployeeRequestEmploymentsItem | undefined)[];
    /** The employee's home address. */
    homeLocation?: Merge.hris.EmployeeRequestHomeLocation;
    /** The employee's work address. */
    workLocation?: Merge.hris.EmployeeRequestWorkLocation;
    /** The employee ID of the employee's manager. */
    manager?: Merge.hris.EmployeeRequestManager;
    /** The employee's team. */
    team?: Merge.hris.EmployeeRequestTeam;
    /** The employee's pay group */
    payGroup?: Merge.hris.EmployeeRequestPayGroup;
    /** The employee's social security number. */
    ssn?: string;
    /**
     * The employee's gender.
     *
     * * `MALE` - MALE
     * * `FEMALE` - FEMALE
     * * `NON-BINARY` - NON-BINARY
     * * `OTHER` - OTHER
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     */
    gender?: Merge.hris.EmployeeRequestGender;
    /**
     * The employee's ethnicity.
     *
     * * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
     * * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
     * * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     * * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     * * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     * * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     * * `WHITE` - WHITE
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     */
    ethnicity?: Merge.hris.EmployeeRequestEthnicity;
    /**
     * The employee's filing status as related to marital status.
     *
     * * `SINGLE` - SINGLE
     * * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
     * * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
     * * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
     * * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
     */
    maritalStatus?: Merge.hris.EmployeeRequestMaritalStatus;
    /** The employee's date of birth. */
    dateOfBirth?: Date;
    /** The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field. */
    hireDate?: Date;
    /** The date that the employee started working. If an employee was rehired, the most recent start date will be returned. */
    startDate?: Date;
    /**
     * The employment status of the employee.
     *
     * * `ACTIVE` - ACTIVE
     * * `PENDING` - PENDING
     * * `INACTIVE` - INACTIVE
     */
    employmentStatus?: Merge.hris.EmployeeRequestEmploymentStatus;
    /** The employee's termination date. */
    terminationDate?: Date;
    /** The URL of the employee's avatar image. */
    avatar?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
