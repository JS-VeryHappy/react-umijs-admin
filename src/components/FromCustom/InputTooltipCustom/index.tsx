import { useState, useEffect } from 'react';
import { Input, Tooltip } from 'antd';
import { message } from 'antd';

interface InputTooltipCustomType {
  /**
   * 是否只读模式
   * 自定义必须要实现的
   * @default false
   */
  readonly?: false;
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
     * 按钮点击后触发事件
     * @param value
     */
    onClick?: (value: any) => any | undefined;

    /**
     * tooltip 显示文字
     * @default Need Help?
     */
    tooltipText?: string | undefined;
    /**
     * tooltip 提示文字
     * @default 我是提示
     */
    tooltipTitle?: string | undefined;
  };
}

function InputTooltipCustom(Props: InputTooltipCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const fieldProps = Props.fieldProps || {};
  const readonly = Props.readonly || false;
  const { onClick, tooltipText, tooltipTitle, onChange, value } = fieldProps;

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
      message.info(`切换值${e.target.value}`);
    }
  };

  return (
    <>
      {readonly ? value : <Input {...fieldProps} value={inputValue} onChange={onInputChange} />}
      <Tooltip title={tooltipTitle || '我是提示'}>
        <a onClick={onClick || undefined} style={{ margin: '0 8px' }}>
          {tooltipText || 'Need Help?'}
        </a>
      </Tooltip>
    </>
  );
}

export default InputTooltipCustom;
