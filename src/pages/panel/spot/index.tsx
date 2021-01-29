import React from 'react';
import { Card, Image, Row, Col, Space } from 'antd';
import styles from './index.less';

export default function Spot() {
  const { Meta } = Card;
  return (
    <div className={styles.container}>
      <div className={styles.imgContain1}>
        <div className={styles.containTitle1}>Mountain and sea</div>
        <div className={styles.imgContent1}>双</div>
        <div className={styles.imgContent2}>叒</div>
        <div className={styles.imgContent3}>叕</div>
        <Image
          className={styles.image1}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-3/app-assets/img/gallery/22.jpg"
          alt="图片加载失败"
          preview={false}
        />
      </div>

      <div className={styles.imgContain2}>
        <Image
          className={styles.image2}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-1/app-assets/img/gallery/27.jpg"
          alt="图片加载失败"
          preview={false}
        />
        <div className={styles.content2}>A grand feast in the world</div>
      </div>

      <div className={styles.imgContain1}>
        <Image
          className={styles.image1}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-1/app-assets/img/gallery/23.jpg"
          alt="图片加载失败"
          preview={false}
        />
      </div>

      <div className={styles.imgContain1}>
        <Image
          className={styles.image1}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-1/app-assets/img/gallery/28.jpg"
          alt="图片加载失败"
          preview={false}
        />
      </div>
    </div>
  );
}
