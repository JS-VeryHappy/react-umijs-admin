import React from 'react';
import { Typography, Space, Menu, Image } from 'antd';
import { EditOutlined, UploadOutlined, ShareAltOutlined, CopyOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';

const { Title, Text } = Typography;

function ListCustom() {
  return (
    <>
      <Space direction="vertical">
        <ProCard
          title="Mike Popescu"
          actions={[<ShareAltOutlined key="Share" />, <CopyOutlined key="Copy link" />]}
        >
          <Space direction="vertical">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus
              nemo unde quae recusandae assumenda.
            </Text>
            <Image
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/sample1.jpg"
            />
          </Space>
        </ProCard>
        <ProCard
          title="Mike"
          actions={[<ShareAltOutlined key="Share" />, <CopyOutlined key="Copy link" />]}
        >
          <Space direction="vertical">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus
              nemo unde quae recusandae assumenda.
            </Text>
            <Image
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/sample2.jpg"
            />
          </Space>
        </ProCard>
      </Space>
    </>
  );
}

export default ListCustom;
