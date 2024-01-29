/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Task Object
 *
 * ### Description
 *
 * The `Task` object is used to represent a task, such as a to-do item.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface TaskRequest {
    /** The task's subject. */
    subject?: string;
    /** The task's content. */
    content?: string;
    /** The task's owner. */
    owner?: Merge.crm.TaskRequestOwner;
    /** The task's account. */
    account?: Merge.crm.TaskRequestAccount;
    /** The task's opportunity. */
    opportunity?: Merge.crm.TaskRequestOpportunity;
    /** When the task is completed. */
    completedDate?: Date;
    /** When the task is due. */
    dueDate?: Date;
    /**
     * The task's status.
     *
     * - `OPEN` - OPEN
     * - `CLOSED` - CLOSED
     */
    status?: Merge.crm.TaskRequestStatus;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.crm.RemoteFieldRequest[];
}
