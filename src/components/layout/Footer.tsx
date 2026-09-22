import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { CONTACT } from '@/constants'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.navy, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="layout-container" style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="mb-4"><BrandLogo dark compact /></div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: B, color: 'rgba(255,255,255,0.4)', maxWidth: '240px' }}
            >
              Widening Horizons. Shaping Purpose.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Instagram', 'TikTok'].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs transition-all hover:bg-white/10"
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: B,
                  }}
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm" style={{ fontFamily: H }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { text: 'Our Purpose', to: '/' },
                { text: 'My Study Plan', to: '/portal' },
                { text: 'For Universities', to: '/partners' },
                { text: 'For Parents', to: '/parents' },
                { text: 'Blog', to: '/blog' },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white no-underline"
                    style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm" style={{ fontFamily: H }}>
              For
            </h4>
            <ul className="space-y-2.5">
              {[
                { text: 'Students', to: '/students' },
                { text: 'Parents', to: '/parents' },
                { text: 'Schools & Universities', to: '/partners' },
                { text: 'Partner with us', to: '/partners' },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white no-underline"
                    style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm" style={{ fontFamily: H }}>
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}>
                {CONTACT.email}
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}>
                <a href={`mailto:${CONTACT.gmail}`} className="no-underline hover:text-white" style={{ color: 'inherit' }}>
                  {CONTACT.gmail}
                </a>
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}>
                {CONTACT.phone}
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.42)', fontFamily: B }}>
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between text-xs pt-6 gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.28)', fontFamily: B }}
        >
          <span>&copy; 2026 Prospira-Edu. We leave no one behind.</span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <button key={l} className="hover:text-white/50 transition-colors">
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
