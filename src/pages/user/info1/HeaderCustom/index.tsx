import React from 'react';
import styles from './index.less';
import { Row, Col, Card, Avatar, Typography } from 'antd';

const { Title, Text } = Typography;

function HeaderCustom(props: any) {
  const { name, desc, headimg } = props;

  return (
    <>
      <Card className={styles.bg} bordered={false}>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: 'center' }}>
            <Avatar src={headimg} size={140} />
          </Col>
          <Col span={24} style={{ textAlign: 'center', marginTop: '20px' }}>
            <Title level={2} style={{ color: '#fff' }}>
              {name}
            </Title>
          </Col>
          <Col span={24} style={{ textAlign: 'center', marginTop: '10px' }}>
            <Text style={{ color: '#fff' }}>{desc}</Text>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default HeaderCustom;
