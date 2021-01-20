import React, { useRef, useState, useEffect } from 'react';
import ProTable from '@ant-design/pro-table';
import { Space, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';

import {
  TablePropsType,
  ActionType,
  ButtonGroupType,
  PaginationConfig,
  ProColumns,
} from './types';
import './index.less';

function TableCustom<ListItem>(
  props: TablePropsType<ListItem> & { children?: any[] },
): React.ReactElement {
  const {
    needRowSelection,
    onFormValuesChange,
    rightOptions,
    isOpenSearch,
    fetchGetList,
    buttonGroup,
    paramsFormatter,
    children,
  } = props;

  // React.Children.forEach(children, (child) => {
  //   console.log(child);
  // })
  console.log(123);

  const [dataSource, setDataSource] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [columns, setColumns] = useState<ProColumns<ListItem>[]>(props.columns);
  const [searchConfig, setSearchConfig] = useState<{} | false | undefined>({
    collapsed: false,
    defaultCollapsed: true,
    collapseRender: (collapsed: boolean, showCollapseButton?: any) => {
      return <div></div>;
    },
    optionRender: (
      searchConfig: { searchText: string; resetText: string },
      formProps: { form: any },
    ) => {
      let { searchText, resetText } = searchConfig;
      let { form } = formProps;
      return [
        <Button
          key="search"
          type="primary"
          onClick={() => {
            form?.submit();
          }}
        >
          {searchText}
        </Button>,
      ];
    },
  });

  const [pagination, setPagination] = useState<PaginationConfig>({
    current: 1,
    pageSize: 10,
    defaultCurrent: 1,
    defaultPageSize: 10,
    onChange: (page?: number, pageSize?: number) => {
      setPagination(Object.assign(pagination, { current: page }));
      getListData();
    },
    onShowSizeChange: (current?: number, pageSize?: number) => {
      setPagination(Object.assign(pagination, { pageSize }));
    },
  });

  /**
   * Table action 的引用，便于自定义触发
   */
  const actionRef = useRef<ActionType>();

  /**
   * 可以获取到查询表单的 form 实例，用于一些灵活的配置
   */
  const formRef = useRef<FormInstance>();

  /**
   * antd form 的配置
   */
  const form = {
    // 提交表单且数据验证成功后回调事件
    // onFinish(values: any) {
    //   return new Promise<void>((resolve, reject) => {
    //     resolve(values);
    //   });
    // },
    // 字段值更新时触发回调事件
    onValuesChange:
      typeof onFormValuesChange === 'function'
        ? (changedValues: any, allValues: ListItem) =>
            onFormValuesChange(changedValues, allValues, formRef)
        : undefined,
  };

  /**
   * table 工具栏
   */
  const toolOptions = {
    fullScreen: false,
    reload: false,
    setting: false,
  };

  /**
   * 批量操作信息区域
   * @param params
   */
  const tableAlertRender = (params: any) => {
    let { selectedRowKeys, selectedRows, onCleanSelected } = params;
    return (
      <Space size={24}>
        <span>
          已选 {selectedRowKeys.length} 项
          <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
            取消选择
          </a>
        </span>
      </Space>
    );
  };

  /**
   * 控制自定义表格按钮
   */
  const buttonGroupRender = () => {
    if (!buttonGroup) return [];
    return buttonGroup.map((value: ButtonGroupType) => {
      if (value.type === 'import') value.name = '导入';
      else if (value.type === 'export') value.name = '导出';
      return (
        <Button key={`btn-${value.type}`} onClick={value.handler}>
          {value.name}
        </Button>
      );
    });
  };

  /**
   * 获取表格数据
   */
  const getListData = async () => {
    setLoading(true);
    // 获取表单字段并将分页参数合并得到请求参数requestParams
    let res = await fetchGetList(
      getRequestParams(formRef.current?.getFieldsValue(), pagination),
    );
    setDataSource(res.data.list);
    setLoading(false);
  };

  /**
   * 处理请求参数
   * @param fileds 表单字段
   * @param pagination 分页配置
   */
  const getRequestParams = (fileds: ListItem, pagination: PaginationConfig) => {
    let tempFileds = JSON.parse(JSON.stringify(fileds));
    for (let key in fileds) {
      if (fileds[key] === undefined) tempFileds[key] = null;
    }
    let requestParams = Object.assign({}, fileds, {
      pageInfo: { page: pagination.current, count: pagination.pageSize },
    });
    if (typeof paramsFormatter === 'function') {
      requestParams = paramsFormatter(requestParams);
    }
    return requestParams;
  };

  /**
   * 动态加载右侧操作栏
   */
  useEffect(() => {
    if (rightOptions instanceof Array && rightOptions.length > 0) {
      setColumns(columns.concat(rightOptions));
    }
  }, []);

  /**
   * SearchConfig处理
   */
  useEffect(() => {
    if (isOpenSearch === undefined) setSearchConfig(true);
    if (isOpenSearch === false) setSearchConfig(false);
  });

  /**
   * 初始化加载数据
   *  */
  useEffect(() => {
    // 执行时form还未挂载完成, 不能获取搜索表单字段; 延时后可以正常获取
    setTimeout(() => getListData(), 200);
  }, []);

  return (
    // @ts-ignore
    <ProTable<ListItem>
      className="table-custom"
      // @ts-ignore
      form={form}
      loading={loading}
      dataSource={dataSource}
      pagination={pagination}
      // @ts-ignore
      actionRef={actionRef}
      formRef={formRef}
      rowSelection={needRowSelection ? {} : undefined}
      columns={columns}
      tableAlertOptionRender={false}
      options={toolOptions}
      tableAlertRender={tableAlertRender}
      toolBarRender={buttonGroupRender}
      onSubmit={getListData}
      search={searchConfig}
      rowKey="id"
    />
  );
}

export default TableCustom;
