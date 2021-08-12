import type { ProFormColumnsType, FormFieldType } from '@ant-design/pro-form';
import type { FormSchema } from '@ant-design/pro-form/lib/components/SchemaForm/index';

/**
 * formColumns列类型
 */
export declare type ValueType =
  | 'text'
  | 'InputTooltipCustom'
  | 'InputSelectCustom'
  | 'InputAutoCompleteCustom'
  | 'ProFormCaptchaCustom'
  | FormFieldType;

// 字典数据类型
export interface OptionType {
  /**
   * 数据显示值
   */
  label: string;
  /**
   * 数据返回值
   */
  value: any;
}

// formColumns参数类型
export declare type FormCustomColumnsType<T = any> = ProFormColumnsType<T, ValueType>;

// form参数类型
export declare type FromCustomProps = FormSchema & {
  /**
   * 是否只读模式
   * @default false
   */
  readonly?: boolean;
};
