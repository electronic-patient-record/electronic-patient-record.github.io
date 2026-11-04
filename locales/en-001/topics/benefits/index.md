# Benefits

Intended benefits by user group.

These are design objectives, not measured results. The software has not been used clinically. See the [status page](@/status/) for what exists today.

## Patients

### Access log

The design includes a log showing which roles and organisations opened a record.

### Consent enforcement

The service checks consent on each read, rather than relying on the user interface.

### Amendment requests

A patient can request a change. The original entry is retained alongside it.

## Clinicians

### Pathway-based record

The record is organised by care pathway, so discharge from one team does not close the patient's care.

### Emergency access

Break-the-glass gives a treating clinician four hours of read access. A reason is required, and access is reviewed afterwards.

### Visibility of missing data

Missing data is shown as unknown, with a reason, and not as "none" or "normal".

## Organisations

### Licensing and portability

Five open licences are available. FHIR R4 is used as both the data model and the API.

### Published hazard log

The hazard log is public. Only a Clinical Safety Officer can close a hazard.

### Published change history

Each entry in the public changelog states what was not done or verified.

## Developers

### Specification-led development

A behavioural change is one commit, containing a specification edit, a code edit and a test edit.

### Census tests

Automated tests fail when a route, column or permission is added without being accounted for.

### Technology stack

Rust and loco.rs, PostgreSQL 18, SvelteKit and Svelte 5, Lily Design System.

## International use

National rules are held in packs, not in the core. The clinician interface has 10 locales, which are machine-written until reviewed by speakers.
