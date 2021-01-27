import React, { useEffect, useState } from 'react';
import { FireTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import {
  Card,
  Skeleton,
  Row,
  Col,
  Rate,
  Avatar,
  Image,
  Space,
  Carousel,
  List,
} from 'antd';
import styles from './index.less';
import { getChartData, getListData } from '@/services';
import { Link, useRequest } from 'umi';

export default function WorkBench() {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  const {} = useRequest(async (values: any) => {
    try {
      let res = await getChartData(values);
      let res1 = await getListData(values);
      setData(res.data.list);
      setListData(res1.data.list);
    } catch (e) {
      console.log(e);
    }
  });
  const config = {
    data: data,
    xField: 'time',
    yField: 'number',
    seriesField: 'item',
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };
  const loading = Object.keys(data).length;
  const loadingList = Object.keys(listData).length;
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Skeleton loading={!loadingList} active paragraph={{ rows: 10 }}>
            <Carousel autoplay style={{ marginBottom: 20 }}>
              <div>
                <h3
                  style={{
                    height: '460px',
                    color: '#fff',
                    lineHeight: '160px',
                    textAlign: 'center',
                    background:
                      'url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4073860290,275498362&fm=26&gp=0.jpg)no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  Unbelievable
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    height: '460px',
                    color: '#fff',
                    lineHeight: '160px',
                    textAlign: 'center',
                    background:
                      'url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1301400888,3049300960&fm=26&gp=0.jpg)no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  Excellent
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    height: '460px',
                    color: '#fff',
                    lineHeight: '160px',
                    textAlign: 'center',
                    background:
                      'url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2101284937,2224887683&fm=26&gp=0.jpg)no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  Boring
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    height: '460px',
                    color: '#fff',
                    lineHeight: '160px',
                    textAlign: 'center',
                    background:
                      'url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1188251019,1140069304&fm=26&gp=0.jpg)no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  Amazing
                </h3>
              </div>
            </Carousel>
          </Skeleton>
          <Card
            bodyStyle={{ padding: 20 }}
            bordered={false}
            className={styles.activeCard}
            title="动态"
            style={{ marginBottom: 20 }}
          >
            <Skeleton
              loading={!loadingList}
              active
              avatar
              paragraph={{ rows: 8 }}
            >
              <List
                itemLayout="horizontal"
                dataSource={listData}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.url} />}
                      title={<a>{item.title}</a>}
                      description={item.describe}
                    />
                  </List.Item>
                )}
              />
            </Skeleton>
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title="评分"
            bordered={false}
            bodyStyle={{ padding: 20 }}
          >
            <Skeleton loading={!loadingList} active paragraph={{ rows: 3 }}>
              <div className={styles.rate}>
                可信度：
                <Rate allowHalf defaultValue={0.5} disabled={true} />
              </div>
            </Skeleton>
          </Card>
          <Card style={{ marginBottom: 24 }} bordered={false} title="划水指数">
            <Skeleton loading={!loading} active paragraph={{ rows: 10 }}>
              <Line {...config} />
            </Skeleton>
          </Card>
          <Card
            bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
            bordered={false}
            title="团队"
            extra={<a href="/join">加入我们</a>}
          >
            <Skeleton loading={!loading} avatar active paragraph={{ rows: 8 }}>
              <Row wrap={true}>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=339776857,3862571302&fm=26&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1220309745,340208091&fm=11&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2934485787,3779147842&fm=26&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1825415128,3020510221&fm=26&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3515962438,268417503&fm=11&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.contentItem}>
                    <Avatar
                      src={
                        <Image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1709526763,3102966611&fm=15&gp=0.jpg" />
                      }
                    />{' '}
                    周大仙
                    <br />
                    <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                    <span>顶尖级人物</span>
                  </div>
                </Col>
              </Row>
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
