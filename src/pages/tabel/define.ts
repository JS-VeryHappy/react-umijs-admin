import type { ProColumnsTypes } from '@/components/TabelCustom/types';

export const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    search: false,
    valueType: 'indexBorder',
    hideInForm: true,
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    ellipsis: true,
    tip: '标题过长会自动收缩',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true, message: '标题' }],
    },
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
    hideInForm: true,
    fieldProps: {
      tooltipTitle: '自定义组件的使用',
    },
  },
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    filters: true,
    fieldProps: {
      options: [
        {
          label: '全部',
          value: null,
        },
        {
          label: '未解决',
          value: 1,
        },
        {
          label: '已解决',
          value: 2,
        },
        {
          label: '解决中',
          value: 3,
        },
      ],
    },
    // valueEnum: {
    //   all: { text: '全部', status: 'Default' },
    //   open: {
    //     text: '未解决',
    //     status: 'Error',
    //   },
    //   closed: {
    //     text: '已解决',
    //     status: 'Success',
    //   },
    //   processing: {
    //     text: '解决中',
    //     status: 'Processing',
    //   },
    // },
    // renderText: (value) => {
    //   let string = '';
    //   switch (value) {
    //     case 1:
    //       string = 'open';
    //       break;
    //     case 2:
    //       string = 'closed';
    //       break;
    //     case 3:
    //       string = 'processing';
    //       break;
    //     default:
    //       string = 'processing';
    //       break;
    //   }
    //   return string;
    // },
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    // valueEnum: {
    //   null: {
    //     text: '全部',
    //   },
    //   1: {
    //     text: '启用',
    //   },
    //   2: {
    //     text: '禁用',
    //   },
    //   3: {
    //     text: '等待',
    //   },
    // },
    fieldProps: {
      options: [
        {
          label: '全部',
          value: null,
        },
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 2,
        },
        {
          label: '等待',
          value: 3,
        },
      ],
    },
  },
  // {
  //   title: '用户',
  //   dataIndex: 'user_id',
  //   valueType: 'select',
  //   search: false,
  //   requestConfig: {
  //     request: getProTableUserList,
  //     label: 'name',
  //     value: 'id',
  //   },
  // },
  // {
  //   title: '头像',
  //   dataIndex: 'avatar',
  //   search: false,
  //   valueType: 'image',
  // },
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
    hideInForm: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
];
