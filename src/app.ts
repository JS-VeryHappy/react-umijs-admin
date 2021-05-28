/**
 * 我是约定入口文件
 */
import React from 'react';
import { history } from 'umi';
import routesConfig from '../config/routes';
import layoutConfig from '../config/layout';
import requestConfig from '@/services/config';
import { isLogin } from '@/services';
import ErrorBoundary from '@/components/ErrorBoundary';

// 渲染之前做事情 启动应用执行一次
export function render(oldRender: () => void) {
  $global.log('我是渲染事前的钩子');
  oldRender();
}

// 修改交给 react-dom 渲染时的根组件。我可以作为全局 组件引用
// @ts-ignore
export function rootContainer(container: any, props) {
  $global.log('插入全局包围组件');
  return React.createElement(ErrorBoundary, props, container);
}

// 全局初始化调用约定方法、可以作为全局进入登陆使用 返回登陆后的用户数据。启动应用执行一次
export async function getInitialState() {
  $global.log('启动应用进入页面');
  if (history.location.pathname !== '/login' && history.location.pathname !== '/404') {
    const res = await isLogin();
    return res.data;
  }

  return {};
}

// 修改路由 可以根据后台或者权限动态设置路由  启动应用执行一次
export function patchRoutes() {
  $global.log('我可以调整路由');
  // routes.unshift({
  //   path: '/foo',
  //   exact: true,
  //   component: require('@/extraRoutes/foo').default,
  // });
}

// 在初始加载和路由切换时做一些事情。每次切换都会执行
export function onRouteChange({ routes, location }: any) {
  // 测试发现 umijs 约定式404 无法主动触发、所以自定义写了一个 配出文档查看路由
  if (
    routes.length &&
    location.pathname.indexOf('~docs') === -1 &&
    location.pathname.indexOf('~demos') === -1
  ) {
    const routeStr = JSON.stringify(routesConfig);
    const has = routeStr.indexOf(`"path":"${location.pathname}"`);
    if (has === -1) {
      history.push('/404');
      return;
    }
  }

  // 设置页面标题
  // if (matchedRoutes.length) {
  //    let title  = matchedRoutes[matchedRoutes.length - 1].route.title || false;
  //    if(title){
  //      document.title  = title;
  //    }
  // }
  $global.log('我是路由钩子');
}

/**
 * Layout 插件允许通过运行时的配置退出登陆、自定义 ErrorBoundary 等功能。
 * https://procomponents.ant.design/components/layout/#prolayout
 */
export const layout = layoutConfig;

/**
 * 公用请求拦截器
 */
export const request = requestConfig;

// /**
//  * dva配置
//  */
// export const dva = {
//   config: {
//     onAction: createLogger(),
//     onError(e: any) {
//       message.error(e.message, 3);
//     },
//   },
// };
