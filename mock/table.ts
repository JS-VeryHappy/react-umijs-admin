import { getObj } from './handler';

/**
 * mockjs 定义
 * https://www.jianshu.com/p/d812ce349265
 */
const SelectData = [
  {
    id: 9,
    name: '初级置业顾问',
  },
  {
    id: 8,
    name: '中级置业顾问',
  },
  {
    id: 7,
    name: '高级置业顾问',
  },
  {
    id: 6,
    name: '资深置业顾问',
  },
  {
    id: 5,
    name: '金牌置业顾问',
  },
  {
    id: 18,
    name: '见习项目经理',
  },
  {
    id: 17,
    name: '初级项目经理',
  },
  {
    id: 16,
    name: '中级项目经理',
  },
  {
    id: 15,
    name: '高级项目经理',
  },
  {
    id: 14,
    name: '初级项目秘书',
  },
  {
    id: 13,
    name: '中级项目秘书',
  },
  {
    id: 12,
    name: '高级项目秘书',
  },
  {
    id: 11,
    name: '资深项目秘书',
  },
  {
    id: 10,
    name: '金牌项目秘书',
  },
];


// 定义数据类型
// var data = Mock.mock()

export default {
  '/api/protable/select': getObj.bind(null, SelectData, 1000),

  // protable list测试

  // //商品名称
  // "goodsName": "@ctitle(10)",
  // //商品地址
  // "goodsAddress": "@county(true)",
  // //商品等级评价★
  // "goodsStar|1-5": "★",
  // //商品图片
  // "goodsImg": "@Image('100x100','@color','小甜甜')",
  // //商品售价
  // "goodsSale|30-500": 30

  'POST /api/protable/list': getObj.bind(
    null,
    {
      total: 20,
      // 20条数据
      'list|20': [
        {
          // 商品种类
          'id|+1': 0,
          // 商品Id
          'instanceId|0-500': 1,
          deptName: '运营三部',
          startDate: '2020-10-20',
          endDate: '2020-11-09',
          dateText: '2020.10.20-2020.11.09',
          decideTime: 1,
          decideTimeValue: '签约时间',
          channelName: '自销,分销,工程抵款,关系户,其他',
          positionName: '初级项目经理',
          parkUnit: null,
          park: 1,
          parkValue: null,
          notParkUnit: null,
          notPark: null,
          notParkValue: null,
          note: '',
          projectName: '中交中央公园',
          applyTime: '2020-10-26 09:17:33',
          applyByName: '任亚军',
          applyByRoleName: '项目经理',
          auditRoleName: '事总',
          lastAuditByName: null,
          lastAuditRoleName: null,
          lastAuditTime: null,
          lastResultNote: null,
        },
      ],
    },
    1000,
  ),
};
