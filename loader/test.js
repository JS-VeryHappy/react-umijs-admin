
var source = `
import React, { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';

function Home() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    console.log('ok');
    return Promise.reject('错误了');
  };
  const handleCancel = () => {
    console.log('取消');
    // return Promise.resolve();
  };
 
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AddButtonCustom />
      <ModalCustom
        title="TTTT"
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        onConfirm={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
      <h1 className={styles.title}>我是首页了</h1>
    </div>
  );
};

export default Home;
`;


source = source.replace(/h1/g,'h3')

console.log(source);
