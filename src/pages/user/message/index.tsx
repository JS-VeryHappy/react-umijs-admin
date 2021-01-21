import React, { useState } from 'react';
import styles from './index.less';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

function Message() {
  const [tabPos, setTabPosition] = useState('top');

  let [tabs, setTabs] = useState([
    { name: '已读', count: 2 },
    { name: '未读', count: 1 },
    { name: '回收站', count: 10 },
  ]);

  return (
    <div className={styles.container}>
      <Tabs tabPosition="top">
        {tabs.map((tab, index) => {
          return (
            <TabPane tab={tab.name + '(' + tab.count + ')'} key={index}>
              Content {tab.count}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Message;
