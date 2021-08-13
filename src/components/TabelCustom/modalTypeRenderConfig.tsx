import ReactDOM from 'react-dom';
import type { ModalPropsType } from '@/components/TabelCustom/types';
import React from 'react';

export { default as Form } from './FormModal';

export const getModalDom = (key: string) => {
  return document.getElementById(key);
};

export const closeModal = (key: string) => {
  const node = getModalDom(key);
  if (node) {
    document.body.removeChild(node);
  }
};

/**
 * 动态插入页面
 */
const Modal = (props: ModalPropsType) => {
  const { children, btnConfig } = props;

  const modelName = `${btnConfig.key}-modal`;
  const modelchildName = `${btnConfig.key}-modal-child`;

  // 如果弹窗dom存在
  if (getModalDom(modelName)) {
    return;
  }
  // 向组件内添加props属性
  const newChildren = React.cloneElement(children, {
    closeModal: () => {
      const node = document.getElementById(modelchildName);
      if (node && node.parentNode) {
        document.body.removeChild(node.parentNode);
      }

      closeModal(modelName);
    },
    modelName,
    modelchildName,
  });

  const rootDom = document.body;
  const node = document.createElement('div');
  node.style.display = 'unset';
  node.id = modelName;
  // @ts-ignore
  rootDom.appendChild(node);

  ReactDOM.render(newChildren, node);
};

export default Modal;
