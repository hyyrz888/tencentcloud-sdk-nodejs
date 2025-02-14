/**
 * 节拍信息。
 */
export interface KTVBPMInfo {
    /**
      * 节拍类型，取值有：
<li>Slow：慢；</li>
<li>Middle：中等；</li>
<li>Fast：快；</li>
<li>Unknown：未知。</li>
      */
    Type: string;
    /**
      * BPM 值。
      */
    Value: number;
}
/**
 * DescribeKTVSuggestions返回参数结构体
 */
export interface DescribeKTVSuggestionsResponse {
    /**
      * 联想词信息列表。
      */
    KTVSuggestionInfoSet: Array<KTVSuggestionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌曲信息匹配。
 */
export interface KTVMatchRuleMusicInfo {
    /**
      * 歌曲名称。
      */
    MusicName: string;
    /**
      * 歌手列表。
      */
    SingerSet: Array<string>;
}
/**
 * 直播进房输入参数
 */
export interface JoinRoomInput {
    /**
      * TRTC进房参数
      */
    TRTCJoinRoomInput: TRTCJoinRoomInput;
}
/**
 * DestroyKTVRobot返回参数结构体
 */
export interface DestroyKTVRobotResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌曲专辑封面信息。
 */
export interface MusicAlbumCoverInfo {
    /**
      * 尺寸规格，取值有：
<li>Mini：150 x 150 尺寸；</li>
<li>Small：240 x 240 尺寸；</li>
<li>Medium：480 x 480 尺寸。</li>
      */
    Dimension: string;
    /**
      * 下载链接。
      */
    Url: string;
}
/**
 * CreateKTVRobot请求参数结构体
 */
export interface CreateKTVRobotRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * RTC厂商类型，取值有：
<li>TRTC</li>
      */
    RTCSystem: string;
    /**
      * 进房参数。
      */
    JoinRoomInput: JoinRoomInput;
    /**
      * 创建机器人时初始化参数。
      */
    SyncRobotCommands?: Array<SyncRobotCommand>;
}
/**
 * 联想词信息。
 */
export interface KTVSuggestionInfo {
    /**
      * 联想词。
      */
    Suggestion: string;
}
/**
 * SyncKTVRobotCommand请求参数结构体
 */
export interface SyncKTVRobotCommandRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 指令及指令参数数组。
      */
    SyncRobotCommands: Array<SyncRobotCommand>;
}
/**
 * DescribeKTVPlaylistDetail请求参数结构体
 */
export interface DescribeKTVPlaylistDetailRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 歌单 Id。
      */
    PlaylistId: string;
    /**
      * 滚动标记。
      */
    ScrollToken?: string;
    /**
      * 返回条数，默认：20，最大：50。
      */
    Limit?: number;
    /**
      * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightFilters?: Array<string>;
}
/**
 * CreateKTVRobot返回参数结构体
 */
export interface CreateKTVRobotResponse {
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVSuggestions请求参数结构体
 */
export interface DescribeKTVSuggestionsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 搜索词。
      */
    KeyWord: string;
}
/**
 * DescribeKTVMatchMusics请求参数结构体
 */
export interface DescribeKTVMatchMusicsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 匹配规则列表。
      */
    Rules: Array<KTVMatchRule>;
}
/**
 * DescribeKTVPlaylists返回参数结构体
 */
export interface DescribeKTVPlaylistsResponse {
    /**
      * 歌单基础信息。
      */
    PlaylistBaseInfoSet: Array<KTVPlaylistBaseInfo>;
    /**
      * 歌单总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVPlaylists请求参数结构体
 */
export interface DescribeKTVPlaylistsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 类型列表，取值有：
<li>OfficialRec：官方推荐；</li>
<li>Customize：自定义。</li>
默认值为 OfficialRec。
      */
    Types?: Array<string>;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Offset?: number;
    /**
      * 分页返回的记录条数，默认值：20，最大值：50。
      */
    Limit?: number;
}
/**
 * DescribeKTVPlaylistDetail返回参数结构体
 */
