import { getObj } from './handler';

const ListData = [
  {
    name: 'wqwerwerwtretwe',
    constent: 'kdjsaafyuiyubg',
    count: 12,
  },
  {
    name: 'dgfgfsdhsh',
    constent: 'CZCZCZCXZCZ',
    count: 33,
  },
  {
    name: 'afdfswf',
    constent: 'HGHHGJ',
    count: 56,
  },
];

export default {
  // list测试
  'POST /api/message/list': getObj.bind(null, ListData, 0),
};
