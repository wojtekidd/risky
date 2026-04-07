const personas = [
  {
    role: 'BCM Program Owner',
    icon: '🗂️',
    message: 'Stop managing continuity in spreadsheets.',
    detail:
      'Centralize your BIAs, dependency maps, plans, and audit trail in one system. Magic-link delegation means you stop being the bottleneck for every data collection cycle.',
  },
  {
    role: 'Chief Risk Officer',
    icon: '📊',
    message: 'See real exposure, not last quarter\'s report.',
    detail:
      'Live, enterprise-wide visibility of operational dependencies and concentration risk. Risk scores are explainable. When the board asks, you have a current answer.',
  },
  {
    role: 'CIO / IT Leader',
    icon: '⚙️',
    message: 'Your team maps what they know. Risky handles the rest.',
    detail:
      'No CMDB rebuild required. Dependency mapping works both top-down and bottom-up. Ownership cascades intelligently. Capture only what continuity needs.',
  },
  {
    role: 'Compliance Officer',
    icon: '✅',
    message: 'Audit-ready from day one.',
    detail:
      'Every plan update is versioned. Every BIA cycle documented. Every risk score traceable to its inputs. When your auditor arrives, you open Risky — not a file server.',
  },
  {
    role: 'CFO',
    icon: '💰',
    message: 'One unplanned outage costs more than a year of Risky.',
    detail:
      'Low implementation overhead and accessible UX mean the program runs continuously — not just at audit time. That\'s what delivers the ROI.',
  },
]

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Who It's For
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-4">
            Built for the whole team, not just the BC Manager.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Business continuity is a cross-functional responsibility. Risky gives each
            stakeholder exactly what they need — without overwhelming anyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map(({ role, icon, message, detail }) => (
            <div
              key={role}
              className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                {role}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 leading-snug">
                "{message}"
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{detail}</p>
            </div>
          ))}

          {/* Filler card for grid balance */}
          <div className="bg-gradient-to-br from-indigo-600 to-teal-600 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-indigo-100 text-sm font-medium mb-3">Not sure if Risky fits?</p>
              <p className="text-white font-semibold leading-snug">
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
