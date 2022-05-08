/**
 * CreatePurgeTask返回参数结构体
 */
export interface CreatePurgeTaskResponse {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 失败的任务列表及原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedList: Array<FailReason>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePurgeTask请求参数结构体
 */
export interface CreatePurgeTaskRequest {
    /**
      * Zone ID
      */
    ZoneId: string;
    /**
      * 类型，当前支持的类型：
- purge_url：URL
- purge_prefix：前缀
- purge_host：Hostname
- purge_all：全部缓存
      */
    Type: string;
    /**
      * 内容，一行一个
      */
    Targets?: Array<string>;
    /**
      * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请打开 URL Encode 开关，编码转换（编码规则遵循 RFC3986）
      */
    EncodeUrl?: boolean;
}
/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
    /**
      * 任务ID
      */
    JobId?: string;
    /**
      * 类型
      */
    Type?: string;
    /**
      * 查询起始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
    /**
      * 查询起始偏移量
      */
    Offset?: number;
    /**
      * 查询最大返回的结果条数
      */
    Limit?: number;
    /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
    Statuses?: Array<string>;
    /**
      * zone id
      */
    ZoneId?: string;
    /**
      * 查询的域名列表
      */
    Domains?: Array<string>;
    /**
      * 查询内容
      */
    Target?: string;
}
/**
 * CreatePrefetchTask返回参数结构体
 */
export interface CreatePrefetchTaskResponse {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 失败的任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedList: Array<FailReason>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 站点信息
 */
export interface Zone {
    /**
      * 站点ID
      */
    Id: string;
    /**
      * 站点名称
      */
    Name: string;
    /**
      * 站点当前使用的 NS 列表
      */
    OriginalNameServers: Array<string>;
    /**
      * 腾讯云分配的 NS 列表
      */
    NameServers: Array<string>;
    /**
      * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
      */
    Status: string;
    /**
      * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
      */
    Type: string;
    /**
      * 站点是否关闭
      */
    Paused: boolean;
    /**
      * 站点创建时间
      */
    CreatedOn: string;
    /**
      * 站点修改时间
      */
    ModifiedOn: string;
}
/**
 * DescribePrefetchTasks返回参数结构体
 */
export interface DescribePrefetchTasksResponse {
    /**
      * 该查询条件总共条目数
      */
    TotalCount: number;
    /**
      * 任务结果列表
      */
    Tasks: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
    /**
      * 分页参数，页偏移
      */
    Offset?: number;
    /**
      * 分页参数，每页返回的站点个数
      */
    Limit?: number;
    /**
      * 查询条件过滤器，复杂类型
      */
    Filters?: Array<ZoneFilter>;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 符合条件的站点数
      */
    TotalCount: number;
    /**
      * 站点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zones: Array<Zone>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 刷新预热附带的头部信息
 */
export interface Header {
    /**
      * HTTP头部
      */
    Name: string;
    /**
      * HTTP头部值
      */
    Value: string;
}
/**
 * 失败原因
 */
export interface FailReason {
    /**
      * 失败原因
      */
    Reason: string;
    /**
      * 失败列表
      */
    Targets: Array<string>;
}
/**
 * 内容管理任务结果
 */
export interface Task {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 资源
      */
    Target: string;
    /**
      * 任务类型
      */
    Type: string;
    /**
      * 任务创建时间
      */
    CreateTime: string;
    /**
      * 任务完成时间
      */
    UpdateTime: string;
}
/**
 * CreatePrefetchTask请求参数结构体
 */
export interface CreatePrefetchTaskRequest {
    /**
      * Zone ID
      */
    ZoneId: string;
    /**
      * 预热的资源列表
      */
    Targets?: Array<string>;
    /**
      * 是否对url进行encode
      */
    EncodeUrl?: boolean;
    /**
      * 附带的http头部信息
      */
    Headers?: Array<Header>;
}
/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
    /**
      * 该查询条件总共条目数
      */
    TotalCount: number;
    /**
      * 任务结果列表
      */
    Tasks: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrefetchTasks请求参数结构体
 */
export interface DescribePrefetchTasksRequest {
    /**
      * 任务ID
      */
    JobId?: string;
    /**
      * 查询起始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
    /**
      * 查询起始偏移量
      */
    Offset?: number;
    /**
      * 查询最大返回的结果条数
      */
    Limit?: number;
    /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
    Statuses?: Array<string>;
    /**
      * zone id
      */
    ZoneId?: string;
    /**
      * 查询的域名列表
      */
    Domains?: Array<string>;
    /**
      * 查询的资源
      */
    Target?: string;
}
/**
 * 站点查询过滤条件
 */
export interface ZoneFilter {
    /**
      * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
      */
    Name: string;
    /**
      * 过滤字段值
      */
    Values: Array<string>;
    /**
      * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
      */
    Fuzzy?: boolean;
}
