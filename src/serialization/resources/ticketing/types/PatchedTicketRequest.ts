/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PatchedTicketRequest: core.serialization.ObjectSchema<
    serializers.ticketing.PatchedTicketRequest.Raw,
    Merge.ticketing.PatchedTicketRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    assignees: core.serialization.list(core.serialization.string().optional()).optional(),
    creator: core.serialization.string().optional(),
    dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
    status: core.serialization
        .lazy(async () => (await import("../../..")).ticketing.PatchedTicketRequestStatus)
        .optional(),
    description: core.serialization.string().optional(),
    collections: core.serialization.list(core.serialization.string().optional()).optional(),
    ticketType: core.serialization.property("ticket_type", core.serialization.string().optional()),
    account: core.serialization.string().optional(),
    contact: core.serialization.string().optional(),
    parentTicket: core.serialization.property("parent_ticket", core.serialization.string().optional()),
    tags: core.serialization.list(core.serialization.string().optional()).optional(),
    completedAt: core.serialization.property("completed_at", core.serialization.date().optional()),
    ticketUrl: core.serialization.property("ticket_url", core.serialization.string().optional()),
    priority: core.serialization
        .lazy(async () => (await import("../../..")).ticketing.PatchedTicketRequestPriority)
        .optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property(
        "remote_fields",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.RemoteFieldRequest))
            .optional()
    ),
});

export declare namespace PatchedTicketRequest {
    interface Raw {
        name?: string | null;
        assignees?: (string | null | undefined)[] | null;
        creator?: string | null;
        due_date?: string | null;
        status?: serializers.ticketing.PatchedTicketRequestStatus.Raw | null;
        description?: string | null;
        collections?: (string | null | undefined)[] | null;
        ticket_type?: string | null;
        account?: string | null;
        contact?: string | null;
        parent_ticket?: string | null;
        tags?: (string | null | undefined)[] | null;
        completed_at?: string | null;
        ticket_url?: string | null;
        priority?: serializers.ticketing.PatchedTicketRequestPriority.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: serializers.ticketing.RemoteFieldRequest.Raw[] | null;
    }
}
