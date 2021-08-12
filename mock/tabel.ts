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
    data: {
      'list|20': [
        {
          'id|1-20': 1,
          name: '@name',
        },
      ],
    },
  }),

  // 新增数据
  'POST /api/protable/proTableAddRow': getObj.bind(null, {
    data: {},
    mock: false,
    timeout: 1000,
    code: '0',
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
