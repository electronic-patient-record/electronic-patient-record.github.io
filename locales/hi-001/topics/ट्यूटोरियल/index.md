# ट्यूटोरियल

कोड डाउनलोड करने और रोगी मिलान चलाने का तरीका।

इन चरणों में नमूना डेटा का उपयोग होता है। वास्तविक रोगी डेटा का उपयोग न करें। आपको [Git](https://git-scm.com/) और [Rust](https://rustup.rs/) चाहिए; रिपॉज़िटरी Rust का संस्करण तय करती है, और सही संस्करण अपने आप इंस्टॉल हो जाता है।

## चरण 1: कोड प्राप्त करें

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## चरण 2: दो रिकॉर्ड बनाएँ

रोगी मिलान यह आकलन करता है कि दो रिकॉर्ड एक ही व्यक्ति के हैं या नहीं। `a.json` नाम की फ़ाइल बनाएँ:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

`b.json` नाम की फ़ाइल बनाएँ, जिसमें दिए गए नाम में टाइपिंग की गलती हो:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## चरण 3: मिलान उपकरण चलाएँ

```sh
cargo run -- a.json b.json
```

आउटपुट में एक निर्णय और हर फ़ील्ड का परिणाम होता है:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

ऊपर का आउटपुट संक्षिप्त किया गया है। `sex` अनुपस्थित है, इसलिए उसकी समानता `null` है और उसे स्कोर से बाहर रखा गया है।

## चरण 4: एक फ़ील्ड हटाएँ

`b.json` से `"birth_date"` फ़ील्ड हटाएँ, JSON को मान्य रखते हुए, और इसे फिर से चलाएँ। नाम अब भी मेल खाते हैं और स्कोर ऊँचा रहता है, लेकिन निर्णय बदलकर `review` हो जाता है, जिसके लिए किसी व्यक्ति को जाँच करनी होती है। `conflicts` कारण बताता है: `birth date not available to confirm the link`।

इन सीमाओं को मान्य नहीं किया गया है।

## चरण 5: परीक्षण चलाएँ

```sh
cargo test
```

## चरण 6: अगले कदम

- **चिकित्सक इंटरफ़ेस:** `electronic-patient-record-ui-with-svelte` में `pnpm install` और फिर `pnpm dev` चलाएँ। इसके लिए Node 26 और pnpm चाहिए, और लाइव डेटा के लिए API।
- **API:** यह लॉगिन अनिवार्य करता है, इसलिए इसे पहचान प्रदाता चाहिए। कमांड [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md) में हैं, और बाकी [विकास के लिए Keycloak](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md) में।
- **विनिर्देश:** [अनुक्रमणिका](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md) से शुरू करें।
- **योगदान:** [परिचय](@/परिचय/) देखें।
