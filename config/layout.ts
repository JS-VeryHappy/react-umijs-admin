import React from 'react';
import { history } from 'umi';
import { DefaultFooter, PageContainer } from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';

//获取本地配置
const setting = localStorage.getItem('layoutSettings')
  ? //@ts-ignore
    JSON.parse(localStorage.getItem('layoutSettings'))
  : {};

/**
 * Layout 插件允许通过运行时的配置退出登陆、自定义 ErrorBoundary 等功能。
 * https://procomponents.ant.design/components/layout/#prolayout
 */

/* 此layout 文件是app.ts 的运行时布局配置 */
export default {
  ...{
    //菜单显示模式
    layout: 'side',
    navTheme: 'light',
    // siderWidth: 208,
    //发生错误后的回调（可做一些错误日志上报，打点等）。c
    onError: (err: any) => {
      $global.log(err);
    },
    onPageChange: (location: any) => {
      // $global.log("页面跳转了");
    },
    rightContentRender: (props: any) => {
      return React.createElement(RightContent, props);
    },
    //自定义页脚
    footerRender: (BasicLayoutProps: any) => {
      return React.createElement(DefaultFooter);
    },
    //可以这样渲染 内容部分公用部分
    childrenRender: (children: any) => {
      if (
        history.location.pathname !== '/login' &&
        history.location.pathname !== '/404'
      ) {
        return React.createElement(
          PageContainer,
          { fixedHeader: false },
          children,
        );
      }
      return children;
    },
  },
  ...setting,
};
