import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import { message } from 'antd';
import { OptionsType } from '@/components/ProFormCustom/types';

interface InputSelectCustomType {
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps?: {} | undefined;
  /**
   * select选择数据
   * @default []
   */
  options?: OptionsType[];
  /**
   * 默认值
   * 自定义必须要实现的
   */
  value?: any;
  /**
   * 切换触发方法
   * 自定义必须要实现的
   */
  onChange?: (value: any) => void;
  /**
   * 是否只读模式
   * 自定义必须要实现的
   * @default false
   */
  readonly?: false;
}

function InputSelectCustom(Props: InputSelectCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const [selectValue, setSelectValue] = useState<any>(null);

  const { Option } = Select;

  const { fieldProps, readonly, onChange, value, options } = Props;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值
     */
    if (value && value[1]) {
      setInputValue(value[1]);
    }
    if (value && value[0]) {
      setSelectValue(value[0]);
    }
  }, []);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param e
   */
  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange([selectValue, e.target.value]);
    } else {
      message.info('Input切换值' + e.target.value);
    }
  };
  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param value
   */
  const onSelectChange = (value: any) => {
    setSelectValue(value);
    if (onChange && typeof onChange === 'function') {
      onChange([value, inputValue]);
    } else {
      message.info('Select切换值' + value);
    }
  };
  /**
   * 如果直接使用下Input的默认值 文档说明看起好看一点
   */
  let defaultFieldProps = fieldProps
    ? {}
    : {
        style: {
          width: '300px',
        },
        placeholder: '请输入',
        allowClear: true,
      };

  let selectOptions = fieldProps
    ? options || []
    : [
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
      ];

  return (
    <>
      {readonly ? (
        (value && value[0]
          ? selectOptions.find((i: any) => i.value === value[0])?.label
          : '') +
        '-' +
        (value && value[1] ? value[1] : '')
      ) : (
        <Input.Group compact>
          <Form.Item noStyle>
            <Select
              placeholder="请选择"
              onChange={onSelectChange}
              // @ts-ignore
              options={selectOptions}
            ></Select>
          </Form.Item>
          <Form.Item noStyle>
            <Input
              value={inputValue}
              {...defaultFieldProps}
              {...fieldProps}
              onChange={onInputChange}
            />
          </Form.Item>
        </Input.Group>
      )}
    </>
  );
}

export default InputSelectCustom;
