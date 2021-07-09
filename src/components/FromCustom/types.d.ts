import type { ProFormColumnsType, FormFieldType } from '@ant-design/pro-form';

export declare type ValueType =
  | 'text'
  | 'InputTooltipCustom'
  | 'InputSelectCustom'
  | 'InputAutoCompleteCustom'
  | 'ProFormCaptchaCustom'
  | FormFieldType;

export interface optionType {
  label: string;
  value: any;
}

export declare type FormCustomColumnsType<T = any> = ProFormColumnsType<T, ValueType>;
