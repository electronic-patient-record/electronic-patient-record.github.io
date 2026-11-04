# Altera Digital Health

原 Allscripts 医院业务，现隶属 Harris。

基于公开来源的笔记，阅读于 2026 年 11 月 4 日。这里的内容都没有通过使用产品来验证。供应商的说法只是说法。这不是产品评测，“未找到”仅表示所读来源没有提及。

## 它是什么

Altera 是 Harris Healthcare 的业务部门，后者于 2022 年收购了 Allscripts 的医院和大型医师诊所业务。产品包括 Sunrise、Paragon 和 TouchWorks。市场包括美国、英国 NHS 急症信托和加拿大。

## 照护场景

急症是 Sunrise 在 NHS 信托中的核心。TouchWorks 是门诊产品。其他场景无法从所读来源确定。

## 比较

| 方面 | Altera Digital Health | 本项目现状 |
|---|---|---|
| 范围 | 医院电子病历（Sunrise）、门诊（TouchWorks）、小型医院（Paragon） | 框架：身份、同意、过敏、观察、转诊、审计 |
| 互操作性 | 某评测网站称支持 FHIR R4；网络合作伙伴关系 | 针对三种资源的 FHIR R4 和 R5 读取；入站 HL7 v2 ADT |
| 移动端和患者访问 | 在所读来源中未找到 | 移动端布局和患者门户尚未构建 |

## 对本项目的影响

供应商达到类似广度用了数十年，因此范围应保持聚焦。AI 起草的笔记应视为临床风险功能，写入危害日志，并使用单独的来源状态。

[阅读完整笔记及来源（英文）](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/altera/index.md) · [全部比较](@/比较/)
