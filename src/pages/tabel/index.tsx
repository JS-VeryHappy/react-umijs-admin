import FromCustom from '@/components/FromCustom';
import TabelCustom from '@/components/TabelCustom';
import { useState } from 'react';
import { columns } from './define';
import { getProTable, proTableAddRow, proTableDetails } from '@/services';
import { message } from 'antd';
import type { submitOnDone } from '@/components/TabelCustom/types';
import { requestDebounce } from '@/utils';

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 2000);

function Tabel() {
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      // 开启防抖函数后 如果在限制情况 会返回 undefined
      const data = await debounceProTableAddRow(values);
      if (!data) {
        return false;
      }
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      return true;
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      return false;
    }
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
                initialValuesBefor: (data: any) => {
                  return { ...data, title: 111 };
                },
                submitValuesBefor: (data: any) => {
                  return { ...data, name: '小周周' };
                },
                // debounceProTableAddRow
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
            onClick: async (values: any) => {
              const res = await debounceProTableAddRow(values);
              console.log('====================================');
              console.log(res);
              console.log('====================================');
              return false;
            },
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
                // submitRequest: debounceProTableAddRow,
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
