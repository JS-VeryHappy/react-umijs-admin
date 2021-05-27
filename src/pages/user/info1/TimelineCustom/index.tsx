import React from 'react';
import styles from './index.less';
import { Card, Typography, Space, Timeline } from 'antd';
import { AppstoreAddOutlined, AlertOutlined, BankOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function TimelineCustom(props: any) {
  return (
    <>
      <Card bordered={false} className={styles.timeline}>
        <Timeline mode="alternate">
          <Timeline.Item
            dot={
              <AppstoreAddOutlined
                className={styles.timelineIcon}
                style={{ background: '#ff4d4f' }}
              />
            }
            label="晚上"
          >
            <Space direction="vertical">
              <Text type="danger" strong={true}>
                带娃
              </Text>
              <Text type="secondary">
                小呀小呀小朋友、找到一个小朋友、抱一抱、亲一口、马上厕所洗屁股！
              </Text>
              <Text>奶爸gogogo</Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item
            dot={
              <AlertOutlined className={styles.timelineIcon} style={{ background: '#52c41a' }} />
            }
            label="中午"
          >
            <Space direction="vertical">
              <Text type="success" strong={true}>
                吃饭
              </Text>
              <Text type="secondary">
                吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！吃吃吃吃吃吃！大家一起吃吃吃吃
              </Text>
              <Text>30分钟要吃饱</Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item
            dot={<BankOutlined className={styles.timelineIcon} style={{ background: '#faad14' }} />}
            label="早上"
          >
            <Space direction="vertical">
              <Text type="warning" strong={true}>
                起床
              </Text>
              <Text type="secondary">
                🚴骑车去
                <Text type="secondary" delete>
                  上学
                </Text>
                苦逼的上班
              </Text>
              <Text>25分钟</Text>
            </Space>
          </Timeline.Item>
        </Timeline>
      </Card>
    </>
  );
}

export default TimelineCustom;
