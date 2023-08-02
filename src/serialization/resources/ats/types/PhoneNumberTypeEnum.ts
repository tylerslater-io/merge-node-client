/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PhoneNumberTypeEnum: core.serialization.Schema<
    serializers.ats.PhoneNumberTypeEnum.Raw,
    Merge.ats.PhoneNumberTypeEnum
> = core.serialization.enum_(["HOME", "WORK", "MOBILE", "SKYPE", "OTHER"]);

export declare namespace PhoneNumberTypeEnum {
    type Raw = "HOME" | "WORK" | "MOBILE" | "SKYPE" | "OTHER";
}