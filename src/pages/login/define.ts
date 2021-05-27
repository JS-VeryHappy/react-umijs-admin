import { FormChildrenConfigType } from '@/components/ProFormCustom/types';
import { MobileTwoTone, LockTwoTone, ContactsTwoTone, MailTwoTone } from '@ant-design/icons';
import React from 'react';
import { message } from 'antd';

export const mobileConfig = (onGetCaptcha: Function) => {
  const mobileConfig: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: 'ProFormText',
          name: 'mobile',
          label: '手机码号',
          tooltip: '钉钉登录手机号',
          placeholder: '请输入手机码号',
          width: 'm',
          fieldProps: {
            maxLength: 11,
            prefix: React.createElement(MobileTwoTone),
          },
          rules: [{ required: true, message: '请输入手机码号' }],
        },
      ],
    },
    {
      children: [
        {
          mold: 'ProFormCaptcha',
          name: 'captcha',
          label: '验证码',
          width: 'auto',
          placeholder: '请输入验证码',
          phoneName: 'mobile',
          fieldProps: {
            maxLength: 6,
            prefix: React.createElement(MailTwoTone),
          },
          rules: [{ required: true, message: '请输入验证码' }],
          onGetCaptcha: onGetCaptcha,
          captchaProps: {
            size: 'large',
          },
        },
      ],
    },
  ];
  return mobileConfig;
};

export const accountConfig: FormChildrenConfigType[] = [
  {
    children: [
      {
        mold: 'ProFormText',
        name: 'account',
        label: '账号',
        placeholder: '请输入账号',
        width: 'm',
        fieldProps: {
          maxLength: 20,
          prefix: React.createElement(ContactsTwoTone),
        },
        rules: [{ required: true, message: '请输入账号' }],
      },
    ],
  },
  {
    children: [
      {
        mold: 'ProFormText.Password',
        name: 'password',
        label: '密码',
        width: 'm',
        placeholder: '请输入密码',
        fieldProps: {
          maxLength: 11,
          prefix: React.createElement(LockTwoTone),
        },
        rules: [{ required: true, message: '请输入密码' }],
      },
    ],
  },
];
