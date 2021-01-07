---
title: 业务表单组件
nav:
  title: 组件
group:
  title: 业务表单组件
---


# 说明
> 1. 表单各种组件说明文档：[ProComponents](https://procomponents.ant.design/components/form)
> 2. 所有组件的属性都支持、本质是在ProComponents封装一层
> 3. 除 ProComponents 组件外、可支持自定义各种组件详见[自定义组件](/~docs/components/basics-business-custom)
> 4. *\*Type* 结尾的Type类型 可以页面搜索对应的TS接口说明查看详细参数


## 内嵌使用
<code src="@/components/ProFormCustom/Example/embed.tsx" 
      title="内嵌使用" 
      desc="我可以被嵌入页面中使用、我tooltip提示和maxLength的限制"
    />

---

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

---


## API参数

<API src="./Ordinary/index.tsx" title="普通表单"></API>

---

<API src="./Steps/index.tsx" title="步骤表单"></API>

---

## TS接口

<API src="./Example/ProFormTypes/index.tsx" exports='["OptionsType","RulesType","FormConfigType","FormChildrenConfigType","FormStepsChildrenConfigType","ProCardType","SearchConfigType","StepsPropsType","SubmitterType","ModalType","PropsType"]'></API>

