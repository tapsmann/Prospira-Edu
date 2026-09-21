import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function ChooseCareerPath() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Student Readiness · Students, Career Guidance, Self-Discovery</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            How to Choose a Career Path That Fits Your Strengths
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>
            <p className="mb-6">
              Choosing a career path is one of the most important decisions you will make. But how do you know what is right for you?
            </p>
            <p className="mb-6" style={{ fontWeight: 600, color: C.navy }}>
              The answer is not in a magic formula or a career test. It is in understanding yourself: your strengths, interests, values, and what energizes you.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>The 4-Step Career Discovery Framework</h2>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '24px', marginBottom: '12px' }}>Step 1: Identify Your Strengths</h3>
            <p className="mb-4">What comes naturally to you? What do others compliment you on?</p>
            <ul className="mb-6 space-y-2">
              <li>Are you good with your hands? Trades might be your path</li>
              <li>Do you love solving puzzles? Technology could be calling</li>
              <li>Are you creative and expressive? Arts or design awaits</li>
              <li>Do you enjoy helping others? Service-oriented careers</li>
            </ul>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '24px', marginBottom: '12px' }}>Step 2: Explore Your Interests</h3>
            <p className="mb-4">What do you enjoy doing in your free time? What topics do you research?</p>
            <p className="mb-6 italic" style={{ color: '#6B6B6B' }}>Quick Exercise: Write down 5 things you love doing. What do they have in common?</p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '24px', marginBottom: '12px' }}>Step 3: Consider Your Values</h3>
            <p className="mb-4">What matters most to you?</p>
            <ul className="mb-6 space-y-2">
              <li>Financial security</li>
              <li>Making a difference</li>
              <li>Creative expression</li>
              <li>Independence and flexibility</li>
              <li>Working with others</li>
            </ul>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '24px', marginBottom: '12px' }}>Step 4: Research Career Options</h3>
            <p className="mb-6">Once you understand yourself, research careers that align with your strengths, interests, and values.</p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '32px', marginBottom: '16px' }}>Common Career Paths in Zimbabwe</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: C.navy, color: 'white' }}>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Pathway</th>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Strengths</th>
                    <th className="text-left px-4 py-3" style={{ fontFamily: H }}>Typical Roles</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pathway: 'Trades', strengths: 'Hands-on, practical, problem-solving', roles: 'Electrician, Plumber, Welder, Carpenter' },
                    { pathway: 'Technology', strengths: 'Analytical, logical, detail-oriented', roles: 'Software Developer, Data Analyst, IT Support' },
                    { pathway: 'Academia', strengths: 'Research, teaching, communication', roles: 'Teacher, Lecturer, Researcher' },
                    { pathway: 'Arts & Design', strengths: 'Creative, expressive, imaginative', roles: 'Graphic Designer, Writer, Musician' },
                    { pathway: 'Service', strengths: 'Empathetic, caring, collaborative', roles: 'Nurse, Social Worker, Counselor' },
                    { pathway: 'Business', strengths: 'Leadership, strategic, results-driven', roles: 'Entrepreneur, Manager, Consultant' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: i % 2 === 0 ? 'white' : C.cream }}>
                      <td className="px-4 py-3 font-medium" style={{ fontFamily: H, color: C.navy }}>{row.pathway}</td>
                      <td className="px-4 py-3" style={{ fontFamily: B }}>{row.strengths}</td>
                      <td className="px-4 py-3" style={{ fontFamily: B }}>{row.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                "We often ask students, 'What do you want to be when you grow up?' But the better question is, 'What kind of problems do you want to solve?' The answer reveals far more about your true calling."
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
