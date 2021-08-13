import { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import { message } from 'antd';
import type { OptionType } from '@/components/FromCustom/types';

interface InputAutoCompleteCustomType {
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps?: {
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
    options?: OptionType[];
  };

  /**
   * 是否只读模式
   * 自定义必须要实现的
   * @default false
   */
  readonly?: false;
  /**
   * 从远程请求网络数据，一般用于选择类组件
   */
  request?: (params: any, props: any) => Promise<{ label: any; value: any }[]>;
  /**
   * 额外传递给 request 的参数，组件不做处理,但是变化会引起request 重新请求数据
   */
  params?: Record<string, any>;
}

function InputAutoCompleteCustom(Props: InputAutoCompleteCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const [nowOptions, setNowOptions] = useState<any>(null);
  const { request, params } = Props;
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
  const { onChange, value, options, ...rest } = fieldProps;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值
     */
    setInputValue(value);

    if (request) {
      const getOptions = async () => {
        const data = await request(params, fieldProps);
        setNowOptions(data);
      };
      getOptions();
    } else {
      if (options) {
        setNowOptions(options);
      }
    }
  }, []);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param value
   */
  const onInputChange = (avalue: any) => {
    setInputValue(avalue);
    if (onChange && typeof onChange === 'function') {
      onChange(avalue);
    } else {
      message.info(`Input切换值${avalue}`);
    }
  };

  return (
    <>
      {readonly ? (
        value
      ) : (
        <AutoComplete
          value={inputValue}
          placeholder="请输入"
          {...rest}
          options={nowOptions}
          // onSelect={onSelect}
          // onSearch={onSearch}
          onChange={onInputChange}
        />
      )}
    </>
  );
}

export default InputAutoCompleteCustom;
