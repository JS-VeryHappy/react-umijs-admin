import FromCustom from '@/components/FromCustom';
import type { FormCustomColumnsType } from '@/components/FromCustom/types';
import { message } from 'antd';
import { getProTableUserList } from '@/services';

export const columns: FormCustomColumnsType<any>[] = [
  {
    title: '标题',
    dataIndex: 'title4',
    valueType: 'InputTooltipCustom',
    fieldProps: {
      tooltipTitle: '标题是必须填写的哦',
    },
    formItemProps: {
      rules: [{ required: true, message: '标题' }],
    },
  },
  {
    title: '描述',
    dataIndex: 'description4',
    valueType: 'InputAutoCompleteCustom',
    fieldProps: {
      options: [
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
      ],
    },
    request: async () => {
      const res = await getProTableUserList();
      return res.data.map((val: any) => {
        return {
          label: val.name,
          value: val.name,
        };
      });
    },
    params: {
      aaa: '小周周',
    },
  },
];

function Demo4() {
  const onFinish = async () => {
    try {
      message.success('成功');
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <FromCustom columns={columns} onFinish={onFinish} />
    </>
  );
}

export default Demo4;
