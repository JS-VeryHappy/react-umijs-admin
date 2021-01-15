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
        path: '/user',
        locale: 'menu.user',
        name: '用户中心',
        icon: 'UserOutlined',
        routes: [
          {
            locale: 'menu.user.info',
            path: '/user/info',
            name: '个人资料',
            component: '@/pages/user/info/index',
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
