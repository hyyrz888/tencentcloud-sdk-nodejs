/**
 * 加固策略具体信息
 */
export interface PlanDetailInfo {
    /**
      * 默认策略，1为默认，0为非默认
      */
    IsDefault: number;
    /**
      * 策略id
      */
    PlanId: number;
    /**
      * 策略名称
      */
    PlanName: string;
    /**
      * 策略信息
      */
    PlanInfo: PlanInfo;
}
/**
 * 加固后app的信息，包含基本信息和加固信息
 */
export interface AppSetInfo {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * 加固服务版本
      */
    ServiceEdition: string;
    /**
      * 加固结果返回码
      */
    ShieldCode: number;
    /**
      * 加固后的APP下载地址
      */
    AppUrl?: string;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * 请求的客户端ip
      */
    ClientIp: string;
    /**
      * 提交加固时间
      */
    TaskTime: number;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * 加固后app的md5
      */
    ShieldMd5: string;
    /**
      * 加固后app的大小
      */
    ShieldSize: number;
}
/**
 * CreateShieldPlanInstance返回参数结构体
 */
export interface CreateShieldPlanInstanceResponse {
    /**
      * 策略id
      */
    PlanId: number;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 需要扫描的应用的服务信息
 */
export interface ScanInfo {
    /**
      * 任务处理完成后的反向通知回调地址,批量提交app每扫描完成一个会通知一次,通知为POST请求，post信息{ItemId:
      */
    CallbackUrl: string;
    /**
      * VULSCAN-漏洞扫描信息，VIRUSSCAN-返回病毒扫描信息， ADSCAN-广告扫描信息，PLUGINSCAN-插件扫描信息，PERMISSION-系统权限信息，SENSITIVE-敏感词信息，可以自由组合
      */
    ScanTypes: Array<string>;
}
/**
 * CreateResourceInstances请求参数结构体
 */
export interface CreateResourceInstancesRequest {
    /**
      * 资源类型id。13624：加固专业版。
      */
    Pid: number;
    /**
      * 时间单位，取值为d，m，y，分别表示天，月，年。
      */
    TimeUnit: string;
    /**
      * 时间数量。
      */
    TimeSpan: number;
    /**
      * 资源数量。
      */
    ResourceNum: number;
}
/**
 * DescribeShieldInstances返回参数结构体
 */
export interface DescribeShieldInstancesResponse {
    /**
      * 符合要求的app数量
      */
    TotalCount: number;
    /**
      * 一个关于app详细信息的结构体，主要包括app的基本信息和加固信息。
      */
    AppSet: Array<AppSetInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 插件信息
 */
export interface PluginInfo {
    /**
      * 插件类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
      */
    PluginType: number;
    /**
      * 插件名称
      */
    PluginName: string;
    /**
      * 插件描述
      */
    PluginDesc: string;
}
/**
 * 安全扫描敏感词列表
 */
export interface ScanSensitiveList {
    /**
      * 敏感词列表
      */
    SensitiveList: Array<ScanSensitiveInfo>;
}
/**
 * DescribeShieldResult请求参数结构体
 */
export interface DescribeShieldResultRequest {
    /**
      * 任务唯一标识
      */
    ItemId: string;
}
/**
 * CreateShieldInstance请求参数结构体
 */
export interface CreateShieldInstanceRequest {
    /**
      * 待加固的应用信息
      */
    AppInfo: AppInfo;
    /**
      * 加固服务信息
      */
    ServiceInfo: ServiceInfo;
}
/**
 * CreateCosSecKeyInstance请求参数结构体
 */
export interface CreateCosSecKeyInstanceRequest {
    /**
      * 地域信息，例如广州：ap-guangzhou，上海：ap-shanghai，默认为广州。
      */
    CosRegion?: string;
    /**
      * 密钥有效时间，默认为1小时。
      */
    Duration?: number;
}
/**
 * DescribeScanResults返回参数结构体
 */
export interface DescribeScanResultsResponse {
    /**
      * 批量扫描的app结果集
      */
    ScanSet?: Array<ScanSetInfo>;
    /**
      * 批量扫描结果的个数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateScanInstances请求参数结构体
 */
export interface CreateScanInstancesRequest {
    /**
      * 待扫描的app信息列表，一次最多提交20个
      */
    AppInfos: Array<AppInfo>;
    /**
      * 扫描信息
      */
    ScanInfo: ScanInfo;
}
/**
 * DescribeUserBaseInfoInstance返回参数结构体
 */
export interface DescribeUserBaseInfoInstanceResponse {
    /**
      * 用户uin信息
      */
    UserUin?: number;
    /**
      * 用户APPID信息
      */
    UserAppid?: number;
    /**
      * 系统时间戳
      */
    TimeStamp?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateShieldPlanInstance请求参数结构体
 */
export interface CreateShieldPlanInstanceRequest {
    /**
      * 资源id
      */
    ResourceId: string;
    /**
      * 策略名称
      */
    PlanName: string;
    /**
      * 策略具体信息
      */
    PlanInfo: PlanInfo;
}
/**
 * app扫描结果集
 */
export interface ScanSetInfo {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * app信息
      */
    AppDetailInfo: AppDetailInfo;
    /**
      * 病毒信息
      */
    VirusInfo: VirusInfo;
    /**
      * 漏洞信息
      */
    VulInfo: VulInfo;
    /**
      * 广告插件信息
      */
    AdInfo: AdInfo;
    /**
      * 提交扫描的时间
      */
    TaskTime: number;
    /**
      * 状态码，成功返回0，失败返回错误码
      */
    StatusCode: number;
    /**
      * 状态描述
      */
    StatusDesc: string;
    /**
      * 状态操作指引
      */
    StatusRef: string;
    /**
      * 系统权限信息
      */
    PermissionInfo: ScanPermissionList;
    /**
      * 敏感词列表
      */
    SensitiveInfo: ScanSensitiveList;
}
/**
 * 扫描后app的信息，包含基本信息和扫描状态信息
 */
export interface AppScanSet {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * 扫描结果返回码
      */
    ScanCode: number;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * 提交扫描时间
      */
    TaskTime: number;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * 标识唯一该app，主要用于删除
      */
    AppSid: string;
    /**
      * 安全类型:1-安全软件，2-风险软件，3病毒软件
      */
    SafeType: number;
    /**
      * 漏洞个数
      */
    VulCount: number;
}
/**
 * 加固策略信息
 */
export interface ShieldPlanInfo {
    /**
      * 加固策略数量
      */
    TotalCount: number;
    /**
      * 加固策略具体信息数组
      */
    PlanSet: Array<PlanDetailInfo>;
}
/**
 * CreateBindInstance请求参数结构体
 */
export interface CreateBindInstanceRequest {
    /**
      * 资源id，全局唯一
      */
    ResourceId: string;
    /**
      * app的icon的url
      */
    AppIconUrl: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
}
/**
 * CreateShieldInstance返回参数结构体
 */
export interface CreateShieldInstanceResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteShieldInstances请求参数结构体
 */
export interface DeleteShieldInstancesRequest {
    /**
      * 任务唯一标识ItemId的列表
      */
    ItemIds: Array<string>;
}
/**
 * 拉取某个用户的所有资源信息
 */
export interface ResourceInfo {
    /**
      * 用户购买的资源id，全局唯一
      */
    ResourceId: string;
    /**
      * 资源的pid，MTP加固-12767，应用加固-12750 MTP反作弊-12766 源代码混淆-12736
      */
    Pid: number;
    /**
      * 购买时间戳
      */
    CreateTime: number;
    /**
      * 到期时间戳
      */
    ExpireTime: number;
    /**
      * 0-未绑定，1-已绑定
      */
    IsBind: number;
    /**
      * 用户绑定app的基本信息
      */
    BindInfo: BindInfo;
    /**
      * 资源名称，如应用加固，漏洞扫描
      */
    ResourceName: string;
}
/**
 * DescribeShieldInstances请求参数结构体
 */
export interface DescribeShieldInstancesRequest {
    /**
      * 支持通过app名称，app包名，加固的服务版本，提交的渠道进行筛选。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
      */
    ItemIds?: Array<string>;
    /**
      * 按某个字段排序，目前仅支持TaskTime排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * CreateScanInstances返回参数结构体
 */
export interface CreateScanInstancesResponse {
    /**
      * 任务唯一标识
      */
    ItemId?: string;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress?: number;
    /**
      * 提交成功的app的md5集合
      */
    AppMd5s?: Array<string>;
    /**
      * 剩余可用次数
      */
    LimitCount?: number;
    /**
      * 到期时间
      */
    LimitTime?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanInstances返回参数结构体
 */
export interface DescribeScanInstancesResponse {
    /**
      * 符合要求的app数量
      */
    TotalCount?: number;
    /**
      * 一个关于app详细信息的结构体，主要包括app的基本信息和扫描状态信息。
      */
    ScanSet?: Array<AppScanSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUrlDetectionResult请求参数结构体
 */
export interface DescribeUrlDetectionResultRequest {
    /**
      * 查询的网址
      */
    Url: string;
}
/**
 * 漏洞信息
 */
export interface VulInfo {
    /**
      * 漏洞列表
      */
    VulList: Array<VulList>;
    /**
      * 漏洞文件评分
      */
    VulFileScore: number;
}
/**
 * 提交的app基本信息
 */
export interface AppInfo {
    /**
      * app的url，必须保证不用权限校验就可以下载
      */
    AppUrl: string;
    /**
      * app的md5，需要正确传递
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize?: number;
    /**
      * app的文件名
      */
    FileName?: string;
    /**
      * app的包名，需要正确的传递此字段
      */
    AppPkgName?: string;
    /**
      * app的版本号
      */
    AppVersion?: string;
    /**
      * app的图标url
      */
    AppIconUrl?: string;
    /**
      * app的名称
      */
    AppName?: string;
}
/**
 * DescribeShieldPlanInstance返回参数结构体
 */
export interface DescribeShieldPlanInstanceResponse {
    /**
      * 绑定资源信息
      */
    BindInfo: BindInfo;
    /**
      * 加固策略信息
      */
    ShieldPlanInfo: ShieldPlanInfo;
    /**
      * 加固资源信息
      */
    ResourceServiceInfo: ResourceServiceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 提交app加固的服务信息
 */
export interface ServiceInfo {
    /**
      * 服务版本，基础版basic，专业版professional，企业版enterprise。
      */
    ServiceEdition: string;
    /**
      * 任务处理完成后的反向通知回调地址，如果不需要通知请传递空字符串。通知为POST请求，post包体数据示例{"Response":{"ItemId":"4cdad8fb86f036b06bccb3f58971c306","ShieldCode":0,"ShieldMd5":"78701576793c4a5f04e1c9660de0aa0b","ShieldSize":11997354,"TaskStatus":1,"TaskTime":1539148141}}，调用方需要返回如下信息，{"Result":"ok","Reason":"xxxxx"}，如果Result字段值不等于ok会继续回调。
      */
    CallbackUrl: string;
    /**
      * 提交来源 YYB-应用宝 RDM-rdm MC-控制台 MAC_TOOL-mac工具 WIN_TOOL-window工具。
      */
    SubmitSource: string;
    /**
      * 加固策略编号，如果不传则使用系统默认加固策略。如果指定的plan不存在会返回错误。
      */
    PlanId?: number;
}
/**
 * so加固信息
 */
export interface SoInfo {
    /**
      * so文件列表
      */
    SoFileNames: Array<string>;
}
/**
 * 安全扫描敏感词
 */
export interface ScanSensitiveInfo {
    /**
      * 敏感词
      */
    WordList: Array<string>;
    /**
      * 敏感词对应的文件信息
      */
    FilePath: string;
    /**
      * 文件sha1值
      */
    FileSha: string;
}
/**
 * APK检测服务：广告插件结果结构体
 */
export interface PluginListItem {
    /**
      * 数字类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
      */
    PluginType: string;
    /**
      * 广告插件名称
      */
    PluginName: string;
    /**
      * 广告插件描述
      */
    PluginDesc: string;
}
/**
 * DescribeApkDetectionResult请求参数结构体
 */
export interface DescribeApkDetectionResultRequest {
    /**
      * 软件包的下载链接
      */
    ApkUrl: string;
    /**
      * 软件包的md5值，具有唯一性。腾讯APK云检测服务会根据md5值来判断该包是否为库中已收集的样本，已存在，则返回检测结果，反之，需要一定时间检测该样本。
      */
    ApkMd5: string;
}
/**
 * APK检测服务参数返回具体信息
 */
export interface ResultListItem {
    /**
      * banner广告软件标记，分别为-1-不确定，0-否，1-是
      */
    Banner: string;
    /**
      * 精品推荐列表广告标记，分别为-1-不确定，0-否，1-是
      */
    BoutiqueRecommand: string;
    /**
      * 悬浮窗图标广告标记,分别为-1-不确定，0-否，1-是
      */
    FloatWindows: string;
    /**
      * 积分墙广告软件标记，分别为 -1 -不确定，0-否，1-是
      */
    IntegralWall: string;
    /**
      * 安装包的md5
      */
    Md5: string;
    /**
      * 通知栏广告软件标记，分别为-1-不确定，0-否，1-是
      */
    NotifyBar: string;
    /**
      * 1表示官方，0表示非官方
      */
    Official: string;
    /**
      * 广告插件结果列表
      */
    PluginList: Array<PluginListItem>;
    /**
      * 非广告插件结果列表(SDK、风险插件等)
      */
    OptPluginList: Array<OptPluginListItem>;
    /**
      * 数字类型，分别为0-未知， 1-安全软件，2-风险软件，3-病毒软件
      */
    SafeType: string;
    /**
      * Session id，合作方可以用来区分回调数据，需要唯一。
      */
    Sid: string;
    /**
      * 安装包名称
      */
    SoftName: string;
    /**
      * 插播广告软件标记，取值：-1 不确定，0否， 1 是
      */
    Spot: string;
    /**
      * 病毒名称，utf8编码
      */
    VirusName: string;
    /**
      * 病毒描述，utf8编码
      */
    VirusDesc: string;
    /**
      * 二次打包状态：0-表示默认；1-表示二次
      */
    RepackageStatus: string;
    /**
      * 应用错误码：0、1-表示正常；

2表示System Error(engine analysis error).

3表示App analysis error, please confirm it.

4表示App have not cert, please confirm it.

5表示App size is zero, please confirm it.

6表示App have not package name, please confirm it.

7表示App build time is empty, please confirm it.

8表示App have not valid cert, please confirm it.

99表示Other error.

1000表示App downloadlink download fail, please confirm it.

1001表示APP md5 different between real md5, please confirm it.

1002表示App md5 uncollect, please offer downloadlink.
      */
    Errno: string;
    /**
      * 对应errno的错误信息描述
      */
    ErrMsg: string;
}
/**
 * 资源服务信息
 */
export interface ResourceServiceInfo {
    /**
      * 创建时间戳
      */
    CreateTime: number;
    /**
      * 到期时间戳
      */
    ExpireTime: number;
    /**
      * 资源名称，如应用加固，源码混淆
      */
    ResourceName: string;
}
/**
 * DescribeResourceInstances请求参数结构体
 */
export interface DescribeResourceInstancesRequest {
    /**
      * 支持CreateTime、ExpireTime、AppName、AppPkgName、BindValue、IsBind过滤
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 资源类别id数组，13624：加固专业版，12750：企业版。空数组表示返回全部资源。
      */
    Pids?: Array<number>;
    /**
      * 按某个字段排序，目前支持CreateTime、ExpireTime其中的一个排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * 广告信息
 */
export interface AdInfo {
    /**
      * 插播广告列表
      */
    Spots: Array<PluginInfo>;
    /**
      * 精品推荐广告列表
      */
    BoutiqueRecommands: Array<PluginInfo>;
    /**
      * 悬浮窗广告列表
      */
    FloatWindowses: Array<PluginInfo>;
    /**
      * banner广告列表
      */
    Banners: Array<PluginInfo>;
    /**
      * 积分墙广告列表
      */
    IntegralWalls: Array<PluginInfo>;
    /**
      * 通知栏广告列表
      */
    NotifyBars: Array<PluginInfo>;
}
/**
 * DescribeUrlDetectionResult返回参数结构体
 */
export interface DescribeUrlDetectionResultResponse {
    /**
      * [查询结果]查询结果；枚举值：0 查询成功，否则查询失败
      */
    ResultCode: number;
    /**
      * [固定信息]响应协议版本号；
      */
    RespVer: number;
    /**
      * [查询结果]url恶意状态；枚举值：1-灰， 2-黑（具体的恶意类型参考恶意类型定义Eviltype字段) ，3-非腾讯白名单，4-腾讯白名单。查询结果（level、evilclass、eviltype）这3个字段在Urltype=2（url状态为黑）下才有意义。
      */
    UrlType: number;
    /**
      * [查询结果]url恶意大类；枚举值：1-链接，2-Cgi，3-路劲，4-整站，5-整域。
      */
    EvilClass: number;
    /**
      * [查询结果]url恶意类型；枚举值：1-社工欺诈（仿冒、账号钓鱼、中奖诈骗）；2-信息诈骗（虚假充值、虚假兼职、虚假金融投资、虚假信用卡代办、网络赌博诈骗；3-虚假销售（男女保健美容减肥产品、电子产品、虚假广告、违法销售）；4-恶意文件（病毒文件，木马文件，恶意apk文件的下载链接以及站点，挂马网站）；5-博彩网站（博彩网站，在线赌博网站）；6-色情网站（涉嫌传播色情内容，提供色情服务的网站；7-风险网站（弱类型，传播垃圾信息的网站, 如果客户端有阻断，不建议使用这个数据）
      */
    EvilType: number;
    /**
      * [查询结果]url恶意级别
      */
    Level: number;
    /**
      * [查询详情]url检出时间
      */
    DetectTime: number;
    /**
      * [查询详情]拦截Wording
      */
    Wording: string;
    /**
      * [查询详情]拦截Wording 标题
      */
    WordingTitle: string;
    /**
      * [查询结果]url恶意状态说明
      */
    UrlTypeDesc: string;
    /**
      * [查询结果]url恶意大类说明
      */
    EvilClassDesc: string;
    /**
      * [查询结果]url恶意类型说明
      */
    EvilTypeDesc: string;
    /**
      * [查询结果]url恶意级别说明
      */
    LevelDesc: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeShieldPlanInstance请求参数结构体
 */
export interface DescribeShieldPlanInstanceRequest {
    /**
      * 资源id
      */
    ResourceId: string;
    /**
      * 服务类别id
      */
    Pid: number;
}
/**
 * 加固后app的信息
 */
export interface ShieldInfo {
    /**
      * 加固结果的返回码
      */
    ShieldCode: number;
    /**
      * 加固后app的大小
      */
    ShieldSize?: number;
    /**
      * 加固后app的md5
      */
    ShieldMd5?: string;
    /**
      * 加固后的APP下载地址，该地址有效期为20分钟，请及时下载
      */
    AppUrl?: string;
    /**
      * 加固的提交时间
      */
    TaskTime: number;
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 加固版本，basic基础版，professional专业版，enterprise企业版
      */
    ServiceEdition: string;
}
/**
 * DescribeUserBaseInfoInstance请求参数结构体
 */
export declare type DescribeUserBaseInfoInstanceRequest = null;
/**
 * CreateResourceInstances返回参数结构体
 */
export interface CreateResourceInstancesResponse {
    /**
      * 新创建的资源列表。
      */
    ResourceSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * app的详细基础信息
 */
export interface AppDetailInfo {
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * app的文件名称
      */
    FileName: string;
}
/**
 * DeleteScanInstances返回参数结构体
 */
export interface DeleteScanInstancesResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 筛选数据结构
 */
export interface Filter {
    /**
      * 需要过滤的字段
      */
    Name: string;
    /**
      * 需要过滤字段的值
      */
    Value?: string;
}
/**
 * DeleteShieldInstances返回参数结构体
 */
export interface DeleteShieldInstancesResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanInstances请求参数结构体
 */
export interface DescribeScanInstancesRequest {
    /**
      * 支持通过app名称，app包名进行筛选
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
      */
    ItemIds?: Array<string>;
    /**
      * 按某个字段排序，目前仅支持TaskTime排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * DescribeApkDetectionResult返回参数结构体
 */
export interface DescribeApkDetectionResultResponse {
    /**
      * 响应结果，ok表示正常，error表示错误
      */
    Result: string;
    /**
      * Result为error错误时的原因说明
      */
    Reason: string;
    /**
      * APK检测结果数组
      */
    ResultList: Array<ResultListItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceInstances返回参数结构体
 */
export interface DescribeResourceInstancesResponse {
    /**
      * 符合要求的资源数量
      */
    TotalCount: number;
    /**
      * 符合要求的资源数组
      */
    ResourceSet: Array<ResourceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanResults请求参数结构体
 */
export interface DescribeScanResultsRequest {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 批量查询一个或者多个app的扫描结果，如果不传表示查询该任务下所提交的所有app
      */
    AppMd5s?: Array<string>;
}
/**
 * CreateCosSecKeyInstance返回参数结构体
 */
export interface CreateCosSecKeyInstanceResponse {
    /**
      * COS密钥对应的AppId
      */
    CosAppid?: number;
    /**
      * COS密钥对应的存储桶名
      */
    CosBucket?: string;
    /**
      * 存储桶对应的地域
      */
    CosRegion?: string;
    /**
      * 密钥过期时间
      */
    ExpireTime?: number;
    /**
      * 密钥ID信息
      */
    CosId?: string;
    /**
      * 密钥KEY信息
      */
    CosKey?: string;
    /**
      * 密钥TOCKEN信息
      */
    CosTocken?: string;
    /**
      * 密钥可访问的文件前缀人。例如：CosPrefix=test/123/666，则该密钥只能操作test/123/666为前缀的文件，例如test/123/666/1.txt
      */
    CosPrefix?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 病毒信息
 */
export interface VirusInfo {
    /**
      * 软件安全类型，分别为0-未知、 1-安全软件、2-风险软件、3-病毒软件
      */
    SafeType: number;
    /**
      * 病毒名称， utf8编码，非病毒时值为空
      */
    VirusName: string;
    /**
      * 病毒描述，utf8编码，非病毒时值为空
      */
    VirusDesc: string;
}
/**
 * 安全扫描系统权限信息
 */
export interface ScanPermissionInfo {
    /**
      * 系统权限
      */
    Permission: string;
}
/**
 * 加固策略信息
 */
export interface PlanInfo {
    /**
      * apk大小优化，0关闭，1开启
      */
    ApkSizeOpt: number;
    /**
      * Dex加固，0关闭，1开启
      */
    Dex: number;
    /**
      * So加固，0关闭，1开启
      */
    So: number;
    /**
      * 数据收集，0关闭，1开启
      */
    Bugly: number;
    /**
      * 防止重打包，0关闭，1开启
      */
    AntiRepack: number;
    /**
      * Dex分离，0关闭，1开启
      */
    SeperateDex: number;
    /**
      * 内存保护，0关闭，1开启
      */
    Db: number;
    /**
      * Dex签名校验，0关闭，1开启
      */
    DexSig: number;
    /**
      * So文件信息
      */
    SoInfo: SoInfo;
    /**
      * vmp，0关闭，1开启
      */
    AntiVMP: number;
    /**
      * 保护so的强度，
      */
    SoType: Array<string>;
    /**
      * 防日志泄漏，0关闭，1开启
      */
    AntiLogLeak: number;
    /**
      * root检测，0关闭，1开启
      */
    AntiQemuRoot: number;
    /**
      * 资源防篡改，0关闭，1开启
      */
    AntiAssets: number;
    /**
      * 防止截屏，0关闭，1开启
      */
    AntiScreenshot: number;
    /**
      * SSL证书防窃取，0关闭，1开启
      */
    AntiSSL: number;
}
/**
 * DescribeShieldResult返回参数结构体
 */
export interface DescribeShieldResultResponse {
    /**
      * 任务状态: 0-请返回,1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * app加固前的详细信息
      */
    AppDetailInfo: AppDetailInfo;
    /**
      * app加固后的详细信息
      */
    ShieldInfo: ShieldInfo;
    /**
      * 状态描述
      */
    StatusDesc: string;
    /**
      * 状态指引
      */
    StatusRef: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBindInstance返回参数结构体
 */
export interface CreateBindInstanceResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 漏洞信息
 */
export interface VulList {
    /**
      * 漏洞id
      */
    VulId: string;
    /**
      * 漏洞名称
      */
    VulName: string;
    /**
      * 漏洞代码
      */
    VulCode: string;
    /**
      * 漏洞描述
      */
    VulDesc: string;
    /**
      * 漏洞解决方案
      */
    VulSolution: string;
    /**
      * 漏洞来源类别，0默认自身，1第三方插件
      */
    VulSrcType: number;
    /**
      * 漏洞位置
      */
    VulFilepath: string;
    /**
      * 风险级别：1 低风险 ；2中等风险；3 高风险
      */
    RiskLevel: number;
}
/**
 * 用户绑定app的基本信息
 */
export interface BindInfo {
    /**
      * app的icon的url
      */
    AppIconUrl: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
}
/**
 * 安全扫描系统权限信息
 */
export interface ScanPermissionList {
    /**
      * 系统权限信息
      */
    PermissionList: Array<ScanPermissionInfo>;
}
/**
 * APK检测服务：非广告插件结果列表(SDK、风险插件等)
 */
export interface OptPluginListItem {
    /**
      * 非广告类型
      */
    PluginType: string;
    /**
      * 非广告插件名称
      */
    PluginName: string;
    /**
      * 非广告插件描述
      */
    PluginDesc: string;
}
/**
 * DeleteScanInstances请求参数结构体
 */
export interface DeleteScanInstancesRequest {
    /**
      * 删除一个或多个扫描的app，最大支持20个
      */
    AppSids: Array<string>;
}
