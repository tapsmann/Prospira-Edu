import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function PartnershipModel() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Institutional Partnerships · Schools, Partnerships, Impact</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            How Our Partnership Model Supports Schools and Learners
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginBottom: '12px' }}>Why Schools Need Us</h2>
            <p style={{ marginBottom: '16px' }}>
              Schools in Zimbabwe are doing their best with limited resources. Teachers are stretched thin, career guidance is often informal, and students are expected to make major life decisions with very little support. The result is a gap between what schools deliver and what students actually need.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Prospira-Edu does not come in to replace what schools are doing. We come in to fill the gaps they cannot fill on their own. Our partnership model is built around four levels, each designed to add value without adding burden.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                We believe that every school can become a place where students do not just pass exams, but find direction. That takes more than curriculum. It takes partnership.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>Four Levels of Partnership</h2>
            <p style={{ marginBottom: '24px' }}>
              Our model is flexible. Schools can engage at the level that fits their needs and capacity. Each level builds on the last, creating a system that grows with the school.
            </p>

            <div className="grid gap-5 mb-8">
              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Level 1: Career Awareness</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Foundation</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We introduce students to a wide range of career options through assemblies, printed materials, and short sessions. The goal is simple: show students that there are more paths than they think. This level works for schools that are just starting to integrate career guidance into their culture.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Level 2: Student Support</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Engagement</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We run structured career guidance sessions with small groups of students. This includes self-assessment activities, mentor matching, and personalised career plans. Students leave with something they can act on, not just something they heard.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Level 3: Teacher Development</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Capacity Building</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We train teachers to deliver career guidance with confidence. This includes workshops, toolkits, and ongoing support. When teachers are equipped, the school's capacity to guide students grows long after our direct involvement ends.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Level 4: Parent Engagement</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Whole Community</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We bring parents into the conversation. Through dedicated sessions, we help families understand how to support their children's career decisions. When parents are informed, students face less resistance at home and more encouragement.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>What Schools Are Saying</h2>
            <p style={{ marginBottom: '20px' }}>
              The schools we work with tell us the difference is visible. Here is what they have shared.
            </p>

            <div className="grid gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "Before Prospira-Edu, our career guidance was one assembly a year. Now our students have real mentors, real plans, and real confidence. The change has been remarkable."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Headmistress, Harare Secondary School</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "The teacher training was exactly what we needed. Our staff now feel equipped to handle career conversations, and it has changed the tone of our entire school."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Deputy Head, Mutare High School</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "The parent sessions opened our eyes. We did not realise how much our own fears were affecting our children's choices. Prospira-Edu helped us step back and listen."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Parent Representative, Bulawayo School</p>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Partnership Benefits</h2>
            <p style={{ marginBottom: '20px' }}>
              Schools that partner with Prospira-Edu gain more than a service. They gain a system that supports students, teachers, and parents at the same time.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left" style={{ borderCollapse: 'collapse', fontFamily: B, fontSize: '15px' }}>
                <thead>
                  <tr style={{ backgroundColor: C.navy, color: 'white' }}>
                    <th className="px-4 py-3" style={{ fontFamily: H, fontWeight: 600 }}>Benefit</th>
                    <th className="px-4 py-3" style={{ fontFamily: H, fontWeight: 600 }}>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="px-4 py-3">Structured career guidance</td>
                    <td className="px-4 py-3">Students make informed subject and career choices</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                    <td className="px-4 py-3">Mentor matching</td>
                    <td className="px-4 py-3">Students connect with real professionals in their fields of interest</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="px-4 py-3">Teacher capacity building</td>
                    <td className="px-4 py-3">Staff can sustain guidance long after the programme ends</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                    <td className="px-4 py-3">Parent engagement</td>
                    <td className="px-4 py-3">Families support rather than block student decisions</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="px-4 py-3">Student retention and performance</td>
                    <td className="px-4 py-3">Engaged students stay longer and achieve more</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">School reputation</td>
                    <td className="px-4 py-3">Schools known for producing purpose-driven graduates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Getting Started</h2>
            <p style={{ marginBottom: '16px' }}>
              We keep the process simple. Schools reach out, we discuss their needs, and we design a programme that fits. There is no one-size-fits-all package. Every school is different, and our partnerships reflect that.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Whether you are a government school in a rural district or a private institution in the city, our model adapts to your context. The starting point is always the same: a conversation about what your students need.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                The schools that partner with us are not just buying a service. They are investing in their students' futures. And the returns show up in the decisions their learners make long after they leave the classroom.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a href="/partners" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }}>
                Contact Our Schools Team
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
