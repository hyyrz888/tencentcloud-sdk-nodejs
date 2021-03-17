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
 * tke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tke.tencentcloudapi.com", "2018-05-25", clientConfig);
    }
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    async DescribePrometheusTemplates(req, cb) {
        return this.request("DescribePrometheusTemplates", req, cb);
    }
    /**
     * 查询弹性集群列表
     */
    async DescribeEKSClusters(req, cb) {
        return this.request("DescribeEKSClusters", req, cb);
    }
    /**
     * 检查给定节点列表中哪些是可升级的
     */
    async CheckInstancesUpgradeAble(req, cb) {
        return this.request("CheckInstancesUpgradeAble", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 创建grafana监控面板
     */
    async CreatePrometheusDashboard(req, cb) {
        return this.request("CreatePrometheusDashboard", req, cb);
    }
    /**
     * 获取实例列表
     */
    async DescribePrometheusOverviews(req, cb) {
        return this.request("DescribePrometheusOverviews", req, cb);
    }
    /**
     * 创建弹性集群
     */
    async CreateEKSCluster(req, cb) {
        return this.request("CreateEKSCluster", req, cb);
    }
    /**
     * 查询节点池详情
     */
    async DescribeClusterNodePoolDetail(req, cb) {
        return this.request("DescribeClusterNodePoolDetail", req, cb);
    }
    /**
     * 删除一个云原生Promehtheus配置模板
     */
    async DeletePrometheusTemplate(req, cb) {
        return this.request("DeletePrometheusTemplate", req, cb);
    }
    /**
     * 获取被关联集群列表
     */
    async DescribePrometheusAgents(req, cb) {
        return this.request("DescribePrometheusAgents", req, cb);
    }
    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     */
    async DeletePrometheusTemplateSync(req, cb) {
        return this.request("DeletePrometheusTemplateSync", req, cb);
    }
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    async DeleteClusterEndpoint(req, cb) {
        return this.request("DeleteClusterEndpoint", req, cb);
    }
    /**
     * 同步模板到实例或者集群
     */
    async SyncPrometheusTemplate(req, cb) {
        return this.request("SyncPrometheusTemplate", req, cb);
    }
    /**
     * 获取告警历史
     */
    async DescribePrometheusAlertHistory(req, cb) {
        return this.request("DescribePrometheusAlertHistory", req, cb);
    }
    /**
     * 扩展(新建)集群节点
     */
    async CreateClusterInstances(req, cb) {
        return this.request("CreateClusterInstances", req, cb);
    }
    /**
     * 获取targets信息
     */
    async DescribePrometheusTargets(req, cb) {
        return this.request("DescribePrometheusTargets", req, cb);
    }
    /**
     * 修改集群属性
     */
    async ModifyClusterAttribute(req, cb) {
        return this.request("ModifyClusterAttribute", req, cb);
    }
    /**
     * 删除集群伸缩组
     */
    async DeleteClusterAsGroups(req, cb) {
        return this.request("DeleteClusterAsGroups", req, cb);
    }
    /**
     * 删除集群路由
     */
    async DeleteClusterRoute(req, cb) {
        return this.request("DeleteClusterRoute", req, cb);
    }
    /**
     * 修改模板内容
     */
    async ModifyPrometheusTemplate(req, cb) {
        return this.request("ModifyPrometheusTemplate", req, cb);
    }
    /**
     * 仅能设置节点池中处于伸缩组的节点
     */
    async SetNodePoolNodeProtection(req, cb) {
        return this.request("SetNodePoolNodeProtection", req, cb);
    }
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    async DescribeClusterEndpointVipStatus(req, cb) {
        return this.request("DescribeClusterEndpointVipStatus", req, cb);
    }
    /**
     * 删除集群(YUNAPI V3版本)
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 为已经存在的集群创建伸缩组
     */
    async CreateClusterAsGroup(req, cb) {
        return this.request("CreateClusterAsGroup", req, cb);
    }
    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     */
    async AcquireClusterAdminRole(req, cb) {
        return this.request("AcquireClusterAdminRole", req, cb);
    }
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     */
    async DescribeExistedInstances(req, cb) {
        return this.request("DescribeExistedInstances", req, cb);
    }
    /**
     * 创建集群路由
     */
    async CreateClusterRoute(req, cb) {
        return this.request("CreateClusterRoute", req, cb);
    }
    /**
     * 查询节点池列表
     */
    async DescribeClusterNodePools(req, cb) {
        return this.request("DescribeClusterNodePools", req, cb);
    }
    /**
     * 创建集群路由表
     */
    async CreateClusterRouteTable(req, cb) {
        return this.request("CreateClusterRouteTable", req, cb);
    }
    /**
     * 编辑节点池
     */
    async ModifyClusterNodePool(req, cb) {
        return this.request("ModifyClusterNodePool", req, cb);
    }
    /**
     * 获得节点升级当前的进度
     */
    async GetUpgradeInstanceProgress(req, cb) {
        return this.request("GetUpgradeInstanceProgress", req, cb);
    }
    /**
     * 集群弹性伸缩配置
     */
    async DescribeClusterAsGroupOption(req, cb) {
        return this.request("DescribeClusterAsGroupOption", req, cb);
    }
    /**
     * 将集群内节点移入节点池
     */
    async AddNodeToNodePool(req, cb) {
        return this.request("AddNodeToNodePool", req, cb);
    }
    /**
     * 创建一个云原生Prometheus模板实例
     */
    async CreatePrometheusTemplate(req, cb) {
        return this.request("CreatePrometheusTemplate", req, cb);
    }
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    async DescribeClusterEndpointStatus(req, cb) {
        return this.request("DescribeClusterEndpointStatus", req, cb);
    }
    /**
     * 集群关联的伸缩组列表
     */
    async DescribeClusterAsGroups(req, cb) {
        return this.request("DescribeClusterAsGroups", req, cb);
    }
    /**
     * 创建节点池
     */
    async CreateClusterNodePool(req, cb) {
        return this.request("CreateClusterNodePool", req, cb);
    }
    /**
     * 给集群的一批work节点进行升级
     */
    async UpgradeClusterInstances(req, cb) {
        return this.request("UpgradeClusterInstances", req, cb);
    }
    /**
     * 获取镜像信息
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    async CreateClusterEndpoint(req, cb) {
        return this.request("CreateClusterEndpoint", req, cb);
    }
    /**
     * 从伸缩组创建节点池
     */
    async CreateClusterNodePoolFromExistingAsg(req, cb) {
        return this.request("CreateClusterNodePoolFromExistingAsg", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 获取关联目标集群的实例列表
     */
    async DescribePrometheusAgentInstances(req, cb) {
        return this.request("DescribePrometheusAgentInstances", req, cb);
    }
    /**
     * 查询集群路由表
     */
    async DescribeClusterRouteTables(req, cb) {
        return this.request("DescribeClusterRouteTables", req, cb);
    }
    /**
     * 获取模板同步信息
     */
    async DescribePrometheusTemplateSync(req, cb) {
        return this.request("DescribePrometheusTemplateSync", req, cb);
    }
    /**
     * 获取容器服务支持的所有地域
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 添加已经存在的实例到集群
     */
    async AddExistedInstances(req, cb) {
        return this.request("AddExistedInstances", req, cb);
    }
    /**
     * 删除弹性集群(yunapiv3)
     */
    async DeleteEKSCluster(req, cb) {
        return this.request("DeleteEKSCluster", req, cb);
    }
    /**
     * 修改节点池关联伸缩组的期望实例数
     */
    async ModifyNodePoolDesiredCapacityAboutAsg(req, cb) {
        return this.request("ModifyNodePoolDesiredCapacityAboutAsg", req, cb);
    }
    /**
     * 移出节点池节点，但保留在集群内
     */
    async RemoveNodeFromNodePool(req, cb) {
        return this.request("RemoveNodeFromNodePool", req, cb);
    }
    /**
     * 集群的密钥信息
     */
    async DescribeClusterSecurity(req, cb) {
        return this.request("DescribeClusterSecurity", req, cb);
    }
    /**
     * 查询路由表冲突列表
     */
    async DescribeRouteTableConflicts(req, cb) {
        return this.request("DescribeRouteTableConflicts", req, cb);
    }
    /**
     *  查询集群下节点实例信息
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 删除节点池
     */
    async DeleteClusterNodePool(req, cb) {
        return this.request("DeleteClusterNodePool", req, cb);
    }
    /**
     * 修改集群伸缩组属性
     */
    async ModifyClusterAsGroupAttribute(req, cb) {
        return this.request("ModifyClusterAsGroupAttribute", req, cb);
    }
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    async DeleteClusterEndpointVip(req, cb) {
        return this.request("DeleteClusterEndpointVip", req, cb);
    }
    /**
     * 删除集群中的实例
     */
    async DeleteClusterInstances(req, cb) {
        return this.request("DeleteClusterInstances", req, cb);
    }
    /**
     * 获取集群可以升级的所有版本
     */
    async DescribeAvailableClusterVersion(req, cb) {
        return this.request("DescribeAvailableClusterVersion", req, cb);
    }
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    async DescribeClusterKubeconfig(req, cb) {
        return this.request("DescribeClusterKubeconfig", req, cb);
    }
    /**
     * 修改弹性集群名称等属性
     */
    async UpdateEKSCluster(req, cb) {
        return this.request("UpdateEKSCluster", req, cb);
    }
    /**
     * 升级集群 Master 组件到指定版本
     */
    async UpdateClusterVersion(req, cb) {
        return this.request("UpdateClusterVersion", req, cb);
    }
    /**
     * 获取弹性容器集群的接入认证信息
     */
    async DescribeEKSClusterCredential(req, cb) {
        return this.request("DescribeEKSClusterCredential", req, cb);
    }
    /**
     * 获取告警规则列表
     */
    async DescribePrometheusAlertRule(req, cb) {
        return this.request("DescribePrometheusAlertRule", req, cb);
    }
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     */
    async ModifyClusterEndpointSP(req, cb) {
        return this.request("ModifyClusterEndpointSP", req, cb);
    }
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    async CreateClusterEndpointVip(req, cb) {
        return this.request("CreateClusterEndpointVip", req, cb);
    }
    /**
     * 删除集群路由表
     */
    async DeleteClusterRouteTable(req, cb) {
        return this.request("DeleteClusterRouteTable", req, cb);
    }
    /**
     * 查询集群路由
     */
    async DescribeClusterRoutes(req, cb) {
        return this.request("DescribeClusterRoutes", req, cb);
    }
    /**
     * 修改集群弹性伸缩属性
     */
    async ModifyClusterAsGroupOptionAttribute(req, cb) {
        return this.request("ModifyClusterAsGroupOptionAttribute", req, cb);
    }
}
exports.Client = Client;
