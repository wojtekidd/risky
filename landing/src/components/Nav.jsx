import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center glow-indigo">
            <span className="text-white font-bold text-sm leading-none">R</span>
          </span>
          <span className="font-bold text-xl tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">
            Risky
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('problem')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            The Problem
          </button>
          <button onClick={() => scrollTo('features')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            Features
          </button>
          <button onClick={() => scrollTo('for-who')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            Who It's For
          </button>
          <button
            onClick={() => scrollTo('waitlist')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Join the waitlist
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 flex flex-col gap-4">
          {['problem', 'features', 'for-who'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-left text-neutral-600 hover:text-neutral-900 transition-colors capitalize"
            >
              {id === 'for-who' ? "Who It's For" : id === 'problem' ? 'The Problem' : 'Features'}
            </button>
          ))}
          <button
            onClick={() => scrollTo('waitlist')}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg w-full"
          >
            Join the waitlist
          </button>
        </div>
      )}
    </nav>
  )
}
