import React, { useState } from 'react';
import { FireTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Radar } from '@ant-design/charts';
// import { DataSet } from '@antv/data-set';
import { Card, Skeleton, Row, Col, Rate, Avatar, Image } from 'antd';
import styles from './index.less';
import { getChartData } from '@/services';
import { Link, useRequest } from 'umi';
import { PropsType } from '@/components/ProFormCustom/Example/ProFormTypes';

export default function WorkBench() {
  const [data, setData] = useState({});
  const { run: onFinish } = useRequest(async (values: any) => {
    try {
      let res = await getChartData(values);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  });
  // const { DataView } = DataSet;
  // const dv = new DataView();
  // dv.transform({
  //   type: 'fold',
  //   fields: ['你','我','他'],
  //   key: 'user',
  //   value: 'score'
  // });
  const config = {
    data: ['1', '2', '3', '4'],
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    // 开启辅助点
    point: {},
  };

  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={styles.projectList}
            style={{ marginBottom: 24 }}
            title="简介"
            bordered={false}
            extra={<a href="/join">加入我们</a>}
            bodyStyle={{ padding: 0 }}
          >
            {/* {projectNotice.map((item) => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <Card.Meta
                      title={
                        <div className={styles.cardTitle}>
                          <Avatar size="small" src={item.logo} />
                          <Link to={item.href}>{item.title}</Link>
                        </div>
                      }
                      description={item.description}
                    />
                    <div className={styles.projectItemContent}>
                      <Link to={item.memberLink}>{item.member || ''}</Link>
                      {item.updatedAt && (
                        <span className={styles.datetime} title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                      )}
                    </div>
                  </Card>
                </Card.Grid>
              ))} */}

            <Row wrap={true}>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                <div className={styles.contentItem}>
                  <p>
                    <Avatar
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />{' '}
                    周大仙
                  </p>
                  <p>那是一种内在的东西，他们到达不了，也无法触及</p>
                  <span>顶尖级人物</span>
                </div>
              </Col>
            </Row>
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            className={styles.activeCard}
            title="动态"
          >
            {/* <List<ActivitiesType>
                loading={activitiesLoading}
                renderItem={(item) => this.renderActivities(item)}
                dataSource={activities}
                className={styles.activitiesList}
                size="large"
              /> */}
            <div className={styles.dynamicItem}>
              <FireTwoTone twoToneColor="#ff0000" />
              &nbsp;<span>周大神在 高逼格设计天团 新建项目 骗你来学计算机</span>
              <p>一分钟前</p>
            </div>
            <div className={styles.dynamicItem}>
              <FireTwoTone twoToneColor="#ff0000" />
              &nbsp;<span>周大神在 高逼格设计天团 新建项目 骗你来学计算机</span>
              <p>一分钟前</p>
            </div>
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title="评分"
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            <div className={styles.rate}>
              可信度：
              <Rate allowHalf defaultValue={0.5} />
            </div>
          </Card>
          <Card style={{ marginBottom: 24 }} bordered={false} title="沙雕指数">
            <div className={styles.chart}>{/* <Radar {...config} /> */}</div>
          </Card>
          <Card
            bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
            bordered={false}
            title="团队"
          >
            <div className={styles.members}>
              <Row gutter={48}>
                {/* {projectNotice.map((item) => (
                    <Col span={12} key={`members-item-${item.id}`}>
                      <Link to={item.href}>
                        <Avatar src={item.logo} size="small" />
                        <span className={styles.member}>{item.member}</span>
                      </Link>
                    </Col>
                  ))} */}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
