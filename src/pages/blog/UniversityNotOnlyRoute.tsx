import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function UniversityNotOnlyRoute() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Pathways · Students, Parents, Career Guidance</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            University Is Not the Only Route to Success
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>
            <p className="mb-6">
              For decades, Zimbabwean parents and students have viewed university as the only acceptable path to success. But the reality is shifting. With rising tuition costs, limited university spaces, and a growing demand for skilled trades and technical expertise, it is time to broaden our definition of success.
            </p>
            <p className="mb-6" style={{ fontWeight: 600, color: C.navy }}>
              University is one path, not the only path.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>The Zimbabwean Context</h2>
            <p className="mb-6">
              In Zimbabwe, the competition for university places is fierce. Thousands of qualified students are turned away each year due to limited capacity. Meanwhile, industries are crying out for skilled tradespeople, technicians, and entrepreneurs who can fill critical gaps in the economy.
            </p>
            <p className="mb-8 italic" style={{ color: '#6B6B6B' }}>
              "The demand for plumbers, electricians, welders, and IT technicians far outstrips supply," says one Harare-based employer. "We have work, but we cannot find qualified people to do it."
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>The Skills Gap Reality</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: C.navy, color: 'white' }}>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Sector</th>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Demand</th>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: 'Trades (Electricians, Plumbers, Welders)', demand: 'High', gap: 'Critical Shortage' },
                    { sector: 'Technology (Software Dev, Data, IT Support)', demand: 'Growing', gap: 'Significant Gap' },
                    { sector: 'Healthcare (Nursing, Allied Health)', demand: 'High', gap: 'Shortage' },
                    { sector: 'Entrepreneurship', demand: 'Growing', gap: 'Support Needed' },
                    { sector: 'University Graduates', demand: 'Oversaturated', gap: 'Competition High' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: i % 2 === 0 ? 'white' : C.cream }}>
                      <td className="px-4 py-3" style={{ fontFamily: B }}>{row.sector}</td>
                      <td className="px-4 py-3" style={{ fontFamily: B }}>{row.demand}</td>
                      <td className="px-4 py-3" style={{ fontFamily: B }}>{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>Success Beyond University</h2>
            <p className="mb-6">
              Meet Tafara, a 22-year-old from Harare who chose a different path:
            </p>
            <blockquote className="mb-8 pl-5" style={{ borderLeft: `3px solid ${C.emerald}`, fontStyle: 'italic', color: '#6B6B6B' }}>
              "I did not get into university, and I felt like a failure. My parents were devastated. But I enrolled in an electrical apprenticeship through Prospira-Edu. Today, I am a qualified electrician earning more than some of my friends who graduated. I have no debt, and my parents are now my biggest supporters."
            </blockquote>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>Alternative Pathways Worth Exploring</h2>
            <ul className="mb-8 space-y-3">
              <li><strong>Technical and Vocational Training</strong> (Electrical, Plumbing, Carpentry, Welding) - shorter duration, lower cost, immediate employment</li>
              <li><strong>Technology Bootcamps</strong> (Software Development, Data Science, UX Design) - no degree required, skills-based learning</li>
              <li><strong>Entrepreneurship</strong> - starting a business, freelancing, digital services</li>
              <li><strong>Apprenticeships</strong> - learn while you earn, real-world experience, mentorship</li>
              <li><strong>Gap Year Programs</strong> - time to explore, gain skills, discover purpose</li>
            </ul>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                At Prospira-Edu, we believe that every young person has a unique path. Our role is not to push you toward one option but to help you discover the path that fits your strengths, interests, and values.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a href="/portal" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }}>
                Take the Purpose Quiz
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
