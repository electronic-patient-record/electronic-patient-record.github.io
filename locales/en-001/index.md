# Open-source electronic patient record

Software for longitudinal patient records, developed in public under open licences.

The project is developing an electronic patient record (EPR) with a published specification, source code and clinical hazard log. Design requirements include an append-only clinical record, audit of all access, and patient matching that records the reasons for each decision. Most of the planned functionality is not yet built, and the software is not suitable for clinical use.

## Design principles

### Append-only clinical record

A correction creates a new version. The original remains available to authorised readers.

### Explainable patient matching

The matcher reports its reasons by field. Missing data is recorded as missing and is not treated as agreement.

### Audit of all access

Reads and writes are both audited, with user, record and purpose. The audit trail is hash-chained so that alteration can be detected.

### Public project documentation

The code, specification, research and hazard log are public. Each changelog entry states what was not done or verified.

## Where to go next

### Overview

See the [benefits](@/benefits/) and the [comparison](@/compare/) with other systems.

### Evaluation

The [tutorial](@/tutorial/) runs a patient match on sample data.

### Contribution

The project has open needs for clinicians and a Clinical Safety Officer. See [about](@/about/).

## Current status

The project is a pre-release scaffold. Some components run and have tests, but there is no working clinical record, and the software must not be used for patient care. The [status page](@/status/) lists what is and is not built.
