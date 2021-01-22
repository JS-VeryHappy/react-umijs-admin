import React from 'react';
import { Row, Col } from 'antd';

import HeaderCustom from './HeaderCustom';
import AboutCustom from './AboutCustom';
import ListCustom from './ListCustom';
import PhotosCustom from './PhotosCustom';

function UserInfo2() {
  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <HeaderCustom />
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <AboutCustom />
        </Col>
        <Col xs={24} sm={18} md={12} lg={12} xl={12}>
          <ListCustom />
        </Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <PhotosCustom />
        </Col>
      </Row>
    </>
  );
}

export default UserInfo2;
