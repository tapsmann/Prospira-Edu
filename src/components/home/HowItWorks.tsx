import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { SectionLabel } from '@/components/common'

const steps = [
  { n: '1', title: 'Find your best fit', text: 'Tell us your goals, budget and preferences. Our planner matches you to destinations and study routes that fit.' },
  { n: '2', title: 'See what you qualify for', text: 'Add your academic details once and instantly see the right entry requirements, intakes and funding routes.' },
  { n: '3', title: 'Apply with expert backup', text: 'Pick your intake and prepare one strong application. Our advisers review your documents before anything goes out.' },
  { n: '4', title: 'Track every step', text: 'Follow your journey from shortlist to offer to arrival with a saved plan and checklist. No guessing, no chasing.' },
]

export function HowItWorks() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mb-10">
        <SectionLabel>How it works</SectionLabel>
        <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', color: C.navy, lineHeight: 1.15 }}>
          From confusion to confidence in four steps.
        </h2>
        <p className="mt-3" style={{ fontFamily: B, color: '#6B6B6B', lineHeight: 1.7 }}>
          No guesswork. Every step is yours to own — with an adviser beside you when you need one.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl p-6" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4"
              style={{ backgroundColor: C.blueLight, color: C.navy, fontFamily: H }}
            >
              {s.n}
            </div>
            <h3 className="font-bold mb-2" style={{ fontFamily: H, fontSize: '17px', color: C.navy }}>{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: B, color: '#6B6B6B' }}>{s.text}</p>
          </div>
        ))}
      </div>
      <Link
        to="/portal"
        className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm no-underline transition-all hover:opacity-90"
        style={{ backgroundColor: C.navy, fontFamily: H }}
      >
        Find My University Match →
      </Link>
    </div>
  )
}
