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
} from 'antd';
import {
  CodepenOutlined,
  AntDesignOutlined,
  SlackOutlined,
  AliwangwangOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { Scatter, WordCloud } from '@ant-design/charts';

export default function Chart() {
  const { Text, Paragraph } = Typography;
  const [scatterData, setScatterData] = useState([]);
  const [WordCloudData, setWordCloudData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  useEffect(() => {
    asyncFetch1();
  }, []);
  const asyncFetch1 = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json',
    )
      .then(response => response.json())
      .then(json => setWordCloudData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then(response => response.json())
      .then(json => setScatterData(json))
      .catch(e => {
        console.log(e);
      });
  };
  var scatterConfig = {
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
  var WordCloudConfig = {
    data: WordCloudData,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    // wordStyle: {
    //     fontFamily: 'Verdana',
    //     fontSize: [
    //         24,
    //         80
    //     ]
    // },
    interactions: [{ type: 'element-active' }],
    state: { active: { style: { lineWidth: 3 } } },
  };
  return (
    <>
      <Row gutter={24}>
        <Col xl={6} lg={24} md={24} sm={24} xs={24}>
          <Space direction="vertical">
            <Card bodyStyle={{ textAlign: 'center' }}>
              <Space align="center" direction="vertical">
                <Avatar
                  size={120}
                  src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=318406572,948591224&fm=26&gp=0.jpg"
                />
                <Text style={{ fontSize: 20, fontWeight: 500 }}>
                  Da xian Zhou
                </Text>
                <Text style={{ color: 'grey', fontWeight: 500 }}>
                  Project Manager
                </Text>
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
                  <span
                    style={{ fontWeight: 500, color: 'grey', marginRight: 10 }}
                  >
                    Followers
                  </span>
                  <span style={{ fontWeight: 800 }}>24</span>
                  <span style={{ fontWeight: 500, color: 'grey' }}>
                    Following
                  </span>
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
            <Card>
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
                  Hi I'm Da xian Zhou,has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type.
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
                    <Avatar
                      style={{ backgroundColor: 'rgb(0,123,182)' }}
                      icon={<SlackOutlined />}
                    />
                    <Avatar
                      style={{ backgroundColor: 'rgb(234,76,137)' }}
                      icon={<AliwangwangOutlined />}
                    />
                  </Space>
                </Text>
              </Space>
            </Card>
            <Card>
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
            <Card>
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
            <Card>
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
                  <EnvironmentOutlined
                    style={{ color: 'cyan', marginRight: 10 }}
                  />
                  <Text style={{ fontWeight: 800, marginRight: 6 }}>
                    Location
                  </Text>
                  :China
                </Text>
              </Space>
            </Card>
          </Space>
        </Col>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          <Card>
            <Text
              style={{ color: 'rgb(52,58,64)', fontSize: 18, fontWeight: 800 }}
            >
              Your
            </Text>
            <WordCloud {...WordCloudConfig} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
