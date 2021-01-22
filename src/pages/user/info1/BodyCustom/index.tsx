import React from 'react';
import styles from './index.less';
import { Row, Col, Card, Typography, Space, Tag, Divider } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  Html5Outlined,
  AppleOutlined,
  GithubOutlined,
  DingdingOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

function BodyCustom(props: any) {
  const { name, email, position, desc, tags, phone, address } = props;

  return (
    <>
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
                <Html5Outlined style={{ color: '#ada123', fontSize: '30px' }} />
                <AppleOutlined style={{ color: '#ada123', fontSize: '30px' }} />
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
    </>
  );
}

export default BodyCustom;
