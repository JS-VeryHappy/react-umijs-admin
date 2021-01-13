import { objDataTimeout, objData } from './handler';

export default {
  'POST /api/user/login': (req: any, res: any) => objDataTimeout(req, res, {
    name: '周大仙',
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  }),
  'POST /api/user/isLogin': objData({
    name: '周大仙'
  }),
};
