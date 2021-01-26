import { postBody, getQuery } from './handler';

/**
 * 钉钉密码登录
 *
 ***/
interface loginType {
  // 手机号
  mobile: String;
  // 密码
  password: any;
}

export async function login(data: loginType) {
  return postBody('/api/user/login', data);
}

/**
 * 获取用户信息
 *
 ***/
export async function isLogin() {
  return postBody('/api/user/isLogin');
}

/**
 * protable select测试
 */
export function getSelect() {
  return getQuery('/api/protable/select');
}

/**
 * protable list测试
 */
export function getProTable(data: any) {
  return postBody('/api/protable/list', data);
}

/**
 * workbench list测试
 */
export function getListData(data: any) {
  return postBody('/api/workbench/list', data);
}

/**
 * workbench chart测试
 */
export function getChartData(data: any) {
  return postBody('/api/workbench/chart', data);
}

/**
 * meassage list测试
 */
export function getMessageList() {
  return postBody('/api/message/list');
}

/**
 * 消息中心 通知list
 */
export function getNoticeNotification() {
  return postBody('/api/notice/notification');
}

/**
 * 消息中心 消息list
 */
export function getNoticeMessage() {
  return postBody('/api/notice/message');
}

/**
 * 消息中心 待办list
 */
export function getNoticeEvent() {
  return postBody('/api/notice/event');
}
