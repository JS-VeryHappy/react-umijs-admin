import ProTable from '@ant-design/pro-table';
import type {
  TabelCustomTypes,
  ProColumnsTypes,
  btnConfigTypes,
  modalTypeListType,
} from '@/components/TabelCustom/types';
import * as components from '@/components/FromCustom/components';
import { PlusOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
import styles from './index.less';
import * as modalTypeRenderConfig from './modalTypeRenderConfig';

// import { dynamic } from 'umi';

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
  // 自定义弹窗配置 key对应表
  let modalTypeList: modalTypeListType = {};

  const [modal, setModal] = useState<any>(null);

  /**
   * 如果配置使用了智能弹窗模式 寻找对应弹窗dom结构
   * @param kitem
   * @param btnConfig
   * @returns
   */
  const setModalType = (kitem: string, btnConfig: any, type: string) => {
    // 处理自定义弹窗类型
    const { modalConfig, ...rest } = btnConfig;

    const { modalType, render } = modalConfig || {};

    // 如果设置了弹窗类型
    if (modalType || render) {
      // 如果自定义了弹窗render
      let newRender;
      if (modalType && !render) {
        if (!modalTypeRenderConfig[modalType]) {
          $global.log(`内置弹窗:${modalType}无法识别`);
          return;
        }

        // 重置点击按钮显示弹窗
        rest.onClick = () => {
          setModal(btnConfig.key);
        };

        newRender = React.createElement(modalTypeRenderConfig[modalType], {
          modal,
          setModal,
          btnConfig,
          tabelProps: Props,
        });
      }

      if (render) {
        newRender = render;
      }

      modalTypeList = {
        ...modalTypeList,
        [btnConfig.key]: {
          key: kitem,
          type: type,
          modalType,
          render: newRender,
        },
      };
    }

    return rest;
  };
  /**
   *
   * @param kitem // 按钮key
   * @param configArr // 默认配置
   * @param config  // 传入配置
   * @param type // 按钮业务类型 header:表头 select:多选  operation:row菜单
   * @returns
   */
  const setBtnConfig = (kitem: string, configArr: any, config: any, type: string = 'header') => {
    // 按钮取默认值
    let btnConfig = configArr.default;
    // 如果自定义有按钮配置 合并
    if (configArr[kitem]) {
      btnConfig = { ...btnConfig, ...configArr[kitem] };
    }

    // key名称 必须是唯一
    btnConfig.key = `${type}-${kitem}`;
    // 按钮类型
    btnConfig.className = `${type}-item ${type}-item-${kitem}`;

    // 如果传入的是方法
    if (typeof config[kitem] === 'function') {
      btnConfig.onClick = config[kitem];
    } else if (typeof config[kitem] === 'object') {
      btnConfig = {
        ...btnConfig,
        ...config[kitem],
      };
    }
    return setModalType(kitem, btnConfig, type);
  };

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
        let btnConfig = setBtnConfig(
          kitem,
          operationConfigRenderConfigArr,
          operationConfig,
          'operation',
        );

        // 拆分参数
        const { text, icon, onClick, auth, disabled, ...config } = btnConfig;

        if (!auth || (typeof auth === 'function' && auth(irecord, btnConfig))) {
          let newDisable = undefined;
          if (typeof disabled === 'function') {
            newDisable = disabled(irecord, btnConfig);
          } else if (typeof disabled === 'boolean' && disabled) {
            newDisable = disabled;
          }
          return (
            <Button
              {...config}
              disabled={newDisable}
              onClick={onClick.bind(null, btnConfig, itext, irecord, _, iaction)}
            >
              {icon}
              {text}
            </Button>
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
      let btnConfig = setBtnConfig(kitem, headerTitleConfigArr, headerTitleConfig, 'header');

      // 拆分参数
      const { text, icon, onClick, auth, disabled, ...config } = btnConfig;
      if (!auth || (typeof auth === 'function' && auth(btnConfig))) {
        let newDisable = undefined;
        if (typeof disabled === 'function') {
          newDisable = disabled(btnConfig);
        } else if (typeof disabled === 'boolean' && disabled) {
          newDisable = disabled;
        }
        buttons.push(
          React.createElement(Button, { ...config, onClick, disabled: newDisable }, [
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
              let btnConfig = setBtnConfig(
                kitem,
                tableAlertOptionRenderConfigArr,
                selectionConfig,
                'selection',
              );

              // 拆分参数
              const { text, onClick, auth, disabled, ...config } = btnConfig;

              if (
                !auth ||
                (typeof auth === 'function' && auth(selectedRowKeys, onCleanSelected, btnConfig))
              ) {
                let newDisable = undefined;
                if (typeof disabled === 'function') {
                  newDisable = disabled(selectedRowKeys, onCleanSelected, btnConfig);
                } else if (typeof disabled === 'boolean' && disabled) {
                  newDisable = disabled;
                }

                return (
                  <Button
                    {...config}
                    disabled={newDisable}
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

  // 内置弹窗遍历
  const modalTypeKeys = Object.keys(modalTypeList);
  // 外置弹窗遍历
  const extranetModal: any = [];
  modalTypeKeys.forEach((kitem: string) => {
    if (!modalTypeList[kitem].modalType) {
      extranetModal.push(modalTypeList[kitem]);
    }
  });

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

      {extranetModal.map((item: any) => {
        return (
          <div key={`${item.key}-modal`} className={`${item.key}-modal`}>
            {item.render}
          </div>
        );
      })}

      {modalTypeList[modal] && (
        <div
          key={`${modalTypeList[modal].key}-modal`}
          className={`${modalTypeList[modal].key}-modal`}
        >
          {modalTypeList[modal].render}
        </div>
      )}
    </>
  );
}

export default TabelCustom;
