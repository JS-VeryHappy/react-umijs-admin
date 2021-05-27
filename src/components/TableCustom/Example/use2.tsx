import React from 'react';
import { Space } from 'antd';
import { ProColumns } from '@/components/TableCustom/types';
import TableCustom from '@/components/TableCustom';
import { getProTable } from '@/services';

interface ProportionItem {
  deptName?: string;
  projectName?: string;
  dateText?: string;
  decideTimeValue?: string;
  channelName?: string;
  positionName?: string;
  parkValue?: string;
  notParkValue?: string;
  note?: string;
}

const columns: ProColumns<ProportionItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    title: '事业部',
    dataIndex: 'deptName',
    key: 'deptName',
    valueType: 'text',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
  },
  {
    title: '项目',
    dataIndex: 'projectName',
    key: 'projectName',
    valueType: 'text',
  },
  {
    title: '生效时间',
    dataIndex: 'dateText',
    key: 'dateText',
    valueType: 'date',
    render: (_, record) => {
      return <div>{record.dateText}</div>;
    },
  },
  {
    title: '判定时间',
    key: 'decideTimeValue',
    width: 120,
    dataIndex: 'decideTimeValue',
    render: (_, row) => <Space>{123}</Space>,
  },
  {
    title: '销售渠道',
    dataIndex: 'channelName',
    key: 'dechannelNameptName',
    valueType: 'text',
  },
];

const rightOptions: ProColumns<ProportionItem>[] = [
  {
    title: '操作1',
    width: 180,
    key: 'option3',
    valueType: 'option',
    fixed: 'right',
    render: (
      text: React.ReactNode,
      record: any,
      index: number,
      action: any,
    ) => {
      return <div></div>;
    },
  },
];

const buttonGroup = [
  {
    type: 'import',
    // name: '导入',
    handler: (event: any) => {
      console.log('导入', event);
    },
  },
  {
    type: 'export',
    // name: '导出',
    handler: (event: any) => {
      console.log('kiana', event);
    },
  },
  {
    type: 'xxx',
    name: 'kiana',
    handler: (event: any) => {
      console.log('kiana', event);
    },
  },
];

const paramsFormatter = (params: any) => {
  return {
    ...params,
    xxxxxxxxxxxxxxxxxxx: 124,
  };
};

const ProTable = () => {
  return (
    <TableCustom<ProportionItem>
      needRowSelection={false}
      rightOptions={rightOptions}
      columns={columns}
      fetchGetList={getProTable}
      buttonGroup={buttonGroup}
      paramsFormatter={paramsFormatter}
    ></TableCustom>
  );
};

export default ProTable;
