import React from 'react';
import { Menu, Avatar, Dropdown, Space } from 'antd';
import {
  LogoutOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
//@ts-ignore
import { history, useModel, Link, SelectLang, useIntl } from 'umi';
import styles from './index.less';
import { Tooltip, Tag } from 'antd';

interface LocalData {
  lang: string;
  label?: string;
  icon?: string;
  title?: string;
}
function RightContent(Props: any) {
  const { initialState } = useModel('@@initialState');
  const intl = useIntl();

  if (!initialState) {
    return null;
  }

  const { theme, layout } = Props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const { name } = initialState;

  const signOut = () => {
    setTimeout(() => {
      //请求服务退出登录 目前没有
      history.push('/login');
    }, 100);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={signOut}>
          <LogoutOutlined />
          {intl.formatMessage({
            id: 'layout.header.logout',
            defaultMessage: '退出登录',
          })}
        </a>
      </Menu.Item>
    </Menu>
  );

  const postLocalesData = (locales: LocalData[]) => {
    locales.forEach((item: any) => {
      item.key = item.lang;
    });

    return locales;
  };

  return (
    <div className={className}>
      {process.env.UMI_ENV === 'local' && (
        <Tooltip title="使用文档">
          <a
            style={{
              color: 'inherit',
            }}
            target="_blank"
            href="/~docs"
            rel="noopener noreferrer"
            className={styles.action}
          >
            <QuestionCircleOutlined />
          </a>
        </Tooltip>
      )}
      <Dropdown overlay={menu}>
        <Space
          style={{
            cursor: 'pointer',
          }}
        >
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
            size="small"
          />
          <span>{name}</span>
        </Space>
      </Dropdown>

      <SelectLang className={styles.action} postLocalesData={postLocalesData} />
    </div>
  );
}

export default RightContent;
