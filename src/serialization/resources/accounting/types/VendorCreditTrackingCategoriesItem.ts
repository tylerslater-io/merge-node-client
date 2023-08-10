/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const VendorCreditTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.VendorCreditTrackingCategoriesItem.Raw,
    Merge.accounting.VendorCreditTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TrackingCategory),
]);

export declare namespace VendorCreditTrackingCategoriesItem {
    type Raw = string | serializers.accounting.TrackingCategory.Raw;
}
