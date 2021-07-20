import { ProFormCaptcha } from '@ant-design/pro-form';
import { message } from 'antd';
import { MailTwoTone } from '@ant-design/icons';

interface ProFormCaptchaCustomType {
  /**
   * 属性
   */
  fieldProps: {
    /**
     * 点击获取验证码的事件，如果配置了 phoneName 会自动注入
     */
    onGetCaptcha: (phone: string) => Promise<any>;
  };
  /**
   * json配置文件数据
   */
  config?: any;
}

function ProFormCaptchaCustom(Props: ProFormCaptchaCustomType) {
  const fieldProps = Props.fieldProps || {
    onGetCaptcha: async (mobile: any) => {
      message.success(`手机号 ${mobile} 验证码发送成功!`);
    },
    fieldProps: {
      style: {
        width: '400px',
      },
    },
    phoneName: 'mobile',
    placeholder: '请输入验证码',
    name: 'captcha',
    maxLength: 6,
    prefix: MailTwoTone,
  };

  return (
    <>
      <ProFormCaptcha {...fieldProps} fieldProps={Props.config?.fieldProps?.fieldProps} />
    </>
  );
}

export default ProFormCaptchaCustom;
