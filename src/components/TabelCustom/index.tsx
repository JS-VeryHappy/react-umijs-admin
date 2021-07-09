import ProTable from '@ant-design/pro-table';
import type { TabelCustomTypes } from '@/components/TabelCustom/types';
import * as components from '@/components/FromCustom/components';

function TabelCustom<T>(Props: TabelCustomTypes<T>) {
  const { columns, request, search } = Props;
  let searchCustom: boolean | {} = false;
  if (columns) {
    columns.forEach((item: any) => {
      if (typeof item.search === 'undefined' || item.search === true) {
        searchCustom = {
          filterType: 'query',
          defaultCollapsed: true,
          span: 6,
        };
      }

      // 如果是自定义组件
      if (item.valueType && item.valueType.indexOf('Custom') !== -1 && !item.renderFormItem) {
        if (components[item.valueType]) {
          const CustomComponent: any = components[item.valueType];

          // eslint-disable-next-line no-param-reassign
          item.renderFormItem = (_: any, { type, defaultRender, ...rest }: any, form: any) => {
            if (type === 'form') {
              return null;
            }
            return <CustomComponent fieldProps={rest} config={item} />;
          };
        } else {
          // @ts-ignore
          $global.log('自定义组件:' + item.valueType + '无法识别');
        }
      }
    });
  }

  return (
    <>
      <ProTable<T>
        {...Props}
        columns={columns}
        size="small"
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          requestParams,
          sort,
          filter,
        ) => {
          const tableData = {
            data: [],
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: false,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: 0,
          };

          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          try {
            const res = await request({
              ...requestParams,
              page: requestParams.current,
              pageSize: requestParams.pageSize,
              sort,
              filter,
            });
            tableData.data = res.data.list;
            tableData.total = res.data.total;
            tableData.success = true;
          } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
          }

          return tableData;
        }}
        search={{ ...searchCustom, ...search }}
        options={{ fullScreen: false, reload: true, setting: true, density: false, search: false }}
      />
    </>
  );
}

export default TabelCustom;
