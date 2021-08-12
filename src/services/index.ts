import { postBody, getQuery } from './handler';

/**
 * 钉钉密码登录
 *
 ** */
interface loginType {
  // 手机号
  mobile: string;
  // 密码
  password: any;
}

export async function login(data: loginType) {
  return postBody('/api/user/login', data);
}

/**
 * 获取用户信息
 *
 ** */
export async function isLogin() {
  return postBody('/api/user/isLogin');
}

/**
 * protable list测试
 */
export function getProTable(data: any) {
  return postBody('/api/table/list', data);
}
/**
 * protable list测试
 */
export function getProTableUserList() {
  return postBody('/api/table/userlist');
}
/**
 * protable 新增接口
 */
export const proTableAddRow = (params: any) => postBody('/api/protable/proTableAddRow', params);

/**
 * protable select测试
 */
export const getSelect = () => getQuery('/api/protable/select');
/**
 * protable 详情数据
 */
export const proTableDetails = (params: any) => postBody('/api/protable/proTableDetails', params);

/**
 * 消息中心 通知list
 */
export const getNoticeNotification = () => postBody('/api/notice/notification');

/**
 * 消息中心 消息list
 */
export const getNoticeMessage = () => postBody('/api/notice/message');

/**
 * 消息中心 待办list
 */
export const getNoticeEvent = () => postBody('/api/notice/event');
