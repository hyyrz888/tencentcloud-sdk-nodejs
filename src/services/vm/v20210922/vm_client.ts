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
  ImageSegments,
  ImageResultResult,
  StorageInfo,
  BucketInfo,
  CreateVideoModerationTaskResponse,
  TaskResult,
  CancelTaskRequest,
  DescribeTaskDetailResponse,
  DescribeTasksRequest,
  TaskInput,
  DescribeTaskDetailRequest,
  TaskLabel,
  ImageResultsResultDetail,
  InputInfo,
  CreateVideoModerationTaskRequest,
  DescribeTasksResponse,
  AudioResultDetailLanguageResult,
  TaskFilter,
  RecognitionResult,
  CancelTaskResponse,
  AudioResultDetailTextResult,
  RcbAsr,
  AudioResult,
  AudioResultDetailMoanResult,
  TaskData,
  MediaInfo,
  Tag,
  AudioSegments,
  ImageResultsResultDetailLocation,
  ImageResult,
} from "./vm_models"

/**
 * vm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vm.tencentcloudapi.com", "2021-09-22", clientConfig)
  }

  /**
   * 查看任务详情DescribeTaskDetail
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 通过URL或存储桶创建审核任务
   */
  async CreateVideoModerationTask(
    req: CreateVideoModerationTaskRequest,
    cb?: (error: string, rep: CreateVideoModerationTaskResponse) => void
  ): Promise<CreateVideoModerationTaskResponse> {
    return this.request("CreateVideoModerationTask", req, cb)
  }

  /**
     * 通过查看审核任务列表接口，可查询任务队列；您可根据多种业务信息（业务类型、审核结果、任务状态等）筛选审核任务列表。<br>

默认接口请求频率限制：**20次/秒**。
     */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 取消任务
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }
}
