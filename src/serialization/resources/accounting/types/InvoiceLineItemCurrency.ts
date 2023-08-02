/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoiceLineItemCurrency: core.serialization.Schema<
    serializers.accounting.InvoiceLineItemCurrency.Raw,
    Merge.accounting.InvoiceLineItemCurrency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.CurrencyEnum),
    core.serialization.string(),
]);

export declare namespace InvoiceLineItemCurrency {
    type Raw = serializers.accounting.CurrencyEnum.Raw | string;
}