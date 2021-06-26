import { useContext } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import ProProvider from '@ant-design/pro-provider';
import type { FormSchema } from '@ant-design/pro-form/lib/components/SchemaForm/index';
import type { FormCustomColumnsType, ValueType } from '@/components/FromCustom/types';
import * as components from './components';

declare type FromCustomProps = {
  /**
   * 是否只读模式
   * @default false
   */
  readonly?: boolean;
} & FormSchema;

function FromCustom(Props: FromCustomProps) {
  const { columns, readonly } = Props;
  const values = useContext(ProProvider);
  // 自定义字段数组
  const custom: any = {};
  // 重新整理字段
  const newColumns: FormCustomColumnsType[] = [];
  columns.forEach((item: any) => {
    const column: FormCustomColumnsType = item;
    // 如果大小没有设置默认m
    if (!column.width) {
      column.width = 'm';
    }
    // 如果是只读模式
    if (readonly) {
      column.readonly = true;
    }
    newColumns.push(column);

    // 如果是自定义组件
    if (column.valueType.indexOf('Custom') !== -1) {
      if (components[column.valueType]) {
        const CustomComponent: React.ReactNode = components[column.valueType];
        custom[column.valueType] = {
          render: (text: any, props: any) => {
            // @ts-ignore
            return <CustomComponent readonly={true} {...props} config={column} />;
          },
          renderFormItem: (text: any, props: any) => (
            // @ts-ignore
            <CustomComponent {...props} config={column} />
          ),
        };
        // custom.push(components[column.valueType]);
      } else {
        // @ts-ignore
        $global.log('自定义组件:' + column.valueType + '无法识别');
      }
    }
  });

  return (
    <>
      <ProProvider.Provider
        value={{
          ...values,
          valueTypeMap: custom,
        }}
      >
        <BetaSchemaForm<any, ValueType> {...Props} columns={newColumns} />
      </ProProvider.Provider>
    </>
  );
}

export default FromCustom;
