import React, { useState, useEffect, useRef } from 'react';
import {ProStepsFormCustom} from '@/components/ProFormCustom';
import { message } from 'antd';
import { FormStepsChildrenConfigType } from '@/components/ProFormCustom/types';

function ProForm() {
  let config: FormStepsChildrenConfigType[] = [
    {
      title: '第一步',
      name: 'a',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProFormText',
              name: 'name1',
              label: 'name1'
            },
          ],
        },
      ],
    },
    {
      title: '第二步',
      name: 'b',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProFormText',
              name: 'name2',
              label: 'name2'
            },
          ],
        },
      ],
    },
    {
      title: '第三步',
      name: 'c',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProFormText',
              name: 'name3',
              label: 'name3'
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
      <ProStepsFormCustom
        formConfig={config}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default ProForm;
