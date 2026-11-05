# Features

Functionality built to date, and functionality designed but not built.

Everything under "Built" has code and tests in the repository. None of it has been reviewed clinically or validated for care.

## Built

### Patient identity

Registration and search, with duplicate checks. Merge and unmerge are both supported.

### Explainable matching

A pure Rust matcher with reasons for each field. It never auto-links twins, and refuses when evidence is missing.

### Access control

Roles, care relationships, consent, purpose of use and break-the-glass, decided in the service.

### Hash-chained audit

Every read and write, in a trail protected by database triggers and verifiable by route.

### Initial clinical data

Allergies, observations, patient photos, and amendment requests. Vital signs show when each was measured and when it was written.

### Reports of death

A death is stored as a report with a source and a reason, and only a person can confirm or withdraw it. A report holds outbound events while it stands, and a confirmed death stops proxy access and the patient's own login. No clinician or bereaved person has reviewed this.

### Needs and reasonable adjustments

What a person needs in order to use care, such as an interpreter, large print or step-free access, from a fixed list with a date to check it again. It shows in the banner, staff record it, patients see and correct their own, and it is available as a FHIR Flag. It informs staff and changes nothing by itself. No clinician or disabled person has reviewed this.

### Closed-loop referrals

Referrals with worklists. A referral without a response is flagged.

### Interoperability

FHIR R4 and R5 reads for Patient, AllergyIntolerance and Observation. An inbound HL7 v2 ADT feed, with a review queue for refused messages.

### Clinician interface

SvelteKit with a backend-for-frontend: the browser holds no token. Ten machine-written locales.

## Designed, not built

Each of these has a specification or research page, and no code yet.

- Most of the clinical record: encounters, orders, results, notes and prescribing
- Security labels on clinical content, so that masking applies to it
- Care pathways designed and redesigned by clinicians
- Setting profiles for acute, community and mental health, and specialty views
- Mobile layouts for the record
- A training environment and a [training overlay](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/training-overlay/index.md)
- Bulk import and FHIR bulk export
- Backup and restore

See the [research](@/research/) behind them.
