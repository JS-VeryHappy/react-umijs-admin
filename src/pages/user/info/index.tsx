import React from 'react';
import styles from './index.less';
import { Row, Col, Card, Avatar, Typography, Space, Tag, Divider } from 'antd';
import { useModel } from 'umi';
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  Html5Outlined,
  AppleOutlined,
  GithubOutlined,
  DingdingOutlined,
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
            <Card bordered={false} type="inner">
              <Row className={styles.top} gutter={[24, 24]}>
                <Col flex="100px">
                  <Avatar src={headimg} size={164} />
                </Col>
                <Col flex="auto">
                  <Row gutter={[24, 24]}>
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
                          <Space size={2} align="center">
                            <MailOutlined style={{ color: '#1890ff' }} />
                            <Text>邮箱:</Text>
                          </Space>
                          <Text strong>{email}</Text>
                        </Space>
                        <Space>
                          <Space size={2} align="center">
                            <PhoneOutlined style={{ color: '#1890ff' }} />
                            <Text>电话:</Text>
                          </Space>
                          <Text strong>{phone}</Text>
                        </Space>
                        <Space>
                          <Space size={2} align="center">
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
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false} type="inner">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </div>
      </Row>
    </>
  );
}

export default UserInfo;
