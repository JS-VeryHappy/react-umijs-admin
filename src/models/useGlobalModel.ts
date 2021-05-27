// 我是约定@umijs/plugin-model写法、可以写很多全局状态管理
import { useState, useCallback, useEffect } from 'react';
import type { ProSettings } from '@ant-design/pro-layout';

interface DictionariesItem {
  label: string;
  value: string;
}

interface GlobalModelType {
  dictionaries?: DictionariesItem[];
  layoutSettings?: ProSettings;
}

export default function useGlobalModel() {
  const [globalInfo, setGlobalInfo] = useState<GlobalModelType>({
    dictionaries: [],
    layoutSettings: {
      title: 'Ant Design Pro',
      navTheme: 'light',
      layout: 'side',
      contentWidth: 'Fluid',
      splitMenus: false,
      primaryColor: '#1890ff',
      fixSiderbar: true,
      fixedHeader: true,
    },
  });

  // //配置保存在本地
  // useEffect(() => {
  //   let layoutSettings = globalInfo.layoutSettings;
  //   if (localStorage.getItem('layoutSettings')) {
  //     //@ts-ignore
  //     layoutSettings = JSON.parse(localStorage.getItem('layoutSettings'));
  //   }
  //   localStorage.setItem('layoutSettings', JSON.stringify(layoutSettings));
  //   console.log('====================================');
  //   console.log(layoutSettings);
  //   console.log('====================================');
  // }, [globalInfo.layoutSettings])
  useEffect(() => {
    if (localStorage.getItem('layoutSettings')) {
      // @ts-ignore
      const layoutSettings = JSON.parse(localStorage.getItem('layoutSettings'));
      setGlobalInfo({
        ...globalInfo,
        layoutSettings,
      });
    }
  }, []);

  const setGlobalDictionaries = useCallback(dictionaries => {
    return setGlobalInfo({
      ...globalInfo,
      dictionaries,
    });
  }, []);

  const setLayoutSettings = useCallback(settings => {
    localStorage.setItem('layoutSettings', JSON.stringify(settings));
    return setGlobalInfo({
      ...globalInfo,
      layoutSettings: settings,
    });
  }, []);

  const getGlobalInfo = (field: string) => {
    if (!field) {
      return globalInfo;
    } 
      // @ts-ignore
      return globalInfo[field];
    
  };

  return {
    globalInfo,
    getGlobalInfo,
    setGlobalDictionaries,
    setLayoutSettings,
  };
}
