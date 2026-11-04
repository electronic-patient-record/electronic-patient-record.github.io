# Status

Build status, review status and project figures.

A snapshot from 4 November 2026. The live version is the generated [implementation status](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/14-implementation-status.md), and the [changelog](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/CHANGELOG.md) says what each change did not do or verify.

## Summary

The project is a scaffold. Code exists for the items under "Built" on the [features page](@/features/). Most of the clinical record is not yet built.

## Safety and review

- No Clinical Safety Officer is named yet, so **no hazard has been accepted or closed**.
- The role and permission tables are a first draft and have had no clinical review.
- No clinician, lawyer or data protection officer has reviewed the specifications.
- Translations are machine-written until a speaker reviews them.
- The [hazard log](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/governance/clinical-safety/hazard-log.csv) is public.

## Figures

Counted from the source tree. Test figures count tests written, not tests passing in a given run.

| Fact | Value |
|---|---|
| Service version | 0.1.0 |
| Matcher version | 0.6.0 |
| User interface version | 0.1.0 |
| Database migrations | 24 |
| Route registrations | 70 |
| Service tests | 565, plus 159 that need a database |
| Matcher tests | 105 |
| User interface unit tests | 245 |
| User interface end-to-end tests | 89 |
| Tasks done | 52 |
| Tasks open | 339 |
