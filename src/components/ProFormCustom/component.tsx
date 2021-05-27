import React from 'react';
import * as ProFormAll from '@ant-design/pro-form';
import { PropsType, FormConfigType, FormChildrenConfigType } from './types';
import { GroupProps } from '@ant-design/pro-form/lib/interface';
import * as CustomAll from '@/components/BasicsBusinessCustom';
import classnames from 'classnames';
import { ProFormField } from '@ant-design/pro-form';
import { useIntl } from '@ant-design/pro-provider';
import ProCard from '@ant-design/pro-card';

/**
 * 处理字段多层级的情况
 * 例如：ProFormText.Password
 * @param field
 * @param ProFormAll
 */
const getComponent = function(field: string, ProFormAll: any) {
  let nameArr = field.split('.');
  if (nameArr.length >= 2) {
    let obj = ProFormAll[nameArr[0]];
    for (let i = 1; i < nameArr.length - 1; i++) {
      obj = obj[nameArr[i]];
    }
    return obj[nameArr[nameArr.length - 1]];
  } else {
    return ProFormAll[field];
  }
};

/**
 * 为自定义组件统一设置默认必要参数 为了和proform 保持规范统一
 * @param props
 * @param intl
 */
const setCustomParams = function(props: any, intl: any) {
  //设置统一className
  // @ts-ignore
  props['className'] = classnames(props?.className, {
    // @ts-ignore
    [`pro-field-${props.width}`]: props.width && WIDTH_SIZE_ENUM[props.width],
  });
  //如果有参数fieldProps
  if (!props.fieldProps) {
    props.fieldProps = {};
  }
  //如果有参数fieldProps.className
  if (props.fieldProps.className) {
    props.fieldProps.className = classnames(props['className'], {
      // @ts-ignore
      [`${props.fieldProps.className}`]: props.fieldProps.className,
    });
  } else {
    props.fieldProps.className = props['className'];
  }

  //如果有参数fieldProps.placeholder
  if (!props.fieldProps.placeholder) {
    props.fieldProps.placeholder = intl.getMessage('tableForm.inputPlaceholder', '请输入');
  }

  if (props.disabled) {
    props.fieldProps.disabled = props.disabled;
  }
  if (props.showSearch) {
    props.fieldProps.showSearch = props.showSearch;
  }
  if (props.allowClear) {
    props.fieldProps.allowClear = props.allowClear;
  } else {
    //如果组件以Input
    if (props.mold.indexOf('Input') !== -1) {
      props.fieldProps.allowClear = true;
    }
  }

  //如果卡片组件需要特殊处理
  if (props.mold === 'ProCard') {
    // @ts-ignore
    let fieldProps = props.fieldProps;
    props = {
      ...props,
      ...fieldProps,
    };
    delete props.fieldProps;
  }

  return props;
};

/**
 * 递归处理无限子集
 * @param isCustom //是否是自定义组件
 * @param intl
 * @param allComponent  //全部组件
 * @param dom //最后返回的dom数据
 * @param children //子集
 * @param level //层级
 */
const getChildrenDom = function(
  isCustom: boolean,
  intl: any,
  allComponent: any,
  dom: any = [],
  children: any,
  level: number = 1,
) {
  if (!children || children.length <= 0) {
    return;
  }
  children.forEach((child: any, cindex: any) => {
    let childDom = getComponent(child.mold, allComponent);
    let childProps = {
      width: 's',
      key: cindex + `-level${level}-children-custom`,
      ...child,
    };
    childProps = setCustomParams(childProps, intl);

    let childs: [] = [];
    getChildrenDom(isCustom, intl, allComponent, childs, child.children, level + 1);

    let arr = React.createElement(
      childDom,
      {
        ...childProps,
      },
      childs,
    );

    dom.push(arr);
  });
};

const WIDTH_SIZE_ENUM = {
  // 适用于短数字，短文本或者选项
  xs: 104,
  // 适用于较短字段录入、如姓名、电话、ID 等。
  s: 216,
  // 标准宽度，适用于大部分字段长度。
  m: 328,
  // 适用于较长字段录入，如长网址、标签组、文件路径等。
  l: 440,
  // 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
  xl: 552,
};

function ComponentCustom(props: PropsType) {
  const intl = useIntl();

  let { formConfig, form } = props;
  //合并pro-form 和 自己自定义的组件
  let allComponent = { ...CustomAll, ...ProFormAll, ProCard };

  let items: React.FunctionComponentElement<GroupProps>[] = [];

  if (formConfig.length > 0) {
    formConfig.forEach((config: FormChildrenConfigType, gindex: number) => {
      let childrenItem: any = [];

      config.children.forEach((item: FormConfigType, index: number) => {
        //是否是自动的组件
        let isCustom = false;
        if (!getComponent(item.mold, ProFormAll)) {
          isCustom = true;
        }

        //设置默认值
        if (item.moldShow === undefined) {
          item.moldShow = true;
        }

        //如果显示才渲染子组件
        if (item.moldShow) {
          delete item.moldShow;

          let dom = getComponent(item.mold, allComponent);
          let props = { width: 's', key: index + '-custom', ...item };

          let children: any = [];

          //获取递归组件
          getChildrenDom(isCustom, intl, allComponent, children, item.children, 1);

          //如果是自定义组件
          if (isCustom) {
            //如果是自定义组件 组装额外props
            props = setCustomParams(props, intl);

            //向所有自定义组件外部插入一层ProFormField包裹
            // @ts-ignore
            childrenItem.push(
              React.createElement(
                ProFormField,
                {
                  ...props,
                },
                React.createElement(
                  dom,
                  {
                    ...props,
                  },
                  children,
                ),
              ),
            );
          } else {
            childrenItem.push(
              React.createElement(
                dom,
                {
                  ...props,
                },
                children,
              ),
            );
          }
        }
      });
      items.push(
        React.createElement(
          allComponent.default.Group,
          {
            title: config.title || undefined,
            key: gindex + '-group-custom',
          },
          childrenItem,
        ),
      );
    });
  }

  return <>{items.map((dom: any) => dom)}</>;
}

export default ComponentCustom;
