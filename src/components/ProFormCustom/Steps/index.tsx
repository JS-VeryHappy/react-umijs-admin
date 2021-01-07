import React,{ReactNode} from 'react';
import { StepsPropsType } from '../types';
import { StepsForm } from '@ant-design/pro-form';
import { Modal,Drawer } from 'antd';
import ComponentCustom from '../component';
import { setFormDefault, setFinishFailed, defaultConfig } from '../define';


function ProStepsFormCustom(props: StepsPropsType) {
  let {
    labelAlign,
    size,
    onSubmit,
    onValuesChange,
    formConfig,
    initialValues,
    form,
    layout,
    requiredMark,
    modal,
  } = props;

  $global.log('进入表单开始渲染');

  //全部完成回调
  const onFinish = async (data: any) => {
    try {
      let param: any = {};

      setFormDefault(param, formConfig, data, 'steps');

      await onSubmit(param);

      //如果返回 false, 就不会跳转下一步。
      return true;
    } catch (e) {
      console.log(e);
    }
  };
  //每次下一步前执行回调
  const onStepFinish = async (data: any) => {
    //如果返回 false, 就不会跳转下一步。
    return true;
  };
  //每次切换成功回调
  const onCurrentChange = async (current:number) => {
    try {

    } catch (e) {
      console.log(e);
    }
  };
  const onFinishFailed = async (err: any) => {
    setFinishFailed(err);
  };
  //处理弹窗配置
  let modalConfig:any = {};
  if(modal){
    if(modal.title){
      modalConfig.title = modal.title
    }else {
      modalConfig.title = defaultConfig.modal?.title;
    }
    if(modal.width){
      modalConfig.width = modal.width;
    }else {
      modalConfig.width = defaultConfig.modal?.width;
    }

    if(modal.visible){
      modalConfig.visible = modal.visible;
    }
    if(modal.onCancel){
      if(modal.mode && modal.mode === 'Drawer'){
        modalConfig.onClose = modal.onCancel;
      }else {
        modalConfig.onCancel = modal.onCancel;
      }
    }
  }

  //处理弹窗类型
  let CustomModal:any = Modal;
  //处理弹窗类型
  if (modal) {
    if(modal.mode === 'Drawer'){
      CustomModal = Drawer;
    }
  }

  return (
    <>
      <StepsForm
        onFinish={onFinish}
        onCurrentChange={onCurrentChange}
        stepsFormRender={modal ? (dom, submitter) => {
          return (
            <CustomModal
              {...modalConfig}
              footer={submitter}
              destroyOnClose
            >
              {dom}
            </CustomModal>
          );
        }:undefined}
      >
        {
          formConfig.map((i, key) => {
            let iprops = { ...i, formConfig: i.stepsChildren };
            return (
              <StepsForm.StepForm
                key={key + '-step-custom'}
                name={i.name}
                title={i.title}
                layout={layout || defaultConfig.layout}
                form={form}
                labelAlign={labelAlign || defaultConfig.labelAlign}
                size={size || defaultConfig.size}
                requiredMark={requiredMark || defaultConfig.requiredMark}
                onFinish={onStepFinish}
                onFinishFailed={onFinishFailed}
                initialValues={initialValues || defaultConfig.initialValues}
                onValuesChange={onValuesChange}
              >
                <ComponentCustom {...iprops} />
              </StepsForm.StepForm>
            );
          })
        }


      </StepsForm>
    </>
  );
}

export default ProStepsFormCustom;
