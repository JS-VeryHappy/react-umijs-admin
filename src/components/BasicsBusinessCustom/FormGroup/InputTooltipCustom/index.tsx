import React, { useState, useEffect } from 'react';
import { Input, Tooltip } from 'antd';
import { message } from 'antd';


interface InputTooltipCustomType {
  /**
   * 按钮点击后触发事件
   * @param value
   */
  onClick?: (value: any) => any,

  /**
   * tooltip 显示文字
   * @default Need Help?
   */
  tooltipText?: string | undefined,
  /**
   * tooltip 提示文字
   * @default 我是提示
   */
  tooltipTitle?: string | undefined,
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps?: {} | undefined,
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
  readonly?:false
}

function InputTooltipCustom(Props: InputTooltipCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);

  const {
    onClick,
    fieldProps,
    tooltipText,
    tooltipTitle,
    readonly,
    onChange,
    value
  } = Props;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值
     */
    setInputValue(value);
  }, []);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param e
   */
  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange(e.target.value);
    } else {
      message.info('切换值' + e.target.value);
    }
  };

  /**
   * 如果直接使用下Input的默认值 文档说明看起好看一点
   */
  let defaultFieldProps = fieldProps ? {} : {
    style: {
      width: '300px',
    },
    placeholder: '请输入',
    allowClear: true,
  };

  return (
    <>
      {
        readonly
          ?
          value
          :
          <Input
            {...defaultFieldProps}
            {...fieldProps}
            value={inputValue}
            onChange={onInputChange}
        />
      }
      <Tooltip title={tooltipTitle || '我是提示'}>
        <a onClick={onClick || undefined} style={{ margin: '0 8px' }}>
          {tooltipText || 'Need Help?'}
        </a>
      </Tooltip>
    </>
  );
}

export default InputTooltipCustom;
