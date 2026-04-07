import { useState } from 'react'

export default function WaitlistForm({ size = 'md' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const isLg = size === 'lg'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 ${isLg ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className={`font-medium text-neutral-900 ${isLg ? 'text-lg' : 'text-sm'}`}>
          You're on the list. We'll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`flex gap-3 ${isLg ? 'flex-col sm:flex-row max-w-md mx-auto' : 'flex-col sm:flex-row'}`}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setErrorMsg('') }}
          className={`
            flex-1 rounded-lg border border-neutral-300 bg-white text-neutral-900
            placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            transition-shadow
            ${isLg ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'}
            ${status === 'error' ? 'border-red-400 focus:ring-red-400' : ''}
          `}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            shrink-0 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium
            transition-colors disabled:opacity-60 disabled:cursor-not-allowed
            ${isLg ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
          `}
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {status === 'error' && errorMsg && (
        <p className={`mt-2 text-red-500 text-xs ${isLg ? 'text-center' : ''}`}>{errorMsg}</p>
      )}
    </form>
  )
}
