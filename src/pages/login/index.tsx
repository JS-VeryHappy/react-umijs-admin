import React, { useEffect, useState } from 'react';
import { history, useModel, useRequest } from 'umi';
import { login } from '@/services';
import { Image, message } from 'antd';
import styles from './index.less';
import ProFormCustom from '@/components/ProFormCustom';
import { mobileConfig, accountConfig } from './define';
import { Row, Col, Typography, Tabs, Space } from 'antd';
import classnames from 'classnames';
import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { waitTime } from '@/utils';

const { Title } = Typography;
const { TabPane } = Tabs;

function UserMobileLogin() {
  const [type, setType] = useState<string>('mobile');
  const { setInitialState } = useModel('@@initialState');

  const { run: onFinish } = useRequest(
    async (values: any) => {
      try {
        let res = await login(values);
        message.success('登录成功');
        setInitialState(res.data);
        setTimeout(() => {
          history.push('/');
        }, 0);
      } catch (e) {}
    },
    {
      manual: true,
    },
  );

  const tabOnChange = (key: any) => {
    setType(key);
  };

  const onGetCaptcha = async (mobile: any) => {
    await waitTime(1000);
    message.success(`手机号 ${mobile} 验证码发送成功!`);
  };

  return (
    <>
      <Row className={styles.login} align="middle" justify="center">
        <Col xs={0} sm={0} md={12} lg={14} xl={16}></Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={6}>
          <Row justify="center">
            <Row
              justify="center"
              className={classnames(styles.main, 'global-shadow-3-down')}
            >
              <Col span={24}>
                {' '}
                <Title style={{ color: '#fff' }}>欢迎登录</Title>
              </Col>
              <Col span={24} className={styles.box}>
                <Tabs
                  defaultActiveKey={type}
                  onChange={tabOnChange}
                  size="large"
                >
                  <TabPane tab="手机登录" key="mobile" />
                  <TabPane tab="账号登录" key="account" />
                </Tabs>
                <ProFormCustom
                  size="large"
                  submitter={{
                    searchConfig: {
                      submitText: '登录',
                    },
                    submitButtonProps: {
                      style: {
                        width: '100%',
                        marginTop: '20px',
                      },
                    },
                    render: (_: any, dom: any) => dom.pop(),
                  }}
                  formConfig={
                    type === 'mobile'
                      ? mobileConfig(onGetCaptcha)
                      : accountConfig
                  }
                  onSubmit={onFinish}
                />
                <Space className={styles.other}>
                  其他登录方式:
                  <AlipayCircleOutlined className={styles.icon} />
                  <TaobaoCircleOutlined className={styles.icon} />
                  <WeiboCircleOutlined className={styles.icon} />
                </Space>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </>
  );
}

export default UserMobileLogin;
