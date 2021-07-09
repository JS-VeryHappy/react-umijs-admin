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

export declare type TabelCustomTypes<T> = ProTableProps<T>;
