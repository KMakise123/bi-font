// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUser POST /api/user/add */
export async function addUserUsingPost(body: API.UserAddVo, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserById GET /api/user/delete */
export async function deleteUserByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteUsersById POST /api/user/delete/list */
export async function deleteUsersByIdUsingPost(body: number[], options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/delete/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUsersList POST /api/user/list */
export async function getUsersListUsingPost(
  body: API.UserSelectQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserVo_>('/api/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logOut GET /api/user/logout */
export async function logOutUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** UserNumber POST /api/user/total */
export async function userNumberUsingPost(
  body: API.UserSelectQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/total', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateUserUsingPost(body: API.UserVo, options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVo_>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUserPassword POST /api/user/update/password */
export async function updateUserPasswordUsingPost(
  body: API.PwdQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/update/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUserStatus POST /api/user/update/status */
export async function updateUserStatusUsingPost(
  body: API.StatusQuery,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/update/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
