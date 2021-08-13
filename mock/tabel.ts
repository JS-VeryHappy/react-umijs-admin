import { getPagination, getObj } from './handler';

export default {
  // list测试
  'POST /api/table/list': getPagination.bind(null, {
    data: {
      'list|20': [
        {
          'id|+1': 1,
          avatar: "@image('100x100','@color')",
          title: '@ctitle',
          datetime: '@datetime',
          description: '@title',
          'user_id|+1|1-20': 1,
          'status|1-3': 1,
          'type|1-3': 1,
        },
      ],
    },
    timeout: 1000,
  }),

  // list测试
  'POST /api/table/userlist': getObj.bind(null, {
    data: [
      {
        id: 1,
        name: '@name',
      },
      {
        id: 2,
        name: '@name',
      },
      {
        id: 3,
        name: '@name',
      },
      {
        id: 4,
        name: '@name',
      },
      {
        id: 5,
        name: '@name',
      },
      {
        id: 6,
        name: '@name',
      },
      {
        id: 7,
        name: '@name',
      },
      {
        id: 8,
        name: '@name',
      },
      {
        id: 9,
        name: '@name',
      },
      {
        id: 10,
        name: '@name',
      },
      {
        id: 11,
        name: '@name',
      },
      {
        id: 12,
        name: '@name',
      },
      {
        id: 13,
        name: '@name',
      },
      {
        id: 14,
        name: '@name',
      },
      {
        id: 15,
        name: '@name',
      },
      {
        id: 16,
        name: '@name',
      },
      {
        id: 17,
        name: '@name',
      },
      {
        id: 18,
        name: '@name',
      },
      {
        id: 19,
        name: '@name',
      },
      {
        id: 20,
        name: '@name',
      },
    ],
  }),

  // 新增数据
  'POST /api/protable/proTableAddRow': getObj.bind(null, {
    data: {},
    mock: false,
    timeout: 1000,
    // code: -1,
    // reason: '请求错误',
  }),
  // 详情数据
  'POST /api/protable/proTableDetails': getObj.bind(null, {
    data: {
      'id|+1': 1,
      avatar: "@image('100x100','@color')",
      title: '@ctitle',
      datetime: '@datetime',
      description: '@title',
      'user_id|+1|1-20': 1,
      'status|1-3': 1,
      'type|1-3': 1,
    },
    timeout: 1000,
    // code: -1,
    // reason: '请求错误',
  }),
};
