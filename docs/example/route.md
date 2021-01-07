---
title: 路由配置样例
nav:
  title: 使用样例
---

# 路由配置样例


```js

import { IBestAFSRoute } from '@umijs/plugin-layout';

export const routes: IBestAFSRoute[] =  [
  {
    path: '/404',
    component: '@/pages/404',
    layout:{
      hideFooter:true, //是否隐藏底部
      hideMenu:true,//是否隐藏菜单
      hideNav:true,//是否隐藏导航
    },
  },
  {
    path: '/signIn',
    component: '@/pages/login/index',
    layout:{
      hideFooter:true,
      hideMenu:true,
      hideNav:true,
    },
  },
  {
    path: '/signInM',
    component: '@/pages/login/mobile',
    layout:{
      hideFooter:true,
      hideMenu:true,
      hideNav:true,
    },
  },
  {
    path: '/',
    name:"首页",
    icon:"AppleFilled",
    component: '@/pages/home/index',
    access:'checkAuth',//验证的权限
  },
  {
    path: '/proform',
    name:"ProForm",
    icon:"AppleFilled",
    routes:[
      {
        path: '/proform/ordinary',
        name:"内嵌普通表单",
        component: '@/pages/proForm/ordinary/index',
      },
      {
        path: '/proform/ordinaryModel',
        name:"弹窗普通表单",
        component: '@/pages/proForm/ordinaryModel/index',
      },
      {
        path: '/proform/steps',
        name:"内嵌分步骤卡片表单",
        component: '@/pages/proForm/steps/index',
      },
      {
        path: '/proform/stepsModel',
        name:"弹窗分步骤卡片表单",
        component: '@/pages/proForm/stepsModel/index',
      }
    ]
  },
  {
    path: '/menus',
    name:"我有子菜单",
    icon:"GithubFilled",
    component: '@/pages/menus/_layout',
    access:'checkAuth',
    routes:[
      {
        path: '/menus/menu',
        name:"子菜单",
        icon:"CodeSandboxCircleFilled",
        component: '@/pages/menus/menu/index',
      },
      {
        path: '/menus/menu1',
        name:"子菜单1",
        icon:"CodeSandboxCircleFilled",
        component: '@/pages/menus/menu1/index',
      },
    ]
  },
  {
    path: '/noAuth',
    name:"我没有权限",
    icon:"CodepenCircleFilled",
    access:'checkAuth',
  },
  {
    path: '/public',
    name:'隐藏父级',
    icon:"LinkedinFilled",
    component: '@/layouts/index',
    flatMenu:true,//隐藏父级 子集上提
    routes:[
      {
        path: '/public/form',
        name:"form",
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/form/index',
      },
      {
        path: '/public/menu2',
        name:"我会隐藏左侧菜单",
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/menu3/index',
        layout:{
          hideFooter:true,
          hideMenu:true,
          hideNav:false,
        },
      },
      {
        path: '/public/menu3',
        name:"子菜单3",
        disabled:true,
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/menu3/index',
      },
    ]
  },
  {
    path: '/protable',
    name:"表格测试",
    icon:"GithubFilled",
    component: '@/pages/protable/',
    access:'checkAuth',
  },
];

```
