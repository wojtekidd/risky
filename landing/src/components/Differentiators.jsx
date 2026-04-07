const rows = [
  {
    them: 'Feature-heavy GRC suites with BCM bolted on',
    us:   'Purpose-built for business continuity — nothing more',
  },
  {
    them: 'BIA wizards that still require technical fluency',
    us:   'Plain-language inputs that auto-translate to hard metrics',
  },
  {
    them: 'Asset mapping that forces full CMDB migration',
    us:   'Capture only what continuity needs — drag, drop, done',
  },
  {
    them: 'Executive dashboards that need a two-hour orientation',
    us:   'A concentration heatmap that exposes SPOFs at a glance',
  },
  {
    them: 'Black-box AI risk scoring',
    us:   'Transparent, auditable risk logic you can explain to regulators',
  },
  {
    them: 'Enterprise-only pricing and 6-month implementations',
    us:   'Accessible to any organization — productive in hours',
  },
]

export default function Differentiators() {
  return (
    <section className="py-24 px-6 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Why Risky
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            What the market offers vs. what you actually need.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Most BCM platforms were designed for enterprise compliance teams with months to
            spare. Risky was designed for the outcome: keeping your organization running.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-neutral-50 border-b border-neutral-200">
            <div className="px-6 py-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                What the market offers
              </span>
            </div>
            <div className="px-6 py-3 flex items-center gap-2 border-l border-neutral-200 bg-indigo-50">
              <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                What Risky delivers
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ them, us }, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-neutral-200' : ''}`}
            >
              <div className="px-6 py-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-neutral-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-neutral-500">{them}</span>
              </div>
              <div className="px-6 py-4 flex items-start gap-3 border-l border-neutral-200 bg-white hover:bg-indigo-50/30 transition-colors">
                <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-800 font-medium">{us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
