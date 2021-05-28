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
    path: '/',
    redirect: '/panel/workbench',
  },
  {
    path: '/join',
    component: '@/pages/join/index',
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
        path: '/panel',
        locale: 'menu.panel',
        name: '仪表盘',
        icon: 'DashboardFilled',
        routes: [
          {
            exact: true,
            locale: 'menu.panel.workbench',
            path: '/panel/workbench',
            name: '工作台',
            component: '@/pages/panel/workbench/index',
          },
          {
            locale: 'menu.panel.chart',
            path: '/panel/chart',
            name: '图表',
            component: '@/pages/panel/chart/index',
          },
          {
            locale: 'menu.panel.hookTest',
            path: '/panel/test',
            name: '自定义hook测试',
            component: '@/pages/test1',
          },
        ],
      }
    ],
  },
];

export default routes;
