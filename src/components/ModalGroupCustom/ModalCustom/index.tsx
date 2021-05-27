import type { ReactNode } from 'react';
import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';

interface ModalCustomType {
  /**
   * 显示弹窗
   */
  visible: boolean;
  /**
   * 父级显示状态方法、点击确定、取消、点击右上角关闭和点击遮罩关闭回调 调用
   */
  setVisible?: (value: boolean) => void;
  /**
   * 标题
   * @description 不传属性 则隐藏顶部 | 传字符串则显示 | ReactNode自定义顶部
   */
  title?: string | ReactNode;
  /**
   * 确定按钮文字
   * @description 值为false隐藏按钮
   * @default '确定'
   */
  confirmText?: string | boolean;
  /**
   * 取消按钮文字
   * @description 值为false隐藏按钮
   * @default '取消'
   */
  cancelText?: string | boolean;
  /**
   * 宽度
   * @default 520
   */
  width?: string | number;
  /**
   * 内容
   */
  children?: ReactNode;
  /**
   * 点击确定回调
   * @description 返回Promise.reject('错误')。不会关闭弹窗。弹出错误信息
   */
  onConfirm?: Promise<any> | (() => void);
  /**
   * 点击取消回调
   * @description 返回Promise.reject('错误')。不会关闭弹窗。弹出错误信息
   */
  onCancel?: Promise<any> | (() => void);
  /**
   * 点击右上角关闭和点击遮罩关闭回调
   * @description 返回Promise.reject('错误')。不会关闭弹窗。弹出错误信息
   */
  onClose?: Promise<any> | (() => void);
}

function ModalCustom(Props: ModalCustomType) {
  const [loading, setLoading] = useState(false);

  const {
    visible,
    title,
    cancelText,
    confirmText,
    children,
    width,
    onConfirm,
    onCancel,
    onClose,
    setVisible,
  } = Props;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (onConfirm && typeof onConfirm === 'function') {
        // @ts-ignore
        await onConfirm();
      }
      setVisible && setVisible(false);
    } catch (error) {
      error && message.error(error);
    }
    setLoading(false);
  };
  const handleCancel = async () => {
    try {
      if (onCancel && typeof onCancel === 'function') {
        // @ts-ignore
        await onCancel();
      }
      setVisible && setVisible(false);
    } catch (error) {
      error && message.error(error);
    }
  };
  const handleClose = async () => {
    try {
      if (onClose && typeof onClose === 'function') {
        // @ts-ignore
        await onClose();
      }
      setVisible && setVisible(false);
    } catch (error) {
      error && message.error(error);
    }
  };

  const footer = () => {
    if (cancelText === false && confirmText === false) {
      return null;
    }
    return (
      <>
        {cancelText !== false && (
          <Button key="cancel" onClick={handleCancel}>
            {cancelText || '取消'}
          </Button>
        )}
        {confirmText !== false && (
          <Button key="confirm" type="primary" loading={loading} onClick={handleConfirm}>
            {confirmText || '确定'}
          </Button>
        )}
      </>
    );
  };

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        width={width || 520}
        onCancel={handleClose}
        destroyOnClose={true}
        footer={footer()}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalCustom;
