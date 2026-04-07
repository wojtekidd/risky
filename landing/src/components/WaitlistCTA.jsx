import WaitlistForm from './WaitlistForm.jsx'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-2xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
          Early Access
        </p>

        <h2 className="text-4xl font-bold text-white leading-tight mb-4">
          Know your risks.<br />
          Keep your business running.
        </h2>

        <p className="text-lg text-neutral-400 leading-relaxed mb-10">
          Risky is in early access. Join the waitlist and be among the first
          organizations to run a continuity program that actually gets used.
        </p>

        <WaitlistForm size="lg" />

        <p className="mt-6 text-sm text-neutral-500">
          No spam. No sales calls unless you ask for one.
        </p>

        {/* Reassurance row */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-800 pt-10">
          {[
            { icon: '🔒', label: 'Your data stays yours' },
            { icon: '📋', label: 'ISO 22301 aligned' },
            { icon: '🇪🇺', label: 'DORA-ready templates' },
          ].map(({ icon, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl mb-2">{icon}</div>
              <p className="text-xs text-neutral-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
