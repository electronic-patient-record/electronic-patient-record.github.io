# EMIS

A major English GP and community system.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

EMIS makes EMIS Web, EMIS-X and the Patient Access app. Its ownership changed in 2023 and again in 2026. Press reports say EMIS Web is used by more than half of English GP practices, which should be read as an estimate.

## Care settings

Primary care is its core market. Community is a named product. Acute use was not found in the sources read.

## Comparison

| Area | EMIS | This project today |
|---|---|---|
| Scope | GP and community records | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | FHIR through GP Connect, and IM1 | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | EMIS-X Mobile and the Patient Access app | Mobile layout and patient portal not built |

## Implications for this project

Outages were reported in 2024 and 2026, so a degraded mode should be specified, with read-only access and a paper fallback. Undelivered letters should be flagged, and the agreement behind each share recorded.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/emis/index.md) · [All comparisons](@/compare/)
