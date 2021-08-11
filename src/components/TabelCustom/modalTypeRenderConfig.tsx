import FromCustom from '@/components/FromCustom';

import ReactDOM from 'react-dom';
import { useState } from 'react';

declare type propsType = {
  /**
   * 渲染的子集
   */
  children: any;
  /**
   * 挂载的的元素dom
   */
  modalRoot?: string;
  btnConfig?: any;
};

/**
 * 动态插入页面

 */
const Modal = (props: propsType) => {
  const { children, btnConfig } = props;
  const rootDom = document.body;
  const node = document.createElement('div');
  node.style.display = 'unset';
  node.id = `${btnConfig.key}-modal`;
  // @ts-ignore
  rootDom.appendChild(node);

  ReactDOM.render(children, node);
};

const closeModal = (key: string) => {
  const node = getModalDom(key);
  if (node) {
    document.body.removeChild(node);
  }
};
const getModalDom = (key: string) => {
  return document.getElementById(`${key}-modal`);
};

/**
 * 内置弹窗表单
 * @param props {
 *   btnConfig   按钮配置数据
 *   tabelProps  表格的props数据
 * }  表单配置项
 * @returns
 */
export const Form = (props: any) => {
  const { btnConfig, tabelProps } = props;
  const [visible, setVisible] = useState<boolean>(true);

  const defaultConfig = {
    layoutType: 'ModalForm',
    title: '弹窗表单',
    visible,
    columns: tabelProps.columns,
    onFinish: btnConfig.onClick,
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

  const config = { ...defaultConfig, ...btnConfig.modalConfig?.config };

  return <FromCustom id={`${btnConfig.key}-from`} key={`${btnConfig.key}-from`} {...config} />;
};

export default Modal;
