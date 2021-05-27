/**
 * title: 手动处理隐藏
 * desc:
 */

import React, { useState } from 'react';
import { Button, message } from 'antd';
import ModalCustom from '@/components/ModalGroupCustom/ModalCustom';

function UseManualModaExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    message.success('点击确定');
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    message.success('点击取消');
    setIsModalVisible(false);
  };
  const handleClose = () => {
    message.success('点击X或者遮罩');
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        点击弹窗
      </Button>
      <ModalCustom
        title="我是弹窗"
        visible={isModalVisible}
        onConfirm={handleOk}
        onCancel={handleCancel}
        onClose={handleClose}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
    </div>
  );
}

export default UseManualModaExample;
