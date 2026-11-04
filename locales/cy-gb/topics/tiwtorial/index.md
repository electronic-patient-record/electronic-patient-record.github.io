# Tiwtorial

Sut i lawrlwytho’r cod a rhedeg paru cleifion.

Mae’r camau’n defnyddio data sampl. Peidiwch â defnyddio data cleifion go iawn. Mae arnoch angen [Git](https://git-scm.com/) a [Rust](https://rustup.rs/); mae’r gadwrfa’n pinio fersiwn Rust, ac mae’r un iawn yn gosod ei hun.

## Cam 1: cael y cod

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## Cam 2: creu dau gofnod

Mae paru cleifion yn asesu a yw dau gofnod yn cyfeirio at yr un person. Crëwch ffeil o’r enw `a.json`:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

Crëwch ffeil o’r enw `b.json` gyda gwall teipio yn yr enw cyntaf:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## Cam 3: rhedeg y parwr

```sh
cargo run -- a.json b.json
```

Mae’r allbwn yn cynnwys penderfyniad a chanlyniad ar gyfer pob maes:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

Mae’r allbwn uchod wedi’i fyrhau. Mae `sex` ar goll, felly `null` yw ei debygrwydd ac mae wedi’i eithrio o’r sgôr.

## Cam 4: dileu maes

Dilëwch y maes `"birth_date"` o `b.json`, gan gadw’r JSON yn ddilys, a’i redeg eto. Mae’r enwau’n dal i baru ac mae’r sgôr yn parhau’n uchel, ond mae’r penderfyniad yn newid i `review`, sy’n gofyn i berson ei wirio. Mae `conflicts` yn rhoi’r rheswm: `birth date not available to confirm the link`.

Nid yw’r trothwyon hyn wedi’u dilysu.

## Cam 5: rhedeg y profion

```sh
cargo test
```

## Cam 6: camau nesaf

- **Rhyngwyneb clinigwyr:** yn `electronic-patient-record-ui-with-svelte`, rhedwch `pnpm install` yna `pnpm dev`. Mae angen Node 26 a pnpm arno, a’r API ar gyfer data byw.
- **Yr API:** mae’n gorfodi mewngofnodi, felly mae angen darparwr hunaniaeth arno. Mae’r gorchmynion yn y [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md), a’r gweddill yn [Keycloak ar gyfer datblygu](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md).
- **Y fanyleb:** dechreuwch yn y [mynegai](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md).
- **Cyfrannu:** gweler [ynghylch](@/ynghylch/).
