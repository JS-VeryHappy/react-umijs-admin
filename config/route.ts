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
            exact: true,
            locale: 'menu.panel.dashBoard',
            path: '/panel/dashBoard',
            name: '数据1',
            component: '@/pages/panel/dashBoard/index',
          },
          {
            locale: 'menu.panel.spot',
            path: '/panel/spot',
            name: '视图',
            component: '@/pages/panel/spot/index',
          },
        ],
      },
      {
        path: '/user',
        locale: 'menu.user',
        name: '用户中心',
        icon: 'UserOutlined',
        routes: [
          {
            locale: 'menu.user.info1',
            path: '/user/info1',
            name: '个人资料1',
            component: '@/pages/user/info1/index',
          },
          {
            locale: 'menu.user.info2',
            path: '/user/info2',
            name: '个人资料2',
            component: '@/pages/user/info2/index',
          },
          {
            locale: 'menu.user.message',
            path: '/user/message',
            name: '消息查看',
            component: '@/pages/user/message/index',
          },
        ],
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
