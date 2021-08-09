import ProTable from '@ant-design/pro-table';
import type { TabelCustomTypes, ProColumnsTypes } from '@/components/TabelCustom/types';
import * as components from '@/components/FromCustom/components';
import { PlusOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Space, Table } from 'antd';
import styles from './index.less';
// import { dynamic } from 'umi';

interface btnConfigTypes {
  //属性按钮名称
  [x: string]: {
    /**
     * 唯一值 会自动生成
     * @default 会自动生成
     */
    key?: string;
    /**
     * className 会自动生成
     * @default 会自动生成
     */
    className?: string;
    /**
     * 按钮名称
     * @default 按钮
     */
    text?: string;
    /**
     *  icon
     * @default
     */
    icon?: React.ReactNode | any;
    /**
     *  按钮类型
     * @default primary
     */
    type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
    /**
     *  按钮样式
     */
    style?: object;
    /**
     *  按钮属性危险
     * @default false
     */
    danger?: boolean;
    /**
     *  按钮权限 控制是否显示 return false 隐藏 true显示
     * @default true
     */
    auth?: any | (() => any);
    /**
     *  按钮点击回调
     */
    onClick?: any | (() => any);
    /**
     *  关联弹窗类型
     * @default 不启用
     */
    modalType?: 'form' | 'delete';
    /**
     *  关联弹窗自定义样式 如果有该参数会渲染此弹窗类型，不然会根据类型选择
     * @default
     */
    renderModal?: React.ReactNode;
  };
}
const headerTitleConfigArr: btnConfigTypes = {
  create: {
    text: '新增',
    icon: PlusOutlined,
    type: 'primary',
    style: {
      background: '#1890ff',
      borderColor: '#1890ff',
    },
  },
  import: {
    text: '导入',
    icon: ImportOutlined,
    type: 'primary',
    style: {
      background: '#faad14',
      borderColor: '#faad14',
    },
  },
  export: {
    text: '导出',
    icon: ExportOutlined,
    type: 'primary',
    style: {
      background: '#269884',
      borderColor: '#269884',
    },
  },
  default: {
    text: '按钮', // 按钮显示名称
    icon: PlusOutlined, // 按钮图标
    type: 'primary', // 按钮类型
    auth: () => true, // 显示权限
    style: {
      // 按钮显示样式
      background: '#1890ff',
      borderColor: '#1890ff',
    },
  },
};

const tableAlertOptionRenderConfigArr: btnConfigTypes = {
  delete: {
    text: '批量删除',
    type: 'link',
    danger: true,
  },
  export: {
    text: '导出',
    type: 'link',
  },
  default: {
    text: '按钮', // 按钮显示名称
    type: 'link',
    auth: () => true, // 显示权限
  },
};

const operationConfigRenderConfigArr: btnConfigTypes = {
  edit: {
    text: '编辑',
    type: 'link',
  },
  delete: {
    text: '删除',
    type: 'link',
  },
  copy: {
    text: '复制',
    type: 'link',
  },
  default: {
    text: '按钮', // 按钮显示名称
    type: 'link',
    auth: () => true, // 显示权限
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
          item.renderFormItem = (_: any, { type, defaultRender, ...rest }: any) => {
            if (type === 'form') {
              return null;
            }
            return <CustomComponent fieldProps={rest} config={item} />;
          };
        } else {
          // @ts-ignore
          $global.log(`自定义组件:${item.valueType}无法识别`);
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
      return operationKeys.map((kitem) => {
        // 按钮取默认值
        let btnConfig = operationConfigRenderConfigArr.default;
        // 如果自定义有按钮样式取自定义
        if (operationConfigRenderConfigArr[kitem]) {
          btnConfig = operationConfigRenderConfigArr[kitem];
        }
        // key名称 必须是唯一
        btnConfig.key = `operation-${kitem}`;
        // 按钮类型
        btnConfig.className = `operation-item operation-item-${kitem}`;

        // 如果传入的是方法
        if (typeof operationConfig[kitem] === 'function') {
          btnConfig.onClick = operationConfig[kitem];
        } else if (typeof operationConfig[kitem] === 'object') {
          btnConfig = {
            ...btnConfig,
            ...operationConfig[kitem],
          };
        }
        // 拆分参数
        const { text, icon, onClick, auth, ...config } = btnConfig;

        if (!auth || (typeof auth === 'function' && auth(irecord, btnConfig))) {
          return (
            <a {...config} onClick={onClick.bind(null, btnConfig, itext, irecord, _, iaction)}>
              {icon}
              {text}
            </a>
          );
        }
        return <></>;
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
      // 按钮取默认值
      let btnConfig = headerTitleConfigArr.default;
      // 如果自定义有按钮样式取自定义
      if (headerTitleConfigArr[kitem]) {
        btnConfig = headerTitleConfigArr[kitem];
      }
      // key名称 必须是唯一
      btnConfig.key = `header-${kitem}`;
      // 按钮类型
      btnConfig.className = `header-item header-item-${kitem}`;

      // 如果传入的是方法
      if (typeof headerTitleConfig[kitem] === 'function') {
        btnConfig.onClick = headerTitleConfig[kitem];
      } else if (typeof headerTitleConfig[kitem] === 'object') {
        btnConfig = {
          ...btnConfig,
          ...headerTitleConfig[kitem],
        };
      }
      // 拆分参数
      const { text, icon, onClick, auth, ...config } = btnConfig;
      if (!auth || (typeof auth === 'function' && auth(btnConfig))) {
        buttons.push(
          React.createElement(Button, { ...config, onClick }, [
            React.createElement(icon, { key: `icon-${kitem}` }),
            text,
          ]),
        );
      }
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

      cunstomTableAlertOptionRender = ({ selectedRowKeys, onCleanSelected }: any) => {
        return (
          <Space size={0}>
            {keys.map((kitem) => {
              // 按钮取默认值
              let btnConfig = tableAlertOptionRenderConfigArr.default;
              // 如果自定义有按钮样式取自定义
              if (tableAlertOptionRenderConfigArr[kitem]) {
                btnConfig = tableAlertOptionRenderConfigArr[kitem];
              }
              // key名称 必须是唯一
              btnConfig.key = `selection-${kitem}`;
              // 按钮类型
              btnConfig.className = `selection-item selection-item-${kitem}`;

              // 如果传入的是方法
              if (typeof selectionConfig[kitem] === 'function') {
                btnConfig.onClick = selectionConfig[kitem];
              } else if (typeof selectionConfig[kitem] === 'object') {
                btnConfig = {
                  ...btnConfig,
                  ...selectionConfig[kitem],
                };
              }
              // 拆分参数
              const { text, onClick, auth, ...config } = btnConfig;

              if (
                !auth ||
                (typeof auth === 'function' && auth(selectedRowKeys, onCleanSelected, btnConfig))
              ) {
                return (
                  <Button
                    {...config}
                    onClick={onClick.bind(null, selectedRowKeys, onCleanSelected, btnConfig)}
                  >
                    {text}
                  </Button>
                );
              }

              return <></>;
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
