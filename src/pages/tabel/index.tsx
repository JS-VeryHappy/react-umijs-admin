import TabelCustom from '@/components/TabelCustom';
import { columns } from './define';
import { getProTable } from '@/services';
import { Button, Space, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function tabel() {
  return (
    <TabelCustom<any>
      rowKey="id"
      request={getProTable}
      columns={columns}
      form={{
        ignoreRules: false,
      }}
      headerTitle={
        <Space>
          <Button key="primary" type="primary">
            <PlusOutlined />
            新建
          </Button>
          <Button key="out">导出</Button>
        </Space>
      }
      expandable={{
        expandedRowRender: (record: any) => <p>{record.title}</p>,
      }}
      rowSelection={{
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      tableAlertRender={({ selectedRowKeys, onCleanSelected }: any) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
        </Space>
      )}
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量删除</a>
            <a>导出数据</a>
          </Space>
        );
      }}
    />
  );
}

export default tabel;
