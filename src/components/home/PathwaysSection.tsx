import { useState } from 'react'
import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { PATHWAYS } from '@/data'
import { SectionLabel } from '@/components/common'

export function PathwaysSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
        <div>
          <SectionLabel>Three steps. One destination.</SectionLabel>
          <h2
            style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', color: C.navy, lineHeight: 1.15 }}
          >
            Study abroad with a plan<br className="hidden sm:inline" />built around you.
          </h2>
        </div>
        <Link
          to="/pathways"
          className="text-sm font-medium transition-opacity hover:opacity-60 mt-4 sm:mt-0 no-underline"
          style={{ color: C.emerald, fontFamily: B }}
        >
          Explore our support &#8594;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PATHWAYS.map((p, i) => (
          <Link
            key={p.title}
            to="/pathways"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 block no-underline"
            style={{
              backgroundColor: 'white',
              border: `1px solid ${C.border}`,
              transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
              boxShadow: hovered === i ? '0 24px 64px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div className="relative h-48 overflow-hidden" style={{ backgroundColor: C.navyMid }}>
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: '3px', backgroundColor: p.color }}
              />
            </div>

            <div style={{ padding: '24px 24px 28px' }}>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: p.color, fontFamily: B }}
                >
                  {p.label}
                </span>
              </div>
              <h3
                className="font-bold mb-2"
                style={{ fontFamily: H, fontSize: '18px', color: C.navy }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: '#6B6B6B', fontFamily: B }}
              >
                {p.desc}
              </p>
              <span
                className="text-sm font-medium flex items-center gap-1"
                style={{ color: p.color, fontFamily: B }}
              >
                Learn More &#8594;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
