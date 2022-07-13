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
 * iotvideo client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotvideo.tencentcloudapi.com", "2021-11-25", clientConfig);
    }
    /**
     * 查询设备消息数量统计
     */
    async DescribeMessageDataStats(req, cb) {
        return this.request("DescribeMessageDataStats", req, cb);
    }
    /**
     * 创建产品
     */
    async CreateProduct(req, cb) {
        return this.request("CreateProduct", req, cb);
    }
    /**
     * 查询设备数据统计
     */
    async DescribeDeviceDataStats(req, cb) {
        return this.request("DescribeDeviceDataStats", req, cb);
    }
    /**
     * 获取设备的绑定签名
     */
    async GenSingleDeviceSignatureOfPublic(req, cb) {
        return this.request("GenSingleDeviceSignatureOfPublic", req, cb);
    }
    /**
     * 异步调用设备行为
     */
    async CallDeviceActionAsync(req, cb) {
        return this.request("CallDeviceActionAsync", req, cb);
    }
    /**
     * 同步调用设备行为
     */
    async CallDeviceActionSync(req, cb) {
        return this.request("CallDeviceActionSync", req, cb);
    }
}
exports.Client = Client;
