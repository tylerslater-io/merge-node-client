/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";
import * as stream from "stream";

export declare namespace Files {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Files {
    constructor(protected readonly _options: Files.Options) {}

    /**
     * Returns a list of `File` objects.
     */
    public async list(
        request: Merge.filestorage.FilesListRequest = {},
        requestOptions?: Files.RequestOptions
    ): Promise<Merge.filestorage.PaginatedFileList> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            driveId,
            expand,
            folderId,
            includeDeletedData,
            includeRemoteData,
            modifiedAfter,
            modifiedBefore,
            name,
            pageSize,
            remoteId,
        } = request;
        const _queryParams = new URLSearchParams();
        if (createdAfter != null) {
            _queryParams.append("created_after", createdAfter);
        }

        if (createdBefore != null) {
            _queryParams.append("created_before", createdBefore);
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (driveId != null) {
            _queryParams.append("drive_id", driveId);
        }

        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (folderId != null) {
            _queryParams.append("folder_id", folderId);
        }

        if (includeDeletedData != null) {
            _queryParams.append("include_deleted_data", includeDeletedData.toString());
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (modifiedAfter != null) {
            _queryParams.append("modified_after", modifiedAfter);
        }

        if (modifiedBefore != null) {
            _queryParams.append("modified_before", modifiedBefore);
        }

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (remoteId != null) {
            _queryParams.append("remote_id", remoteId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/filestorage/v1/files"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.filestorage.PaginatedFileList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a `File` object with the given values.
     */
    public async create(
        request: Merge.filestorage.FileStorageFileEndpointRequest,
        requestOptions?: Files.RequestOptions
    ): Promise<Merge.filestorage.FileStorageFileResponse> {
        const { isDebugMode, runAsync, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (isDebugMode != null) {
            _queryParams.append("is_debug_mode", isDebugMode.toString());
        }

        if (runAsync != null) {
            _queryParams.append("run_async", runAsync.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/filestorage/v1/files"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.filestorage.FileStorageFileEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.filestorage.FileStorageFileResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a `File` object with the given `id`.
     */
    public async retrieve(
        id: string,
        request: Merge.filestorage.FilesRetrieveRequest = {},
        requestOptions?: Files.RequestOptions
    ): Promise<Merge.filestorage.File_> {
        const { expand, includeRemoteData } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/filestorage/v1/files/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.filestorage.File_.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a `File` object with the given `id`.
     */
    public async downloadRetrieve(id: string, requestOptions?: Files.RequestOptions): Promise<stream.Readable> {
        const _response = await core.streamingFetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/filestorage/v1/files/${id}/download`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.0",
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            onError: (error) => {
                throw new errors.MergeError({
                    message: (error as any)?.message,
                });
            },
        });
        return _response.data;
    }

    /**
     * Returns metadata for `FileStorageFile` POSTs.
     */
    public async metaPostRetrieve(requestOptions?: Files.RequestOptions): Promise<Merge.filestorage.MetaResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/filestorage/v1/files/meta/post"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.0",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.filestorage.MetaResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}