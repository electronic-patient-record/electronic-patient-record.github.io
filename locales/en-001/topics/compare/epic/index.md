# Epic

A large US supplier of hospital and ambulatory records.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

Epic Systems is a privately held US company, founded in 1979. Its products include the MyChart patient portal. Trade press summarising KLAS reported it as the largest supplier to US acute hospitals in 2026. Several NHS trusts and Norway’s Helseplattformen also use it.

## Care settings

Acute and ambulatory are its core market. Community use is reported at Royal Devon and Exeter. "Care in the Home" is a listed category. Other settings were not established from the sources read.

## Comparison

| Area | Epic | This project today |
|---|---|---|
| Scope | Whole-hospital and ambulatory suite, with portal and data warehouse | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | FHIR R4 with SMART, gated by customer approval | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | MyChart patient portal | Mobile layout and patient portal not built |

## Implications for this project

Comparable breadth would take years, so the specification’s order of work stands. Any decision-support model would need local validation, and automatic messages need to be limited.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/epic/index.md) · [All comparisons](@/compare/)
