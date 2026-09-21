import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen w-full" style={{ paddingTop: '72px' }}>
      <div
        className="flex flex-col justify-center w-full lg:w-1/2"
        style={{ backgroundColor: C.navy }}
      >
        <div className="hero-copy w-full max-w-xl mx-auto py-16 lg:py-24">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium w-fit"
            style={{
              backgroundColor: 'rgba(184, 212, 250, 0.1)',
              border: '1px solid rgba(184, 212, 250, 0.25)',
              color: C.emeraldL,
              fontFamily: B,
            }}
          >
            Study Abroad Guidance, Zimbabwe
          </div>

          <h1
            style={{
              fontFamily: H,
              fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 66px)',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: '20px',
            }}
          >
            Your route to<br />
            <span style={{ color: C.emeraldL }}>university abroad.</span>
          </h1>

          <p
            style={{
              fontFamily: B,
              fontSize: 'clamp(16px, 1.5vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '450px',
              marginBottom: '36px',
            }}
          >
            From choosing the right university to visa preparation and safe accommodation, we help you leave ready.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/portal"
              className="px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 no-underline"
              style={{ backgroundColor: C.emerald, fontFamily: H }}
            >
              Plan My Studies
            </Link>
            <Link
              to="/parents"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 no-underline"
              style={{
                border: '2px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
                backgroundColor: 'transparent',
                fontFamily: H,
              }}
            >
              For Parents
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-100 lg:h-auto overflow-hidden" style={{ backgroundColor: C.navyMid }}>
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&h=900&fit=crop&auto=format"
          alt="Students collaborating"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, rgba(33,78,136,0.22) 0%, rgba(4,17,38,0.72) 100%)',
          }}
        />

        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
          {[
            { num: '3', label: 'Support Stages' },
            { num: '1:1', label: 'Student Guidance' },
            { num: '100%', label: 'Student-First' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(13,27,42,0.85)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="font-bold text-2xl text-white" style={{ fontFamily: H }}>
                {stat.num}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: B }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
