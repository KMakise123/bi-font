declare namespace API {
  type AccountLoginQuery = {
    userAccount?: string;
    userPassword?: string;
  };

  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    description?: string;
    msg?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    description?: string;
    msg?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    description?: string;
    msg?: string;
  };

  type BaseResponseListUserVo_ = {
    code?: number;
    data?: UserVo[];
    description?: string;
    msg?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    description?: string;
    msg?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    description?: string;
    msg?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    description?: string;
    msg?: string;
  };

  type BaseResponseUserAuthVo_ = {
    code?: number;
    data?: UserAuthVo;
    description?: string;
    msg?: string;
  };

  type BaseResponseUserVo_ = {
    code?: number;
    data?: UserVo;
    description?: string;
    msg?: string;
  };

  type BiResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type Chart = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    currentPage?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartdata?: string;
    charttype?: string;
    genchart?: string;
    genresult?: string;
    goal?: string;
    id?: number;
    isdelete?: number;
    name?: string;
    userid?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type deleteUserByIdUsingGETParams = {
    /** userId */
    userId: number;
  };

  type genChartAsyncByAiUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartAsyncByThreadUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageQuery = {
    currentPage?: number;
    pageSize?: number;
  };

  type PhoneLoginQuery = {
    code?: string;
    phone?: string;
  };

  type PwdQuery = {
    id?: number;
    password?: string;
  };

  type RegisterQuery = {
    account?: string;
    checkPassword?: string;
    password?: string;
    phone?: string;
  };

  type sendPhoneVerifyCodeUsingPOSTParams = {
    /** phone */
    phone: string;
  };

  type StatusQuery = {
    id?: number;
    status?: number;
  };

  type UserAddVo = {
    account?: string;
    avatarUrl?: string;
    email?: string;
    password?: string;
    phone?: string;
    userRole?: string;
    username?: string;
  };

  type UserAuthVo = {
    token?: string;
    userInfo?: string;
  };

  type UserSelectQuery = {
    account?: string;
    pageQuery?: PageQuery;
    userRole?: string;
    username?: string;
  };

  type UserVo = {
    account?: string;
    avatarUrl?: string;
    coins?: number;
    createTime?: string;
    email?: string;
    id?: number;
    phone?: string;
    status?: number;
    userRole?: string;
    username?: string;
  };
}
