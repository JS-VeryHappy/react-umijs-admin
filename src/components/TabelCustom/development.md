---
title: 内置弹窗开发说明
nav:
  title: 组件
group:
  title: 表格组件
---


## 自定义开发表格单组件说明

 -  一.自定义内置弹窗开发必须遵循规则 
    - **1.其本身有独立使用说明文档和运行Demo** 
 -  二.开发中可以使用以下组件、可以单独使用、也可以混合使用：
    - **[ProComponents](https://procomponents.ant.design/components/form)**
    - **[Antd](https://ant.design/components/overview-cn/)**
    - **[html语义化标签]**
    - **[内部业务组件]**
 -  三.必须完成3个属性对应实现方法
    - **1.使用props 属性 modelchildName设置组件的key和id**
    - ```js
         return <FromCustom id={modelchildName} key={modelchildName} {...newConfig} />;
         ``` 
    - **2.但是隐藏后必须调用closeModal() 关闭弹窗**
    - ```js
         {
            afterClose: () => {
            if (closeModal) {
               closeModal();
            }
            },
         }
         ```
   - **3.尽量都使用antd弹窗组件作为外部组件、因为他挂载body下，在关闭回调中有特殊关闭，可查看closeModal方法** 
   - **4.在modalTypeRenderConfig.tsx导出内置组件，并且types.d.ts 定义modalType内置弹窗类型，类型必须和导出函数命名相同**
      - ```js
         // modalTypeRenderConfig.tsx
         export { default as Form } from './FormModal';
         // types.d.ts
         export declare type modalType = 'Form';
         ```
 -  四.组件命名规则**Modal结尾**
    - 例如：内置表单弹窗 ModalForm

---


## 组件Props API说明

<API src="./Example/TabelCustomTypes/index.tsx" exports='["ModalPropsType"]'></API>

---
