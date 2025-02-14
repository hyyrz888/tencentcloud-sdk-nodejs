/**
 * ModifyCompareTask返回参数结构体
 */
export interface ModifyCompareTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSyncJobs返回参数结构体
 */
export interface DescribeSyncJobsResponse {
    /**
      * 任务数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 任务详情数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobList: Array<SyncJobInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMigrationJob返回参数结构体
 */
export interface ModifyMigrationJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMigrateJobSpec请求参数结构体
 */
export interface ModifyMigrateJobSpecRequest {
    /**
      * 任务id
      */
    JobId: string;
    /**
      * 新实例规格大小，包括：micro、small、medium、large、xlarge、2xlarge
      */
    NewInstanceClass: string;
}
/**
 * StartMigrateJob请求参数结构体
 */
export interface StartMigrateJobRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
}
/**
 * 当前步骤错误信息或者警告信息
 */
export interface StepTip {
    /**
      * 错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code?: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message?: string;
    /**
      * 解决方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution?: string;
    /**
      * 帮助文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    HelpDoc?: string;
}
/**
 * DestroyMigrateJob请求参数结构体
 */
export interface DestroyMigrateJobRequest {
    /**
      * 任务id
      */
    JobId?: string;
}
/**
 * ResizeSyncJob返回参数结构体
 */
export interface ResizeSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResumeMigrateJob返回参数结构体
 */
export interface ResumeMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 校验不一致的表详情
 */
export interface DifferenceItem {
    /**
      * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Db: string;
    /**
      * 表名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Table: string;
    /**
      * 分块号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Chunk: number;
    /**
      * 源库数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcItem: string;
    /**
      * 目标库数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstItem: string;
    /**
      * 索引名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    IndexName: string;
    /**
      * 索引下边界
注意：此字段可能返回 null，表示取不到有效值。
      */
    LowerBoundary: string;
    /**
      * 索引上边界
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpperBoundary: string;
    /**
      * 对比消耗时间,单位为 ms
注意：此字段可能返回 null，表示取不到有效值。
      */
    CostTime: number;
    /**
      * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FinishedAt: string;
}
/**
 * IsolateSyncJob请求参数结构体
 */
export interface IsolateSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
}
/**
 * DescribeCheckSyncJobResult请求参数结构体
 */
export interface DescribeCheckSyncJobResultRequest {
    /**
      * 同步任务id
      */
    JobId?: string;
}
/**
 * DestroySyncJob返回参数结构体
 */
export interface DestroySyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCompareReport返回参数结构体
 */
export interface DescribeCompareReportResponse {
    /**
      * 一致性校验摘要信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Abstract: CompareAbstractInfo;
    /**
      * 一致性校验详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail: CompareDetailInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateMigrateJob请求参数结构体
 */
export interface IsolateMigrateJobRequest {
    /**
      * 任务id
      */
    JobId: string;
}
/**
 * StopMigrateJob返回参数结构体
 */
export interface StopMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 表图对象集合，当 TableMode 为 partial 时，此项需要填写
 */
export interface TableItem {
    /**
      * 迁移的表名
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableName?: string;
    /**
      * 迁移后的表名，当TableEditMode为rename时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewTableName?: string;
    /**
      * 迁移临时表，针对pt-osc等工具在迁移过程中产生的临时表同步，需要提前将可能的临时表配置在这里，当TableEditMode为pt时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpTables?: Array<string>;
    /**
      * 编辑表类型，rename(表映射)，pt(同步附加表)
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableEditMode?: string;
}
/**
 * ModifyCompareTaskName请求参数结构体
 */
export interface ModifyCompareTaskNameRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
      */
    CompareTaskId: string;
    /**
      * 一致性校验任务名称
      */
    TaskName: string;
}
/**
 * CompleteMigrateJob返回参数结构体
 */
export interface CompleteMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrateDBInstances返回参数结构体
 */
export interface DescribeMigrateDBInstancesResponse {
    /**
      * 符合筛选条件的数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Instances: Array<MigrateDBItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 存放配置时的额外信息
 */
export interface KeyValuePairOption {
    /**
      * 选项key
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key?: string;
    /**
      * 选项value
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * CreateCheckSyncJob请求参数结构体
 */
export interface CreateCheckSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
}
/**
 * StopSyncJob请求参数结构体
 */
export interface StopSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
}
/**
 * DescribeMigrationDetail请求参数结构体
 */
export interface DescribeMigrationDetailRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
}
/**
 * DestroySyncJob请求参数结构体
 */
export interface DestroySyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
}
/**
 * ResizeSyncJob请求参数结构体
 */
export interface ResizeSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
    /**
      * 任务规格
      */
    NewInstanceClass: string;
}
/**
 * 数据同步中的ddl同步处理
 */
export interface DdlOption {
    /**
      * ddl类型，如database,table,view等
注意：此字段可能返回 null，表示取不到有效值。
      */
    DdlObject?: string;
    /**
      * ddl具体值，如Create,Drop等
注意：此字段可能返回 null，表示取不到有效值。
      */
    DdlValue?: Array<string>;
}
/**
 * 冲突处理里的详细描述
 */
