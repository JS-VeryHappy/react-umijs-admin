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
  description?: string;
}

const NoticeTip: React.FC<any> = props => {
  const [visible, setVisible] = useState<boolean>(false);

  const {
    notification,
    message,
    event,
    setNotification,
    setMessage,
    setEvent,
  } = useModel('useNoticeModel');
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
      setMessage([
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '曲丽丽 评论了你',
          datetime: '3 年前',
          read: false,
          description: '描述信息描述信息描述信息',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '朱偏右 回复了你',
          datetime: '3 年前',
          read: false,
          description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '标题',
          datetime: '3 年前',
          read: false,
          description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        },
      ]);
      setEvent([
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

  // 切换已读状态
  const changeReadState = (handler: any, item: any, index: number) => {
    if (item.read) return;
    handler((item: any[]) => {
      item[index].read = true;
      return [...item];
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

  const getMsgCount = (data: any) => {
    return data.reduce((prev: any, cur: any) => {
      let res = !cur.read ? 1 : 0;
      return prev + res;
    }, 0);
  };

  const notice = (
    <div className={styles.notice}>
      <NoticeTabs>
        <Tab
          tabKey="notification"
          title={`通知(${getMsgCount(notification)})`}
          data={notification}
          onClick={(item, index) =>
            changeReadState(setNotification, item, index)
          }
        />
        <Tab
          tabKey="message"
          title={`消息(${getMsgCount(message)})`}
          data={message}
          onClick={(item, index) => changeReadState(setMessage, item, index)}
        />
        <Tab
          tabKey="event"
          title={`待办(${getMsgCount(event)})`}
          data={event}
          onClick={(item, index) => changeReadState(setEvent, item, index)}
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
      {/* 待优化 */}
      <div
        className={styles.noticeIcon + ' notice-icon'}
        onClick={toggleVisible}
      >
        <Space>
          <MessageOutlined />
        </Space>
      </div>
    </Dropdown>
  );
};

export default NoticeTip;
