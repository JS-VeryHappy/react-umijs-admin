/**
 * 权限菜单配置文件
 */
import { IBestAFSRoute } from '@umijs/plugin-layout';

export default [
  {
    path: '/404',
    component: '@/components/Exception/404',
    layout: {
      hideFooter: true,
      hideMenu: true,
      hideNav: true,
    },
  },
  {
    path: '/signIn',
    component: '@/pages/login/index',
    layout: {
      hideFooter: true,
      hideMenu: true,
      hideNav: true,
    },
  },
  {
    locale: 'menu.home',
    path: '/',
    name: '首页',
    icon: 'AppleFilled',
    component: '@/pages/home/index',
    access: 'checkAuth',
  },
];
