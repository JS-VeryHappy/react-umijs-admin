import { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import { message } from 'antd';
import type { optionType } from '@/components/FromCustom/types';

interface fieldPropsType {
  /**
   * 默认值
   * 自定义必须要实现的
   */
  value?: any;
  /**
   * 切换触发方法
   * 自定义必须要实现的
   */
  onChange?: (value: any) => void | undefined;
  /**
   * select选择数据
   * @default []
   */
  options?: optionType[];
}

interface InputAutoCompleteCustomType {
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps?: fieldPropsType;

  /**
   * 是否只读模式
   * 自定义必须要实现的
   * @default false
   */
  readonly?: false;
}

function InputAutoCompleteCustom(Props: InputAutoCompleteCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const fieldProps = Props.fieldProps || {
    style: {
      width: '200px',
    },
    options: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
    ],
    value: undefined,
    onChange: () => {},
  };
  const readonly = Props.readonly || false;
  const { onChange, value, options } = fieldProps;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值
     */
    setInputValue(value);
  }, []);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param value
   */
  const onInputChange = (value: any) => {
    setInputValue(value);
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    } else {
      message.info(`Input切换值${value}`);
    }
  };

  return (
    <>
      {readonly ? (
        value
      ) : (
        <AutoComplete
          value={inputValue}
          {...fieldProps}
          options={options}
          // onSelect={onSelect}
          // onSearch={onSearch}
          onChange={onInputChange}
        />
      )}
    </>
  );
}

export default InputAutoCompleteCustom;
