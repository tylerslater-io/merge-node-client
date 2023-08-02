/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaskStatusEnum: core.serialization.Schema<serializers.crm.TaskStatusEnum.Raw, Merge.crm.TaskStatusEnum> =
    core.serialization.enum_(["OPEN", "CLOSED"]);

export declare namespace TaskStatusEnum {
    type Raw = "OPEN" | "CLOSED";
}