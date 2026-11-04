# 教程

从下载代码到第一次有解释的匹配。

只需几分钟，使用虚构数据。切勿使用真实患者数据。您需要 [Git](https://git-scm.com/) 和 [Rust](https://rustup.rs/)；代码库固定了 Rust 版本，正确的版本会自动安装。

## 第 1 步：获取代码

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## 第 2 步：描述两个人

患者匹配要回答的是：两份记录是否属于同一个人。创建一个名为 `a.json` 的文件：

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

创建一个名为 `b.json` 的文件，名字中有一处拼写错误：

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## 第 3 步：询问匹配器

```sh
cargo run -- a.json b.json
```

答案给出一个决定，并为每个字段说明原因：

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

以上输出已缩短。请注意 `sex`：它缺失了，所以相似度为 `null`，并且不计入得分。缺失不等于零。

## 第 4 步：拿走证据

从 `b.json` 中删除 `"birth_date"` 字段，保持 JSON 有效，然后再次运行。姓名仍然匹配，得分也仍然很高，但决定降为 `review`，交由人工检查。`conflicts` 说明了原因：`birth date not available to confirm the link`。

这些阈值是未经验证的起点。这也是它不得用于临床的原因之一。

## 第 5 步：运行测试

```sh
cargo test
```

## 第 6 步：继续深入

- **临床界面：** 在 `electronic-patient-record-ui-with-svelte` 中运行 `pnpm install`，然后运行 `pnpm dev`。它需要 Node 26 和 pnpm，实时数据还需要 API。
- **API：** 它强制登录，因此需要身份提供方。[README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md) 中有命令，其余内容见[用于开发的 Keycloak](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md)。
- **规范：** 从[索引](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md)开始。
- **参与：** 请参阅[关于](@/关于/)。
