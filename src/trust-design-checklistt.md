# AI Trust Design Checklist
> Based on Buzz Usborne's "Designing AI experiences people actually use"
> Applied to: Contacts Search + Event Analyzer

---

## The 4 Forces

1. **Trust** — users must be able to validate, shape, and override AI
2. **Value Perception** — users must immediately see why the AI is worth their effort
3. **Cognitive Effort** — mental energy to use the AI must be low
4. **Cost of Failure** — stakes of an AI mistake must match its autonomy level

---

## Contacts Search

### Trust
- [x] Three-tier safety model (Low/Medium/High) — controllability over perfection
- [x] HITL for ticket assignment and email — human validates before AI acts
- [x] Full preview before confirm on high-safety actions
- [x] Phase sequencing — read-only first, write actions later
- [x] Thumbs up/down feedback (Epic 5) — calibration through use
- [ ] No data stewardship messaging — how is user data handled/processed?

### Value Perception
- [x] Proactive intelligence (Epic 5) — surfaces value before user asks
- [x] Data quality flags — demonstrates value on bad data unprompted
- [x] "8-step workflows → single sentence" is the stated value prop
- [x] "Show don't configure" UX principle
- [ ] No designed first-open state — value requires imagination, not demonstration

### Cognitive Effort
- [ ] No first-message / blank page mitigation — user faces empty chat input
- [ ] No example prompts or suggested actions surfaced in UI
- [ ] 44 pre-defined intents exist in system prompt but are invisible to users
- [ ] Chat interface depends on user knowing what to ask — fragile design

### Cost of Failure
- [x] Read-only search (Epic 1) — zero cost if wrong
- [x] All write actions require human confirmation
- [x] Thumbs down on suggestion = low-stakes calibration moment
- [ ] No designed "mediocre first interaction" onboarding — first use may disappoint

---

## Event Analyzer

### Trust
- [x] Manual trigger — user initiates, human always validates output
- [x] What/where/why/recommendation per finding — fully interrogable output
- [x] Webhook (autonomous) deferred to V2 — autonomy sequenced correctly
- [x] Findings-only in V1 — no automated remediation, human always acts
- [ ] No feedback on findings — can't flag false positives, no calibration loop
- [ ] No data stewardship messaging

### Value Perception
- [x] Surfaces completeness gaps, config mismatches, readiness gates proactively
- [x] Time-aware severity — same finding escalates as event date approaches
- [x] Single trigger, structured output — easy to use
- [x] Specific findings ("Agenda session at 2pm missing a speaker") not generic advice

### Cognitive Effort
- [x] User reacts to findings — no articulation burden, no blank page
- [x] Ring 1+2 prompt architecture absorbs all analytical reasoning internally
- [x] Severity-sorted markdown output — no cognitive load in reading results
- [x] No prompt engineering required from user

### Cost of Failure
- [x] Analysis-only output — human decides what to act on
- [x] <10% false positive rate is an explicit NFR
- [x] Webhook (higher autonomy) is V2 — not before trust is established
- [ ] No false-positive flagging — repeated bad findings erode trust with no fix

---

## Priority Gaps to Address

| # | Gap | Project | Fix |
|---|---|---|---|
| 1 | No blank-page mitigation — chat opens empty | Contacts Search | Agent opens with 3–5 context-aware suggested actions |
| 2 | No feedback on analyzer findings | Event Analyzer | Add "mark as incorrect" / thumbs on findings |
| 3 | 44 intents invisible to users | Contacts Search | Surface example prompts or suggested actions in UI |
| 4 | No data stewardship transparency | Both | Brief visible note on how data is used |
| 5 | No onboarding for new users | Contacts Search | Low-stakes first interaction that shows capability |
| 6 | V2 webhook needs trust criteria | Event Analyzer | Define what trust threshold must be met before enabling |
