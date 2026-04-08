import WaitlistForm from './WaitlistForm.jsx'

const teams = [
  {
    label: 'Business',
    sub: 'Operations & revenue',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    dot: 'bg-indigo-500',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    label: 'IT Teams',
    sub: 'Infrastructure & systems',
    color: 'bg-teal-50 border-teal-200 text-teal-800',
    dot: 'bg-teal-500',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    label: 'Risk & Compliance',
    sub: 'Frameworks & audits',
    color: 'bg-amber-50 border-amber-200 text-amber-800',
    dot: 'bg-amber-500',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 px-6 mesh-hero overflow-hidden relative">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        aria-hidden="true"
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            Now accepting early access — join the waitlist
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[3.75rem] font-bold leading-[1.1] tracking-tight text-neutral-900 text-center mb-10 max-w-3xl mx-auto">
          One platform.{' '}
          <span className="text-gradient">Three teams.</span>
          <br />No translators.
        </h1>

        {/* Three-team convergence diagram */}
        <div className="max-w-2xl mx-auto mb-10" aria-label="Diagram showing Business, IT Teams, and Risk &amp; Compliance teams connecting to the Risky platform, producing a completed and aligned plan">

          {/* Team nodes */}
          <div className="grid grid-cols-3 gap-3">
            {teams.map(({ label, sub, color, dot, icon }) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-center ${color}`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${dot} bg-opacity-20`}
                  style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
                  {icon}
                </span>
                <span className="text-xs font-semibold leading-tight">{label}</span>
                <span className="text-[11px] opacity-70 leading-tight hidden sm:block">{sub}</span>
              </div>
            ))}
          </div>

          {/* Converging connector lines */}
          <svg
            viewBox="0 0 600 48"
            className="w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-mid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Left team → center */}
            <line x1="100" y1="0" x2="300" y2="48" stroke="url(#line-left)" strokeWidth="1.5" />
            {/* Center team → center */}
            <line x1="300" y1="0" x2="300" y2="48" stroke="url(#line-mid)" strokeWidth="1.5" />
            {/* Right team → center */}
            <line x1="500" y1="0" x2="300" y2="48" stroke="url(#line-right)" strokeWidth="1.5" />
          </svg>

          {/* Risky platform node */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-indigo-600 glow-indigo-lg shadow-lg">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xl tracking-tight">R</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base leading-tight">Risky</div>
                <div className="text-indigo-200 text-xs leading-tight">One shared platform</div>
              </div>
            </div>

            {/* Output connector */}
            <div className="flex flex-col items-center gap-0 my-0">
              <svg viewBox="0 0 24 32" className="w-6 h-8" aria-hidden="true">
                <line x1="12" y1="0" x2="12" y2="24" stroke="#0D9488" strokeWidth="1.5" strokeOpacity="0.7" />
                <path d="M7 20 L12 27 L17 20" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
              </svg>
            </div>

            {/* Output node */}
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-teal-200 shadow-md glow-teal">
              <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900 leading-tight">Plan complete!</div>
                <div className="text-xs font-medium text-teal-700 leading-tight">Everyone aligned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto text-center mb-10">
          Business continuity planning your whole organization can actually use —
          without the complexity, the jargon, or the six-month implementation.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-4">
          <WaitlistForm size="lg" />
        </div>
        <p className="text-center text-sm text-neutral-500 mb-16">
          No spam. No sales calls unless you ask.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-neutral-200 pt-10">
          {[
            { value: 'Days', label: 'to a complete risk assessment' },
            { value: '0', label: 'asset migrations required' },
            { value: '3 teams', label: 'one shared source of truth' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{value}</div>
              <div className="text-xs font-medium text-neutral-600 mt-1 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
