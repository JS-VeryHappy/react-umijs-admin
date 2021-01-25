import React from 'react';
import { Tabs } from 'antd';
// import {useModel} from 'umi'

import './index.less';
import NoticeList from '../NoticeList';

const { TabPane } = Tabs;

const NoticeTabs: React.FC<any> & { Tab: typeof NoticeList } = props => {
  const { children } = props;

  const panes: React.ReactNode[] = [];

  React.Children.forEach(children, (child: React.ReactElement, index) => {
    if (!child) {
      return;
    }
    const { data, tabKey, title, onClick } = child.props;
    panes.push(
      <TabPane tab={title} key={tabKey}>
        <NoticeList
          {...child.props}
          data={data || []}
          onClick={onClick}
        ></NoticeList>
      </TabPane>,
    );
  });

  // onTabClick={onTabClick}
  return <Tabs>{panes}</Tabs>;
};

NoticeTabs.Tab = NoticeList;

export default NoticeTabs;
