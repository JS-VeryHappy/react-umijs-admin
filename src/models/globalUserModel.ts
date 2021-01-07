/**
 * 尽量使用umi 简易数据量 dva可能在ie上存在兼容问题
 * 我是dva数据写法
 */
// @ts-ignore
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { isLogin } from '@/services';

export interface GlobalUserModelType {
  namespace: 'globalUser';
  state: any;
  effects: {
    queryUserInfo: Effect;
  };
  reducers: {
    getInfo: Reducer<any>;
  };
  subscriptions: { setup: Subscription };
}

const globalUserModel: GlobalUserModelType = {
  namespace: 'globalUser',
  state: {
    info: {},
  },
  effects: {
    * queryUserInfo({ payload }, { call, put }) {

      const res = yield call(isLogin, payload);
      // put函数是用来发送action的
      yield put({
        type: 'getInfo',
        payload: res.data,
      });
    },
  },
  reducers: {
    getInfo(state, { payload }) {
      console.log(state, payload);
      return {
        ...state,
        ...payload,
      };
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // console.log(pathname);
        // if (pathname === '/') {
        //   dispatch({
        //     type: 'queryUserInfo',
        //   });
        // }
      });
    },
  },
};
export default globalUserModel;
