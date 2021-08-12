---
title: 全局表单组件
nav:
  title: 组件
group:
  title: 表单组件
---


## 自定义开发表子单组件说明

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
    - **4.在types.d.ts 定义ValueType类型**
 -  四.组件统一后缀以:**Custom**结尾   
    - 例如：表单子组件:自动完成 InputAutoCompleteCustom

---

## 内嵌使用
<code src="@/components/FromCustom/Example/embed.tsx" 
      title="登陆例子" 
      desc="自定义按钮样式"
    />

---
<!-- 
## 弹窗使用
<code src="@/components/ProFormCustom/Example/model.tsx" 
      desc="我有几种使用弹窗的方式"
    />

---

## 步骤表单使用
<code src="@/components/ProFormCustom/Example/steps.tsx" 
        desc="我是特殊的表单类型、我基础普通表单的所以属性操作（配置、弹窗等用法一直）"
    />

---

## 表单验证
<code src="@/components/ProFormCustom/Example/verify.tsx" 
        desc="我可以验证表单、我有多重验证规则的写法"
    />

---

## 普通使用
<code src="@/components/ProFormCustom/Example/useForm.tsx" />

---

## 联动使用
<code src="@/components/ProFormCustom/Example/linkage.tsx" 
        desc="我能是表单联动"
    />

---

## 无限极嵌套
<code src="@/components/ProFormCustom/Example/children.tsx" 
        desc="我可以被无限极的嵌套使用"
    />

---

## 使用自定义组件
<code src="@/components/ProFormCustom/Example/custom.tsx" 
        desc="表单只用自定义基础业务组件、动态表单的使用"
    />

---

## 自定义按钮
<code src="@/components/ProFormCustom/Example/customBtn.tsx" 
        desc="自定义按钮"
    />

--- -->


## FromCustom API

[ProComponents](https://procomponents.ant.design/components/form)

---



## 表单列定义API

<API src="./Example/FromCustomTypes/index.tsx" exports='["FormCustomColumnsType","OptionType"]'></API>

---
