/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface CrmAccountResponse {
    model: Merge.crm.Account;
    warnings: Merge.crm.WarningValidationProblem[];
    errors: Merge.crm.ErrorValidationProblem[];
    logs?: Merge.crm.DebugModeLog[];
}