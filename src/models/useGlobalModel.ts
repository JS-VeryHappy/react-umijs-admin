// 我是约定@umijs/plugin-model写法、可以写很多全局状态管理
import { useState, useCallback } from 'react';

export default function useGlobalModel() {


  interface DictionariesItem {
    label: string;
    value: string;
  }

  interface GlobalModelType  {
    dictionaries?: DictionariesItem[];
  }

  const [globalInfo, setGlobalInfo] = useState<GlobalModelType>({
    dictionaries: [],
  });

  const setGlobalDictionaries = useCallback((dictionaries) => {
    return setGlobalInfo({
      ...globalInfo,
      dictionaries: dictionaries,
    });
  }, []);

  const getGlobalInfo = (field: string) => {
    if (!field) {
      return globalInfo;
    } else {
      // @ts-ignore
      return globalInfo[field];
    }
  };

  return {
    globalInfo,
    getGlobalInfo,
    setGlobalDictionaries,
  };
}
