# AI in Business Continuity Software — Promise vs. Reality

**Date:** 2026-04-07
**Vendors covered:** Everbridge, ServiceNow, Riskonnect (fka Castellan), MetricStream, RSA Archer, LogicManager
**Sources:** Vendor marketing, Gartner Peer Insights, BCI Horizon Scan 2025, BCI Year in Resilience 2024, Disaster Recovery Journal, Continuity Insights, SoftwareReviews

---

## 1. What Each Vendor Claims

### Everbridge — High Velocity CEM + BC in the Cloud

**The pitch:** "Purpose-built AI" that lets organizations *know earlier, respond faster, improve continuously*. Marketed as escaping the "Expanding Risk Zone" through AI-driven risk intelligence and full lifecycle automation.

**Specific AI claims:**
- **AI Knowledge Graphs** — maps interconnected risks and asset dependencies automatically
- **GenAI for crisis communications** — generates multi-channel stakeholder messages during incidents
- **Automated threat response** — turns risk signals into coordinated action without manual triggering
- **Predictive risk intelligence** — real-time threat detection from external signals (weather, cyber, geopolitical)
- **BCIC integration with High Velocity CEM** — BC planning, critical event management, and real-time response unified under one AI layer

**Maturity:** High on crisis comms and alerting. Acquired Infinite Blue (BC in the Cloud) in 2023 to add genuine BCM depth. AI is real in the CEM layer; BC planning AI is newer and less proven.

---

### ServiceNow BCM — Now Intelligence + Agentic AI

**The pitch:** AI agents that reshape business continuity operations — from incident classification to recovery plan generation, embedded into the same platform managing IT assets.

**Specific AI claims:**
- **ML pattern recognition** — learns from historical incident data to recommend proactive measures
- **AI agents** — assist with BCP drafting, crisis response, issue classification, and remediation plan generation
- **Automated BIA** — links asset dependency data from CMDB to reduce manual input
- **Incident summaries and NLP** — generates summaries and monitoring alerts across security/continuity events
- **Real-time KPI dashboards** — AI-synthesized operational insights for faster decisions

**Maturity:** Medium-high. The underlying Now Intelligence platform is real and mature across ITSM. BCM-specific AI agents are newer (2025 release). True power requires deep CMDB integration — which most customers haven't completed. AI without clean asset data defaults to generic recommendations.

---

### Riskonnect (formerly Castellan) — GenAI for BCP

**The pitch:** The first BCM platform to ship a genuinely usable GenAI feature. Targets the most painful bottleneck in the BC lifecycle: document creation.

**Specific AI claims:**
- **GenAI plan drafting** — suggests content when BC professionals create or update BCPs, BIAs, and incident templates
- **Scenario stress-testing** — simulates disruption scenarios with AI-assisted impact modelling
- **Native emergency notification** — real-time alerts during incidents with automated escalation
- **Integrated crisis communications hub** — AI-assisted coordination across departments

**Maturity:** Highest among peers on GenAI plan drafting — it's in production, not roadmap. The GenAI feature is genuine: it uses LLM to suggest BCP content, reducing blank-page paralysis for BC managers. Less mature on predictive risk analytics and dependency mapping.

---

### MetricStream — AI-Enhanced GRC + BCM

**The pitch:** Continuous resilience through predictive analytics, automated response plans, and smarter issue management embedded in an enterprise GRC suite.

**Specific AI claims:**
- **AI risk scoring** — categorizes incidents and suggests next steps based on historical recovery patterns
- **Predictive impact analysis** — models potential disruption scenarios before they occur
- **Automated control testing** — AI-driven assurance without manual checklist execution
- **Smarter issue management** — AI surfaces emerging issues from risk data before they escalate
- **200+ regulatory standards** — AI-assisted compliance mapping across global frameworks

**Maturity:** Medium. ML-based risk categorization and scoring are real. "Predictive analytics" in marketing often means historical pattern matching, not forward-looking forecasting. AI features gated behind higher-tier enterprise licensing.

