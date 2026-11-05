# الدليل التعليمي

كيفية تنزيل الشيفرة وتشغيل مطابقة مرضى.

تستخدم الخطوات بيانات نموذجية. لا تستخدم بيانات مرضى حقيقية. ستحتاج إلى [Git](https://git-scm.com/) و[Rust](https://rustup.rs/)؛ ويحدد المستودع إصدار Rust، فيُثبَّت الإصدار الصحيح تلقائيًا.

## الخطوة 1: احصل على الشيفرة

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## الخطوة 2: أنشئ سجلين

تقيّم مطابقة المرضى ما إذا كان سجلان يشيران إلى الشخص نفسه. أنشئ ملفًا باسم `a.json`:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

أنشئ ملفًا باسم `b.json` فيه خطأ مطبعي في الاسم الأول:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## الخطوة 3: شغّل أداة المطابقة

```sh
cargo run -- a.json b.json
```

يتضمن الناتج قرارًا ونتيجة لكل حقل:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

الناتج أعلاه مختصر. الحقل `sex` مفقود، فقيمة تشابهه `null` ويُستبعد من الدرجة.

## الخطوة 4: احذف حقلًا

احذف الحقل `"birth_date"` من `b.json`، مع إبقاء JSON صالحًا، ثم شغّل الأداة مرة أخرى. تظل الأسماء متطابقة وتبقى الدرجة مرتفعة، لكن القرار يتغير إلى `review`، أي أن على شخص أن يتحقق منه. ويعطي الحقل `conflicts` السبب: `birth date not available to confirm the link`.

لم يجرِ التحقق من صحة هذه العتبات.

## الخطوة 5: شغّل الاختبارات

```sh
cargo test
```

## الخطوة 6: الخطوات التالية

- **واجهة الطبيب:** في `electronic-patient-record-ui-with-svelte`، شغّل `pnpm install` ثم `pnpm dev`. وهي تحتاج إلى Node 26 وpnpm، وإلى الواجهة البرمجية للبيانات الحية.
- **الواجهة البرمجية:** تفرض تسجيل الدخول، لذا تحتاج إلى موفر هوية. يتضمن [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md) الأوامر، وتتضمن صفحة [Keycloak للتطوير](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md) الباقي.
- **المواصفات:** ابدأ من [الفهرس](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md).
- **المساهمة:** راجع صفحة [حول المشروع](@/حول/).
