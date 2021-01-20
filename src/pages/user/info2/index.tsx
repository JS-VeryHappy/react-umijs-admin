import React from 'react';
import styles from './index.less';
import {
  Row,
  Col,
  Avatar,
  Typography,
  Space,
  Tag,
  Dropdown,
  Menu,
  Image,
} from 'antd';
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  PictureOutlined,
  YoutubeOutlined,
  EllipsisOutlined,
  EditOutlined,
  UploadOutlined,
  ShareAltOutlined,
  CopyOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';

const { Title, Text } = Typography;

function UserInfo2() {
  const menu = (
    <Menu>
      <Menu.Item>
        <EditOutlined />
        Edit
      </Menu.Item>
      <Menu.Item>
        <UploadOutlined />
        Update
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <ProCard className={styles.info}>
          <Space direction="vertical" className={styles.bg}>
            <div className={styles.top}>
              <Image
                className={styles.image}
                preview={false}
                src="https://www.nobleui.com/html/template/assets/images/profile-cover.jpg"
              />
              <div className={styles.shade}></div>
              <div className={styles.headers}>
                <Space size="large" align="center" wrap={true}>
                  <Avatar
                    src="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg"
                    size={120}
                  />
                  <Title level={2}>Liu XiaoMei</Title>
                </Space>
              </div>
            </div>
            <div className={styles.tabs}>
              <Space split="|" size="large" wrap={true}>
                <Space size={2} className={styles.tabsActive}>
                  <AndroidOutlined />
                  <Text>Timeline</Text>
                </Space>
                <Space size={2}>
                  <AppleOutlined />
                  <Text>About</Text>
                </Space>
                <Space size={2}>
                  <WindowsOutlined />
                  <Text>
                    Friends<Text>3,765</Text>
                  </Text>
                </Space>
                <Space size={2}>
                  <PictureOutlined />
                  <Text>Photos</Text>
                </Space>
                <Space size={2}>
                  <YoutubeOutlined />
                  <Text>Videos</Text>
                </Space>
              </Space>
            </div>
          </Space>
        </ProCard>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <ProCard
            title="ABOUT"
            extra={
              <Dropdown overlay={menu}>
                <EllipsisOutlined style={{ cursor: 'pointer' }} />
              </Dropdown>
            }
          >
            <Space direction="vertical">
              <Text>
                Hi! I'm Amiah the Senior UI Designer at NobleUI. We hope you
                enjoy the design and quality of Social.
              </Text>
              <Space direction="vertical" size={0}>
                <Text>JOINED</Text>
                <Text type="secondary">November 15, 2015</Text>
              </Space>
              <Space direction="vertical" size={0}>
                <Text>LIVES</Text>
                <Text type="secondary">New York, USA</Text>
              </Space>
              <Space direction="vertical" size={0}>
                <Text>EMAIL</Text>
                <Text type="secondary">me@nobleui.com</Text>
              </Space>
              <Space direction="vertical" size={0}>
                <Text>WEBSITE</Text>
                <Text type="secondary">www.nobleui.com</Text>
              </Space>
            </Space>
          </ProCard>
        </Col>
        <Col xs={24} sm={18} md={12} lg={12} xl={12}>
          <Space direction="vertical">
            <ProCard
              title="Mike Popescu"
              actions={[
                <ShareAltOutlined key="Share" />,
                <CopyOutlined key="Copy link" />,
              ]}
            >
              <Space direction="vertical">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus minima delectus nemo unde quae recusandae assumenda.
                </Text>
                <Image
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/sample1.jpg"
                />
              </Space>
            </ProCard>
            <ProCard
              title="Mike"
              actions={[
                <ShareAltOutlined key="Share" />,
                <CopyOutlined key="Copy link" />,
              ]}
            >
              <Space direction="vertical">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus minima delectus nemo unde quae recusandae assumenda.
                </Text>
                <Image
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/sample2.jpg"
                />
              </Space>
            </ProCard>
          </Space>
        </Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <ProCard title="LATEST PHOTOS">
            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face2.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face3.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face4.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face5.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face6.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face7.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face8.jpg"
                />
              </Col>
              <Col span={8}>
                <Image
                  className={styles.photo}
                  preview={false}
                  width="100%"
                  src="https://www.nobleui.com/html/template/assets/images/faces/face9.jpg"
                />
              </Col>
            </Row>
          </ProCard>
        </Col>
      </Row>
    </>
  );
}

export default UserInfo2;
