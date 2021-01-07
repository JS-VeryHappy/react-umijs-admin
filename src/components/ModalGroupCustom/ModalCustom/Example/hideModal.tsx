/**
 * title: 简化使用
 * desc: 我隐藏按钮、标题
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import ModalCustom from '@/components/ModalGroupCustom/ModalCustom'

function UseModalExample() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        点击弹窗
      </Button>
      <ModalCustom
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        confirmText={false}
        cancelText={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
    </div>
  );
};

export default UseModalExample;

