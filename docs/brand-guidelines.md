# Risky — Brand Guidelines v1.0

> Last updated: 2026-04-07
> Status: Active

## Quick Reference

| Element | Value |
|---------|-------|
| Product Name | Risky |
| Theme | Modern & Confident |
| Primary Color | Indigo — #4F46E5 |
| Secondary Color | Teal — #0D9488 |
| Accent Color | Amber — #F59E0B |
| Primary Font | Inter |
| Voice | Calm, Reassuring, Expert |
| Tagline | *Stay ready. Stay running.* |

---

## 1. Brand Concept

**Risky** is a business continuity management platform built for modern organizations — from compliance-driven enterprises to fast-moving SMEs. The brand communicates **competence without alarm**: we acknowledge that risk is real and constant, but our tone is steady, structured, and reassuring rather than fear-driven.

### Theme: Modern & Confident

Clean SaaS aesthetics with professional depth. Indigo conveys intelligence and reliability. Teal signals operational health and forward motion. Amber provides urgency when needed — alerts, warnings, action prompts — without feeling like a fire alarm.

### Positioning Statement

For risk and compliance teams who need to maintain business continuity across disruptions, Risky is the business continuity platform that turns complex resilience planning into a clear, continuous practice — so your organization stays running when it matters most.

---

## 2. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Indigo | #4F46E5 | rgb(79,70,229) | CTAs, primary buttons, key headings, nav |
| Indigo Dark | #4338CA | rgb(67,56,202) | Hover states, pressed buttons |
| Indigo Light | #818CF8 | rgb(129,140,248) | Highlights, selected states |
| Indigo Subtle | #EEF2FF | rgb(238,242,255) | Backgrounds, hover fills |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Teal | #0D9488 | rgb(13,148,136) | Secondary actions, badges, health indicators |
| Teal Dark | #0F766E | rgb(15,118,110) | Hover for secondary elements |
| Teal Light | #5EEAD4 | rgb(94,234,212) | Highlights, active states |
| Teal Subtle | #F0FDFA | rgb(240,253,250) | Section backgrounds |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Amber | #F59E0B | rgb(245,158,11) | Warnings, risk alerts, important callouts |
| Amber Dark | #D97706 | rgb(217,119,6) | Pressed/hover on amber elements |
| Amber Light | #FCD34D | rgb(252,211,77) | Soft warning backgrounds |
| Amber Subtle | #FFFBEB | rgb(255,251,235) | Warning banner backgrounds |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #FFFFFF | rgb(255,255,255) | Page backgrounds |
| Surface | #F9FAFB | rgb(249,250,251) | Cards, panels, sections |
| Surface Raised | #F3F4F6 | rgb(243,244,246) | Elevated surfaces |
| Text Primary | #111827 | rgb(17,24,39) | Headings, body copy |
| Text Secondary | #374151 | rgb(55,65,81) | Supporting text |
| Text Muted | #6B7280 | rgb(107,114,128) | Captions, placeholders |
| Border | #E5E7EB | rgb(229,231,235) | Dividers, input borders |
| Border Strong | #D1D5DB | rgb(209,213,219) | Emphasized dividers |

### Semantic / Status Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #10B981 | Plan complete, system healthy, drill passed |
| Warning | #F59E0B | Risk elevated, plan outdated, action needed |
| Error | #EF4444 | Incident active, plan failed, critical gap |
| Info | #3B82F6 | Informational messages, tips |

### Accessibility

- Indigo #4F46E5 on white: 5.1:1 contrast ratio (AA compliant)
- Text Primary #111827 on white: 17.1:1 (AAA)
- All interactive elements meet WCAG 2.1 AA minimum

---

## 3. Typography

### Font Stack

