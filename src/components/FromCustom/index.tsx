import { useContext } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import ProProvider from '@ant-design/pro-provider';
import type { FormSchema } from '@ant-design/pro-form/lib/components/SchemaForm/index';
import type { FormCustomColumnsType, ValueType } from '@/components/FromCustom/types';
import * as components from './components';
import styles from './index.less';

declare type FromCustomProps = {
  /**
   * 是否只读模式
   * @default false
   */
  readonly?: boolean;
} & FormSchema;

function FromCustom(Props: FromCustomProps) {
  const { columns, readonly, layoutType } = Props;
  const values = useContext(ProProvider);
  // 自定义字段数组
  const custom: any = {};
  // 重新整理字段
  const newColumns: FormCustomColumnsType[] = [];
  columns.forEach((item: any) => {
    const column: FormCustomColumnsType = item;
    // 如果大小没有设置默认m:328
    if (!column.width) {
      column.width = 'm';

      if (layoutType === 'ModalForm') {
        if (!column.formItemProps) {
          column.formItemProps = {};
        }
        // @ts-ignore
        column.formItemProps.style = {
          width: '328px',
        };
      }
    }
    // 如果是只读模式
    if (readonly) {
      column.readonly = true;
    }
    newColumns.push(column);

    if (!column.valueType) {
      column.valueType = 'text';
    }
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
        $global.log(`自定义组件:${column.valueType}无法识别`);
      }
    }
  });

  const customProps: FromCustomProps = { ...Props };
  // 如果是ModalForm 弹窗表单 设置默认值
  if (layoutType === 'ModalForm') {
    if (!customProps.width) {
      customProps.width = '750px';
    }
    if (!customProps.layout) {
      customProps.layout = 'vertical';
    }
  }

  return (
    <>
      <ProProvider.Provider
        value={{
          ...values,
          valueTypeMap: custom,
        }}
      >
        <BetaSchemaForm<any, ValueType>
          {...customProps}
          columns={newColumns}
          className={styles.fromCustom}
        />
      </ProProvider.Provider>
    </>
  );
}

export default FromCustom;
