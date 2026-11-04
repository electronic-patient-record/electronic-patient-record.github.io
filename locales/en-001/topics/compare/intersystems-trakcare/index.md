# InterSystems TrakCare

A hospital information system used across many countries.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

TrakCare is made by InterSystems, a privately held company based in Boston, and is built on its IRIS for Health platform. The vendor says it is used in more than 600 hospitals in 29 countries, which was not independently counted. Public evidence covers Scotland, England, Ireland, Australia and Asia.

## Care settings

Acute and outpatient care are its core. Mental-health use is reported in Scotland and Ireland. Community and primary care were not found.

## Side by side

| Area | InterSystems TrakCare | This project today |
|---|---|---|
| Scope | Hospital system, with scheduling, orders and mental-health administration | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | FHIR, SMART on FHIR and NHS profiles (vendor) | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | Mobile-first claim (vendor) | Mobile layout and patient portal not built |

## What this project takes from it

Reported go-live difficulties centred on data quality and waiting-time reporting, so test migration data early. Board-by-board roll-out in Scotland is a model for phasing by setting.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/intersystems-trakcare/index.md) · [All comparisons](@/compare/)
