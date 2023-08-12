/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const UserTeamsItem: core.serialization.Schema<
    serializers.ticketing.UserTeamsItem.Raw,
    Merge.ticketing.UserTeamsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Team),
]);

export declare namespace UserTeamsItem {
    type Raw = string | serializers.ticketing.Team.Raw;
}