import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { message, Button } from 'antd';
import type { FormChildrenConfigType } from '@/components/ProFormCustom/types';
import { PlusOutlined } from '@ant-design/icons';

function ProForm() {
  const [visible, setVisible] = useState(false);

  const config: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: 'ProFormText',
          name: 'jobnumber',
          label: '工号',
          tooltip: '我是提示消息不无法解析html<br>hahahahah',
          placeholder: '今天是个好日子',
          fieldProps: {
            maxLength: 10,
          },
        },
      ],
    },
  ];

  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };

  const Drawer = (
    <Button type="primary">
      <PlusOutlined />
      Drawer新建表单
    </Button>
  );
  const btn = (
    <Button type="primary">
      <PlusOutlined />
      绑定按钮
    </Button>
  );
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        自定义关联按钮
      </Button>
      <ProFormCustom
        modal={{
          title: '弹窗表单',
          width: 500,
          // 自定义关联配置
          visible,
          onCancel: () => {
            console.log(visible);
            setVisible(false);
          },
        }}
        formConfig={config}
        onSubmit={onSubmit}
      />
      <br />
      <br />
      <ProFormCustom
        modal={{
          title: '弹窗表单',
          width: 500,
          // 内联按钮专用
          trigger: btn,
        }}
        formConfig={config}
        onSubmit={onSubmit}
      />
      <br />
      <br />
      <ProFormCustom
        modal={{
          mode: 'Drawer',
          title: 'Drawer',
          width: 500,
          // 内联按钮专用
          trigger: Drawer,
        }}
        formConfig={config}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default ProForm;