---

### RSA Archer — Limited AI, Workflow-first

**The pitch:** Archer doesn't lead with AI claims. Positioned on depth of GRC-BCM configuration, auditability, and regulatory coverage rather than AI innovation.

**Specific AI claims:**
- **Basic risk scoring** — primarily rule-based with some ML classification
- **Automated workflow triggers** — rules engine that surfaces risks for human review (marketed as "intelligent")
- No substantive LLM or GenAI features announced as of 2025

**Maturity:** Low on AI relative to peers. Archer's strength is configurability and audit trail depth, not intelligence. AI is largely marketing language for workflow automation. Honest positioning for enterprise buyers who prioritize regulatory defensibility over AI novelty.

---

### LogicManager — Embedded AI + Predictive Analytics

**The pitch:** AI embedded throughout the ERM-BCM workflow to surface connected risks, predict exposure, and reduce time-to-insight for BC managers and compliance officers.

**Specific AI claims:**
- **Embedded predictive analytics** — surfaces relationships between risks, processes, and continuity plans
- **SecurityScorecard integration** — AI-enhanced third-party risk scoring fed into BCM
- **Thomson Reuters integration** — regulatory intelligence automatically mapped to risk taxonomy
- **Guided BIA wizard** — AI-assisted data collection reducing manual input

**Maturity:** Medium. The taxonomy-driven architecture is genuinely useful for connecting risk data across silos. Predictive claims are modest compared to Everbridge or Riskonnect — more "pattern surfacing" than predictive modelling. Well-suited to compliance-heavy buyers.

---

## 2. What Practitioners Actually Report

### BCI Horizon Scan 2025 — The Most Honest Data Available

The Business Continuity Institute's annual survey of BC practitioners globally gives the starkest picture of the gap between vendor claims and practitioner reality:

| Metric | Finding |
|--------|---------|
| BC practitioners who say AI will **not be important** to their org in 2025 | **34.3%** (up from 29.8% the prior year) |
| Orgs that see AI as a resilience **enabler** | Only **1 in 5** |
| Executives who claim their org is AI-ready | **59%** |
| Practitioners who say systems are **fragmented and unfit** for AI-scale operations | **62%** |
| Main AI use cases actually adopted | Cybersecurity, scenario generation for exercises, data mining |

**Key insight:** The percentage of practitioners dismissing AI as irrelevant is *growing*, not shrinking — even as vendor marketing intensifies. The executive/practitioner gap (59% vs 62% inverted) confirms that AI adoption in BC is largely top-down narrative, not bottom-up tooling.

---

### Gartner Peer Insights — User Ratings vs. AI Claims

| Vendor | Gartner BCM Rating | AI claim maturity | Gap assessment |
|--------|-------------------|-------------------|----------------|
| Everbridge | 4.7/5 (14 reviews) | High (CEM layer) | AI in alerting is validated; BC planning AI newer, less reviewed |
| ServiceNow BCM | 4.4/5 (86 reviews) | Medium-high | Setup complexity repeatedly cited; AI requires CMDB completeness most don't have |
| Riskonnect | 4.6/5 (7 reviews) | High (GenAI drafting) | Low review volume; GenAI feature too new for sustained user feedback |
| MetricStream | 4.3/5 (21 reviews) | Medium | Described as "capable but complicated"; AI features not singled out as value drivers |
| RSA Archer | Not separately scored | Low | AI is rebranded workflow automation; sophisticated buyers know this |
| LogicManager | Not separately scored | Medium | Praised for taxonomy depth; AI analytics noted but not primary value driver in reviews |

**Recurring user complaints across all vendors:**
- Setup complexity consumes months; AI features unreachable until base configuration complete
- CMDB and asset data quality problems make AI recommendations unreliable or generic
- AI risk scores can't be explained to auditors — flagged repeatedly in regulated industries
- Features marketed as AI are frequently rule-based engines with no ML involved
- GenAI plan content requires heavy human editing — described as "a starting point, not a draft"

