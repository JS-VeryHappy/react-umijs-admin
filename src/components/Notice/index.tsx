import React from 'react';

import { Tabs } from 'antd';
import NoticeList from './NoticeList';

const { TabPane } = Tabs;

const Notice: React.FC<any> & { Tab: typeof NoticeList } = props => {
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

  return (
    <div>
      <p>Notice</p>
      <Tabs>{panes}</Tabs>
    </div>
  );
};

Notice.Tab = NoticeList;

export default Notice;
