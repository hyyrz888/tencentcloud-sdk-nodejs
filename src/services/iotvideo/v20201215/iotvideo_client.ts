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
  DescribeCloudStorageDateRequest,
  CloudStorageTimeData,
  CreateCloudStorageRequest,
  VideoBatch,
  ImportModelDefinitionResponse,
  DescribeModelDefinitionResponse,
  CreateBatchRequest,
  DescribeCloudStorageTimeResponse,
  DescribeProductsRequest,
  DescribeDeviceEventHistoryResponse,
  DescribeDeviceActionHistoryRequest,
  DescribeDevicesResponse,
  ModifyProductResponse,
  ModifyProductRequest,
  ModifyModelDefinitionRequest,
  DescribeBatchsResponse,
  DescribeForwardRuleResponse,
  DescribeBatchRequest,
  CloudStorageTimeInfo,
  ModifyDeviceRequest,
  ProductModelDefinition,
  ActionHistory,
  DescribeFirmwareTaskStatisticsResponse,
  DescribeFirmwareRequest,
  DescribeProductRequest,
  DescribeProductsResponse,
  CheckForwardAuthRequest,
  DescribeDeviceDataRequest,
  CreateBatchResponse,
  DescribeDeviceActionHistoryResponse,
  GetAllFirmwareVersionRequest,
  DeviceCommLogItem,
  DeviceUpdateStatus,
  DeleteFirmwareResponse,
  CreateForwardRuleResponse,
  BatchUpdateFirmwareResponse,
  DeleteProductRequest,
  StatusStatistic,
  SetForwardAuthResponse,
  EditFirmwareRequest,
  DeviceDataHistoryItem,
  DescribeDeviceEventHistoryRequest,
  DescribeCategoryResponse,
  ImportModelDefinitionRequest,
  DescribeDeviceCommLogResponse,
  DeleteDeviceRequest,
  GetAllFirmwareVersionResponse,
  ListFirmwaresResponse,
  DescribeFirmwareTaskDevicesRequest,
  DescribeFirmwareResponse,
  DescribeDeviceCommLogRequest,
  DeleteForwardRuleRequest,
  CreateProductResponse,
  DescribeFirmwareTaskDevicesResponse,
  DescribeCloudStorageThumbnailResponse,
  RetryDeviceFirmwareTaskResponse,
  DescribeFirmwareTaskResponse,
  FirmwareInfo,
  CreateProductRequest,
  DescribeFirmwareTasksRequest,
  GetFirmwareURLResponse,
  DescribeDeviceResponse,
  DescribeCloudStorageEventsRequest,
  ListFirmwaresRequest,
  RetryDeviceFirmwareTaskRequest,
  UploadFirmwareRequest,
  DescribeFirmwareTasksResponse,
  EditFirmwareResponse,
  DescribeFirmwareTaskDistributionRequest,
  ProductTemplate,
  DeleteProductResponse,
  ModifyForwardRuleResponse,
  FirmwareTaskInfo,
  DescribeFirmwareTaskDistributionResponse,
  DescribeBatchResponse,
  DescribeDeviceRequest,
  ModifyForwardRuleRequest,
  DescribeCloudStorageEventsResponse,
  VideoProduct,
  CloudStorageEvent,
  DescribeCloudStorageDateResponse,
  DescribeForwardRuleRequest,
  UploadFirmwareResponse,
  CreateCloudStorageResponse,
  CancelDeviceFirmwareTaskRequest,
  CancelDeviceFirmwareTaskResponse,
  DeleteDeviceResponse,
  DescribeDeviceDataHistoryRequest,
  EventHistoryItem,
  CreateForwardRuleRequest,
  CreateTaskFileUrlResponse,
  SetForwardAuthRequest,
  ModifyDeviceResponse,
  CreateTaskFileUrlRequest,
  BatchUpdateFirmwareRequest,
  DescribeCloudStorageThumbnailRequest,
  GetFirmwareURLRequest,
  DescribeCloudStorageResponse,
  DescribeProductResponse,
  DescribeCategoryRequest,
  DeleteFirmwareRequest,
  DescribeCloudStorageRequest,
  DescribeDeviceDataHistoryResponse,
  SearchKeyword,
  DescribeDevicesRequest,
  DescribeModelDefinitionRequest,
  CheckForwardAuthResponse,
  DescribeDeviceDataResponse,
  DeleteForwardRuleResponse,
  DescribeFirmwareTaskStatisticsRequest,
  DescribeBatchsRequest,
  DeviceInfo,
  ModifyModelDefinitionResponse,
  DescribeFirmwareTaskRequest,
  DescribeCloudStorageTimeRequest,
} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideo.tencentcloudapi.com", "2020-12-15", clientConfig)
  }

  /**
   * 获取产品列表
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 获取设备在指定时间范围内的通讯日志
   */
  async DescribeDeviceCommLog(
    req: DescribeDeviceCommLogRequest,
    cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void
  ): Promise<DescribeDeviceCommLogResponse> {
    return this.request("DescribeDeviceCommLog", req, cb)
  }

  /**
   * 判断是否开启的转发的权限
   */
  async CheckForwardAuth(
    req: CheckForwardAuthRequest,
    cb?: (error: string, rep: CheckForwardAuthResponse) => void
  ): Promise<CheckForwardAuthResponse> {
    return this.request("CheckForwardAuth", req, cb)
  }

  /**
   * 获取设备属性数据
   */
  async DescribeDeviceData(
    req: DescribeDeviceDataRequest,
    cb?: (error: string, rep: DescribeDeviceDataResponse) => void
  ): Promise<DescribeDeviceDataResponse> {
    return this.request("DescribeDeviceData", req, cb)
  }

  /**
   * 修改产品信息
   */
  async ModifyProduct(
    req: ModifyProductRequest,
    cb?: (error: string, rep: ModifyProductResponse) => void
  ): Promise<ModifyProductResponse> {
    return this.request("ModifyProduct", req, cb)
  }

  /**
   * 本接口（DescribeFirmware）用于查询固件信息
   */
  async DescribeFirmware(
    req: DescribeFirmwareRequest,
    cb?: (error: string, rep: DescribeFirmwareResponse) => void
  ): Promise<DescribeFirmwareResponse> {
    return this.request("DescribeFirmware", req, cb)
  }

  /**
   * 获取具有云存的日期
   */
  async DescribeCloudStorageDate(
    req: DescribeCloudStorageDateRequest,
    cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void
  ): Promise<DescribeCloudStorageDateResponse> {
    return this.request("DescribeCloudStorageDate", req, cb)
  }

  /**
   * 本接口用于重试设备升级任务
   */
  async RetryDeviceFirmwareTask(
    req: RetryDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void
  ): Promise<RetryDeviceFirmwareTaskResponse> {
    return this.request("RetryDeviceFirmwareTask", req, cb)
  }

  /**
   * 查看设备详情
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 获取产品详情
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }

  /**
   * 获取批次详情
   */
  async DescribeBatch(
    req: DescribeBatchRequest,
    cb?: (error: string, rep: DescribeBatchResponse) => void
  ): Promise<DescribeBatchResponse> {
    return this.request("DescribeBatch", req, cb)
  }

  /**
   * 修改设备信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 修改转发规则
   */
  async ModifyForwardRule(
    req: ModifyForwardRuleRequest,
    cb?: (error: string, rep: ModifyForwardRuleResponse) => void
  ): Promise<ModifyForwardRuleResponse> {
    return this.request("ModifyForwardRule", req, cb)
  }

  /**
   * 获取设备云存服务详情
   */
  async DescribeCloudStorage(
    req: DescribeCloudStorageRequest,
    cb?: (error: string, rep: DescribeCloudStorageResponse) => void
  ): Promise<DescribeCloudStorageResponse> {
    return this.request("DescribeCloudStorage", req, cb)
  }

  /**
   * 获取批次列表
   */
  async DescribeBatchs(
    req: DescribeBatchsRequest,
    cb?: (error: string, rep: DescribeBatchsResponse) => void
  ): Promise<DescribeBatchsResponse> {
    return this.request("DescribeBatchs", req, cb)
  }

  /**
   * 本接口（BatchUpdateFirmware）用于批量更新设备固件
   */
  async BatchUpdateFirmware(
    req: BatchUpdateFirmwareRequest,
    cb?: (error: string, rep: BatchUpdateFirmwareResponse) => void
  ): Promise<BatchUpdateFirmwareResponse> {
    return this.request("BatchUpdateFirmware", req, cb)
  }

  /**
   * 创建产品
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
   * 为用户提供获取动作历史的能力。
   */
  async DescribeDeviceActionHistory(
    req: DescribeDeviceActionHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void
  ): Promise<DescribeDeviceActionHistoryResponse> {
    return this.request("DescribeDeviceActionHistory", req, cb)
  }

  /**
   * 删除转发规则
   */
  async DeleteForwardRule(
    req: DeleteForwardRuleRequest,
    cb?: (error: string, rep: DeleteForwardRuleResponse) => void
  ): Promise<DeleteForwardRuleResponse> {
    return this.request("DeleteForwardRule", req, cb)
  }

  /**
   * 创建批次
   */
  async CreateBatch(
    req: CreateBatchRequest,
    cb?: (error: string, rep: CreateBatchResponse) => void
  ): Promise<CreateBatchResponse> {
    return this.request("CreateBatch", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务统计信息
   */
  async DescribeFirmwareTaskStatistics(
    req: DescribeFirmwareTaskStatisticsRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void
  ): Promise<DescribeFirmwareTaskStatisticsResponse> {
    return this.request("DescribeFirmwareTaskStatistics", req, cb)
  }

  /**
   * 获取设备在指定时间范围内上报的历史数据。
   */
  async DescribeDeviceDataHistory(
    req: DescribeDeviceDataHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void
  ): Promise<DescribeDeviceDataHistoryResponse> {
    return this.request("DescribeDeviceDataHistory", req, cb)
  }

  /**
   * 本接口（UploadFirmware）用于上传设备固件信息
   */
  async UploadFirmware(
    req: UploadFirmwareRequest,
    cb?: (error: string, rep: UploadFirmwareResponse) => void
  ): Promise<UploadFirmwareResponse> {
    return this.request("UploadFirmware", req, cb)
  }

  /**
   * 本接口（GetFirmwareURL）用于获取固件存储的URL
   */
  async GetFirmwareURL(
    req: GetFirmwareURLRequest,
    cb?: (error: string, rep: GetFirmwareURLResponse) => void
  ): Promise<GetFirmwareURLResponse> {
    return this.request("GetFirmwareURL", req, cb)
  }

  /**
   * 删除设备
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 开通云存服务
   */
  async CreateCloudStorage(
    req: CreateCloudStorageRequest,
    cb?: (error: string, rep: CreateCloudStorageResponse) => void
  ): Promise<CreateCloudStorageResponse> {
    return this.request("CreateCloudStorage", req, cb)
  }

  /**
   * 设置转发权限
   */
  async SetForwardAuth(
    req: SetForwardAuthRequest,
    cb?: (error: string, rep: SetForwardAuthResponse) => void
  ): Promise<SetForwardAuthResponse> {
    return this.request("SetForwardAuth", req, cb)
  }

  /**
   * 本接口（ListFirmwares）用于获取固件列表
   */
  async ListFirmwares(
    req: ListFirmwaresRequest,
    cb?: (error: string, rep: ListFirmwaresResponse) => void
  ): Promise<ListFirmwaresResponse> {
    return this.request("ListFirmwares", req, cb)
  }

  /**
   * 本接口用于编辑固件信息
   */
  async EditFirmware(
    req: EditFirmwareRequest,
    cb?: (error: string, rep: EditFirmwareResponse) => void
  ): Promise<EditFirmwareResponse> {
    return this.request("EditFirmware", req, cb)
  }

  /**
   * 获取Category详情
   */
  async DescribeCategory(
    req: DescribeCategoryRequest,
    cb?: (error: string, rep: DescribeCategoryResponse) => void
  ): Promise<DescribeCategoryResponse> {
    return this.request("DescribeCategory", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务状态分布
   */
  async DescribeFirmwareTaskDistribution(
    req: DescribeFirmwareTaskDistributionRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void
  ): Promise<DescribeFirmwareTaskDistributionResponse> {
    return this.request("DescribeFirmwareTaskDistribution", req, cb)
  }

  /**
   * 删除产品
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 获取设备的历史事件
   */
  async DescribeDeviceEventHistory(
    req: DescribeDeviceEventHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void
  ): Promise<DescribeDeviceEventHistoryResponse> {
    return this.request("DescribeDeviceEventHistory", req, cb)
  }

  /**
   * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
   */
  async CreateTaskFileUrl(
    req: CreateTaskFileUrlRequest,
    cb?: (error: string, rep: CreateTaskFileUrlResponse) => void
  ): Promise<CreateTaskFileUrlResponse> {
    return this.request("CreateTaskFileUrl", req, cb)
  }

  /**
   * 此接口查询固件升级任务详情
   */
  async DescribeFirmwareTask(
    req: DescribeFirmwareTaskRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void
  ): Promise<DescribeFirmwareTaskResponse> {
    return this.request("DescribeFirmwareTask", req, cb)
  }

  /**
   * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
   */
  async ImportModelDefinition(
    req: ImportModelDefinitionRequest,
    cb?: (error: string, rep: ImportModelDefinitionResponse) => void
  ): Promise<ImportModelDefinitionResponse> {
    return this.request("ImportModelDefinition", req, cb)
  }

  /**
   * 拉取云存事件列表
   */
  async DescribeCloudStorageEvents(
    req: DescribeCloudStorageEventsRequest,
    cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void
  ): Promise<DescribeCloudStorageEventsResponse> {
    return this.request("DescribeCloudStorageEvents", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务的设备列表
   */
  async DescribeFirmwareTaskDevices(
    req: DescribeFirmwareTaskDevicesRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void
  ): Promise<DescribeFirmwareTaskDevicesResponse> {
    return this.request("DescribeFirmwareTaskDevices", req, cb)
  }

  /**
   * 本接口用于取消设备升级任务
   */
  async CancelDeviceFirmwareTask(
    req: CancelDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void
  ): Promise<CancelDeviceFirmwareTaskResponse> {
    return this.request("CancelDeviceFirmwareTask", req, cb)
  }

  /**
   * 获取某一天云存时间轴
   */
  async DescribeCloudStorageTime(
    req: DescribeCloudStorageTimeRequest,
    cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void
  ): Promise<DescribeCloudStorageTimeResponse> {
    return this.request("DescribeCloudStorageTime", req, cb)
  }

  /**
   * 获取产品转发规则
   */
  async DescribeForwardRule(
    req: DescribeForwardRuleRequest,
    cb?: (error: string, rep: DescribeForwardRuleResponse) => void
  ): Promise<DescribeForwardRuleResponse> {
    return this.request("DescribeForwardRule", req, cb)
  }

  /**
   * 创建转发规则
   */
  async CreateForwardRule(
    req: CreateForwardRuleRequest,
    cb?: (error: string, rep: CreateForwardRuleResponse) => void
  ): Promise<CreateForwardRuleResponse> {
    return this.request("CreateForwardRule", req, cb)
  }

  /**
   * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表
   */
  async GetAllFirmwareVersion(
    req: GetAllFirmwareVersionRequest,
    cb?: (error: string, rep: GetAllFirmwareVersionResponse) => void
  ): Promise<GetAllFirmwareVersionResponse> {
    return this.request("GetAllFirmwareVersion", req, cb)
  }

  /**
   * 提供修改产品的数据模板的能力
   */
  async ModifyModelDefinition(
    req: ModifyModelDefinitionRequest,
    cb?: (error: string, rep: ModifyModelDefinitionResponse) => void
  ): Promise<ModifyModelDefinitionResponse> {
    return this.request("ModifyModelDefinition", req, cb)
  }

  /**
   * 拉取云存事件缩略图
   */
  async DescribeCloudStorageThumbnail(
    req: DescribeCloudStorageThumbnailRequest,
    cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void
  ): Promise<DescribeCloudStorageThumbnailResponse> {
    return this.request("DescribeCloudStorageThumbnail", req, cb)
  }

  /**
   * 获取设备列表
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 本接口（DeleteFirmware）用于删除固件
   */
  async DeleteFirmware(
    req: DeleteFirmwareRequest,
    cb?: (error: string, rep: DeleteFirmwareResponse) => void
  ): Promise<DeleteFirmwareResponse> {
    return this.request("DeleteFirmware", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务列表
   */
  async DescribeFirmwareTasks(
    req: DescribeFirmwareTasksRequest,
    cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void
  ): Promise<DescribeFirmwareTasksResponse> {
    return this.request("DescribeFirmwareTasks", req, cb)
  }

  /**
   * 查询产品配置的数据模板信息
   */
  async DescribeModelDefinition(
    req: DescribeModelDefinitionRequest,
    cb?: (error: string, rep: DescribeModelDefinitionResponse) => void
  ): Promise<DescribeModelDefinitionResponse> {
    return this.request("DescribeModelDefinition", req, cb)
  }
}