export interface DescribeKTVPlaylistDetailResponse {
    /**
      * 歌曲信息列表。
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 滚动标记，用于设置下次请求的 ScrollToken 参数。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设置销毁模式
 */
export interface SetDestroyModeCommandInput {
    /**
      * 销毁模式，取值有：
<li>Auto：房间没人时自动销毁</li>
<li>Expire：房间没人时过期自动销毁</li>
<li>Never：不自动销毁，需手动销毁</li>默认为：Auto。
      */
    DestroyMode: string;
    /**
      * 过期销毁时间，单位：秒，当DestroyMode取Expire时必填。
      */
    DestroyExpireTime?: number;
}
/**
 * 音频参数信息
 */
export interface SetAudioParamCommandInput {
    /**
      * 音频类型，取值有：
<li>Original：原唱</li>
<li>Accompaniment：伴奏</li>
      */
    Type?: string;
}
/**
 * 匹配歌曲信息。
 */
export interface KTVMatchMusic {
    /**
      * 匹配到的歌曲基础信息。
      */
    KTVMusicBaseInfo: KTVMusicBaseInfo;
    /**
      * 命中规则。
      */
    MatchRule: KTVMatchRule;
}
/**
 * TRTC推流进房信息
 */
export interface TRTCJoinRoomInput {
    /**
      * 签名。
      */
    Sign: string;
    /**
      * 房间号。
      */
    RoomId: string;
    /**
      * 推流应用ID。
      */
    SdkAppId: string;
    /**
      * 用户唯一标识。
      */
    UserId: string;
}
/**
 * DescribeKTVRobots返回参数结构体
 */
export interface DescribeKTVRobotsResponse {
    /**
      * 机器人总数。
      */
    TotalCount: number;
    /**
      * 机器人信息集合。
      */
    KTVRobotInfoSet: Array<KTVRobotInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签分组信息。
 */
export interface KTVTagGroupInfo {
    /**
      * 分组 Id。
      */
    GroupId: string;
    /**
      * 分组名。
      */
    Name: string;
    /**
      * 标签列表。
      */
    TagInfoSet: Array<KTVTagInfo>;
}
/**
 * BatchDescribeKTVMusicDetails请求参数结构体
 */
export interface BatchDescribeKTVMusicDetailsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 歌曲 Id 列表。
      */
    MusicIds: Array<string>;
}
/**
 * 歌曲详细信息。
 */
export interface KTVMusicDetailInfo {
    /**
      * 歌曲基础信息。
      */
    KTVMusicBaseInfo: KTVMusicBaseInfo;
    /**
      * 播放凭证。
      */
    PlayToken: string;
    /**
      * 歌词下载链接。
      */
    LyricsUrl: string;
    /**
      * 音高数据下载链接。
      */
    MidiUrl: string;
    /**
      * 副歌片段信息。
      */
    ChorusClipSet: Array<ChorusClip>;
    /**
      * 前奏间隔。
      */
    PreludeInterval: number;
    /**
      * 歌曲流派列表。
      */
    GenreSet: Array<string>;
    /**
      * 节拍信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BPMInfo: KTVBPMInfo;
}
/**
 * DescribeKTVMusicsByTag返回参数结构体
 */
export interface DescribeKTVMusicsByTagResponse {
    /**
      * 歌曲信息列表。
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 滚动标记，用于设置下次请求的 ScrollToken 参数。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签信息。
 */
export interface KTVTagInfo {
    /**
      * 标签 Id。
      */
    TagId: string;
    /**
      * 标签名称。
      */
    Name: string;
}
/**
 * 歌曲专辑信息。
 */
export interface MusicAlbumInfo {
    /**
      * 专辑名称。
      */
    Name: string;
    /**
      * 封面列表。
      */
    CoverInfoSet: Array<MusicAlbumCoverInfo>;
}
/**
 * 设置播放模式
 */
export interface SetPlayModeCommandInput {
    /**
      * 播放模式，取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
      */
    PlayMode: string;
}
/**
 * KTV 机器人初始化参数，在创建后自动完成相关初始化工作。
 */
export interface SyncRobotCommand {
    /**
      * 可同时传入多个指令，顺序执行。取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>SwitchPrevious：上一首</li>
<li>SwitchNext：下一首</li>
<li>SetPlayMode：设置播放模式</li>
<li>Seek：调整播放进度</li>
<li>SetPlaylist：歌单变更</li>
<li>SetAudioParam：音频参数变更</li>
<li>SendMessage：发送自定义消息</li>
<li>SetDestroyMode：设置销毁模式</li>
      */
    Command: string;
    /**
      * 播放参数。
      */
    PlayCommandInput?: PlayCommandInput;
    /**
      * 播放列表变更信息，当Command取SetPlaylist时，必填。
      */
    SetPlaylistCommandInput?: SetPlaylistCommandInput;
    /**
      * 播放进度，当Command取Seek时，必填。
      */
    SeekCommandInput?: SeekCommandInput;
    /**
      * 音频参数，当Command取SetAudioParam时，必填。
      */
    SetAudioParamCommandInput?: SetAudioParamCommandInput;
    /**
      * 自定义消息，当Command取SendMessage时，必填。
      */
    SendMessageCommandInput?: SendMessageCommandInput;
    /**
      * 播放模式，当Command取SetPlayMode时，必填。
      */
    SetPlayModeCommandInput?: SetPlayModeCommandInput;
    /**
      * 销毁模式，当Command取SetDestroyMode时，必填。
      */
    SetDestroyModeCommandInput?: SetDestroyModeCommandInput;
}
/**
 * SearchKTVMusics返回参数结构体
 */
export interface SearchKTVMusicsResponse {
    /**
      * 歌曲信息列表。
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 滚动标记，用于设置下次请求的 ScrollToken 参数。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机器人信息
 */
export interface KTVRobotInfo {
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
      */
    Status: string;
    /**
      * 播放列表。
      */
    Playlists: Array<string>;
    /**
      * 当前歌单索引位置。
      */
    CurIndex: number;
    /**
      * 播放进度，单位：毫秒。
      */
    Position: number;
    /**
      * 音频参数。
      */
    SetAudioParamInput: SetAudioParamCommandInput;
    /**
      * 进房信息。
      */
    JoinRoomInput: JoinRoomInput;
    /**
      * RTC厂商类型，取值有：
<li>TRTC</li>
      */
    RTCSystem: string;
    /**
      * 播放模式，PlayMode取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
      */
    SetPlayModeInput: SetPlayModeCommandInput;
}
/**
 * DescribeKTVMatchMusics返回参数结构体
 */
export interface DescribeKTVMatchMusicsResponse {
    /**
      * 匹配到的歌曲列表。
      */
    MatchMusicSet: Array<KTVMatchMusic>;
    /**
      * 未匹配的规则列表。
      */
    NotMatchRuleSet: Array<KTVMatchRule>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVTags返回参数结构体
 */
export interface DescribeKTVTagsResponse {
    /**
      * 标签分组列表。
      */
    TagGroupInfoSet: Array<KTVTagGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 副歌片段信息。
 */
export interface ChorusClip {
    /**
      * 开始时间，单位：毫秒。
      */
    StartTime: number;
    /**
      * 结束时间，单位：毫秒。
      */
    EndTime: number;
}
/**
 * 设置播放列表指令参数
 */
export interface SetPlaylistCommandInput {
    /**
      * 变更类型，取值有：
<li>Add：添加</li>
<li>Delete：删除</li>
<li>ClearList：清空歌曲列表</li>
<li>Move：移动歌曲</li>
      */
    Type: string;
    /**
      * 歌单索引位置，
当 Type 取 Add 时，-1表示添加在列表最后位置，大于-1表示要添加的位置；
当 Type 取 Delete 时，表示待删除歌曲的位置；
当 Type 取 Move 时，表示待调整歌曲的位置。
      */
    Index?: number;
    /**
      * 当 Type 取 Move 时，必填，表示移动歌曲的目标位置。
      */
    ChangedIndex?: number;
    /**
      * 歌曲 ID 列表，当 Type 取 Add 时，必填。
      */
    MusicIds?: Array<string>;
}
/**
 * SyncKTVRobotCommand返回参数结构体
 */
export interface SyncKTVRobotCommandResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchDescribeKTVMusicDetails返回参数结构体
 */
export interface BatchDescribeKTVMusicDetailsResponse {
    /**
      * 歌曲详细信息列表。
      */
    KTVMusicDetailInfoSet: Array<KTVMusicDetailInfo>;
    /**
      * 不存在歌曲Id列表。
      */
    NotExistMusicIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌曲匹配规则。
 */
export interface KTVMatchRule {
    /**
      * AME 曲库 Id。
      */
    AMEMusicId?: string;
    /**
      * 歌曲匹配信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicInfo?: KTVMatchRuleMusicInfo;
}
/**
 * 歌曲基础信息。
 */
export interface KTVMusicBaseInfo {
    /**
      * 歌曲Id。
      */
    MusicId: string;
    /**
      * 歌曲名称。
      */
    Name: string;
    /**
      * 歌手名称。
      */
    SingerSet: Array<string>;
    /**
      * 播放时长。
      */
    Duration: number;
    /**
      * 歌手图片链接。
      */
    SingerImageUrl: string;
    /**
      * 专辑信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumInfo: MusicAlbumInfo;
    /**
      * 权益列表，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightSet: Array<string>;
    /**
      * 推荐类型，取值有：
<li>Featured：精选；</li>
<li>Other：其他。</li>
      */
    RecommendType: string;
}
/**
 * DescribeKTVMusicsByTag请求参数结构体
 */
export interface DescribeKTVMusicsByTagRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 标签 Id。
      */
    TagId: string;
    /**
      * 滚动标记。
      */
    ScrollToken?: string;
    /**
      * 返回条数限制，默认 20，最大 50。
      */
    Limit?: number;
    /**
      * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightFilters?: Array<string>;
}
/**
 * SearchKTVMusics请求参数结构体
 */
export interface SearchKTVMusicsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 关键词。
      */
    KeyWord: string;
    /**
      * 滚动标记。
      */
    ScrollToken?: string;
    /**
      * 返回条数限制，默认 20，最大 50.
      */
    Limit?: number;
    /**
      * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightFilters?: Array<string>;
}
/**
 * 播放指令输入参数
 */
export interface PlayCommandInput {
    /**
      * 歌曲位置索引。
      */
    Index: number;
}
/**
 * 时间范围
 */
export interface TimeRange {
    /**
      * <li>大于等于此时间（起始时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
      */
    Before?: string;
    /**
      * <li>小于此时间（结束时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
      */
    After?: string;
}
/**
 * 歌单基础信息。
 */
export interface KTVPlaylistBaseInfo {
    /**
      * 歌单Id。
      */
    PlaylistId: string;
    /**
      * 歌单标题。
      */
    Title: string;
}
/**
 * 发送自定义信息指令参数
 */
export interface SendMessageCommandInput {
    /**
      * 自定义消息，json格式字符串。
      */
    Message: string;
    /**
      * 消息重复次数，默认为 1。
      */
    Repeat?: number;
}
/**
 * DestroyKTVRobot请求参数结构体
 */
export interface DestroyKTVRobotRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 机器人Id。
      */
    RobotId: string;
}
/**
 * DescribeKTVRobots请求参数结构体
 */
export interface DescribeKTVRobotsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 机器人Id列表。
      */
    RobotIds?: Array<string>;
    /**
      * 机器人状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
      */
    Statuses?: Array<string>;
    /**
      * 匹配创建时间在此时间段内的机器人。
<li>包含所指定的头尾时间点。</li>
      */
    CreateTime?: TimeRange;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Offset?: number;
    /**
      * 分页返回的起始偏移量，默认值：10。
      */
    Limit?: number;
}
/**
 * DescribeKTVTags请求参数结构体
 */
export interface DescribeKTVTagsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
}
/**
 * 调整播放进度指令参数
 */
export interface SeekCommandInput {
    /**
      * 播放位置，单位：毫秒。
      */
    Position: number;
}
