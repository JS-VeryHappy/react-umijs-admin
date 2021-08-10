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
          create: {
            onClick: () => {
              setVisible(true);
            },
            modalConfig: {
              render: (
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
              ),
            },
          },
          import: () => {
            console.log(2);
          },
          export: () => {
            console.log(3);
          },
          edit: {
            onClick: onFinish,
            modalConfig: {
              modalType: 'Form',
              config: {
                title: '编辑表单',
              },
            },
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
              modalTypeConfig: {
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
    </>
  );
}

export default Tabel;
