/**
 * 权限菜单配置文件
 */
import { IBestAFSRoute } from '@umijs/plugin-layout';

const routes: IBestAFSRoute[] = [
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
    path: '/login',
    component: '@/pages/login/index',
    layout: {
      hideFooter: true,
      hideMenu: true,
      hideNav: true,
    },
  },
  {
    component: '@/layouts/index',
    flatMenu: true, //隐藏父级 子集上提
    routes: [
      {
        locale: 'menu.home',
        path: '/',
        name: '首页',
        icon: 'AppleFilled',
        component: '@/pages/home/index',
        access: 'checkAuth',
      },
      {
        locale: 'menu.workbench',
        path: '/workbench',
        name: '工作台',
        icon: 'DashboardFilled',
        component: '@/pages/workbench/index',
        access: 'checkAuth',
      },
      {
        locale: 'menu.protable',
        path: '/protable',
        name: '表格',
        icon: 'AppleFilled',
        component: '@/pages/protable/index',
        access: 'checkAuth',
      },
    ],
  },
];

export default routes;
