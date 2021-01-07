import { request } from "umi"


const requestQuery =(url: string,options: any) => {
  return request(url, options)
};
/**
 * post请求 body形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */
export function postBody(url:string,data?:any, options?: any) {
  return requestQuery(url, Object.assign({ method: 'post', data:data}, options))
}

/**
 * post请求 query形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */
export function postQuery(url:string,data?:any, options?: any) {
  return requestQuery(url, Object.assign({ method: 'post', params:data}, options))
}

/**
 * get请求 body形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */

export function getBody(url:string,data?:any, options?: any) {
  return requestQuery(url, Object.assign({ method: 'get', data:data}, options))
}
/**
 * get请求 query形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */

export function getQuery(url:string,data?:any, options?: any) {
  return requestQuery(url, Object.assign({ method: 'get', params:data}, options))
}

/**
 * get请求 路径形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */

export function pathBody(url:string,data?:any, options?: any)  {
  Object.keys(data).forEach((key: string, index: number) => url += `_${data[key]}`);
  return requestQuery(url, Object.assign({ method: 'post', data:data}, options))
}
/**
 * get请求 路径形式
 * @param url //url
 * @param data //表单数据
 * @param options //额外配置
 */
export function pathQuery(url:string,data?:any,options?:any) {
  Object.keys(data).forEach((key: string, index: number) => url += `_${data[key]}`);
  return requestQuery(url, Object.assign({ method: 'post', params:data}, options))
}
