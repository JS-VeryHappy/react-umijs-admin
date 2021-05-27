import { useEffect, useRef } from 'react';

type CallBack<T> = (prev: T | undefined) => void;
type Config = { immediate: boolean };

/**
 * useWatch
 * @param dep 监听对象
 * @param callback
 * @param config 监听设置
 */

function useWatch<T>(dep: T, callback: CallBack<T>, config: Config = { immediate: false }) {
  // 监听禁止标志
  const stop = useRef<boolean>(false);
  // 初始化标志
  const inited = useRef<boolean>(false);
  const prev = useRef<T>();
  const { immediate } = config;

  useEffect(() => {
    if (!stop.current) {
      const execute = () => callback(prev.current);
      // 防止immediate为false时, 首次加载就执行
      if (!inited.current) {
        inited.current = true;
        if (immediate) {
          execute();
        }
      } else {
        execute();
      }
      prev.current = dep;
    }
  }, [dep]);

  return () => {
    stop.current = true;
  };
}

export { useWatch };
