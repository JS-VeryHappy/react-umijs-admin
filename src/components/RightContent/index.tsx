import React from 'react';
import { Menu,Avatar,Dropdown,Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { history,useModel,Link } from 'umi';

interface RightContentType {

  /**
   *
   * 显示名称
   */
  name?:string | undefined

}

function RightContent(Props:RightContentType) {
  const { initialState} = useModel('@@initialState');
  if (!initialState) {
    return null;
  }
  const {
    name
  } = initialState;

  const signOut = ()=>{
    setTimeout(()=>{
      //请求服务退出登录 目前没有
      history.push('/signIn');
    },100);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={signOut}>
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Space align="center">
        {
          process.env.UMI_ENV === 'local'?<a target="_blank" href="/~docs" >开发文档</a>:''
        }
        <Dropdown overlay={menu}>
          <Space style={{
            cursor: 'pointer'
          }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}  size="small"  />
            <span >{name}</span>
          </Space>
        </Dropdown>
      </Space>
    </>
  );
}

export default RightContent;
