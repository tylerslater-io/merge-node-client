/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * The status of the invoice.
 *
 * * `PAID` - PAID
 * * `DRAFT` - DRAFT
 * * `SUBMITTED` - SUBMITTED
 * * `PARTIALLY_PAID` - PARTIALLY_PAID
 * * `OPEN` - OPEN
 * * `VOID` - VOID
 */
export type InvoiceStatus = Merge.accounting.InvoiceStatusEnum | string;