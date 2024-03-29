/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Dropdown, Space, Badge } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useModel } from 'umi';

import NoticeTabs from './NoticeTabs';
import './index.less';
import { getNoticeNotification, getNoticeMessage, getNoticeEvent } from '@/services';

const { Tab } = NoticeTabs;

const NoticeTip = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { notification, message, event, setNotification, setMessage, setEvent } =
    useModel('useNoticeModel');
  // 可以加入getInitialState
  useEffect(() => {
    getNoticeNotification().then(
      (res: any) => setNotification(res.data.list),
      // (err) => console.log(err),
    );
    getNoticeMessage().then(
      (res: any) => setMessage(res.data.list),
      // (err) => console.log(err),
    );
    getNoticeEvent().then(
      (res: any) => setEvent(res.data.list),
      // (err) => console.log(err),
    );
  }, []);

  // 切换已读状态
  const changeReadState = (item: any, index: number) => {
    const nitem = item;
    if (nitem.read) return nitem;
    nitem[index].read = true;
    return [...nitem];
  };

  // 全局点击事件, 用于判断面板是否关闭
  useEffect(() => {
    let target = null;
    let icon = null;
    let notice = null;
    const closeNoticeTabs = (e: any) => {
      target = e.target;
      icon = document.querySelector('.notice-tip__icon');
      notice = document.querySelector('.notice-tip__dropdown');
      if (icon?.contains(target)) return;
      if (!notice?.contains(target)) setVisible(false);
    };
    document.addEventListener('click', closeNoticeTabs);
    return () => {
      target = null;
      icon = null;
      notice = null;
      document.removeEventListener('click', closeNoticeTabs);
    };
  }, []);

  // 消息中心微标数
  useEffect(() => {
    const arr = notification.concat(message, event).filter((item: any) => !item.read);
    setTotalCount(arr.length);
  }, [notification, message, event]);

  // 显示切换
  const toggleVisible = () => setVisible(!visible);

  const notice = (
    <div className="notice-tip">
      <NoticeTabs>
        <Tab
          tabKey="notification"
          title="通知"
          data={notification}
          onClick={(item, index) => setNotification(changeReadState(item, index))}
        />
        <Tab
          tabKey="message"
          title="消息"
          data={message}
          onClick={(item, index) => setMessage(changeReadState(item, index))}
        />
        <Tab
          tabKey="event"
          title="待办"
          data={event}
          onClick={(item, index) => setEvent(changeReadState(item, index))}
        />
      </NoticeTabs>
    </div>
  );
  return (
    <Dropdown overlay={notice} visible={visible} overlayClassName="notice-tip__dropdown">
      {/* 待优化 */}
      <div className="notice-tip__icon" onClick={toggleVisible}>
        <Badge count={totalCount}>
          <Space>
            <MessageOutlined />
          </Space>
        </Badge>
      </div>
    </Dropdown>
  );
};

export default NoticeTip;
