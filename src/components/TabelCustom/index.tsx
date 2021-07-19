import ProTable from '@ant-design/pro-table';
import type { TabelCustomTypes, ProColumnsTypes } from '@/components/TabelCustom/types';
import * as components from '@/components/FromCustom/components';
import { PlusOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Space, Table } from 'antd';
import styles from './index.less';

const headerTitleConfigArr: any = {
  create: {
    text: '新增',
    icon: PlusOutlined,
    type: 'primary',
    key: 'header—create',
    className: 'header-item',
    style: {
      background: '#1890ff',
      borderColor: '#1890ff',
    },
  },
  import: {
    text: '导入',
    icon: ImportOutlined,
    type: 'primary',
    key: 'header—import',
    className: 'header-item',
    style: {
      background: '#faad14',
      borderColor: '#faad14',
    },
  },
  export: {
    text: '导出',
    icon: ExportOutlined,
    type: 'primary',
    key: 'header—export',
    className: 'header-item',
    style: {
      background: '#269884',
      borderColor: '#269884',
    },
  },
};

const tableAlertOptionRenderConfigArr: any = {
  delete: {
    text: '批量删除',
    type: 'link',
    danger: true,
    key: 'selection-delete',
    className: 'selection-item',
  },
  export: {
    text: '导出',
    type: 'link',
    key: 'selection-export',
    className: 'selection-item',
  },
};

const operationConfigRenderConfigArr: any = {
  edit: {
    text: '编辑',
    type: 'link',
    key: 'operation-edit',
    className: 'operation-item',
  },
  delete: {
    text: '删除',
    type: 'link',
    key: 'operation-delete',
    className: 'operation-item',
  },
  copy: {
    text: '复制',
    type: 'link',
    key: 'operation-copy',
    className: 'operation-item',
  },
};

function TabelCustom<T>(Props: TabelCustomTypes<T>) {
  const {
    columns,
    request,
    search,
    headerTitle,
    headerTitleConfig,
    rowSelection,
    tableAlertRender,
    selectionConfig,
    tableAlertOptionRender,
    operationConfig,
  } = Props;
  let searchCustom: boolean | {} = false;
  const customColumns: ProColumnsTypes<any>[] = [];
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

      // 处理自定义 request 网络中获取数据
      if (!item.request && item.requestConfig) {
        let label = 'label';
        let value = 'value';
        if (item.requestConfig.label) {
          label = item.requestConfig.label;
        }
        if (item.requestConfig.value) {
          value = item.requestConfig.value;
        }
        // eslint-disable-next-line no-param-reassign
        item.request = async () => {
          const res = await item.requestConfig.request();
          return res.data.list.map((val: any) => {
            return {
              label: val[label],
              value: val[value],
            };
          });
        };
      }

      customColumns.push(item);
    });
  }

  // 处理快捷配置row操作菜单
  if (operationConfig) {
    const operationKeys = Object.keys(operationConfig);

    const operationConfigRenderFun = (itext: any, irecord: any, _: any, iaction: any) => {
      return operationKeys.map((oitem) => {
        if (!operationConfigRenderConfigArr[oitem]) {
          $global.log(`operationConfig配置的:${oitem}无法识别`);
        }
        const { text, icon, ...config } = operationConfigRenderConfigArr[oitem];
        return (
          <a {...config} onClick={operationConfig[oitem].bind(null, itext, irecord, _, iaction)}>
            {icon}
            {text}
          </a>
        );
      });
    };
    customColumns.push({
      title: '操作',
      key: 'option',
      valueType: 'option',
      render: operationConfigRenderFun,
    });
  }

  let cunstomHeaderTitle = headerTitle;
  // 处理自定义 headerTitle 快捷设置
  if (!headerTitle && headerTitleConfig) {
    const buttons: any = [];

    const keys = Object.keys(headerTitleConfig);

    keys.forEach((kitem) => {
      if (!headerTitleConfigArr[kitem]) {
        $global.log(`headerTitleConfig配置的:${kitem}无法识别`);
      }
      const { text, icon, ...config } = headerTitleConfigArr[kitem];
      buttons.push(
        React.createElement(Button, { ...config, onClick: headerTitleConfig[kitem] }, [
          React.createElement(icon, { key: `icon-${kitem}` }),
          text,
        ]),
      );
    });

    cunstomHeaderTitle = React.createElement(Space, {}, buttons);
  }

  let cunstomRowSelection = rowSelection;
  let cunstomTableAlertRender = tableAlertRender;
  let cunstomTableAlertOptionRender = tableAlertOptionRender;

  // 处理自定义多选快捷设置
  if (!rowSelection && !tableAlertRender && selectionConfig) {
    cunstomRowSelection = {
      // 注释该行则默认不显示下拉选项
      selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
    };
    if (!tableAlertRender) {
      cunstomTableAlertRender = ({ selectedRowKeys, onCleanSelected }: any) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
        </Space>
      );
    }
    if (!tableAlertOptionRender) {
      const keys = Object.keys(selectionConfig);

      cunstomTableAlertOptionRender = () => {
        return (
          <Space size={0}>
            {keys.map((kitem) => {
              if (!tableAlertOptionRenderConfigArr[kitem]) {
                $global.log(`selectionConfig配置的:${kitem}无法识别`);
              }
              const { text, ...config } = tableAlertOptionRenderConfigArr[kitem];
              return (
                <Button {...config} onClick={selectionConfig[kitem]}>
                  {text}
                </Button>
              );
            })}
          </Space>
        );
      };
    }
  }

  return (
    <>
      <ProTable<T>
        className={styles.tabelCustom}
        rowKey="id"
        {...Props}
        columns={customColumns}
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
        headerTitle={cunstomHeaderTitle}
        rowSelection={cunstomRowSelection}
        tableAlertRender={cunstomTableAlertRender}
        tableAlertOptionRender={cunstomTableAlertOptionRender}
      />
    </>
  );
}

export default TabelCustom;
