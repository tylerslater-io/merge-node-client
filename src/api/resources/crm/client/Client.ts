/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { Accounts } from "../resources/accounts/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { Contacts } from "../resources/contacts/client/Client";
import { CustomObjectClasses } from "../resources/customObjectClasses/client/Client";
import { AssociationTypes } from "../resources/associationTypes/client/Client";
import { CustomObjects } from "../resources/customObjects/client/Client";
import { Associations } from "../resources/associations/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { EngagementTypes } from "../resources/engagementTypes/client/Client";
import { Engagements } from "../resources/engagements/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { Leads } from "../resources/leads/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Notes } from "../resources/notes/client/Client";
import { Opportunities } from "../resources/opportunities/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { SelectiveSync } from "../resources/selectiveSync/client/Client";
import { Stages } from "../resources/stages/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { Tasks } from "../resources/tasks/client/Client";
import { Users } from "../resources/users/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Crm {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Crm {
    constructor(protected readonly _options: Crm.Options) {}

    protected _accountDetails: AccountDetails | undefined;

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    protected _accountToken: AccountToken | undefined;

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    protected _availableActions: AvailableActions | undefined;

    public get availableActions(): AvailableActions {
        return (this._availableActions ??= new AvailableActions(this._options));
    }

    protected _contacts: Contacts | undefined;

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    protected _customObjectClasses: CustomObjectClasses | undefined;

    public get customObjectClasses(): CustomObjectClasses {
        return (this._customObjectClasses ??= new CustomObjectClasses(this._options));
    }

    protected _associationTypes: AssociationTypes | undefined;

    public get associationTypes(): AssociationTypes {
        return (this._associationTypes ??= new AssociationTypes(this._options));
    }

    protected _customObjects: CustomObjects | undefined;

    public get customObjects(): CustomObjects {
        return (this._customObjects ??= new CustomObjects(this._options));
    }

    protected _associations: Associations | undefined;

    public get associations(): Associations {
        return (this._associations ??= new Associations(this._options));
    }

    protected _deleteAccount: DeleteAccount | undefined;

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    protected _engagementTypes: EngagementTypes | undefined;

    public get engagementTypes(): EngagementTypes {
        return (this._engagementTypes ??= new EngagementTypes(this._options));
    }

    protected _engagements: Engagements | undefined;

    public get engagements(): Engagements {
        return (this._engagements ??= new Engagements(this._options));
    }

    protected _generateKey: GenerateKey | undefined;

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
    }

    protected _issues: Issues | undefined;

    public get issues(): Issues {
        return (this._issues ??= new Issues(this._options));
    }

    protected _leads: Leads | undefined;

    public get leads(): Leads {
        return (this._leads ??= new Leads(this._options));
    }

    protected _linkToken: LinkToken | undefined;

    public get linkToken(): LinkToken {
        return (this._linkToken ??= new LinkToken(this._options));
    }

    protected _linkedAccounts: LinkedAccounts | undefined;

    public get linkedAccounts(): LinkedAccounts {
        return (this._linkedAccounts ??= new LinkedAccounts(this._options));
    }

    protected _notes: Notes | undefined;

    public get notes(): Notes {
        return (this._notes ??= new Notes(this._options));
    }

    protected _opportunities: Opportunities | undefined;

    public get opportunities(): Opportunities {
        return (this._opportunities ??= new Opportunities(this._options));
    }

    protected _passthrough: Passthrough | undefined;

    public get passthrough(): Passthrough {
        return (this._passthrough ??= new Passthrough(this._options));
    }

    protected _regenerateKey: RegenerateKey | undefined;

    public get regenerateKey(): RegenerateKey {
        return (this._regenerateKey ??= new RegenerateKey(this._options));
    }

    protected _selectiveSync: SelectiveSync | undefined;

    public get selectiveSync(): SelectiveSync {
        return (this._selectiveSync ??= new SelectiveSync(this._options));
    }

    protected _stages: Stages | undefined;

    public get stages(): Stages {
        return (this._stages ??= new Stages(this._options));
    }

    protected _syncStatus: SyncStatus | undefined;

    public get syncStatus(): SyncStatus {
        return (this._syncStatus ??= new SyncStatus(this._options));
    }

    protected _forceResync: ForceResync | undefined;

    public get forceResync(): ForceResync {
        return (this._forceResync ??= new ForceResync(this._options));
    }

    protected _tasks: Tasks | undefined;

    public get tasks(): Tasks {
        return (this._tasks ??= new Tasks(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _webhookReceivers: WebhookReceivers | undefined;

    public get webhookReceivers(): WebhookReceivers {
        return (this._webhookReceivers ??= new WebhookReceivers(this._options));
    }
}