import React from 'react';
import { history, Link } from 'umi';
import { DefaultFooter, PageContainer } from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';

//获取本地配置 调试样式
// const setting = localStorage.getItem('layoutSettings')
//   ? //@ts-ignore
//     JSON.parse(localStorage.getItem('layoutSettings'))
//   : {};

/**
 * Layout 插件允许通过运行时的配置退出登陆、自定义 ErrorBoundary 等功能。
 * https://procomponents.ant.design/components/layout/#prolayout
 */

/* 此layout 文件是app.ts 的运行时布局配置 */
export default (config: any) => {
  return {
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
        // 如果没有登录，重定向到 login
        // if (!config?.initialState?.name) {
        //   history.push('/login');
        // }
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
        if (history.location.pathname !== '/login' && history.location.pathname !== '/404') {
          return React.createElement(
            PageContainer,
            {
              fixedHeader: false,
              header: {
                // title: "",
                // breadcrumb: []
              },
            },
            children,
          );
        }
        return children;
      },
      //配置开发模式下文档地址
      links:
        process.env.UMI_ENV === 'local'
          ? [
              React.createElement(
                Link,
                {
                  to: '/~docs',
                  target: '_blank',
                },
                [
                  React.createElement(BookOutlined, {
                    key: 'icon',
                  }),
                  React.createElement(
                    'span',
                    {
                      key: 'text',
                    },
                    '业务组件文档',
                  ),
                ],
              ),
              React.createElement(
                Link,
                {
                  to: '/umi/plugin/openapi',
                  target: '_blank',
                },
                [
                  React.createElement(LinkOutlined, {
                    key: 'icon',
                  }),
                  React.createElement(
                    'span',
                    {
                      key: 'text',
                    },
                    'openAPI 文档',
                  ),
                ],
              ),
            ]
          : [],
    },
    // ...setting,
  };
};
