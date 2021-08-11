import FromCustom from '@/components/FromCustom';
import TabelCustom from '@/components/TabelCustom';
import { useState } from 'react';
import { columns } from './define';
import { getProTable, proTableAddRow } from '@/services';
import { useRequest } from 'umi';

function Tabel() {
  const [visible, setVisible] = useState<boolean>(false);

  const { run: onFinish } = useRequest(proTableAddRow, {
    manual: true,
    onSuccess: (result, params) => {
      console.log('====================================');
      console.log(result, params);
      console.log('====================================');
    },
  });
  return (
    <>
      <TabelCustom<any>
        request={getProTable}
        columns={columns}
        headerTitleConfig={{
          create: {
            onClick: () => {
              setVisible(true);
            },
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
          edit: {
            onClick: onFinish,
            modalConfig: {
              modalType: 'Form',
              config: {
                title: '编辑表单',
              },
            },
          },
          delete: () => {
            console.log(222);
          },
          copy: () => {
            console.log(333);
          },
          onc: {
            onClick: () => {},
            disabled: true,
            auth: () => {
              return true;
            },
          },
        }}
        expandable={{
          expandedRowRender: (record: any) => <p>{record.title}</p>,
        }}
      />
      <FromCustom
        columns={columns}
        layoutType="ModalForm"
        title="新建表单"
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
