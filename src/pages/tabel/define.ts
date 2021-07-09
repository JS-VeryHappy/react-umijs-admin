import type { ProColumnsTypes } from '@/components/TabelCustom/types';
import React from 'react';
import { TableDropdown } from '@ant-design/pro-table';

const typeValueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
};
const statusValueEnum = {
  null: {
    text: '全部',
  },
  1: {
    text: '启用',
  },
  2: {
    text: '禁用',
  },
  3: {
    text: '等待',
  },
};
export const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    search: false,
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    ellipsis: true,
    tip: '标题过长会自动收缩',
  },
  {
    title: '描述',
    dataIndex: 'description',
    search: false,
    copyable: true,
  },
  {
    title: '描述',
    dataIndex: 'description',
    valueType: 'InputTooltipCustom',
    hideInTable: true,
    fieldProps: {
      tooltipTitle: '自定义组件的使用',
    },
  },
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: typeValueEnum,
    filters: true,
    renderText: (value) => {
      let string = '';
      switch (value) {
        case 1:
          string = 'open';
          break;
        case 2:
          string = 'closed';
          break;
        case 3:
          string = 'processing';
          break;
        default:
          string = 'processing';
          break;
      }
      return string;
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: statusValueEnum,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    search: false,
    valueType: 'avatar',
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
    search: false,
    sorter: (a, b) => a.datetime - b.datetime,
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: (text, record, _, action) => [
      React.createElement(
        'a',
        {
          key: 'link',
        },
        '修改',
      ),
      React.createElement(
        'a',
        {
          key: 'link',
        },
        '删除',
      ),
      React.createElement(
        TableDropdown,
        {
          key: 'actionGroup',
          onSelect: () => action?.reload(),
          menus: [
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ],
        },
        '',
      ),
    ],
  },
];
