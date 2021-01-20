import React from 'react';
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
} from 'antd';
import {
  BarChartOutlined,
  PieChartOutlined,
  DownOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import { Rose, Bar, Column } from '@ant-design/charts';

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
      value: 5,
    },
  ];
  const roseConfig = {
    data: roseData,
    xField: 'type',
    yField: 'value',
    // seriesField: "type",
    radius: 0.7,
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
  ];
  const barConfig = {
    data: barData,
    xField: 'value',
    yField: 'year',
    // seriesField: 'year',
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
          2.参考一
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

  return (
    <Row gutter={24}>
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
            <Title style={{ color: 'white', marginTop: 20 }}>
              {' '}
              Congratulations Zhou{' '}
            </Title>
            <Text style={{ color: 'white' }}>
              {' '}
              Gifted you already have skills that ordinary people don't have. I
              have to praise you. You are a genius.
            </Text>
          </Space>
        </Card>
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24}>
        <Card style={{ marginBottom: 24 }}>
          <Space direction="vertical">
            <Avatar
              style={{ backgroundColor: 'rgb(109,104,241)' }}
              icon={<BarChartOutlined />}
            />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>90.03k</Text>
            <Text>Subscribers Gained</Text>
            <Bar {...barConfig} style={{ width: 280, height: 120 }} />
          </Space>
        </Card>
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24}>
        <Card style={{ marginBottom: 24 }}>
          <Space direction="vertical">
            <Avatar
              style={{ backgroundColor: 'rgb(100,108,241)' }}
              icon={<PieChartOutlined />}
            />
            <Rose {...roseConfig} style={{ width: 280, height: 180 }} />
          </Space>
        </Card>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Card>
          <Row gutter={24}>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <Title level={4}>2.7k</Title>
              <Text>Avg Sessions</Text>
              <br />
              <Text style={{ fontSize: 18, fontWeight: 500 }}>
                <span style={{ color: 'green' }}>+5.2%</span>vs last 7 days
              </Text>
              <br />
              <Button type="primary" block>
                {' '}
                View Details <DoubleRightOutlined />
              </Button>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24} style={{}}>
              {/* <Dropdown overlay={menu}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>标准<DownOutlined /></a></Dropdown> */}
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
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Card></Card>
      </Col>
      <Col xl={8} lg={24} md={24} sm={24} xs={24}>
        <Card></Card>
      </Col>
      <Col xl={8} lg={24} md={24} sm={24} xs={24}>
        <Card></Card>
      </Col>
      <Col xl={8} lg={24} md={24} sm={24} xs={24}>
        <Card></Card>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card></Card>
      </Col>
    </Row>
  );
}
