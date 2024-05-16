// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** accountLogin POST /api/account/login */
export async function accountLoginUsingPost(
  body: API.AccountLoginQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserAuthVo_>('/api/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** phoneLogin POST /api/phone/login */
export async function phoneLoginUsingPost(
  body: API.PhoneLoginQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserAuthVo_>('/api/phone/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** register POST /api/register */
export async function registerUsingPost(body: API.RegisterQuery, options?: { [key: string]: any }) {
  return request<API.BaseResponseUserAuthVo_>('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendPhoneVerifyCode POST /api/send/phone/code */
export async function sendPhoneVerifyCodeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendPhoneVerifyCodeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/send/phone/code', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
