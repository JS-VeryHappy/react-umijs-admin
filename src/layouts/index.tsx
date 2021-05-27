import React, { useState, useEffect, useRef } from 'react';
import { SettingDrawer } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import { message } from 'antd';

export default function(props: {
  location: { pathname: string };
  children: {} | null | undefined;
}) {
  $global.log('我是全局layouts钩子。');

  // 图形界面来设置 layout 的配置。不建议在正式环境中使用
  const { globalInfo, setLayoutSettings } = useModel('useGlobalModel');
  const loadingRef = useRef<boolean>(false);

  const onSettingChange = (changeSetting: any) => {
    if (loadingRef.current) {
      setLayoutSettings(changeSetting);
      message.info('此功能不适用于正式开发项目、选择后请手动刷新体验');
      // window.location.reload();
    }
  };

  useEffect(() => {
    loadingRef.current = true;
  }, []);

  return (
    <>
      {props.children}
      <SettingDrawer
        getContainer={() => document.getElementById('root')}
        settings={globalInfo.layoutSettings}
        onSettingChange={onSettingChange}
      />
    </>
  );
}
