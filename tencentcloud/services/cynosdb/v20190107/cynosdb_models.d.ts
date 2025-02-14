/**
 * RemoveClusterSlaveZone请求参数结构体
 */
export interface RemoveClusterSlaveZoneRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 从可用区
      */
    SlaveZone: string;
}
/**
 * ModifyClusterName请求参数结构体
 */
export interface ModifyClusterNameRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名
      */
    ClusterName: string;
}
/**
 * DescribeRollbackTimeRange请求参数结构体
 */
export interface DescribeRollbackTimeRangeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * InquirePriceRenew请求参数结构体
 */
export interface InquirePriceRenewRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 购买时长,与TimeUnit组合才能生效
      */
    TimeSpan: number;
    /**
      * 购买时长单位, 与TimeSpan组合生效，可选:日:d,月:m
      */
    TimeUnit: string;
}
/**
 * DescribeAuditLogs请求参数结构体
 */
export interface DescribeAuditLogsRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 开始时间，格式为："2017-07-12 10:29:20"。
      */
    StartTime: string;
    /**
      * 结束时间，格式为："2017-07-12 10:29:20"。
      */
    EndTime: string;
    /**
      * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
      */
    Order?: string;
    /**
      * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
      */
    OrderBy?: string;
    /**
      * 过滤条件。可按设置的过滤条件过滤日志。
      */
    Filter?: AuditLogFilter;
    /**
      * 分页参数，单次返回的数据条数。默认值为100，最大值为100。
      */
    Limit?: number;
    /**
      * 分页偏移量。
      */
    Offset?: number;
}
/**
 * DescribeBackupConfig请求参数结构体
 */
export interface DescribeBackupConfigRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 需要过滤的账户列表
      */
    AccountNames?: Array<string>;
    /**
      * 数据库类型，取值范围:
<li> MYSQL </li>
      */
    DbType?: string;
}
/**
 * ModifyMaintainPeriodConfig请求参数结构体
 */
export interface ModifyMaintainPeriodConfigRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 维护开始时间，单位为秒，如3:00为10800
      */
    MaintainStartTime: number;
    /**
      * 维护持续时间，单位为秒，如1小时为3600
      */
    MaintainDuration: number;
    /**
      * 每周维护日期，日期取值范围[Mon, Tue, Wed, Thu, Fri, Sat, Sun]
      */
    MaintainWeekDays: Array<string>;
}
/**
 * DescribeRollbackTimeRange返回参数结构体
 */
export interface DescribeRollbackTimeRangeResponse {
    /**
      * 有效回归时间范围开始时间点（已废弃）
      */
    TimeRangeStart: string;
    /**
      * 有效回归时间范围结束时间点（已废弃）
      */
    TimeRangeEnd: string;
    /**
      * 可回档时间范围
      */
    RollbackTimeRanges: Array<RollbackTimeRange>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBackupName返回参数结构体
 */
export interface ModifyBackupNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterStorage请求参数结构体
 */
export interface ModifyClusterStorageRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群新存储大小（单位G）
      */
    NewStorageLimit: number;
    /**
      * 集群原存储大小（单位G）
      */
    OldStorageLimit: number;
    /**
      * 交易模式 0-下单并支付 1-下单
      */
    DealMode?: number;
}
/**
 * DescribeAuditLogFiles返回参数结构体
 */
export interface DescribeAuditLogFilesResponse {
    /**
      * 符合条件的审计日志文件个数。
      */
    TotalCount: number;
    /**
      * 审计日志文件详情。
      */
    Items: Array<AuditLogFile>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SwitchClusterZone返回参数结构体
 */
export interface SwitchClusterZoneResponse {
    /**
      * 异步FlowId
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
      * 实例组ID数组
      */
    InstanceIds: Array<string>;
    /**
      * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 可用区
      */
    Zone: string;
}
/**
 * DescribeBinlogDownloadUrl请求参数结构体
 */
export interface DescribeBinlogDownloadUrlRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * Binlog文件ID
      */
    BinlogId: number;
}
/**
 * CreateAccounts返回参数结构体
 */
export interface CreateAccountsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
}
/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
    /**
      * 安全组信息
      */
    Groups: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMaintainPeriod请求参数结构体
 */
export interface DescribeMaintainPeriodRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * 账号参数
 */
export interface AccountParam {
    /**
      * 参数名称，当前仅支持参数：max_user_connections
      */
    ParamName: string;
    /**
      * 参数值
      */
    ParamValue: string;
}
/**
 * DescribeBinlogs返回参数结构体
 */
