import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { Form, message } from 'antd';
import type {
  FormChildrenConfigType,
  OptionsType} from '@/components/ProFormCustom/types';
import {
  FormConfigType,
} from '@/components/ProFormCustom/types';

function ProForm() {
  const [form] = Form.useForm();

  const [options, setOptions] = useState<OptionsType[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = [
        {
          label: '城市',
          value: '城市',
        },
        {
          label: '城市1',
          value: '城市1',
        },
      ];
      setOptions(data);
    })();
  }, []);

  const config: FormChildrenConfigType[] = [
    {
      title: '联动',
      children: [
        {
          mold: 'ProFormText',
          name: 'note',
          label: 'note',
        },
        {
          mold: 'ProFormSelect',
          name: 'beginCityId',
          label: '出发城市',
          placeholder: '请输入出发城市',
          options: [
            {
              label: '城市1',
              value: 1,
            },
            {
              label: '城市2',
              value: 2,
            },
          ],
        },
        {
          mold: 'ProFormSelect',
          name: 'beginAreaId',
          label: '出发区域',
          placeholder: '请输入出发城市',
          options,
        },
        {
          moldShow: show,
          mold: 'ProFormSelect',
          name: 'beginAreaId1',
          label: '出发区域1',
          placeholder: '请输入出发城市',
          options,
        },
      ],
    },
  ];

  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };

  const initialValues = {
    InputNumber: 1,
    select: 1,
    note: 'ddd',
    InputAutoCompleteCustom: 'ddd',
    // SelectInputCustom: [1,"2222aaa"]
  };

  // 监听表单变化
  const onValuesChange = (hangedValues: any, values: any) => {
    message.success('监听值变化');
    if (hangedValues.beginCityId) {
      form.setFieldsValue({
        note: hangedValues.beginCityId,
        beginAreaId: null,
      });
      setOptions([
        {
          label: '测试',
          value: 11111,
        },
      ]);
      setShow(true);
    }
  };

  return (
    <>
      <ProFormCustom
        form={form}
        formConfig={config}
        onSubmit={onSubmit}
        onValuesChange={onValuesChange}
        initialValues={initialValues}
      />
    </>
  );
}

export default ProForm;
