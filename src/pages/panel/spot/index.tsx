import React from 'react';
import { Card, Image, Row, Col, Space } from 'antd';
import { QqOutlined, WechatOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

export default function Spot() {
  const { Meta } = Card;
  return (
    <div className={styles.container}>
      <h2>屏幕分辨率585以上正常</h2>
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
        <div className={styles.containContent2}>The sparkling sea is a symbol of peace</div>
        <Image
          className={styles.image2}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-1/app-assets/img/gallery/27.jpg"
          alt="图片加载失败"
          preview={false}
        />
        <div className={styles.content2}>A grand feast in the world</div>
      </div>

      <div className={styles.imgContain3}>
        <Image
          className={styles.image3}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-3/app-assets/img/gallery/12.jpg"
          alt="图片加载失败"
          preview={false}
        />
        <div className={styles.content3}>Reed flowers by the sea</div>
        <div className={styles.mask3}></div>
        <div className={styles.icon1}>
          <QqOutlined />
        </div>
        <div className={styles.icon2}>
          <WechatOutlined />
        </div>
        <div className={styles.icon3}>
          <WeiboCircleOutlined />
        </div>
      </div>

      <div className={styles.imgContain4}>
        <Image
          className={styles.image4}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-1/app-assets/img/gallery/28.jpg"
          alt="图片加载失败"
          preview={false}
        />
        <div className={styles.mask4}></div>
      </div>

      <div className={styles.imgContain5}>
        <Image
          className={styles.image5}
          src="http://v.bootstrapmb.com/2019/7/ti2ib5398/demo-3/app-assets/img/gallery/2.jpg"
          alt="图片加载失败"
          preview={false}
        />
        <div className={styles.board}></div>
      </div>
    </div>
  );
}
