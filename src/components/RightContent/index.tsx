import React, { useEffect } from 'react';
import { Menu, Avatar, Dropdown, Space } from 'antd';
import {
  LogoutOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';
//@ts-ignore
import { history, useModel, Link, SelectLang, useIntl } from 'umi';
import styles from './index.less';
import { Tooltip, Tag } from 'antd';
import headimg from '@/assets/images/headimg.jpeg';
import Notice from '@/components/Notice';

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
      <Menu.Item key="userinfo">
        <Link to="/user/info">
          <UserOutlined />
          {intl.formatMessage({
            id: 'layout.header.userinfo',
            defaultMessage: '个人中心',
          })}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
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

  const { notification, setNotification } = useModel('useNoticeModel');
  console.log(useModel('useNoticeModel'));

  useEffect(() => {
    setNotification([
      {
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '你收到了 14 份新周报',
        datetime: '3 年前',
        read: false,
      },
      {
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        datetime: '3 年前',
        read: false,
      },
      {
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '这种模板可以区分多种通知类型',
        datetime: '3 年前',
        read: false,
      },
    ]);
  }, []);

  const onClick1 = (item: any, index: number) => {
    // debugger
    // if (!notification[index].read) {

    // }
    // notification[index].read = true
    notification[index].title = '小丑竟是我自己';
    setNotification(notification);

    setTimeout(() => console.log(notification), 3000);
  };

  const notice = (
    <div className={styles.notice}>
      <Notice>
        <Notice.Tab
          tabKey="notification"
          title="通知"
          data={notification}
          onClick={onClick1}
        />
      </Notice>
    </div>
  );

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

      <Dropdown overlay={notice} trigger={['hover']}>
        <Space>
          <MessageOutlined />
        </Space>
      </Dropdown>

      <Dropdown overlay={menu}>
        <Space
          style={{
            cursor: 'pointer',
          }}
        >
          <Avatar src={headimg} size="small" />
          <span>{name}</span>
        </Space>
      </Dropdown>

      <SelectLang className={styles.action} postLocalesData={postLocalesData} />
    </div>
  );
}

export default RightContent;
