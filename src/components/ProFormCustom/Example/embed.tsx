/**
 * title: 内嵌使用
 * desc: 我可以被嵌入到表单中
 */
import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { message } from 'antd';
import { FormChildrenConfigType } from '@/components/ProFormCustom/types';

function ProForm() {
  let config: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: "ProFormText",
          name: "jobnumber",
          label: "工号",
          tooltip: '我是提示消息不无法解析html<br>hahahahah',
          placeholder: "今天是个好日子",
          fieldProps: {
            maxLength: 10
          }
        }
      ]
    }
  ]

  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };


  return (
    <>
      <ProFormCustom
        formConfig={config}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default ProForm;
