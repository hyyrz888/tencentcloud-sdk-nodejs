"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * organization client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("organization.tencentcloudapi.com", "2021-03-31", clientConfig);
    }
    /**
     * 获取企业组织成员列表
     */
    async DescribeOrganizationMembers(req, cb) {
        return this.request("DescribeOrganizationMembers", req, cb);
    }
    /**
     * 创建组织成员
     */
    async CreateOrganizationMember(req, cb) {
        return this.request("CreateOrganizationMember", req, cb);
    }
    /**
     * 绑定组织成员和子账号的授权关系
     */
    async BindOrganizationMemberAuthAccount(req, cb) {
        return this.request("BindOrganizationMemberAuthAccount", req, cb);
    }
    /**
     * 获取企业组织信息
     */
    async DescribeOrganization(req, cb) {
        return this.request("DescribeOrganization", req, cb);
    }
    /**
     * 创建组织成员的授权策略
     */
    async CreateOrganizationMemberPolicy(req, cb) {
        return this.request("CreateOrganizationMemberPolicy", req, cb);
    }
}
exports.Client = Client;
