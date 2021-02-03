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

const boardData = [
  { key: '1', year: '1992', value: 4, address: '看风景看风景卡·' },
  { key: '2', year: '1993', value: 3.5, address: '看风景看风景卡·' },
  { key: '3', year: '1994', value: 5, address: '看风景看风景卡·' },
  { key: '4', year: '1995', value: 4.9, address: '看风景看风景卡·' },
  { key: '5', year: '1996', value: 6, address: '看风景看风景卡·' },
  { key: '6', year: '1997', value: 7, address: '看风景看风景卡·' },
  { key: '7', year: '1998', value: 9, address: '看风景看风景卡·' },
  { key: '8', year: '1999', value: 13, address: '看风景看风景卡·' },
];

export default {
  // list测试
  'POST /api/message/list': getObj.bind(null, ListData, 0),
  // 看板数据
  'POST /api/board/data': getObj.bind(null, boardData, 0),
};
