import { BetaSchemaForm } from '@ant-design/pro-form';
import type { FormSchema } from '@ant-design/pro-form/lib/components/SchemaForm/index';
import type { ProFormColumnsType } from '@ant-design/pro-form';

declare type FromCustomProps = {
  /**
   * 是否只读模式
   * @default false
   */
  readonly?: boolean;
} & FormSchema;

function FromCustom(Props: FromCustomProps) {
  const { columns, readonly } = Props;
  const newColumns: ProFormColumnsType[] = [];
  columns.forEach((item: ProFormColumnsType) => {
    const column = item;
    // 如果大小没有设置默认m
    if (!column.width) {
      column.width = 'm';
    }
    // 如果是只读模式
    if (readonly) {
      column.readonly = true;
    }
    newColumns.push(column);
  });
  return <BetaSchemaForm {...Props} columns={newColumns} />;
}

export default FromCustom;
