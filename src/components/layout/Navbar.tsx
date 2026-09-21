import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { BrandLogo } from './BrandLogo'
import { useAuth } from '@/contexts/AuthContext'

const pathways = [
  { title: 'Study destinations', items: ['United Kingdom & Ireland', 'Canada & United States', 'Australia & New Zealand', 'Europe & Asia'] },
  { title: 'University applications', items: ['Course & university matching', 'Application preparation', 'Scholarships & funding', 'English-language tests'] },
  { title: 'Move with confidence', items: ['Student visa planning', 'Financial evidence', 'Student accommodation', 'Pre-departure support'] },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, loading, signOut } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setMenu(false) }, [location.pathname])

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/')

  const closeMenu = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nav = [
    { label: 'Study Abroad', to: '/pathways', hasMenu: true },
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
      <div className="layout-container h-[76px] flex items-center justify-between">
        <Link to="/" aria-label="Go to homepage"><BrandLogo dark compact /></Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasMenu && setOpen(true)}
              onMouseLeave={() => item.hasMenu && setOpen(false)}
            >
              <Link
                to={item.to}
                onClick={() => { if (!item.hasMenu) setOpen(false) }}
                className="px-3 py-2 text-sm rounded-lg transition-colors inline-block"
                style={{
                  fontFamily: B,
                  color: isActive(item.to) ? 'white' : 'rgba(255,255,255,0.7)',
                  backgroundColor: isActive(item.to) ? 'rgba(184,212,250,0.13)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {item.label}{item.hasMenu && <span className="ml-2 text-[10px]">&#9662;</span>}
              </Link>
              {item.hasMenu && open && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[670px]">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, boxShadow: '0 24px 60px rgba(4,17,38,0.28)' }}
                  >
                    <div className="grid grid-cols-3">
                      {pathways.map((column, index) => (
                        <div className="p-5" key={column.title} style={{ borderRight: index < 2 ? `1px solid ${C.border}` : 'none' }}>
                          <p className="text-xs uppercase tracking-[0.14em] mb-3" style={{ color: C.blue, fontFamily: B }}>{column.title}</p>
                          {column.items.map((item) => (
                            <Link
                              key={item}
                              to="/pathways"
                              onClick={closeMenu}
                              className="block text-left text-sm py-1.5 hover:underline"
                              style={{ color: C.bodyText, fontFamily: B, textDecoration: 'none' }}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/pathways"
                      onClick={closeMenu}
                      className="w-full text-left px-5 py-3 text-sm font-semibold block"
                      style={{ color: C.navy, borderTop: `1px solid ${C.border}`, fontFamily: B, backgroundColor: C.blueLight, textDecoration: 'none' }}
                    >
                      Explore study abroad support <span aria-hidden="true">&#8594;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
