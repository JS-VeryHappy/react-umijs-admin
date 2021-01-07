---
title: 开发说明
nav:
  title: 组件
group:
  title: 基础业务组件
---

## 说明

> 1. 自定义表单开发必须遵循规则 **1.其本身有独立使用说明文档 2.本身可以独立运行不受使用环境所影响 3 本身尽可能是一样最小化模块**
> 2. 自定义组件开发中可以使用 [ProComponents](https://procomponents.ant.design/components/form) 组件、可以只用[Antd](https://ant.design/components/overview-cn/)、[html语义化标签]、单独使用和混合使用
> 3. 自定义组件必须实现3个属性、**value、onChange、readonly。1.value 接受默认值 2.onChange值发生变化需要触发该方法3.readonly 只读模式下应该有 固定ui呈现。**
> 3. 组件后缀统一以:**Custom**结尾

---

## 例子
<embed src="./FormGroup/InputAutoCompleteCustom/index.md" />
