import { list } from './handler';



export default {
  'POST /api/user/login': list({
    name: '周大仙',
  }),
};
