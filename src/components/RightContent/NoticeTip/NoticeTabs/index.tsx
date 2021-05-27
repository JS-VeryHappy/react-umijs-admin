import React from 'react';
import { Tabs, message as Message } from 'antd';
import { useModel } from 'umi';

import NoticeList from '../NoticeList';

const { TabPane } = Tabs;
const NOTICE_TYPE = ['notification', 'message', 'event'];

const NoticeTabs: React.FC<any> & { Tab: typeof NoticeList } = props => {
  const { children } = props;
  const panes: React.ReactNode[] = [];
  const { setNotification, setMessage, setEvent } = useModel('useNoticeModel');

  const getMsgCount = (data: any) =>
    data.reduce((prev: any, cur: any) => prev + (!cur.read ? 1 : 0), 0);

  const onViewMore = (e: any) => Message.info('no more ╮(￣▽ ￣)╭');

  // 待优化
  const onClear = (type: any) => {
    if (type === 'notification') setNotification([]);
    else if (type === 'message') setMessage([]);
    else if (type === 'event') setEvent([]);
  };

  React.Children.forEach(children, (child: React.ReactElement, index) => {
    if (!child) return;
    const { data, tabKey, title, onClick } = child.props;
    let tempTitle = getMsgCount(data) === 0 ? title : `${title}(${getMsgCount(data)})`;
    panes.push(
      <TabPane tab={tempTitle} key={tabKey}>
        <NoticeList
          clearText="清空"
          onClear={() => onClear(NOTICE_TYPE[index])}
          showViewMore={true}
          viewMoreText="查看更多"
          onViewMore={onViewMore}
          data={data}
          onClick={onClick}
          {...child.props}
        ></NoticeList>
      </TabPane>,
    );
  });
  return <Tabs>{panes}</Tabs>;
};

NoticeTabs.Tab = NoticeList;

export default NoticeTabs;
