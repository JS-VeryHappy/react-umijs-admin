/**
 * title: 普通使用
 * desc: 
 */

import React, { useState } from 'react';
import { Button,message } from 'antd';
import ModalCustom from '@/components/ModalGroupCustom/ModalCustom'

function UseModalExample() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    message.success('点击确定')
  };
  const handleCancel = () => {
    message.success('点击取消')
  };
  const handleClose = () => {
    message.success('点击X或者遮罩')
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        点击弹窗
      </Button>
      <ModalCustom
        title="我是弹窗"
        visible={isModalVisible}
        setVisible={setIsModalVisible}
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
};

export default UseModalExample;

