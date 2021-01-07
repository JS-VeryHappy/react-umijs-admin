/**
 * 我是全局挂载吧需要引入 直接可以使用
 * 例如：
 * $global.log('测试打印信息')
 */

// @ts-ignore
const log = function log(...msg){
  if(process.env.NODE_ENV !== 'pro'){
    console.log(...msg);
  }
};

export default {
  log
};
