const rows = [
  {
    them: 'Feature-heavy compliance suites with continuity bolted on',
    us:   'Purpose-built for business continuity — nothing more',
  },
  {
    them: 'Impact assessment wizards that still require technical fluency',
    us:   'Plain-language inputs that auto-translate to hard recovery metrics',
  },
  {
    them: 'Asset mapping that forces a full infrastructure database rebuild',
    us:   'Capture only what continuity needs — drag, drop, done',
  },
  {
    them: 'Executive dashboards that need a two-hour orientation',
    us:   'A concentration heatmap that exposes hidden weak points at a glance',
  },
  {
    them: 'Black-box AI risk scoring you can\'t defend to auditors',
    us:   'Transparent, auditable risk logic you can explain in plain language',
  },
  {
    them: 'Enterprise-only pricing and 6-month implementations',
    us:   'Accessible to any organization — productive in hours',
  },
]

export default function Differentiators() {
  return (
    <section className="py-24 px-6 mesh-subtle border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Why Risky
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            What the market offers<br />vs. what you actually need.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Most continuity platforms were designed for enterprise compliance teams with months to
            spare. Risky was designed for the outcome: keeping your organization running.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 flex items-center gap-2.5 bg-neutral-50 border-b border-neutral-200">
              <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                What the market offers
              </span>
            </div>
            <div className="px-6 py-4 flex items-center gap-2.5 bg-indigo-600 border-b border-indigo-700">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                What Risky delivers
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ them, us }, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-neutral-100' : ''}`}
            >
              <div className="px-6 py-4 flex items-start gap-3 bg-white">
                <svg className="w-4 h-4 text-neutral-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-neutral-500">{them}</span>
              </div>
              <div className="px-6 py-4 flex items-start gap-3 bg-indigo-50/60 hover:bg-indigo-50 transition-colors border-l border-indigo-100">
                <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
