# electronic-patient-record.github.io

The source for <https://electronic-patient-record.github.io>, the public site of the
[Electronic Patient Record](https://github.com/electronic-patient-record/electronic-patient-record) project.

**Pre-release software. Not for clinical use. Do not enter real patient data.**

```sh
pnpm install
pnpm run dev
pnpm test
```

Content is Markdown in [`locales/`](locales), in English, Welsh and Mandarin. See [`spec/locale/index.md`](spec/locale/index.md).

Pushing to `main` deploys through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). See [`AGENTS.md`](AGENTS.md).
