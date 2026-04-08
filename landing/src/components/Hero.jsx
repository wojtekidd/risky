import WaitlistForm from './WaitlistForm.jsx'

const teams = [
  { label: 'Business', color: 'bg-indigo-50 border-indigo-200 text-indigo-700', dot: 'bg-indigo-400' },
  { label: 'IT Teams', color: 'bg-teal-50 border-teal-200 text-teal-700', dot: 'bg-teal-400' },
  { label: 'Risk & Compliance', color: 'bg-amber-50 border-amber-200 text-amber-700', dot: 'bg-amber-400' },
]

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 px-6 mesh-hero overflow-hidden relative">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Now accepting early access — join the waitlist
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[3.75rem] font-bold leading-[1.1] tracking-tight text-neutral-900 text-center mb-6 max-w-3xl mx-auto">
          One platform.{' '}
          <span className="text-gradient">Three teams.</span>
          <br />No translators.
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-neutral-500 leading-relaxed max-w-xl mx-auto text-center mb-10">
          Business continuity planning your whole organization can actually use —
          without the complexity, the jargon, or the six-month implementation.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-6">
          <WaitlistForm size="lg" />
        </div>
        <p className="text-center text-sm text-neutral-400 mb-16">
          No spam. No sales calls unless you ask.
        </p>

        {/* Three-team convergence diagram */}
        <div className="relative flex items-center justify-center gap-3 md:gap-6 flex-wrap">

          {/* Left team nodes */}
          <div className="flex flex-col gap-3">
            {teams.slice(0, 2).map(({ label, color, dot }) => (
              <div key={label} className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm font-medium ${color} shadow-sm`}>
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                {label}
              </div>
            ))}
          </div>

          {/* Arrow lines */}
          <div className="flex items-center gap-1 text-neutral-300">
            <div className="flex flex-col gap-1.5">
              <div className="w-12 h-px bg-gradient-to-r from-indigo-200 to-indigo-400" />
              <div className="w-12 h-px bg-gradient-to-r from-teal-200 to-teal-400" />
            </div>
            <svg className="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Central Risky node */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg glow-indigo-lg">
              <span className="text-white font-bold text-2xl tracking-tight">R</span>
            </div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">Risky</span>
          </div>

          {/* Arrow line out */}
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-r from-teal-400 to-teal-200" />
          </div>

          {/* Output node */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-teal-200 shadow-md glow-teal">
            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="text-xs font-semibold text-neutral-800">Plan complete</div>
              <div className="text-xs text-teal-600">Everyone aligned</div>
            </div>
          </div>

          {/* Bottom team node (Risk) */}
          <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-auto md:left-auto md:translate-x-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm font-medium ${teams[2].color} shadow-sm`}>
            <span className={`w-2 h-2 rounded-full ${teams[2].dot}`} />
            {teams[2].label}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-neutral-100 pt-10">
          {[
            { value: 'Days', label: 'to a complete risk assessment' },
            { value: '0', label: 'asset migrations required' },
            { value: '3 teams', label: 'one shared source of truth' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{value}</div>
              <div className="text-xs text-neutral-400 mt-1 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
