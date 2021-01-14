import { FormInstance, FormItemProps } from 'antd/lib/form';
import { ReactNode } from 'react';
import { ProFormItemProps } from '@ant-design/pro-form/lib/interface';
/**
 * 验证规则
 * https://ant.design/components/form-cn/#Rule
 */
export interface RulesType {
  /**
   * 是否必须
   */
  required?: boolean;
  /**
   * 错误提示信息
   */
  message?: string;
  /**
   * 定义验证规则
   */
  validator?: (rule: any, value: any) => Promise<any>;
}

export interface OptionsType {
  /**
   * 显示名称
   */
  label: string | number;
  /**
   * 值
   */
  value: string | number;
}

/**
 * formConfig 表单字段属性值
 * title: formConfig
 */
export interface FormConfigType extends FormItemProps {
  /**
   * 表单字段类型
   */
  mold: string;
  /**
   * 是否显示字段
   * @default false
   */
  moldShow?: boolean | undefined;
  /**
   * 表单字段名
   */
  name?: string;
  /**
   * 表单名称
   */
  label?: string;
  /**
   * 输入框提示文字
   */
  placeholder?: string;
  /**
   * label提示文字
   */
  tooltip?: string | ReactNode;
  /**
   * 最小选择
   */
  min?: number;
  /**
   * 最大选择
   */
  max?: number;
  /**
   * 多选时的选择参数
   */
  options?: OptionsType[];
  /**
   * 枚举类型
   */
  valueEnum?: any;
  /**
   * 禁止
   * @default false
   */
  disabled?: boolean;
  /**
   * 只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 清除按钮
   * @default false
   */
  allowClear?: boolean;
  /**
   * 开启搜索,
   * @default false
   */
  showSearch?: boolean;
  /**
   * 字段验证,
   */
  rules?: undefined | RulesType[] | ((event: any) => any) | any;
  /**
   * 自定义验证状态
   */
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
  /**
   * 自定义验证开启
   * @default false
   */
  hasFeedback?: boolean;
  /**
   * 自定义验证提示
   */
  help?: string;
  /**
   * 上传图片的地址
   */
  action?: string;
  /**
   * profrom所有基础组件都是使用 antd-form 使用该属性进行传值。如果支持透传的属性可以直接在上方定义
   * https://procomponents.ant.design/components/form#%E6%B7%B7%E5%90%88%E4%BD%BF%E7%94%A8
   */
  fieldProps?: any;
  /**
   * - auto 使用组件默认的宽度
   * - XS=104px 适用于短数字、短文本或选项。
   * - S=216px 适用于较短字段录入、如姓名、电话、ID 等。
   * - M=328px 标准宽度，适用于大部分字段长度。
   * - L=440px 适用于较长字段录入，如长网址、标签组、文件路径等。
   * - XL=552px 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
   * 表格宽度
   * @default s
   */
  width?: number | 'xs' | 's' | 'm' | 'l' | 'x' | 'auto';
  /**
   * 设置是按钮模式还是 radio 模式
   * @default radio
   */
  radioType?: 'button' | 'radio';
  /**
   * className
   */
  className?: string;
  /**
   * 点击后回调方法
   */
  onClick?: Promise<any> | ((data: any) => any) | any;
  /**
   * 当前字段子节点
   */
  children?: FormConfigType[];
  /**
   *  InputTooltipCustom 提示文字
   */
  tooltipTitle?: string;
  /**
   *  InputTooltipCustom 限制文字
   */
  tooltipText?: string;
  /**
   * 验证码组件回调
   */
  onGetCaptcha?: Promise<any> | ((data: any) => any) | any;
  /**
   * 验证码组件Props
   */
  captchaProps?: any;
  /**
   * 验证码组件关联电话
   */
  phoneName?: string;
}

export interface FormChildrenConfigType {
  /**
   * 标题
   */
  title?: string | undefined;
  /**
   * 表单列表
   */
  children: FormConfigType[];
}

export interface FormStepsChildrenConfigType {
  /**
   * 标题
   */
  title?: string | undefined;
  /**
   * name属性
   */
  name?: string | undefined;
  /**
   * 分步列表
   */
  stepsChildren: FormChildrenConfigType[];
}

export interface ProCardType {
  /**
   * 标题
   */
  title?: string | undefined;
  bordered?: boolean;
  headerBordered?: boolean;
  collapsible?: boolean;
  style?: {};
  bodyStyle?: {};
}
/**
 * 配置按钮文字
 */
export interface SearchConfigType {
  /**
   * 重置按钮
   * @default false
   */
  resetText?: string | boolean | undefined;
  /**
   * 提交按钮
   */
  submitText?: string | boolean | undefined;
}

/**
 * 分步骤表单配置列表
 */
// @ts-ignore
export interface StepsPropsType extends PropsType {
  formConfig: FormStepsChildrenConfigType[];
}

export interface SubmitterType {
  /**
   * 按钮配置
   */
  searchConfig?: undefined | SearchConfigType;
  /**
   * 重置按钮的 props
   */
  resetButtonProps?: undefined | {};
  /**
   * 提交按钮的 props
   */
  submitButtonProps?: undefined | {};
  /**
   * 自定义渲染
   */
  render?:
    | false
    | ((props: any, dom: ReactNode[]) => ReactNode[])
    | undefined
    | any;
}

export interface ModalType {
  /**
   * 类型 Model弹窗 | Drawer 弹窗
   * @default Model
   */
  mode?: string | undefined;
  /**
   * 标题
   */
  title?: string | undefined;
  /**
   * 宽度
   * @default 800
   */
  width?: number | undefined;
  /**
   * 控制显示弹窗
   */
  visible?: boolean | undefined;
  /**
   * 关闭弹窗回调
   */
  onCancel?: ((data: any) => any) | undefined;
  /**
   * 普通表单 设置按钮
   */
  trigger?: ReactNode | undefined;
}

/**
 * 表单配置Props
 */
export interface PropsType {
  /**
   * 普通表单配置列表
   */
  formConfig: FormChildrenConfigType[];
  /**
   * 标签的文本对齐方式
   * @default left
   */
  labelAlign?: 'left' | 'right' | undefined;
  /**
   * 样式大小设置
   * @default middle
   */
  size?: 'small' | 'middle' | 'large' | undefined;
  /**
   * 布局样式
   * @default vertical
   */
  layout?: 'horizontal' | 'vertical' | 'inline' | undefined;
  /**
   * 通过 requiredMark 切换必选与可选样式
   * @default true
   */
  requiredMark?: 'optional' | boolean | undefined;
  /**
   * submitter 配置表单属性
   */
  submitter?: SubmitterType;
  /**
   * 点击提交方法后回调方法
   */
  onSubmit?: Promise<any> | ((data: any) => any) | any;
  /**
   * 值变化的回调函数
   */
  onValuesChange?:
    | Promise<any>
    | ((changedValues: any, values: any) => any)
    | any;
  /**
   * 表单初始值
   */
  initialValues?: undefined | {};
  /**
   * 绑定当前表单的useForm
   */
  form?: FormInstance<any> | undefined | any;
  /**
   * 是否使用弹窗模式
   * @default false
   */
  modal?: ModalType | undefined;
}
