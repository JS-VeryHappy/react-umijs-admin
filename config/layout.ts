import React from 'react';
import { history } from 'umi';
import { DefaultFooter, PageContainer } from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';

/**
 * Layout 插件允许通过运行时的配置退出登陆、自定义 ErrorBoundary 等功能。
 * https://procomponents.ant.design/components/layout/#prolayout
 */

/* 此layout 文件是app.ts 的运行时布局配置 */
export default {
  //用于运行时配置默认 Layout 的 UI 中，点击退出登录的处理逻辑，默认不做处理。
  // logout: () => {
  //   setTimeout(()=>{
  //     //请求服务退出登录 目前没有
  //     history.push('/signIn');
  //   },100);
  // },
  //菜单显示模式
  // layout:'top',
  // fixedHeader:true,
  // fixSiderbar:true,
  //发生错误后的回调（可做一些错误日志上报，打点等）。c
  // siderWidth: '190',
  onError: (err: any) => {
    $global.log(err);
  },
  onPageChange: (location: any) => {
    // $global.log("页面跳转了");
  },
  rightContentRender: (data: any) => {
    return React.createElement(RightContent);
  },
  // // 面包屑的渲染
  // breadcrumbRender: (routers = []) => {
  //   console.log(routers);

  //   // routers.forEach(router => ({router.separator :  '-'}))
  //   return [...routers];
  // },
  footerRender: (BasicLayoutProps: any) => {
    return React.createElement(DefaultFooter, {
      copyright: 'xxxx.com',
      links: [
        {
          key: 'ZH',
          title: '管理后台',
          href: 'https://xxxx.com',
          blankTarget: true,
        },
      ],
    });
  },
  //可以这样渲染 内容部分公用部分
  childrenRender: (children: any) => {
    if (
      history.location.pathname !== '/signIn' &&
      history.location.pathname !== '/404'
    ) {
      return React.createElement(
        PageContainer,
        { fixedHeader: true },
        children,
      );
    }
    return children;
  },
};
