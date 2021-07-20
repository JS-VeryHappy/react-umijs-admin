import type { RequestConfig } from 'umi';
import { ErrorShowType, history } from 'umi';

const requestConfig: RequestConfig = {
  timeout: 30000,
  errorConfig: {
    // 当后端接口不满足该规范的时候你需要通过该配置把后端接口数据转换为该格式，
    // 该配置只是用于错误处理，不会影响最终传递给页面的数据格式。
    adaptor: (resData) => {
      // 如果是http状态码错误
      if (!resData) {
        return {
          success: false,
          errorCode: 500,
          errorMessage: '系统错误',
          showType: ErrorShowType.ERROR_MESSAGE,
        };
      }
      if (resData.status && resData.error && resData.timestamp) {
        return {
          success: false,
          errorCode: resData.status,
          errorMessage: `${resData.status} ${resData.error}`,
          showType: ErrorShowType.ERROR_MESSAGE,
        };
      }
      // 如果http 状态 200 内部状态判断
      let showType = ErrorShowType.ERROR_MESSAGE;
      if (resData.code === '403') {
        showType = ErrorShowType.WARN_MESSAGE;
      }
      return {
        data: resData.data,
        success: resData.code === '0',
        errorCode: resData.code,
        errorMessage: resData.reason || '系统错误',
        showType,
      };
    },
  },
  middlewares: [
    // async function middlewareA(ctx, next) {
    //   console.log('我是请求中间件开始');
    //   await next();
    //   console.log('我是请求中间件结束');
    // },
  ],
  requestInterceptors: [
    function request(url, options) {
      return {
        url,
        options: { ...options, interceptors: true },
      };
    },
  ],
  responseInterceptors: [
    async function response(res) {
      if (res.status === 200) {
        const data = await res.clone().json();
        if (data.code === '403') {
          history.push('/login');
        }
      }
      return res;
    },
  ],
};

export default requestConfig;
