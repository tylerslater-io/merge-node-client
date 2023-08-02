/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Invoice: core.serialization.ObjectSchema<serializers.accounting.Invoice.Raw, Merge.accounting.Invoice> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceType).optional(),
        contact: core.serialization.string().optional(),
        number: core.serialization.string().optional(),
        issueDate: core.serialization.property("issue_date", core.serialization.string().optional()),
        dueDate: core.serialization.property("due_date", core.serialization.string().optional()),
        paidOnDate: core.serialization.property("paid_on_date", core.serialization.string().optional()),
        memo: core.serialization.string().optional(),
        company: core.serialization.string().optional(),
        currency: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceCurrency).optional(),
        exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
        totalDiscount: core.serialization.property("total_discount", core.serialization.number().optional()),
        subTotal: core.serialization.property("sub_total", core.serialization.number().optional()),
        totalTaxAmount: core.serialization.property("total_tax_amount", core.serialization.number().optional()),
        totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
        balance: core.serialization.number().optional(),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.string().optional()),
        trackingCategories: core.serialization.property(
            "tracking_categories",
            core.serialization.list(core.serialization.string().optional()).optional()
        ),
        payments: core.serialization.list(core.serialization.string().optional()).optional(),
        lineItems: core.serialization.property(
            "line_items",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.InvoiceLineItem))
                .optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteData))
                .optional()
        ),
    });

export declare namespace Invoice {
    interface Raw {
        id?: string | null;
        type?: serializers.accounting.InvoiceType.Raw | null;
        contact?: string | null;
        number?: string | null;
        issue_date?: string | null;
        due_date?: string | null;
        paid_on_date?: string | null;
        memo?: string | null;
        company?: string | null;
        currency?: serializers.accounting.InvoiceCurrency.Raw | null;
        exchange_rate?: string | null;
        total_discount?: number | null;
        sub_total?: number | null;
        total_tax_amount?: number | null;
        total_amount?: number | null;
        balance?: number | null;
        remote_updated_at?: string | null;
        tracking_categories?: (string | null | undefined)[] | null;
        payments?: (string | null | undefined)[] | null;
        line_items?: serializers.accounting.InvoiceLineItem.Raw[] | null;
        remote_was_deleted?: boolean | null;
        remote_id?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}