# Tutorial

From a fresh download to your first explained match.

This takes a few minutes and uses made-up data. Never use real patient data. You need [Git](https://git-scm.com/) and [Rust](https://rustup.rs/); the repository pins the Rust version, and the right one installs itself.

## Step 1: get the code

```sh
git clone https://github.com/electronic-patient-record/electronic-patient-record.git
cd electronic-patient-record/electronic-patient-record-matcher-with-rust
```

## Step 2: describe two people

Patient matching asks whether two records are the same person. Make a file called `a.json`:

```json
{"names":[{"family":"Rivers","given":["Morgan"]}],"birth_date":"1980-02-14"}
```

Make a file called `b.json` with a typing slip in the given name:

```json
{"names":[{"family":"Rivers","given":["Morgen"]}],"birth_date":"1980-02-14"}
```

## Step 3: ask the matcher

```sh
cargo run -- a.json b.json
```

The answer gives a decision, and a reason for each field:

```json
{ "score": 0.98, "decision": "auto_link", "fields": [
  { "field": "family_name", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "given_name", "similarity": 0.93, "note": "similarity 0.93" },
  { "field": "birth_date", "similarity": 1.0, "note": "similarity 1.00" },
  { "field": "sex", "similarity": null, "note": "sex unknown on one or both records" }
] }
```

The output above is shortened. Notice `sex`: it is missing, so its similarity is `null`, and it is left out of the score. Absent is not zero.

## Step 4: take evidence away

Delete the `"birth_date"` field from `b.json`, keeping the JSON valid, and run it again. The names still match and the score stays high, but the decision drops to `review`, for a person to check. `conflicts` says why: `birth date not available to confirm the link`.

These thresholds are unvalidated starting points. That is one reason this is not for clinical use.

## Step 5: run the tests

```sh
cargo test
```

## Step 6: go further

- **Clinician interface:** in `electronic-patient-record-ui-with-svelte`, run `pnpm install` then `pnpm dev`. It needs Node 26 and pnpm, and the API for live data.
- **The API:** it enforces login, so it needs an identity provider. The [README](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/README.md) has the commands, and [Keycloak for development](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/operations/keycloak/README.md) has the rest.
- **The specification:** start at the [index](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/index.md).
- **Take part:** see [about](@/about/).
