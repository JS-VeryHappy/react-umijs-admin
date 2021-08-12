/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

/**
 * 延迟函数
 * @param time
 */
export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * 请求防抖 同步立即执行专用
 * 注意 同步情况连续点击 在限制内 会返回undefined 注意判断
 * @param fn
 * @param time
 * @param immediate
 * @returns
 */
export const requestDebounce = (fn: any, time: number) => {
  let timer: any;
  return function () {
    if (timer) {
      return;
    }
    const args: any = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
    }, time);

    return fn.call(null, ...args);
  };
};

/**
 * 防抖函数
 * @param fn
 * @param time
 * @param immediate 是否启动立即执行 true 是
 * @returns
 */
export const debounce = (fn: any, time: number, immediate: boolean = false) => {
  let timer: any;
  return function () {
    if (immediate) {
      clearTimeout(timer);
      const now: any = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (now) {
        // @ts-ignore
        fn.call(this, ...arguments);
      }
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // @ts-ignore
        fn.call(this, ...arguments);
      }, time);
    }
  };
};

/**
 * 节流函数
 * @param fn
 * @param time
 * @param type 1 时间戳版本 2定时间版本
 * @returns
 */
export const throttle = (fn: any, time: number, type: number) => {
  let previous: number = 0;
  let timer: any;

  return function () {
    if (type === 1) {
      const now = Date.now();
      if (now - previous >= time) {
        // @ts-ignore
        fn.call(this, ...arguments);
        previous = now;
      }
    } else if (type === 2) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          // @ts-ignore
          fn.call(this, ...arguments);
        }, time);
      }
    }
  };
};
