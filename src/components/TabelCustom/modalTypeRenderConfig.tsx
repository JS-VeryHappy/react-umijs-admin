import FromCustom from '@/components/FromCustom';
import { useState } from 'react';

/**
 * 内置弹窗表单
 * @param modal  当前显示弹窗
 * @param setModal  设置显示弹窗
 * @param props  表单配置项
 * @param btnConfig   按钮配置数据
 * @param tabelProps  表格的props数据
 * @returns
 */
export const Form = (props: any) => {
  const { modal, setModal, btnConfig, tabelProps } = props;
  const [visible, setVisible] = useState<boolean>(() => {
    return modal === btnConfig.key;
  });

  const defaultConfig = {
    layoutType: 'ModalForm',
    title: '弹窗表单',
    visible,
    columns: tabelProps.columns,
    onFinish: btnConfig.onClick,
    onVisibleChange: (value: any) => {
      if (!value) {
        setVisible(value);
        setTimeout(() => {
          setModal(null);
        }, 100);
      }
    },
  };

  const config = { ...defaultConfig, ...btnConfig.modalConfig?.config };

  return <FromCustom key={`${btnConfig.key}-from`} {...config} />;
};
