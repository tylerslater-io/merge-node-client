/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * Designates the role of the user (or SYSTEM/API if action not taken by a user) at the time of this Event occurring.
 *
 * - `ADMIN` - ADMIN
 * - `DEVELOPER` - DEVELOPER
 * - `MEMBER` - MEMBER
 * - `API` - API
 * - `SYSTEM` - SYSTEM
 * - `MERGE_TEAM` - MERGE_TEAM
 */
export type AuditLogEventRole = Merge.hris.RoleEnum | string;
