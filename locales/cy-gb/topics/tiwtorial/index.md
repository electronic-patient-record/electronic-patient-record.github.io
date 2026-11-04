# Tiwtorial

O lawrlwythiad newydd i’ch paru cyntaf wedi’i egluro.

Mae hyn yn cymryd ychydig funudau ac yn defnyddio data ffug. Peidiwch byth â defnyddio data cleifion go iawn. Mae arnoch angen [Git](https://git-scm.com/) a [Rust](https://rustup.rs/); mae’r gadwrfa’n pinio fersiwn Rust, ac mae’r un iawn yn gosod ei hun.

## Cam 1: cael y cod

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## Cam 2: disgrifio dau berson

Mae paru cleifion yn gofyn ai’r un person yw dau gofnod. Gwnewch ffeil o’r enw `a.json`:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

Gwnewch ffeil o’r enw `b.json` gyda llithriad teipio yn yr enw cyntaf:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## Cam 3: gofyn i’r parwr

```sh
cargo run -- a.json b.json
```

Mae’r ateb yn rhoi penderfyniad, a rheswm ar gyfer pob maes:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

Mae’r allbwn uchod wedi’i fyrhau. Sylwch ar `sex`: mae ar goll, felly `null` yw ei debygrwydd, ac mae’n cael ei adael allan o’r sgôr. Nid yw absennol yn golygu sero.

## Cam 4: tynnu tystiolaeth i ffwrdd

Dilëwch y maes `"birth_date"` o `b.json`, gan gadw’r JSON yn ddilys, a’i redeg eto. Mae’r enwau’n dal i baru ac mae’r sgôr yn aros yn uchel, ond mae’r penderfyniad yn gostwng i `review`, i berson ei wirio. Mae `conflicts` yn dweud pam: `birth date not available to confirm the link`.

Mannau cychwyn heb eu dilysu yw’r trothwyon hyn. Dyna un rheswm pam nad yw hyn at ddefnydd clinigol.

## Cam 5: rhedeg y profion

```sh
cargo test
```

## Cam 6: mynd ymhellach

- **Rhyngwyneb clinigwyr:** yn `electronic-patient-record-ui-with-svelte`, rhedwch `pnpm install` yna `pnpm dev`. Mae angen Node 26 a pnpm arno, a’r API ar gyfer data byw.
- **Yr API:** mae’n gorfodi mewngofnodi, felly mae angen darparwr hunaniaeth arno. Mae’r gorchmynion yn y [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md), a’r gweddill yn [Keycloak ar gyfer datblygu](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md).
- **Y fanyleb:** dechreuwch yn y [mynegai](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md).
- **Cymryd rhan:** gweler [ynghylch](@/ynghylch/).
