/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `string` - string
 * * `number` - number
 * * `date` - date
 * * `datetime` - datetime
 * * `bool` - bool
 * * `list` - list
 */
export type ItemTypeEnum = "string" | "number" | "date" | "datetime" | "bool" | "list";

export const ItemTypeEnum = {
    String: "string",
    Number: "number",
    Date: "date",
    Datetime: "datetime",
    Bool: "bool",
    List: "list",
} as const;
