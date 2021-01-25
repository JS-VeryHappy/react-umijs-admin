import React, { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { getMessageList } from '@/services';

import styles from './index.less';

import { Tabs, List, Avatar, Button, Empty } from 'antd';
const { TabPane } = Tabs;

function Message() {
  const [tabPos, setTabPosition] = useState('top');

  let [tabs, setTabs] = useState([
    {
      name: '未读',
      key: 'new',
      data: [
        {
          title: 'Ant Design Title 1',
          isReaded: false,
          isDeleted: false,
        },
        {
          title: 'Ant Design Title 2',
          isReaded: false,
          isDeleted: false,
        },
        {
          title: 'Ant Design Title 3',
          isReaded: false,
          isDeleted: false,
        },
        {
          title: 'Ant Design Title 4',
          isReaded: false,
          isDeleted: false,
        },
      ],
    },
    { name: '已读', key: 'checked', data: [] },
    { name: '回收站', key: 'delete', data: [] },
  ]);

  const [initLoading, setInitLoading] = useState(false);

  const [list, setList] = useState([]);

  const { run: onFinish } = useRequest(async (values: any) => {
    try {
      let res = await getMessageList();

      setInitLoading(true);
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  });

  const [data, setData] = useState([
    {
      title: 'Ant Design Title 1',
      isReaded: false,
      isDeleted: false,
    },
    {
      title: 'Ant Design Title 2',
      isReaded: false,
      isDeleted: false,
    },
    {
      title: 'Ant Design Title 3',
      isReaded: false,
      isDeleted: false,
    },
    {
      title: 'Ant Design Title 4',
      isReaded: false,
      isDeleted: false,
    },
  ]);

  let checkedData = [];
  let delData = [];

  const onChecked = (item: any) => {
    console.log(item);

    // setTabs([

    // ])
  };

  const ListCont = (value: any) => {
    return value && value.length ? (
      <List
        itemLayout="horizontal"
        dataSource={value}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              !item.isReaded ? (
                <Button onClick={() => onChecked(item)}>标为已读</Button>
              ) : (
                <Button>删除</Button>
              ),
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
      />
    ) : (
      <Empty />
    );
  };

  const onChangeTab = (activeKey: any) => {
    // if(+activeKey === 1) setData([])
  };

  return (
    <div className={styles.container}>
      <Tabs tabPosition="top" onChange={onChangeTab}>
        {tabs.map((tab, index) => {
          return (
            <TabPane tab={tab.name + '(' + tab.data.length + ')'} key={index}>
              {initLoading && tab.data.length ? ListCont(tab.data) : <Empty />}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Message;