```css
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 | 48px | 32px | 700 | 1.2 |
| H2 | 36px | 28px | 600 | 1.25 |
| H3 | 28px | 24px | 600 | 1.3 |
| H4 | 24px | 20px | 600 | 1.35 |
| Body Large | 18px | 18px | 400 | 1.6 |
| Body | 16px | 16px | 400 | 1.5 |
| Small | 14px | 14px | 400 | 1.5 |
| Caption | 12px | 12px | 400 | 1.4 |
| Label | 12px | 12px | 500 | 1.4 |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 4. Logo Usage

### Variants

| Variant | File | Use Case |
|---------|------|----------|
| Full Horizontal | logo-full-horizontal.svg | Headers, documents, emails |
| Stacked | logo-stacked.svg | Square spaces, social profiles |
| Icon Only | logo-icon.svg | Favicons, app icons, small contexts |
| Monochrome | logo-mono.svg | Dark backgrounds, limited-color print |
| Reversed (white) | logo-reversed.svg | Dark hero sections |

### Clear Space

Minimum clear space = height of the logo icon on all four sides.

### Minimum Size

| Context | Minimum Width |
|---------|---------------|
| Digital — Full Logo | 120px |
| Digital — Icon | 24px |
| Print — Full Logo | 35mm |
| Print — Icon | 10mm |

### Don'ts

- Don't rotate or skew the logo
- Don't change colors outside the approved palette
- Don't add drop shadows or glow effects
- Don't place on backgrounds without sufficient contrast
- Don't use the icon alone in contexts where brand recognition is needed

---

## 5. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Calm** | We don't create panic. Disruptions happen — we help you handle them without drama. |
| **Reassuring** | Our users face high-stakes scenarios. We make them feel capable and prepared. |
| **Expert** | We know BC inside out — ISO 22301, DORA, NIST. Our tone earns trust through precision. |
| **Clear** | Complex risk concepts in plain language. No jargon for its own sake. |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Calm | Measured, composed, steady | Dismissive, apathetic |
| Reassuring | Supportive, confidence-building | Patronizing, hand-holdy |
| Expert | Authoritative, precise | Jargon-heavy, exclusionary |
| Clear | Direct, simple | Dumbed-down, vague |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing / hero | Confident, outcome-focused | "Know your risks. Keep your business running." |
| Onboarding | Warm, step-by-step | "Let's map your critical processes. Takes about 10 minutes." |
| Documentation | Instructional, neutral | "Complete the BIA wizard before creating recovery plans." |
| Risk alerts | Calm urgency, actionable | "3 plans are overdue for review. Update now." |
| Error messages | Calm, solution-oriented | "We couldn't save that plan. Check your connection and retry." |
| Success states | Brief, affirming | "BIA complete. Your impact scores are ready." |
| Incident active | Clear, directive | "Incident declared. Your response team has been notified." |

### Prohibited Terms

| Avoid | Use Instead |
|-------|-------------|
| Revolutionary | Effective, modern |
| Best-in-class | Proven, reliable |
| Seamless | Simple, straightforward |
| Leverage | Use |
| Synergy | (delete) |
| World-class | (remove or be specific) |
| Cutting-edge | Current, modern |
| Catastrophe / disaster (in marketing) | Disruption, incident, event |

---

## 6. Messaging Framework

### Core Tagline

> *Stay ready. Stay running.*

### Value Proposition (1 sentence)

Risky helps organizations build, test, and activate business continuity plans — so when disruption hits, you respond with confidence, not chaos.

### Key Messages by Persona

| Persona | Primary message |
|---------|----------------|
| BCM Manager | "Stop managing continuity in spreadsheets. Risky centralizes your BIAs, plans, and drills in one auditable system." |
| CRO | "Get enterprise-wide risk visibility with transparent AI scoring — built for DORA, ISO 22301, and your next audit." |
| CIO / IT Leader | "Risky connects to your CMDB, SIEM, and ITSM tools to keep continuity data accurate without manual effort." |
| Compliance Officer | "Audit-ready reports, immutable plan history, and pre-built regulatory templates. Zero-finding audits start here." |
| CFO | "One server outage costs more than a year of Risky. Document, test, and protect your business — starting today." |

### Differentiators

1. **Explainable AI** — Risk scores you can show auditors, not black-box outputs
2. **DORA-ready out of the box** — Pre-built ICT risk management framework for EU financial firms
3. **SME-accessible** — Guided setup, transparent pricing, no consultants required
4. **Cyber + BC unified** — Incident response and continuity plans in a single workflow
5. **Calm, not alarming** — Design and language built to reduce stress, not amplify it

---

## 7. Imagery Guidelines

### Photography Style

- **Subjects:** Teams collaborating, control rooms, professionals reviewing dashboards — not disaster imagery
- **Lighting:** Controlled, professional; slight blue-indigo tint to reinforce brand palette
- **Mood:** Focused, competent, calm — people who are prepared, not panicked
- **Avoid:** Disaster stock photos (floods, fires, outages), generic handshakes, empty offices

### Illustrations

- Style: Clean, flat with subtle depth; modern SaaS aesthetic
- Colors: Brand palette only (Indigo, Teal, Amber on neutral backgrounds)
- Line weight: 2px consistent stroke
- Corners: 4–8px rounded

### Icons

- Style: Outlined, 24px base grid (Heroicons or Lucide compatible)
- Stroke: 1.5px consistent
- Corner radius: 2px
- Fill: Outline only (filled variants for active/selected states only)

---

## 8. Design Components

### Buttons

| Type | Background | Text | Border | Radius |
|------|------------|------|--------|--------|
| Primary | #4F46E5 | #FFFFFF | none | 8px |
| Secondary | transparent | #4F46E5 | #4F46E5 1px | 8px |
| Danger | #EF4444 | #FFFFFF | none | 8px |
| Ghost | transparent | #374151 | none | 8px |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Inline tight spacing |
| sm | 8px | Compact elements, icon gaps |
| md | 16px | Standard padding, form fields |
| lg | 24px | Section inner spacing |
| xl | 32px | Component separation |
| 2xl | 48px | Section breaks |
| 3xl | 64px | Page-level separation |

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 12px |
| Inputs | 8px |
| Modals | 16px |
| Tooltips | 6px |
| Pills / Tags | 9999px |
| Badges | 4px |

---

## 9. AI Image Generation

### Base Prompt Template

Always prepend to image generation prompts:

```
Clean, modern SaaS interface aesthetic. Indigo (#4F46E5) and teal (#0D9488) color palette with amber (#F59E0B) highlights. Soft professional lighting, calm atmosphere, confident and competent tone. Flat illustration or minimal photography style. No disaster imagery.
```

### Style Keywords

| Category | Keywords |
|----------|----------|
| Lighting | Soft studio, controlled, professional blue-cool tone |
| Mood | Calm, focused, prepared, confident |
| Composition | Clean layout, generous whitespace, structured grid |
| Treatment | Crisp, high contrast text, muted backgrounds |
| Aesthetic | Modern SaaS, minimalist, enterprise-clean |

### Visual Mood Descriptors

- Prepared, not panicked
- Structured, not sterile
- Intelligent, not intimidating

### Visual Don'ts

| Avoid | Reason |
|-------|--------|
| Disaster / crisis stock imagery | Contradicts calm, reassuring voice |
| Red-dominant palettes | Implies emergency; off-brand unless semantic error state |
| Generic corporate handshakes | Cliché, low trust signal for technical buyers |
| Dark, ominous aesthetics | Creates fear, not confidence |

### Example Prompts

**Hero Banner:**
```
Professional dashboard interface, indigo and teal color palette, soft background glow, person confidently reviewing risk metrics on a large monitor, calm office environment, clean modern SaaS aesthetic, generous whitespace
```

**Social Media Post:**
```
Minimal flat illustration, business continuity concept, indigo #4F46E5 background with teal and amber accents, abstract network diagram with shield icon, modern sans-serif typography, clean composition
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-07 | Initial brand guidelines — Risky BC software |
