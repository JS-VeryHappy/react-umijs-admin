import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useRequest } from 'umi';
import { getDoardData } from '@/services';

import { Row, Col, Typography, Divider, Card, Button, Table } from 'antd';
import { TableOutlined, LineChartOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';

import styles from './index.less';

const { Title, Text, Paragraph } = Typography;

function DashBoard() {
  const [data, setData] = useState([]);

  // useEffect(() => {

  // },[])

  const { run: onFinish } = useRequest(async () => {
    try {
      let res = await getDoardData();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  });

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
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
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
