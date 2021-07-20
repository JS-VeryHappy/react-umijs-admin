import FromCustom from '@/components/FromCustom';
import TabelCustom from '@/components/TabelCustom';
import { useState } from 'react';
import { columns } from './define';
import { getProTable } from '@/services';

function Tabel() {
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
    return true;
  };
  return (
    <>
      <TabelCustom<any>
        request={getProTable}
        columns={columns}
        headerTitleConfig={{
          create: () => {
            setVisible(true);
            console.log(1);
          },
          import: () => {
            console.log(2);
          },
          export: () => {
            console.log(3);
          },
        }}
        selectionConfig={{
          delete: () => {
            console.log(11);
          },
          export: () => {
            console.log(21);
          },
        }}
        operationConfig={{
          edit: () => {
            console.log(111);
          },
          delete: () => {
            console.log(222);
          },
          copy: () => {
            console.log(333);
          },
        }}
        expandable={{
          expandedRowRender: (record: any) => <p>{record.title}</p>,
        }}
      />
      <FromCustom
        columns={columns}
        layoutType="ModalForm"
        title="新建表单11111"
        visible={visible}
        onVisibleChange={(value: boolean) => {
          setVisible(value);
        }}
        onFinish={onFinish}
      />
    </>
  );
}

export default Tabel;
