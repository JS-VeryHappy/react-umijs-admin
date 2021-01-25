import React from 'react';
import styles from './index.less';
import { Row, Col, Image } from 'antd';

import ProCard from '@ant-design/pro-card';

function PhotosCustom() {
  return (
    <>
      <ProCard title="LATEST PHOTOS">
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face2.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face3.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face4.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face5.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face6.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face7.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face8.jpg"
            />
          </Col>
          <Col span={8}>
            <Image
              className={styles.photo}
              preview={false}
              width="100%"
              src="https://www.nobleui.com/html/template/assets/images/faces/face9.jpg"
            />
          </Col>
        </Row>
      </ProCard>
    </>
  );
}

export default PhotosCustom;
