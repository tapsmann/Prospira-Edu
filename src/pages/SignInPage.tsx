import { useState, useEffect, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { useAuth } from '@/contexts/AuthContext'
import { getAuthErrorMessage } from '@/utils'

export function SignInPage() {
  const { user, loading, signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [firebaseError, setFirebaseError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [googleSubmitting, setGoogleSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) navigate('/', { replace: true })
  }, [user, loading, navigate])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (!password) e.password = 'Password is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFirebaseError('')
    if (!validate()) return
    setSubmitting(true)
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code || ''
      console.error('Email sign-in failed:', code, err)
      if (code === 'auth/firebase-app-check-token-is-invalid' || code === 'auth/invalid-app-credential') {
        setFirebaseError('Security verification required. Please try signing in with Google, or contact support if the issue persists.')
      } else {
        setFirebaseError(getAuthErrorMessage(code))
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogle = async () => {
    setFirebaseError('')
    setGoogleSubmitting(true)
    try {
      await signInWithGoogle()
      navigate('/')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code || ''
      console.error('Google sign-in failed:', code, err)
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return
      setFirebaseError(code === 'auth/popup-blocked' ? 'Google sign-in needs a popup. Allow popups for this site, then try again.' : getAuthErrorMessage(code))
    } finally {
      setGoogleSubmitting(false)
    }
  }

  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${hasError ? '#DC2626' : C.border}`,
    backgroundColor: 'white',
    fontFamily: B,
    fontSize: '15px',
    color: C.bodyText,
    outline: 'none',
    transition: 'border-color 0.15s',
  })

  return (
    <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: C.cream }}>
      <div className="w-full max-w-md mx-auto" style={{ padding: '40px 20px' }}>
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy }}>Prospira-Edu</span>
          </Link>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(26px, 4vw, 34px)', color: C.navy, marginBottom: '8px' }}>
            Welcome back
          </h1>
          <p style={{ fontFamily: B, color: '#6B6B6B', fontSize: '15px' }}>
            Sign in to continue your journey.
          </p>
        </div>

        {firebaseError && (
          <div className="mb-5 px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', fontFamily: B }}>
            {firebaseError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5" style={{ fontFamily: B, color: C.bodyText }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={inputStyle(!!errors.email)}
              onFocus={(e) => e.currentTarget.style.borderColor = C.blue}
              onBlur={(e) => e.currentTarget.style.borderColor = errors.email ? '#DC2626' : C.border}
            />
            {errors.email && <p className="text-xs mt-1" style={{ color: '#DC2626', fontFamily: B }}>{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1.5" style={{ fontFamily: B, color: C.bodyText }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              style={inputStyle(!!errors.password)}
              onFocus={(e) => e.currentTarget.style.borderColor = C.blue}
              onBlur={(e) => e.currentTarget.style.borderColor = errors.password ? '#DC2626' : C.border}
            />
            {errors.password && <p className="text-xs mt-1" style={{ color: '#DC2626', fontFamily: B }}>{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: C.navy, fontFamily: H }}
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
          <span className="text-xs" style={{ color: '#888', fontFamily: B }}>or</span>
          <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
        </div>

        <button
          onClick={handleGoogle}
          disabled={googleSubmitting}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:bg-slate-50 flex items-center justify-center gap-3"
          style={{ border: `1.5px solid ${C.border}`, color: C.bodyText, fontFamily: H, backgroundColor: 'white' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          {googleSubmitting ? 'Opening Google…' : 'Sign in with Google'}
        </button>

        <p className="text-center text-sm mt-6" style={{ fontFamily: B, color: '#6B6B6B' }}>
          Do not have an account?{' '}
          <Link to="/sign-up" style={{ color: C.navy, fontWeight: 600, textDecoration: 'none' }}>Create one</Link>
        </p>
      </div>
    </div>
  )
}
