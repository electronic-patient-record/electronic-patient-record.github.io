# Benefits

What this approach is designed to give the people who use a patient record.

These are goals the project is built around, not results. Nothing here has been proven in clinical use, because it has not been used clinically. The [status page](@/status/) says what exists today.

## For patients

### See who looked

The design gives you a log of who opened your record, shown by role and organisation.

### Your wishes travel with the record

Consent is checked by the service on every read, not only on the screen in front of you.

### Corrections, not cover-ups

You can ask for a change, and the original stays on the record beside it.

## For clinicians

### One record along the whole pathway

The record is organised around the patient's care pathway, so that discharge from one team does not end the story.

### Emergency access that works

Break-the-glass gives a treating clinician four hours of read access with a reason, reviewed afterwards.

### Told what is missing

A blank is shown as unknown, with a reason, and never as "none" or "normal".

## For organisations

### No lock-in by design

Choose from five open licences. FHIR R4 is both the data model and the API, so your data is in a shared standard.

### Risk you can inspect

The hazard log is public, and no hazard can be closed by anyone but a Clinical Safety Officer.

### Evidence, not promises

Each change states what was not done or not verified, in a public changelog.

## For developers

### Spec first

A change in behaviour is one commit: a spec edit, a code edit and a test edit.

### Guards in the build

Census tests fail when a route, a column or a permission is added without being accounted for.

### A modern stack

Rust and loco.rs, PostgreSQL 18, SvelteKit and Svelte 5, Lily Design System.

## For everyone, everywhere

National rules live in packs and not in the core, so that a capability for one country has a path to work for all. The clinician interface has 10 locales, machine-written until speakers review them.
