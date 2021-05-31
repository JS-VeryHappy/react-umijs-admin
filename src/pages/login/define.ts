import { MobileTwoTone, LockTwoTone, ContactsTwoTone, MailTwoTone } from '@ant-design/icons';
import React from 'react';
import type { ProFormColumnsType } from '@ant-design/pro-form';

export const mobileConfig = () => {
  const config: ProFormColumnsType[] = [
    {
      valueType: 'text',
      name: 'mobile',
      title: '手机码号',
      tooltip: '钉钉登录手机号',
      fieldProps: {
        placeholder: '请输入手机码号',
        maxLength: 11,
        prefix: React.createElement(MobileTwoTone),
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入手机码号' }],
      },
    },
    {
      valueType: 'text',
      name: 'captcha',
      title: '验证码',
      width: 'auto',
      fieldProps: {
        placeholder: '请输入验证码',
        maxLength: 6,
        prefix: React.createElement(MailTwoTone),
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入验证码' }],
      },
      //   onGetCaptcha:onGetCaptcha,
      //   captchaProps: {
      //     size: 'large',
      //   },
    },
  ];
  return config;
};

export const accountConfig: ProFormColumnsType[] = [
  {
    valueType: 'text',
    name: 'account',
    title: '账号',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
      prefix: React.createElement(ContactsTwoTone),
    },
    formItemProps: {
      rules: [{ required: true, message: '请输入账号' }],
    },
  },
  {
    valueType: 'password',
    name: 'password',
    title: '密码',
    fieldProps: {
      placeholder: '请输入密码',
      maxLength: 11,
      prefix: React.createElement(LockTwoTone),
    },
    formItemProps: {
      rules: [{ required: true, message: '请输入密码' }],
    },
  },
];
