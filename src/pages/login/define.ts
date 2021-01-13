import { FormChildrenConfigType } from '@/components/ProFormCustom/types';
import { MobileTwoTone, LockTwoTone } from '@ant-design/icons';
import React from 'react';

export const config: FormChildrenConfigType[] = [
  {
    children: [
      {
        mold: "ProFormText",
        name: "mobile",
        label: "手机码号",
        tooltip: '钉钉登录手机号',
        placeholder: "请输入手机码号",
        width: "m",
        fieldProps: {
          maxLength: 11,
          prefix: React.createElement(MobileTwoTone),
        },
        rules: [{ required: true, message: '填写手机' }]
      }
    ]
  },
  {
    children: [
      {
        mold: "ProFormText.Password",
        name: "password",
        label: "密码",
        width: "m",
        placeholder: "请输入密码",
        fieldProps: {
          maxLength: 11,
          prefix: React.createElement(LockTwoTone),
        },
        rules: [{ required: true, message: '填写密码' }]
      }
    ]
  }
]