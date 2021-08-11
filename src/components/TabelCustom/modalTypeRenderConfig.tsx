import FromCustom from '@/components/FromCustom';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import type { ModalPropsType } from '@/components/TabelCustom/types';
import { useRequest } from 'umi';
// import { message } from 'antd';

/**
 * 动态插入页面
 */
const Modal = (props: ModalPropsType) => {
  const { children, btnConfig } = props;
  const rootDom = document.body;
  const node = document.createElement('div');
  node.style.display = 'unset';
  node.id = `${btnConfig.key}-modal`;
  // @ts-ignore
  rootDom.appendChild(node);

  ReactDOM.render(children, node);
};

const getModalDom = (key: string) => {
  return document.getElementById(`${key}-modal`);
};

const closeModal = (key: string) => {
  const node = getModalDom(key);
  if (node) {
    document.body.removeChild(node);
  }
};

export default Modal;

/**
 * 内置弹窗表单
 * @param props {
 *   render 保留
 *   type 表格点击业务位置
 *   btnConfig   按钮配置数据
 *   tabelProps  表格的props数据
 *   clickConfig  点击回调配置和数据
 * }  表单配置项
 * @returns
 */
export const Form = (props: any) => {
  const { btnConfig, tabelProps, clickConfig } = props;
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

  const { run: onSubmitRequest } = useRequest(submitRequest, {
    manual: true,
    onSuccess: (result, params) => {
      if (submitOnDone) {
        submitOnDone({
          status: 'success',
          result,
          params,
        });
      }
    },
    onError: (result, params) => {
      if (submitOnDone) {
        submitOnDone({
          status: 'error',
          result,
          params,
        });
      }
    },
  });

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
        return await onSubmitRequest(initialValue);
      }

      return await btnConfig.onClick({ ...initialValue, ...values });
    },
    request: async (params: any) => {
      let values: any = {};
      // 如果配置了网络请求数据
      if (request) {
        values = await request(params);
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
        closeModal(btnConfig.key);
        const node = document.getElementById(`${btnConfig.key}-from`);
        if (node && node.parentNode) {
          document.body.removeChild(node.parentNode);
        }
      },
    },
  };

  const newConfig = { ...defaultConfig, ...configRest };

  return <FromCustom id={`${btnConfig.key}-from`} key={`${btnConfig.key}-from`} {...newConfig} />;
};
