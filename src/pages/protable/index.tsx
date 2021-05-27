import React, { useState, useEffect } from 'react';
import { Space, Tag, Button } from 'antd';

import type { ProColumns } from '@/components/TableCustom/types';

import TableCustom from '@/components/TableCustom';
import AddButtonCustom from '@/components/BasicsBusinessCustom/ButtonGroup/AddButtonCustom';

import { getSelect, getProTable } from '@/services';

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

// const RemoteSelect = RemoteSelectFunc(getSelect, (item: any) => {
//   return {
//     value: item.id,
//     label: item.name,
//   };
// });

const columns: ProColumns<ProportionItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    // search: false,
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
    // search: false,
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  {
    title: '项目',
    dataIndex: 'projectName',
    key: 'projectName',
    valueType: 'text',
    // search: false,
    // width: 120
  },
  {
    title: '生效时间',
    dataIndex: 'dateText',
    key: 'dateText',
    // search: false,
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
    // search: false,
    render: (_, row) => <Space>{123}</Space>,
  },
  {
    title: '销售渠道',
    dataIndex: 'channelName',
    key: 'dechannelNameptName',
    valueType: 'text',
    // search: false,
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  // {
  //   title: '岗位',
  //   dataIndex: 'positionName',
  //   key: 'positionName',
  //   valueType: 'select',
  //   renderFormItem: (item, props, form) => {
  //     return (
  //       <RemoteSelect default={0} ></RemoteSelect>
  //     );
  //   },
  //   // search: false,
  //   // width: 120
  // },
  {
    title: '车位-调整后',
    dataIndex: 'parkValue',
    key: 'parkValue',
    // search: false,
    valueType: 'text',
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  {
    title: '非车位-调整后',
    dataIndex: 'notParkValue',
    key: 'notParkValue',
    // search: false,
    valueType: 'text',
    // width: 120
  },
  {
    title: '申请原因',
    dataIndex: 'note',
    key: 'note',
    valueType: 'text',
    // search: false,
    // width: ,
    renderFormItem: (item, props, form) => {
      return (
        <AddButtonCustom
          onClick={() => {
            console.log(12344);
          }}
        ></AddButtonCustom>
      );
    },
  },
];

const rightOptions: ProColumns<ProportionItem>[] = [
  {
    title: '操作1',
    width: 180,
    key: 'option3',
    valueType: 'option',
    fixed: 'right',
    render: (text: React.ReactNode, record: any, index: number, action: any) => {
      return <div></div>;
    },
  },
];

// const columns123: ProColumns<ProportionItem>[] = [{a: 1}]

const protable = () => {
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
      xxx: 124,
    };
  };

  // 15308047727

  // loading={loading}
  // dataSource={dataSource}
  // onSubmit={onSubmit}
  // onFormValuesChange={onFormValuesChange}
  return (
    <TableCustom<ProportionItem>
      columns={columns}
      rightOptions={rightOptions}
      fetchGetList={getProTable}
      buttonGroup={buttonGroup}
      paramsFormatter={paramsFormatter}
    ></TableCustom>
  );
};

export default protable;
