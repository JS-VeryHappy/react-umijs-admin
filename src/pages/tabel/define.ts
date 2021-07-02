import type { ProColumnsTypes } from '@/components/TabelCustom/types';
import React from 'react';

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
};

export const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    search: false,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '描述',
    dataIndex: 'description',
    search: false,
    ellipsis: true,
  },
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: typeValueEnum,
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
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, record) => [
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
    ],
  },
];
