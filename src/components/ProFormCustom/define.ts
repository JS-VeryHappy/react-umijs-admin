import { FormChildrenConfigType, FormConfigType, PropsType } from './types';
import { message } from 'antd';

/**
 * 递归处理无限子集
 * @param param
 * @param data
 * @param children
 */
const getChildrenParam = function(param: any, data: any, children: any) {
  if (!children || children.length <= 0) {
    return;
  }
  children.forEach((item: any, index: number) => {
    if (item.name) {
      let value = null;
      // @ts-ignore
      if (data[item.name]) {
        // @ts-ignore
        value = data[item.name];
      }
      // @ts-ignore
      param[item.name] = value;
    }
    getChildrenParam(param, data, item.children);
  });
};
/**
 * 处理提交后的默认数据
 * @param param
 * @param formConfig
 * @param data
 * @param mode
 */
const setFormDefault = function(
  param: any,
  formConfig: any,
  data: any,
  mode: string = 'ordinary',
) {
  //处理回传参数默认值
  if (formConfig.length > 0) {
    formConfig.forEach((config: any, gindex: number) => {
      let children = [];
      if (mode === 'steps') {
        if (config.stepsChildren.length > 0) {
          config.stepsChildren.forEach((child: any) => {
            children.push(...child.children);
          });
        }
      } else {
        children = config.children;
      }

      getChildrenParam(param, data, children);
    });
  }
  return param;
};

/**
 * 处理错误信息
 * @param err
 */
const setFinishFailed = function(err: any) {
  let { errorFields } = err;
  if (errorFields[0]) {
    message.error(errorFields[0].errors[0]);
  }
};

/**
 * 默认配置
 */
const defaultConfig: PropsType = {
  layout: 'vertical',
  labelAlign: 'right',
  size: 'middle',
  requiredMark: true,
  initialValues: {},
  submitter: {
    searchConfig: {
      resetText: '取消',
      submitText: '提交',
    },
    render: false,
    resetButtonProps: undefined,
    submitButtonProps: undefined,
  },
  formConfig: [],
  modal: {
    title: '表单',
    width: 800,
    trigger: undefined,
    visible: false,
    onCancel: undefined,
  },
};

export { setFormDefault, setFinishFailed, defaultConfig };
