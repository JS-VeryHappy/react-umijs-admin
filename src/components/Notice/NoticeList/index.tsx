import React from 'react';
import { List, Avatar } from 'antd';
import styles from './NoticeList.less';
import classNames from 'classnames';

// export type NoticeIconData = {
//   avatar?: string | React.ReactNode;
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   datetime?: React.ReactNode;
//   extra?: React.ReactNode;
//   style?: React.CSSProperties;
//   key?: string | number;
//   read?: boolean;
// }

type NoticeIconData = any;

export type NoticeIconTabProps = {
  count?: number;
  name?: string;
  showClear?: boolean;
  showViewMore?: boolean;
  style?: React.CSSProperties;
  title?: string; // 底部标题
  tabKey: string;
  data: NoticeIconData[];
  onClick?: (item: NoticeIconData, index: number) => void;
  onClear?: () => void;
  emptyText?: string;
  clearText?: string;
  viewMoreText?: string;
  list?: NoticeIconData[];
  onViewMore?: (e: any) => void;
};

const NoticeList: React.FC<NoticeIconTabProps> = ({
  data = [],
  onClick,
  onClear,
  title,
  onViewMore,
  emptyText,
  showClear = true,
  clearText,
  viewMoreText,
  showViewMore = false,
}) => {
  return (
    <div>
      <List
        className={styles.list}
        dataSource={data}
        renderItem={(item, i) => {
          const itemCls = classNames(styles.item, {
            [styles.read]: item.read,
          });
          // eslint-disable-next-line no-nested-ternary
          const leftIcon = item.avatar ? (
            typeof item.avatar === 'string' ? (
              <Avatar className={styles.avatar} src={item.avatar} />
            ) : (
              <span className={styles.iconElement}>{item.avatar}</span>
            )
          ) : null;

          return (
            <List.Item
              className={itemCls}
              key={item.key || i}
              onClick={() => {
                onClick?.(item, i);
              }}
            >
              <List.Item.Meta
                className={styles.meta}
                avatar={leftIcon}
                title={
                  <div className={styles.title}>
                    {item.title}
                    <div className={styles.extra}>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.datetime}>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
      <div className={styles.bottomBar}>
        {showClear ? (
          <div onClick={onClear}>
            {clearText} {title}
          </div>
        ) : null}
        {showViewMore ? (
          <div
            onClick={e => {
              if (onViewMore) {
                onViewMore(e);
              }
            }}
          >
            {viewMoreText}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NoticeList;
