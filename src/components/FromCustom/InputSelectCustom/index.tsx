import { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { message } from 'antd';
import type { optionType } from '@/components/FromCustom/types';

interface InputSelectCustomType {
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps: {
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
     * select选择数据
     * @default []
     */
    options?: optionType[] | undefined;
  };
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
  const { readonly, fieldProps } = Props;
  const { onChange, value, options } = fieldProps;

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
      message.info(`Input切换值${e.target.value}`);
    }
  };
  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param paramValue
   */
  const onSelectChange = (paramValue: any) => {
    setSelectValue(paramValue);
    if (onChange && typeof onChange === 'function') {
      onChange([paramValue, inputValue]);
    } else {
      message.info(`Select切换值${paramValue}`);
    }
  };

  return (
    <>
      {readonly ? (
        `${value && value[0] ? options?.find((i: any) => i.value === value[0])?.label : ''}-${
          value && value[1] ? value[1] : ''
        }`
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
            <Input value={inputValue} {...fieldProps} onChange={onInputChange} />
          </Form.Item>
        </Input.Group>
      )}
    </>
  );
}

export default InputSelectCustom;
