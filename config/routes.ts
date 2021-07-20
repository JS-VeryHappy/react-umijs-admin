import { IRoute } from 'umi';

export interface IRouteMenuConfig {
  /** 当前菜单名 */
  name: string;
  /** antd 的 icon name 和 url */
  icon?: string;
  /** 在菜单中隐藏他的子项 */
  hideChildren?: boolean;
  /** 默认为false 在菜单中只隐藏此项，子项往上提，仍旧展示 */
  flatMenu?: boolean;
  [key: string]: any;
}

export interface IRouteLayoutConfig {
  /** 默认 false */
  hideMenu?: boolean;
  /** 默认 false */
  hideNav?: boolean;
  /** 默认 false */
  hideFooter?: boolean;
  [key: string]: any;
}

/**
 * 路由配置
 */
export interface IBestAFSRoute extends IRoute {
  /** 权限：https://yuque.antfin-inc.com/bigfish/best_afs/nxuhgb */
  access?: string;

  /** 当前页面的面包屑是否隐藏 */
  showBreadcrumb?: boolean;

  /** 默认为 false，在菜单中隐藏此项包括子项 */
  menu?: false | IRouteMenuConfig;

  /** 默认为 true ，是否显示 Layout */
  layout?: boolean | IRouteLayoutConfig;
}

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
        ],
      },
      {
        path: '/tabel',
        locale: 'tabel.list',
        name: '表格',
        icon: 'BarChartOutlined',
        component: '@/pages/tabel/index',
      },
    ],
  },
];

export default routes;
