/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaskRequest: core.serialization.ObjectSchema<serializers.crm.TaskRequest.Raw, Merge.crm.TaskRequest> =
    core.serialization.object({
        subject: core.serialization.string().optional(),
        content: core.serialization.string().optional(),
        owner: core.serialization.lazy(async () => (await import("../../..")).crm.TaskRequestOwner).optional(),
        account: core.serialization.lazy(async () => (await import("../../..")).crm.TaskRequestAccount).optional(),
        opportunity: core.serialization
            .lazy(async () => (await import("../../..")).crm.TaskRequestOpportunity)
            .optional(),
        completedDate: core.serialization.property("completed_date", core.serialization.date().optional()),
        dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).crm.TaskRequestStatus).optional(),
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
                .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteFieldRequest))
                .optional()
        ),
    });

export declare namespace TaskRequest {
    interface Raw {
        subject?: string | null;
        content?: string | null;
        owner?: serializers.crm.TaskRequestOwner.Raw | null;
        account?: serializers.crm.TaskRequestAccount.Raw | null;
        opportunity?: serializers.crm.TaskRequestOpportunity.Raw | null;
        completed_date?: string | null;
        due_date?: string | null;
        status?: serializers.crm.TaskRequestStatus.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: serializers.crm.RemoteFieldRequest.Raw[] | null;
    }
}
