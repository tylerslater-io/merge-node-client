/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ContactsRetrieveRequestExpand =
    | "addresses"
    | "addresses,company"
    | "addresses,phone_numbers"
    | "addresses,phone_numbers,company"
    | "company"
    | "phone_numbers"
    | "phone_numbers,company";

export const ContactsRetrieveRequestExpand = {
    Addresses: "addresses",
    AddressesCompany: "addresses,company",
    AddressesPhoneNumbers: "addresses,phone_numbers",
    AddressesPhoneNumbersCompany: "addresses,phone_numbers,company",
    Company: "company",
    PhoneNumbers: "phone_numbers",
    PhoneNumbersCompany: "phone_numbers,company",
} as const;