/**
 * title: 普通使用
 * desc: 我可以禁用、只读、监听值变化、初始化默认值等
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
          mold: 'ProFormText',
          name: 'jobnumber',
          label: '工号',
        },
        {
          mold: 'ProFormText.Password',
          name: 'password',
          label: '密码',
          disabled: true,
        },
        {
          mold: 'ProFormDigit',
          name: 'InputNumber',
          label: 'InputNumber',
          min: 1,
          max: 10,
        },
        {
          mold: 'ProFormText',
          name: 'jobnumber1',
          label: '工号1',
          validateStatus: 'warning',
          hasFeedback: true,
          help: '自定义信息',
        },
      ],
    },
    {
      title: '分组标题',
      children: [
        {
          mold: 'ProFormDatePicker',
          name: 'date',
          label: '日期',
        },
        {
          mold: 'ProFormDateTimePicker',
          name: 'datetime',
          label: '日期',
        },
        {
          mold: 'ProFormDateRangePicker',
          name: 'datetimeRange',
          label: '日期',
        },
        {
          mold: 'ProFormTimePicker',
          name: 'time',
          label: '时间',
        },
      ],
    },
    {
      title: 'select分组',
      children: [
        {
          mold: 'ProFormSelect',
          name: 'select',
          label: 'select',
          readonly: true,
          showSearch: true,
          allowClear: true,
          disabled: true,
          options: [
            {
              label: 'item 1',
              value: 1,
            },
            {
              label: 'item 2',
              value: 2,
            },
          ],
        },
        {
          mold: 'ProFormSelect',
          name: 'select1',
          label: 'select1',
          hasFeedback: true,
          valueEnum: {
            man: '男',
            woman: '女',
          },
        },
        {
          mold: 'ProFormCheckbox.Group',
          name: 'checkbox',
          label: '行业分布',
          options: [
            {
              label: 'item 1',
              value: 'a',
            },
          ],
        },
        {
          mold: 'ProFormRadio.Group',
          name: 'radio-group',
          label: 'radio-group',
          radioType: 'button',
          width: 'l',
          options: [
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ],
        },
      ],
    },
    {
      title: '上传分组',
      children: [
        {
          mold: 'ProFormUploadButton',
          name: 'upload',
          label: 'upload',
          action: '/api/upload',
        },
        {
          mold: 'ProFormUploadDragger',
          name: 'Dragger',
          label: 'Dragger',
          action: '/api/dragger',
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

  //监听表单变化
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
