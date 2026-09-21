import { useState } from 'react'
import { H, B, C } from '@/constants/theme'
import { CONTACT } from '@/constants'
import { PARENT_TESTIMONIALS, COMPARISON_DATA } from '@/data'
import { Stars, SectionLabel, PageContainer } from '@/components/common'

export function ParentsPage() {
  const [activePath, setActivePath] = useState<'degree' | 'skills'>('degree')

  const handleParentAdvisorClick = () => {
    window.open(CONTACT.whatsappUrl("I would like to talk to a Parent Advisor"), '_blank')
  }

  return (
    <div className="w-full">
      <section className="w-full site-section" style={{ backgroundColor: C.navy }}>
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel>For Parents and Guardians</SectionLabel>
              <h1
                style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}
              >
                Your Child is Capable.<br />We Help Them Prove It.
              </h1>
              <p style={{ fontFamily: B, fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                We know you worry about their future. We provide the framework to ensure they do not waste time or money.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ height: '240px', backgroundColor: C.navyMid }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?w=700&h=320&fit=crop&auto=format"
                alt="Supportive family discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
        <PageContainer>
          <div className="text-center mb-10">
            <SectionLabel>Our Commitment to You</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 5vw, 40px)', color: C.navy }}>
              We guide them. You stay informed.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'No Unwanted Degrees', desc: "We do not push degrees that do not fit your child's strengths. We show all pathways: university, trades, and skills." },
              { title: 'Accredited Partners Only', desc: 'We vet all universities and trade schools for quality, accreditation, and genuine job placement outcomes.' },
              { title: 'Regular Progress Reports', desc: "You receive updates on your child's progress, so you are never left in the dark about their journey." },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl"
                style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, padding: '28px' }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: H, fontSize: '18px', color: C.navy }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: B, color: '#6B6B6B' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="w-full site-section" style={{ backgroundColor: 'white' }}>
        <PageContainer>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${C.border}` }}
          >
            <div
              className="p-6 md:p-8"
              style={{ backgroundColor: C.cream, borderBottom: `1px solid ${C.border}` }}
            >
              <h2
                style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(24px, 3vw, 28px)', color: C.navy, marginBottom: '16px' }}
              >
                Degree vs. Skills: The Transparent View
              </h2>
              <div className="flex flex-wrap gap-3">
                {(['degree', 'skills'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePath(p)}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      fontFamily: H,
                      backgroundColor: activePath === p ? (p === 'degree' ? C.navy : C.emerald) : 'white',
                      color: activePath === p ? 'white' : C.bodyText,
                      border: `1.5px solid ${activePath === p ? (p === 'degree' ? C.navy : C.emerald) : C.border}`,
                    }}
                  >
                    {p === 'degree' ? 'Degree Path' : 'Skills Path'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-x-auto">
              <table className="w-full min-w-100">
                <tbody className="divide-y" style={{ borderColor: C.border }}>
                  {COMPARISON_DATA.map((row) => (
                    <tr key={row.metric}>
                      <td
                        className="py-3 pr-4 text-sm font-medium w-36 md:w-48"
                        style={{ fontFamily: B, color: '#6B6B6B' }}
                      >
                        {row.metric}
                      </td>
                      <td className="py-3">
                        <span
                          className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold"
                          style={{
                            fontFamily: B,
                            backgroundColor: activePath === 'degree' ? C.navy + '12' : C.emerald + '12',
                            color: activePath === 'degree' ? C.navy : C.emerald,
                          }}
                        >
                          {activePath === 'degree' ? row.degree : row.skills}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p
                className="text-sm mt-6 italic"
                style={{ fontFamily: B, color: '#888' }}
              >
                There is no "wrong" choice, only the choice that fits your child. We help you see both sides with full transparency.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
        <PageContainer>
          <div className="text-center mb-10">
            <SectionLabel>Parent Voices</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 5vw, 40px)', color: C.navy }}>
              What Other Parents Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARENT_TESTIMONIALS.map((t) => (
              <div
                key={t.parents}
                className="rounded-2xl"
                style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, padding: '28px' }}
              >
                <Stars />
                <p
                  className="leading-relaxed mb-5 italic text-sm"
                  style={{ fontFamily: B, color: '#3D3D3D' }}
                >
                  "{t.quote}"
                </p>
                <div style={{ borderTop: `1px solid ${C.creamD}`, paddingTop: '16px' }}>
                  <div className="font-semibold text-sm mb-0.5" style={{ fontFamily: H, color: C.navy }}>
                    {t.parents}
                  </div>
                  <div className="text-xs" style={{ fontFamily: B, color: C.emerald }}>
                    {t.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="w-full site-section" style={{ backgroundColor: C.navyDark }}>
        <PageContainer maxWidth="lg">
          <div className="text-center">
            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', color: 'white', marginBottom: '16px' }}>
              Still have questions? We are here for you.
            </h2>
            <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.65 }}>
              Book a free, no-pressure call with a Parent Advisor who has been where you are.
            </p>
            <button
              className="px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
              style={{ backgroundColor: C.gold, fontFamily: H }}
              onClick={handleParentAdvisorClick}
            >
              Talk to a Parent Advisor
            </button>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