---

### Community & Practitioner Sentiment (DRJ, Continuity Insights, BCI forums)

**What practitioners actually use AI for (vs. what's marketed):**

| Marketed use case | Practitioner reality |
|------------------|----------------------|
| Automated BIA from CMDB | Requires clean CMDB; most orgs don't have one. Defaults to manual |
| Predictive disruption forecasting | Mostly pattern matching on historical data; not genuinely predictive |
| GenAI plan drafting | Used as a starting point — output needs substantial editing, especially for regulated environments |
| AI risk scoring | Accepted for internal dashboards; rejected for external audit evidence (explainability gap) |
| Agentic recovery orchestration | Almost entirely on roadmaps, not in production |
| Crisis comms generation | The most validated AI use case — Everbridge and Riskonnect both have working implementations |

**The data quality problem (most under-discussed blocker):**
> *"AI-powered tools rely on high-quality, accurate data to provide meaningful insights. Businesses must ensure their data is clean, consistent, and up to date."*
> — Continuity Insights

This is the fundamental disconnect. Every AI feature in BCM software assumes an asset inventory, dependency map, and BIA history that most organizations have never properly built. Vendors sell AI; customers still need the foundation data before AI can function.

**The skills gap (second blocker):**
> *"Implementation of AI requires a new set of skills, and organizations must invest in training and development to bridge these gaps."*
> — BCI 2025

Most BC managers are not data scientists. AI features designed for technical users go unused in most mid-market deployments.

**The ROI gap (especially in public sector and SMEs):**
> *"For some, the benefits are minimal, particularly in the public sector when bank balances are tight and the return-on-investment in AI does not show."*
> — BCI Horizon Scan 2025

---

## 3. Summary: Promise vs. Reality Score

| Vendor | AI Promise Ambition | Delivery Evidence | Gap |
|--------|--------------------|--------------------|-----|
| **Everbridge** | Very high | Solid for alerting/CEM; BC AI newer | Medium gap |
| **ServiceNow** | High | Real platform AI, but BCM use requires deep CMDB integration | Large gap (implementation dependency) |
| **Riskonnect** | Medium-high | GenAI drafting is the most concretely shipped feature in the market | Small gap — honest scope |
| **MetricStream** | High | AI categorization is real; "predictive" claims are overstated | Medium-large gap |
| **RSA Archer** | Low (honest) | AI = rule engine; not misrepresenting capabilities | Minimal gap |
| **LogicManager** | Medium | Taxonomy-linked insights are real; predictive claims modest | Small-medium gap |

---

## 4. Implications for Risky

### Where the market is failing practitioners

1. **AI needs clean data first** — no vendor solves the upstream problem of getting quality BIA and asset data in. All AI features assume this problem is already solved. Risky's zero-jargon wizard and frictionless delegation approach this from the right direction: *solve the data collection problem first, then add intelligence*.

2. **Explainability is a genuine gap** — every vendor with AI risk scoring has the same audit problem. BC practitioners in regulated industries (DORA, HIPAA, SOX) cannot cite a vendor AI score as evidence. A transparent, auditable scoring approach is a real differentiator.

3. **GenAI plan drafting is the one validated use case** — Riskonnect's implementation confirms practitioners will use GenAI for document drafting if it reduces blank-page paralysis. This is table stakes for any new platform.

4. **Crisis comms generation is the second validated use case** — Everbridge and Riskonnect both have working implementations. A new entrant should include this.

5. **Agentic AI is entirely on roadmaps** — no vendor has shipped autonomous recovery orchestration in production. First mover opportunity for a well-funded entrant, but not a V1 requirement.

6. **SME practitioners are ignored by all AI implementations** — every AI feature reviewed requires enterprise-grade infrastructure (CMDB, SIEM integration, IT team) to function. The SME segment has no usable AI tooling from any incumbent.

---

## 5. Sources

- [Everbridge — Purpose-Built AI](https://www.everbridge.com/platform/purpose-built-ai/)
- [Everbridge — High Velocity CEM announcement](https://www.businesswire.com/news/home/20250505166979/en/Everbridge-Introduces-High-Velocity-CEM-A-Purpose-built-AI-Platform-to-Escape-the-Expanding-Risk-Zone)
- [Everbridge — BCIC + High Velocity CEM integration (DRJ Fall 2025)](https://www.everbridge.com/newsroom/article/accelerating-business-continuity-everbridge-unveils-bc-in-the-cloud-bcic-integration-in-high-velocity-cem-at-drj-fall-2025/)
- [Everbridge — Forrester BCM Landscape Q1 2026](https://www.businesswire.com/news/home/20260204869606/en/Everbridge-Recognized-in-Business-Continuity-Management-Software-Landscape-Q1-2026-Report-by-Independent-Research-Firm)
- [Riskonnect — GenAI for BCP announcement](https://riskonnect.com/press/riskonnect-announces-generative-ai-for-business-continuity-planning/)
- [ServiceNow — BCM product page](https://www.servicenow.com/products/business-continuity-management.html)
- [ServiceNow — AI agents in business operations (Protiviti)](https://tcblog.protiviti.com/2025/10/28/from-insight-to-action-how-servicenow-ai-agents-are-reshaping-business-operations/)
- [ServiceNow — BCM in the age of AI (Glidefast)](https://blog.glidefast.com/servicenow/business-continuity-in-the-age-of-ai-and-automation)
- [MetricStream — BCM product](https://www.metricstream.com/products/business-continuity-management.htm)
- [BCI — Solving ISO 22301 challenges with AI](https://www.thebci.org/news/solving-the-top-5-iso-22301-challenges-with-ai.html)
- [BCI — Horizon Scan 2025](https://www.thebci.org/news/complex-and-interconnected-risk-the-bci-horizon-scan-2025.html)
- [BCI — BCAW+R 2025 predictive analytics](https://www.thebci.org/news/forecasting-the-future-bcaw-r-2025-opens-with-predictive-analytics-in-bc.html)
- [BCI — A Year in the World of Resilience 2024 (Riskonnect sponsored)](https://go.riskonnect.com/hubfs/Riskonnect/BCI%20Sponsored%20Reports/BCI-A-year-in-The-World-of-Resilience-Report-2024%20Final.pdf)
- [DRJ — Business Continuity Management and AI](https://drj.com/journal_main/business-continuity-management-and-artificial-intelligence/)
- [Continuity Insights — Enhancing BCP with AI](https://continuityinsights.com/enhancing-business-continuity-planning-with-artificial-intelligence/)
- [Bryghtpath — GenAI in BC & Crisis Management](https://bryghtpath.com/generative-ai-business-continuity-crisis-management/)
- [InformationWeek — Your AI vendor is a single point of failure](https://www.informationweek.com/machine-learning-ai/your-ai-vendor-is-now-a-single-point-of-failure)
- [Gartner Peer Insights — Everbridge](https://www.gartner.com/reviews/product/everbridge-1818077887)
- [Gartner Peer Insights — Riskonnect vs ServiceNow](https://www.gartner.com/reviews/market/integrated-risk-management/compare/riskonnect-vs-servicenow)
- [Gartner Peer Insights — MetricStream vs ServiceNow](https://www.gartner.com/reviews/market/it-risk-management-solutions/compare/metricstream-vs-servicenow)
- [Fusion Risk Management — 2025 Trends in Continuity](https://www.fusionrm.com/blogs/2025-trends-in-continuity-and-resilience/)
- [ReadiNow — AI-Powered BCM](https://www.readinow.com/ai-powered-business-continuity-management)
