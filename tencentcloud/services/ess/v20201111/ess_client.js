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
 * ess client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ess.tencentcloudapi.com", "2020-11-11", clientConfig);
    }
    /**
     * 此接口用于发起流程
     */
    async StartFlow(req, cb) {
        return this.request("StartFlow", req, cb);
    }
    /**
     * 此接口（CreateMultiFlowSignQRCode）用于创建一码多扫流程签署二维码。
适用的模板仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模板，且模板中发起方没有填写控件。
     */
    async CreateMultiFlowSignQRCode(req, cb) {
        return this.request("CreateMultiFlowSignQRCode", req, cb);
    }
    /**
     * 用于撤销签署流程
     */
    async CancelFlow(req, cb) {
        return this.request("CancelFlow", req, cb);
    }
    /**
     * 创建电子文档
     */
    async CreateDocument(req, cb) {
        return this.request("CreateDocument", req, cb);
    }
    /**
     * 查询文件下载URL
     */
    async DescribeFileUrls(req, cb) {
        return this.request("DescribeFileUrls", req, cb);
    }
    /**
     * 通过AuthCode查询用户是否实名
     */
    async DescribeThirdPartyAuthCode(req, cb) {
        return this.request("DescribeThirdPartyAuthCode", req, cb);
    }
    /**
     * 创建签署流程
     */
    async CreateFlow(req, cb) {
        return this.request("CreateFlow", req, cb);
    }
    /**
     * 此接口（CancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     */
    async CancelMultiFlowSignQRCode(req, cb) {
        return this.request("CancelMultiFlowSignQRCode", req, cb);
    }
    /**
     * 获取小程序跳转链接

跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式）


如您需要自主配置小程序跳转链接，请参考: <a href="https://cloud.tencent.com/document/product/1323/74774">跳转小程序链接配置说明</a>
     */
    async CreateSchemeUrl(req, cb) {
        return this.request("CreateSchemeUrl", req, cb);
    }
    /**
     * 二期接口-查询模板
     */
    async DescribeFlowTemplates(req, cb) {
        return this.request("DescribeFlowTemplates", req, cb);
    }
    /**
     * 查询流程摘要
     */
    async DescribeFlowBriefs(req, cb) {
        return this.request("DescribeFlowBriefs", req, cb);
    }
    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建签署流程。
     */
    async CreateFlowByFiles(req, cb) {
        return this.request("CreateFlowByFiles", req, cb);
    }
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn，设置Version为2020-12-22
     */
    async UploadFiles(req, cb) {
        return this.request("UploadFiles", req, cb);
    }
}
exports.Client = Client;
