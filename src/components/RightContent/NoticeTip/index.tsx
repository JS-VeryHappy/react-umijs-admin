import React, { useState, useEffect } from 'react';
import { Dropdown, Space } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useModel } from 'umi';

import NoticeTabs from './NoticeTabs';
import styles from './index.less';

const { Tab } = NoticeTabs;

interface NotificationData {
  avatar?: string;
  title?: string;
  datetime?: string;
  read: boolean;
}

const NoticeTip: React.FC<any> = props => {
  const { notification, setNotification } = useModel('useNoticeModel');
  const [visible, setVisible] = useState<boolean>(false);

  // 可以加入getInitialState
  useEffect(() => {
    setTimeout(() => {
      setNotification([
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '3 年前',
          read: false,
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          datetime: '3 年前',
          read: false,
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '这种模板可以区分多种通知类型',
          datetime: '3 年前',
          read: false,
        },
      ]);
    }, 3000);
  }, []);

  const setRead = (item: NotificationData, index: number) => {
    setNotification((notification: NotificationData[]) => {
      if (!notification[index].read) notification[index].read = true;
      return [...notification];
    });
  };

  // 全局点击事件, 用于判断面板是否关闭
  useEffect(() => {
    let target = null,
      icon = null,
      notice = null;
    let closeNoticeTabs = function(event: any) {
      target = event.target;
      icon = document.querySelector('.notice-icon');
      notice = document.querySelector('.notice-dropdown');
      if (icon?.contains(target)) return;
      if (!notice?.contains(target)) setVisible(false);
    };
    document.addEventListener('click', closeNoticeTabs);
    return function() {
      target = icon = notice = null;
      document.removeEventListener('click', closeNoticeTabs);
    };
  }, []);

  // 显示切换
  const toggleVisible = () => setVisible(!visible);

  const notice = (
    <div className={styles.notice}>
      <NoticeTabs>
        <Tab
          tabKey="notification"
          title="通知"
          data={notification}
          onClick={setRead}
        />
      </NoticeTabs>
    </div>
  );
  return (
    <Dropdown
      overlay={notice}
      visible={visible}
      overlayClassName="notice-dropdown"
    >
      <div className="notice-icon" onClick={toggleVisible}>
        <Space>
          <MessageOutlined />
        </Space>
      </div>
    </Dropdown>
  );
};

export default NoticeTip;
