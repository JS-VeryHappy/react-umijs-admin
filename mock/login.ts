import { getObj } from './handler';

const userinfo = {
  phone: '153****7727',
  name: '周大仙',
  email: '609435061@qq.com',
  position: 'Web前端开发工程师',
  desc: '我是一个很有想法的人、你不要骗我哦！我很害怕！！！！',
  tags: ['装逼', '混日子', '吐槽', '打瞌睡', '打产品'],
  address: '我家住在黄土高坡哦...',
};

export default {
  'POST /api/user/login': getObj.bind(null, userinfo, 1000),
  'POST /api/user/isLogin': getObj.bind(null, userinfo, 0),
};
