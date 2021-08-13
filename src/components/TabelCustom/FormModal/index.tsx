import FromCustom from '@/components/FromCustom';
import { useState } from 'react';
import type { ModalPropsType } from '@/components/TabelCustom/types';

/**
 * 内置弹窗表单
 */
function Form(props: ModalPropsType) {
  const { modelchildName, closeModal, btnConfig, tabelProps, clickConfig } = props;
  // 内部显示状态
  const [visible, setVisible] = useState<boolean>(true);
  // 解构按钮配置的弹窗配置
  const { config, edit = false } = btnConfig.modalConfig || {};
  // 表单配置参数
  const {
    request,
    initialValuesBefor,
    submitValuesBefor,
    submitRequest,
    submitOnDone,
    ...configRest
  } = config;

  let initialValues: any = {};
  const columns: any = [];
  // 遍历一次去掉索引关系
  tabelProps.columns.forEach((item: any) => {
    columns.push({ ...item });
  });
  // 如果显示 并且 开启编辑模式
  if (visible && edit) {
    initialValues = { ...clickConfig.irecord };
    columns.forEach((newItem: any) => {
      if (!newItem.hideInForm) {
        // 因为编辑的时候已经赋值记录值 删除默认值就不会错误提醒
        if (newItem.initialValue) {
          delete newItem.initialValue;
        }
      }
    });
  }

  const defaultConfig = {
    layoutType: 'ModalForm',
    title: '弹窗表单',
    visible,
    columns,
    onFinish: async (values: any) => {
      // 遍历处理默认数据
      let initialValue: any = {};
      if (edit) {
        // 如果是编辑默认带上id
        initialValue.id = clickConfig.irecord.id || undefined;
      }
      // tabelProps.columns.forEach((item: any) => {
      //   if (!item.hideInForm) {
      //     if (item.initialValue) {
      //       initialValue[item.dataIndex] = item.initialValue;
      //     } else {
      //       initialValue[item.dataIndex] = undefined;
      //     }
      //   }
      // });
      // 数据提交前的钩子函数
      if (submitValuesBefor) {
        initialValue = submitValuesBefor(initialValue);
      }
      // 如果配置了自动请求
      if (submitRequest) {
        try {
          const result = await submitRequest(initialValue);
          // 如果设置请求回调
          if (submitOnDone) {
            submitOnDone({
              status: 'success',
              result,
              params: initialValue,
            });
          }

          return result;
        } catch (error) {
          if (submitOnDone) {
            submitOnDone({
              status: 'error',
              result: {},
              params: initialValue,
            });
          }
          return false;
        }
      }

      return await btnConfig.onClick({ ...initialValue, ...values });
    },
    request: async (params: any) => {
      let values: any = {};
      // 如果配置了网络请求数据
      if (request) {
        try {
          const data = await request(params);
          if (data.code && data.reason && data.data) {
            values = data.data;
          } else {
            values = data;
          }
        } catch (error) {}
      } else {
        values = initialValues;
      }
      // 数据初始化复制前的钩子执行
      if (initialValuesBefor) {
        values = initialValuesBefor(values);
      }

      return values;
    },
    onVisibleChange: (value: any) => {
      if (!value) {
        setVisible(value);
      }
    },
    modalProps: {
      afterClose: () => {
        if (closeModal) {
          closeModal();
        }
      },
    },
  };

  const newConfig = { ...defaultConfig, ...configRest };

  return <FromCustom id={modelchildName} key={modelchildName} {...newConfig} />;
}

export default Form;
