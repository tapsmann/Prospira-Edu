import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function WhatWeExistToChange() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Prospira-Edu Stories · About Us, Mission, Vision</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            What Prospira-Edu Exists to Change
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginBottom: '12px' }}>The Problem We See</h2>
            <p style={{ marginBottom: '16px' }}>
              Too many young people in Zimbabwe are finishing school without a clear sense of direction. They have passed their exams, collected their certificates, and yet remain uncertain about what comes next. This is not a failure of effort. It is a gap in the system.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We see it everywhere. Students who chose subjects based on what was available, not what suited them. Learners who followed the crowd into career paths that did not match their strengths. Young people who had the talent but never had the conversation that could have changed everything.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>Limited Awareness</h3>
            <p style={{ marginBottom: '16px' }}>
              Most students first hear about a career option when it is already too late to prepare for it. By the time they reach upper secondary school, many have never interacted with someone working in their field of interest. They do not know what the day-to-day looks like, what qualifications are needed, or how to get there.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>Pressure to Conform</h3>
            <p style={{ marginBottom: '16px' }}>
              There is an unspoken rule in many households and schools: choose the safe path. Medicine, law, engineering. These are seen as the only real options. But the world has changed. New industries are emerging, and the economy needs a wider range of skills. The pressure to fit into a narrow set of options is shutting doors before young people even know they exist.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>Mismatched Skills</h3>
            <p style={{ marginBottom: '16px' }}>
              Without proper guidance, students end up in programmes that do not align with their natural abilities. A creative thinker forced into a rigid academic track. A hands-on learner stuck in a lecture hall. The result is disengagement, frustration, and a slow erosion of confidence.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>Wasted Potential</h3>
            <p style={{ marginBottom: '16px' }}>
              When young people do not receive the right support at the right time, talent goes unused. Ideas stay unspoken. Ambitions fade. The country loses out on the very people who could drive its next chapter of growth.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                These are not isolated problems. They are connected. And they all point to the same root cause: young people are making life-changing decisions without the information, support, and exposure they need. That is what we exist to change.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Our Mission</h2>
            <p style={{ marginBottom: '16px' }}>
              Prospira-Edu exists to help every young person discover their purpose and find a practical path to get there. We do this by connecting students with real mentors, real experiences, and real opportunities that match who they are and where they want to go.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Our name comes from the word "prosperity," but we define prosperity on our own terms. It is not just about income or status. It is about alignment. It is about waking up knowing that what you do matters to you and to the people around you.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>What We Do</h2>
            <p style={{ marginBottom: '20px' }}>
              Our work follows four stages, each designed to meet young people where they are and move them forward with clarity and confidence.
            </p>

            <div className="grid gap-4 mb-8">
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Discovery</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We help students understand themselves, their interests, and their strengths. This is the starting point. Without self-awareness, every other step is guesswork.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Exploration</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We expose students to career paths, industries, and role models they would not otherwise encounter. Through mentorship sessions, workplace visits, and curated content, we open doors to possibility.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Development</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We equip students with the practical skills they need to take the next step, from application writing to interview preparation to financial literacy.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Connection</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We link students to institutions, employers, and opportunities that match their goals. The right connection at the right time can change the course of a life.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Before and After Prospira-Edu</h2>
            <p style={{ marginBottom: '20px' }}>
              The impact of structured guidance is not theoretical. It shows up in the decisions students make, the confidence they carry, and the outcomes they achieve.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left" style={{ borderCollapse: 'collapse', fontFamily: B, fontSize: '15px' }}>
                <thead>
                  <tr style={{ backgroundColor: C.navy, color: 'white' }}>
                    <th className="px-4 py-3" style={{ fontFamily: H, fontWeight: 600 }}>Before</th>
                    <th className="px-4 py-3" style={{ fontFamily: H, fontWeight: 600 }}>After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="px-4 py-3">Unclear career direction</td>
                    <td className="px-4 py-3">Defined goals and a practical plan</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                    <td className="px-4 py-3">Limited exposure to role models</td>
                    <td className="px-4 py-3">Active mentor relationships</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="px-4 py-3">Subject choices based on pressure</td>
                    <td className="px-4 py-3">Subject choices aligned with strengths</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                    <td className="px-4 py-3">Low confidence in transitions</td>
                    <td className="px-4 py-3">Prepared and confident for next steps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Disconnection from opportunities</td>
                    <td className="px-4 py-3">Linked to institutions and employers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Why Now</h2>
            <p style={{ marginBottom: '16px' }}>
              Zimbabwe has one of the youngest populations in the world. The decisions being made by students right now will shape the country's workforce for decades. If we get guidance right, we unlock a generation of purpose-driven professionals. If we do not, we repeat the same cycle of wasted potential.
            </p>
            <p style={{ marginBottom: '16px' }}>
              The economy is shifting. New sectors are growing. Traditional paths are no longer guaranteed. Young people need more than a textbook. They need a map, a guide, and the confidence to walk their own route.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                We are not here to replace schools. We are here to complete the picture. Academic results matter, but they are only part of the story. Purpose, direction, and support are what turn results into real outcomes.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Join Us</h2>
            <p style={{ marginBottom: '16px' }}>
              Whether you are a student looking for direction, a parent wanting better for your child, a school ready to add real guidance to your offering, or a professional who wants to give back as a mentor, there is a place for you here.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We are building something that lasts. And we are doing it one young person at a time.
            </p>

            <div className="mt-10 text-center">
              <a href="/" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }}>
                Explore Our Purpose
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
