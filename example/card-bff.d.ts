declare namespace cardbff {
  export interface WorkQueryForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface WorkExperienceQueryForm {
    ticketId: string;
    cardId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface WorkExperienceForm {
    id?: string;
    comName?: string;
    comRole?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }
  export interface WorkDeleteForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardId?: string;
    idList?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface WeixinMiniappForm {
    scene?: string;
    path?: string;
    width?: number;
    autoColor?: boolean;
    lineColorR?: string;
    lineColorG?: string;
    lineColorB?: string;
    hyaline?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface VisitGroupRecordForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    eventType?:
      | 'VISIT_FROM_GROUP_LIST'
      | 'VISIT_FROM_SHARE_LINK'
      | 'VISIT_FROM_LAUNCH_APP'
      | 'VISIT_FROM_OTHER_GROUP'
      | 'VISIT_FROM_CREATE_SUCCESS'
      | 'VISIT_FROM_APP_NAV_BAR'
      | 'VISIT_FROM_SCAN_QRCODE'
      | 'OTHER';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface VisitAddForm {
    cardId: string;
    ticketId: string;
    ip?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface VerifyCardCollectForm {
    ticketId: string;
    cardId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface UserJoinCardGroupForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    groupId?: string;
    cardId?: string;
    inviteCardId?: string;
    joinType?: string;
    joinResourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UserJoinCardGroupCustomerForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    groupId?: string;
    cardId?: string;
    inviteCardId?: string;
    joinType?: string;
    joinResourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UploadPosterForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    posterImgList?: ImageInfoForm[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateTemplateRelForm {
    pageNum?: number;
    pageSize?: number;
    groupId: string;
    templateId?: number;
    templateRelId: number;
    content: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateTemplateMenuShowStyleForm {
    groupId?: string;
    ticketId?: string;
    menuRelId?: string;
    showStyle?: string;
    itemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface UpdateTemplateMenuForm {
    groupId: string;
    menuRelId: number;
    children: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface UpdateTagForm {
    pageNum?: number;
    pageSize?: number;
    tagId?: string;
    tagName?: string;
    groupId?: string;
    addCardIds?: string;
    deleteCardIds?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateRedundancyValueForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    valKey?: string;
    name?: string;
    content?: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface UpdateNavigationMenuInfoForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    parentItemRelId?: string;
    showItemRelIds?: string[];
    hideItemRelIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateModuleVisibilityForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    instanceModuleId?: string;
    show?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateModuleValForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    instanceModuleId?: string;
    moduleVals?: ModuleValRequest[];
    value?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateModuleShowStyleForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    instanceModuleId?: string;
    showStyle:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateModuleNameForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    name?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateMiniAppInitGroupModelForm {
    pageNum?: number;
    pageSize?: number;
    groupInitModel: 'COMMON_MODE' | 'MAIN_SUB_MODE';
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateMemberGroupQrcodeUrlForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    groupQrcodeUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateItemRelShowStyleForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    showStyle:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateItemRelRichTextIdForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    richTextId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateItemRelPageForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    pageUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateItemRelForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    itemName?: string;
    icon?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    showStyle?:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateGroupSwitchForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    perfectCard?: boolean;
    viewEachOther?: boolean;
    publishNotice?: boolean;
    enableAudit?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateGroupInfoForm {}
  export interface UpdateEnterGroupTimeForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    isQueryMemberCount?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateDynamicMenuForm {
    id: string;
    groupId?: string;
    appLevel?: boolean;
    ticketId?: string;
    firstMenu?: string[];
    secondMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface UpdateCompanyFormContent {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardId?: string;
    comName?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    comLongitude?: string;
    comLatitude?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    websiteUrl?: string;
    comLogo?: string;
    comProfile?: string;
    jobType?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateCompanyForm {
    pageNum?: number;
    pageSize?: number;
    companyInfo?: UpdateCompanyFormContent;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateCardTemplateInfoForm {
    pageNum?: number;
    pageSize?: number;
    cardId?: string;
    ticketId?: string;
    cardName?: string;
    userLogo?: string;
    cardUrl?: string;
    qrcodeUrl?: string;
    comName?: string;
    comRole?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comLongitude?: string;
    comLatitude?: string;
    comLogo?: string;
    sex?: number;
    motto?: string;
    cardTemplate?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateAuditSettingForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    enableAudit?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UpdateAppBottomModuleVisibilityForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    show?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface UnifiedOrderNoticeForm {
    pageNum?: number;
    pageSize?: number;
    productId?: string;
    buyAmount?: string;
    groupId?: string;
    notes?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface TransferGroupLordForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    destTicketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ToggleAppPluginForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    pluginCodes: string[];
    status: 'OPENED' | 'CLOSED';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface TicketCardForm {
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ThemePatternTemplate {
    categoryId?: string;
    themeId?: string[];
    subThemeTemplates?: ThemePatternTemplate[];
    customize?: boolean;
  }
  export interface TemplateMsgForm {
    formId?: string;
    mid?: string;
    toUserTicketId?: string;
    content?: string;
    path?: string;
    useFormId?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface TempItemRelBindForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface TaglibDescriptor {
    taglibLocation?: string;
    taglibURI?: string;
  }
  export interface SwitchViewOtherForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    unViewOther?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SwitchPublishNoticeForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    unPublishNotice?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SwitchAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    themeId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SwitchAppAllPatternForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    enableStatus: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SubThemeGroupAuditForm {
    pageNum?: number;
    pageSize?: number;
    auditIds?: string[];
    ticketId?: string;
    message?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SubmitAuditForm {
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface StringBuffer {}
  export interface StickSetForm {
    nid: string;
    groupId: string;
    cardId: string;
    stick?: boolean;
    appLevel?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SortEntry {
    field?: string;
    model?: 'DESC' | 'ASC';
  }
  export interface ShakeGroupRedPacketsForm {}
  export interface SetSelfIntroductionForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardId?: string;
    cardName?: string;
    userLogo?: string;
    wechatId?: string;
    motto?: string;
    homeProvince?: string;
    homeCity?: string;
    homeArea?: string;
    homeAddressDetail?: string;
    homeAddressCode?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SetGroupUnlimitedForm {
    appId?: string;
    groupUnlimited?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SetCustomerPositionForm {
    pageNum?: number;
    pageSize?: number;
    type?: string;
    ticketId?: string;
    groupId: string;
    customerCardId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SetAnnouncementForm {
    id: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SetAdminForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    adminTicketId?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SessionResponse {
    id?: string;
    userCode?: string;
    createTime?: string;
    lastRefreshTime?: string;
    expiredTime?: string;
    attributeMap?: object;
    maxInactiveInterval?: number;
  }
  export interface SessionCookieConfig {
    name?: string;
    path?: string;
    maxAge?: number;
    secure?: boolean;
    domain?: string;
    httpOnly?: boolean;
    comment?: string;
  }
  export interface Session {
    session?: ProxySession;
    request?: ProxyRequest;
  }
  export interface ServletResponse {
    bufferSize?: number;
    characterEncoding?: string;
    committed?: boolean;
    writer?: PrintWriter;
    contentType?: string;
    outputStream?: ServletOutputStream;
    locale?: Locale;
  }
  export interface ServletRequest {
    scheme?: string;
    inputStream?: ServletInputStream;
    protocol?: string;
    secure?: boolean;
    serverName?: string;
    serverPort?: number;
    reader?: BufferedReader;
    remoteAddr?: string;
    remoteHost?: string;
    locales?: EnumerationLocale;
    asyncSupported?: boolean;
    asyncContext?: AsyncContext;
    dispatcherType?: 'FORWARD' | 'INCLUDE' | 'REQUEST' | 'ASYNC' | 'ERROR';
    localAddr?: string;
    servletContext?: ServletContext;
    asyncStarted?: boolean;
    parameterNames?: EnumerationString;
    characterEncoding?: string;
    localName?: string;
    attributeNames?: EnumerationString;
    parameterMap?: object;
    remotePort?: number;
    contentLength?: number;
    contentLengthLong?: number;
    contentType?: string;
    localPort?: number;
    locale?: Locale;
  }
  export interface ServletRegistration {
    mappings?: string[];
    runAsRole?: string;
    name?: string;
    className?: string;
    initParameters?: object;
  }
  export interface ServletOutputStream {
    ready?: boolean;
  }
  export interface ServletInputStream {
    finished?: boolean;
    ready?: boolean;
  }
  export interface ServletContext {
    classLoader?: ClassLoader;
    contextPath?: string;
    majorVersion?: number;
    minorVersion?: number;
    attributeNames?: EnumerationString;
    effectiveMajorVersion?: number;
    effectiveMinorVersion?: number;
    servlets?: EnumerationServlet;
    servletNames?: EnumerationString;
    serverInfo?: string;
    initParameterNames?: EnumerationString;
    servletContextName?: string;
    servletRegistrations?: object;
    filterRegistrations?: object;
    sessionCookieConfig?: SessionCookieConfig;
    defaultSessionTrackingModes?: string[];
    effectiveSessionTrackingModes?: string[];
    jspConfigDescriptor?: JspConfigDescriptor;
    virtualServerName?: string;
  }
  export interface SearchCardForm {
    key?: string;
    corpName?: string;
    pageNum?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SearchAppUserComRoleForm {
    appId?: string;
    comName?: string;
    comRole?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SearchAppUserComNameForm {
    appId?: string;
    comName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SaveThumbUrlForm {
    thumbUrl?: string;
    archiveId?: string;
    optCId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SaveInvitationCardElementRequest {
    optUserCode?: string;
    optUserName?: string;
    appId?: string;
    openId?: string;
    templateElementId?: string;
    elementId?: string;
    value?: string;
  }
  export interface SaveDynamicThumbForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    thumbUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface SaveCardPicForm {
    cardId: string;
    url?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SaveAuthedMpPayConfigForm {
    cardAppId?: string;
    mchAppId?: string;
    mchId?: string;
    mchKey?: string;
    keyContentBase64?: string;
    keyContent?: string[];
    modifyFlag?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface SaveAlbumForm {
    pageNum?: number;
    pageSize?: number;
    cardId?: string;
    remark?: string;
    urlList?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ReviewGroupOptForm {
    pageNum?: number;
    pageSize?: number;
    recordIdList?: string[];
    optTicketId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ResolveSceneByIdForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ResetMainCatalogForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RenewalAlertForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemovePatternCatalogForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemoveGroupByCustomerForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemoveAuthorizedMembers {
    itemRelId?: string;
    groupId?: string;
    members?: string;
  }
  export interface RemoveAppTabRecycleForm {
    appId?: string;
    tabTmplId?: string;
    pageId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface RemarkPageQueryForm {
    pageNum?: number;
    pageSize?: number;
    destCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemarkModifyForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    content?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemarkDeleteForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RemarkAddForm {
    pageNum?: number;
    pageSize?: number;
    destCardId?: string;
    content?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RefreshAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    themeId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface RedPacketsCommonForm {
    groupId?: string;
    ticketId?: string;
    packetId?: string;
    force?: boolean;
    isQueryMemberCount?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ReceivePacketForm {}
  export interface QueryUserManagePageForm {
    pageNum?: number;
    pageSize?: number;
    searchKey?: string;
    appId?: string;
    comName?: string;
    comRole?: string;
    time?: string[];
    sort?: string;
    userTicketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryThemeMomentsForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    appLevel?: boolean;
    queryChannel?: string;
    secondMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryThemeModuleShowViewForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryThemeModuleAllViewForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryThemeItemForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryThemeBottomNavigationForm {
    pageNum?: number;
    pageSize?: number;
    sourceId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QuerySubThemeGroupAuditForm {
    pageNum?: number;
    pageSize?: number;
    subjectId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QuerySubjectGroupForm {
    pageNum?: number;
    pageSize?: number;
    companyName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QuerySingleRedundancyValueForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    valKey?: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface QueryShowSubItemRelsForm {
    pageNum?: number;
    pageSize?: number;
    parentItemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryShopInfoByConnectCodeForm {
    pageNum?: number;
    pageSize?: number;
    linkCode?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryReviewGroupForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryRecordByProductIdForm {
    pageNum?: number;
    pageSize?: number;
    productId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryQRCodeForm {
    pageNum?: number;
    pageSize?: number;
    qrCodeType?: string;
    sourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryProductDetailForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    productId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryPosterByIdForm {
    pageNum?: number;
    pageSize?: number;
    posterId: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryPayDetailByIdForm {
    pageNum?: number;
    pageSize?: number;
    paymentId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryPatternCatalogForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryPacketByIdForm {
    openId?: string;
    packetId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryOrderInfoForm {
    orderId?: string;
    done?: boolean;
    paid?: boolean;
    pageNum?: number;
    pageSize?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryNoticeForm {
    appId: string;
    groupId?: string;
    groupName?: string;
    userCardId?: string;
    cardName?: string;
    contentType?: string[];
    content?: string;
    time?: string[];
    noticeId?: string;
    userTicketId?: string;
    deleteFlags?: number[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryNoticeCommentForm {
    appId: string;
    userCardId?: string;
    cardName?: string;
    content?: string;
    time?: string[];
    noticeId?: string;
    groupId?: string;
    groupName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryNoticeByGroupIdForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    groupId?: string;
    appLevel?: boolean;
    cardId?: string;
    type?: string;
    myself?: string;
    highlights?: string;
    queryChannel?: string;
    contentType?: string;
    isAll?: string;
    firstMenu?: string;
    secondMenu?: string;
    txtModule?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryMyGroupsForm {
    pageNum?: number;
    pageSize?: number;
    groupName_like?: string;
    memberRole?: number[];
    sort?: string;
    queryAll?: boolean;
    querySubjectOnly?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryMyGroupInfoByGroupIdForm {
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryMultiTextThemeForm {
    pageNum?: number;
    pageSize?: number;
    multiTextId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryMpAuthUrlForm {
    orderId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryMpAuthStatusForm {
    authUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryMembersForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    sourceId?: string;
    cardName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryMemberForManageForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    letterList?: string[];
    cardName?: string;
    remarkName?: string;
    roleType?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryLeaderboardForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    startTime?: string;
    endTime?: string;
    shopSyncStatus?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryLatestRemarkForm {
    pageNum?: number;
    pageSize?: number;
    destCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryItemRelByIdForm {
    groupId: string;
    itemRelId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryItemDirectMomentsForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    appLevel?: boolean;
    queryChannel?: string;
    firstMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryInfoByNameForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    tagName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryIndustryMpListForm {
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryIconsForm {
    type?: string;
  }
  export interface QueryHotGroupForm {
    pageNum?: number;
    pageSize?: number;
    isSearchSuggest?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupThemeForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupTemplateMenuTabsForm {
    groupId: string;
    templateRelId: number;
    menuId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryGroupsInMyChargeForm {
    groupName_like?: string;
    memberRole?: number[];
    sort?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryGroupSalesForm {
    pageNum?: number;
    pageSize?: number;
    groupId: string;
    queryValue?: string;
    sort?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupPluginForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    groupId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMessageForm {
    ticketId?: string;
    groupId?: string;
    groupItem?: MyGroupsResponseBO;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryGroupMemberTagForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMemberForTagForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    tagId?: string;
    name?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMemberByValuesForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    queryValue?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMemberByTypeForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    letterList?: string[];
    cardName?: string;
    remarkName?: string;
    roleType?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMemberByTagForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    tagId?: string;
    name?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupMemberByCardForm {
    pageNum?: number;
    pageSize?: number;
    cardId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryGroupLordForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryFriendForm {
    pageNum?: number;
    pageSize?: number;
    friendCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryDirectInviteMembersForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    cardId?: string;
    startTime?: string;
    endTime?: string;
    shopSyncStatus?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryCompanyForm {
    keyWord?: string;
    page?: number;
    size?: number;
    token?: string;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
  }
  export interface QueryCardSaleByForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    groupId?: string;
    saleCode?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryCardMomentsForm {
    pageNum?: number;
    pageSize?: number;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryBlankConfigForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    code:
      | 'GROUP_LIST_BLANK'
      | 'GROUP_CREATE_PAGE_BLANK'
      | 'GROUP_CREATE_SUCCESS'
      | 'GROUP_CREATE_WAIT_AUDIT';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryBillForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    openId?: string;
    startTime?: string;
    endTime?: string;
    billType?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryBatchPageForm {
    pageNum?: number;
    pageSize?: number;
    batchId?: string;
    appId?: string;
    operatorId?: string;
    state?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAuthorizedMembersForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    sourceId?: string;
    cardName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAuthedMpListForm {
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryAuthedMpDetailForm {
    mpAppId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryArchiveDetailForm {
    appId: string;
    archiveId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryAppUsersForm {
    appId?: string;
    cardName?: string;
    cellphone?: string;
    comName?: string;
    comRole?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    name?: string;
    sourceId?: string;
    categoryId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAppTabBarForm {
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QueryAppPluginListForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAppMeThemeForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAppIsUnShowPatternForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAppBlankConfigListForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAllSubItemRelsForm {
    pageNum?: number;
    pageSize?: number;
    parentItemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryAlbumForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    currentTime?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QueryActivityForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface QrCodeForm {
    origin?: string;
    w?: number;
    h?: number;
    logo?: string;
    logoW?: number;
    logoH?: number;
    compress?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface QianmiQRCodeForm {
    scene?: string;
    path?: string;
    width?: number;
    autoColor?: boolean;
    lineColorR?: string;
    lineColorG?: string;
    lineColorB?: string;
    hyaline?: boolean;
    sourceId: string;
    contentType: string;
    content: string;
    sceneCode: string;
    sceneMessage?: string;
    note?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface PublishMpForm {
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface PublishActivityForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    detailsImgList?: ImageInfo[];
    groupId?: string;
    cardId?: string;
    ticketId?: string;
    name?: string;
    startUp?: string;
    deadline?: string;
    address?: string;
    intro?: string;
    minApplyNum?: number;
    maxApplyNum?: number;
    sponsor?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ProxySession {
    sessionResponse?: SessionResponse;
    applicationData?: object;
    sessionData?: object;
    servletContext?: ServletContext;
    lastAccessedTime?: number;
    id?: string;
    new?: boolean;
    maxInactiveInterval?: number;
    sessionContext?: HttpSessionContext;
    valueNames?: string[];
    attributeNames?: EnumerationString;
    creationTime?: number;
  }
  export interface ProxyRequest {
    request?: ServletRequest;
    requestedSessionId?: string;
    session?: HttpSession;
    method?: string;
    requestURI?: string;
    requestURL?: StringBuffer;
    servletPath?: string;
    contextPath?: string;
    queryString?: string;
    remoteUser?: string;
    authType?: string;
    parts?: Part[];
    requestedSessionIdValid?: boolean;
    pathInfo?: string;
    pathTranslated?: string;
    requestedSessionIdFromCookie?: boolean;
    requestedSessionIdFromURL?: boolean;
    requestedSessionIdFromUrl?: boolean;
    headerNames?: EnumerationString;
    cookies?: Cookie[];
    userPrincipal?: Principal;
    scheme?: string;
    inputStream?: ServletInputStream;
    protocol?: string;
    secure?: boolean;
    serverName?: string;
    serverPort?: number;
    reader?: BufferedReader;
    remoteAddr?: string;
    remoteHost?: string;
    locales?: EnumerationLocale;
    asyncSupported?: boolean;
    asyncContext?: AsyncContext;
    dispatcherType?: 'FORWARD' | 'INCLUDE' | 'REQUEST' | 'ASYNC' | 'ERROR';
    localAddr?: string;
    servletContext?: ServletContext;
    asyncStarted?: boolean;
    parameterNames?: EnumerationString;
    characterEncoding?: string;
    localName?: string;
    attributeNames?: EnumerationString;
    parameterMap?: object;
    remotePort?: number;
    contentLength?: number;
    contentLengthLong?: number;
    contentType?: string;
    localPort?: number;
    locale?: Locale;
  }
  export interface PrintWriter {}
  export interface Principal {
    name?: string;
  }
  export interface PhoneBookForm {
    batchNo?: string;
    contactList?: Contact[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface PerfectCardInfoForm {
    viewCardId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface PatternQueryForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface PatternCategoryQueryForm {
    pageNum?: number;
    pageSize?: number;
    categoryId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface Part {
    name?: string;
    size?: number;
    inputStream?: InputStream;
    submittedFileName?: string;
    headerNames?: string[];
    contentType?: string;
  }
  export interface OrderPatternCatalogForm {
    pageNum?: number;
    pageSize?: number;
    srcCategoryId: string;
    distCategoryId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface OrderCatalogPatternForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    srcThemeId: string;
    distThemeId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NoticeUpdateForm {
    id?: string;
    appLevel?: boolean;
    groupId?: string;
    ticketId?: string;
    cardId?: string;
    content?: string;
    type?: string;
    images?: string[];
    articleInfo?: string;
    articleFirstImage?: string;
    contentType?: string;
    fileIds?: string[];
    firstMenu?: string;
    secondMenu?: string;
    productIds?: string[];
    txtModule?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface NoticeQueryPageForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    appLevel?: boolean;
    cardId?: string;
    type?: string;
    myself?: boolean;
    highlights?: boolean;
    queryChannel?: string;
    contentType?: string;
    isAll?: boolean;
    firstMenu?: string;
    secondMenu?: string;
    txtModule?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NoticeGiveLikeQueryForm {
    pageNum?: number;
    pageSize?: number;
    noticeId?: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NoticeDeleteForm {
    id?: string;
    groupId?: string;
    cardId?: string;
    appLevel?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface NoticeBrowseQueryPageForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    noticeId?: string;
    appLevel?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NoticeAddForm {
    ticketId?: string;
    appLevel?: boolean;
    groupId?: string;
    content?: string;
    images?: string[];
    fileIds?: string[];
    thumbUrl?: string;
    articleInfo?: string;
    articleFirstImage?: string;
    cardId?: string;
    type?: string;
    contentType?: string;
    firstMenu?: string;
    secondMenu?: string;
    packetId?: string;
    packetStatus?: string;
    location?: string;
    longitude?: number;
    latitude?: number;
    enableShare?: boolean;
    publishGroupId?: string;
    productIds?: string[];
    txtModule?: boolean;
    richText?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface NegotiateMenusUpdateForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    title?: string;
    icon?: string;
    pagePath?: string;
    scope?: string;
    displayStatus?: boolean;
    versionNum?: string;
    richTextId?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    showStyle?:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    isHomePage?: boolean;
    pid?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusSortForm {
    selectedIds?: string[];
    groupId?: string;
    unSelectIds?: string[];
  }
  export interface NegotiateMenusSelectForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusOneQueryForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusListQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    scope?: string;
    versionNum?: string;
    appId?: string;
    pid?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusInitForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusDelForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusBindForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    richTextId?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NegotiateMenusAddForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    appId?: string;
    title?: string;
    pagePath?: string;
    icon?: string;
    scope?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    sort?: number;
    displayStatus?: boolean;
    versionNum?: string;
    richTextId?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    showStyle?:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    isHomePage?: boolean;
    pid?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface NavigationMenuInfoQueryForm {
    groupId?: string;
    navigationMenuId?: string;
    contentTypes?: string[];
    showType?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface NameAndUserLogoForm {
    nickName: string;
    userLogo: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface MyGroupsResponseBO {
    groupId?: string;
    groupName?: string;
    groupType?: string;
    groupLogo?: string;
    addTime?: string;
    memberCount?: string;
    categoryCode?: string;
    categoryName?: string;
    province?: string;
    city?: string;
    area?: string;
    addressCode?: string;
    address?: string;
    longitude?: string;
    latitude?: string;
    unreadMemberNum?: string;
    unreadNoticeNum?: string;
    roleType?: number;
    startTime?: string;
    endTime?: string;
    listPosition?: number;
    adminId?: string;
    contactPhone?: string;
    visitMode?: 'MEMBER_MODE' | 'VISITOR_MODE' | 'CARD_MODE';
    visitCount?: number;
    interestUserCount?: number;
    interestVisitorCount?: number;
    interestCount?: number;
  }
  export interface ModuleValRequest {
    optUserCode?: string;
    optUserName?: string;
    appId?: string;
    openId?: string;
    implModuleValId?: string;
    value?: string;
    show?: boolean;
  }
  export interface ModifyRedPacketsForm {
    groupId?: string;
    ticketId?: string;
    packetId?: string;
    description?: string;
    amount?: number;
    count?: number;
    duration?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyPosterQrcodeUrlForm {
    posterId: string;
    posterQrcodeUrl: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyPosterForm {
    ticketId?: string;
    posterId: string;
    name?: string;
    bgImage?: string;
    path?: string;
    thumbnail?: string;
    elements: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyPatternCatalogForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    categoryName: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ModifyMpHomeGroupForm {
    mpAppId?: string;
    homeGroupId?: string;
  }
  export interface ModifyMiniAppQrcodeShowForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    miniAppQrCode?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ModifyMiniAppGroupSearchForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    groupSearchEnable: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ModifyMainCatalogDescForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    appId: string;
    desc: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ModifyCardForm {
    userLogo?: string;
    nickName?: string;
    jobType?: string;
    comName?: string;
    comRole?: string;
    province?: string;
    city?: string;
    cellphone?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    themeId: string;
    appId: string;
    sourceId: string;
    name: string;
    cover: string;
    exampleImage: string;
    categoryIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ModifyAppTabShowHideForm {
    appId?: string;
    tabTmplId?: string;
    pageId?: string;
    display?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyAppTabItemRelForm {
    itemRelId?: string;
    richTextId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyAppTabItemForm {
    appId?: string;
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    tabTmplId?: string;
    paramValue?: string;
    pageId?: string;
    indexPage?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyAppTabBarForm {
    appId?: string;
    color?: string;
    selectedColor?: string;
    backgroundColor?: string;
    borderStyle?: string;
    position?: string;
    tabIdList?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ModifyAppBlankConfigListForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    blankConfigBusiCode:
      | 'GROUP_LIST_BLANK'
      | 'GROUP_CREATE_PAGE_BLANK'
      | 'GROUP_CREATE_SUCCESS'
      | 'GROUP_CREATE_WAIT_AUDIT';
    blankImgUrl?: string;
    blankTip?: string;
    showButton?: boolean;
    buttonText?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface MessageUnreadCountQueryForm {
    ticketId?: string;
    msgTypeList?: string;
    id?: string;
    cardId?: string;
    groupId?: string;
    noticeType?: string;
    commentType?: string;
    readStatus?: string;
    beginTime?: string;
    endTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface MessageNotificationQueryForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    cardId?: string;
    groupId?: string;
    msgType?: string;
    noticeType?: string;
    commentType?: string;
    readStatus?: string;
    beginTime?: string;
    endTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface MessageCommonForm {
    ticketId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface MemberQueryByComRoleForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    comRole?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface Locale {
    language?: string;
    script?: string;
    country?: string;
    variant?: string;
    extensionKeys?: string[];
    unicodeLocaleAttributes?: string[];
    unicodeLocaleKeys?: string[];
    iso3Language?: string;
    iso3Country?: string;
    displayLanguage?: string;
    displayScript?: string;
    displayCountry?: string;
    displayVariant?: string;
    displayName?: string;
  }
  export interface ListQueryByComRoleForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface LakalaMchTrialForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    merId?: string;
    termId?: string;
    bankAccount?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface JudgeMemberRoleForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface JudgeGroupLordForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface JspPropertyGroupDescriptor {
    buffer?: string;
    pageEncoding?: string;
    includePreludes?: string[];
    urlPatterns?: string[];
    includeCodas?: string[];
    isXml?: string;
    elIgnored?: string;
    trimDirectiveWhitespaces?: string;
    deferredSyntaxAllowedAsLiteral?: string;
    scriptingInvalid?: string;
    defaultContentType?: string;
    errorOnUndeclaredNamespace?: string;
  }
  export interface JspConfigDescriptor {
    jspPropertyGroups?: JspPropertyGroupDescriptor[];
    taglibs?: TaglibDescriptor[];
  }
  export interface JoinCardGroupForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    cardId?: string;
    inviteCardId?: string;
    joinType?: string;
    joinResourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface JoinCardGroupCustomerForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    cardId?: string;
    inviteCardId?: string;
    joinType?: string;
    joinResourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface InviteFriendForm {
    cellphoneList?: string[];
    inviteUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface InputStream {}
  export interface InitTabColumnsForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface InitGroupPageForm {}
  export interface ImageInfoForm {
    serialNum?: number;
    url?: string;
    desc?: string;
  }
  export interface ImageInfo {
    serialNum?: number;
    url?: string;
    desc?: string;
  }
  export interface HttpSessionContext {
    ids?: EnumerationString;
  }
  export interface HttpSession {
    id?: string;
    servletContext?: ServletContext;
    new?: boolean;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    sessionContext?: HttpSessionContext;
    valueNames?: string[];
    attributeNames?: EnumerationString;
    creationTime?: number;
  }
  export interface HighlightsSetForm {
    nid: string;
    cardId: string;
    highlights?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface HandCardForm {
    pageNum?: number;
    pageSize?: number;
    friendCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupTemplateCommonForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    parentItemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupSysProductForm {
    productId?: string;
    specId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GroupSwitchVisitModeForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    mode?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupSwitchInfoFrom {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    searched?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupQueryMyGroupsForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    appId: string;
    sort?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupMemberReviewForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupMemberQueryByComNameForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    comName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupMemberPageQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    letterList?: string[];
    cardName?: string;
    remarkName?: string;
    roleType?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupMemberFrom {
    groupId?: string;
    letters?: string;
    startTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GroupMemberCountQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupMemberCountAndNewQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupManageForm {
    appId?: string;
    groupName?: string;
    addTimeStart?: string;
    addTimeEnd?: string;
    creatorNameOrCellphone?: string;
    superNameOrCellphone?: string;
    state?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GroupListQueryByComNameForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupInfoFrom {
    cardId?: string;
    groupId?: string;
    ticketId?: string;
    groupName?: string;
    groupLogo?: string;
    groupType?: number;
    qrCodeUrl?: string;
    description?: string;
    creatorTicketId?: string;
    companyName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GroupForm {
    groupName_like?: string;
    appId?: string;
    pageNum?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GroupCustomerQueryForm {
    pageNum?: number;
    pageSize?: number;
    groupId: string;
    queryValue?: string;
    tagIds?: string[];
    teamCardId?: string;
    sort?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupCommonForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    groupId?: string;
    cardId?: string;
    inviteCardId?: string;
    joinType?: string;
    joinResourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GroupBuyForm {
    appId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GetTemplateByIdForm {
    templateId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GetStoreInfoByAdminIdForm {
    pageNum?: number;
    pageSize?: number;
    adminId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GetJoinActivityStatusForm {
    pageNum?: number;
    pageSize?: number;
    cardId?: string;
    activityId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GetInfoByIdForm {
    pageNum?: number;
    pageSize?: number;
    tagId?: string;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GetConnectCodeForm {
    pageNum?: number;
    pageSize?: number;
    adminId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GetCardInfoForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GetCardInfoByCellphoneForm {
    pageNum?: number;
    pageSize?: number;
    cellphone?: string;
    sourceId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface GenQrCodeForm {
    archiveId?: string;
    optCId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GenPurchaseOrderForm {
    productId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface GenPrePayInfoForm {
    payType?: string;
    orderId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface FriendOperateForm {
    friendId?: string;
    friendName?: string;
    cellphone?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface FormIdForm {
    formId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface FilterRegistration {
    servletNameMappings?: string[];
    urlPatternMappings?: string[];
    name?: string;
    className?: string;
    initParameters?: object;
  }
  export interface FastRegisterForm {
    pageNum?: number;
    pageSize?: number;
    cardName?: string;
    cellphone?: string;
    createCardResource?: string;
    cardResourceGroup?: string;
    parentCardId?: string;
    resourceId?: string;
    userLogo?: string;
    cardType?: 'DEFAULT_AUTO' | 'PERSONAL' | 'VIRTUAL';
    comName?: string;
    comRole?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    comLongitude?: string;
    comLatitude?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    websiteUrl?: string;
    comLogo?: string;
    comProfile?: string;
    jobType?: string;
    homeProvince?: string;
    homeCity?: string;
    homeArea?: string;
    homeAddressDetail?: string;
    homeAddressCode?: string;
    sex?: number;
    motto?: string;
    cardTemplate?: string;
    cardUrl?: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface FastEditBizCardForm {
    cardName: string;
    cellphone: string;
    userLogo?: string;
    comName?: string;
    comRole?: string;
    motto?: string;
    cardTemplate?: string;
    cardUrl?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    createCardResource?: string;
    cardResourceGroup?: string;
    parentCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ExportBillForm {
    pageNum?: number;
    pageSize?: number;
    startTime?: string;
    endTime?: string;
    billType?: string;
    email?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface EnumerationString {}
  export interface EnumerationServlet {}
  export interface EnumerationLocale {}
  export interface Enumeration {}
  export interface EditPermissionForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    groupId?: string;
    permissionType:
      | 'NOTICE_PUBLISH_PUBLIC'
      | 'NOTICE_PUBLISH_ADMIN'
      | 'NOTICE_PUBLISH_CUSTOMIZE'
      | 'NOTICE_PUBLISH_LORD'
      | 'NOTICE_PUBLISH_ONLY_ME'
      | 'NOTICE_VIEW_PUBLIC'
      | 'NOTICE_VIEW_ADMIN'
      | 'NOTICE_VIEW_CUSTOMIZE'
      | 'NOTICE_VIEW_LORD'
      | 'NOTICE_VIEW_ONLY_ME';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface EditBizCardForm {
    opType?: string;
    cardId?: string;
    cardName: string;
    cellphone: string;
    userLogo?: string;
    cardUrl?: string;
    qrcodeUrl?: string;
    createCardResource?: string;
    cardResourceGroup?: string;
    parentCardId?: string;
    resourceId?: string;
    comName?: string;
    comRole?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    comLongitude?: string;
    comLatitude?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    websiteUrl?: string;
    comLogo?: string;
    comProfile?: string;
    jobType?: string;
    homeProvince?: string;
    homeCity?: string;
    homeArea?: string;
    homeAddressDetail?: string;
    homeAddressCode?: string;
    sex?: number;
    motto?: string;
    cardTemplate?: string;
    experienceList?: WorkExperienceForm[];
    workExperienceIdList?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DynamicDetailQueryForm {
    id: string;
    groupId: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DisbandmentGroupForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    isQueryMemberCount?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DelFollowRecordsForm {
    pageNum?: number;
    pageSize?: number;
    id?: number;
    groupId?: string;
    ticketId?: string;
    customerCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteTagForm {
    pageNum?: number;
    pageSize?: number;
    tagId?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteSubItemRelForm {
    groupId?: string;
    ticketId?: string;
    parentItemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DeleteRedundancyValueForm {
    pageNum?: number;
    pageSize?: number;
    valKey: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface DeleteRedPacketsForm {
    groupId?: string;
    ticketId?: string;
    packetId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DeletePosterForm {
    posterId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DeleteMemberForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteItemRelForm {
    pageNum?: number;
    pageSize?: number;
    itemRelId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteGroupCustomerForm {
    pageNum?: number;
    pageSize?: number;
    groupId: string;
    ticketId: string;
    ownTicketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteFriendCardForm {
    pageNum?: number;
    pageSize?: number;
    friendCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface DeleteCommentForm {
    cid: string;
    groupId: string;
    optCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface DeleteAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    themeId: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CustomerCommonForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    customerCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CreateQRCodeForm {
    pageNum?: number;
    pageSize?: number;
    qrCodeType?: string;
    sourceId?: string;
    groupId?: string;
    contentType?: string;
    scene?: string;
    pageUrl?: string;
    shortScene?: boolean;
    temporary?: boolean;
    replaceLogo?: string;
    note?: string;
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CreateOrUpdateGroupForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    groupName?: string;
    groupLogo?: string;
    description?: string;
    categoryCode?: string;
    categoryName?: string;
    province?: string;
    city?: string;
    area?: string;
    addressCode?: string;
    address?: string;
    enableAudit?: boolean;
    perfectCard?: boolean;
    startTime?: string;
    endTime?: string;
    paymentId?: string;
    openId?: string;
    groupTemplateId?: string;
    type?: string;
    showDescription?: boolean;
    contactPhone?: string;
    companyName?: string;
    longitude?: string;
    latitude?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CreateCommunityOrderForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CreateButtonSaveConfigForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    createGroupItemName?: string;
    createGroupItemVisible?: boolean;
    createMiniAppItemName?: string;
    createMiniAppItemVisible?: boolean;
    scanItemVisible?: boolean;
    systemName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CreateBatchForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    logoType?: string;
    logoUrl?: string;
    count?: string;
    qrcodeDomain?: string;
    operatorId?: string;
    operatorName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface Cookie {
    name?: string;
    value?: string;
    version?: number;
    comment?: string;
    domain?: string;
    maxAge?: number;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }
  export interface Contact {
    name?: string;
    cellPhone?: string;
    organizationName?: string;
    jobTitle?: string;
    departmentName?: string;
    homeAddress?: string;
    companyAddress?: string;
    birthday?: string;
    relationName?: string;
    relationPhone?: string;
    note?: string;
    optUserCode?: string;
    optUserName?: string;
  }
  export interface CompanyCardsForm {
    corpName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface CommentQueryForm {
    pageNum?: number;
    pageSize?: number;
    nid: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CollectTicketForm {
    friendTicketId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface CollectCardForm {
    collectCardId: string;
    cardResource: string;
    resourceGroup?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ClassLoader {
    parent?: ClassLoader;
  }
  export interface CardUserTableForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CardTabColumnsTipsForm {
    pageNum?: number;
    pageSize?: number;
    tips: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface CardTabColumnsShowForm {
    pageNum?: number;
    pageSize?: number;
    show: boolean;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface CardTabColumnsOptionalForm {
    pageNum?: number;
    pageSize?: number;
    optional: boolean;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface CardTabColumnsNameForm {
    pageNum?: number;
    pageSize?: number;
    name: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface CardTabColumnsForm {
    pageNum?: number;
    pageSize?: number;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface CardSearchForm {
    keywords?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface CardAddForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardName?: string;
    cellphone?: string;
    createCardResource?: string;
    cardResourceGroup?: string;
    parentCardId?: string;
    resourceId?: string;
    userLogo?: string;
    cardType?: 'DEFAULT_AUTO' | 'PERSONAL' | 'VIRTUAL';
    comName?: string;
    comRole?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    comLongitude?: string;
    comLatitude?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    websiteUrl?: string;
    comLogo?: string;
    comProfile?: string;
    jobType?: string;
    homeProvince?: string;
    homeCity?: string;
    homeArea?: string;
    homeAddressDetail?: string;
    homeAddressCode?: string;
    sex?: number;
    motto?: string;
    cardTemplate?: string;
    cardUrl?: string;
    qrcodeUrl?: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface CancelBindShopForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface BufferedReader {}
  export interface BrowseCustomerCardForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    customerCardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface BindShopForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    shopId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface BindGroupForm {
    pageNum?: number;
    pageSize?: number;
    saleCode?: string;
    groupId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface BatModifyAppBlankButtonShowStatusForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    blankConfigBusiCodes?: string[];
    showButton?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface BatMarkReadedByConditionForm {
    id?: string;
    cardId?: string;
    groupId?: string;
    msgType?: string;
    noticeType?: string;
    commentType?: string;
    beginTime?: string;
    endTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface BatAddSubMenuForm {
    templateId?: string;
    parentId?: string;
    groupId?: string;
    ticketId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface BatAddSubItemRelsForm {
    groupId: string;
    parentId?: string;
    templateRelId?: string;
    contentType: string;
    itemLevel?: number;
    itemType?: string;
    richTextId?: string;
    templateId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface BasicForm {
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface BaseForm {
    pageNum?: number;
    pageSize?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AsyncContext {
    response?: ServletResponse;
    timeout?: number;
    request?: ServletRequest;
  }
  export interface ArchiveUpdateForm {
    pageNum?: number;
    pageSize?: number;
    archiveId?: string;
    headline?: string;
    intro?: string;
    logoUrl?: string;
    optCId?: string;
    content?: string;
    htmlContent?: string;
    author?: string;
    duration?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ArchiveRenameForm {
    pageNum?: number;
    pageSize?: number;
    archiveId?: string;
    headline?: string;
    cardId?: string;
    author?: string;
    logoUrl?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ArchiveQueryForm {
    pageNum?: number;
    pageSize?: number;
    q?: string;
    source?: string;
    cardId?: string;
    type?: string;
    archiveId?: string;
    fileFmt?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ArchiveDetailQueryForm {
    cardId?: string;
    archiveId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ArchiveDelForm {
    archiveId?: string;
    optCId?: string;
    type?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ArchiveDeleteForm {
    pageNum?: number;
    pageSize?: number;
    archiveId?: string;
    cardId?: string;
    type?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ArchiveCommonForm {
    pageNum?: number;
    pageSize?: number;
    archiveId?: string;
    optCId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface ArchiveCollectForm {
    sourceArchiveId?: string;
    type?: string;
    archiveId?: string;
    optCId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ArchiveBrowseForm {
    archiveId?: string;
    optCId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface ArchiveAddForm {
    headline?: string;
    logoUrl?: string;
    cardId?: string;
    ticketId?: string;
    htmlContent?: string;
    content?: string;
    source?: string;
    platform?: string;
    fileUrl?: string;
    fileFmt?: string;
    fileSize?: string;
    unit?: string;
    author?: string;
    duration?: string;
    width?: string;
    height?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AppInfoFrom {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    ticketId?: string;
    desc?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AppForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AppAdjustModuleValForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    showItemRelIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AdjustThemeItemRelsForm {
    pageNum?: number;
    pageSize?: number;
    parentItemRelId?: string;
    showItemRelIds?: string[];
    moreItemRelIds?: string[];
    hideItemRelIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AdjustModuleValForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    instanceModuleId?: string;
    showItemRelIds?: string[];
    moreItemRelIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddWorkForm {
    pageNum?: number;
    pageSize?: number;
    id?: string;
    cardId?: string;
    ticketId?: string;
    comName?: string;
    comRole?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddThemeSubGroupForm {
    pageNum?: number;
    pageSize?: number;
    subjectId?: string;
    ticketId?: string;
    template?: ThemePatternTemplate;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddThemeGroupForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    groupName?: string;
    groupLogo?: string;
    description?: string;
    categoryCode?: string;
    categoryName?: string;
    province?: string;
    city?: string;
    area?: string;
    addressCode?: string;
    address?: string;
    enableAudit?: boolean;
    perfectCard?: boolean;
    startTime?: string;
    endTime?: string;
    paymentId?: string;
    openId?: string;
    groupTemplateId?: string;
    type?: string;
    showDescription?: boolean;
    contactPhone?: string;
    companyName?: string;
    longitude?: string;
    latitude?: string;
    template?: ThemePatternTemplate;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddTemplateMenuForm {
    pageNum?: number;
    pageSize?: number;
    menuId: string;
    templateRelId: number;
    groupId: string;
    children: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddTagToCardForm {
    groupId?: string;
    cardId?: string;
    tags?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddTagForm {
    pageNum?: number;
    pageSize?: number;
    tagName?: string;
    groupId?: string;
    addCardIds?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddSubItemRelForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    parentId?: string;
    itemName?: string;
    description?: string;
    icon?: string;
    itemType: 'MENU' | 'TAB' | 'NAVIGATION' | 'NOT_FOUND';
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    showStyle?:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddSubCatalogsForm {
    pageNum?: number;
    pageSize?: number;
    categoryId: string;
    appId: string;
    subCategoryIds: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddRichTextMomentsForm {
    appLevel?: boolean;
    groupId?: string;
    content?: string;
    images?: string[];
    fileIds?: string[];
    thumbUrl?: string;
    articleInfo?: string;
    articleFirstImage?: string;
    cardId?: string;
    type?: string;
    contentType?: string;
    publishGroupId?: string;
    productIds?: string[];
    txtModule?: boolean;
    richText?: boolean;
    highlights?: boolean;
    firstMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddRemarkNameForm {
    pageNum?: number;
    pageSize?: number;
    groupId: string;
    ticketId: string;
    customerCardId: string;
    remarkName?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddRedundancyValueForm {
    pageNum?: number;
    pageSize?: number;
    appId?: string;
    name?: string;
    content?: string;
    icolId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
    iColId?: string;
  }
  export interface AddRedPacketsForm {
    groupId?: string;
    ticketId?: string;
    description?: string;
    amount?: number;
    count?: number;
    duration?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddPosterRecordForm {
    pageNum?: number;
    pageSize?: number;
    visitorId?: string;
    posterId?: string;
    type?: string;
    newPosterId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddPosterForm {
    ticketId?: string;
    templateId: string;
    name?: string;
    bgImage?: string;
    path?: string;
    thumbnail?: string;
    elements: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddPatternCatalogForm {
    pageNum?: number;
    pageSize?: number;
    categoryName: string;
    appId: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddNoticeProductForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    productName?: string;
    description?: string;
    amount?: number;
    unitPrice?: number;
    salesRecordPermission?: 'PRIVATE' | 'PROTECTED' | 'PUBLIC';
    startTime?: string;
    endTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddNoticeBrowseFrom {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    noticeId?: string;
    readType?: string;
    appLevel?: boolean;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddMomentsForm {
    appLevel?: boolean;
    groupId?: string;
    content?: string;
    images?: string[];
    fileIds?: string[];
    thumbUrl?: string;
    articleInfo?: string;
    articleFirstImage?: string;
    cardId?: string;
    type?: string;
    contentType?: string;
    publishGroupId?: string;
    productIds?: string[];
    txtModule?: boolean;
    richText?: boolean;
    highlights?: boolean;
    secondMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddModuleItemRelForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    instanceModuleId?: string;
    itemName?: string;
    description?: string;
    icon?: string;
    itemType: 'MENU' | 'TAB' | 'NAVIGATION' | 'NOT_FOUND';
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    showStyle?:
      | 'BBS'
      | 'news'
      | 'WATERFALL'
      | 'ICONS'
      | 'TABLE'
      | 'CARD_BASED'
      | 'CARD_BASED_ICONS';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddItemRelForm {
    templateId?: string;
    parentId?: string;
    groupId?: string;
    itemName?: string;
    description?: string;
    icon?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    enablePublish?: boolean;
    systemDefault?: boolean;
    systemDefaultShow?: boolean;
    editStatus?: boolean;
    richTextId?: string;
    itemMarkCode?: string;
    showSerialNo?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddItemDirectMomentsForm {
    appLevel?: boolean;
    groupId?: string;
    content?: string;
    images?: string[];
    fileIds?: string[];
    thumbUrl?: string;
    articleInfo?: string;
    articleFirstImage?: string;
    cardId?: string;
    type?: string;
    contentType?: string;
    publishGroupId?: string;
    productIds?: string[];
    txtModule?: boolean;
    richText?: boolean;
    highlights?: boolean;
    firstMenu?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddInvitationCardForm {
    posterId?: string;
    groupId: string;
    name?: string;
    bgImage?: string;
    path?: string;
    thumbnail?: string;
    elements: SaveInvitationCardElementRequest[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddFollowRecordsForm {
    pageNum?: number;
    pageSize?: number;
    groupId?: string;
    ticketId?: string;
    customerCardId?: string;
    content?: string;
    reminderTime?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddCommentForm {
    nid: string;
    cardId?: string;
    content: string;
    toCId?: string;
    type?: number;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddCardVirtualForm {
    pageNum?: number;
    pageSize?: number;
    ticketId?: string;
    cardName?: string;
    cellphone?: string;
    createCardResource?: string;
    cardResourceGroup?: string;
    parentCardId?: string;
    resourceId?: string;
    userLogo?: string;
    cardType?: 'DEFAULT_AUTO' | 'PERSONAL' | 'VIRTUAL';
    comName?: string;
    comRole?: string;
    comProvince?: string;
    comCity?: string;
    comArea?: string;
    comStreet?: string;
    comAddressDetail?: string;
    comAddressCode?: string;
    comLongitude?: string;
    comLatitude?: string;
    telephone?: string;
    fax?: string;
    email?: string;
    websiteUrl?: string;
    comLogo?: string;
    comProfile?: string;
    jobType?: string;
    homeProvince?: string;
    homeCity?: string;
    homeArea?: string;
    homeAddressDetail?: string;
    homeAddressCode?: string;
    sex?: number;
    motto?: string;
    cardTemplate?: string;
    cardUrl?: string;
    cardId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddCardByTypeForm {}
  export interface AddAuthorizedMembers {
    itemRelId?: string;
    groupId?: string;
    members?: string[];
  }
  export interface AddArticleMomentsForm {
    appLevel?: boolean;
    groupId?: string;
    content?: string;
    images?: string[];
    fileIds?: string[];
    thumbUrl?: string;
    articleInfo?: string;
    articleFirstImage?: string;
    cardId?: string;
    type?: string;
    contentType?: string;
    publishGroupId?: string;
    productIds?: string[];
    txtModule?: boolean;
    richText?: boolean;
    highlights?: boolean;
    instanceModuleId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddAppThemePatternForm {
    pageNum?: number;
    pageSize?: number;
    appId: string;
    sourceId: string;
    name: string;
    cover: string;
    exampleImage: string;
    categoryIds?: string[];
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AddAppTabItemForm {
    appId?: string;
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    tabTmplId?: string;
    paramValue?: string;
    pageId?: string;
    indexPage?: boolean;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    richTextId?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }
  export interface AddAppBottomMenuForm {
    pageNum?: number;
    pageSize?: number;
    instanceModuleId?: string;
    itemName?: string;
    description?: string;
    icon?: string;
    contentType?:
      | 'CARD_NEWS'
      | 'ME'
      | 'RESOURCE'
      | 'REFINEMENT'
      | 'ALL'
      | 'GROUP_LIST_SCAN'
      | 'GROUP_LIST_FOLLOW'
      | 'GROUP_LIST_MANAGE'
      | 'RICH_TEXT'
      | 'LIST'
      | 'NOTICE'
      | 'INVITE'
      | 'NAVIGATION'
      | 'GROUP'
      | 'PHOTOS'
      | 'MULTI_TEXT'
      | 'GROUP_HOME'
      | 'MY_GROUP_LIST'
      | 'MY_FAVORITES'
      | 'MY_CARD'
      | 'MINIAPP_LINK'
      | 'CARD_PAGE'
      | 'CARD_MOMENTS'
      | 'CARD_FILE'
      | 'CARD_SCAN'
      | 'CARD_MESSAGE'
      | 'CARD_WALLET'
      | 'CARD_VISITOR'
      | 'CREATE_GROUP'
      | 'CARD_COMPANY'
      | 'CARD_PHOTOS'
      | 'CARD_OPUS'
      | 'CARD_ACHIEVEMENT';
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    page?: number;
  }
  export interface AcceptInvitationForm {
    friendCellphone?: string;
    size?: number;
    sortString?: string;
    loadAll?: boolean;
    sortEntries?: SortEntry[];
    pageNo?: number;
    pageSize?: number;
    page?: number;
  }

  /**
   * 根据社区id动态查询图片内容
   * @param body
   * @return successful operation
   */
  export function apiAlbum(body: QueryAlbumForm): object {
    return;
  }

  /**
   * 新增
   * @param body
   * @return successful operation
   */
  export function apiArchiveAdd(body: ArchiveAddForm): object {
    return;
  }

  /**
   * 浏览文档
   * @param body
   * @return successful operation
   */
  export function apiArchiveBrowse(body: ArchiveBrowseForm): object {
    return;
  }

  /**
   * 保存（收藏）文档
   * @param body
   * @return successful operation
   */
  export function apiArchiveCollect(body: ArchiveCollectForm): object {
    return;
  }

  /**
   * 删除文档
   * @param body
   * @return successful operation
   */
  export function apiArchiveDelArchive(body: ArchiveDelForm): object {
    return;
  }

  /**
   * 删除
   * @param body
   * @return successful operation
   */
  export function apiArchiveDelete(body: ArchiveDeleteForm): object {
    return;
  }

  /**
   * 下载
   * @param body
   * @return successful operation
   */
  export function apiArchiveDownload(body: ArchiveCommonForm): object {
    return;
  }

  /**
   * 获取葵花码
   * @param body
   * @return successful operation
   */
  export function apiArchiveGenQrCode(body: GenQrCodeForm): object {
    return;
  }

  /**
   * 获取详情
   * @param body
   * @return successful operation
   */
  export function apiArchiveGetDetail(body: ArchiveDetailQueryForm): object {
    return;
  }

  /**
   * 查询档案
   * @param body
   * @return successful operation
   */
  export function apiArchiveQuery(body: ArchiveQueryForm): object {
    return;
  }

  /**
   * 重命名
   * @param body
   * @return successful operation
   */
  export function apiArchiveRename(body: ArchiveRenameForm): object {
    return;
  }

  /**
   * 保存缩略图
   * @param body
   * @return successful operation
   */
  export function apiArchiveSaveThumbUrl(body: SaveThumbUrlForm): object {
    return;
  }

  /**
   * 修改
   * @param body
   * @return successful operation
   */
  export function apiArchiveUpdate(body: ArchiveUpdateForm): object {
    return;
  }

  /**
   * apiCallbackPayLklPaynotify
   * @param body
   * @return successful operation
   */
  export function apiCallbackPayLklPaynotify(body: string): object {
    return;
  }

  /**
   * apiCallbackPayWxpayPaynotify
   * @param body
   * @return successful operation
   */
  export function apiCallbackPayWxpayPaynotify(body: string): object {
    return;
  }

  /**
   * apiCallbackWeixinPayResultNotify
   * @param body
   * @return successful operation
   */
  export function apiCallbackWeixinPayResultNotify(body: string): object {
    return;
  }

  /**
   * 创建名片|海报相关接口
   * @param body
   * @return successful operation
   */
  export function apiCardAdd(body: CardAddForm): object {
    return;
  }

  /**
   * 指定type类型创建名片|小程序中未调用此接口
   * @param body
   * @return successful operation
   */
  export function apiCardAddCardByType(body: AddCardByTypeForm): object {
    return;
  }

  /**
   * 新增或编辑卡片信息(虚拟ticketId)
   * @param body
   * @return successful operation
   */
  export function apiCardAddCardVirtual(body: AddCardVirtualForm): object {
    return;
  }

  /**
   * 更新公司信息
   * @param body
   * @return successful operation
   */
  export function apiCardCompany(body: UpdateCompanyForm): object {
    return;
  }

  /**
   * 删除名片好友
   * @param body
   * @return successful operation
   */
  export function apiCardDeleteFriendCard(body: DeleteFriendCardForm): object {
    return;
  }

  /**
   * 海报快速注册|未调试
   * @param body
   * @return successful operation
   */
  export function apiCardFastRegister(body: FastRegisterForm): object {
    return;
  }

  /**
   * 通过手机号获取名片信息
   * @param body
   * @return successful operation
   */
  export function apiCardFindByCellphone(
    body: GetCardInfoByCellphoneForm
  ): object {
    return;
  }

  /**
   * 获取自我介绍
   * @param body
   * @return successful operation
   */
  export function apiCardGetCardInfo(body: GetCardInfoForm): object {
    return;
  }

  /**
   * 获取帮助数据
   * @return successful operation
   */
  export function apiCardGetHelpData(): object {
    return;
  }

  /**
   * 获取座右铭列表
   * @return successful operation
   */
  export function apiCardGetMottoList(): object {
    return;
  }

  /**
   * 通过ticketId获取名片详情
   * @param body
   * @return successful operation
   */
  export function apiCardGetWhiteCardInfo(body: GetCardInfoForm): object {
    return;
  }

  /**
   * 更新群设置
   * @param body
   * @return successful operation
   */
  export function apiCardGroudAuditSetting(
    body: UpdateAuditSettingForm
  ): object {
    return;
  }

  /**
   * 子官网创建
   * @param body
   * @return successful operation
   */
  export function apiCardGroupAddSubThemeGroup(
    body: AddThemeSubGroupForm
  ): object {
    return;
  }

  /**
   * 通过模板创建群组
   * @param body
   * @return successful operation
   */
  export function apiCardGroupAddThemeGroup(body: AddThemeGroupForm): object {
    return;
  }

  /**
   * 获取群地址的经纬度
   * @param body
   * @return successful operation
   */
  export function apiCardGroupAddressToGeo(body: GroupCommonForm): object {
    return;
  }

  /**
   * 查询小程序首页的社区详情
   * @param appId
   * @return successful operation
   */
  export function apiCardGroupAppIndexGroupDetail(appId: string): object {
    return;
  }

  /**
   * 群关联店铺
   * @param body
   * @return successful operation
   */
  export function apiCardGroupBindShop(body: BindShopForm): object {
    return;
  }

  /**
   * 解除关联店铺
   * @param body
   * @return successful operation
   */
  export function apiCardGroupCancelBindShop(body: CancelBindShopForm): object {
    return;
  }

  /**
   * 查询群分类
   * @return successful operation
   */
  export function apiCardGroupCategory(): object {
    return;
  }

  /**
   * 统计待审核数量
   * @return successful operation
   */
  export function apiCardGroupCountApplyNumByTicketId(): object {
    return;
  }

  /**
   * 当前登陆用户加入客户管理
   * @param body
   * @return successful operation
   */
  export function apiCardGroupCustomerAdd(
    body: JoinCardGroupCustomerForm
  ): object {
    return;
  }

  /**
   * 把某用户加入社区客户管理
   * @param body
   * @return successful operation
   */
  export function apiCardGroupCustomerAddUser(
    body: UserJoinCardGroupCustomerForm
  ): object {
    return;
  }

  /**
   * 查询群详情
   * @param body
   * @return successful operation
   */
  export function apiCardGroupDetail(body: GroupCommonForm): object {
    return;
  }

  /**
   * 查询申请入群结果
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetApplyResult(body: GroupCommonForm): object {
    return;
  }

  /**
   * 获取关联码
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetConnectCode(body: GetConnectCodeForm): object {
    return;
  }

  /**
   * 根据创建的表单格式查询店铺信息
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetFormatGroupInfo(body: GroupQueryForm): object {
    return;
  }

  /**
   * 通过店铺Id获取合伙人信息
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetPartnerInfo(body: GetConnectCodeForm): object {
    return;
  }

  /**
   * 通过关联码获取关联店铺信息
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetShopInfo(
    body: QueryShopInfoByConnectCodeForm
  ): object {
    return;
  }

  /**
   * 通过AdminId获取店铺信息
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGetStoreInfoByAdminId(
    body: GetStoreInfoByAdminIdForm
  ): object {
    return;
  }

  /**
   * 更新群信息|小程序中未调用此接口
   * @param body
   * @return successful operation
   */
  export function apiCardGroupGroupInfo(body: UpdateGroupInfoForm): object {
    return;
  }

  /**
   * 群列表页面初始化
   * @param body
   * @return successful operation
   */
  export function apiCardGroupInitGroupPage(body: InitGroupPageForm): object {
    return;
  }

  /**
   * 当前登陆用户加入名片群
   * @param body
   * @return successful operation
   */
  export function apiCardGroupMemberAdd(body: JoinCardGroupForm): object {
    return;
  }

  /**
   * 把某用户加入群组
   * @param body
   * @return successful operation
   */
  export function apiCardGroupMemberAddUser(
    body: UserJoinCardGroupForm
  ): object {
    return;
  }

  /**
   * 更新查看群成员列表时间
   * @param body
   * @return successful operation
   */
  export function apiCardGroupMemberTime(body: GroupCommonForm): object {
    return;
  }

  /**
   * 创建群或更新群
   * @param body
   * @return successful operation
   */
  export function apiCardGroupNew(body: CreateOrUpdateGroupForm): object {
    return;
  }

  /**
   * 更新查看群公告时间
   * @param body
   * @return successful operation
   */
  export function apiCardGroupNoticeTime(body: GroupCommonForm): object {
    return;
  }

  /**
   * 查询热门群
   * @param body
   * @return successful operation
   */
  export function apiCardGroupQueryHotGroup(body: QueryHotGroupForm): object {
    return;
  }

  /**
   * 查询群列表
   * @param body
   * @return successful operation
   */
  export function apiCardGroupQueryMyGroups(body: QueryMyGroupsForm): object {
    return;
  }

  /**
   * 查询群列表
   * @param body
   * @return successful operation
   */
  export function apiCardGroupQueryMyGroupsV2(body: QueryMyGroupsForm): object {
    return;
  }

  /**
   * 查询店铺创建状态
   * @param body
   * @return successful operation
   */
  export function apiCardGroupQueryThemeGroupState(
    body: GroupQueryForm
  ): object {
    return;
  }

  /**
   * 社区续费提醒
   * @param body
   * @return successful operation
   */
  export function apiCardGroupRenewalAlert(body: RenewalAlertForm): object {
    return;
  }

  /**
   * 解析个人群码
   * @param body
   * @return successful operation
   */
  export function apiCardGroupResolveSceneById(
    body: ResolveSceneByIdForm
  ): object {
    return;
  }

  /**
   * 修改关注模式
   * @param body
   * @return successful operation
   */
  export function apiCardGroupSwitchMode(
    body: GroupSwitchVisitModeForm
  ): object {
    return;
  }

  /**
   * 保存个人群码
   * @param body
   * @return successful operation
   */
  export function apiCardGroupUpdateMemberGroupQrcodeUrl(
    body: UpdateMemberGroupQrcodeUrlForm
  ): object {
    return;
  }

  /**
   * 递名片
   * @param body
   * @return successful operation
   */
  export function apiCardHandCard(body: HandCardForm): object {
    return;
  }

  /**
   * 查询名片好友
   * @param body
   * @return successful operation
   */
  export function apiCardQueryFriend(body: QueryFriendForm): object {
    return;
  }

  /**
   * 添加备注
   * @param body
   * @return successful operation
   */
  export function apiCardRemarkAdd(body: RemarkAddForm): object {
    return;
  }

  /**
   * 删除备注
   * @param body
   * @return successful operation
   */
  export function apiCardRemarkDelete(body: RemarkDeleteForm): object {
    return;
  }

  /**
   * 修改备注
   * @param body
   * @return successful operation
   */
  export function apiCardRemarkModify(body: RemarkModifyForm): object {
    return;
  }

  /**
   * 分页查询备注信息
   * @param body
   * @return successful operation
   */
  export function apiCardRemarkQuery(body: RemarkPageQueryForm): object {
    return;
  }

  /**
   * 查询最近一次备注信息
   * @param body
   * @return successful operation
   */
  export function apiCardRemarkQueryLatestRemark(
    body: QueryLatestRemarkForm
  ): object {
    return;
  }

  /**
   * 保存相册
   * @param body
   * @return successful operation
   */
  export function apiCardSaveAlbum(body: SaveAlbumForm): object {
    return;
  }

  /**
   * 设置自我介绍
   * @param body
   * @return successful operation
   */
  export function apiCardSetSelfIntroduction(
    body: SetSelfIntroductionForm
  ): object {
    return;
  }

  /**
   * 更新编辑名片模板信息
   * @param body
   * @return successful operation
   */
  export function apiCardUpdateCardTemplateInfo(
    body: UpdateCardTemplateInfoForm
  ): object {
    return;
  }

  /**
   * 码牌绑定社区
   * @param body
   * @return successful operation
   */
  export function apiCardsaleBindGroup(body: BindGroupForm): object {
    return;
  }

  /**
   * 创建码牌批次
   * @param body
   * @return successful operation
   */
  export function apiCardsaleCreateBatch(body: CreateBatchForm): object {
    return;
  }

  /**
   * 查询是否拥有生成码牌批次权限
   * @param body
   * @return successful operation
   */
  export function apiCardsaleQueryBatchAdmin(body: QueryBatchPageForm): object {
    return;
  }

  /**
   * 分页查询码牌批次
   * @param body
   * @return successful operation
   */
  export function apiCardsaleQueryBatchPage(body: QueryBatchPageForm): object {
    return;
  }

  /**
   * 根据社区id查询码牌信息
   * @param body
   * @return successful operation
   */
  export function apiCardsaleQueryByGroupId(body: QueryCardSaleByForm): object {
    return;
  }

  /**
   * 根据社区id查询码牌信息
   * @param body
   * @return successful operation
   */
  export function apiCardsaleQueryDetail(body: QueryCardSaleByForm): object {
    return;
  }

  /**
   * apiCardsaleSendCode
   * @param mobile
   * @param body
   * @return successful operation
   */
  export function apiCardsaleSendCode(mobile: string, body: Session): object {
    return;
  }

  /**
   * 新增评论
   * @param body
   * @return successful operation
   */
  export function apiCommentAdd(body: AddCommentForm): object {
    return;
  }

  /**
   * 删除评论
   * @param body
   * @return successful operation
   */
  export function apiCommentDel(body: DeleteCommentForm): object {
    return;
  }

  /**
   * 查询某个动态的全部评论
   * @param body
   * @return successful operation
   */
  export function apiCommentQuery(body: CommentQueryForm): object {
    return;
  }

  /**
   * 查询某个动态的最新五条
   * @param body
   * @return successful operation
   */
  export function apiCommentQueryNew(body: CommentQueryForm): object {
    return;
  }

  /**
   * 新增APP底部导航
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuAddAppModuleItemRel(
    body: AddAppBottomMenuForm
  ): object {
    return;
  }

  /**
   * 修改组件的内容
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuAdjustModuleVal(
    body: AppAdjustModuleValForm
  ): object {
    return;
  }

  /**
   * 删除Item
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuDeleteItemRel(
    body: DeleteItemRelForm
  ): object {
    return;
  }

  /**
   *  查询Item详情
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuGetItemRelById(
    body: QueryThemeItemForm
  ): object {
    return;
  }

  /**
   * 查询app底部导航
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuQuery(body: AppForm): object {
    return;
  }

  /**
   * 查询app底部导航
   * @return successful operation
   */
  export function apiConfigAppBottomMenuQueryBottomList(): object {
    return;
  }

  /**
   * 查询小程序创建按钮的配置
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuQueryConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询组件中的所有的内容
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuQueryThemeModuleAllView(
    body: QueryThemeModuleAllViewForm
  ): object {
    return;
  }

  /**
   * 保存小程序创建按钮的配置
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuSaveConfig(
    body: CreateButtonSaveConfigForm
  ): object {
    return;
  }

  /**
   * 修改app级别底部菜单内容
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuUpdateItemRel(
    body: UpdateItemRelForm
  ): object {
    return;
  }

  /**
   * 修改Item绑定的页面路由
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuUpdateItemRelPage(
    body: UpdateItemRelPageForm
  ): object {
    return;
  }

  /**
   * 修改Item绑定的内容信息
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuUpdateItemRelRichTextId(
    body: UpdateItemRelRichTextIdForm
  ): object {
    return;
  }

  /**
   * 修改组件属性是否展示
   * @param body
   * @return successful operation
   */
  export function apiConfigAppBottomMenuUpdateModuleVisibility(
    body: UpdateAppBottomModuleVisibilityForm
  ): object {
    return;
  }

  /**
   * 新增冗余内容
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabAddRedundancyValue(
    body: AddRedundancyValueForm
  ): object {
    return;
  }

  /**
   * 刪除冗余内容
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabDeleteRedundancyValue(
    body: DeleteRedundancyValueForm
  ): object {
    return;
  }

  /**
   * 下移
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabDownColumn(body: CardTabColumnsForm): object {
    return;
  }

  /**
   * 初始化模板实例对象
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabInitTabColumns(
    body: InitTabColumnsForm
  ): object {
    return;
  }

  /**
   * 查询显示的表单列信息
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabQueryAllTabColumns(
    body: CardUserTableForm
  ): object {
    return;
  }

  /**
   * 查询冗余内容
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabQueryRedundancyValue(
    body: QuerySingleRedundancyValueForm
  ): object {
    return;
  }

  /**
   * 查询显示的表单列信息
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabQueryShowTabColumns(
    body: CardUserTableForm
  ): object {
    return;
  }

  /**
   * 上移
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpColumn(body: CardTabColumnsForm): object {
    return;
  }

  /**
   * 修改表单列名称
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpdateColumnName(
    body: CardTabColumnsNameForm
  ): object {
    return;
  }

  /**
   * 是否显示
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpdateColumnVisibility(
    body: CardTabColumnsShowForm
  ): object {
    return;
  }

  /**
   * 是否必填
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpdateOptional(
    body: CardTabColumnsOptionalForm
  ): object {
    return;
  }

  /**
   * 修改冗余内容
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpdateRedundancyValue(
    body: UpdateRedundancyValueForm
  ): object {
    return;
  }

  /**
   * 修改提示文案
   * @param body
   * @return successful operation
   */
  export function apiConfigCardTabUpdateTips(
    body: CardTabColumnsTipsForm
  ): object {
    return;
  }

  /**
   * 批量修改小程序空页面配置是否显示按钮信息
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigBatModifyMiniAppBlankShowButtonStatus(
    body: BatModifyAppBlankButtonShowStatusForm
  ): object {
    return;
  }

  /**
   * 批量修改小程序空页面配置是否显示按钮信息
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigBatModifyMiniAppBlankShowButtonStatus(
    body: BatModifyAppBlankButtonShowStatusForm
  ): object {
    return;
  }

  /**
   * 修改小程序的空页面配置信息
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigModifyMiniAppBlankConfig(
    body: ModifyAppBlankConfigListForm
  ): object {
    return;
  }

  /**
   * 修改小程序的空页面配置信息
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigModifyMiniAppBlankConfig(
    body: ModifyAppBlankConfigListForm
  ): object {
    return;
  }

  /**
   * 查询空页面配置文案信息
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigQuery(
    body: QueryBlankConfigForm
  ): object {
    return;
  }

  /**
   * 查询小程序的空页面配置列表
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigQueryMiniAppBlankConfigList(
    body: QueryAppBlankConfigListForm
  ): object {
    return;
  }

  /**
   * 查询小程序的空页面配置列表
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppBlankConfigQueryMiniAppBlankConfigList(
    body: QueryAppBlankConfigListForm
  ): object {
    return;
  }

  /**
   * 查询群组列表页主题模块配置
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppGroupTabsModuleView(body: AppForm): object {
    return;
  }

  /**
   * 修改小程序是否允许全局搜索开关
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppModifyMiniAppGroupSearch(
    body: ModifyMiniAppGroupSearchForm
  ): object {
    return;
  }

  /**
   * 修改小程序是否允许全局搜索开关
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppModifyMiniAppGroupSearch(
    body: ModifyMiniAppGroupSearchForm
  ): object {
    return;
  }

  /**
   * 修改小程序码展现形式
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppModifyMiniAppQrCodeShow(
    body: ModifyMiniAppQrcodeShowForm
  ): object {
    return;
  }

  /**
   * 修改小程序码展现形式
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppModifyMiniAppQrCodeShow(
    body: ModifyMiniAppQrcodeShowForm
  ): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询小程序的插件列表，包含开启的和关闭的
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryMiniAppPluginList(
    body: QueryAppPluginListForm
  ): object {
    return;
  }

  /**
   * 查询小程序的插件列表，包含开启的和关闭的
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryMiniAppPluginList(
    body: QueryAppPluginListForm
  ): object {
    return;
  }

  /**
   * 查询小程序 开启的插件列表
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryOpenedPlugins(
    body: AppForm
  ): object {
    return;
  }

  /**
   * 查询小程序 开启的插件列表
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginQueryOpenedPluginsByGroup(
    body: QueryGroupPluginForm
  ): object {
    return;
  }

  /**
   * 开关小程序插件
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginToggleMiniAppPlugin(
    body: ToggleAppPluginForm
  ): object {
    return;
  }

  /**
   * 开关小程序插件
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppPluginToggleMiniAppPlugin(
    body: ToggleAppPluginForm
  ): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 修改小程序初始社区模型
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppUpdateMiniAppInitGroupModel(
    body: UpdateMiniAppInitGroupModelForm
  ): object {
    return;
  }

  /**
   * 修改小程序初始社区模型
   * @param body
   * @return successful operation
   */
  export function apiConfigMiniAppUpdateMiniAppInitGroupModel(
    body: UpdateMiniAppInitGroupModelForm
  ): object {
    return;
  }

  /**
   * 保存导航菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationAdd(body: NegotiateMenusAddForm): object {
    return;
  }

  /**
   * 菜单绑定富文本或社区
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationBind(
    body: NegotiateMenusBindForm
  ): object {
    return;
  }

  /**
   * 二级导航菜单关联item绑定内容ID
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationBindRelContent(
    body: TempItemRelBindForm
  ): object {
    return;
  }

  /**
   * 删除导航菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationDelete(
    body: NegotiateMenusDelForm
  ): object {
    return;
  }

  /**
   * 初始化底部导航菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationInitMenus(
    body: NegotiateMenusInitForm
  ): object {
    return;
  }

  /**
   * 查询导航菜单列表
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationQueryList(
    body: NegotiateMenusListQueryForm
  ): object {
    return;
  }

  /**
   * 查询单一菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationQueryOne(
    body: NegotiateMenusOneQueryForm
  ): object {
    return;
  }

  /**
   * 查询下级导航菜单列表
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationQuerySubMenus(
    body: NegotiateMenusListQueryForm
  ): object {
    return;
  }

  /**
   * 菜单排序
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationSort(
    body: NegotiateMenusSortForm
  ): object {
    return;
  }

  /**
   * 切换菜单选择状态
   * @return successful operation
   */
  export function apiConfigNavigationSwitchForApp(): object {
    return;
  }

  /**
   * 切换菜单选择状态
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationSwitchSelect(
    body: NegotiateMenusSelectForm
  ): object {
    return;
  }

  /**
   * 状态查询
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationSwitchStatus(body: AppInfoFrom): object {
    return;
  }

  /**
   * 更新菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigNavigationUpdate(
    body: NegotiateMenusUpdateForm
  ): object {
    return;
  }

  /**
   * 组件中新增 Item
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeAddModuleItemRel(
    body: AddModuleItemRelForm
  ): object {
    return;
  }

  /**
   *  新增Item
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeAddSubItemRel(body: AddSubItemRelForm): object {
    return;
  }

  /**
   * 组件中的内容排序
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeAdjustModuleVal(
    body: AdjustModuleValForm
  ): object {
    return;
  }

  /**
   * 调整下级菜单/Tab顺序
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeAdjustSubItemRel(
    body: AdjustThemeItemRelsForm
  ): object {
    return;
  }

  /**
   * 删除Item
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeDeleteItemRel(body: DeleteItemRelForm): object {
    return;
  }

  /**
   *  查询Item详情
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeGetItemRelById(
    body: QueryThemeItemForm
  ): object {
    return;
  }

  /**
   * 查询所有的下级菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryAllSubItemRels(
    body: QueryAllSubItemRelsForm
  ): object {
    return;
  }

  /**
   * 查询[我的]页面主题
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryAppMeTheme(
    body: QueryAppMeThemeForm
  ): object {
    return;
  }

  /**
   * 我的动态主题查询
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryCardMoments(
    body: QueryCardMomentsForm
  ): object {
    return;
  }

  /**
   * 查询社区主题实例中的背景图
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryGroupBackGround(
    body: QueryGroupThemeForm
  ): object {
    return;
  }

  /**
   * 查询社区主题
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryGroupTheme(
    body: QueryGroupThemeForm
  ): object {
    return;
  }

  /**
   * 多图文主题查询
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryMultiextTheme(
    body: QueryMultiTextThemeForm
  ): object {
    return;
  }

  /**
   * 查询显示的下级菜单
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryShowSubItemRels(
    body: QueryShowSubItemRelsForm
  ): object {
    return;
  }

  /**
   * 根据社区查询底部导航
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryThemeBottomNavigation(
    body: QueryThemeBottomNavigationForm
  ): object {
    return;
  }

  /**
   * 查询组件中的所有的内容
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryThemeModuleAllView(
    body: QueryThemeModuleAllViewForm
  ): object {
    return;
  }

  /**
   * 查询组件中的展示的内容
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeQueryThemeModuleShowView(
    body: QueryThemeModuleShowViewForm
  ): object {
    return;
  }

  /**
   * 修改Item信息
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateItemRel(body: UpdateItemRelForm): object {
    return;
  }

  /**
   * 修改Item绑定的内容信息
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateItemRelRichTextId(
    body: UpdateItemRelRichTextIdForm
  ): object {
    return;
  }

  /**
   * 修改Item展示样式
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateItemRelShowStyle(
    body: UpdateItemRelShowStyleForm
  ): object {
    return;
  }

  /**
   * 修改组件名称
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateModuleName(
    body: UpdateModuleNameForm
  ): object {
    return;
  }

  /**
   * 修改组件展示样式
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateModuleShowStyle(
    body: UpdateModuleShowStyleForm
  ): object {
    return;
  }

  /**
   * 修改组件的内容
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateModuleVal(
    body: UpdateModuleValForm
  ): object {
    return;
  }

  /**
   * 修改组件属性是否展示
   * @param body
   * @return successful operation
   */
  export function apiConfigThemeUpdateModuleVisibility(
    body: UpdateModuleVisibilityForm
  ): object {
    return;
  }

  /**
   * 审核通过
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppPassSubThemeGroupAudit(
    body: SubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 查询分类
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQueryShowCategory(
    body: PatternQueryForm
  ): object {
    return;
  }

  /**
   * 主子官网查询(新官网创建页面使用)
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQueryShowCategoryWithPattern(
    body: PatternQueryForm
  ): object {
    return;
  }

  /**
   * 查询分类下的模板
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQueryShowPatternByCategory(
    body: PatternCategoryQueryForm
  ): object {
    return;
  }

  /**
   * 已提交子官网审核的列表
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubThemeGroupAuditCard(
    body: QuerySubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 已提交子官网审核的列表
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubThemeGroupAuditCard(
    body: QuerySubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 需要审核的主官网信息
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubThemeGroupAuditGroup(
    body: QuerySubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 需要审核的主官网信息
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubThemeGroupAuditGroup(
    body: QuerySubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 主官网数量查询(检验主官网是否已创建)
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubjectCount(
    body: QuerySubjectGroupForm
  ): object {
    return;
  }

  /**
   * 主官网数量查询(检验主官网是否已创建)
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubjectCount(
    body: QuerySubjectGroupForm
  ): object {
    return;
  }

  /**
   * 主官网列表查询
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppQuerySubjectGroup(
    body: QuerySubjectGroupForm
  ): object {
    return;
  }

  /**
   * 审核拒绝
   * @param body
   * @return successful operation
   */
  export function apiConfigThemePatternAppRejectSubThemeGroupAudit(
    body: SubThemeGroupAuditForm
  ): object {
    return;
  }

  /**
   * 添加备注
   * @param body
   * @return successful operation
   */
  export function apiCustomerAddRemarkName(body: AddRemarkNameForm): object {
    return;
  }

  /**
   * 客户详情
   * @param body
   * @return successful operation
   */
  export function apiCustomerBrowseCustomerCard(
    body: BrowseCustomerCardForm
  ): object {
    return;
  }

  /**
   * 删除客户
   * @param body
   * @return successful operation
   */
  export function apiCustomerDeleteGroupCustomer(
    body: DeleteGroupCustomerForm
  ): object {
    return;
  }

  /**
   * 查询客户详情
   * @param body
   * @return successful operation
   */
  export function apiCustomerQueryCustomerById(
    body: CustomerCommonForm
  ): object {
    return;
  }

  /**
   * 读取动态中未读消息
   * @param body
   * @return successful operation
   */
  export function apiCustomerReadNoticeMessage(
    body: CustomerCommonForm
  ): object {
    return;
  }

  /**
   * 查看动态
   * @param body
   * @return successful operation
   */
  export function apiGroupActivity(body: QueryActivityForm): object {
    return;
  }

  /**
   * 发布动态
   * @param body
   * @return successful operation
   */
  export function apiGroupActivity(body: PublishActivityForm): object {
    return;
  }

  /**
   * 申请参加活动的结果查询
   * @param body
   * @return successful operation
   */
  export function apiGroupActivityJoinedStatus(
    body: GetJoinActivityStatusForm
  ): object {
    return;
  }

  /**
   * 申请参加活动
   * @param body
   * @return successful operation
   */
  export function apiGroupActivityJoinedStatus(
    body: GetJoinActivityStatusForm
  ): object {
    return;
  }

  /**
   * 查看动态
   * @param body
   * @return successful operation
   */
  export function apiGroupActivityInfo(body: QueryActivityForm): object {
    return;
  }

  /**
   * 查看动态
   * @param body
   * @return successful operation
   */
  export function apiGroupActivityInfo(body: QueryActivityForm): object {
    return;
  }

  /**
   * 增加商品（我要收款)
   * @param body
   * @return successful operation
   */
  export function apiGroupAddNoticeProduct(body: AddNoticeProductForm): object {
    return;
  }

  /**
   * 审核同意入群
   * @param body
   * @return successful operation
   */
  export function apiGroupAgree(body: ReviewGroupOptForm): object {
    return;
  }

  /**
   * 取消管理员
   * @param body
   * @return successful operation
   */
  export function apiGroupCancelAdmin(body: SetAdminForm): object {
    return;
  }

  /**
   * 取消群置顶
   * @param body
   * @return successful operation
   */
  export function apiGroupCancelTopGroup(body: GroupCommonForm): object {
    return;
  }

  /**
   * 企查查接口
   * @param body
   * @return successful operation
   */
  export function apiGroupCompanyQcc(body: QueryCompanyForm): object {
    return;
  }

  /**
   * 企查查接口
   * @param body
   * @return successful operation
   */
  export function apiGroupCompanyQuery(body: QueryCompanyForm): object {
    return;
  }

  /**
   * 创建系统订单
   * @param body
   * @return successful operation
   */
  export function apiGroupCreateSysOrder(body: GroupSysProductForm): object {
    return;
  }

  /**
   * 新增客户跟进记录
   * @param body
   * @return successful operation
   */
  export function apiGroupCustomerAddFollowRecords(
    body: AddFollowRecordsForm
  ): object {
    return;
  }

  /**
   * 删除客户跟进记录
   * @param body
   * @return successful operation
   */
  export function apiGroupCustomerDelFollowRecords(
    body: DelFollowRecordsForm
  ): object {
    return;
  }

  /**
   * 置顶或取消置顶客户位置
   * @param body
   * @return successful operation
   */
  export function apiGroupCustomerPosition(
    body: SetCustomerPositionForm
  ): object {
    return;
  }

  /**
   * 查询客户跟进记录列表
   * @param body
   * @return successful operation
   */
  export function apiGroupCustomerQueryFollowRecords(
    body: CustomerCommonForm
  ): object {
    return;
  }

  /**
   * 查询客户信息
   * @param body
   * @return successful operation
   */
  export function apiGroupCustomers(body: GroupCustomerQueryForm): object {
    return;
  }

  /**
   * 删除审核
   * @param body
   * @return successful operation
   */
  export function apiGroupDelete(body: ReviewGroupOptForm): object {
    return;
  }

  /**
   * 社区解散
   * @param body
   * @return successful operation
   */
  export function apiGroupDisbandmentGroup(body: DisbandmentGroupForm): object {
    return;
  }

  /**
   * 群缩略图保存
   * @param body
   * @return successful operation
   */
  export function apiGroupDynamicThumb(body: SaveDynamicThumbForm): object {
    return;
  }

  /**
   * 导出账单
   * @param body
   * @return successful operation
   */
  export function apiGroupExportBill(body: ExportBillForm): object {
    return;
  }

  /**
   * 查询创建店铺的系统商品信息
   * @param body
   * @return successful operation
   */
  export function apiGroupGetGroupPriceInfo(body: GroupBuyForm): object {
    return;
  }

  /**
   * 是否群主
   * @param body
   * @return successful operation
   */
  export function apiGroupIsGroupLord(body: JudgeGroupLordForm): object {
    return;
  }

  /**
   * 未授权时根据openId判断是否关注群组
   * @param body
   * @return successful operation
   */
  export function apiGroupIsOpenIdMarkInterestGroup(
    body: GroupCommonForm
  ): object {
    return;
  }

  /**
   * 拉卡拉商户免费使用至12.12
   * @param body
   * @return successful operation
   */
  export function apiGroupLakalaMchTrial(body: LakalaMchTrialForm): object {
    return;
  }

  /**
   * 查询群组成员数量
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberCountGroupMember(
    body: GroupMemberCountQueryForm
  ): object {
    return;
  }

  /**
   * 查询群组成员数量和新加入的群组成员数量
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberCountGroupMemberAndNew(
    body: GroupMemberCountAndNewQueryForm
  ): object {
    return;
  }

  /**
   * 群主移除成员
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberDeleteMember(body: DeleteMemberForm): object {
    return;
  }

  /**
   * 群组成员 -- 按公司分类 -- 公司列表
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberListByComName(
    body: GroupListQueryByComNameForm
  ): object {
    return;
  }

  /**
   * 群组成员 -- 按职务分类 -- 职务列表
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberListByComRole(
    body: ListQueryByComRoleForm
  ): object {
    return;
  }

  /**
   * 拉取客户管理中的群成员列表
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberQueryForManage(
    body: QueryMemberForManageForm
  ): object {
    return;
  }

  /**
   * 群组成员 -- 按公司搜索
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberSearchByComName(
    body: GroupMemberQueryByComNameForm
  ): object {
    return;
  }

  /**
   * 群组成员 -- 按职务搜索
   * @param body
   * @return successful operation
   */
  export function apiGroupMemberSearchByComRole(
    body: MemberQueryByComRoleForm
  ): object {
    return;
  }

  /**
   *  查询导航菜单信息
   * @param body
   * @return successful operation
   */
  export function apiGroupNavigationMenuInfo(
    body: NavigationMenuInfoQueryForm
  ): object {
    return;
  }

  /**
   * 更新导航菜单信息
   * @param body
   * @return successful operation
   */
  export function apiGroupNavigationMenuInfo(
    body: UpdateNavigationMenuInfoForm
  ): object {
    return;
  }

  /**
   * 查询账单
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryBill(body: QueryBillForm): object {
    return;
  }

  /**
   * 排行榜邀请列表数据查询
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryDirectInviteMembers(
    body: QueryDirectInviteMembersForm
  ): object {
    return;
  }

  /**
   * 查询群主
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryGroupLord(body: QueryGroupLordForm): object {
    return;
  }

  /**
   * 判断某个人是否在群内,及他在群内的角色
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryGroupMember(body: JudgeMemberRoleForm): object {
    return;
  }

  /**
   * 查询个人群信息
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryGroupMemberByCard(
    body: QueryGroupMemberByCardForm
  ): object {
    return;
  }

  /**
   * 查询标签下群成员信息
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryGroupMemberByTag(
    body: QueryGroupMemberByTagForm
  ): object {
    return;
  }

  /**
   * 根据标签查询所有群成员信息
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryGroupMemberForTag(
    body: QueryGroupMemberForTagForm
  ): object {
    return;
  }

  /**
   * 排行榜数据查询
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryLeaderboard(body: QueryLeaderboardForm): object {
    return;
  }

  /**
   * 排行榜邀请列表数据查询
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryMemberLeaderboard(
    body: QueryLeaderboardForm
  ): object {
    return;
  }

  /**
   * 查询群成员下标签详情
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryMemberTags(
    body: QueryGroupMemberTagForm
  ): object {
    return;
  }

  /**
   * 查询专属小程序支付配置状态
   * @return successful operation
   */
  export function apiGroupQueryMpPayConfigStatus(): object {
    return;
  }

  /**
   * 我参与/我管理的场合数量
   * @return successful operation
   */
  export function apiGroupQueryMyGroupsType(): object {
    return;
  }

  /**
   * 我参与/我管理的场合数量
   * @return successful operation
   */
  export function apiGroupQueryMyGroupsTypeV2(): object {
    return;
  }

  /**
   * 付款详情
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryPayDetailById(
    body: QueryPayDetailByIdForm
  ): object {
    return;
  }

  /**
   * 查询商品
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryProductDetailById(
    body: QueryProductDetailForm
  ): object {
    return;
  }

  /**
   * 付款详情
   * @param body
   * @return successful operation
   */
  export function apiGroupQueryRecordByProductId(
    body: QueryRecordByProductIdForm
  ): object {
    return;
  }

  /**
   * 审核拒绝入群
   * @param body
   * @return successful operation
   */
  export function apiGroupRefuse(body: ReviewGroupOptForm): object {
    return;
  }

  /**
   * C端用户移除加入的群
   * @param body
   * @return successful operation
   */
  export function apiGroupRemoveGroupByCustomer(
    body: RemoveGroupByCustomerForm
  ): object {
    return;
  }

  /**
   * 查询审核群组
   * @param body
   * @return successful operation
   */
  export function apiGroupReview(body: QueryReviewGroupForm): object {
    return;
  }

  /**
   * 查询审核群组
   * @param body
   * @return successful operation
   */
  export function apiGroupReview(body: QueryReviewGroupForm): object {
    return;
  }

  /**
   * 查询社区销售信息
   * @param body
   * @return successful operation
   */
  export function apiGroupSales(body: QueryGroupSalesForm): object {
    return;
  }

  /**
   * 搜索群成员
   * @param body
   * @return successful operation
   */
  export function apiGroupSearchGroupMember(
    body: GroupMemberPageQueryForm
  ): object {
    return;
  }

  /**
   * 根据姓名/职位/公司/标签查询群成员信息|小程序未调用此接口
   * @param body
   * @return successful operation
   */
  export function apiGroupSearchGroupMemberByQueryValue(
    body: QueryGroupMemberByValuesForm
  ): object {
    return;
  }

  /**
   * 根据类型查询群成员
   * @param body
   * @return successful operation
   */
  export function apiGroupSearchGroupMemberByType(
    body: QueryGroupMemberByTypeForm
  ): object {
    return;
  }

  /**
   * 设置管理员
   * @param body
   * @return successful operation
   */
  export function apiGroupSetAdmin(body: SetAdminForm): object {
    return;
  }

  /**
   * 更新动态菜单
   * @param body
   * @return successful operation
   */
  export function apiGroupSwitch(body: UpdateGroupSwitchForm): object {
    return;
  }

  /**
   * 禁止/允许 发动态
   * @param body
   * @return successful operation
   */
  export function apiGroupSwitchPublishNotice(
    body: SwitchPublishNoticeForm
  ): object {
    return;
  }

  /**
   * 禁止/允许 查看他人名片
   * @param body
   * @return successful operation
   */
  export function apiGroupSwitchViewOther(body: SwitchViewOtherForm): object {
    return;
  }

  /**
   * 新增一级/二级分类列表
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateAddItemRel(body: AddItemRelForm): object {
    return;
  }

  /**
   * 新增菜单下的Tab页
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateAddTemplateMenu(
    body: AddTemplateMenuForm
  ): object {
    return;
  }

  /**
   * 批量新增一级菜单下的tab
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateBatAddSubItemRels(
    body: BatAddSubItemRelsForm
  ): object {
    return;
  }

  /**
   * 批量生成一级菜单
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateBatAddSubMenu(
    body: BatAddSubMenuForm
  ): object {
    return;
  }

  /**
   * 删除下级菜单
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateDeleteSubItemRel(
    body: DeleteSubItemRelForm
  ): object {
    return;
  }

  /**
   * 查询模板配置信息
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateQueryGroupTemplate(
    body: GroupTemplateCommonForm
  ): object {
    return;
  }

  /**
   * 查询菜单下的Tab页
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateQueryGroupTemplateMenuTabs(
    body: QueryGroupTemplateMenuTabsForm
  ): object {
    return;
  }

  /**
   * 查询可用图标库
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateQueryIcons(body: QueryIconsForm): object {
    return;
  }

  /**
   * 根据菜单Id查询菜单信息
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateQueryItemRelById(
    body: QueryItemRelByIdForm
  ): object {
    return;
  }

  /**
   * 查询一级/二级分类列表
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateQueryItemRels(
    body: GroupTemplateCommonForm
  ): object {
    return;
  }

  /**
   * 修改一级/二级分类列表
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateUpdateItemRel(
    body: UpdateItemRelForm
  ): object {
    return;
  }

  /**
   * 修改菜单下的Tab页
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateUpdateTemplateMenu(
    body: UpdateTemplateMenuForm
  ): object {
    return;
  }

  /**
   * 更改样式
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateUpdateTemplateMenuShowStyle(
    body: UpdateTemplateMenuShowStyleForm
  ): object {
    return;
  }

  /**
   * 修改模板内容
   * @param body
   * @return successful operation
   */
  export function apiGroupTemplateUpdateTemplateRel(
    body: UpdateTemplateRelForm
  ): object {
    return;
  }

  /**
   * 群置顶
   * @param body
   * @return successful operation
   */
  export function apiGroupTopGroup(body: GroupCommonForm): object {
    return;
  }

  /**
   * 群转让
   * @param body
   * @return successful operation
   */
  export function apiGroupTransferGroupLord(
    body: TransferGroupLordForm
  ): object {
    return;
  }

  /**
   * 微信支付统一下单
   * @param body
   * @return successful operation
   */
  export function apiGroupUnifiedOrderNotice(
    body: UnifiedOrderNoticeForm
  ): object {
    return;
  }

  /**
   * 更新进入群详情时间
   * @param body
   * @return successful operation
   */
  export function apiGroupUpdateEnterGroupTime(
    body: UpdateEnterGroupTimeForm
  ): object {
    return;
  }

  /**
   * 群活动-活动海报上传（保存）
   * @param body
   * @return successful operation
   */
  export function apiGroupUploadPoster(body: UploadPosterForm): object {
    return;
  }

  /**
   * 把用户的某个群置顶
   * @param body
   * @return successful operation
   */
  export function apiGroupUserTopGroup(body: GroupCommonForm): object {
    return;
  }

  /**
   * 记录访问群组事件
   * @param body
   * @return successful operation
   */
  export function apiGroupVisitGroup(body: VisitGroupRecordForm): object {
    return;
  }

  /**
   * 查询需审核人员列表
   * @param body
   * @return successful operation
   */
  export function apiMemberReview(body: GroupMemberReviewForm): object {
    return;
  }

  /**
   * 查询需审核人员列表
   * @param body
   * @return successful operation
   */
  export function apiMemberReview(body: GroupMemberReviewForm): object {
    return;
  }

  /**
   * 发送完善名片通知
   * @param body
   * @return successful operation
   */
  export function apiMessageCardInfoPerfection(
    body: PerfectCardInfoForm
  ): object {
    return;
  }

  /**
   * 获取消息通知
   * @param body
   * @return successful operation
   */
  export function apiMessageNotification(
    body: MessageNotificationQueryForm
  ): object {
    return;
  }

  /**
   * 将未读消息变为已读
   * @param body
   * @return successful operation
   */
  export function apiMessageNotificationReadStatus(
    body: BatMarkReadedByConditionForm
  ): object {
    return;
  }

  /**
   * 获取未读消息通知数量
   * @param body
   * @return successful operation
   */
  export function apiMessageNotificationUnreadCount(
    body: MessageUnreadCountQueryForm
  ): object {
    return;
  }

  /**
   * 查询群列表中的消息内容
   * @param body
   * @return successful operation
   */
  export function apiMessageQueryGroupMessage(
    body: QueryGroupMessageForm
  ): object {
    return;
  }

  /**
   * 获取消息通知
   * @param body
   * @return successful operation
   */
  export function apiMessageQueryGroupUnReadMessage(
    body: MessageCommonForm
  ): object {
    return;
  }

  /**
   * 查询我参与的与我管理的群活跃状
   * @return successful operation
   */
  export function apiMessageQueryMyGroupsActiveStatus(): object {
    return;
  }

  /**
   * 查询我参与的与我管理的群活跃状
   * @return successful operation
   */
  export function apiMessageQueryMyGroupsActiveStatusV2(): object {
    return;
  }

  /**
   * 新增分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddCatalog(
    body: AddPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 新增分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddCatalog(
    body: AddPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 新增下级分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddSubCategory(
    body: AddSubCatalogsForm
  ): object {
    return;
  }

  /**
   * 新增下级分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddSubCategory(
    body: AddSubCatalogsForm
  ): object {
    return;
  }

  /**
   * 添加小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddThemePattern(
    body: AddAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 添加小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternAddThemePattern(
    body: AddAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternDeletePattern(
    body: DeleteAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternDeletePattern(
    body: DeleteAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板是否全部展示
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternIsUnShowPattern(
    body: QueryAppIsUnShowPatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板是否全部展示
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternIsUnShowPattern(
    body: QueryAppIsUnShowPatternForm
  ): object {
    return;
  }

  /**
   * 修改分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternModifyCatalog(
    body: ModifyPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 修改分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternModifyCatalog(
    body: ModifyPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternModifyThemePattern(
    body: ModifyAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternModifyThemePattern(
    body: ModifyAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryAllPatternByCategory(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryAllPatternByCategory(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 新增分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryCatalogs(
    body: QueryPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 新增分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryCatalogs(
    body: QueryPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryShowThemePatternsByCatalog(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryShowThemePatternsByCatalog(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryThemePatterns(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 查询小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternQueryThemePatterns(
    body: QueryAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternRefreshPatternView(
    body: RefreshAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改小程序下的主题模板数据
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternRefreshPatternView(
    body: RefreshAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 删除分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternRemoveCatalog(
    body: RemovePatternCatalogForm
  ): object {
    return;
  }

  /**
   * 删除分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternRemoveCatalog(
    body: RemovePatternCatalogForm
  ): object {
    return;
  }

  /**
   * 设置官网群模型主分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternResetMainCategory(
    body: ResetMainCatalogForm
  ): object {
    return;
  }

  /**
   * 设置官网群模型主分类
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternResetMainCategory(
    body: ResetMainCatalogForm
  ): object {
    return;
  }

  /**
   * 修改分类排序
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSortCatalog(
    body: OrderPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 修改分类排序
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSortCatalog(
    body: OrderPatternCatalogForm
  ): object {
    return;
  }

  /**
   * 修改分类下模板排序
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSortCatalogPattern(
    body: OrderCatalogPatternForm
  ): object {
    return;
  }

  /**
   * 修改分类下模板排序
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSortCatalogPattern(
    body: OrderCatalogPatternForm
  ): object {
    return;
  }

  /**
   * 开关小程序下的主题模板是否全部展示状态
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSwitchAllPattern(
    body: SwitchAppAllPatternForm
  ): object {
    return;
  }

  /**
   * 开关小程序下的主题模板是否全部展示状态
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSwitchAllPattern(
    body: SwitchAppAllPatternForm
  ): object {
    return;
  }

  /**
   * 启停小程序下的主题模板
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSwitchThemePattern(
    body: SwitchAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 启停小程序下的主题模板
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternSwitchThemePattern(
    body: SwitchAppThemePatternForm
  ): object {
    return;
  }

  /**
   * 修改官网群模型主分类描述信息
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternUpdateMainCategoryDesc(
    body: ModifyMainCatalogDescForm
  ): object {
    return;
  }

  /**
   * 修改官网群模型主分类描述信息
   * @param body
   * @return successful operation
   */
  export function apiMiniAppThemePatternUpdateMainCategoryDesc(
    body: ModifyMainCatalogDescForm
  ): object {
    return;
  }

  /**
   * 新增公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeAdd(body: NoticeAddForm): object {
    return;
  }

  /**
   * 新增公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeAddV2(body: NoticeAddForm): object {
    return;
  }

  /**
   * 增加浏览量
   * @param body
   * @return successful operation
   */
  export function apiNoticeAddNoticeBrowseRecord(
    body: AddNoticeBrowseFrom
  ): object {
    return;
  }

  /**
   * 删除公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeDelete(body: NoticeDeleteForm): object {
    return;
  }

  /**
   * apiNoticeGiveLike
   * @param body
   * @return successful operation
   */
  export function apiNoticeGiveLike(body: NoticeGiveLikeQueryForm): object {
    return;
  }

  /**
   * 更新动态菜单
   * @param body
   * @return successful operation
   */
  export function apiNoticeMenus(body: UpdateDynamicMenuForm): object {
    return;
  }

  /**
   * 图文模块中的信息发布
   * @param body
   * @return successful operation
   */
  export function apiNoticePublishArticleMoments(
    body: AddArticleMomentsForm
  ): object {
    return;
  }

  /**
   * 菜单中直接发布动态(相册)
   * @param body
   * @return successful operation
   */
  export function apiNoticePublishItemDirectMoments(
    body: AddItemDirectMomentsForm
  ): object {
    return;
  }

  /**
   * BBS类型,菜单中的帖子发布
   * @param body
   * @return successful operation
   */
  export function apiNoticePublishMoments(body: AddMomentsForm): object {
    return;
  }

  /**
   * 单页长图文的发布
   * @param body
   * @return successful operation
   */
  export function apiNoticePublishRichTextMoments(
    body: AddRichTextMomentsForm
  ): object {
    return;
  }

  /**
   * 查询|小程序端未调用
   * @param body
   * @return successful operation
   */
  export function apiNoticeQuery(body: NoticeQueryPageForm): object {
    return;
  }

  /**
   * 查询公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryByGroupId(
    body: QueryNoticeByGroupIdForm
  ): object {
    return;
  }

  /**
   * 查询公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryByTicketId(
    body: QueryNoticeByGroupIdForm
  ): object {
    return;
  }

  /**
   * 查询群动态详情信息
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryDynamicDetail(
    body: DynamicDetailQueryForm
  ): object {
    return;
  }

  /**
   * 查询单条item帖子列表
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryItemDirectMoments(
    body: QueryItemDirectMomentsForm
  ): object {
    return;
  }

  /**
   * 查询公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryMomentList(
    body: QueryThemeMomentsForm
  ): object {
    return;
  }

  /**
   * 查询公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryMoments(body: QueryThemeMomentsForm): object {
    return;
  }

  /**
   * 浏览量列表
   * @param body
   * @return successful operation
   */
  export function apiNoticeQueryNoticeBrowse(
    body: NoticeBrowseQueryPageForm
  ): object {
    return;
  }

  /**
   * 将动态设为公告
   * @param body
   * @return successful operation
   */
  export function apiNoticeSetAnnouncement(body: SetAnnouncementForm): object {
    return;
  }

  /**
   * 加精/取消加精
   * @param body
   * @return successful operation
   */
  export function apiNoticeSetHighlights(body: HighlightsSetForm): object {
    return;
  }

  /**
   * 动态设置置顶/取消置顶
   * @param body
   * @return successful operation
   */
  export function apiNoticeSetStick(body: StickSetForm): object {
    return;
  }

  /**
   * 帖子修改文件
   * @param body
   * @return successful operation
   */
  export function apiNoticeUpdate(body: NoticeUpdateForm): object {
    return;
  }

  /**
   * 帖子修改文件
   * @param body
   * @return successful operation
   */
  export function apiNoticeUpdateV2(body: NoticeUpdateForm): object {
    return;
  }

  /**
   * 新增群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketAddRedPackets(body: AddRedPacketsForm): object {
    return;
  }

  /**
   * 增加分享次数
   * @param body
   * @return successful operation
   */
  export function apiPacketAddShareCount(body: QueryPacketByIdForm): object {
    return;
  }

  /**
   * 删除群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketDeleteRedPackets(
    body: DeleteRedPacketsForm
  ): object {
    return;
  }

  /**
   * 根据ID查询红包详情
   * @param body
   * @return successful operation
   */
  export function apiPacketDetail(body: QueryPacketByIdForm): object {
    return;
  }

  /**
   * 修改群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketModifyRedPackets(
    body: ModifyRedPacketsForm
  ): object {
    return;
  }

  /**
   * 开红包
   * @param body
   * @return successful operation
   */
  export function apiPacketOpen(body: QueryPacketByIdForm): object {
    return;
  }

  /**
   * 查询红包列表
   * @param body
   * @return successful operation
   */
  export function apiPacketQueryByGroupId(body: RedPacketsCommonForm): object {
    return;
  }

  /**
   * 查询红包详情
   * @param body
   * @return successful operation
   */
  export function apiPacketQueryGroupPacketsById(
    body: RedPacketsCommonForm
  ): object {
    return;
  }

  /**
   * 查询进行中的群红包详情
   * @param body
   * @return successful operation
   */
  export function apiPacketQueryProcessingRedPackets(
    body: RedPacketsCommonForm
  ): object {
    return;
  }

  /**
   * 查询群红包领取记录
   * @param body
   * @return successful operation
   */
  export function apiPacketQueryRecordByPacketsId(
    body: RedPacketsCommonForm
  ): object {
    return;
  }

  /**
   * 收下红包
   * @param body
   * @return successful operation
   */
  export function apiPacketReceive(body: ReceivePacketForm): object {
    return;
  }

  /**
   * 红包活动规则
   * @return successful operation
   */
  export function apiPacketRule(): object {
    return;
  }

  /**
   * 抽奖-摇一摇领群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketShakeGroupRedPackets(
    body: ShakeGroupRedPacketsForm
  ): object {
    return;
  }

  /**
   * 关闭一轮群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketTurnOffGroupRedPackets(
    body: RedPacketsCommonForm
  ): object {
    return;
  }

  /**
   * 开启一轮群红包
   * @param body
   * @return successful operation
   */
  export function apiPacketTurnOnGroupRedPackets(
    body: RedPacketsCommonForm
  ): object {
    return;
  }

  /**
   * 修改权限
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishEdit(body: EditPermissionForm): object {
    return;
  }

  /**
   * 通过手机号获取名片发布授权信息
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishFindByCellphone(
    body: GetCardInfoByCellphoneForm
  ): object {
    return;
  }

  /**
   * 查询成员列表(含授权状态)
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishMembers(body: QueryMembersForm): object {
    return;
  }

  /**
   * 新增授权成员
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishMembersAddAuthorized(
    body: AddAuthorizedMembers
  ): object {
    return;
  }

  /**
   * 查询权限下已授权的成员列表
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishMembersAuthorized(
    body: QueryAuthorizedMembersForm
  ): object {
    return;
  }

  /**
   * 查询权限下已授权的成员列表(app壳子限用)
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishMembersAuthorizedForApp(
    body: QueryAuthorizedMembersForm
  ): object {
    return;
  }

  /**
   * 移除授权成员
   * @param body
   * @return successful operation
   */
  export function apiPermissionPublishMembersRemoveAuthorized(
    body: RemoveAuthorizedMembers
  ): object {
    return;
  }

  /**
   * 修改权限
   * @param body
   * @return successful operation
   */
  export function apiPermissionViewEdit(body: EditPermissionForm): object {
    return;
  }

  /**
   * 查询成员列表(含授权状态)
   * @param body
   * @return successful operation
   */
  export function apiPermissionViewMembers(body: QueryMembersForm): object {
    return;
  }

  /**
   * 新增授权成员
   * @param body
   * @return successful operation
   */
  export function apiPermissionViewMembersAddAuthorized(
    body: AddAuthorizedMembers
  ): object {
    return;
  }

  /**
   * 查询已授权查询权限的成员列表
   * @param body
   * @return successful operation
   */
  export function apiPermissionViewMembersAuthorized(
    body: QueryAuthorizedMembersForm
  ): object {
    return;
  }

  /**
   * 移除授权成员
   * @param body
   * @return successful operation
   */
  export function apiPermissionViewMembersRemoveAuthorized(
    body: RemoveAuthorizedMembers
  ): object {
    return;
  }

  /**
   * 新增海报
   * @param body
   * @return successful operation
   */
  export function apiPosterAdd(body: AddPosterForm): object {
    return;
  }

  /**
   * 删除海报
   * @param body
   * @return successful operation
   */
  export function apiPosterDelete(body: DeletePosterForm): object {
    return;
  }

  /**
   * 查询海报详情
   * @param body
   * @return successful operation
   */
  export function apiPosterGetById(body: QueryPosterByIdForm): object {
    return;
  }

  /**
   * 查询社区邀请函信息
   * @param body
   * @return successful operation
   */
  export function apiPosterGetInvitationCard(body: GroupCommonForm): object {
    return;
  }

  /**
   * 查询模板详情
   * @param body
   * @return successful operation
   */
  export function apiPosterGetTemplateById(body: GetTemplateByIdForm): object {
    return;
  }

  /**
   * 修改海报
   * @param body
   * @return successful operation
   */
  export function apiPosterModify(body: ModifyPosterForm): object {
    return;
  }

  /**
   * 修改海报的小程序码
   * @param body
   * @return successful operation
   */
  export function apiPosterModifyQrcodeUrl(
    body: ModifyPosterQrcodeUrlForm
  ): object {
    return;
  }

  /**
   * 我的海报列表查询
   * @param body
   * @return successful operation
   */
  export function apiPosterQuery(body: GroupCommonForm): object {
    return;
  }

  /**
   * 模板列表查询
   * @param body
   * @return successful operation
   */
  export function apiPosterQueryTemplate(body: GroupCommonForm): object {
    return;
  }

  /**
   * 增加扫描海报后记录（扫描人数，扫描后注册人数，扫描后再生成海报的人数）
   * @param body
   * @return successful operation
   */
  export function apiPosterRecord(body: AddPosterRecordForm): object {
    return;
  }

  /**
   * 保存社区邀请函信息
   * @param body
   * @return successful operation
   */
  export function apiPosterSaveInvitationCard(
    body: AddInvitationCardForm
  ): object {
    return;
  }

  /**
   * apiQrcodeQuery
   * @param body
   * @return successful operation
   */
  export function apiQrcodeQuery(body: QueryQRCodeForm): object {
    return;
  }

  /**
   * apiQrcodeQuery
   * @param body
   * @return successful operation
   */
  export function apiQrcodeQuery(body: QueryQRCodeForm): object {
    return;
  }

  /**
   * apiQrcodeTempCreate
   * @param body
   * @return successful operation
   */
  export function apiQrcodeTempCreate(body: CreateQRCodeForm): Array<string> {
    return;
  }

  /**
   * 新增标签
   * @param body
   * @return successful operation
   */
  export function apiTagAdd(body: AddTagForm): object {
    return;
  }

  /**
   * 群成员给自己添加标签
   * @param body
   * @return successful operation
   */
  export function apiTagAddTagToCard(body: AddTagToCardForm): object {
    return;
  }

  /**
   * 删除标签
   * @param body
   * @return successful operation
   */
  export function apiTagDelete(body: DeleteTagForm): object {
    return;
  }

  /**
   * 获取标签详情
   * @param body
   * @return successful operation
   */
  export function apiTagGetById(body: GetInfoByIdForm): object {
    return;
  }

  /**
   * 根据群 ID 获取所有标签信息
   * @param groupId
   * @param body
   * @return successful operation
   */
  export function apiTagQueryGroupId(groupId: string, body: BaseForm): object {
    return;
  }

  /**
   * 根据标签名查询标签信息
   * @param body
   * @return successful operation
   */
  export function apiTagQueryByName(body: QueryInfoByNameForm): object {
    return;
  }

  /**
   * 更新标签
   * @param body
   * @return successful operation
   */
  export function apiTagUpdate(body: UpdateTagForm): object {
    return;
  }

  /**
   * 修改 菜单展示样式
   * @param body
   * @return successful operation
   */
  export function apiTemplateUpdateItemShowStyle(
    body: UpdateTemplateMenuShowStyleForm
  ): object {
    return;
  }

  /**
   * 健康检查
   * @return successful operation
   */
  export function apiTestHealth(): object {
    return;
  }

  /**
   * 健康检查
   * @return successful operation
   */
  export function apiTestHealth(): object {
    return;
  }

  /**
   * 新增访客记录
   * @param body
   * @return successful operation
   */
  export function apiVisitAdd(body: VisitAddForm): object {
    return;
  }

  /**
   * 根据千米 ID 查询"看过我的"列表
   * @param body
   * @return successful operation
   */
  export function apiVisitQueryVisitMe(body: GroupCommonForm): object {
    return;
  }

  /**
   * 根据千米 ID 查询"我看过的"列表
   * @param body
   * @return successful operation
   */
  export function apiVisitQueryVisited(body: GroupCommonForm): object {
    return;
  }

  /**
   * 更新进入"我看过的"页面时间
   * @return successful operation
   */
  export function apiVisitUpdateLastEnterVisitMeTime(): object {
    return;
  }

  /**
   * 增加工作经历
   * @param body
   * @return successful operation
   */
  export function apiWorkAdd(body: AddWorkForm): object {
    return;
  }

  /**
   * 删除工作经历
   * @param body
   * @return successful operation
   */
  export function apiWorkIds(body: WorkDeleteForm): object {
    return;
  }

  /**
   * 查询自己的工作经历|小程序端未调用
   * @param body
   * @return successful operation
   */
  export function apiWorkQuery(body: WorkQueryForm): object {
    return;
  }

  /**
   * 查询别人的工作经历|小程序端未调用
   * @param ticketId
   * @param body
   * @return successful operation
   */
  export function apiWorkTicketIdList(
    ticketId: string,
    body: WorkQueryForm
  ): object {
    return;
  }

  /**
   * 查询群组数量
   * @return successful operation
   */
  export function cardGroupCount(): object {
    return;
  }

  /**
   * 查看群组基本信息
   * @param groupId
   * @return successful operation
   */
  export function cardGroupDetail(groupId: string): object {
    return;
  }

  /**
   * 群组成员-列表
   * @param body
   * @return successful operation
   */
  export function cardGroupFreshman(body: GroupMemberFrom): object {
    return;
  }

  /**
   * 群组成员-新成员统计
   * @param groupId
   * @return successful operation
   */
  export function cardGroupFreshmanStatistics(groupId: string): object {
    return;
  }

  /**
   * 群组-列表
   * @param body
   * @return successful operation
   */
  export function cardGroupList(body: GroupInfoFrom): object {
    return;
  }

  /**
   * 群组成员-列表
   * @param body
   * @return successful operation
   */
  export function cardGroupMember(body: GroupMemberFrom): object {
    return;
  }

  /**
   * 保存群成员小程序码
   * @param body
   * @return successful operation
   */
  export function cardGroupMemberQRCode(body: WeixinMiniappForm): object {
    return;
  }

  /**
   * 群组成员-加入群组
   * @param body
   * @return successful operation
   */
  export function cardGroupMemberAdd(body: GroupInfoFrom): object {
    return;
  }

  /**
   * 查询群组成数量
   * @param groupId
   * @return successful operation
   */
  export function cardGroupMemberCount(groupId: string): object {
    return;
  }

  /**
   * 群组成员-退出群组
   * @param body
   * @return successful operation
   */
  export function cardGroupMemberExit(body: GroupInfoFrom): object {
    return;
  }

  /**
   * 群组成员-成员首字母序列
   * @param groupId
   * @return successful operation
   */
  export function cardGroupMemberFirstLetter(groupId: string): object {
    return;
  }

  /**
   * 判断当前用户是否已经加入群
   * @param groupId
   * @return successful operation
   */
  export function cardGroupMemberIsGroupMember(groupId: string): object {
    return;
  }

  /**
   * 根据群名称模糊搜索
   * @param body
   * @return successful operation
   */
  export function cardGroupQueryAllGroupByName(body: GroupForm): object {
    return;
  }

  /**
   * 查询该小程某用户加入社区列表
   * @param body
   * @return successful operation
   */
  export function cardGroupQueryMyGroupByJoinRole(
    body: GroupQueryMyGroupsForm
  ): object {
    return;
  }

  /**
   * 查询该小程某用户超管角色社区列表
   * @param body
   * @return successful operation
   */
  export function cardGroupQueryMyGroupByManageRole(
    body: GroupQueryMyGroupsForm
  ): object {
    return;
  }

  /**
   * 分页查询某平台授权用户
   * @param body
   * @return successful operation
   */
  export function cardGroupQueryUserManagePage(
    body: QueryUserManagePageForm
  ): object {
    return;
  }

  /**
   * 群组-创建与修改
   * @param body
   * @return successful operation
   */
  export function cardGroupSave(body: GroupInfoFrom): object {
    return;
  }

  /**
   * 设置社区群是否被搜索到
   * @param body
   * @return successful operation
   */
  export function cardGroupSwitch(body: GroupSwitchInfoFrom): object {
    return;
  }

  /**
   * 群组-更新分享图片
   * @param body
   * @return successful operation
   */
  export function cardGroupUpdateQrCodeUrl(body: GroupInfoFrom): object {
    return;
  }

  /**
   * 申请发布小程序
   * @param body
   * @return successful operation
   */
  export function cmpManageApplyPublishMp(body: PublishMpForm): object {
    return;
  }

  /**
   * 查询当前用户是否时专属小程序管理员
   * @return successful operation
   */
  export function cmpManageCheckIsMpAdmin(): object {
    return;
  }

  /**
   * 查询用户在该小程序动态发布数量
   * @param body
   * @return successful operation
   */
  export function cmpManageGetUserCardPubInfo(body: QueryNoticeForm): object {
    return;
  }

  /**
   * 修改小程序首页群组信息
   * @param body
   * @return successful operation
   */
  export function cmpManageModifyMpHomeGroup(
    body: ModifyMpHomeGroupForm
  ): object {
    return;
  }

  /**
   * 发布小程序
   * @param body
   * @return successful operation
   */
  export function cmpManagePublishMp(body: PublishMpForm): object {
    return;
  }

  /**
   * 查询授权的小程序的详情
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryAuthedMpDetail(
    body: QueryAuthedMpDetailForm
  ): object {
    return;
  }

  /**
   * 查询已授权的小程序列表
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryAuthedMpList(
    body: QueryAuthedMpListForm
  ): object {
    return;
  }

  /**
   * 查询小程序支付配置信息
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryAuthedMpPayConfig(
    body: QueryAuthedMpDetailForm
  ): object {
    return;
  }

  /**
   * 查询我管理的社区列表
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryGroupsInMyCharge(
    body: QueryGroupsInMyChargeForm
  ): object {
    return;
  }

  /**
   * 查询小程序授权状态
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryMpAuthStatus(
    body: QueryMpAuthStatusForm
  ): object {
    return;
  }

  /**
   * 获取小程序授权连接地址
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryMpAuthUrl(body: QueryMpAuthUrlForm): object {
    return;
  }

  /**
   * 查询小程序首页群组信息
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryMpHomeGroup(
    body: QueryAuthedMpDetailForm
  ): object {
    return;
  }

  /**
   * 查询小程序发布状态
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryMpPublishStatus(
    body: QueryAuthedMpDetailForm
  ): object {
    return;
  }

  /**
   * 查询我管理的群组信息
   * @param body
   * @return successful operation
   */
  export function cmpManageQueryMyGroupInfoByGroupId(
    body: QueryMyGroupInfoByGroupIdForm
  ): object {
    return;
  }

  /**
   * 保存小程序支付配置信息
   * @param body
   * @return successful operation
   */
  export function cmpManageSaveAuthedMpPayConfig(
    body: SaveAuthedMpPayConfigForm
  ): object {
    return;
  }

  /**
   * 提交审核
   * @param body
   * @return successful operation
   */
  export function cmpManageSubmitAudit(body: SubmitAuditForm): object {
    return;
  }

  /**
   * 设置小程序数据隔离
   * @param body
   * @return successful operation
   */
  export function cmpManageSwitchGroupUnlimited(
    body: SetGroupUnlimitedForm
  ): object {
    return;
  }

  /**
   * 购买社区版小程序下单
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseCreateCommunityOrder(
    body: CreateCommunityOrderForm
  ): object {
    return;
  }

  /**
   * 生成购买订单
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseGenOrder(body: GenPurchaseOrderForm): object {
    return;
  }

  /**
   * 根据支付方式生成扫码支付的预付信息
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseGenPrePayInfo(body: GenPrePayInfoForm): object {
    return;
  }

  /**
   * 生成支付二维码
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseGenQrcode(body: QrCodeForm): object {
    return;
  }

  /**
   * 查询小程序产品详情
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseProductDetail(
    body: QueryProductDetailForm
  ): object {
    return;
  }

  /**
   * 获取社区版小程序订单信息
   * @param groupId
   * @return successful operation
   */
  export function cmpPurchaseQueryOrderDetailByGroupIdGroupId(
    groupId: string
  ): object {
    return;
  }

  /**
   * 查询订单详情
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseQueryOrderInfo(body: QueryOrderInfoForm): object {
    return;
  }

  /**
   * 查询订单列表
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseQueryOrderList(body: QueryOrderInfoForm): object {
    return;
  }

  /**
   * 查询可用支付方式
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseQueryPayTypes(body: QueryAlbumForm): object {
    return;
  }

  /**
   * 小程序支付统一下单
   * @param body
   * @return successful operation
   */
  export function cmpPurchaseWxmaPayUnifiedorder(
    body: GenPrePayInfoForm
  ): object {
    return;
  }

  /**
   * 获取名片夹概况
   * @return successful operation
   */
  export function crmBizCardBriefing(): object {
    return;
  }

  /**
   * 收藏名片
   * @param body
   * @return successful operation
   */
  export function crmBizCardCollect(body: CollectCardForm): object {
    return;
  }

  /**
   * 根据千米ID新收录我的数量
   * @return successful operation
   */
  export function crmBizCardCountNewFollowMeTicketsByTicketId(): object {
    return;
  }

  /**
   * 新增或编辑个人名片
   * @param body
   * @return successful operation
   */
  export function crmBizCardFastSubmit(body: FastEditBizCardForm): object {
    return;
  }

  /**
   * 根据千米id查询自己的基本信息
   * @return successful operation
   */
  export function crmBizCardGetBasicById(): object {
    return;
  }

  /**
   * 根据千米id查询基本信息
   * @param ticketId
   * @return successful operation
   */
  export function crmBizCardGetBasicByTicketId(ticketId: string): object {
    return;
  }

  /**
   * 把ticketId缓存起来,key传值app
   * @return successful operation
   */
  export function crmBizCardGetCardCacheKey(): object {
    return;
  }

  /**
   * 查看别人名片
   * @param ticketId
   * @return successful operation
   */
  export function crmBizCardGetCardInfoByTicketId(ticketId: string): object {
    return;
  }

  /**
   * 查看名片
   * @return successful operation
   */
  export function crmBizCardGetInfo(): object {
    return;
  }

  /**
   * 查询关注我的用户列表
   * @param body
   * @return successful operation
   */
  export function crmBizCardListFollowMeTicketsByCardId(
    body: BasicForm
  ): object {
    return;
  }

  /**
   * 获取随机座右铭
   * @return successful operation
   */
  export function crmBizCardMotto(): object {
    return;
  }

  /**
   * 获取默认座右铭列表
   * @return successful operation
   */
  export function crmBizCardMottoList(): object {
    return;
  }

  /**
   * 获取收到的名片
   * @param body
   * @return successful operation
   */
  export function crmBizCardReceived(body: CardSearchForm): object {
    return;
  }

  /**
   * 记录名片发送次数
   * @param cardId
   * @return successful operation
   */
  export function crmBizCardRecord(cardId: string): object {
    return;
  }

  /**
   * 保存二维码图片
   * @param body
   * @return successful operation
   */
  export function crmBizCardSaveQrcode(body: SaveCardPicForm): object {
    return;
  }

  /**
   * 保存名片图片
   * @param body
   * @return successful operation
   */
  export function crmBizCardSaveUrl(body: SaveCardPicForm): object {
    return;
  }

  /**
   * 保存昵称和头像
   * @param body
   * @return successful operation
   */
  export function crmBizCardSetNameAndLogo(body: NameAndUserLogoForm): object {
    return;
  }

  /**
   * 新增或编辑个人名片
   * @param body
   * @return successful operation
   */
  export function crmBizCardSubmit(body: EditBizCardForm): object {
    return;
  }

  /**
   * 检查名片是否已收藏
   * @param body
   * @return successful operation
   */
  export function crmBizCardVerifyCollect(body: VerifyCardCollectForm): object {
    return;
  }

  /**
   * 根据对方ticketId判断是否收藏名片
   * @param body
   * @return successful operation
   */
  export function crmBizCardVerifyIsCollectedByTicketId(
    body: CollectTicketForm
  ): object {
    return;
  }

  /**
   * 查看名片
   * @param cardId
   * @return successful operation
   */
  export function crmBizCardCardIdInfo(cardId: string): object {
    return;
  }

  /**
   * 个人名片夹接受邀请
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardAcceptInvitation(
    body: AcceptInvitationForm
  ): object {
    return;
  }

  /**
   * 添加好友
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardAddFriend(body: FriendOperateForm): object {
    return;
  }

  /**
   * 收集formId
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardCollectFormId(body: FormIdForm): {};

  /**
   * 根据企业查看名片列表
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardCompanyCards(body: CompanyCardsForm): object {
    return;
  }

  /**
   * 删除好友
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardDeleteFriend(body: FriendOperateForm): object {
    return;
  }

  /**
   * 个人名片详情查询
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardDetail(body: TicketCardForm): object {
    return;
  }

  /**
   * 可扩充公司总数
   * @return successful operation
   */
  export function crmBusinessCardExpandableCount(): object {
    return;
  }

  /**
   * 导入手机通讯录
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardImportPhoneBook(body: PhoneBookForm): object {
    return;
  }

  /**
   * 查询行业列表
   * @return successful operation
   */
  export function crmBusinessCardIndustry(): object {
    return;
  }

  /**
   * 个人名片夹邀请好友
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardInviteFriend(body: InviteFriendForm): object {
    return;
  }

  /**
   * 个人名片夹批量邀请好友
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardInviteFriends(body: InviteFriendForm): object {
    return;
  }

  /**
   * 是否导入过通讯录
   * @return successful operation
   */
  export function crmBusinessCardLoadedPhoneBook(): object {
    return;
  }

  /**
   * 编辑个人名片
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardModify(body: ModifyCardForm): object {
    return;
  }

  /**
   * 获取手机通讯录列表
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardPhoneBook(body: SearchCardForm): object {
    return;
  }

  /**
   *  查询通讯录总数
   * @return successful operation
   */
  export function crmBusinessCardPhoneBookCount(): object {
    return;
  }

  /**
   * 查询未邀请好友总数
   * @return successful operation
   */
  export function crmBusinessCardPhoneBookNotInvite(): object {
    return;
  }

  /**
   * 查询未邀请好友总数
   * @return successful operation
   */
  export function crmBusinessCardPhoneBookNotInviteCount(): object {
    return;
  }

  /**
   * 保存群成员小程序码
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardQianmiMiniappQRCode(
    body: QianmiQRCodeForm
  ): object {
    return;
  }

  /**
   * 收集formId
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardRemoveKey(body: FormIdForm): {};

  /**
   * 搜索名片
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardSearch(body: SearchCardForm): object {
    return;
  }

  /**
   * 把ticketId缓存起来,key传值app
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardSetTemplateMsg(body: TemplateMsgForm): object {
    return;
  }

  /**
   * 名片夹企业列表
   * @return successful operation
   */
  export function crmBusinessCardSortCompanies(): object {
    return;
  }

  /**
   * 名片夹列表（按姓名排序）
   * @return successful operation
   */
  export function crmBusinessCardSortName(): object {
    return;
  }

  /**
   * 更新通讯录
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardUpdatePhoneBook(body: PhoneBookForm): object {
    return;
  }

  /**
   * 获取微信小程序二维码
   * @param body
   * @return successful operation
   */
  export function crmBusinessCardWeixinMiniappQRCode(
    body: WeixinMiniappForm
  ): object {
    return;
  }

  /**
   * 查看工作经历
   * @param body
   * @return successful operation
   */
  export function crmWorkList(body: WorkExperienceQueryForm): object {
    return;
  }

  /**
   * 获取详情
   * @param body
   * @return successful operation
   */
  export function impCmGetArchiveDetail(body: QueryArchiveDetailForm): object {
    return;
  }

  /**
   * 新增appTab项
   * @param body
   * @return successful operation
   */
  export function impManageAddAppTab(body: AddAppTabItemForm): object {
    return;
  }

  /**
   * 根据创建的表单格式查询店铺信息
   * @param body
   * @return successful operation
   */
  export function impManageGroupGetGroupInfo(body: GroupQueryForm): object {
    return;
  }

  /**
   * 查询管理的店铺列表
   * @param body
   * @return successful operation
   */
  export function impManageGroupGroupList(body: GroupManageForm): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function impManageGroupQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询配置
   * @param body
   * @return successful operation
   */
  export function impManageGroupQueryAppConfig(body: AppForm): object {
    return;
  }

  /**
   * 查询评论
   * @param body
   * @return successful operation
   */
  export function impManageGroupQueryGroupComments(
    body: QueryNoticeCommentForm
  ): object {
    return;
  }

  /**
   * 查询动态
   * @param body
   * @return successful operation
   */
  export function impManageGroupQueryGroupNotices(
    body: QueryNoticeForm
  ): object {
    return;
  }

  /**
   * 修改appTab项
   * @param body
   * @return successful operation
   */
  export function impManageModifyAppTab(body: ModifyAppTabItemForm): object {
    return;
  }

  /**
   * 修改tab项展示顺序
   * @param body
   * @return successful operation
   */
  export function impManageModifyAppTabBarShowOrder(
    body: ModifyAppTabBarForm
  ): object {
    return;
  }

  /**
   * 修改appTab项关联的群组或者小程序id
   * @param body
   * @return successful operation
   */
  export function impManageModifyAppTabItemRel(
    body: ModifyAppTabItemRelForm
  ): object {
    return;
  }

  /**
   * 修改tab项是否展示
   * @param body
   * @return successful operation
   */
  export function impManageModifyAppTabItemShowHide(
    body: ModifyAppTabShowHideForm
  ): object {
    return;
  }

  /**
   * 查询app底部原生导航信息
   * @param body
   * @return successful operation
   */
  export function impManageQueryAppTabBar(body: QueryAppTabBarForm): object {
    return;
  }

  /**
   * 查询可用的图标
   * @return successful operation
   */
  export function impManageQueryAppTabIcons(): object {
    return;
  }

  /**
   * 查询登录过小程序的用户列表
   * @param body
   * @return successful operation
   */
  export function impManageQueryAppUsers(body: QueryAppUsersForm): object {
    return;
  }

  /**
   * 查询行业版定制小程序
   * @param body
   * @return successful operation
   */
  export function impManageQueryIndustryMpList(
    body: QueryIndustryMpListForm
  ): object {
    return;
  }

  /**
   * 查询tabitem 模板信息
   * @return successful operation
   */
  export function impManageQueryTabItemTemplates(): object {
    return;
  }

  /**
   * 删除tab项
   * @param body
   * @return successful operation
   */
  export function impManageRemoveAppTabRecycle(
    body: RemoveAppTabRecycleForm
  ): object {
    return;
  }

  /**
   * 搜索登录过小程序的用户公司名称
   * @param body
   * @return successful operation
   */
  export function impManageSearchAppUserComName(
    body: SearchAppUserComNameForm
  ): object {
    return;
  }

  /**
   * 搜索登录过小程序的用户公司角色
   * @param body
   * @return successful operation
   */
  export function impManageSearchAppUserComRole(
    body: SearchAppUserComRoleForm
  ): object {
    return;
  }

  /**
   * 生成二维码
   * @param body
   * @return successful operation
   */
  export function qrcodeGen(body: QrCodeForm): Array<string> {
    return;
  }
}
