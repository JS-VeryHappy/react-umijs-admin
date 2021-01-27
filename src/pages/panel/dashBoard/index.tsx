import React, { useState, useEffect, useRef } from 'react';

import { Row, Col, Typography, Divider, Card, Button, Table } from 'antd';
import { TableOutlined, LineChartOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';

import styles from './index.less';

const { Title, Text, Paragraph } = Typography;

function DashBoard() {
  const data = [
    { key: '1', year: '1992', value: 4, address: '看风景看风景卡·' },
    { key: '2', year: '1993', value: 3.5, address: '看风景看风景卡·' },
    { key: '3', year: '1994', value: 5, address: '看风景看风景卡·' },
    { key: '4', year: '1995', value: 4.9, address: '看风景看风景卡·' },
    { key: '5', year: '1996', value: 6, address: '看风景看风景卡·' },
    { key: '6', year: '1997', value: 7, address: '看风景看风景卡·' },
    { key: '7', year: '1998', value: 9, address: '看风景看风景卡·' },
    { key: '8', year: '1999', value: 13, address: '看风景看风景卡·' },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  const ref = useRef();

  const listColumns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (year: any) => <Text>{year} 年</Text>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const [isChart, setIsChart] = useState(true);

  const onClickChange = () => {
    setIsChart(!isChart);
  };

  // const downloadImage = () => {
  //   ref.current?.downloadImage();
  // };

  return (
    <>
      <Row justify="start" gutter={[8, 12]}>
        <Col className={styles.colItems} span={8}>
          <div className={styles.colItem}>1234.23</div>
        </Col>
        <Col className={styles.colItems} span={8}>
          <div className={styles.colItem}>1234.23</div>
        </Col>
        <Col className={styles.colItems} span={8}>
          <div className={styles.colItem}>1234.23</div>
        </Col>
        <Col className={styles.colItems} span={8}>
          <div className={styles.colItem}>1234.23</div>
        </Col>
      </Row>

      <Divider>Product Calculation</Divider>

      <Typography>
        <Title>Introduction</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
      </Typography>

      <Row gutter={24}>
        <Col span={24}>
          <Card
            title="图表与表格"
            extra={
              isChart ? (
                <TableOutlined onClick={onClickChange} />
              ) : (
                <LineChartOutlined onClick={onClickChange} />
              )
            }
          >
            {isChart ? (
              <Line {...config} chartRef={ref} />
            ) : (
              <Table columns={listColumns} dataSource={data} />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DashBoard;
