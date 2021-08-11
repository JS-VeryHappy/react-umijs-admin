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
 * workbench group测试
 */
export function getGroupData(data: any) {
  return postBody('/api/workbench/group', data);
}

/**
 * meassage list测试
 */
export function getMessageList(data: any) {
  return postBody('/api/message/list', data);
}
/**
 * board 测试
 */
export function getDoardData() {
  return postBody('/api/board/data');
}

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
