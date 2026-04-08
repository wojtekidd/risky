const personas = [
  {
    role: 'BCM Program Owner',
    accent: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-100',
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    message: 'Stop managing continuity in spreadsheets.',
    detail:
      'Centralize your impact assessments, dependency maps, plans, and audit trail in one system. Magic-link delegation means you stop being the bottleneck for every data collection cycle.',
  },
  {
    role: 'Chief Risk Officer',
    accent: 'text-teal-600',
    iconBg: 'bg-teal-50 border-teal-100',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
    message: 'See real exposure, not last quarter\'s report.',
    detail:
      'Live, enterprise-wide visibility of operational dependencies and concentration risk. Risk scores are explainable. When the board asks, you have a current answer.',
  },
  {
    role: 'CIO / IT Leader',
    accent: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-100',
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    message: 'Your team maps what they know. Risky handles the rest.',
    detail:
      'No database rebuild required. Dependency mapping works both top-down and bottom-up. Ownership cascades intelligently. Capture only what continuity needs.',
  },
  {
    role: 'Compliance Officer',
    accent: 'text-teal-600',
    iconBg: 'bg-teal-50 border-teal-100',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    message: 'Audit-ready from day one.',
    detail:
      'Every plan update is versioned. Every assessment cycle documented. Every risk score traceable to its inputs. When your auditor arrives, you open Risky — not a file server.',
  },
  {
    role: 'CFO',
    accent: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-100',
    icon: (
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    message: 'One unplanned outage costs more than a year of Risky.',
    detail:
      'Low implementation overhead and accessible design mean the program runs continuously — not just at audit time. And risk modelling turns every scenario into a financial number you can defend.',
  },
]

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 px-6 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Who It's For
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            Built for the whole team,<br />not just the BC Manager.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Business continuity is a cross-functional responsibility. Risky gives each
            stakeholder exactly what they need — without overwhelming anyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {personas.map(({ role, accent, iconBg, icon, message, detail }) => (
            <div
              key={role}
              className="card-hover-line bg-white rounded-xl border border-neutral-200 p-6 hover:border-indigo-100 hover:shadow-md transition-all group"
            >
              <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-4 ${iconBg}`}>
                {icon}
              </div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                {role}
              </div>
              <h3 className={`font-semibold mb-2 leading-snug ${accent}`}>
                "{message}"
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{detail}</p>
            </div>
          ))}

          {/* Filler card */}
          <div className="rounded-xl p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-teal-600 glow-indigo">
            <div>
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-3">Not sure if Risky fits?</p>
              <p className="text-white font-semibold leading-snug text-base">
                If disruption would cost you more than a few hours of productivity,
                your organization needs a continuity program.
              </p>
            </div>
            <p className="text-indigo-200 text-sm mt-6 leading-relaxed">
              Risky is designed for organizations without a dedicated BC team, as well as
              those with mature programs ready to replace legacy tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
