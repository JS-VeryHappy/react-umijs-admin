import { getObj } from './handler';

export default {
  'POST /api/workbench/chart': getObj.bind(
    null,
    {
      list: [
        {
          id: 1,
          item: '发呆',
          你: 30,
          我: 50,
          他: 70,
        },
        {
          id: 2,
          item: '看书',
          你: 50,
          我: 30,
          他: 60,
        },
        {
          id: 3,
          item: '敲代码',
          你: 70,
          我: 10,
          他: 60,
        },
        {
          id: 4,
          item: '睡觉',
          你: 10,
          我: 10,
          他: 10,
        },
        {
          id: 5,
          item: '知乎',
          你: 70,
          我: 50,
          他: 60,
        },
      ],
    },
    2000,
  ),
};
