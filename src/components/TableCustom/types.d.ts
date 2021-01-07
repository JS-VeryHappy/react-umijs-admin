import { ProColumnType, ProColumns } from '@ant-design/pro-table';
import { RequestResponse } from 'umi-request';

/**
 * TableCustom接口
 */
interface TablePropsType<T> {
  /**
   * @description 是否开启多选
   * @default false
   */
  needRowSelection?: boolean | undefined;
  /**
   * @description 右侧操作栏, 可以传入boolean和option对象
   * @default false
   */
  rightOptions?: ProColumnType<T>[];
  /**
   * @description 列定义配置
   * @default {}
   */
  columns: ProColumnType<T>[];
  /**
   * @description 表单项change回调
   *
   */
  onFormValuesChange?: (
    changedValues: any,
    allValues: any,
    formRef: any,
  ) => void;
  /**
   * @description 是否开启搜索(undefined为开启)
   * @default undefined
   */
  isOpenSearch?: false | undefined;
  /**
   * @description 列表数据API
   *
   */
  fetchGetList: <U extends T>(requestParams: U) => Promise<RequestResponse<any>>;
  /**
   * @description 搜索表单下方按钮组配置
   *
   */
  buttonGroup?: ButtonGroupType[] | undefined;
  /**
   * @description 列表数据API参数处理方法
   *
   */
  paramsFormatter?: (params: any) => any;
}

interface GetList {
  code: number;
  data: any;
  reason: string;
}

/**
 * 列定义接口(继承于ProColumnType)
 */
// interface ColumnsType<T> extends ProColumnType<T> {}

/**
 * 搜索表单下方按钮组配置接口
 */
interface ButtonGroupType {
  /**
   * @description 按钮类型(例如导出 - export, 导入 - import, 等...)
   */
  type: string;
  /**
   * @description 按钮显示名字
   */
  name?: string;
  /**
   * @description 点击回调
   */
  handler: (event: any) => void;
}

/**
 * 分页接口
 */
interface PaginationConfig {
  /**
   * @description 当前页数
   */
  current: number;
  /**
   * @description 当前分页大小
   */
  pageSize: number;
  /**
   * @description 默认页数
   */
  defaultCurrent?: number;
  /**
   * @description 默认分页大小
   */
  defaultPageSize?: number;
  /**
   * @description 分页页数改变回调
   */
  onChange?: (page?: number, pageSize?: number) => void;
  /**
   * @description 分页大小改变回调
   */
  onShowSizeChange?: (current?: number, pageSize?: number) => void;
}

interface ActionType {
  reload: (resetPageIndex?: boolean) => void;
  reloadAndRest: () => void;
  reset: () => void;
  clearSelected?: () => void;
  startEditable: (rowKey: React.Key) => boolean;
  cancelEditable: (rowKey: React.Key) => boolean;
  isEditable: any;
  addEditRecord: any;
}

export {
  TablePropsType,
  ActionType,
  ProColumns,
  ButtonGroupType,
  PaginationConfig,
};
