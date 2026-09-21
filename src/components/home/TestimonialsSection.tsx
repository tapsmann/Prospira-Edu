import { useState, useEffect } from 'react'
import { H, B, C } from '@/constants/theme'
import { TESTIMONIALS } from '@/data'
import { Stars, Badge, SectionLabel } from '@/components/common'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextTestimonial = () => setActive((active + 1) % TESTIMONIALS.length)
  const prevTestimonial = () => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  const visibleTestimonials = isMobile ? [TESTIMONIALS[active]] : TESTIMONIALS

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
        <div>
          <SectionLabel>Real Results</SectionLabel>
          <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', color: C.navy }}>
            Where Are They Now?
          </h2>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all"
            style={{
              border: `1.5px solid ${C.border}`,
              color: C.navy,
              backgroundColor: 'white',
            }}
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all"
            style={{
              border: `1.5px solid ${C.border}`,
              color: C.navy,
              backgroundColor: 'white',
            }}
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {visibleTestimonials.map((t, index) => {
          const isActive = isMobile ? active === index : index === active
          return (
            <div
              key={t.name}
              className="rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${isActive ? t.color + '40' : C.border}`,
                padding: '28px',
                boxShadow: isActive ? `0 8px 32px rgba(0,0,0,0.08)` : 'none',
              }}
            >
              <Stars />
              <p
                className="leading-relaxed mb-5"
                style={{ fontFamily: B, color: '#3D3D3D', fontSize: '15px', fontStyle: 'italic' }}
              >
                "{t.quote}"
              </p>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: `1px solid ${C.creamD}` }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: `2px solid ${C.creamD}` }}
                />
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ fontFamily: H, color: C.navy }}>
                    {t.name}, {t.age}
                  </div>
                  <Badge label={t.pathway} color={t.color} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: active === i ? '24px' : '8px',
              height: '8px',
              backgroundColor: active === i ? C.emerald : C.creamD,
            }}
          />
        ))}
      </div>
    </div>
  )
}
