import React,{ useEffect } from 'react';
import { history,useModel,useRequest } from 'umi';
import { pwdLogin } from '@/services';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Image,message } from 'antd';
import styles from './index.less';
import bg from  '@/assets/images/bg.png';
import ProFormCustom from '@/components/ProFormCustom';
import { FormChildrenConfigType } from '@/components/ProFormCustom/types';

function UserMobileLogin(){

  const {  setInitialState } = useModel('@@initialState');

  const { run:onFinish } = useRequest(async (values:any)=>{
    try {
      let res = await pwdLogin(values);
      message.success('登录成功');
      setInitialState(res.data);
      setTimeout(()=>{
        history.push('/');
      },0);
    }catch (e) {

    }
  },{
    manual: true
  });

  //设置style
  const divStyle = (): React.CSSProperties => ({
    width: 'auto',
    background:'none'
  });

  let config: FormChildrenConfigType[] = [
    {
      children: [
        {
          mold: "ProFormText",
          name: "mobile",
          label: "手机码号",
          tooltip: '钉钉登录手机号',
          placeholder: "请输入手机码号",
          fieldProps: {
            maxLength: 11
          },
          rules:[{ required: true , message: '填写手机'}]
        }
      ]
    },
    {
      children: [
        {
          mold: "ProFormText.Password",
          name: "password",
          label: "密码",
          placeholder: "请输入密码",
          rules:[{ required: true , message: '填写密码'}]
        }
      ]
    }
  ]
  return (
    <div className={styles.main}>
      <div className={styles.sign}>
        <div>
          <Image
            preview={false}
            width="100%"
            height="100%"
            src={bg}
          />
          <div className={styles.code}>
            <div className={styles.title}>
              使用钉钉手机进行登录
            </div>
            <div className={styles.box} style={divStyle()}>
              <ProFormCustom
                submitter={{
                  searchConfig:{
                    submitText:'登录'
                  },
                  submitButtonProps:{
                    style:{
                      width: '100%',
                    }
                  },
                  render: (_:any, dom:any) => dom.pop(),
                }}
                formConfig={config}
                onSubmit={onFinish}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserMobileLogin;
