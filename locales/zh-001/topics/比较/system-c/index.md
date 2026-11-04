# System C

英国医疗和社会照护软件供应商。

基于公开来源的笔记，阅读于 2026 年 11 月 4 日。这里的内容都没有通过使用产品来验证。供应商的说法只是说法。这不是产品评测，“未找到”仅表示所读来源没有提及。

## 它是什么

System C 的产品包括原名 Medway 的 CareFlow EPR、BadgerNet Maternity and Neonatal、ChemoCare 和 Liquidlogic 社会照护系统。提供共享照护记录的 Graphnet 是同一联盟中的另一家公司。

## 照护场景

供应商声称覆盖急症、急诊、手术室、门诊和药房。产科与新生儿以及社会照护是专长。所读页面未提及精神卫生。

## 并列比较

| 方面 | System C | 本项目现状 |
|---|---|---|
| 范围 | 急症电子病历、药房、产科和社会照护 | 框架：身份、同意、过敏、观察、转诊、审计 |
| 互操作性 | 声称支持 FHIR；NHS 数据标准 | 针对三种资源的 FHIR R4 和 R5 读取；入站 HL7 v2 ADT |
| 移动端和患者访问 | Connect 应用（供应商） | 移动端布局和患者门户尚未构建 |

## 本项目从中学到什么

保持专注和正确，因为广度需要多年工作。用药安全需要单独的危害分析。产科和肿瘤科是独立产品，这说明专科视图需要各自的数据结构。

[阅读完整笔记及来源（英文）](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/system-c/index.md) · [全部比较](@/比较/)
