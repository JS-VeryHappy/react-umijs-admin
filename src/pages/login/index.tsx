import React, { useEffect, useState } from 'react';
import { history, useModel, useRequest } from 'umi';
import { login } from '@/services';
import styles from './index.less';
import ProFormCustom from '@/components/ProFormCustom';
import { mobileConfig, accountConfig } from './define';
import { Row, Col, Typography, Tabs, Space, Image, message } from 'antd';
import classnames from 'classnames';
import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  QrcodeOutlined,
  SlackOutlined,
} from '@ant-design/icons';
import { waitTime } from '@/utils';
import code from '@/assets/images/code.jpg';
import scan from '@/assets/images/scan.png';

const { Title, Text, Link } = Typography;
const { TabPane } = Tabs;

type loginType = 'mobile' | 'account' | 'qrcode';

function UserMobileLogin() {
  const [type, setType] = useState<loginType>('mobile');
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
      } catch (e) { }
    },
    {
      manual: true,
    },
  );

  const tabOnChange = (key: any) => {
    if (type === key && type === 'qrcode') {
      key = 'mobile';
    }
    setType(key);
  };

  const onGetCaptcha = async (mobile: any) => {
    await waitTime(1000);
    message.success(`手机号 ${mobile} 验证码发送成功!`);
  };

  const loginDom = (
    <>
      <Tabs defaultActiveKey={type} onChange={tabOnChange} size="large">
        <TabPane tab="免密登录" key="mobile" />
        <TabPane tab="账号登录" key="account" />
      </Tabs>
      <ProFormCustom
        size="large"
        submitter={{
          searchConfig: {
            submitText: type === 'mobile' ? '注册/登录' : '登录',
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
          type === 'mobile' ? mobileConfig(onGetCaptcha) : accountConfig
        }
        onSubmit={onFinish}
      />
      <Space className={styles.other}>
        其他登录方式:
        <AlipayCircleOutlined className={styles.icon} />
        <TaobaoCircleOutlined className={styles.icon} />
        <WeiboCircleOutlined className={styles.icon} />
      </Space>
    </>
  );
  const qrcodeDom = (
    <>
      <Row align="middle" justify="center">
        <Image width={160} preview={false} src={code} />
        <Image width={160} preview={false} src={scan} />
      </Row>
    </>
  );
  return (
    <>
      <Row className={styles.login} align="middle" justify="center">
        <Col xs={0} sm={0} md={12} lg={14} xl={16}></Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={6}>
          <Row justify="center">
            <Row
              justify="center"
              className={classnames(styles.bg, 'global-shadow-3-down')}
            >
              <div className={styles.main}>
                {/* <Tooltip title={type !== 'qrcode' ? '扫码登录' : '普通登录'} color="blue"> */}
                <div
                  className={classnames(styles.code, type)}
                  onClick={() => {
                    tabOnChange('qrcode');
                  }}
                >
                  {type === 'qrcode' ? (
                    <SlackOutlined
                      style={{ fontSize: '50px', color: '#1890ff' }}
                    />
                  ) : (
                    <QrcodeOutlined
                      style={{ fontSize: '50px', color: '#1890ff' }}
                    />
                  )}
                </div>
                {/* </Tooltip> */}
                <Col span={24}>
                  <Title style={{ color: '#fff' }}>欢迎登录</Title>
                </Col>
                <Col span={24} className={styles.box}>
                  {type !== 'qrcode' ? loginDom : qrcodeDom}
                </Col>
              </div>
            </Row>
          </Row>
        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </>
  );
}

export default UserMobileLogin;
