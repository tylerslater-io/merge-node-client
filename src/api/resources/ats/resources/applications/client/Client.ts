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

export declare namespace Applications {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Applications {
    constructor(protected readonly _options: Applications.Options) {}

    /**
     * Returns a list of `Application` objects.
     */
    public async list(
        request: Merge.ats.ApplicationsListRequest = {},
        requestOptions?: Applications.RequestOptions
    ): Promise<Merge.ats.PaginatedApplicationList> {
        const {
            candidateId,
            createdAfter,
            createdBefore,
            creditedToId,
            currentStageId,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            jobId,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            rejectReasonId,
            remoteId,
            source,
        } = request;
        const _queryParams = new URLSearchParams();
        if (candidateId != null) {
            _queryParams.append("candidate_id", candidateId);
        }

        if (createdAfter != null) {
            _queryParams.append("created_after", createdAfter);
        }

        if (createdBefore != null) {
            _queryParams.append("created_before", createdBefore);
        }

        if (creditedToId != null) {
            _queryParams.append("credited_to_id", creditedToId);
        }

        if (currentStageId != null) {
            _queryParams.append("current_stage_id", currentStageId);
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeDeletedData != null) {
            _queryParams.append("include_deleted_data", includeDeletedData.toString());
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (jobId != null) {
            _queryParams.append("job_id", jobId);
        }

        if (modifiedAfter != null) {
            _queryParams.append("modified_after", modifiedAfter);
        }

        if (modifiedBefore != null) {
            _queryParams.append("modified_before", modifiedBefore);
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (rejectReasonId != null) {
            _queryParams.append("reject_reason_id", rejectReasonId);
        }

        if (remoteId != null) {
            _queryParams.append("remote_id", remoteId);
        }

        if (source != null) {
            _queryParams.append("source", source);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ats/v1/applications"
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
            return await serializers.ats.PaginatedApplicationList.parseOrThrow(_response.body, {
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
     * Creates an `Application` object with the given values.
     */
    public async create(
        request: Merge.ats.ApplicationEndpointRequest,
        requestOptions?: Applications.RequestOptions
    ): Promise<Merge.ats.ApplicationResponse> {
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
                "api/ats/v1/applications"
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
            body: await serializers.ats.ApplicationEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ats.ApplicationResponse.parseOrThrow(_response.body, {
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
     * Returns an `Application` object with the given `id`.
     */
    public async retrieve(
        id: string,
        request: Merge.ats.ApplicationsRetrieveRequest = {},
        requestOptions?: Applications.RequestOptions
    ): Promise<Merge.ats.Application> {
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
                `api/ats/v1/applications/${id}`
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
            return await serializers.ats.Application.parseOrThrow(_response.body, {
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
     * Updates the `current_stage` field of an `Application` object
     */
    public async changeStageCreate(
        id: string,
        request: Merge.ats.UpdateApplicationStageRequest = {},
        requestOptions?: Applications.RequestOptions
    ): Promise<Merge.ats.ApplicationResponse> {
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
                `api/ats/v1/applications/${id}/change-stage`
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
            body: await serializers.ats.UpdateApplicationStageRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ats.ApplicationResponse.parseOrThrow(_response.body, {
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
     * Returns metadata for `Application` POSTs.
     */
    public async metaPostRetrieve(
        request: Merge.ats.ApplicationsMetaPostRetrieveRequest = {},
        requestOptions?: Applications.RequestOptions
    ): Promise<Merge.ats.MetaResponse> {
        const { applicationRemoteTemplateId } = request;
        const _queryParams = new URLSearchParams();
        if (applicationRemoteTemplateId != null) {
            _queryParams.append("application_remote_template_id", applicationRemoteTemplateId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ats/v1/applications/meta/post"
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
            return await serializers.ats.MetaResponse.parseOrThrow(_response.body, {
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