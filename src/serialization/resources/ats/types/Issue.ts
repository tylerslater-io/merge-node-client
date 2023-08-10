/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Issue: core.serialization.ObjectSchema<serializers.ats.Issue.Raw, Merge.ats.Issue> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).ats.IssueStatus).optional(),
        errorDescription: core.serialization.property("error_description", core.serialization.string()),
        endUser: core.serialization.property(
            "end_user",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        firstIncidentTime: core.serialization.property("first_incident_time", core.serialization.date().optional()),
        lastIncidentTime: core.serialization.property("last_incident_time", core.serialization.date().optional()),
        isMuted: core.serialization.property("is_muted", core.serialization.boolean().optional()),
        errorDetails: core.serialization.property(
            "error_details",
            core.serialization.list(core.serialization.string()).optional()
        ),
    });

export declare namespace Issue {
    interface Raw {
        id?: string | null;
        status?: serializers.ats.IssueStatus.Raw | null;
        error_description: string;
        end_user?: Record<string, unknown> | null;
        first_incident_time?: string | null;
        last_incident_time?: string | null;
        is_muted?: boolean | null;
        error_details?: string[] | null;
    }
}
