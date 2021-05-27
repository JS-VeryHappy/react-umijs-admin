import React, { useEffect, useState } from 'react';
import {
  Card,
  Space,
  Row,
  Col,
  Image,
  Typography,
  Avatar,
  Menu,
  Dropdown,
  Button,
  Divider,
  Progress,
  Timeline,
  Table,
  Tag,
} from 'antd';
import {
  BarChartOutlined,
  PieChartOutlined,
  DownOutlined,
  DoubleRightOutlined,
  QuestionCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { Rose, Bar, Column, RadialBar, DualAxes, Scatter } from '@ant-design/charts';
import ProCard from '@ant-design/pro-card';

export default function Join() {
  const { Text, Title } = Typography;
  const roseData = [
    {
      type: '项目一',
      value: 27,
    },
    {
      type: '项目二',
      value: 25,
    },
    {
      type: '项目三',
      value: 18,
    },
    {
      type: '项目四',
      value: 15,
    },
    {
      type: '项目五',
      value: 10,
    },
    {
      type: '其他',
      value: 19,
    },
  ];
  const roseConfig = {
    data: roseData,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.8,
  };
  const barData = [
    {
      year: '1',
      value: 38,
    },
    {
      year: '2',
      value: 25,
    },
    {
      year: '3',
      value: 16,
    },
    {
      year: '4',
      value: 8,
    },
    {
      year: '5',
      value: 4,
    },
  ];
  const barConfig = {
    data: barData,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    // color: function color(_ref: { type: any; }) {
    //   let type = _ref.type;
    //   if (type === "1")
    //   return "rgb(123,113,252)"
    // }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1.颜值
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2.参考1
        </a>
      </Menu.Item>
    </Menu>
  );
  const columnData = [
    {
      type: '1',
      sales: 38,
    },
    {
      type: '2',
      sales: 45,
    },
    {
      type: '3',
      sales: 58,
    },
    {
      type: '4',
      sales: 48,
    },
    {
      type: '5',
      sales: 20,
    },
  ];
  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销量' },
    },
  };
  const RadialBarData = [
    {
      term: 'All We Know',
      count: 13,
    },
    {
      term: 'Love Story',
      count: 12,
    },
    {
      term: 'I Can Not Help',
      count: 11,
    },
    {
      term: 'I am So Sorry',
      count: 10,
    },
    {
      term: 'Too Far',
      count: 9,
    },
    {
      term: 'Anchor',
      count: 8,
    },
    {
      term: 'Paris',
      count: 7,
    },
    {
      term: 'Shots',
      count: 6,
    },
    {
      term: 'ThunderCats',
      count: 5,
    },
    {
      term: 'Fractures',
      count: 4,
    },
    {
      term: 'Not Angry',
      count: 3,
    },
    {
      term: 'Play Date',
      count: 2,
    },
    {
      term: 'Realistic',
      count: 1,
    },
  ];
  const RadialBarConfig = {
    data: RadialBarData,
    xField: 'term',
    yField: 'count',
    radius: 1,
    innerRadius: 0.4,
    tooltip: { showMarkers: true },
    type: 'line',
    // annotations: [{
    //   type: 'text',
    // position: [
    //   '50%',
    //   '50%'
    // ],
    // content: 'Music',
    //   style: {
    //     textAlign: 'center',
    //     fontSize: 24
    //   }
    // }]
  };
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const DualAxesConfig = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  const TableColumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Zodiac',
      dataIndex: 'zodiac',
      key: 'zodiac',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (src: any) => (
        <>
          <Image src={src} style={{ width: 100, height: 100 }}></Image>
        </>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delate</a>
        </Space>
      ),
    },
  ];
  const TableData = [
    {
      key: '1',
      name: 'John',
      zodiac: '短腿',
      image:
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1836081033,2796924189&fm=26&gp=0.jpg',
      address: 'New York',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim',
      zodiac: '帅气',
      image:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1697912010,3244663216&fm=11&gp=0.jpg',
      address: 'London',
      tags: ['great'],
    },
    {
      key: '3',
      name: 'Joe',
      zodiac: '憨憨',
      image:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2774777542,479538014&fm=26&gp=0.jpg',
      address: 'Sidney',
      tags: ['cool', 'student'],
    },
    {
      key: '4',
      name: 'Sam',
      zodiac: '可爱',
      image:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1764644879,4183385236&fm=26&gp=0.jpg',
      address: 'Sidney',
      tags: ['humorous', 'loser'],
    },
  ];

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card
            bodyStyle={{ height: 230 }}
            style={{
              background: 'linear-gradient(to bottom right, #7166f0,#8698fa)',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            <Space direction="vertical">
              <Title style={{ color: 'white', marginTop: 20 }}> Congratulations Zhou </Title>
              <Text style={{ color: 'white' }}>
                {' '}
                Gifted you already have skills that ordinary people don't have. I have to praise
                you. You are a genius.
              </Text>
            </Space>
          </Card>
          <Card>
            <Row gutter={24}>
              <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <Space direction="vertical">
                  <Title level={4}>2.7k</Title>
                  <Text>Avg Sessions</Text>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    <span style={{ color: 'green' }}>+5.2%</span>vs last 7 days
                  </Text>
                </Space>
                <Button type="primary" block style={{ marginBottom: 10, marginTop: 10 }}>
                  {' '}
                  View Details <DoubleRightOutlined />
                </Button>
              </Col>
              <Col xl={12} lg={12} md={24} sm={24} xs={24} style={{}}>
                <Column {...columnConfig} />
              </Col>
            </Row>
            <Divider />
            <Row gutter={24}>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                久旱逢甘露
                <Progress
                  percent={50}
                  status="active"
                  strokeColor={{ from: '#44c7e7', to: '#f7883f' }}
                  strokeWidth={16}
                />
                他乡遇故知
                <Progress
                  percent={40}
                  status="active"
                  strokeColor={{ from: '#f7cc3f', to: '#5c2fda' }}
                  strokeWidth={16}
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                洞房花烛夜
                <Progress
                  percent={80}
                  status="active"
                  strokeColor={{ from: '#542fda', to: '#da902f' }}
                  strokeWidth={16}
                />
                金榜题名时
                <Progress
                  percent={60}
                  status="active"
                  strokeColor={{ from: '#2fdaa1', to: '#da572f' }}
                  strokeWidth={16}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={24}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Card style={{ marginBottom: 24 }}>
                <Space direction="vertical">
                  <Avatar
                    style={{ backgroundColor: 'rgb(109,104,241)' }}
                    icon={<BarChartOutlined />}
                  />
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>90.03k</Text>
                  <Text>Subscribers Gained</Text>
                </Space>
                <Bar {...barConfig} />
              </Card>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Card style={{ marginBottom: 24 }}>
                <Space direction="vertical">
                  <Avatar
                    style={{ backgroundColor: 'rgb(100,108,241)' }}
                    icon={<PieChartOutlined />}
                  />
                </Space>
                <Rose {...roseConfig} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <ProCard
            title="玉珏图"
            style={{ color: '#a1b2fa', borderRadius: '2%' }}
            extra={
              <Dropdown overlay={menu}>
                <a style={{ color: '#a1b2fa' }} onClick={(e) => e.preventDefault()}>
                  标准
                  <DownOutlined />
                </a>
              </Dropdown>
            }
            tooltip="有点好看的玉珏图"
          >
            <RadialBar {...RadialBarConfig} />
          </ProCard>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <ProCard title="迷之提问" style={{ color: 'rgb(98,148,249)' }}>
            <Timeline mode="left">
              <Timeline.Item
                className={style.timeLineItem}
                label="问题一 "
                dot={<QuestionCircleFilled style={{ color: '#ffa100', fontSize: 24 }} />}
              >
                把大象放进冰箱需要几步？
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                1.把冰箱打开
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                2.把大象放进去
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                3.把冰箱门关上
              </Timeline.Item>
              <Timeline.Item
                label="问题二"
                dot={<QuestionCircleFilled style={{ color: '#ffa100', fontSize: 24 }} />}
              >
                把长颈鹿放进冰箱需要几步?
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                1.把冰箱门打开
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                2.把大象拿出来
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                3.把长颈鹿放进冰箱
              </Timeline.Item>
              <Timeline.Item
                dot={<CheckCircleFilled style={{ color: 'rgb(97,217,171)', fontSize: 24 }} />}
              >
                4.把冰箱门关上
              </Timeline.Item>
            </Timeline>
          </ProCard>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card>
            <DualAxes {...DualAxesConfig} />
          </Card>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <ProCard title="Dispatched Orders">
            <Table columns={TableColumn} dataSource={TableData} />
          </ProCard>
        </Col>
      </Row>
    </>
  );
}
