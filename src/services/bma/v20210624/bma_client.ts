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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  Monitor,
  DescribeCRWorkInfoResponse,
  CreateCRRightResponse,
  CreateCRWorkResponse,
  CreateCRRightRequest,
  ModifyCRBlockStatusResponse,
  ModifyCRObtainStatusRequest,
  DescribeCRWorkInfoRequest,
  MonitorTort,
  UpdateCRWorkResponse,
  DescribeCRMonitorsResponse,
  CreateCRCompanyVerifyResponse,
  ModifyCRBlockStatusRequest,
  ModifyCRMonitorRequest,
  DescribeCRMonitorDetailResponse,
  CreateCRWorkRequest,
  Filter,
  CreateCRBlockResponse,
  ModifyCRRightStatusRequest,
  DescribeCRMonitorsRequest,
  UpdateCRWorkRequest,
  DescribeCRMonitorDetailRequest,
  ModifyCRRightStatusResponse,
  CreateCRBlockRequest,
  ModifyCRMonitorResponse,
  ModifyCRObtainStatusResponse,
  CreateCRCompanyVerifyRequest,
} from "./bma_models"

/**
 * bma client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bma.tencentcloudapi.com", "2021-06-24", clientConfig)
  }

  /**
   * 查询作品基本信息
   */
  async DescribeCRWorkInfo(
    req: DescribeCRWorkInfoRequest,
    cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void
  ): Promise<DescribeCRWorkInfoResponse> {
    return this.request("DescribeCRWorkInfo", req, cb)
  }

  /**
   * 申请取证
   */
  async ModifyCRObtainStatus(
    req: ModifyCRObtainStatusRequest,
    cb?: (error: string, rep: ModifyCRObtainStatusResponse) => void
  ): Promise<ModifyCRObtainStatusResponse> {
    return this.request("ModifyCRObtainStatus", req, cb)
  }

  /**
   * 版权保护-拦截申请接口
   */
  async ModifyCRBlockStatus(
    req: ModifyCRBlockStatusRequest,
    cb?: (error: string, rep: ModifyCRBlockStatusResponse) => void
  ): Promise<ModifyCRBlockStatusResponse> {
    return this.request("ModifyCRBlockStatus", req, cb)
  }

  /**
   * 版权保护-新建发函接口
   */
  async CreateCRRight(
    req: CreateCRRightRequest,
    cb?: (error: string, rep: CreateCRRightResponse) => void
  ): Promise<CreateCRRightResponse> {
    return this.request("CreateCRRight", req, cb)
  }

  /**
   * 版权保护-查询监测列表接口
   */
  async DescribeCRMonitors(
    req: DescribeCRMonitorsRequest,
    cb?: (error: string, rep: DescribeCRMonitorsResponse) => void
  ): Promise<DescribeCRMonitorsResponse> {
    return this.request("DescribeCRMonitors", req, cb)
  }

  /**
   * 版权保护-维权申请接口
   */
  async ModifyCRRightStatus(
    req: ModifyCRRightStatusRequest,
    cb?: (error: string, rep: ModifyCRRightStatusResponse) => void
  ): Promise<ModifyCRRightStatusResponse> {
    return this.request("ModifyCRRightStatus", req, cb)
  }

  /**
   * 更新作品
   */
  async UpdateCRWork(
    req: UpdateCRWorkRequest,
    cb?: (error: string, rep: UpdateCRWorkResponse) => void
  ): Promise<UpdateCRWorkResponse> {
    return this.request("UpdateCRWork", req, cb)
  }

  /**
   * 品牌经营管家-版权保护模块企业认证接口
   */
  async CreateCRCompanyVerify(
    req: CreateCRCompanyVerifyRequest,
    cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void
  ): Promise<CreateCRCompanyVerifyResponse> {
    return this.request("CreateCRCompanyVerify", req, cb)
  }

  /**
   * 版权保护-修改监测状态接口
   */
  async ModifyCRMonitor(
    req: ModifyCRMonitorRequest,
    cb?: (error: string, rep: ModifyCRMonitorResponse) => void
  ): Promise<ModifyCRMonitorResponse> {
    return this.request("ModifyCRMonitor", req, cb)
  }

  /**
   * 版权保护-新建拦截接口
   */
  async CreateCRBlock(
    req: CreateCRBlockRequest,
    cb?: (error: string, rep: CreateCRBlockResponse) => void
  ): Promise<CreateCRBlockResponse> {
    return this.request("CreateCRBlock", req, cb)
  }

  /**
   * 版权保护-添加作品接口
   */
  async CreateCRWork(
    req: CreateCRWorkRequest,
    cb?: (error: string, rep: CreateCRWorkResponse) => void
  ): Promise<CreateCRWorkResponse> {
    return this.request("CreateCRWork", req, cb)
  }

  /**
   * 版权保护-查询作品监测详情接口
   */
  async DescribeCRMonitorDetail(
    req: DescribeCRMonitorDetailRequest,
    cb?: (error: string, rep: DescribeCRMonitorDetailResponse) => void
  ): Promise<DescribeCRMonitorDetailResponse> {
    return this.request("DescribeCRMonitorDetail", req, cb)
  }
}