export interface DescribeBinlogsResponse {
    /**
      * 记录总条数
      */
    TotalCount: number;
    /**
      * Binlog列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Binlogs: Array<BinlogItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
      * 实例个数
      */
    TotalCount: number;
    /**
      * 实例列表
      */
    InstanceSet: Array<CynosdbInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群实例信息
 */
export interface ClusterInstanceDetail {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 引擎类型
      */
    InstanceType: string;
    /**
      * 实例状态
      */
    InstanceStatus: string;
    /**
      * 实例状态描述
      */
    InstanceStatusDesc: string;
    /**
      * cpu核数
      */
    InstanceCpu: number;
    /**
      * 内存
      */
    InstanceMemory: number;
    /**
      * 硬盘
      */
    InstanceStorage: number;
}
/**
 * AddClusterSlaveZone返回参数结构体
 */
export interface AddClusterSlaveZoneResponse {
    /**
      * 异步FlowId
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterName返回参数结构体
 */
export interface ModifyClusterNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterParams返回参数结构体
 */
export interface DescribeClusterParamsResponse {
    /**
      * 参数个数
      */
    TotalCount: number;
    /**
      * 实例参数列表
      */
    Items: Array<ParamInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateInstance返回参数结构体
 */
export interface IsolateInstanceResponse {
    /**
      * 任务流id
      */
    FlowId: number;
    /**
      * 隔离实例的订单id（预付费实例）
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。
 */
export interface AuditLogFilter {
    /**
      * 客户端地址。
      */
    Host?: Array<string>;
    /**
      * 用户名。
      */
    User?: Array<string>;
    /**
      * 数据库名称。
      */
    DBName?: Array<string>;
    /**
      * 表名称。
      */
    TableName?: Array<string>;
    /**
      * 审计策略名称。
      */
    PolicyName?: Array<string>;
    /**
      * SQL 语句。支持模糊匹配。
      */
    Sql?: string;
    /**
      * SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
      */
    SqlType?: string;
    /**
      * 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。
      */
    ExecTime?: number;
    /**
      * 影响行数。表示筛选影响行数大于该值的审计日志。
      */
    AffectRows?: number;
    /**
      * SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
      */
    SqlTypes?: Array<string>;
    /**
      * SQL 语句。支持传递多个sql语句。
      */
    Sqls?: Array<string>;
}
/**
 * DescribeParamTemplates请求参数结构体
 */
export declare type DescribeParamTemplatesRequest = null;
/**
 * DescribeAuditLogs返回参数结构体
 */
export interface DescribeAuditLogsResponse {
    /**
      * 符合条件的审计日志条数。
      */
    TotalCount: number;
    /**
      * 审计日志详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<AuditLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PauseServerless请求参数结构体
 */
export interface PauseServerlessRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 是否强制暂停，忽略当前的用户链接  0:不强制  1:强制， 默认为1
      */
    ForcePause?: number;
}
/**
 * 任务信息
 */
export interface ObjectTask {
    /**
      * 任务自增ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId?: number;
    /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskType?: string;
    /**
      * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskStatus?: string;
    /**
      * 任务ID（集群ID|实例组ID|实例ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectId?: string;
    /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectType?: string;
}
/**
 * RevokeAccountPrivileges返回参数结构体
 */
export interface RevokeAccountPrivilegesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusters返回参数结构体
 */
export interface CreateClustersResponse {
    /**
      * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranId: string;
    /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealNames: Array<string>;
    /**
      * 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceIds: Array<string>;
    /**
      * 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterIds: Array<string>;
    /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BigDealIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetRenewFlag请求参数结构体
 */
export interface SetRenewFlagRequest {
    /**
      * 需操作的实例ID
      */
    ResourceIds: Array<string>;
    /**
      * 自动续费标志位，续费标记 0:正常续费  1:自动续费 2:到期不续
      */
    AutoRenewFlag: number;
}
/**
 * 实例组信息
 */
export interface CynosdbInstanceGrp {
    /**
      * appId
      */
    AppId: number;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 删除时间
      */
    DeletedTime: string;
    /**
      * 实例组ID
      */
    InstanceGrpId: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 实例组类型。ha-ha组；ro-只读组
      */
    Type: string;
    /**
      * 更新时间
      */
    UpdatedTime: string;
    /**
      * 内网IP
      */
    Vip: string;
    /**
      * 内网端口
      */
    Vport: number;
    /**
      * 外网域名
      */
    WanDomain: string;
    /**
      * 外网ip
      */
    WanIP: string;
    /**
      * 外网端口
      */
    WanPort: number;
    /**
      * 外网状态
      */
    WanStatus: string;
    /**
      * 实例组包含实例信息
      */
    InstanceSet: Array<CynosdbInstance>;
}
/**
 * 实例慢查询信息
 */
export interface SlowQueriesItem {
    /**
      * 执行时间戳
      */
    Timestamp: number;
    /**
      * 执行时长，单位秒
      */
    QueryTime: number;
    /**
      * sql语句
      */
    SqlText: string;
    /**
      * 客户端host
      */
    UserHost: string;
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 数据库名
      */
    Database: string;
    /**
      * 锁时长，单位秒
      */
    LockTime: number;
    /**
      * 扫描行数
      */
    RowsExamined: number;
    /**
      * 返回行数
      */
    RowsSent: number;
    /**
      * sql模版
      */
    SqlTemplate: string;
    /**
      * sql语句md5
      */
    SqlMd5: string;
}
/**
 * ActivateInstance请求参数结构体
 */
export interface ActivateInstanceRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例 ID 列表，单个实例 ID 格式如：cynosdbmysql-ins-n7ocdslw，与TDSQL-C MySQL数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。
      */
    InstanceIdList: Array<string>;
}
/**
 * 数据库表信息
 */
export interface DatabaseTables {
    /**
      * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Database?: string;
    /**
      * 表名称列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tables?: Array<string>;
}
/**
 * AddClusterSlaveZone请求参数结构体
 */
export interface AddClusterSlaveZoneRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 从可用区
      */
    SlaveZone: string;
}
/**
 * DescribeAccountAllGrantPrivileges返回参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesResponse {
    /**
      * 权限语句
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivilegeStatements: Array<string>;
    /**
      * 全局权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    GlobalPrivileges: Array<string>;
    /**
      * 数据库权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatabasePrivileges: Array<DatabasePrivileges>;
    /**
      * 数据库表权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    TablePrivileges: Array<TablePrivileges>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 回滚数据库信息
 */
export interface RollbackDatabase {
    /**
      * 旧数据库名称
      */
    OldDatabase: string;
    /**
      * 新数据库名称
      */
    NewDatabase: string;
}
/**
 * 数据库权限列表
 */
export interface DatabasePrivileges {
    /**
      * 数据库
      */
    Db: string;
    /**
      * 权限列表
      */
    Privileges: Array<string>;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
      * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
      */
    DbType?: string;
    /**
      * 返回数量，默认为 20，最大值为 100
      */
    Limit?: number;
    /**
      * 记录偏移量，默认值为0
      */
    Offset?: number;
    /**
      * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
      */
    OrderBy?: string;
    /**
      * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
      */
    OrderByType?: string;
    /**
      * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
      */
    Filters?: Array<QueryFilter>;
}
/**
 * ModifyClusterStorage返回参数结构体
 */
export interface ModifyClusterStorageResponse {
    /**
      * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranId: string;
    /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BigDealIds: Array<string>;
    /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
    /**
      * 实例详情
      */
    Detail: CynosdbInstanceDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAuditLogFile返回参数结构体
 */
export interface DeleteAuditLogFileResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterParamLogs返回参数结构体
 */
export interface DescribeClusterParamLogsResponse {
    /**
      * 记录总数
      */
    TotalCount: number;
    /**
      * 参数修改记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterParamLogs: Array<ClusterParamModifyLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterInstanceGrps请求参数结构体
 */
export interface DescribeClusterInstanceGrpsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * DescribeResourcesByDealName返回参数结构体
 */
export interface DescribeResourcesByDealNameResponse {
    /**
      * 计费资源id信息数组
      */
    BillingResourceInfos: Array<BillingResourceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResumeServerless返回参数结构体
 */
export interface ResumeServerlessResponse {
    /**
      * 异步流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAccounts请求参数结构体
 */
export interface CreateAccountsRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 新账户列表
      */
    Accounts: Array<NewAccount>;
}
/**
 * 审计日志文件
 */
export interface AuditLogFile {
    /**
      * 审计日志文件名称
      */
    FileName: string;
    /**
      * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
      */
    CreateTime: string;
    /**
      * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
      */
    Status: string;
    /**
      * 文件大小，单位为 KB。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileSize: number;
    /**
      * 审计日志下载地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
}
/**
 * ExportInstanceSlowQueries返回参数结构体
 */
export interface ExportInstanceSlowQueriesResponse {
    /**
      * 慢查询导出内容
      */
    FileContent: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SwitchClusterZone请求参数结构体
 */
export interface SwitchClusterZoneRequest {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 当前可用区
      */
    OldZone: string;
    /**
      * 要切换到的可用区
      */
    NewZone: string;
    /**
      * 维护期间执行-yes,立即执行-no
      */
    IsInMaintainPeriod?: string;
}
/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
    /**
      * 实例组ID
      */
    InstanceId: string;
}
/**
 * RollBackCluster请求参数结构体
 */
export interface RollBackClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档
      */
    RollbackStrategy: string;
    /**
      * 回档ID
      */
    RollbackId: number;
    /**
      * 期望回档时间
      */
    ExpectTime?: string;
    /**
      * 期望阈值
      */
    ExpectTimeThresh?: number;
    /**
      * 回档数据库列表
      */
    RollbackDatabases?: Array<RollbackDatabase>;
    /**
      * 回档数据库表
      */
    RollbackTables?: Array<RollbackTable>;
}
/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 数据库CPU
      */
    Cpu: number;
    /**
      * 数据库内存，单位GB
      */
    Memory: number;
    /**
      * 升级类型：upgradeImmediate，upgradeInMaintain
      */
    UpgradeType: string;
    /**
      * 该参数已废弃
      */
    StorageLimit?: number;
    /**
      * 是否自动选择代金券 1是 0否 默认为0
      */
    AutoVoucher?: number;
    /**
      * 该参数已废弃
      */
    DbType?: string;
    /**
      * 交易模式 0-下单并支付 1-下单
      */
    DealMode?: number;
}
/**
 * 回档数据库及表
 */
export interface RollbackTable {
    /**
      * 数据库名称
      */
    Database: string;
    /**
      * 数据库表
      */
    Tables: Array<RollbackTableInfo>;
}
/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
    /**
      * 集群Id
      */
    ClusterId: string;
}
/**
 * DeleteBackup返回参数结构体
 */
export interface DeleteBackupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
    /**
      * 安全组详情
      */
    Groups: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveClusterSlaveZone返回参数结构体
 */
export interface RemoveClusterSlaveZoneResponse {
    /**
      * 异步FlowId
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAuditLogFile返回参数结构体
 */
export interface CreateAuditLogFileResponse {
    /**
      * 审计日志文件名称。
      */
    FileName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PauseServerless返回参数结构体
 */
export interface PauseServerlessResponse {
    /**
      * 异步流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OfflineCluster请求参数结构体
 */
export interface OfflineClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 新创建的账号
 */
export interface NewAccount {
    /**
      * 账户名
      */
    AccountName: string;
    /**
      * 密码
      */
    AccountPassword: string;
    /**
      * 主机
      */
    Host: string;
    /**
      * 描述
      */
    Description?: string;
}
/**
 * 备份文件信息
 */
export interface BackupFileInfo {
    /**
      * 快照文件ID，已废弃，请使用BackupId
      */
    SnapshotId: number;
    /**
      * 备份文件名
      */
    FileName: string;
    /**
      * 备份文件大小
      */
    FileSize: number;
    /**
      * 备份开始时间
      */
    StartTime: string;
    /**
      * 备份完成时间
      */
    FinishTime: string;
    /**
      * 备份类型：snapshot，快照备份；logic，逻辑备份
      */
    BackupType: string;
    /**
      * 备份方式：auto，自动备份；manual，手动备份
      */
    BackupMethod: string;
    /**
      * 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中
      */
    BackupStatus: string;
    /**
      * 备份文件时间
      */
    SnapshotTime: string;
    /**
      * 备份ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupId: number;
    /**
      * 快照类型，可选值：full，全量；increment，增量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapShotType: string;
    /**
      * 备份文件备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupName: string;
}
/**
 * mysql表权限
 */
export interface TablePrivileges {
    /**
      * 数据库名
      */
    Db: string;
    /**
      * 表名
      */
    TableName: string;
    /**
      * 权限列表
      */
    Privileges: Array<string>;
}
/**
 * DescribeBinlogDownloadUrl返回参数结构体
 */
export interface DescribeBinlogDownloadUrlResponse {
    /**
      * 下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupList请求参数结构体
 */
export interface DescribeBackupListRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 备份文件列表大小，取值范围(0,100]
      */
    Limit?: number;
    /**
      * 备份文件列表偏移，取值范围[0,INF)
      */
    Offset?: number;
    /**
      * 数据库类型，取值范围:
<li> MYSQL </li>
      */
    DbType?: string;
    /**
      * 备份ID
      */
    BackupIds?: Array<number>;
    /**
      * 备份类型，可选值：snapshot，快照备份； logic，逻辑备份
      */
    BackupType?: string;
    /**
      * 备份方式，可选值：auto，自动备份；manual，手动备
      */
    BackupMethod?: string;
    /**
      * 快照类型，可选值：full，全量；increment，增量
      */
    SnapShotType?: string;
    /**
      * 备份开始时间
      */
    StartTime?: string;
    /**
      * 备份结束时间
      */
    EndTime?: string;
    /**
      * 备份文件名，模糊查询
      */
    FileNames?: Array<string>;
    /**
      * 备份备注名，模糊查询
      */
    BackupNames?: Array<string>;
}
/**
 * 实例信息
 */
export interface CynosdbInstance {
    /**
      * 用户Uin
      */
    Uin: string;
    /**
      * 用户AppId
      */
    AppId: number;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 实例状态
      */
    Status: string;
    /**
      * 实例状态中文描述
      */
    StatusDesc: string;
    /**
      * 数据库类型
      */
    DbType: string;
    /**
      * 数据库版本
      */
    DbVersion: string;
    /**
      * Cpu，单位：核
      */
    Cpu: number;
    /**
      * 内存，单位：GB
      */
    Memory: number;
    /**
      * 存储量，单位：GB
      */
    Storage: number;
    /**
      * 实例类型
      */
    InstanceType: string;
    /**
      * 实例当前角色
      */
    InstanceRole: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * VPC网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 实例内网IP
      */
    Vip: string;
    /**
      * 实例内网端口
      */
    Vport: number;
    /**
      * 付费模式
      */
    PayMode: number;
    /**
      * 实例过期时间
      */
    PeriodEndTime: string;
    /**
      * 销毁期限
      */
    DestroyDeadlineText: string;
    /**
      * 隔离时间
      */
    IsolateTime: string;
    /**
      * 网络类型
      */
    NetType: number;
    /**
      * 外网域名
      */
    WanDomain: string;
    /**
      * 外网IP
      */
    WanIP: string;
    /**
      * 外网端口
      */
    WanPort: number;
    /**
      * 外网状态
      */
    WanStatus: string;
    /**
      * 实例销毁时间
      */
    DestroyTime: string;
    /**
      * Cynos内核版本
      */
    CynosVersion: string;
    /**
      * 正在处理的任务
      */
    ProcessingTask: string;
    /**
      * 续费标志
      */
    RenewFlag: number;
    /**
      * serverless实例cpu下限
      */
    MinCpu: number;
    /**
      * serverless实例cpu上限
      */
    MaxCpu: number;
    /**
      * serverless实例状态, 可选值：
resume
pause
      */
    ServerlessStatus: string;
    /**
      * 预付费存储Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageId: string;
    /**
      * 存储付费类型
      */
    StoragePayMode: number;
}
/**
 * 数据库表
 */
export interface DbTable {
    /**
      * 数据库名称
      */
    Db: string;
    /**
      * 数据库表名称
      */
    TableName?: string;
}
/**
 * ModifyClusterSlaveZone返回参数结构体
 */
export interface ModifyClusterSlaveZoneResponse {
    /**
      * 异步FlowId
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GrantAccountPrivileges请求参数结构体
 */
export interface GrantAccountPrivilegesRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 账号信息
      */
    Account: InputAccount;
    /**
      * 数据库表权限码数组
      */
    DbTablePrivileges: Array<string>;
    /**
      * 数据库表信息
      */
    DbTables: Array<DbTable>;
}
/**
 * Binlog描述
 */
export interface BinlogItem {
    /**
      * Binlog文件名称
      */
    FileName: string;
    /**
      * 文件大小，单位：字节
      */
    FileSize: number;
    /**
      * 事务最早时间
      */
    StartTime: string;
    /**
      * 事务最晚时间
      */
    FinishTime: string;
    /**
      * Binlog文件ID
      */
    BinlogId: number;
}
/**
 * CreateClusters请求参数结构体
 */
export interface CreateClustersRequest {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 所属VPC网络ID
      */
    VpcId: string;
    /**
      * 所属子网ID
      */
    SubnetId: string;
    /**
      * 数据库类型，取值范围:
<li> MYSQL </li>
      */
    DbType: string;
    /**
      * 数据库版本，取值范围:
<li> MYSQL可选值：5.7，8.0 </li>
      */
    DbVersion: string;
    /**
      * 所属项目ID
      */
    ProjectId?: number;
    /**
      * 当DbMode为NORMAL或不填时必选
普通实例Cpu核数
      */
    Cpu?: number;
    /**
      * 当DbMode为NORMAL或不填时必选
普通实例内存,单位G
      */
    Memory?: number;
    /**
      * 该参数无实际意义，已废弃。
存储大小，单位G。
      */
    Storage?: number;
    /**
      * 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'）
      */
    ClusterName?: string;
    /**
      * 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种)
      */
    AdminPassword?: string;
    /**
      * 端口，默认3306，取值范围[0, 65535)
      */
    Port?: number;
    /**
      * 计费模式，按量计费：0，包年包月：1。默认按量计费。
      */
    PayMode?: number;
    /**
      * 购买集群数，可选值范围[1,50]，默认为1
      */
    Count?: number;
    /**
      * 回档类型：
noneRollback：不回档；
snapRollback，快照回档；
timeRollback，时间点回档
      */
    RollbackStrategy?: string;
    /**
      * 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效
      */
    RollbackId?: number;
    /**
      * 回档时，传入源集群ID，用于查找源poolId
      */
    OriginalClusterId?: string;
    /**
      * 时间点回档，指定时间；快照回档，快照时间
      */
    ExpectTime?: string;
    /**
      * 该参数无实际意义，已废弃。
时间点回档，指定时间允许范围
      */
    ExpectTimeThresh?: number;
    /**
      * 普通实例存储上限，单位GB
当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限
      */
    StorageLimit?: number;
    /**
      * 实例数量，数量范围为(0,16]
      */
    InstanceCount?: number;
    /**
      * 包年包月购买时长
      */
    TimeSpan?: number;
    /**
      * 包年包月购买时长单位，['s','d','m','y']
      */
    TimeUnit?: string;
    /**
      * 包年包月购买是否自动续费，默认为0
      */
    AutoRenewFlag?: number;
    /**
      * 是否自动选择代金券 1是 0否 默认为0
      */
    AutoVoucher?: number;
    /**
      * 实例数量（该参数已不再使用，只做存量兼容处理）
      */
    HaCount?: number;
    /**
      * 订单来源
      */
    OrderSource?: string;
    /**
      * 集群创建需要绑定的tag数组信息
      */
    ResourceTags?: Array<Tag>;
    /**
      * Db类型
当DbType为MYSQL时可选(默认NORMAL)：
<li>NORMAL</li>
<li>SERVERLESS</li>
      */
    DbMode?: string;
    /**
      * 当DbMode为SEVERLESS时必填
cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
      */
    MinCpu?: number;
    /**
      * 当DbMode为SEVERLESS时必填：
cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
      */
    MaxCpu?: number;
    /**
      * 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
默认值:yes
      */
    AutoPause?: string;
    /**
      * 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]
默认值:600
      */
    AutoPauseDelay?: number;
    /**
      * 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费
当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费
回档与克隆均不支持包年包月存储
      */
    StoragePayMode?: number;
    /**
      * 安全组id数组
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 告警策略Id数组
      */
    AlarmPolicyIds?: Array<string>;
    /**
      * 参数数组
      */
    ClusterParams?: Array<ParamItem>;
    /**
      * 交易模式，0-下单且支付，1-下单
      */
    DealMode?: number;
    /**
      * 参数模版ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID
      */
    ParamTemplateId?: number;
    /**
      * 多可用区地址
      */
    SlaveZone?: string;
}
/**
 * 回档表信息
 */
export interface RollbackTableInfo {
    /**
      * 旧表名称
      */
    OldTable: string;
    /**
      * 新表名称
      */
    NewTable: string;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
      * 集群数
      */
    TotalCount: number;
    /**
      * 集群列表
      */
    ClusterSet: Array<CynosdbCluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询过滤器
 */
export interface QueryFilter {
    /**
      * 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip"
      */
    Names: Array<string>;
    /**
      * 搜索字符串
      */
    Values: Array<string>;
    /**
      * 是否精确匹配
      */
    ExactMatch?: boolean;
    /**
      * 搜索字段
      */
    Name?: string;
    /**
      * 操作符
      */
    Operator?: string;
}
/**
 * DescribeBackupConfig返回参数结构体
 */
export interface DescribeBackupConfigResponse {
    /**
      * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
      */
    BackupTimeBeg: number;
    /**
      * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
      */
    BackupTimeEnd: number;
    /**
      * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
      */
    ReserveDuration: number;
    /**
      * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupFreq: Array<string>;
    /**
      * 备份方式，logic-逻辑备份，snapshot-快照备份
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupType: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
      * 实例组ID
      */
    InstanceId: string;
    /**
      * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 可用区
      */
    Zone: string;
}
/**
 * DescribeParamTemplates返回参数结构体
 */
export interface DescribeParamTemplatesResponse {
    /**
      * 参数模板数量
      */
    TotalCount: number;
    /**
      * 参数模板信息
      */
    Items: Array<ParamTemplateListInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddInstances返回参数结构体
 */
export interface AddInstancesResponse {
    /**
      * 冻结流水，一次开通一个冻结流水。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranId: string;
    /**
      * 后付费订单号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealNames: Array<string>;
    /**
      * 发货资源id列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceIds: Array<string>;
    /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BigDealIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库地址
 */
export interface Addr {
    /**
      * IP
      */
    IP: string;
    /**
      * 端口
      */
    Port: number;
}
/**
 * 参数模板信息
 */
export interface ParamTemplateListInfo {
    /**
      * 参数模板ID
      */
    Id: number;
    /**
      * 参数模板名称
      */
    TemplateName: string;
    /**
      * 参数模板描述
      */
    TemplateDescription: string;
    /**
      * 引擎版本
      */
    EngineVersion: string;
}
/**
 * 参数信息
 */
export interface ParamInfo {
    /**
      * 当前值
      */
    CurrentValue: string;
    /**
      * 默认值
      */
    Default: string;
    /**
      * 参数为enum/string/bool时，可选值列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnumValue: Array<string>;
    /**
      * 参数类型为float/integer时的最大值
      */
    Max: string;
    /**
      * 参数类型为float/integer时的最小值
      */
    Min: string;
    /**
      * 参数名称
      */
    ParamName: string;
    /**
      * 是否需要重启生效
      */
    NeedReboot: number;
    /**
      * 参数类型：integer/float/string/enum/bool
      */
    ParamType: string;
    /**
      * 匹配类型，multiVal, regex在参数类型是string时使用
      */
    MatchType: string;
    /**
      * 匹配目标值，当multiVal时，各个key用;分割
      */
    MatchValue: string;
    /**
      * 参数描述
      */
    Description: string;
}
/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
    /**
      * 项目ID
      */
    ProjectId: number;
}
/**
 * ModifyClusterParam返回参数结构体
 */
export interface ModifyClusterParamResponse {
    /**
      * 异步请求Id，用于查询结果
      */
    AsyncRequestId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组详情
 */
export interface SecurityGroup {
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
      */
    CreateTime: string;
    /**
      * 入站规则
      */
    Inbound: Array<PolicyRule>;
    /**
      * 出站规则
      */
    Outbound: Array<PolicyRule>;
    /**
      * 安全组ID
      */
    SecurityGroupId: string;
    /**
      * 安全组名称
      */
    SecurityGroupName: string;
    /**
      * 安全组备注
      */
    SecurityGroupRemark: string;
}
/**
 * DescribeBackupDownloadUrl请求参数结构体
 */
export interface DescribeBackupDownloadUrlRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 备份ID
      */
    BackupId: number;
}
/**
 * 可回档的时间范围
 */
export interface RollbackTimeRange {
    /**
      * 开始时间
      */
    TimeRangeStart: string;
    /**
      * 结束时间
      */
    TimeRangeEnd: string;
}
/**
 * OfflineInstance请求参数结构体
 */
export interface OfflineInstanceRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID数组
      */
    InstanceIdList: Array<string>;
}
/**
 * 网络信息
 */
export interface NetAddr {
    /**
      * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip: string;
    /**
      * 内网端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vport: number;
    /**
      * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    WanDomain: string;
    /**
      * 外网端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    WanPort: number;
    /**
      * 网络类型（ro-只读,rw/ha-读写）
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetType: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqSubnetId: string;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqVpcId: string;
    /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
}
/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourcesByDealName请求参数结构体
 */
export interface DescribeResourcesByDealNameRequest {
    /**
      * 计费订单ID（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
      */
    DealName?: string;
    /**
      * 计费订单ID列表，可以一次查询若干条订单ID对应资源信息（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
      */
    DealNames?: Array<string>;
}
/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
    /**
      * 异步任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRollbackTimeValidity返回参数结构体
 */
export interface DescribeRollbackTimeValidityResponse {
    /**
      * 存储poolID
      */
    PoolId?: number;
    /**
      * 回滚任务ID，后续按该时间点回滚时，需要传入
      */
    QueryId?: number;
    /**
      * 时间点是否有效：pass，检测通过；fail，检测失败
      */
    Status?: string;
    /**
      * 建议时间点，在Status为fail时，该值才有效
      */
    SuggestTime?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceSlowQueries返回参数结构体
 */
export interface DescribeInstanceSlowQueriesResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 慢查询记录
      */
    SlowQueries: Array<SlowQueriesItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
      * 返回数量，默认为 20，最大值为 100
      */
    Limit?: number;
    /**
      * 记录偏移量，默认值为0
      */
    Offset?: number;
    /**
      * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
      */
    OrderBy?: string;
    /**
      * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
      */
    OrderByType?: string;
    /**
      * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
      */
    Filters?: Array<QueryFilter>;
    /**
      * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
      */
    DbType?: string;
    /**
      * 实例状态, 可选值:
creating 创建中
running 运行中
isolating 隔离中
isolated 已隔离
activating 恢复中
offlining 下线中
offlined 已下线
      */
    Status?: string;
    /**
      * 实例id列表
      */
    InstanceIds?: Array<string>;
}
/**
 * DescribeBackupDownloadUrl返回参数结构体
 */
export interface DescribeBackupDownloadUrlResponse {
    /**
      * 备份下载地址
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResumeServerless请求参数结构体
 */
export interface ResumeServerlessRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * InquirePriceCreate请求参数结构体
 */
export interface InquirePriceCreateRequest {
    /**
      * 可用区,每个地域提供最佳实践
      */
    Zone: string;
    /**
      * 购买计算节点个数
      */
    GoodsNum: number;
    /**
      * 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS
      */
    InstancePayMode: string;
    /**
      * 存储购买类型，可选值为：PREPAID, POSTPAID
      */
    StoragePayMode: string;
    /**
      * CPU核数，PREPAID与POSTPAID实例类型必传
      */
    Cpu?: number;
    /**
      * 内存大小，单位G，PREPAID与POSTPAID实例类型必传
      */
    Memory?: number;
    /**
      * Ccu大小，serverless类型必传
      */
    Ccu?: number;
    /**
      * 存储大小，PREPAID存储类型必传
      */
    StorageLimit?: number;
    /**
      * 购买时长，PREPAID购买类型必传
      */
    TimeSpan?: number;
    /**
      * 时长单位，可选值为：m,d。PREPAID购买类型必传
      */
    TimeUnit?: string;
}
/**
 * 计费资源信息
 */
export interface BillingResourceInfo {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIds: Array<string>;
    /**
      * 订单ID
      */
    DealName: string;
}
/**
 * ModifyBackupConfig返回参数结构体
 */
export interface ModifyBackupConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceSpecs请求参数结构体
 */
export interface DescribeInstanceSpecsRequest {
    /**
      * 数据库类型，取值范围:
<li> MYSQL </li>
      */
    DbType: string;
    /**
      * 是否需要返回可用区信息
      */
    IncludeZoneStocks?: boolean;
}
/**
 * ExportInstanceSlowQueries请求参数结构体
 */
export interface ExportInstanceSlowQueriesRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 事务开始最早时间
      */
    StartTime?: string;
    /**
      * 事务开始最晚时间
      */
    EndTime?: string;
    /**
      * 限制条数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 用户名
      */
    Username?: string;
    /**
      * 客户端host
      */
    Host?: string;
    /**
      * 数据库名
      */
    Database?: string;
    /**
      * 文件类型，可选值：csv, original
      */
    FileType?: string;
}
/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
    /**
      * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranId: string;
    /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BigDealIds: Array<string>;
    /**
      * 订单号
      */
    DealNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAccountParams请求参数结构体
 */
export interface ModifyAccountParamsRequest {
    /**
      * 集群id，不超过32个字符
      */
    ClusterId: string;
    /**
      * 账号信息
      */
    Account: InputAccount;
    /**
      * 数据库表权限数组,当前仅支持参数：max_user_connections，max_user_connections不能大于10240
      */
    AccountParams: Array<AccountParam>;
}
/**
 * 集群信息
 */
export interface CynosdbCluster {
    /**
      * 集群状态， 可选值如下:
creating: 创建中
running:运行中
isolating:隔离中
isolated:已隔离
activating:解隔离中
offlining:下线中
offlined:已下线
deleting:删除中
deleted:已删除
      */
    Status: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 数据库版本
      */
    DbVersion: string;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例数
      */
    InstanceNum: number;
    /**
      * 用户uin
      */
    Uin: string;
    /**
      * 引擎类型
      */
    DbType: string;
    /**
      * 用户appid
      */
    AppId: number;
    /**
      * 集群状态描述
      */
    StatusDesc: string;
    /**
      * 集群创建时间
      */
    CreateTime: string;
    /**
      * 付费模式。0-按量计费，1-包年包月
      */
    PayMode: number;
    /**
      * 截止时间
      */
    PeriodEndTime: string;
    /**
      * 集群读写vip
      */
    Vip: string;
    /**
      * 集群读写vport
      */
    Vport: number;
    /**
      * 项目id
      */
    ProjectID: number;
    /**
      * 私有网络ID
      */
    VpcId?: string;
    /**
      * 子网ID
      */
    SubnetId?: string;
    /**
      * cynos内核版本
      */
    CynosVersion?: string;
    /**
      * 存储容量
      */
    StorageLimit?: number;
    /**
      * 续费标志
      */
    RenewFlag?: number;
    /**
      * 正在处理的任务
      */
    ProcessingTask?: string;
    /**
      * 集群的任务数组
      */
    Tasks?: Array<ObjectTask>;
    /**
      * 集群绑定的tag数组
      */
    ResourceTags?: Array<Tag>;
    /**
      * Db类型(NORMAL, SERVERLESS)
      */
    DbMode?: string;
    /**
      * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
pause
      */
    ServerlessStatus?: string;
    /**
      * 集群预付费存储值大小
      */
    Storage?: number;
    /**
      * 集群存储为预付费时的存储ID，用于预付费存储变配
      */
    StorageId?: string;
    /**
      * 集群存储付费模式。0-按量计费，1-包年包月
      */
    StoragePayMode?: number;
    /**
      * 集群计算规格对应的最小存储值
      */
    MinStorageSize?: number;
    /**
      * 集群计算规格对应的最大存储值
      */
    MaxStorageSize?: number;
    /**
      * 集群网络信息
      */
    NetAddrs?: Array<NetAddr>;
}
/**
 * IsolateCluster返回参数结构体
 */
export interface IsolateClusterResponse {
    /**
      * 任务流ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 退款订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OfflineCluster返回参数结构体
 */
export interface OfflineClusterResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RevokeAccountPrivileges请求参数结构体
 */
export interface RevokeAccountPrivilegesRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 账号信息
      */
    Account: InputAccount;
    /**
      * 数据库表权限数组
      */
    DbTablePrivileges: Array<string>;
    /**
      * 数据库表信息
      */
    DbTables: Array<DbTable>;
}
/**
 * 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize]
 */
export interface InstanceSpec {
    /**
      * 实例CPU，单位：核
      */
    Cpu: number;
    /**
      * 实例内存，单位：GB
      */
    Memory: number;
    /**
      * 实例最大可用存储，单位：GB
      */
    MaxStorageSize: number;
    /**
      * 实例最小可用存储，单位：GB
      */
    MinStorageSize: number;
    /**
      * 是否有库存
      */
    HasStock: boolean;
    /**
      * 机器类型
      */
    MachineType: string;
    /**
      * 最大IOPS
      */
    MaxIops: number;
    /**
      * 最大IO带宽
      */
    MaxIoBandWidth: number;
    /**
      * 地域库存信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneStockInfos: Array<ZoneStockInfo>;
}
/**
 * InquirePriceCreate返回参数结构体
 */
export interface InquirePriceCreateResponse {
    /**
      * 实例价格
      */
    InstancePrice: TradePrice;
    /**
      * 存储价格
      */
    StoragePrice: TradePrice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateInstance请求参数结构体
 */
export interface IsolateInstanceRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID数组
      */
    InstanceIdList: Array<string>;
    /**
      * 该参数已废弃
      */
    DbType?: string;
}
/**
 * SetRenewFlag返回参数结构体
 */
export interface SetRenewFlagResponse {
    /**
      * 操作成功实例数
      */
    Count: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库账号信息
 */
export interface Account {
    /**
      * 数据库账号名
      */
    AccountName: string;
    /**
      * 数据库账号描述
      */
    Description: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 主机
      */
    Host: string;
}
/**
 * CreateBackup请求参数结构体
 */
export interface CreateBackupRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 备份类型, 可选值：logic，逻辑备份；snapshot，物理备份
      */
    BackupType?: string;
    /**
      * 备份的库, 只在 BackupType 为 logic 时有效
      */
    BackupDatabases?: Array<string>;
    /**
      * 备份的表, 只在 BackupType 为 logic 时有效
      */
    BackupTables?: Array<DatabaseTables>;
    /**
      * 备注名
      */
    BackupName?: string;
}
/**
 * DescribeClusterParamLogs请求参数结构体
 */
export interface DescribeClusterParamLogsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 返回数量，默认为 20，取值范围为(0,100]
      */
    Limit?: number;
    /**
      * 记录偏移量，默认值为0，取值范围为[0,INF)
      */
    Offset?: number;
}
/**
 * 安全组规则
 */
export interface PolicyRule {
    /**
      * 策略，ACCEPT或者DROP
      */
    Action: string;
    /**
      * 来源Ip或Ip段，例如192.168.0.0/16
      */
    CidrIp: string;
    /**
      * 端口
      */
    PortRange: string;
    /**
      * 网络协议，支持udp、tcp等
      */
    IpProtocol: string;
    /**
      * 协议端口ID或者协议端口组ID。
      */
    ServiceModule: string;
    /**
      * IP地址ID或者ID地址组ID。
      */
    AddressModule: string;
    /**
      * id
      */
    Id: string;
    /**
      * 描述
      */
    Desc: string;
}
/**
 * DescribeMaintainPeriod返回参数结构体
 */
export interface DescribeMaintainPeriodResponse {
    /**
      * 维护week days
      */
    MaintainWeekDays: Array<string>;
    /**
      * 维护开始时间，单位秒
      */
    MaintainStartTime: number;
    /**
      * 维护时长，单位秒
      */
    MaintainDuration: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupList返回参数结构体
 */
export interface DescribeBackupListResponse {
    /**
      * 总共备份文件个数
      */
    TotalCount: number;
    /**
      * 备份文件列表
      */
    BackupList: Array<BackupFileInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RollBackCluster返回参数结构体
 */
export interface RollBackClusterResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBinlogSaveDays请求参数结构体
 */
export interface DescribeBinlogSaveDaysRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * ModifyBackupConfig请求参数结构体
 */
export interface ModifyBackupConfigRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
      */
    BackupTimeBeg: number;
    /**
      * 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
      */
    BackupTimeEnd: number;
    /**
      * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800，最大为158112000
      */
    ReserveDuration: number;
    /**
      * 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
      */
    BackupFreq?: Array<string>;
    /**
      * 该参数目前不支持修改，无需填写。备份方式，logic-逻辑备份，snapshot-快照备份
      */
    BackupType?: string;
}
/**
 * ActivateInstance返回参数结构体
 */
export interface ActivateInstanceResponse {
    /**
      * 任务流id
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRollbackTimeValidity请求参数结构体
 */
export interface DescribeRollbackTimeValidityRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 期望回滚的时间点
      */
    ExpectTime: string;
    /**
      * 回滚时间点的允许误差范围
      */
    ExpectTimeThresh: number;
}
/**
 * CreateAuditLogFile请求参数结构体
 */
export interface CreateAuditLogFileRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 开始时间，格式为："2017-07-12 10:29:20"。
      */
    StartTime: string;
    /**
      * 结束时间，格式为："2017-07-12 10:29:20"。
      */
    EndTime: string;
    /**
      * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
      */
    Order?: string;
    /**
      * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
      */
    OrderBy?: string;
    /**
      * 过滤条件。可按设置的过滤条件过滤日志。
      */
    Filter?: AuditLogFilter;
}
/**
 * DeleteAuditLogFile请求参数结构体
 */
export interface DeleteAuditLogFileRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 审计日志文件名称。
      */
    FileName: string;
}
/**
 * AddInstances请求参数结构体
 */
export interface AddInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * Cpu核数
      */
    Cpu: number;
    /**
      * 内存，单位为GB
      */
    Memory: number;
    /**
      * 新增只读实例数，取值范围为[0,4]
      */
    ReadOnlyCount: number;
    /**
      * 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组。当前版本不建议传输该值。
      */
    InstanceGrpId?: string;
    /**
      * 所属VPC网络ID，该参数已废弃
      */
    VpcId?: string;
    /**
      * 所属子网ID，如果设置了VpcId，则SubnetId必填。该参数已废弃。
      */
    SubnetId?: string;
    /**
      * 新增RO组时使用的Port，取值范围为[0,65535)
      */
    Port?: number;
    /**
      * 实例名称，字符串长度范围为[0,64)，取值范围为大小写字母，0-9数字，'_','-','.'
      */
    InstanceName?: string;
    /**
      * 是否自动选择代金券 1是 0否 默认为0
      */
    AutoVoucher?: number;
    /**
      * 数据库类型，取值范围:
<li> MYSQL </li>
      */
    DbType?: string;
    /**
      * 订单来源，字符串长度范围为[0,64)
      */
    OrderSource?: string;
    /**
      * 交易模式 0-下单并支付 1-下单
      */
    DealMode?: number;
}
/**
 * ModifyClusterSlaveZone请求参数结构体
 */
export interface ModifyClusterSlaveZoneRequest {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 旧从可用区
      */
    OldSlaveZone: string;
    /**
      * 新从可用区
      */
    NewSlaveZone: string;
}
/**
 * GrantAccountPrivileges返回参数结构体
 */
export interface GrantAccountPrivilegesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 参数修改记录
 */
export interface ClusterParamModifyLog {
    /**
      * 参数名称
      */
    ParamName: string;
    /**
      * 当前值
      */
    CurrentValue: string;
    /**
      * 修改后的值
      */
    UpdateValue: string;
    /**
      * 修改状态
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * DescribeInstanceSlowQueries请求参数结构体
 */
export interface DescribeInstanceSlowQueriesRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 事务开始最早时间
      */
    StartTime?: string;
    /**
      * 事务开始最晚时间
      */
    EndTime?: string;
    /**
      * 限制条数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 用户名
      */
    Username?: string;
    /**
      * 客户端host
      */
    Host?: string;
    /**
      * 数据库名
      */
    Database?: string;
    /**
      * 排序字段，可选值：QueryTime,LockTime,RowsExamined,RowsSent
      */
    OrderBy?: string;
    /**
      * 排序类型，可选值：asc,desc
      */
    OrderByType?: string;
}
/**
 * 实例详情
 */
export interface CynosdbInstanceDetail {
    /**
      * 用户Uin
      */
    Uin: string;
    /**
      * 用户AppId
      */
    AppId: number;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 实例状态
      */
    Status: string;
    /**
      * 实例状态中文描述
      */
    StatusDesc: string;
    /**
      * 数据库类型
      */
    DbType: string;
    /**
      * 数据库版本
      */
    DbVersion: string;
    /**
      * Cpu，单位：核
      */
    Cpu: number;
    /**
      * 内存，单位：GB
      */
    Memory: number;
    /**
      * 存储量，单位：GB
      */
    Storage: number;
    /**
      * 实例类型
      */
    InstanceType: string;
    /**
      * 实例当前角色
      */
    InstanceRole: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 付费模式
      */
    PayMode: number;
    /**
      * 实例过期时间
      */
    PeriodEndTime: string;
    /**
      * 网络类型
      */
    NetType: number;
    /**
      * VPC网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 实例内网IP
      */
    Vip: string;
    /**
      * 实例内网端口
      */
    Vport: number;
    /**
      * 实例外网域名
      */
    WanDomain: string;
    /**
      * 字符集
      */
    Charset: string;
    /**
      * Cynos内核版本
      */
    CynosVersion: string;
    /**
      * 续费标志
      */
    RenewFlag: number;
    /**
      * serverless实例cpu下限
      */
    MinCpu: number;
    /**
      * serverless实例cpu上限
      */
    MaxCpu: number;
    /**
      * serverless实例状态, 可能值：
resume
pause
      */
    ServerlessStatus: string;
}
/**
 * 集群详情详细信息
 */
export interface CynosdbClusterDetail {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 状态描述
      */
    StatusDesc: string;
    /**
      * VPC名称
      */
    VpcName: string;
    /**
      * vpc唯一id
      */
    VpcId: string;
    /**
      * 子网名称
      */
    SubnetName: string;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 字符集
      */
    Charset: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 数据库类型
      */
    DbType: string;
    /**
      * 数据库版本
      */
    DbVersion: string;
    /**
      * 使用容量
      */
    UsedStorage: number;
    /**
      * 读写分离Vport
      */
    RoAddr: Array<Addr>;
    /**
      * 实例信息
      */
    InstanceSet: Array<ClusterInstanceDetail>;
    /**
      * 付费模式
      */
    PayMode: number;
    /**
      * 到期时间
      */
    PeriodEndTime: string;
    /**
      * vip地址
      */
    Vip: string;
    /**
      * vport端口
      */
    Vport: number;
    /**
      * 项目id
      */
    ProjectID: number;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 实例绑定的tag数组信息
      */
    ResourceTags: Array<Tag>;
    /**
      * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
resuming
pause
pausing
      */
    ServerlessStatus: string;
}
/**
 * DescribeInstanceDetail请求参数结构体
 */
export interface DescribeInstanceDetailRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * ModifyMaintainPeriodConfig返回参数结构体
 */
export interface ModifyMaintainPeriodConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
    /**
      * 实例组ID数组
      */
    InstanceIds: Array<string>;
    /**
      * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 可用区
      */
    Zone: string;
}
/**
 * ModifyBackupName请求参数结构体
 */
export interface ModifyBackupNameRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 备份文件ID
      */
    BackupId: number;
    /**
      * 备注名，长度不能超过60个字符
      */
    BackupName: string;
}
/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBinlogSaveDays返回参数结构体
 */
export interface DescribeBinlogSaveDaysResponse {
    /**
      * Binlog保留天数
      */
    BinlogSaveDays: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterParam请求参数结构体
 */
export interface ModifyClusterParamRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值且不做校验
      */
    ParamList: Array<ParamItem>;
    /**
      * 维护期间执行-yes,立即执行-no
      */
    IsInMaintainPeriod?: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
      * 数据库账号列表
      */
    AccountSet: Array<Account>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAccountParams返回参数结构体
 */
export interface ModifyAccountParamsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteBackup请求参数结构体
 */
export interface DeleteBackupRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 备份文件ID
      */
    SnapshotIdList: Array<number>;
}
/**
 * 计费询价结果
 */
export interface TradePrice {
    /**
      * 预付费模式下资源总价，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalPrice: number;
    /**
      * 总的折扣，100表示100%不打折
      */
    Discount: number;
    /**
      * 预付费模式下的优惠后总价, 单位: 分,例如用户享有折扣 =TotalPrice × Discount
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalPriceDiscount: number;
    /**
      * 后付费模式下的单位资源价格，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPrice: number;
    /**
      * 优惠后后付费模式下的单位资源价格, 单位: 分,例如用户享有折扣=UnitPricet × Discount
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscount: number;
    /**
      * 计费价格单位
      */
    ChargeUnit: string;
}
/**
 * DescribeClusterParams请求参数结构体
 */
export interface DescribeClusterParamsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 审计日志详细信息
 */
export interface AuditLog {
    /**
      * 影响行数。
      */
    AffectRows: number;
    /**
      * 错误码。
      */
    ErrCode: number;
    /**
      * SQL类型。
      */
    SqlType: string;
    /**
      * 表名称。
      */
    TableName: string;
    /**
      * 实例名称。
      */
    InstanceName: string;
    /**
      * 审计策略名称。
      */
    PolicyName: string;
    /**
      * 数据库名称。
      */
    DBName: string;
    /**
      * SQL语句。
      */
    Sql: string;
    /**
      * 客户端地址。
      */
    Host: string;
    /**
      * 用户名。
      */
    User: string;
    /**
      * 执行时间。
      */
    ExecTime: number;
    /**
      * 时间戳。
      */
    Timestamp: string;
    /**
      * 发送行数。
      */
    SentRows: number;
    /**
      * 执行线程ID。
      */
    ThreadId: number;
}
/**
 * DescribeInstanceSpecs返回参数结构体
 */
export interface DescribeInstanceSpecsResponse {
    /**
      * 规格信息
      */
    InstanceSpecSet: Array<InstanceSpec>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccountAllGrantPrivileges请求参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 账号信息
      */
    Account: InputAccount;
}
/**
 * OfflineInstance返回参数结构体
 */
export interface OfflineInstanceResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 修改参数时，传入参数描述
 */
export interface ParamItem {
    /**
      * 参数名称
      */
    ParamName: string;
    /**
      * 当前值
      */
    CurrentValue: string;
    /**
      * 原有值
      */
    OldValue: string;
}
/**
 * IsolateCluster请求参数结构体
 */
export interface IsolateClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 该参数已废用
      */
    DbType?: string;
}
/**
 * DescribeAuditLogFiles请求参数结构体
 */
export interface DescribeAuditLogFilesRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
      */
    Limit?: number;
    /**
      * 分页偏移量。
      */
    Offset?: number;
    /**
      * 审计日志文件名。
      */
    FileName?: string;
}
/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
    /**
      * 集群详细信息
      */
    Detail: CynosdbClusterDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterInstanceGrps返回参数结构体
 */
export interface DescribeClusterInstanceGrpsResponse {
    /**
      * 实例组个数
      */
    TotalCount: number;
    /**
      * 实例组列表
      */
    InstanceGrpInfoList: Array<CynosdbInstanceGrp>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBinlogs请求参数结构体
 */
export interface DescribeBinlogsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 开始时间
      */
    StartTime?: string;
    /**
      * 结束时间
      */
    EndTime?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 限制条数
      */
    Limit?: number;
}
/**
 * 账号，包含accountName和host
 */
export interface InputAccount {
    /**
      * 账号
      */
    AccountName: string;
    /**
      * 主机，默认‘%’
      */
    Host?: string;
}
/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 可用区库存信息
 */
export interface ZoneStockInfo {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 是否有库存
      */
    HasStock: boolean;
}
/**
 * InquirePriceRenew返回参数结构体
 */
export interface InquirePriceRenewResponse {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIds: Array<string>;
    /**
      * 对应的询价结果数组
      */
    Prices: Array<TradePrice>;
    /**
      * 续费计算节点的总价格
      */
    InstanceRealTotalPrice: number;
    /**
      * 续费存储节点的总价格
      */
    StorageRealTotalPrice: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