export interface ConflictHandleOption {
    /**
      * 条件覆盖的列
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionColumn?: string;
    /**
      * 条件覆盖操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionOperator?: string;
    /**
      * 条件覆盖优先级处理
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionOrderInSrcAndDst?: string;
}
/**
 * ResumeSyncJob返回参数结构体
 */
export interface ResumeSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCompareTaskName返回参数结构体
 */
export interface ModifyCompareTaskNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMigrateCheckJob返回参数结构体
 */
export interface CreateMigrateCheckJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMigrationService请求参数结构体
 */
export interface CreateMigrationServiceRequest {
    /**
      * 源实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
      */
    SrcDatabaseType: string;
    /**
      * 目标实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
      */
    DstDatabaseType: string;
    /**
      * 源实例地域，如：ap-guangzhou
      */
    SrcRegion: string;
    /**
      * 目标实例地域，如：ap-guangzhou。注意，目标地域必须和API请求地域保持一致。
      */
    DstRegion: string;
    /**
      * 实例规格，包括：micro、small、medium、large、xlarge、2xlarge
      */
    InstanceClass: string;
    /**
      * 购买数量，范围为[1,15]，默认为1
      */
    Count?: number;
    /**
      * 迁移服务名称，最大长度128
      */
    JobName?: string;
    /**
      * 标签信息
      */
    Tags?: Array<TagItem>;
}
/**
 * 每个检查步骤里的具体检查项
 */
export interface DetailCheckItem {
    /**
      * 检查项的名称，如：源实例权限检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckItemName: string;
    /**
      * 检查项详细内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * pass(通过)，failed(失败), warning(校验有警告，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckResult: string;
    /**
      * 检查项失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureReason: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * 运行报错日志
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorLog: Array<string>;
    /**
      * 详细帮助的文档链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    HelpDoc: Array<string>;
    /**
      * 跳过风险文案
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkipInfo: string;
}
/**
 * DescribeCompareTasks请求参数结构体
 */
export interface DescribeCompareTasksRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 分页设置，表示每页显示多少条任务，默认为 20
      */
    Limit?: number;
    /**
      * 分页偏移量
      */
    Offset?: number;
}
/**
 * 一致性对比对象配置
 */
export interface CompareObject {
    /**
      * 迁移对象模式 all(所有迁移对象)，partial(部分对象迁移)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectMode: string;
    /**
      * 迁移对象库表配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectItems?: Array<CompareObjectItem>;
}
/**
 * 任务错误信息
 */
export interface ErrorInfoItem {
    /**
      * 错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * 错误日志信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorLog: string;
    /**
      * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
      */
    HelpDoc: string;
}
/**
 * RecoverSyncJob返回参数结构体
 */
export interface RecoverSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务操作信息，包含迁移任务的所有操作列表，及迁移任务在当前状态下允许的操作列表
 */
export interface MigrateAction {
    /**
      * 任务的所有操作列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllAction: Array<string>;
    /**
      * 任务在当前状态下允许的操作列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllowedAction: Array<string>;
}
/**
 * DeleteCompareTask返回参数结构体
 */
export interface DeleteCompareTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例信息
 */
export interface DBEndpointInfo {
    /**
      * 实例所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessType: string;
    /**
      * 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatabaseType: string;
    /**
      * 节点类型，为空或者"simple":表示普通节点，"cluster": 集群节点
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeType: string;
    /**
      * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: Array<DBInfo>;
    /**
      * 实例服务提供商，如:"aliyun","others"
注意：此字段可能返回 null，表示取不到有效值。
      */
    Supplier?: string;
    /**
      * MongoDB可定义如下的参数: 	['AuthDatabase':'admin',
'AuthFlag': "1",	'AuthMechanism':"SCRAM-SHA-1"]
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtraAttr?: Array<KeyValuePairOption>;
}
/**
 * 数据同步中的选项
 */
export interface Options {
    /**
      * 同步初始化选项，Data(全量数据初始化)、Structure(结构初始化)、Full(全量数据且结构初始化，默认)、None(仅增量)
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitType?: string;
    /**
      * 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、InitializeAfterDelete(删除并重新初始化)、ExecuteAfterIgnore(忽略并继续执行)
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealOfExistSameTable?: string;
    /**
      * 冲突处理选项，ReportError(报错，默认为该值)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConflictHandleType?: string;
    /**
      * 是否添加附加列
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddAdditionalColumn?: boolean;
    /**
      * 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)， 不填（不选），PartialDDL(自定义,和DdlOptions一起起作用 )
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpTypes?: Array<string>;
    /**
      * 冲突处理的详细选项，如条件覆盖中的条件行和条件操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConflictHandleOption?: ConflictHandleOption;
    /**
      * DDL同步选项，具体描述要同步那些DDL
注意：此字段可能返回 null，表示取不到有效值。
      */
    DdlOptions?: Array<DdlOption>;
}
/**
 * CompleteMigrateJob请求参数结构体
 */
export interface CompleteMigrateJobRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
    /**
      * 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync
      */
    CompleteMode?: string;
}
/**
 * DescribeCompareTasks返回参数结构体
 */
export interface DescribeCompareTasksResponse {
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 一致性校验列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<CompareTaskItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopCompare请求参数结构体
 */
export interface StopCompareRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
      */
    CompareTaskId: string;
}
/**
 * DescribeCheckSyncJobResult返回参数结构体
 */
export interface DescribeCheckSyncJobResultResponse {
    /**
      * 校验结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 步骤总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepCount: number;
    /**
      * 当前所在步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepCur: number;
    /**
      * 总体进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: number;
    /**
      * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfos: Array<StepInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopSyncJob返回参数结构体
 */
export interface StopSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 跳过校验的表详情
 */
export interface SkippedDetail {
    /**
      * 跳过的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<SkippedItem>;
}
/**
 * 迁移选项，描述任务如何执行迁移等一系列配置信息
 */
export interface MigrateOption {
    /**
      * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatabaseTable: DatabaseTableObject;
    /**
      * 迁移类型，full(全量迁移)，structure(结构迁移)，fullAndIncrement(全量加增量迁移)， 默认为fullAndIncrement
注意：此字段可能返回 null，表示取不到有效值。
      */
    MigrateType?: string;
    /**
      * 数据一致性校验选项， 默认为不开启一致性校验
注意：此字段可能返回 null，表示取不到有效值。
      */
    Consistency?: ConsistencyOption;
    /**
      * 是否迁移账号，yes(迁移账号)，no(不迁移账号)
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsMigrateAccount?: boolean;
    /**
      * 是否用源库Root账户覆盖目标库，值包括：false-不覆盖，true-覆盖，选择库表或者结构迁移时应该为false，注意只对旧版迁移有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsOverrideRoot?: boolean;
    /**
      * 是否在迁移时设置目标库只读(仅对mysql有效)，true(设置只读)、false(不设置只读，默认此值)
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDstReadOnly?: boolean;
    /**
      * 其他附加信息，对于特定库可设置额外参数，Redis可定义如下的参数:
["ClientOutputBufferHardLimit":512, 	从机缓冲区的硬性容量限制(MB) 	"ClientOutputBufferSoftLimit":512, 	从机缓冲区的软性容量限制(MB) 	"ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) 	"ReplBacklogSize":512, 	环形缓冲区容量限制(MB) 	"ReplTimeout":120，		复制超时时间(秒) ]
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtraAttr?: Array<KeyValuePairOption>;
}
/**
 * ModifyMigrateName返回参数结构体
 */
export interface ModifyMigrateNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrationJobs返回参数结构体
 */
export interface DescribeMigrationJobsResponse {
    /**
      * 迁移任务数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 迁移任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobList: Array<JobItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 跳过校验的表详情
 */
export interface SkippedItem {
    /**
      * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Db: string;
    /**
      * 表名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Table: string;
    /**
      * 未发起检查的原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
}
/**
 * DestroyMigrateJob返回参数结构体
 */
export interface DestroyMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务步骤信息
 */
export interface ProcessProgress {
    /**
      * 步骤的状态， 包括：notStarted(未开始)、running(运行中)、success(成功)、failed(失败)等
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 进度信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent: number;
    /**
      * 总的步骤数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepAll: number;
    /**
      * 当前进行的步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNow: number;
    /**
      * 当前步骤输出提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Steps: Array<StepDetailInfo>;
}
/**
 * IsolateSyncJob返回参数结构体
 */
export interface IsolateSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMigrateCheckJob请求参数结构体
 */
export interface CreateMigrateCheckJobRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
}
/**
 * DescribeMigrationJobs请求参数结构体
 */
export interface DescribeMigrationJobsRequest {
    /**
      * 数据迁移任务ID，如：dts-amm1jw5q
      */
    JobId?: string;
    /**
      * 数据迁移任务名称
      */
    JobName?: string;
    /**
      * 数据迁移任务状态，可取值包括：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
      */
    Status?: Array<string>;
    /**
      * 源实例ID，格式如：cdb-c1nl9rpv
      */
    SrcInstanceId?: string;
    /**
      * 源实例地域，如：ap-guangzhou
      */
    SrcRegion?: string;
    /**
      * 源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
      */
    SrcDatabaseType?: Array<string>;
    /**
      * 源实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
      */
    SrcAccessType?: Array<string>;
    /**
      * 目标实例ID，格式如：cdb-c1nl9rpv
      */
    DstInstanceId?: string;
    /**
      * 目标实例地域，如：ap-guangzhou
      */
    DstRegion?: string;
    /**
      * 目标源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
      */
    DstDatabaseType?: Array<string>;
    /**
      * 目标实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
      */
    DstAccessType?: Array<string>;
    /**
      * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
      */
    RunMode?: string;
    /**
      * 排序方式，可能取值为asc、desc，默认按照创建时间倒序
      */
    OrderSeq?: string;
    /**
      * 返回实例数量，默认20，有效区间[1,100]
      */
    Limit?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 标签过滤
      */
    TagFilters?: Array<TagFilter>;
}
/**
 * 数据一致性校验结果
 */
export interface CompareTaskInfo {
    /**
      * 一致性校验任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareTaskId: string;
    /**
      * 一致性校验结果，包括：unstart(未启动)、running(校验中)、canceled(已终止)、failed(校验任务失败)、inconsistent(不一致)、consistent(一致)、notexist(不存在校验任务)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
}
/**
 * CreateMigrationService返回参数结构体
 */
export interface CreateMigrationServiceResponse {
    /**
      * 下单成功随机生成的迁移服务id列表，形如：dts-c1f6rs21
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartSyncJob请求参数结构体
 */
export interface StartSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId?: string;
}
/**
 * DescribeMigrationCheckJob返回参数结构体
 */
export interface DescribeMigrationCheckJobResponse {
    /**
      * 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 校验任务结果输出简要信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    BriefMsg: string;
    /**
      * 检查步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfo: Array<CheckStep>;
    /**
      * 校验结果，如：checkPass(校验通过)、checkNotPass(校验未通过)
      */
    CheckFlag: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 一致性校验库表对象
 */
export interface CompareObjectItem {
    /**
      * 迁移的库
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbName: string;
    /**
      * 数据库选择模式: all 为当前对象下的所有对象,partial 为部分对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbMode: string;
    /**
      * 迁移的 schema
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchemaName?: string;
    /**
      * 表选择模式: all 为当前对象下的所有表对象,partial 为部分表对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableMode?: string;
    /**
      * 用于一致性校验的表配置，当 TableMode 为 partial 时，需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tables?: Array<CompareTableItem>;
    /**
      * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewMode?: string;
    /**
      * 用于一致性校验的视图配置，当 ViewMode 为 partial 时， 需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Views?: Array<CompareViewItem>;
}
/**
 * 数据同步中的描述源端和目的端的信息
 */
export interface Endpoint {
    /**
      * 地域英文名，如：ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * 数据库内核类型，tdsql中用于区分不同内核：percona,mariadb,mysql
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbKernel?: string;
    /**
      * 数据库实例ID，格式如：cdb-powiqx8q
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 实例的IP地址，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip?: string;
    /**
      * 实例端口，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 用户名，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    User?: string;
    /**
      * 密码，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
    /**
      * 数据库名，数据库为cdwpg时，需要提供
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbName?: string;
    /**
      * 私有网络ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：vpc-92jblxto
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 私有网络下的子网ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：subnet-3paxmkdz
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    CvmInstanceId?: string;
    /**
      * 专线网关ID，对于专线接入类型此项必填，格式如：dcg-0rxtqqxb
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqDcgId?: string;
    /**
      * VPN网关ID，对于vpn接入类型此项必填，格式如：vpngw-9ghexg7q
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqVpnGwId?: string;
    /**
      * 云联网ID，对于云联网接入类型此项必填，如：ccn-afp6kltc
注意：此字段可能返回 null，表示取不到有效值。
      */
    CcnId?: string;
    /**
      * 云厂商类型，当实例为RDS实例时，填写为aliyun, 其他情况均填写others，默认为others
注意：此字段可能返回 null，表示取不到有效值。
      */
    Supplier?: string;
    /**
      * 数据库版本，当实例为RDS实例时才有效，其他实例忽略，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
      */
    EngineVersion?: string;
    /**
      * 资源所属账号 为空或self(表示本账号内资源)、other(表示跨账号资源)
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountMode?: string;
    /**
      * 实例所属账号，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Account?: string;
    /**
      * 跨账号同步时的角色，只允许[a-zA-Z0-9\-\_]+，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountRole?: string;
    /**
      * 临时秘钥Id，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretId?: string;
    /**
      * 临时秘钥Key，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretKey?: string;
    /**
      * 临时Token，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpToken?: string;
}
/**
 * 数据不一致的表详情
 */
export interface DifferenceDetail {
    /**
      * 数据不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 校验不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<DifferenceItem>;
}
/**
 * CreateCheckSyncJob返回参数结构体
 */
export interface CreateCheckSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库信息
 */
export interface DBInfo {
    /**
      * 表示节点角色，针对分布式数据库，如mongodb中的mongos节点
注意：此字段可能返回 null，表示取不到有效值。
      */
    Role?: string;
    /**
      * 内核版本，针对mariadb的不同内核版本等
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbKernel?: string;
    /**
      * 实例的IP地址，对于公网、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Host?: string;
    /**
      * 实例的端口，对于公网、云主机自建、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 实例的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    User?: string;
    /**
      * 实例的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
    /**
      * CVM实例短ID，格式如：ins-olgl39y8；与云服务器控制台页面显示的实例ID相同；如果接入类型为云主机自建的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    CvmInstanceId?: string;
    /**
      * VPN网关ID，格式如：vpngw-9ghexg7q；如果接入类型为vpncloud的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqVpnGwId?: string;
    /**
      * 专线网关ID，格式如：dcg-0rxtqqxb；如果接入类型为专线接入的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqDcgId?: string;
    /**
      * 数据库实例ID，格式如：cdb-powiqx8q；如果接入类型为云数据库的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 云联网ID，如：ccn-afp6kltc 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CcnGwId?: string;
    /**
      * 私有网络ID，格式如：vpc-92jblxto；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 私有网络下的子网ID，格式如：subnet-3paxmkdz；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
      */
    EngineVersion?: string;
    /**
      * 实例所属账号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Account?: string;
    /**
      * 跨账号迁移时的角色,只允许[a-zA-Z0-9\-\_]+
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountRole?: string;
    /**
      * 资源所属账号 为空或self(表示本账号内资源)、other(表示其他账户资源)
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountMode?: string;
    /**
      * 临时秘钥Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretId?: string;
    /**
      * 临时秘钥Key
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretKey?: string;
    /**
      * 临时Token
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpToken?: string;
}
/**
 * ConfigureSyncJob请求参数结构体
 */
export interface ConfigureSyncJobRequest {
    /**
      * 同步实例id（即标识一个同步作业），形如sync-werwfs23
      */
    JobId: string;
    /**
      * 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、noProxy,注意具体可选值依赖当前链路
      */
    SrcAccessType: string;
    /**
      * 源端信息
      */
    SrcInfo: Endpoint;
    /**
      * 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、noProxy,注意具体可选值依赖当前链路
      */
    DstAccessType: string;
    /**
      * 目标端信息
      */
    DstInfo: Endpoint;
    /**
      * 同步任务选项
      */
    Options: Options;
    /**
      * 同步库表对象信息
      */
    Objects: Objects;
    /**
      * 同步任务名称
      */
    JobName?: string;
    /**
      * 运行模式，取值如：Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行)
      */
    RunMode?: string;
    /**
      * 期待启动时间，当RunMode取值为Timed时，此值必填，形如："2006-01-02 15:04:05"
      */
    ExpectRunTime?: string;
}
/**
 * 查询迁移实例列表的实例对象
 */
export interface MigrateDBItem {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 实例Vip
      */
    Vip: string;
    /**
      * 实例Vport
      */
    Vport: number;
    /**
      * 是否可以作为迁移对象，1-可以，0-不可以
      */
    Usable: number;
    /**
      * 不可以作为迁移对象的原因
      */
    Hint: string;
}
/**
 * DescribeMigrateDBInstances请求参数结构体
 */
export interface DescribeMigrateDBInstancesRequest {
    /**
      * 数据库类型，如mysql
      */
    DatabaseType: string;
    /**
      * 实例作为迁移的源还是目标,src(表示源)，dst(表示目标)
      */
    MigrateRole?: string;
    /**
      * 云数据库实例ID
      */
    InstanceId?: string;
    /**
      * 云数据库名称
      */
    InstanceName?: string;
    /**
      * 返回数量限制
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 资源所属账号 为空值或self(表示本账号内资源)、other(表示其他账户资源)
      */
    AccountMode?: string;
    /**
      * 临时秘钥Id，若为跨账号资源此项必填
      */
    TmpSecretId?: string;
    /**
      * 临时秘钥Key，若为跨账号资源此项必填
      */
    TmpSecretKey?: string;
    /**
      * 临时秘钥Token，若为跨账号资源此项必填
      */
    TmpToken?: string;
}
/**
 * 校验任务运行详情
 */
export interface CheckStepInfo {
    /**
      * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartAt: string;
    /**
      * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndAt: string;
    /**
      * 任务步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: ProcessProgress;
}
/**
 * 错误信息及告警信息对象
 */
export interface ProcessStepTip {
    /**
      * 提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
      */
    Solution: string;
    /**
      * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
      */
    HelpDoc: string;
}
/**
 * ModifyCompareTask请求参数结构体
 */
export interface ModifyCompareTaskRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
      */
    CompareTaskId: string;
    /**
      * 任务名称
      */
    TaskName?: string;
    /**
      * 数据对比对象模式，sameAsMigrate(全部迁移对象， **默认为此项配置**)，custom(自定义模式)
      */
    ObjectMode?: string;
    /**
      * 对比对象，若CompareObjectMode取值为custom，则此项必填
      */
    Objects?: CompareObject;
}
/**
 * RecoverSyncJob请求参数结构体
 */
export interface RecoverSyncJobRequest {
    /**
      * 同步实例id（即标识一个同步作业），形如sync-werwfs23
      */
    JobId: string;
}
/**
 * 需要同步的库表对象
 */
export interface Database {
    /**
      * 需要迁移或同步的库名，当ObjectMode为Partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbName?: string;
    /**
      * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewDbName?: string;
    /**
      * DB选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当Mode为Partial时，此项必填。注意，高级对象的同步不依赖此值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbMode?: string;
    /**
      * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchemaName?: string;
    /**
      * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewSchemaName?: string;
    /**
      * 表选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当DBMode为Partial时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableMode?: string;
    /**
      * 表图对象集合，当 TableMode 为 Partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tables?: Array<Table>;
    /**
      * 视图选择模式: All 为当前对象下的所有视图对象,Partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewMode?: string;
    /**
      * 视图对象集合，当 ViewMode 为 Partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Views?: Array<View>;
    /**
      * 选择要同步的模式，Partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    FunctionMode?: string;
    /**
      * FunctionMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Functions?: Array<string>;
    /**
      * 选择要同步的模式，Partial为部分，All为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcedureMode?: string;
    /**
      * ProcedureMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Procedures?: Array<string>;
}
/**
 * ModifyMigrationJob请求参数结构体
 */
export interface ModifyMigrationJobRequest {
    /**
      * 任务id
      */
    JobId: string;
    /**
      * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
      */
    RunMode: string;
    /**
      * 迁移任务配置选项，描述任务如何执行迁移等一系列配置信息
      */
    MigrateOption: MigrateOption;
    /**
      * 源实例信息
      */
    SrcInfo: DBEndpointInfo;
    /**
      * 目标实例信息
      */
    DstInfo: DBEndpointInfo;
    /**
      * 迁移任务名称，最大长度128
      */
    JobName?: string;
    /**
      * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
      */
    ExpectRunTime?: string;
    /**
      * 标签信息
      */
    Tags?: Array<TagItem>;
}
/**
 * DescribeSyncJobs请求参数结构体
 */
export interface DescribeSyncJobsRequest {
    /**
      * 同步任务id
      */
    JobId?: string;
    /**
      * 同步任务名
      */
    JobName?: string;
    /**
      * 排序字段，可以取值为CreateTime
      */
    Order?: string;
    /**
      * 排序方式，升序为ASC，降序为DESC，默认为CreateTime降序
      */
    OrderSeq?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回同步任务实例数量，默认20，有效区间[1,100]
      */
    Limit?: number;
    /**
      * 状态集合，如Initialized,CheckPass,Running,ResumableErr,Stopped
      */
    Status?: Array<string>;
    /**
      * 运行模式，如Immediate:立即运行，Timed:定时运行
      */
    RunMode?: string;
    /**
      * 任务类型，如mysql2mysql：msyql同步到mysql
      */
    JobType?: string;
    /**
      * 付费类型，PrePay：预付费，PostPay：后付费
      */
    PayMode?: string;
    /**
      * tag
      */
    TagFilters?: Array<TagFilter>;
}
/**
 * 同步任务的步骤信息
 */
export interface SyncDetailInfo {
    /**
      * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepAll: number;
    /**
      * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNow: number;
    /**
      * 总体进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: number;
    /**
      * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentStepProgress: number;
    /**
      * 同步两端数据量差距
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterSlaveDistance: number;
    /**
      * 同步两端时间差距
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondsBehindMaster: number;
    /**
      * 总体描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 详细步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfos: Array<StepInfo>;
}
/**
 * ResumeSyncJob请求参数结构体
 */
export interface ResumeSyncJobRequest {
    /**
      * 同步任务id
      */
    JobId: string;
}
/**
 * 用于一致性校验的表配置
 */
export interface CompareTableItem {
    /**
      * 表名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableName?: string;
}
/**
 * ConfigureSyncJob返回参数结构体
 */
export interface ConfigureSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用于一致性校验的视图配置
 */
export interface CompareViewItem {
    /**
      * 视图名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewName?: string;
}
/**
 * 单个步骤的详细信息
 */
export interface StepInfo {
    /**
      * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNo?: number;
    /**
      * 步骤名
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepName?: string;
    /**
      * 步骤标号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepId?: string;
    /**
      * 当前状态，是否完成
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
    /**
      * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime?: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Errors?: Array<StepTip>;
    /**
      * 警告信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Warnings?: Array<StepTip>;
    /**
      * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress?: number;
}
/**
 * ResumeMigrateJob请求参数结构体
 */
export interface ResumeMigrateJobRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
    /**
      * 恢复任务的模式，目前的取值有：clearData 清空目标实例数据，overwrite 以覆盖写的方式执行任务，normal 跟正常流程一样，不做额外动作
      */
    ResumeOption: string;
}
/**
 * 计费状态信息
 */
export interface TradeInfo {
    /**
      * 交易订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealName: string;
    /**
      * 上一次交易订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastDealName: string;
    /**
      * 实例规格，包括：micro、small、medium、large、xlarge、2xlarge等
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceClass: string;
    /**
      * 计费任务状态， normal(计费或待计费)、resizing(变配中)、reversing(冲正中，比较短暂的状态)、isolating(隔离中，比较短暂的状态)、isolated(已隔离)、offlining(下线中)、offlined(已下线)、notBilled(未计费)
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeStatus: string;
    /**
      * 到期时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 下线时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
      */
    OfflineTime: string;
    /**
      * 隔离时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsolateTime: string;
    /**
      * 下线原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    OfflineReason: string;
    /**
      * 隔离原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsolateReason: string;
    /**
      * 付费类型，包括：postpay(后付费)、prepay(预付费)
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayType: string;
    /**
      * 任务计费类型，包括：billing(计费)、notBilling(不计费)、 promotions(促销活动中)
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillingType: string;
}
/**
 * StartCompare返回参数结构体
 */
export interface StartCompareResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCompareTask返回参数结构体
 */
export interface CreateCompareTaskResponse {
    /**
      * 数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareTaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopCompare返回参数结构体
 */
export interface StopCompareResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 一致性校验摘要信息
 */
export interface CompareAbstractInfo {
    /**
      * 对比结论: same,different
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conclusion: string;
    /**
      * 任务状态: success,failed
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 总的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalTables: number;
    /**
      * 已校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckedTables: number;
    /**
      * 不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    DifferentTables: number;
    /**
      * 跳过校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkippedTables: number;
    /**
      * 不一致的数据行数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    DifferentRows: number;
}
/**
 * 检查步骤
 */
export interface CheckStep {
    /**
      * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNo: number;
    /**
      * 步骤Id， 如：ConnectDBCheck、VersionCheck、SrcPrivilegeCheck等，具体校验项和源目标实例相关
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepId: string;
    /**
      * 步骤名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepName: string;
    /**
      * 此检查步骤的结果，pass(校验通过)、failed(校验失败)、notStarted(校验还未开始进行)、blocked(检验阻塞)、warning(校验有告警，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepStatus: string;
    /**
      * 此检查步骤的错误消息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepMessage: string;
    /**
      * 每个检查步骤里的具体检查项
注意：此字段可能返回 null，表示取不到有效值。
      */
    DetailCheckItems: Array<DetailCheckItem>;
    /**
      * 是否已跳过
注意：此字段可能返回 null，表示取不到有效值。
      */
    HasSkipped: boolean;
}
/**
 * 一致性校验对象信息
 */
export interface CompareTaskItem {
    /**
      * 迁移任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * 对比任务 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareTaskId: string;
    /**
      * 对比任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskName: string;
    /**
      * 对比任务状态, 可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 对比任务配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Config: CompareObject;
    /**
      * 对比任务校验详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckProcess: ProcessProgress;
    /**
      * 对比任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareProcess: ProcessProgress;
    /**
      * 对比结果, 可能的值：same - 一致；different - 不一致；skipAll - 跳过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conclusion: string;
    /**
      * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 任务启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartedAt: string;
    /**
      * 对比结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FinishedAt: string;
}
/**
 * ModifyMigrateJobSpec返回参数结构体
 */
export interface ModifyMigrateJobSpecResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSyncJob返回参数结构体
 */
export interface CreateSyncJobResponse {
    /**
      * 同步任务ids
      */
    JobIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCompareTask请求参数结构体
 */
export interface CreateCompareTaskRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 数据对比任务名称，若为空则默认给CompareTaskId相同值
      */
    TaskName?: string;
    /**
      * 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)，custom(自定义模式)
      */
    ObjectMode?: string;
    /**
      * 一致性对比对象配置
      */
    Objects?: CompareObject;
}
/**
 * StartCompare请求参数结构体
 */
export interface StartCompareRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
      */
    CompareTaskId: string;
}
/**
 * DescribeMigrationCheckJob请求参数结构体
 */
export interface DescribeMigrationCheckJobRequest {
    /**
      * 任务id
      */
    JobId: string;
}
/**
 * DescribeMigrationDetail返回参数结构体
 */
export interface DescribeMigrationDetailResponse {
    /**
      * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobName: string;
    /**
      * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 迁移任务简要错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    BriefMsg: string;
    /**
      * 任务状态，取值为：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Action: MigrateAction;
    /**
      * 迁移执行过程信息，在校验阶段显示校验过程步骤信息，在迁移阶段会显示迁移步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfo: MigrateDetailInfo;
    /**
      * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcInfo: DBEndpointInfo;
    /**
      * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstInfo: DBEndpointInfo;
    /**
      * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareTask: CompareTaskInfo;
    /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<TagItem>;
    /**
      * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunMode: string;
    /**
      * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpectRunTime: string;
    /**
      * 迁移选项，描述任务如何执行迁移等一系列配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MigrateOption: MigrateOption;
    /**
      * 校验任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckStepInfo: CheckStepInfo;
    /**
      * 描述计费相关的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeInfo: TradeInfo;
    /**
      * 任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorInfo: Array<ErrorInfoItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMigrateName请求参数结构体
 */
export interface ModifyMigrateNameRequest {
    /**
      * 迁移任务id
      */
    JobId: string;
    /**
      * 修改后的迁移任务名
      */
    JobName: string;
}
/**
 * 迁移任务列表
 */
export interface JobItem {
    /**
      * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobName: string;
    /**
      * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 迁移任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    BriefMsg: string;
    /**
      * 任务状态，取值为：creating(创建中)、created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunMode: string;
    /**
      * 期待启动时间，当RunMode取值为timed时，此值必填，形如：2022-07-11 16:20:49
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpectRunTime: string;
    /**
      * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Action: MigrateAction;
    /**
      * 迁移执行过程信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfo: MigrateDetailInfo;
    /**
      * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcInfo: DBEndpointInfo;
    /**
      * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstInfo: DBEndpointInfo;
    /**
      * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    CompareTask: CompareTaskInfo;
    /**
      * 计费状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeInfo: TradeInfo;
    /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<TagItem>;
}
/**
 * StartSyncJob返回参数结构体
 */
export interface StartSyncJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 同步的数据库对对象描述
 */
export interface Objects {
    /**
      * 迁移对象类型 Partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mode?: string;
    /**
      * 同步对象，当 Mode 为 Partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Databases?: Array<Database>;
    /**
      * 高级对象类型，如function、procedure，当需要同步高级对象时，初始化类型必须包含结构初始化类型，即Options.InitType字段值为Structure或Full
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdvancedObjects?: Array<string>;
}
/**
 * RecoverMigrateJob返回参数结构体
 */
export interface RecoverMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 迁移对象信息
 */
export interface DBItem {
    /**
      * 需要迁移或同步的库名，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    DbName?: string;
    /**
      * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewDbName?: string;
    /**
      * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchemaName?: string;
    /**
      * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewSchemaName?: string;
    /**
      * DB选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBMode?: string;
    /**
      * schema选择模式: all(为当前对象下的所有对象)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchemaMode?: string;
    /**
      * 表选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当DBMode为partial时此项必填
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableMode?: string;
    /**
      * 表图对象集合，当 TableMode 为 partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tables?: Array<TableItem>;
    /**
      * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewMode?: string;
    /**
      * 视图对象集合，当 ViewMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Views?: Array<ViewItem>;
    /**
      * postgresql独有参数，角色选择模式: all 为当前对象下的所有角色对象,partial 为部分角色对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoleMode?: string;
    /**
      * postgresql独有参数，当 RoleMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Roles?: Array<RoleItem>;
    /**
      * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    FunctionMode?: string;
    /**
      * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    TriggerMode?: string;
    /**
      * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventMode?: string;
    /**
      * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcedureMode?: string;
    /**
      * FunctionMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Functions?: Array<string>;
    /**
      * ProcedureMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Procedures?: Array<string>;
    /**
      * EventMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Events?: Array<string>;
    /**
      * TriggerMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Triggers?: Array<string>;
}
/**
 * DeleteCompareTask请求参数结构体
 */
export interface DeleteCompareTaskRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
      */
    CompareTaskId: string;
}
/**
 * 迁移执行过程信息
 */
export interface MigrateDetailInfo {
    /**
      * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepAll: number;
    /**
      * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNow: number;
    /**
      * 主从差距，MB；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterSlaveDistance: number;
    /**
      * 主从差距，秒；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondsBehindMaster: number;
    /**
      * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfo: Array<StepDetailInfo>;
}
/**
 * StopMigrateJob请求参数结构体
 */
export interface StopMigrateJobRequest {
    /**
      * 数据迁移任务ID
      */
    JobId: string;
}
/**
 * IsolateMigrateJob返回参数结构体
 */
export interface IsolateMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 同步任务信息
 */
export interface SyncJobInfo {
    /**
      * 同步任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * 同步任务名
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobName: string;
    /**
      * 付款方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
    /**
      * 运行模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunMode: string;
    /**
      * 期待运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpectRunTime: string;
    /**
      * 支持的所有操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllActions: Array<string>;
    /**
      * 当前状态能进行的操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    Actions: Array<string>;
    /**
      * 同步选项
注意：此字段可能返回 null，表示取不到有效值。
      */
    Options: Options;
    /**
      * 同步库表对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Objects: Objects;
    /**
      * 任务规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Specification: string;
    /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 源端地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcRegion: string;
    /**
      * 源端数据库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcDatabaseType: string;
    /**
      * 源端接入类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcAccessType: string;
    /**
      * 源端信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcInfo: Endpoint;
    /**
      * 目标端地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstRegion: string;
    /**
      * 目标端数据库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstDatabaseType: string;
    /**
      * 目标端接入类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstAccessType: string;
    /**
      * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstInfo: Endpoint;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 标签相关
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<TagItem>;
    /**
      * 同步任务运行步骤信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail: SyncDetailInfo;
}
/**
 * 角色对象，postgresql独有参数
 */
export interface RoleItem {
    /**
      * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoleName?: string;
    /**
      * 迁移后的角色名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewRoleName?: string;
}
/**
 * 标签过滤
 */
export interface TagFilter {
    /**
      * 标签键值
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue?: Array<string>;
}
/**
 * 步骤信息
 */
export interface StepDetailInfo {
    /**
      * 步骤序列
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepNo: number;
    /**
      * 步骤展现名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepName: string;
    /**
      * 步骤英文标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepId: string;
    /**
      * 步骤状态:success(成功)、failed(失败)、running(执行中)、notStarted(未执行)、默认为notStarted
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 步骤错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepMessage: string;
    /**
      * 执行进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent: number;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Errors: Array<ProcessStepTip>;
    /**
      * 告警提示
注意：此字段可能返回 null，表示取不到有效值。
      */
    Warnings: Array<ProcessStepTip>;
}
/**
 * CreateSyncJob请求参数结构体
 */
export interface CreateSyncJobRequest {
    /**
      * 支付类型，PrePay：包年包月  PostPay：按时按量
      */
    PayMode: string;
    /**
      * 源端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
      */
    SrcDatabaseType: string;
    /**
      * 源端数据库所在地域,如ap-guangzhou
      */
    SrcRegion: string;
    /**
      * 目标端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
      */
    DstDatabaseType: string;
    /**
      * 目标端数据库所在地域,如ap-guangzhou
      */
    DstRegion: string;
    /**
      * 同步任务规格，Standard:标准版
      */
    Specification?: string;
    /**
      * 无
      */
    Tags?: Array<TagItem>;
    /**
      * 同步任务数量
      */
    Count?: number;
    /**
      * 自动续费标识
      */
    AutoRenew?: number;
    /**
      * 同步链路规格
      */
    InstanceClass?: string;
    /**
      * 同步链路名称
      */
    JobName?: string;
    /**
      * 创建类似任务的现有任务Id
      */
    ExistedJobId?: string;
}
/**
 * 视图对象
 */
export interface ViewItem {
    /**
      * 视图名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewName?: string;
    /**
      * 迁移后的视图名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewViewName?: string;
}
/**
 * DescribeCompareReport请求参数结构体
 */
export interface DescribeCompareReportRequest {
    /**
      * 迁移任务 Id
      */
    JobId: string;
    /**
      * 校验任务 Id
      */
    CompareTaskId: string;
    /**
      * 校验不一致结果的 limit
      */
    DifferenceLimit?: number;
    /**
      * 不一致的 Offset
      */
    DifferenceOffset?: number;
    /**
      * 搜索条件，不一致的库名
      */
    DifferenceDB?: string;
    /**
      * 搜索条件，不一致的表名
      */
    DifferenceTable?: string;
    /**
      * 未校验的 Limit
      */
    SkippedLimit?: number;
    /**
      * 未校验的 Offset
      */
    SkippedOffset?: number;
    /**
      * 搜索条件，未校验的库名
      */
    SkippedDB?: string;
    /**
      * 搜索条件，未校验的表名
      */
    SkippedTable?: string;
}
/**
 * 数据同步view的描述
 */
export interface View {
    /**
      * view名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewName?: string;
    /**
      * 新view名
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewViewName?: string;
}
/**
 * 标签
 */
export interface TagItem {
    /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKey?: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue?: string;
}
/**
 * RecoverMigrateJob请求参数结构体
 */
export interface RecoverMigrateJobRequest {
    /**
      * 任务id
      */
    JobId: string;
}
/**
 * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
 */
export interface DatabaseTableObject {
    /**
      * 迁移对象类型 all(全实例)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectMode: string;
    /**
      * 迁移对象，当 ObjectMode 为 partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Databases?: Array<DBItem>;
    /**
      * 高级对象类型，如trigger、function、procedure、event
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdvancedObjects?: Array<string>;
}
/**
 * 数据同步库表信息描述
 */
export interface Table {
    /**
      * 表名
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableName?: string;
    /**
      * 新表名
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewTableName?: string;
    /**
      * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterCondition?: string;
}
/**
 * 一致性校验详细信息
 */
export interface CompareDetailInfo {
    /**
      * 数据不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Difference: DifferenceDetail;
    /**
      * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Skipped: SkippedDetail;
}
/**
 * StartMigrateJob返回参数结构体
 */
export interface StartMigrateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据一致性校验选项， 默认为不开启一致性校验
 */
export interface ConsistencyOption {
    /**
      * 一致性检测类型: full(全量检测迁移对象)、noCheck(不检测)、notConfigured(未配置)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mode?: string;
}
