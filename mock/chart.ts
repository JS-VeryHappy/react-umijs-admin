import { getObj } from './handler';

export default {
  'POST /api/workbench/chart': getObj.bind(
    null,
    {
      list: [
        {
          item: '发呆',
          你: 30,
          我: 50,
          他: 70,
        },
        {
          item: '看书',
          你: 50,
          我: 30,
          他: 60,
        },
        {
          item: '敲代码',
          你: 70,
          我: 10,
          他: 60,
        },
        {
          item: '睡觉',
          你: 10,
          我: 10,
          他: 10,
        },
        {
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
