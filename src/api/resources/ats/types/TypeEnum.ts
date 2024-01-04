/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `DATE` - DATE
 * * `FILE` - FILE
 * * `SINGLE_SELECT` - SINGLE_SELECT
 * * `MULTI_SELECT` - MULTI_SELECT
 * * `SINGLE_LINE_TEXT` - SINGLE_LINE_TEXT
 * * `MULTI_LINE_TEXT` - MULTI_LINE_TEXT
 * * `NUMERIC` - NUMERIC
 * * `BOOLEAN` - BOOLEAN
 */
export type TypeEnum =
    | "DATE"
    | "FILE"
    | "SINGLE_SELECT"
    | "MULTI_SELECT"
    | "SINGLE_LINE_TEXT"
    | "MULTI_LINE_TEXT"
    | "NUMERIC"
    | "BOOLEAN";

export const TypeEnum = {
    Date: "DATE",
    File: "FILE",
    SingleSelect: "SINGLE_SELECT",
    MultiSelect: "MULTI_SELECT",
    SingleLineText: "SINGLE_LINE_TEXT",
    MultiLineText: "MULTI_LINE_TEXT",
    Numeric: "NUMERIC",
    Boolean: "BOOLEAN",
} as const;
