import React from 'react';
import { Space } from 'antd';
import { ProColumns  } from '@/components/TableCustom/types';
import TableCustom from '@/components/TableCustom';
import {  getProTable } from '@/services';

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
    }
];

const ProTable = () => {
    return (
        <TableCustom<ProportionItem>
            columns={columns}
            fetchGetList={getProTable}
        ></TableCustom>
    );
};

export default ProTable;
