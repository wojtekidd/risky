const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Your BIA takes weeks and the data is already stale.',
    body: 'Business owners don\'t speak continuity jargon. Chasing MTPD inputs over email takes weeks — and the moment you\'re done, the data is out of date.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    headline: 'Your plans live in Word docs nobody maintains.',
    body: 'Continuity plans scattered across SharePoint, email threads, and hard drives. No version control, no ownership, no confidence that what you\'d hand an auditor is actually current.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    headline: 'Leadership has no visibility until the auditor shows up.',
    body: 'Risk reports written for BC specialists tell executives nothing useful. Hidden single points of failure stay hidden until an incident — or a regulatory inspection — exposes them.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    headline: 'Your tool is so complex, only one person knows how it works.',
    body: 'Enterprise BCM platforms cost months to implement and require dedicated administrators to maintain. When that person leaves, the program quietly collapses.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            BCM tools became part of the problem.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Business continuity software has existed for decades. Most organizations still manage
            their programs in spreadsheets. The tools built to fix this created new complexity
            instead of solving the original one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map(({ icon, headline, body }) => (
            <div
              key={headline}
              className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 leading-snug">{headline}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
