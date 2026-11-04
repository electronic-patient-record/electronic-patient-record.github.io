# TPP SystmOne

A centrally hosted English clinical system, strong in general practice.

A note from public sources, read on 4 November 2026. Nothing here was verified by using the product. Vendor claims are claims. This is not a product review, and "not found" means only that the sources read did not say.

## What it is

SystmOne is made by The Phoenix Partnership (TPP) in Leeds. It is modular and centrally hosted, with modules for general practice, community, child health, mental health, hospital and prisons. Counts of GP practices vary by source.

## Care settings

Primary care is its core market. Community and mental-health modules are in use. The scale of acute adoption was not found.

## Comparison

| Area | TPP SystmOne | This project today |
|---|---|---|
| Scope | Modular record across care settings, centrally hosted | Scaffold: identity, consent, allergies, observations, referrals, audit |
| Interoperability | API by application; sharing per organisation, with a recorded basis | FHIR R4 and R5 reads for three resources; HL7 v2 ADT inbound |
| Mobile and patient access | Touch-optimised mobile, on and off line (vendor, undated) | Mobile layout and patient portal not built |

## Implications for this project

Documented errors in 2018 indicate that a recorded preference should be tested end to end. Sharing could be modelled as two explicit directions, each with a recorded basis, and mental-health legal status as a record and not a flag.

[Read the full note, with sources](https://github.com/electronic-patient-record/electronic-patient-record/blob/main/spec/tpp-system-one/index.md) · [All comparisons](@/compare/)
