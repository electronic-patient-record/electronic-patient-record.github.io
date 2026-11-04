# Nervecentre

An acute EPR for NHS trusts, originally a mobile workflow platform.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

Nervecentre began as a mobile platform for clinical workflows, tasks and electronic observations. An advisory article says it has grown into a full acute EPR. Trade press reports long contracts with several NHS England trusts.

## Care settings

Acute wards have the strongest evidence. It is used in some integrated acute and community trusts. Wider mental-health fit was not established. It is not a GP system.

## Comparison

| Area | Nervecentre | This project today |
|---|---|---|
| Scope | Acute EPR, reported to cover prescribing, noting, beds and discharge | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | FHIR APIs and BaRS alignment claimed | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | Handheld first | Mobile layout and patient portal not built |

## Implications for this project

Escalation rules and task generation should be prioritised over charting. Reports from Nottingham indicate that Wi-Fi, device support and out-of-hours support should be treated as requirements for mobile use.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/nervecentre/index.md) · [All comparisons](@/compare/)
