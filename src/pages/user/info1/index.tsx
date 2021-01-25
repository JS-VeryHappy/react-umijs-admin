import React from 'react';
import styles from './index.less';
import {
  Row,
  Col,
  Card,
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
import BodyCustom from './BodyCustom';
import HeaderCustom from './HeaderCustom';
import TimelineCustom from './TimelineCustom';

const { Title, Text } = Typography;

function UserInfo1() {
  const { initialState } = useModel('@@initialState');
  const { name, email, position, desc, tags, phone, address } = initialState;

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <div className={styles.info}>
          <Col span={24}>
            <HeaderCustom name={name} desc={desc} headimg={headimg} />
          </Col>
          <Col span={24}>
            <BodyCustom {...initialState} />
          </Col>
          <Col span={24}>
            <TimelineCustom />
          </Col>
        </div>
      </Row>
    </>
  );
}

export default UserInfo1;
