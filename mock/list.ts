import { getObj } from './handler';

const ListData = {
  list: [
    {
      title: 'Alipay',
      content: `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
      我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`,
    },
    {
      title: 'Alipay2',
      content: `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。
      我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`,
    },
    {
      title: 'Alipay3',
      content: `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。`,
    },
  ],
};

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
  'POST /api/message/list': getObj.bind(null, {
    data: ListData,
  }),
  // 看板数据
  'POST /api/board/data': getObj.bind(null, {
    data: boardData,
  }),
};
