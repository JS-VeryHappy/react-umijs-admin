import { resolve } from 'path';
import { defineConfig } from 'umi';
import proxy, { devServer } from './proxy';
import routes from './routes';
import dumi from './dumi';
import theme from './theme';
// import { join } from 'path';

// const OpenBrowser = require('open-browser-webpack-plugin');

export default defineConfig({
  /**
   * https://umijs.org/zh-CN/docs/fast-refresh
   * 快速刷新（Fast Refresh）
   * 开发环境下，可以保持组件状态，同时编辑提供即时反馈。
   */
  fastRefresh: {},
  /**
   * Umi 默认编译 node_modules 下的文件，带来一些收益的同时，也增加了额外的编译时间。
   * 如果不希望 node_modules 下的文件走 babel 编译，可通过以下配置减少 40% 到 60% 的编译时间。
   */
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  // title: '',
  base: '/',
  // 为所有非三方脚本加上 crossorigin="anonymous" 属性，通常用于统计脚本错误。
  crossorigin: false,
  //开启 TypeScript 编译时类型检查
  forkTSChecker: {},
  //hash配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  hash: true,
  //生成map文件
  devtool: 'source-map',
  devServer: devServer,
  // 代理配置(跨域处理)
  proxy: proxy,
  //路由 不配置 默认为约定式路由
  routes: routes,
  // 别名配置
  alias: {},
  /**
   * 配置 external
   * 对于一些大尺寸依赖，比如图表库、antd 等，可尝试通过 externals 的配置引入相关 umd 文件，减少编译消耗
   */
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'antd': 'antd',
  },
  //配置额外的 meta 标签。数组中可以配置key:value形式的对象。
  // metas:[],
  //配置 <head> 里的额外脚本，数组项为字符串或对象。
  // headScripts:[],
  // 配置 <body> 里的额外脚本。。
  scripts: [
    'https://g.alicdn.com/dingding/dinglogin/0.0.5/ddLogin.js',
    // 'https://lib.baomitu.com/antd/4.9.1/antd.min.js',
    // '//unpkg.com/react@16.14.0/umd/react.production.min.js',
    // '//unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js'
  ],
  //配置额外的 link 标签。
  // links:[],
  /**
   * 配置额外 CSS。
   * styles: [
   *`body { color: red; }`,
   * `https://a.com/b.css`,
   * ],
   */
  styles: [
    // 'https://lib.baomitu.com/antd/4.9.1/antd.min.css'
  ],
  //配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。
  //配置主题，实际上是配 less 变量。
  /**
   * https://ant.design/docs/react/customize-theme-cn
   * theme: {
   * '@primary-color': '#1DA57A',
   *},
   */
  theme: theme,
  //targets
  //配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件
  inlineLimit: 10000,
  //配置额外的 umi 插件。
  // plugins:[],

  // chunks: ['vendors', 'umi'],
  chainWebpack(config, { env, webpack, createCSSRule }) {
    //引入全局公用方法
    config.plugin('$global').use(
      //@ts-ignore
      new webpack.ProvidePlugin({
        $global: [resolve(`src/utils/globalUtils.ts`), 'default'],
      }),
    );
    //自动打开浏览器插件
    // config
    //   .plugin('$open-browser-webpack-plugin')
    //   .use(new OpenBrowser({ url: 'http://127.0.0.1:8080' }));

    //如果是build下js/css分组
    if (env === 'production') {
      config.output
        .filename(`js/${config.toConfig().output.filename}`)
        .chunkFilename(`js/${config.toConfig().output.chunkFilename}`);

      config.plugin('extract-css').tap((args) => {
        return [
          {
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            ignoreOrder: true,
          },
        ];
      });
    }
  },
  // 使用 antd
  antd: {
    dark: false,
    compact: false,
  },
  // 暂时关闭
  pwa: false,
  // 使用过 dva 目前内置版本是 ^4.0.0
  // 内置 dva，默认版本是 ^2.6.0-beta.20，如果项目中有依赖，会优先使用项目中依赖的版本。
  // 约定是到 model 组织方式，不用手动注册 model
  // 文件名即 namespace，model 内如果没有声明 namespace，会以文件名作为 namespace
  // 内置 dva-loading，直接 connect loading 字段使用即可
  // dva: {
  //   immer: true, // 表示是否启用 immer 以方便修改 reducer
  //   hmr: true, // 表示是否启用 dva model 的热更新
  // },
  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行
  dynamicImport: {
    // 无需 level, webpackChunkName 引入 tsx时候看看 tsconfig.json配置了相关配置没
    loading: '@/components/Exception/Loading', //指向 loading 组件文件
  },
  //配置 html 的输出形式，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速
  // exportStatic:{}
  //启动ssr渲染
  // ssr: {},
  // //配置即可拥有 Ant Design 的 Layout
  layout: {
    // name: '后台管理系统'
    locale: true,
  },
  // request请求配置
  request: {
    dataField: 'data',
  },
  // 国际化配置 https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  /**
   * 替换压缩器为 esbuild
   */
  esbuild: {},

  //加载dumi文档配置
  ...dumi,

  autotipsComponents: {
    enable: true,
    exclude: ['/Example'],
  },

  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
      // schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
  ],
});
