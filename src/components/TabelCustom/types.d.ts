import type { ProColumns, ProTableProps } from '@ant-design/pro-table';
import type { ValueType } from '@/components/FromCustom/types';

export declare type ProColumnsTypes<T> = ProColumns<T, ValueType> & {
  // 网络发起请求快捷配置 优先级低于 request参数
  requestConfig?: {
    //   需要调用的请求
    request: () => any;
    // label的取值key 默认label
    label?: string;
    // value 的取值key 默认value
    value?: string;
  };
};

export declare type TabelCustomTypes<T> = ProTableProps<T> & {
  // header设置快捷按钮
  headerTitleConfig?: {
    //   新增
    create?: Promise<any>;
    // 导入
    import?: Promise<any>;
    // 导出
    export?: Promise<any>;
  };
  // 所选快捷配置
  selectionConfig?: {
    // 新增
    delete?: Promise<any>;
    // 导入
    import?: Promise<any>;
    // 导出
    export?: Promise<any>;
  };
  operationConfig?: {
    // 编辑
    edit?: Promise<any>;
    // 删除
    delete?: Promise<any>;
    // 复制
    copy?: Promise<any>;
  };
};
