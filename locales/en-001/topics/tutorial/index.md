# Tutorial

How to download the code and run a patient match.

The steps use sample data. Do not use real patient data. You need [Git](https://git-scm.com/) and [Rust](https://rustup.rs/); the repository pins the Rust version, and the right one installs itself.

## Step 1: get the code

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## Step 2: create two records

Patient matching assesses whether two records refer to the same person. Create a file called `a.json`:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

Create a file called `b.json` with a typing error in the given name:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## Step 3: run the matcher

```sh
cargo run -- a.json b.json
```

The output contains a decision and a result for each field:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

The output above is shortened. `sex` is missing, so its similarity is `null` and it is excluded from the score.

## Step 4: remove a field

Delete the `"birth_date"` field from `b.json`, keeping the JSON valid, and run it again. The names still match and the score remains high, but the decision changes to `review`, which requires a person to check it. `conflicts` gives the reason: `birth date not available to confirm the link`.

These thresholds have not been validated.

## Step 5: run the tests

```sh
cargo test
```

## Step 6: next steps

- **Clinician interface:** in `electronic-patient-record-ui-with-svelte`, run `pnpm install` then `pnpm dev`. It needs Node 26 and pnpm, and the API for live data.
- **The API:** it enforces login, so it needs an identity provider. The [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md) has the commands, and [Keycloak for development](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md) has the rest.
- **The specification:** start at the [index](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md).
- **Contributing:** see [about](@/about/).
