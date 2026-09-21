import { H, B, C } from '@/constants/theme'
import { VALUES } from '@/data'
import { SectionLabel } from '@/components/common'

export function ValuesSection() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <SectionLabel>Our Foundation</SectionLabel>
        <h2
          style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', color: 'white' }}
        >
          The Prospira Promise
        </h2>
        <p
          style={{
            marginTop: '12px',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: B,
            fontSize: '16px',
            maxWidth: '560px',
            margin: '12px auto 0',
          }}
        >
          Mentorship shouldn't be exclusive. These six principles guide every decision we make.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {VALUES.map((v) => (
          <div
            key={v.name}
            className="rounded-xl"
            style={{
              backgroundColor: C.navyCard,
              border: `1px solid rgba(255,255,255,0.06)`,
              padding: '28px',
            }}
          >
            <h3
              className="font-semibold text-white mb-1.5"
              style={{ fontFamily: H, fontSize: '15px' }}
            >
              {v.name}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.48)', fontFamily: B }}
            >
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
