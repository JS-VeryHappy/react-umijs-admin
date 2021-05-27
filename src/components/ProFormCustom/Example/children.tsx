import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { message } from 'antd';
import type { FormChildrenConfigType } from '@/components/ProFormCustom/types';

function ProForm() {
  const config: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: 'ProCard',
          fieldProps: {
            title: '卡片1',
            bordered: true,
            headerBordered: true,
            collapsible: true,
            style: {
              marginBottom: 16,
              minWidth: 920,
              maxWidth: '100%',
            },
          },
          children: [
            {
              mold: 'ProCard',
              fieldProps: {
                title: '卡片2',
                bordered: true,
                headerBordered: true,
                collapsible: true,
                style: {
                  marginBottom: 16,
                  minWidth: 620,
                  maxWidth: '100%',
                },
              },
              children: [
                {
                  mold: 'ProCard',
                  fieldProps: {
                    title: '卡片3',
                    bordered: true,
                    headerBordered: true,
                    collapsible: true,
                    style: {
                      marginBottom: 16,
                      minWidth: 320,
                      maxWidth: '100%',
                    },
                  },
                  children: [
                    {
                      mold: 'ProFormText',
                      name: 'name11',
                      label: 'name11',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          mold: 'ProCard',
          fieldProps: {
            title: '卡片11',
            bordered: true,
            headerBordered: true,
            collapsible: true,
            style: {
              marginBottom: 16,
              minWidth: 320,
              maxWidth: '100%',
            },
          },
          children: [
            {
              mold: 'ProFormText',
              name: 'name111',
              label: 'name111',
            },
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
