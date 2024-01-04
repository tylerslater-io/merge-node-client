/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The MultipartFormField Object
 * ### Description
 * The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
 *
 * ### Usage Example
 * Create a `MultipartFormField` to define a multipart form entry.
 */
export interface MultipartFormFieldRequest {
    /** The name of the form field */
    name: string;
    /** The data for the form field. */
    data: string;
    /**
     * The encoding of the value of `data`. Defaults to `RAW` if not defined.
     *
     * * `RAW` - RAW
     * * `BASE64` - BASE64
     * * `GZIP_BASE64` - GZIP_BASE64
     */
    encoding?: Merge.accounting.MultipartFormFieldRequestEncoding;
    /** The file name of the form field, if the field is for a file. */
    fileName?: string;
    /** The MIME type of the file, if the field is for a file. */
    contentType?: string;
}
