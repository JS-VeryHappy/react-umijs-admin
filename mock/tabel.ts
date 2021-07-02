import { getPagination } from './handler';

export default {
  // list测试
  'POST /api/table/list': getPagination.bind(
    null,
    {
      'list|20': [
        {
          'id|+1': 1,
          avatar: "@image('100x100','@color')",
          title: '@ctitle',
          datetime: '@datetime',
          description: '@title',
          'type|1-3': 1,
        },
      ],
    },
    0,
  ),
};
