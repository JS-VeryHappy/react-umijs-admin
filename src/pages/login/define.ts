import { MobileTwoTone, LockTwoTone, ContactsTwoTone, MailOutlined } from '@ant-design/icons';
import React from 'react';
import type { FormCustomColumnsType } from '@/components/FromCustom/types';

export const mobileConfig = (onGetCaptcha: any) => {
  const config: FormCustomColumnsType[] = [
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
      valueType: 'ProFormCaptchaCustom',
      name: 'captcha',
      title: '验证码',
      width: 'auto',
      fieldProps: {
        phoneName: 'mobile',
        placeholder: '请输入验证码',
        onGetCaptcha,
        name: 'captcha',
        maxLength: 6,
        fieldProps: {
          prefix: React.createElement(MailOutlined),
        },
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入验证码' }],
      },
    },
  ];
  return config;
};

export const accountConfig: FormCustomColumnsType[] = [
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
