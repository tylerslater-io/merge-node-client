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

export declare namespace BankInfo {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class BankInfo {
    constructor(protected readonly _options: BankInfo.Options) {}

    /**
     * Returns a list of `BankInfo` objects.
     */
    public async list(
        request: Merge.hris.BankInfoListRequest = {},
        requestOptions?: BankInfo.RequestOptions
    ): Promise<Merge.hris.PaginatedBankInfoList> {
        const {
            accountType,
            bankName,
            createdAfter,
            createdBefore,
            cursor,
            employeeId,
            expand,
            includeDeletedData,
            includeRemoteData,
            modifiedAfter,
            modifiedBefore,
            orderBy,
            pageSize,
            remoteFields,
            remoteId,
            showEnumOrigins,
        } = request;
        const _queryParams = new URLSearchParams();
        if (accountType != null) {
            _queryParams.append("account_type", accountType);
        }

        if (bankName != null) {
            _queryParams.append("bank_name", bankName);
        }

        if (createdAfter != null) {
            _queryParams.append("created_after", createdAfter.toISOString());
        }

        if (createdBefore != null) {
            _queryParams.append("created_before", createdBefore.toISOString());
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (employeeId != null) {
            _queryParams.append("employee_id", employeeId);
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

        if (modifiedAfter != null) {
            _queryParams.append("modified_after", modifiedAfter.toISOString());
        }

        if (modifiedBefore != null) {
            _queryParams.append("modified_before", modifiedBefore.toISOString());
        }

        if (orderBy != null) {
            _queryParams.append("order_by", orderBy);
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (remoteFields != null) {
            _queryParams.append("remote_fields", remoteFields);
        }

        if (remoteId != null) {
            _queryParams.append("remote_id", remoteId);
        }

        if (showEnumOrigins != null) {
            _queryParams.append("show_enum_origins", showEnumOrigins);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/bank-info"
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
                "X-Fern-SDK-Version": "0.1.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.PaginatedBankInfoList.parseOrThrow(_response.body, {
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
     * Returns a `BankInfo` object with the given `id`.
     */
    public async retrieve(
        id: string,
        request: Merge.hris.BankInfoRetrieveRequest = {},
        requestOptions?: BankInfo.RequestOptions
    ): Promise<Merge.hris.BankInfo> {
        const { expand, includeRemoteData, remoteFields, showEnumOrigins } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (remoteFields != null) {
            _queryParams.append("remote_fields", remoteFields);
        }

        if (showEnumOrigins != null) {
            _queryParams.append("show_enum_origins", showEnumOrigins);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/hris/v1/bank-info/${id}`
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
                "X-Fern-SDK-Version": "0.1.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.BankInfo.parseOrThrow(_response.body, {
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
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
