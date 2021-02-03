import React, { useState, useEffect, useRef } from 'react';
import { useRequest } from 'umi';
import { getMessageList } from '@/services';
import { CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

import {
  Input,
  Tabs,
  List,
  Avatar,
  Button,
  Empty,
  Card,
  Row,
  Col,
  Checkbox,
  Typography,
  Space,
} from 'antd';

const { TabPane } = Tabs;
const { Text } = Typography;

const Message = () => {
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

  let [data2, setData2] = useState([
    {
      id: 1,
      name: 'Announcement for holiday',
      isDelete: false,
    },
    {
      id: 2,
      name: 'call bus driver',
      isDelete: false,
    },
    {
      id: 3,
      name: 'Office Picnic',
      isDelete: false,
    },
    {
      id: 4,
      name: 'Website Must Be Finished',
      isDelete: false,
    },
  ]);

  // const input1 = useRef(null);

  const onChecked = (item: any) => {
    // console.log(item);
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

  const onChangeStatus = (event: any, item: any) => {
    let arr = data2;
    arr.forEach(i => {
      if (i.id === item.id) i.isDelete = !i.isDelete;
    });

    setData2([...arr]);
  };

  const onPressEnter = (event: any) => {
    // console.log(input1);

    let arr = data2;

    arr.push({
      id: Math.random(),
      name: event.target.value,
      isDelete: false,
    });

    setData2([...arr]);

    // 清除内容
  };

  const onDelete = (e: any, index: number) => {
    let arr = data2;

    arr.splice(index, 1);
    setData2([...arr]);
  };

  return (
    <>
      <div className={styles.container}>
        <Tabs tabPosition="top" onChange={onChangeTab}>
          {tabs.map((tab, index) => {
            return (
              <TabPane tab={tab.name + '(' + tab.data.length + ')'} key={index}>
                {initLoading && tab.data.length ? (
                  ListCont(tab.data)
                ) : (
                  <Empty />
                )}
              </TabPane>
            );
          })}
        </Tabs>
      </div>

      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card title="TO DO">
            <List
              itemLayout="horizontal"
              dataSource={data2}
              renderItem={(item, index) => (
                <List.Item>
                  <Checkbox onChange={e => onChangeStatus(e, item)}>
                    <Text delete={item.isDelete}>{item.name}</Text>
                  </Checkbox>

                  <CloseOutlined
                    style={{ cursor: 'pointer' }}
                    onClick={e => onDelete(e, index)}
                  />
                </List.Item>
              )}
            />

            <Input placeholder="Enter todo..." onPressEnter={onPressEnter} />
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card title="STATUS">aaa</Card>
        </Col>
      </Row>
    </>
  );
};

export default Message;
