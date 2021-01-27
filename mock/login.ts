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

const notification = {
  list: [
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '3 年前',
      read: false,
    },
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '3 年前',
      read: false,
    },
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: '这种模板可以区分多种通知类型',
      datetime: '3 年前',
      read: false,
    },
  ],
};

const message = {
  'list|3': [
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '曲丽丽 评论了你',
      datetime: '3 年前',
      read: false,
      description: '描述信息描述信息描述信息',
    },
  ],
};

const event = {
  list: [
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '3 年前',
      read: false,
    },
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '3 年前',
      read: false,
    },
    {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: '这种模板可以区分多种通知类型',
      datetime: '3 年前',
      read: false,
    },
  ],
};

export default {
  'POST /api/user/login': getObj.bind(null, userinfo, 1000),
  'POST /api/user/isLogin': getObj.bind(null, userinfo, 0),

  'POST /api/notice/notification': getObj.bind(null, notification, 1000),
  'POST /api/notice/message': getObj.bind(null, message, 1500),
  'POST /api/notice/event': getObj.bind(null, event, 2000),
};
