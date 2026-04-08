const features = [
  {
    tag: 'Impact Assessment',
    tagColor: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
    accent: 'from-indigo-500 to-indigo-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Zero-Jargon Impact Wizard',
    description:
      'Business owners model downtime impact through plain-language sliders and visual tools — no spreadsheets, no risk matrices. The platform translates their answers into recovery metrics automatically.',
    highlight: 'Complete an impact assessment in days, not weeks.',
  },
  {
    tag: 'Collaboration',
    tagColor: 'bg-teal-50 text-teal-700 border border-teal-100',
    accent: 'from-teal-500 to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Frictionless Delegation',
    description:
      'Send secure magic links directly to IT, HR, or any subject-matter expert. They click, input their data, and close the tab. No accounts. No onboarding. No alignment meetings.',
    highlight: 'Decentralize data collection without losing control.',
  },
  {
    tag: 'Architecture',
    tagColor: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
    accent: 'from-indigo-400 to-teal-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Dynamic Dependency Mapping',
    description:
      'Build your technology stack top-down from a business application or bottom-up from hardware. The system predicts the next logical layer — including vendors and security services.',
    highlight: 'Never skip a critical component again.',
  },
  {
    tag: 'Asset Management',
    tagColor: 'bg-teal-50 text-teal-700 border border-teal-100',
    accent: 'from-teal-500 to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Intelligent Asset Profiling',
    description:
      'Drag, drop, type a hostname, pick the technology. Ownership cascades down the architecture tree automatically. No database migration required — only the data continuity actually needs.',
    highlight: 'Productive in hours, not months.',
  },
  {
    tag: 'Executive View',
    tagColor: 'bg-amber-50 text-amber-700 border border-amber-100',
    accent: 'from-amber-500 to-amber-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Simple Management View',
    description:
      'An interactive asset grid that doubles as a concentration heatmap — tiles darken as shared dependencies grow, making hidden weak points visible at a glance. Click any tile for a full technical deep dive.',
    highlight: 'Executives see real exposure. No report required.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 mesh-subtle border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            Built for the job.<br />Nothing more.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Every screen, every workflow, every field exists because it directly serves
            business continuity — not compliance theatre, not feature count.
          </p>
        </div>

        {/* First two features: large horizontal */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {features.slice(0, 2).map((f) => (
            <FeatureCard key={f.title} feature={f} large />
          ))}
        </div>

        {/* Remaining three features */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.slice(2).map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }) {
  const { tag, tagColor, accent, icon, title, description, highlight } = feature
  return (
    <div className="card-hover-line rounded-xl border border-neutral-200 bg-white p-6 hover:border-indigo-200 hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-5">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accent} bg-opacity-10 flex items-center justify-center text-white shrink-0`}
          style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColor}`}>
          {tag}
        </span>
      </div>
      <h3 className="text-base font-semibold text-neutral-900 mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed mb-4">{description}</p>
      <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        {highlight}
      </p>
    </div>
  )
}
