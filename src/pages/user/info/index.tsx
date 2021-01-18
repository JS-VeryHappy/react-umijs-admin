import React from 'react';
import styles from './index.less';
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Space,
  Tag,
  Divider,
  Timeline,
} from 'antd';
import { useModel } from 'umi';
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  Html5Outlined,
  AppleOutlined,
  GithubOutlined,
  DingdingOutlined,
  AppstoreAddOutlined,
  AlertOutlined,
  BankOutlined,
} from '@ant-design/icons';
import headimg from '@/assets/images/headimg.jpeg';

const { Title, Text } = Typography;

function UserInfo() {
  const { initialState } = useModel('@@initialState');
  const { name, email, position, desc, tags, phone, address } = initialState;

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <div className={styles.info}>
          <Col span={24}>
            <Card className={styles.bg} bordered={false}>
              <Row justify="center" align="middle">
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Avatar src={headimg} size={140} />
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: 'center', marginTop: '20px' }}
                >
                  <Title level={2} style={{ color: '#fff' }}>
                    {name}
                  </Title>
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: 'center', marginTop: '10px' }}
                >
                  <Text style={{ color: '#fff' }}>{desc}</Text>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false}>
              <Row className={styles.top} gutter={[24, 24]}>
                <Col md={24} lg={12}>
                  <Title level={3}>{name}</Title>
                  <Space direction="vertical">
                    <Text type="secondary">{email}</Text>
                    <Text>{position}</Text>
                    <Text code>{desc}</Text>
                    <Space wrap={true}>
                      {tags &&
                        tags.map((tag: string, index: number) => {
                          return (
                            <Tag color="blue" key={index}>
                              {tag}
                            </Tag>
                          );
                        })}
                    </Space>
                  </Space>
                </Col>
                <Col xs={0} sm={0} md={0} lg={1} xl={1}>
                  <Divider type="vertical" className={styles.divider} />
                </Col>
                <Col md={24} lg={11}>
                  <Space direction="vertical" size={20}>
                    <Space>
                      <Space size={5} align="center">
                        <MailOutlined style={{ color: '#1890ff' }} />
                        <Text>邮箱:</Text>
                      </Space>
                      <Text strong>{email}</Text>
                    </Space>
                    <Space>
                      <Space size={5} align="center">
                        <PhoneOutlined style={{ color: '#1890ff' }} />
                        <Text>电话:</Text>
                      </Space>
                      <Text strong>{phone}</Text>
                    </Space>
                    <Space>
                      <Space size={5} align="center">
                        <ClockCircleOutlined style={{ color: '#1890ff' }} />
                        <Text>地址:</Text>
                      </Space>
                      <Text strong>{address}</Text>
                    </Space>
                    <Space size={20}>
                      <Html5Outlined
                        style={{ color: '#ada123', fontSize: '30px' }}
                      />
                      <AppleOutlined
                        style={{ color: '#ada123', fontSize: '30px' }}
                      />
                      <GithubOutlined
                        style={{ color: '#ada123', fontSize: '30px' }}
                      />
                      <DingdingOutlined
                        style={{ color: '#ada123', fontSize: '30px' }}
                      />
                    </Space>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false} className={styles.timeline}>
              <Space size="large" direction="vertical">
                <Tag color="cyan" className="cyan">
                  2021年
                </Tag>
              </Space>
              <Timeline mode="alternate">
                <Timeline.Item
                  dot={
                    <AppstoreAddOutlined
                      className={styles.timelineIcon}
                      style={{ background: '#ff4d4f' }}
                    />
                  }
                  label="晚上"
                >
                  <Space direction="vertical">
                    <Text type="danger" strong={true}>
                      带娃
                    </Text>
                    <Text type="secondary">
                      小呀小呀小朋友、找到一个小朋友、抱一抱、亲一口、马上厕所洗屁股！
                    </Text>
                    <Text>奶爸gogogo</Text>
                  </Space>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <AlertOutlined
                      className={styles.timelineIcon}
                      style={{ background: '#52c41a' }}
                    />
                  }
                  label="中午"
                >
                  <Space direction="vertical">
                    <Text type="success" strong={true}>
                      吃饭
                    </Text>
                    <Text type="secondary">
                      吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！大家一起吃吃吃吃
                    </Text>
                    <Text>30分钟要吃饱</Text>
                  </Space>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <BankOutlined
                      className={styles.timelineIcon}
                      style={{ background: '#faad14' }}
                    />
                  }
                  label="早上"
                >
                  <Space direction="vertical">
                    <Text type="warning" strong={true}>
                      起床
                    </Text>
                    <Text type="secondary">
                      🚴骑车去
                      <Text type="secondary" delete>
                        {' '}
                        上学{' '}
                      </Text>
                      苦逼的上班
                    </Text>
                    <Text>25分钟</Text>
                  </Space>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </div>
      </Row>
    </>
  );
}

export default UserInfo;
