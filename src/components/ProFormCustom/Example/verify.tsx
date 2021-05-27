import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { message } from 'antd';
import { FormChildrenConfigType } from '@/components/ProFormCustom/types';

function ProForm() {
  let config: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: 'ProFormText',
          name: 'jobnumber',
          label: '工号',
          rules: [
            { required: true, message: '请输入正确工号1' },
            {
              validator(rule: any, value: any) {
                if (!value || value > 5) {
                  return Promise.resolve();
                }
                return Promise.reject('请输入正确工号2');
              },
            },
            (event: any) => ({
              validator(rule: any, value: any) {
                if (!value || value < 5 || value > 10) {
                  return Promise.resolve();
                }
                return Promise.reject('请输入正确工号3');
              },
            }),
          ],
        },
      ],
    },
  ];

  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };

  return (
    <>
      <ProFormCustom formConfig={config} onSubmit={onSubmit} />
    </>
  );
}

export default ProForm;
