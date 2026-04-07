# BC Software Buyer Personas

> Business Continuity Management (BCM) software purchase decisions are typically made by a cross-functional steering committee. Below are the five core buyer personas, their motivations, pain points, and how to reach them.

---

## Persona 1 — The BCM Program Owner

**Title:** Business Continuity Manager / Head of Resilience / BC Director  
**Seniority:** Mid-to-senior (Manager → Director)  
**Reports to:** CRO, COO, or CIO  

### Who they are
The day-to-day owner of the BC program. Responsible for writing, maintaining, and testing Business Continuity Plans (BCPs) and coordinating Business Impact Analyses (BIAs). Often the primary product champion — the person who researches tools, shortlists vendors, and runs the evaluation.

### Goals
- Replace spreadsheets and Word docs with a single, version-controlled system
- Run automated BIA cycles without chasing department heads for data
- Schedule and document drills/exercises to satisfy auditors
- Prove program maturity to regulators and leadership

### Pain points
- Manual BIA collection takes weeks; data goes stale immediately
- Plans scattered across SharePoint, email threads, and local drives
- No easy way to demonstrate test coverage or audit readiness
- Tool bloat — existing GRC suites don't do BC well

### Evaluation criteria
Ease of BIA workflow, plan templates (ISO 22301 / NIST aligned), drill/exercise scheduling, audit trail, usability for non-technical staff

### Buying authority
**Recommends and champions** the tool; rarely signs the budget alone. Needs CFO/CRO sign-off.

### How to reach
BCI (Business Continuity Institute) events, DRJ Spring/Fall conference, LinkedIn groups (BCM professionals), Continuity Insights newsletter, Disaster Recovery Journal

---

## Persona 2 — The Chief Risk Officer (CRO)

**Title:** Chief Risk Officer / VP of Enterprise Risk / Head of GRC  
**Seniority:** C-suite or VP  
**Reports to:** CEO or Board  

### Who they are
Owns the enterprise-wide risk framework. BC is one component of a broader risk portfolio that includes operational risk, third-party risk, cyber risk, and regulatory risk. Evaluates BCM tools through the lens of enterprise-wide visibility and strategic risk posture.

### Goals
- Single risk register consolidating BC, cyber, vendor, and operational risk
- Board-ready dashboards: risk appetite vs. actual exposure
- Demonstrate regulatory compliance (DORA, ISO 22301, NFPA 1600, GDPR)
- Quantify financial impact of key risk scenarios

### Pain points
- Siloed tools for BC, GRC, and cyber create blind spots
- "Black box" AI risk scores can't be explained to auditors
- No consolidated view of third-party / supply-chain risk
- ESG and climate risk not modeled in most BC platforms

### Evaluation criteria
GRC integration depth, AI transparency (explainability), regulatory coverage breadth, API ecosystem, risk quantification (financial impact modeling)

### Buying authority
**Budget approver** for mid-market; co-signer with CFO at enterprise. Heavily influences final vendor selection.

### How to reach
RIMS (Risk and Insurance Management Society), Gartner RiskTech Forum, Forbes CRO content, LinkedIn thought leadership on operational resilience

---

## Persona 3 — The CIO / IT Leader

**Title:** CIO / CISO / VP of IT / Head of IT Operations  
**Seniority:** C-suite or VP  
**Reports to:** CEO / COO  

### Who they are
Responsible for IT resilience, disaster recovery, and technology risk. Cares about how BC software integrates with existing ITSM, SIEM, and CMDB systems. Often skeptical of new platforms ("yet another tool") and focused on total cost of ownership and implementation complexity.

### Goals
- Unified incident response covering IT and business recovery
- Automated failover and DR orchestration triggered by BC plans
- Integration with ServiceNow, Jira, Splunk, Azure/AWS
- Reduce manual data entry — auto-populate BIA from CMDB

### Pain points
- BC tools that don't talk to IT systems require duplicate data entry
- Complex implementations consume scarce engineering bandwidth
- On-prem legacy systems create integration nightmares
- Hybrid IT/OT environments not supported by most BC platforms

### Evaluation criteria
API availability, pre-built connectors (ITSM, SIEM, ERP), cloud vs. on-prem deployment options, security/data residency, implementation timeline and TCO

