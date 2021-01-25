import React from 'react';
import { Typography, Space, Dropdown, Menu } from 'antd';
import {
  EllipsisOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';

const { Title, Text } = Typography;

function AboutCustom() {
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
            Hi! I'm Amiah the Senior UI Designer at NobleUI. We hope you enjoy
            the design and quality of Social.
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
    </>
  );
}

export default AboutCustom;
