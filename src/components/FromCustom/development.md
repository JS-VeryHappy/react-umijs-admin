---
title: 子组件开发说明
nav:
  title: 组件
group:
  title: 表单组件
---


## 自定义开发表格单组件说明

 -  一.自定义表单开发必须遵循规则 
    - **1.其本身有独立使用说明文档和运行Demo** 
    - **2.本身可以独立运行不受业务组件的使用环境所影响** 
    - **3.本身尽可能是业务最小化模块**
 -  二.自定义组件开发中可以使用以下组件、可以单独使用、也可以混合使用：
    - **[ProComponents](https://procomponents.ant.design/components/form)**
    - **[Antd](https://ant.design/components/overview-cn/)**
    - **[html语义化标签]**
 -  三.自定义组件必须完成3个属性对应实现方法、**value、onChange、readonly**
    - **1.value 接受默认值** 
    - **2.onChange值发生变化需要触发该方法** 
    - **3.readonly只读模式下应该有 固定ui呈现**
    - ```js
      const { onChange, value, options, ...rest } = fieldProps;

      useEffect(() => {
         /**
         * 如果父级传有默认值则赋值默认值
         */
         setInputValue(value);
      }, []);

      /**
      * input切换值变换。如果父级传入监听方法调用
      * @param value
      */
      const onInputChange = (avalue: any) => {
         setInputValue(avalue);
         if (onChange && typeof onChange === 'function') {
            onChange(avalue);
         } else {
            message.info(`Input切换值${avalue}`);
         }
      };

      return (
         <>
            {readonly ? (
            value
            ) : (
            <AutoComplete
               value={inputValue}
               placeholder="请输入"
               {...rest}
               options={nowOptions}
               // onSelect={onSelect}
               // onSearch={onSearch}
               onChange={onInputChange}
            />
            )}
         </>
      );
      ```
    - **4.在types.d.ts 定义ValueType类型**
    - ```js
         export declare type ValueType =
      | 'text'
      | 'InputTooltipCustom'
      | 'InputSelectCustom'
      | 'InputAutoCompleteCustom'
      | 'ProFormCaptchaCustom'
      | FormFieldType;
      ```
 -  四.组件统一后缀以:**Custom**结尾   
    - 例如：表单子组件:自动完成 InputAutoCompleteCustom

---
