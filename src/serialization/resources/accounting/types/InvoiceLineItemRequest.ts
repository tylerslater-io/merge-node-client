/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoiceLineItemRequest: core.serialization.ObjectSchema<
    serializers.accounting.InvoiceLineItemRequest.Raw,
    Merge.accounting.InvoiceLineItemRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.number().optional()),
    quantity: core.serialization.number().optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceLineItemRequestCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    item: core.serialization.string().optional(),
    account: core.serialization.string().optional(),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string().optional()).optional()
    ),
    company: core.serialization.string().optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace InvoiceLineItemRequest {
    interface Raw {
        remote_id?: string | null;
        description?: string | null;
        unit_price?: number | null;
        quantity?: number | null;
        total_amount?: number | null;
        currency?: serializers.accounting.InvoiceLineItemRequestCurrency.Raw | null;
        exchange_rate?: string | null;
        item?: string | null;
        account?: string | null;
        tracking_category?: string | null;
        tracking_categories?: (string | null | undefined)[] | null;
        company?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}