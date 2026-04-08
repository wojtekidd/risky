const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Your impact assessment takes weeks and is stale before it\'s done.',
    body: 'Business owners don\'t speak risk jargon. Chasing answers over email takes weeks — and the moment you finish, the data is already out of date.',
    accent: 'from-indigo-500 to-indigo-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    headline: 'Your continuity plans live in documents nobody maintains.',
    body: 'Plans scattered across shared drives, email threads, and hard drives. No version control, no ownership — and no confidence the document you\'d hand an auditor is actually current.',
    accent: 'from-teal-500 to-teal-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    headline: 'Leadership has zero visibility until the auditor shows up.',
    body: 'Reports written for specialists tell executives nothing useful. Hidden weak points stay hidden — until an incident or an inspection forces the conversation.',
    accent: 'from-amber-500 to-amber-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    headline: 'Your tool is so complex, only one person knows how it works.',
    body: 'Most continuity platforms take months to implement and need dedicated administrators. When that person leaves, the program collapses quietly.',
    accent: 'from-indigo-400 to-teal-500',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 mesh-dark relative overflow-hidden">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            Sound familiar?
          </p>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            The tools built to fix this<br />became part of the problem.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Business continuity software has existed for decades.
            Most organizations still run their programs in spreadsheets —
            because the software designed to replace them is harder to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map(({ icon, headline, body, accent }) => (
            <div
              key={headline}
              className="card-hover-line bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all group"
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${accent} bg-opacity-20 flex items-center justify-center mb-4 text-white`}>
                {icon}
              </div>
              <h3 className="font-semibold text-white mb-2 leading-snug">{headline}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 flex items-center gap-4 p-5 rounded-xl border border-indigo-500/30 bg-indigo-500/10">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-indigo-300">
            <span className="font-semibold text-white">Finally, IT and business agree on something.</span>
            {' '}Risky was designed to be used by everyone — not just the person who owns the continuity program.
          </p>
        </div>
      </div>
    </section>
  )
}
