# 框架说明
> 1. Umijs及其生态 进行二次封装的脚手架。
> 2. 说明中的业务资源和相关配置需要根据业务自行补齐

# 框架特点
> 1. 组件思想：从UI组建提升为业务组件，业务组件的含义是指以项目的业务、项目UI呈现形式为主的组件、具有特定业务性、贴近业务本身。
> 2. 通用性：具备相同业务通用性（例如：一家公司有多个管理后台、UI呈现都基本一致、可以使用相同的组件）。
> 3. 完整文档说明：使用了dumi文档扩展，让项目说明、业务说明、组件说明、资源说明都具备快速学习、快读理解。
> 4. 脚手架封装二次封装表单和表格等组件、让编写业务可以配置化。

## 项目架构

Umi(React + AntD + Less + TypeScript + dumi )

Umi中文网： [https://umijs.org/zh-CN/docs/](https://umijs.org/zh-CN/docs)

React官网： [https://react.docschina.org/](https://react.docschina.org/)

AntDesign中文网： [https://ant.design/index-cn](https://ant.design/index-cn)

AntDesign-Pro： [https://beta-pro.ant.design/index-cn/](https://beta-pro.ant.design/index-cn/)

AntDesign-Procomponents： [https://procomponents.ant.design/](https://procomponents.ant.design/)

Less官网： [http://lesscss.cn/](http://lesscss.cn/)

TypeScript官网： [https://www.tslang.cn/](https://www.tslang.cn/)

Dumi中文网： [https://d.umijs.org/zh-CN/](https://d.umijs.org/zh-CN/)



##组件说明（必须查看整个说明）
组件文档、使用说明: [xxxxx/~doc](xxxxx/~doc)
路径查看文档说明

## 文件结构

```txt
├── README.md //说明文件
├── config //配置目录
│   ├── config.dev.ts //线上开发环境配置文件
│   ├── config.local.ts //本地开发环境配置文件
│   ├── config.pro.ts //线上正式环境配置文件
│   ├── config.testing.ts //线上测试环境配置文件
│   ├── config.ts  //总配置入口文件
│   ├── layout.ts //后台layout配置文件
│   ├── dumi.ts //dumi文档配置
│   ├── theme.ts //全局样式变量配置
│   ├── proxy.ts //代理配置文件
│   └── routes.ts //路由配置文件
├── docs //公用文档目录
│   └── demo.md //文档说明样例
├── mock //mock模拟数据目录
│   └── api.ts 
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── access.ts //umijs layout权限验证钩子
│   ├── app.ts //umijs  约定运行时配置文件
│   ├── assets //资源存放目录
│   │   └── images
│   ├── components //组件目录
│   │   ├── BasicsBusinessCustom //基础业务组件
│   │   ├── ErrorBoundary //全局错误捕获组件
│   │   ├── ProFormCustom //表单封装组件
│   │   ├── Exception //全局异常等组件分组
│   │   ├── ModalGroupCustom //弹窗封装组件
│   │   ├── RightContent //顶部栏组件
│   │   └── TableCustom //表格封装组件
│   ├── global.css //全局样式文件
│   ├── layouts //全局路由公用layout 可以选使用
│   │   └── index.tsx
│   ├── locales //国际化
│   │   ├── en-US.js
│   │   └── zh-CN.js
│   ├── models //全局状态目录  命名已XXXXModel接口
│   │   ├── globalUserModel.ts //dva 写法
│   │   ├── useGlobalModel.ts //umijs 写法
│   │   └── useUserModel.ts
│   ├── pages
│   │   └── document.ejs //html文件配置
│   ├── services //请求目录
│   │   ├── config.ts //请求拦截器
│   │   ├── handler.ts //请求类型封装
│   │   └── index.ts //存放请求
│   ├── e2e //浏览器测试
│   │   ├── baseLayout.e2e.js //公用测试文件 格局routes 自动测试页面
│   └── utils //公用工具或方法存放目录
│       ├── globalUtils.ts //全局方法、webpack编译时自动加载 到全局
│       ├── utils.test.ts //函数测试
│       └── index.ts //业务公用 单独引入使用
├── tests //自动化测试扩展编写
├── tsconfig.json //ts配置文件
└── typings.d.ts //ts类型声明
```

## 打包


本地开发环境： `yarn start | npm run start`

线上开发环境： `npm run build:dev`

线上测试环境： `npm run build:testing`

线上正式环境： `npm run build`


### 地址和说明


项目逻辑，交互，功能请阅读RP

项目GIT： ``

项目RP： ``

项目UI： [蓝湖地址]()

接口API： [接口文档]()

测试JIRA： [JIRA地址]()



### 测试/开发登录路径


/login



### 账号


# LICENSE
MIT