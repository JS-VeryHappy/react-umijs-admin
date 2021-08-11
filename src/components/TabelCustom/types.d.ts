import type { ProColumns, ProTableProps } from '@ant-design/pro-table';
import type { ValueType } from '@/components/FromCustom/types';

export type requestConfigType = {
  /**
   * 需要调用的请求
   * @default
   */
  request: () => any;
  /**
   * 显示名称的取值key
   * @default label
   */
  label?: string;
  /**
   * 值的取值key
   * @default value
   */
  value?: string;
};

export declare type ProColumnsTypes<T> = ProColumns<T, ValueType> & {
  // 网络发起请求快捷配置 优先级低于 request参数
  requestConfig?: requestConfigType;
};

// 内置弹窗的类型
export declare type modalType = 'Form';
// 内置弹窗配置
export declare type modalPropsType = {
  /**
   * key
   */
  key: string;
  /**
   * 触发的业务位置
   */
  type?: string;
  /**
   *  关联弹窗类型
   * @default 不启用
   */
  modalType?: modalType;
  /**
   * 内置的配置
   * @default
   */
  config?: any & {
    /**
     * 弹窗名称设置
     * @default 弹窗表单
     */
    title: React.ReactNode | ((props, type, dom) => React.ReactNode);
    /**
     * 是否为编辑模式
     * @default false
     */
    edit: boolean;
  };
};

// 按钮参数
export type btnConfigTypes = Record<
  string,
  {
    /**
     * 唯一值 会自动生成
     * @default 会自动生成
     */
    key?: string;
    /**
     * className 会自动生成
     * @default 会自动生成
     */
    className?: string;
    /**
     * 按钮名称
     * @default 按钮
     */
    text?: string;
    /**
     *  icon
     * @default
     */
    icon?: React.ReactNode | any;
    /**
     *  按钮类型
     * @default primary
     */
    type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
    /**
     *  按钮类型
     * @default primary
     */
    size?: 'default' | 'large' | 'small';
    /**
     *  按钮样式
     */
    style?: Record<string, any>;
    /**
     *  按钮属性危险
     * @default false
     */
    danger?: boolean;
    /**
     *  是否禁用
     * 可配置为 boolean 和 函数
     * @default false
     */
    disabled?: ((...params: any[]) => boolean) | boolean;
    /**
     *  按钮权限 控制是否显示 return false 隐藏 true显示
     * @default true
     */
    auth?: any | (() => any);
    /**
     *  按钮点击回调
     */
    onClick?: any | (() => any);
    /**
     *  内置弹窗的配置
     */
    modalConfig?: modalPropsType;
  }
>;

// 表格参数
export declare type TabelCustomTypes<T> = ProTableProps<T> & {
  /**
   * header设置快捷按钮
   */
  headerTitleConfig?: btnConfigTypes;
  /**
   * 全选快捷配置
   */
  selectionConfig?: btnConfigTypes;

  /**
   *菜单快捷配置
   */
  operationConfig?: btnConfigTypes;
};

// 动态插入渲染弹窗的参数
declare type ModalPropsType = {
  /**
   * 渲染的子集
   */
  children: any;
  /**
   * 按钮配置
   */
  btnConfig?: any;
  /**
   * 按钮点击回调配置和数据
   */
  clickConfig?: any;
};
