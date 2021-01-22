import React from 'react';
import styles from './index.less';
import { Row, Col, Typography, Space, Dropdown, Menu, Image } from 'antd';
import {
  EllipsisOutlined,
  EditOutlined,
  UploadOutlined,
  ShareAltOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import HeaderCustom from './HeaderCustom';
import AboutCustom from './AboutCustom';
import ListCustom from './ListCustom';
import PhotosCustom from './PhotosCustom';

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
        <HeaderCustom />
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <AboutCustom />
        </Col>
        <Col xs={24} sm={18} md={12} lg={12} xl={12}>
          <ListCustom />
        </Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <PhotosCustom />
        </Col>
      </Row>
    </>
  );
}

export default UserInfo2;
