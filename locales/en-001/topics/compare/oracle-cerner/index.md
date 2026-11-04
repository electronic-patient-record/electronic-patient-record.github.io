# Oracle Health (Cerner)

The former Cerner, now part of Oracle.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

Oracle bought Cerner, founded in 1979, in a deal that closed in June 2022, and renamed it Oracle Health. Its main product is Millennium. In 2024 Oracle announced a next-generation EHR. Markets include US hospitals, the US government, the NHS, Canada, Australia and Sweden.

## Care settings

Acute inpatient care is its core market. Fit for emergency, community, mental health and primary care was not established from the sources read.

## Side by side

| Area | Oracle Health (Cerner) | This project today |
|---|---|---|
| Scope | Hospital EHR (Millennium) | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | FHIR R4, with gated enablement | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | Not found in the sources read | Mobile layout and patient portal not built |

## What this project takes from it

A US inspector general reported in 2022 that a routing flaw left orders in an unmonitored queue. An order must never sit where nobody is looking, so this project should test that with destinations nobody owns. Downtime behaviour needs defining early.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/oracle-cerner/index.md) · [All comparisons](@/compare/)
