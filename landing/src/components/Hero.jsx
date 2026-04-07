import WaitlistForm from './WaitlistForm.jsx'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-24 px-6 bg-white overflow-hidden relative">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Now accepting early access
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-neutral-900 mb-6">
          Stay ready.{' '}
          <span className="text-gradient">Stay running.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Business continuity planning that your whole organization can actually use.
          Map dependencies, run BIAs without chasing people, and stay audit-ready —
          without the implementation hell.
        </p>

        {/* CTA */}
        <WaitlistForm size="lg" />

        {/* Social proof hint */}
        <p className="mt-5 text-sm text-neutral-400">
          Join BC managers, CROs, and compliance teams building more resilient organizations.
        </p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: 'Days', label: 'to complete a BIA, not weeks' },
            { value: '0', label: 'CMDB migration required' },
            { value: '1-click', label: 'audit-ready reports' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{value}</div>
              <div className="text-xs text-neutral-500 mt-1 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
