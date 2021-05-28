import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Space,
  Avatar,
  Typography,
  Button,
  Tooltip,
  Divider,
  Tag,
  Tabs,
  Table,
  Timeline,
  Image,
} from 'antd';
import {
  CodepenOutlined,
  AntDesignOutlined,
  SlackOutlined,
  AliwangwangOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  StarFilled,
  ToolFilled,
  PushpinFilled,
} from '@ant-design/icons';
import { Scatter, DualAxes, RingProgress } from '@ant-design/charts';
import ProCard from '@ant-design/pro-card';

export default function Chart() {
  const { Text, Paragraph } = Typography;
  const { TabPane } = Tabs;
  const [scatterData, setScatterData] = useState([]);
  const { Meta } = Card;
  
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then((response) => response.json())
      .then((json) => setScatterData(json))
      .catch((e) => {
        // console.log(e);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const scatterConfig = {
    appendPadding: 10,
    data: scatterData,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      min: -100,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
  };
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: '开发时间',
    },
    {
      time: '2019-04',
      value: 900,
      type: '开发时间',
    },
    {
      time: '2019-05',
      value: 300,
      type: '开发时间',
    },
    {
      time: '2019-06',
      value: 450,
      type: '开发时间',
    },
    {
      time: '2019-07',
      value: 470,
      type: '开发时间',
    },
    {
      time: '2019-03',
      value: 220,
      type: '头发',
    },
    {
      time: '2019-04',
      value: 300,
      type: '头发',
    },
    {
      time: '2019-05',
      value: 250,
      type: '头发',
    },
    {
      time: '2019-06',
      value: 220,
      type: '头发',
    },
    {
      time: '2019-07',
      value: 362,
      type: '头发',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: '寿命',
    },
    {
      time: '2019-04',
      count: 600,
      name: '寿命',
    },
    {
      time: '2019-05',
      count: 400,
      name: '寿命',
    },
    {
      time: '2019-06',
      count: 380,
      name: '寿命',
    },
    {
      time: '2019-07',
      count: 220,
      name: '寿命',
    },
    {
      time: '2019-03',
      count: 750,
      name: '精神',
    },
    {
      time: '2019-04',
      count: 650,
      name: '精神',
    },
    {
      time: '2019-05',
      count: 450,
      name: '精神',
    },
    {
      time: '2019-06',
      count: 400,
      name: '精神',
    },
    {
      time: '2019-07',
      count: 320,
      name: '精神',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'bug',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'bug',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'bug',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'bug',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'bug',
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
  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
      render: (infos: any) => {
        {
          return (
            <>
              <Avatar key={infos[0]} src={infos[0]} shape="circle" style={{ marginRight: 6 }} />
              <span key={infos[1]}>{infos[1]}</span>
            </>
          );
        }
      },
    },
    {
      title: 'Payment Type',
      dataIndex: 'paymentType',
      key: 'paymentType',
    },
    {
      title: 'Paid Date',
      dataIndex: 'paidDate',
      key: 'paidDate',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Transaction',
      dataIndex: 'transaction',
      key: 'transaction',
      render: (info: any) => {
        {
          return (
            <Tag color="cyan" key={info}>
              {info}
            </Tag>
          );
        }
      },
    },
  ];
  const tableData = [
    {
      key: '1',
      projectName: 'Product Development',
      clientName: [
        'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1172245122,2404902455&fm=26&gp=0.jpg',
        'Kevin Heal',
      ],
      paymentType: 'Paypal',
      paidDate: '12/3/2018',
      amount: '$20000',
      transaction: 'panding',
    },
    {
      key: '2',
      projectName: 'New Office Building',
      clientName: [
        'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1826598918,3479123839&fm=26&gp=0.jpg',
        'Frank M.Lyons',
      ],
      paymentType: 'Paypal',
      paidDate: '3/7/2019',
      amount: '$25600',
      transaction: 'success',
    },
    {
      key: '3',
      projectName: 'Market Research',
      clientName: [
        'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2200637423,1777853755&fm=26&gp=0.jpg',
        'Angelo Butler',
      ],
      paymentType: 'Pioneer',
      paidDate: '12/9/2019',
      amount: '$56900',
      transaction: 'panding',
    },
    {
      key: '4',
      projectName: 'Website & Blog',
      clientName: [
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1834859148,419625166&fm=26&gp=0.jpg',
        'Phillip Morse',
      ],
      paymentType: 'Paypal',
      paidDate: '1/9/2020',
      amount: '$89554',
      transaction: 'success',
    },
  ];
  const progressConfig = {
    height: 60,
    width: 60,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return (
    <>
      <Row gutter={24}>
        <Col xl={6} lg={24} md={24} sm={24} xs={24}>
          <Card bodyStyle={{ textAlign: 'center' }} style={{ marginBottom: 20 }}>
            <Space align="center" direction="vertical">
              <Avatar
                size={120}
                src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=318406572,948591224&fm=26&gp=0.jpg"
              />
              <Text style={{ fontSize: 20, fontWeight: 500 }}>Da xian Zhou</Text>
              <Text style={{ color: 'grey', fontWeight: 500 }}>Project Manager</Text>
              <Button
                shape="round"
                style={{
                  backgroundColor: 'rgb(255,103,155)',
                  border: 'none',
                  color: '#ffffff',
                }}
              >
                Follow Me
              </Button>
              <Text>
                <span style={{ fontWeight: 800 }}>754</span>
                <span style={{ fontWeight: 500, color: 'grey', marginRight: 10 }}>Followers</span>
                <span style={{ fontWeight: 800 }}>24</span>
                <span style={{ fontWeight: 500, color: 'grey' }}>Following</span>
              </Text>
              <Text>
                <Avatar.Group maxCount={100}>
                  <Tooltip title="Yufei Wang">
                    <Avatar src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1172245122,2404902455&fm=26&gp=0.jpg" />
                  </Tooltip>
                  <Tooltip title="Minmin Yang">
                    <Avatar src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1826598918,3479123839&fm=26&gp=0.jpg" />
                  </Tooltip>
                  <Tooltip title="Rongtai Cao">
                    <Avatar src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2200637423,1777853755&fm=26&gp=0.jpg" />
                  </Tooltip>
                  <Tooltip title="Liping Liu">
                    <Avatar src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1834859148,419625166&fm=26&gp=0.jpg" />
                  </Tooltip>
                  <Avatar
                    style={{
                      color: 'rgb(50,208,151)',
                      backgroundColor: 'rgb(218,248,240)',
                    }}
                  >
                    99+
                  </Avatar>
                </Avatar.Group>
              </Text>
            </Space>
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <Space direction="vertical">
              <Text
                style={{
                  color: 'rgb(52,58,64)',
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                Personal Information
              </Text>
              <Text
                style={{
                  color: 'rgb(52,58,64)',
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                About:
              </Text>
              <Paragraph style={{ color: 'grey' }}>
                Hi I'm Da xian Zhou,has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type.
              </Paragraph>
              <Divider />
              <Text>
                <Space direction="horizontal">
                  <Avatar
                    style={{ backgroundColor: 'rgb(59,89,152)' }}
                    icon={<CodepenOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: 'rgb(0,172,237)' }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar style={{ backgroundColor: 'rgb(0,123,182)' }} icon={<SlackOutlined />} />
                  <Avatar
                    style={{ backgroundColor: 'rgb(234,76,137)' }}
                    icon={<AliwangwangOutlined />}
                  />
                </Space>
              </Text>
            </Space>
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <Space direction="vertical">
              <Text
                style={{
                  color: 'rgb(52,58,64)',
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                My Top Skills
              </Text>
              <Text>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  java
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  JavaScript
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  HTML5
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  Vue
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  React
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  php
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  TypeScript
                </Tag>
                <Tag color="cyan" style={{ marginBottom: 10 }}>
                  CSS3
                </Tag>
              </Text>
            </Space>
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgb(52,58,64)',
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              Map
            </Text>
            <Scatter {...scatterConfig} />
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <Space direction="vertical">
              <Text
                style={{
                  color: 'rgb(52,58,64)',
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                Contact
              </Text>
              <Text>
                <PhoneOutlined style={{ color: 'cyan', marginRight: 10 }} />
                <Text style={{ fontWeight: 800, marginRight: 6 }}>phone</Text>
                :15645985621
              </Text>
              <Text>
                <MailOutlined style={{ color: 'cyan', marginRight: 10 }} />
                <Text style={{ fontWeight: 800, marginRight: 6 }}>Email</Text>
                :15645985621@163.com
              </Text>
              <Text>
                <EnvironmentOutlined style={{ color: 'cyan', marginRight: 10 }} />
                <Text style={{ fontWeight: 800, marginRight: 6 }}>Location</Text>
                :China
              </Text>
            </Space>
          </Card>
        </Col>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          <Card style={{ marginBottom: 20 }}>
            <Text style={{ color: 'rgb(52,58,64)', fontSize: 18, fontWeight: 800 }}>Your</Text>
            <DualAxes {...DualAxesConfig} />
          </Card>
          <Tabs defaultActiveKey="1">
            <TabPane
              key="1"
              tab={
                <span>
                  <StarFilled />
                  Project
                </span>
              }
            >
              <Row gutter={24}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <Card style={{ marginBottom: 20 }}>
                    <Text
                      style={{
                        color: 'rgb(52,58,64)',
                        fontSize: 18,
                        fontWeight: 800,
                      }}
                    >
                      Projects Details
                    </Text>
                    <Paragraph style={{ color: 'grey' }}>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like readable English. Many
                      desktop publishing packages and web page editors now use Lorem Ipsum as their
                      default model text.
                    </Paragraph>
                  </Card>
                </Col>
                <Col xl={18} lg={16} md={24} sm={24} xs={24}>
                  <Card style={{ marginBottom: 20 }}>
                    <Text
                      style={{
                        color: 'rgb(52,58,64)',
                        fontSize: 18,
                        fontWeight: 800,
                      }}
                    >
                      payments
                    </Text>
                    <Table columns={columns} dataSource={tableData} />
                  </Card>
                </Col>
                <Col xl={6} lg={8} md={24} sm={24} xs={24}>
                  <Card
                    bodyStyle={{ padding: 0 }}
                    style={{ marginBottom: 20 }}
                    cover={
                      <img
                        alt="图片加载失败……"
                        src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/trophy.svg"
                      />
                    }
                  >
                    <Meta
                      title='"Congratulations For You"'
                      style={{
                        padding: 40,
                        textAlign: 'center',
                        fontWeight: 800,
                        backgroundColor: 'rgb(68,162,210)',
                        marginTop: 4,
                      }}
                    />
                  </Card>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                  <ProCard
                    title={
                      <>
                        <Avatar
                          src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/project-logo/project3.jpg"
                          size={50}
                          style={{ marginRight: 4 }}
                        />
                        <span>School Project</span>
                      </>
                    }
                    extra={<RingProgress {...progressConfig} />}
                  >
                    <Space direction="vertical">
                      <Text style={{ fontWeight: 800 }}>
                        Last Update: <span style={{ color: 'grey' }}>20 mins ago</span>
                      </Text>
                      <Text style={{ fontWeight: 800 }}>
                        Deadline: <span style={{ color: 'grey' }}>5 Aug,2018</span>
                      </Text>
                      <Text style={{ color: 'grey' }}>Team Leader</Text>
                      <Text>
                        <Avatar
                          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3873571294,1141472966&fm=26&gp=0.jpg"
                          style={{ marginRight: 4 }}
                        />
                        <span>Kurty Watson</span>
                      </Text>
                      <Text>
                        <Text style={{ color: 'grey' }}>Tags:</Text>{' '}
                        <Tag color="yellow">Design</Tag>
                        <Tag color="#f50">Programming</Tag>
                      </Text>
                    </Space>
                  </ProCard>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                  <ProCard
                    title={
                      <>
                        <Avatar
                          src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/project-logo/project2.jpg"
                          size={50}
                          style={{ marginRight: 4 }}
                        />
                        <span>School Project</span>
                      </>
                    }
                    extra={<RingProgress {...progressConfig} />}
                  >
                    <Space direction="vertical">
                      <Text style={{ fontWeight: 800 }}>
                        Last Update: <span style={{ color: 'grey' }}>20 mins ago</span>
                      </Text>
                      <Text style={{ fontWeight: 800 }}>
                        Deadline: <span style={{ color: 'grey' }}>5 Aug,2018</span>
                      </Text>
                      <Text style={{ color: 'grey' }}>Team Leader</Text>
                      <Text>
                        <Avatar
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1536857165,2921056634&fm=26&gp=0.jpg"
                          style={{ marginRight: 4 }}
                        />
                        <span>Kurty Watson</span>
                      </Text>
                      <Text>
                        <Text style={{ color: 'grey' }}>Tags:</Text> <Tag color="cyan">Design</Tag>
                        <Tag color="#5f0">Programming</Tag>
                      </Text>
                    </Space>
                  </ProCard>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                  <ProCard
                    title={
                      <>
                        <Avatar
                          src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/project-logo/project1.jpg"
                          size={50}
                          style={{ marginRight: 4 }}
                        />
                        <span>School Project</span>
                      </>
                    }
                    extra={<RingProgress {...progressConfig} />}
                  >
                    <Space direction="vertical">
                      <Text style={{ fontWeight: 800 }}>
                        Last Update: <span style={{ color: 'grey' }}>20 mins ago</span>
                      </Text>
                      <Text style={{ fontWeight: 800 }}>
                        Deadline: <span style={{ color: 'grey' }}>5 Aug,2018</span>
                      </Text>
                      <Text style={{ color: 'grey' }}>Team Leader</Text>
                      <Text>
                        <Avatar
                          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1512550636,1919040821&fm=26&gp=0.jpg"
                          style={{ marginRight: 4 }}
                        />
                        <span>Kurty Watson</span>
                      </Text>
                      <Text>
                        <Text style={{ color: 'grey' }}>Tags:</Text> <Tag color="pink">Design</Tag>
                        <Tag color="#05f">Programming</Tag>
                      </Text>
                    </Space>
                  </ProCard>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              key="2"
              tab={
                <span>
                  <PushpinFilled />
                  Activity
                </span>
              }
            >
              <Row gutter={24}>
                <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                  <ProCard style={{ marginBottom: 20 }} title="Activity">
                    <Timeline>
                      <Timeline.Item
                        dot={
                          <Avatar src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2396514300,1973001232&fm=26&gp=0.jpg" />
                        }
                      >
                        <p style={{ fontWeight: 700, fontSize: 16 }}>Task Finish</p>
                        <p style={{ color: 'grey' }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p style={{ color: '#c4d4d4' }}>5 minutes ago</p>
                      </Timeline.Item>
                      <Timeline.Item
                        dot={
                          <Avatar src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3747249113,2611241841&fm=26&gp=0.jpg" />
                        }
                      >
                        <p style={{ fontWeight: 700, fontSize: 16 }}>Task Overdue</p>
                        <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet.</p>
                        <p style={{ color: '#c4d4d4' }}>50 minutes ago</p>
                      </Timeline.Item>
                      <Timeline.Item
                        dot={
                          <Avatar src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656177648,3328808604&fm=26&gp=0.jpg" />
                        }
                      >
                        <p style={{ fontWeight: 700, fontSize: 16 }}>Task Overdue</p>
                        <p style={{ color: 'grey' }}>
                          There are many variations of passages of Lorem Ipsum available.
                        </p>
                        <p style={{ color: '#c4d4d4' }}>1 Day ago</p>
                      </Timeline.Item>
                    </Timeline>
                  </ProCard>
                </Col>
                <Col xl={16} lg={24} md={24} sm={24} xs={24}>
                  <Card>
                    <Space direction="vertical">
                      <Text
                        style={{
                          color: 'rgb(52,58,64)',
                          fontSize: 18,
                          fontWeight: 800,
                        }}
                      >
                        Photos
                      </Text>
                      <Paragraph style={{ color: 'grey' }}>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution.
                      </Paragraph>
                    </Space>

                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-4.jpg"
                      style={{ width: 240 }}
                    />
                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-6.jpg"
                      style={{ width: 240 }}
                    />
                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-7.jpg"
                      style={{ width: 240 }}
                    />
                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-1.jpg"
                      style={{ width: 240 }}
                    />
                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-3.jpg"
                      style={{ width: 240 }}
                    />
                    <Image
                      src="http://v.bootstrapmb.com/2020/1/1b5i07258/vertical/assets/images/small/img-2.jpg"
                      style={{ width: 240 }}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              key="3"
              tab={
                <span>
                  <ToolFilled />
                  Setting
                </span>
              }
            >
              Tab3
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
