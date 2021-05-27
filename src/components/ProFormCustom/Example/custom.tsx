import React, { useState, useEffect, useRef } from 'react';
import ProFormCustom from '@/components/ProFormCustom';
import { Form, message } from 'antd';
import type {
  FormChildrenConfigType,
  OptionsType,
  FormConfigType,
} from '@/components/ProFormCustom/types';

function ProForm() {
  const [options, setOptions] = useState<OptionsType[]>([]);
  // 定义一个实例变量 实例完成后 不会受状态更新影响先有的值
  const intervalRef = useRef<FormConfigType[]>([]);
  // 使用一个状态来触发更新
  const [update, setUpdate] = useState<number>(0);

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

  const handledOnClick = () => {
    const { length } = intervalRef.current;
    intervalRef.current.push({
      mold: 'ProFormText',
      name: `ProFormText.${length}`,
      label: `ProFormText${length}`,
      rules: [{ required: true, message: '请输入正确值' }],
    });
    setUpdate(update + 1);
  };
  const config: FormChildrenConfigType[] = [
    {
      title: '自定义组件1',
      children: [
        {
          mold: 'AddButtonCustom',
          className: 'ddd',
          label: 'AddButtonCustom',
          onClick: handledOnClick,
        },
        {
          mold: 'ProFormFieldSet',
          name: 'ProFormFieldSet',
          label: '我会被动态的添加',
          children: [...intervalRef.current],
        },
      ],
    },
    {
      title: '自定义组件2',
      children: [
        {
          mold: 'InputTooltipCustom',
          label: '输入框Tooltip组合',
          name: 'InputTooltipCustom',
          onClick: handledOnClick,
          rules: [{ required: true, message: '填写内容' }],
          tooltipTitle: 'xxxxx',
          fieldProps: {
            className: 'cccc',
          },
        },
        {
          mold: 'InputSelectCustom',
          label: 'Input组合Select',
          name: 'InputSelectCustom',
          options,
          rules: [
            { required: true, message: '填写内容' },
            {
              validator: async (rule: any, value: any) => {
                if (value && (!value[0] || !value[1])) {
                  return Promise.reject('至少填写两个');
                }
              },
            },
          ],
        },
        {
          mold: 'InputAutoCompleteCustom',
          label: '输入框自动完成',
          name: 'InputAutoCompleteCustom',
          // readonly:true,
          // disabled:true,
          rules: [{ required: true, message: '填写内容' }],
          options: [
            {
              label: '城市1',
              value: '城市1',
            },
            {
              label: '城市2',
              value: '城市2',
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
  };

  return (
    <>
      <ProFormCustom
        formConfig={config}
        onSubmit={onSubmit}
        onValuesChange={onValuesChange}
        initialValues={initialValues}
      />
    </>
  );
}

export default ProForm;
