import FromCustom from '@/components/FromCustom';
import TabelCustom from '@/components/TabelCustom';
import { useState } from 'react';
import { columns } from './define';
import { getProTable, proTableAddRow, proTableDetails } from '@/services';
import { useRequest } from 'umi';
import { message } from 'antd';
import type { submitOnDone } from '@/components/TabelCustom/types';

function Tabel() {
  const [visible, setVisible] = useState<boolean>(false);

  const { run: onFinish } = useRequest(proTableAddRow, {
    manual: true,
    onSuccess: (result, params) => {
      console.log('====================================');
      console.log(params);
      console.log('====================================');
      message.success('新增成功');
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
          edit: {
            modalConfig: {
              modalType: 'Form',
              config: {
                title: '新增表单1',
                submitValuesBefor: (data: any) => {
                  return { ...data, name: '小周周' };
                },
                submitRequest: proTableAddRow,
                submitOnDone: ({ status, result, params }: submitOnDone) => {
                  if (status === 'success') {
                    message.success('新增成功');
                  } else {
                    message.success('失败啦');
                  }
                },
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
              config: {
                title: '编辑表单',
                request: proTableDetails,
                params: {
                  aa: 11,
                },
                initialValuesBefor: (data: any) => {
                  return { ...data, aa: 111 };
                },
              },
              edit: true,
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
        request={async (params: any) => {
          console.log('====================================');
          console.log(params);
          console.log('====================================');
          return {
            datetime: '2006-02-03 21:30:57',
            description: '确天确年',
            id: 262,
            status: 2,
            title: '确天确年',
            type: 2,
          };
        }}
        // initialValues={{
        //   datetime: '2006-02-03 21:30:57',
        //   description: '确天确年',
        //   id: 262,
        //   status: 2,
        //   title: '确天确年',
        //   type: 2,
        // }}
      />
    </>
  );
}

export default Tabel;
