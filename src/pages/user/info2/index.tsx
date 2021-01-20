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
  Image,
} from 'antd';
import { useModel } from 'umi';
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  PictureOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import headimg from '@/assets/images/headimg.jpeg';
import ProCard from '@ant-design/pro-card';

const { Title, Text } = Typography;

function UserInfo2() {
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
                <Space size="large" align="center">
                  <Avatar
                    src="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg"
                    size={120}
                  />
                  <Title level={2}>Liu XiaoMei</Title>
                </Space>
              </div>
            </div>
            <div className={styles.tabs}>
              <Space split="|" size="large">
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
    </>
  );
}

export default UserInfo2;
