import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { BrandLogo } from './BrandLogo'
import { useAuth } from '@/contexts/AuthContext'

export function Navbar() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, loading, signOut } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenu(false) }, [location.pathname])

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/')

  const nav = [
    { label: 'My Study Plan', to: '/portal' },
    { label: 'For Universities', to: '/partners' },
    { label: 'For Parents', to: '/parents' },
    { label: 'Blog', to: '/blog' },
  ]

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: C.navy,
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: scrolled ? '0 8px 30px rgba(4,17,38,0.32)' : 'none',
      }}
    >
      <div className="layout-container h-19 flex items-center justify-between">
        <Link to="/" aria-label="Go to homepage"><BrandLogo dark compact /></Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="px-3 py-2 text-sm rounded-lg transition-colors inline-block"
              style={{
                fontFamily: B,
                color: isActive(item.to) ? 'white' : 'rgba(255,255,255,0.7)',
                backgroundColor: isActive(item.to) ? 'rgba(184,212,250,0.13)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {loading ? null : user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(184,212,250,0.1)' }}>
                {user.photo && <img src={user.photo} alt={user.name} className="w-7 h-7 rounded-full" />}
                <span className="text-sm text-white" style={{ fontFamily: B }}>{user.name.split(' ')[0]}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ color: '#B8D4FA', fontFamily: H }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="px-4 py-2.5 rounded-lg text-sm font-semibold no-underline"
                style={{ color: '#B8D4FA', fontFamily: H, textDecoration: 'none' }}
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="px-5 py-3 rounded-lg text-sm font-semibold text-white no-underline"
                style={{ backgroundColor: C.blue, fontFamily: H, textDecoration: 'none' }}
              >
                Get Started
              </Link>
            </>
          )}
          <Link
            to="/portal"
            className="px-5 py-3 rounded-lg text-sm font-semibold text-white no-underline"
            style={{ backgroundColor: C.emerald, fontFamily: H, textDecoration: 'none' }}
          >
            Plan My Studies
          </Link>
        </div>

        <button className="lg:hidden text-white p-2 text-xl" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
          {menu ? '\u00D7' : '\u2630'}
        </button>
      </div>

      {menu && (
        <div className="lg:hidden border-t" style={{ backgroundColor: C.navy, borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="layout-container pb-5">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="w-full text-left py-3.5 text-sm border-b block"
                style={{ fontFamily: B, color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.09)', textDecoration: 'none' }}
                onClick={() => setMenu(false)}
              >
                {item.label}
              </Link>
            ))}
            {loading ? null : user ? (
              <div className="mt-4 flex items-center gap-3">
                {user.photo && <img src={user.photo} alt={user.name} className="w-8 h-8 rounded-full" />}
                <span className="text-sm text-white" style={{ fontFamily: B }}>{user.name}</span>
                <button
                  onClick={() => { signOut(); setMenu(false) }}
                  className="ml-auto text-sm"
                  style={{ color: '#B8D4FA', fontFamily: B }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="w-full mt-4 py-3 rounded-lg text-sm font-semibold text-center block no-underline"
                  style={{ color: '#B8D4FA', fontFamily: H, textDecoration: 'none' }}
                  onClick={() => setMenu(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="w-full mt-2 py-3.5 rounded-lg text-sm font-semibold text-white block text-center no-underline"
                  style={{ backgroundColor: C.blue, fontFamily: H, textDecoration: 'none' }}
                  onClick={() => setMenu(false)}
                >
                  Get Started
                </Link>
              </>
            )}
            <Link
              to="/portal"
              className="w-full mt-2 py-3.5 rounded-lg text-sm font-semibold text-white block text-center no-underline"
              style={{ backgroundColor: C.emerald, fontFamily: H, textDecoration: 'none' }}
              onClick={() => setMenu(false)}
            >
              Plan My Studies
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
