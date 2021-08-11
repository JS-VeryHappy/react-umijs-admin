import { getObj } from './handler';

export default {
  'POST /api/workbench/chart': getObj.bind(null, {
    data: {
      list: [
        {
          item: '发呆',
          time: '早晨',
          number: 60,
        },
        {
          item: '发呆',
          time: '中午',
          number: 10,
        },
        {
          item: '发呆',
          time: '下午',
          number: 50,
        },
        {
          item: '发呆',
          time: '晚上',
          number: 10,
        },
        {
          item: '敲代码',
          time: '早晨',
          number: 70,
        },
        {
          item: '敲代码',
          time: '中午',
          number: 10,
        },
        {
          item: '敲代码',
          time: '下午',
          number: 80,
        },
        {
          item: '敲代码',
          time: '晚上',
          number: 0,
        },
        {
          item: '睡觉',
          time: '早晨',
          number: 0,
        },
        {
          item: '睡觉',
          time: '中午',
          number: 5,
        },
        {
          item: '睡觉',
          time: '下午',
          number: 0,
        },
        {
          item: '睡觉',
          time: '晚上',
          number: 100,
        },
      ],
    },
    timeout: 1000,
  }),
  'POST /api/workbench/list': getObj.bind(null, {
    data: {
      list: [
        {
          url: 'https://img.haoqu.org/file/2020/01-24/76478da6a20ca59b163d290fbcce52b4.jpg',
          title: '蟹老板在某项目中获得”无bug程序员“荣誉称号，值得鼓励！',
          describe: '一天前',
        },
        {
          url: 'https://img.haoqu.org/file/2020/01-24/a806fc78e99b8d54043b48bc10648948.jpg',
          title: '章鱼哥将某项目bug全部修复完成，成功上线',
          describe: '三天前',
        },
        {
          url: 'https://img.haoqu.org/file/2020/01-24/b25e37f2e6eb69ea9c2037b7cb0e655d.jpg',
          title: '震惊！痞老板某天中午点外卖没点饭，原因竟然是没看见！',
          describe: '一周前',
        },
        {
          url: 'https://img.haoqu.org/file/2020/01-24/a224a1ede3c3cdff510a418f974b416d.jpg',
          title: '派大星一天内写出一个完整项目，是我们学习的好榜样！',
          describe: '两周前',
        },
        {
          url: 'https://img.haoqu.org/file/2020/01-24/61026cb54aeed3e7d48730eb87242eed.jpg',
          title: '某项目上线前无bug，上线后n个bug，海绵宝宝已崩溃',
          describe: '一月前',
        },
      ],
    },
    timeout: 1000,
  }),
  'POST /api/workbench/group': getObj.bind(null, {
    data: {
      list: [
        {
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=339776857,3862571302&fm=26&gp=0.jpg',
          name: '司马懿',
          description: '有个蠢货四季都在扇扇子',
          tag: '近法',
        },
        {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1220309745,340208091&fm=11&gp=0.jpg',
          name: '典韦',
          description: '让我忘记疯狂',
          tag: '重战',
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2934485787,3779147842&fm=26&gp=0.jpg',
          name: '蔡文姬',
          description: '喜欢的宠物是阿典',
          tag: '法辅',
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1825415128,3020510221&fm=26&gp=0.jpg',
          name: '曹操',
          description: '苏醒了，猎杀时刻',
          tag: '轻战',
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3515962438,268417503&fm=11&gp=0.jpg',
          name: '甄姬',
          description: '人家抒发唉声时不要随便破坏氛围好吗',
          tag: '远法',
        },
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1709526763,3102966611&fm=15&gp=0.jpg',
          name: '夏侯惇',
          description: '……',
          tag: '物坦',
        },
      ],
    },
    timeout: 1000,
  }),
};
