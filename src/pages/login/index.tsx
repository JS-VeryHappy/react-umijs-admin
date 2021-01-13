import React, { useEffect } from 'react';
import { history, useModel, useRequest } from 'umi';
import { login } from '@/services';
import { Image, message } from 'antd';
import styles from './index.less';
import ProFormCustom from '@/components/ProFormCustom';
import { config } from './define';
import { Row, Col, Typography } from 'antd';
import classnames from 'classnames';

const { Title } = Typography;

function UserMobileLogin() {

  const { setInitialState } = useModel('@@initialState');

  const { run: onFinish } = useRequest(async (values: any) => {
    try {
      let res = await login(values);
      message.success('登录成功');
      setInitialState(res.data);
      setTimeout(() => {
        history.push('/');
      }, 0);
    } catch (e) {

    }
  }, {
    manual: true
  });

  return (
    <>
      <Row className={styles.login} align="middle" justify="center">
        <Col xs={0} sm={0} md={12} lg={14} xl={16}  ></Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={6}  >
          <Row justify="center" >
            <Row justify="center" className={classnames(styles.main, 'global-shadow-3-down')}>
              <Col span={24}> <Title style={{ color: '#fff' }}>欢迎登录</Title></Col>
              <Col span={24} className={styles.box}>
                <ProFormCustom
                  size="large"
                  submitter={{
                    searchConfig: {
                      submitText: '登录'
                    },
                    submitButtonProps: {
                      style: {
                        width: '100%',
                        marginTop:'30px'
                      }
                    },
                    render: (_: any, dom: any) => dom.pop(),
                  }}
                  formConfig={config}
                  onSubmit={onFinish}
                />
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </>

  );
};


export default UserMobileLogin;
