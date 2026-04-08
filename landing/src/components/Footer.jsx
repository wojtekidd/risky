export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center glow-indigo">
            <span className="text-white font-bold text-sm leading-none">R</span>
          </span>
          <span className="font-bold text-lg tracking-tight text-white">Risky</span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-neutral-500 italic">
          Finally, IT and business agree on something.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <a href="mailto:hello@risky.io" className="hover:text-neutral-300 transition-colors">
            hello@risky.io
          </a>
          <span className="text-neutral-700">·</span>
          <span className="text-neutral-600">© {new Date().getFullYear()} Risky</span>
        </div>
      </div>
    </footer>
  )
}