### Buying authority
**Technical veto power** — can block a purchase if integration requirements aren't met. Often co-owns budget with CRO.

### How to reach
Gartner IT Symposium, CIO.com, Dark Reading (for CISO angle), AWS/Azure partner channels, peer communities (e.g., ISACA, HDI)

---

## Persona 4 — The Compliance / GRC Officer

**Title:** Chief Compliance Officer / GRC Manager / Internal Audit Lead  
**Seniority:** Director to VP  
**Reports to:** General Counsel, CRO, or CFO  

### Who they are
Focused on regulatory compliance (GDPR, HIPAA, SOX, DORA, ISO 22301) and audit readiness. Evaluates BC software primarily on its ability to generate evidence, maintain immutable audit trails, and align to regulatory frameworks out-of-the-box.

### Goals
- Zero audit findings related to BC / DR gaps
- Immutable, timestamped records of plan updates and test results
- Pre-built templates mapped to specific regulatory standards
- Auto-generated compliance reports for external auditors

### Pain points
- Manual evidence collection before each audit cycle (weeks of prep)
- Inconsistent plan versions across departments
- Tools that require heavy customization to meet compliance needs
- GDPR data residency: cloud-only vendors without EU-region options

### Evaluation criteria
Regulatory template library (GDPR, HIPAA, SOX, DORA, ISO 22301), audit trail immutability, evidence export formats, data residency controls, out-of-box reporting

### Buying authority
**Influential recommender** — not primary budget holder but can mandate requirements that eliminate vendors.

### How to reach
ISACA events (GRC conferences), IIA (Institute of Internal Auditors), IAPP (privacy/GDPR focus), compliance-focused newsletters (ComplianceWeek, Thomson Reuters), LinkedIn regulatory groups

---

## Persona 5 — The CFO / Finance Decision-Maker

**Title:** CFO / VP Finance / Finance Director  
**Seniority:** C-suite  
**Reports to:** CEO / Board  

### Who they are
Not involved in BC day-to-day but holds final budget authority. Evaluates BCM software as a financial investment — wants a clear ROI story, understands insurance implications, and is concerned about total cost of ownership across a 3-5 year horizon.

### Goals
- Reduce cyber and business interruption insurance premiums
- Quantify financial exposure from key risk scenarios (downtime, breach)
- Ensure BC investment delivers measurable cost avoidance
- Minimize hidden costs (implementation, training, consultants)

### Pain points
- ROI for BC is hard to articulate vs. direct revenue-generating spend
- Fear of vendor lock-in and unpredictable price escalation
- Scepticism about "AI" features that inflate licensing costs
- One-size-fits-all enterprise pricing not suited to mid-market budgets

### Evaluation criteria
Total cost of ownership (3-yr), licensing model flexibility (SaaS/modular), ROI calculators and financial impact quantification, insurance discount evidence, transparent pricing tiers

### Buying authority
**Final budget approver.** A poor ROI story kills deals at this stage.

### How to reach
CFO.com, Finance leadership content on LinkedIn, insurance broker channels (Aon, Marsh), industry analyst ROI reports (Forrester TEI, Gartner)

---

## Decision-Making Dynamics

| Stage | Who leads | Who influences |
|-------|-----------|----------------|
| Problem recognition | BCM Owner | CRO, CISO |
| Research & longlist | BCM Owner | IT/Compliance input |
| Shortlist & demo | BCM Owner + IT | CRO, Compliance |
| Technical validation | CIO / IT | BCM Owner |
| Business case | CRO / BCM Owner | CFO |
| Final approval | CFO | CEO (enterprise) |

**Typical sales cycle:** 3–9 months (mid-market), 6–18 months (enterprise)  
**Typical committee size:** 4–7 stakeholders  

---

## Secondary / Emerging Personas

| Persona | Why increasingly relevant |
|---------|--------------------------|
| **Operations Manager / COO** | BC increasingly tied to supply chain and operational continuity; owns physical site recovery |
| **Legal / Data-Privacy Counsel** | GDPR, DORA, and AI Act create new contractual and data-residency requirements |
| **CISO (separate from CIO)** | Cyber-incident response is now core to BC; CISO often drives BC software evaluation post-breach |
| **Procurement / Vendor Manager** | Third-party risk management (TPRM) is converging with BC; vendor resilience now evaluated as part of BC programs |
