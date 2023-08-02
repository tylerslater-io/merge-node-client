/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `DRAFT` - DRAFT
 * * `SUBMITTED` - SUBMITTED
 * * `AUTHORIZED` - AUTHORIZED
 * * `BILLED` - BILLED
 * * `DELETED` - DELETED
 */
export type PurchaseOrderStatusEnum = "DRAFT" | "SUBMITTED" | "AUTHORIZED" | "BILLED" | "DELETED";

export const PurchaseOrderStatusEnum = {
    Draft: "DRAFT",
    Submitted: "SUBMITTED",
    Authorized: "AUTHORIZED",
    Billed: "BILLED",
    Deleted: "DELETED",
} as const;