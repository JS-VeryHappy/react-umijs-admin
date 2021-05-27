/**
 * title: 普通使用
 * desc: 自定义标题、返回异常信息不关闭弹窗、隐藏按钮
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import ModalCustom from '@/components/ModalGroupCustom/ModalCustom';

function UseModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    return Promise.reject('错误了');
  };

  const title = (
    <>
      <span>1</span>
      <span>(我可以自定义标题顶部))</span>
    </>
  );
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        点击弹窗
      </Button>
      <ModalCustom
        title={title}
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        onConfirm={handleOk}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
    </div>
  );
}

export default UseModalExample;
