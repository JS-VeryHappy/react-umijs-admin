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
     *  按钮样式
     */
    style?: Record<string, any>;
    /**
     *  按钮属性危险
     * @default false
     */
    danger?: boolean;
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
     *  关联弹窗类型
     * @default 不启用
     */
    modalType?: 'form' | 'delete';
    /**
     *  关联弹窗自定义样式 如果有该参数会渲染此弹窗类型，不然会根据类型选择
     * @default
     */
    renderModal?: React.ReactNode;
  }
>;

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
