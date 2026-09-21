import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function MeetOurMentors() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Prospira-Edu Stories · Mentors, Team, Inspiration</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            Meet the Mentors Supporting Zimbabwe's Next Generation
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginBottom: '12px' }}>Why Mentorship Matters</h2>
            <p style={{ marginBottom: '16px' }}>
              A mentor is not just someone who gives advice. A mentor is someone who has walked a path and can help you see the turns before you reach them. For young people in Zimbabwe, mentorship fills a gap that classrooms alone cannot cover.
            </p>
            <p style={{ marginBottom: '16px' }}>
              When a student sits across from someone who works in a field they are curious about, something shifts. The abstract becomes real. The distant becomes possible. Questions get asked that would never come up in a textbook. And slowly, a sense of direction begins to form.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Research consistently shows that young people with access to mentors make more informed decisions, stay engaged longer, and transition more successfully into the workforce. It is one of the highest-impact interventions available, and it costs far less than people think.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Mentorship is not a luxury. It is a necessity. Every young person deserves at least one adult outside their family who believes in their potential and can show them what is possible. That is what our mentors do.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>Meet Our Mentors</h2>
            <p style={{ marginBottom: '24px' }}>
              Our mentors come from different backgrounds, but they share one thing in common: a commitment to helping young people find their way. Here are a few of the people making this work happen.
            </p>

            <div className="grid gap-5 mb-8">
              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Tapiwa M.</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Technology</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  Tapiwa works in software development and has spent the last six years building systems for businesses across Southern Africa. He mentors students who are interested in tech but do not know where to start. His sessions focus on demystifying the industry and showing that a career in technology is accessible to anyone willing to learn.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Chenai K.</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Career Guidance</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  Chenai is a career development specialist who has worked with universities and secondary schools across Zimbabwe. She helps students understand how their interests, values, and skills connect to real career options. Her approach is practical, grounded, and focused on what each student actually wants from their future.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Tafadzwa S.</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Trades</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  Tafadzwa is a qualified artisan and small business owner. He works with students who are exploring technical and vocational pathways. His goal is to show that trades are not a fallback. They are a foundation. He shares his own journey, including the challenges and the wins, to help students see what is possible.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '18px', color: C.navy, marginBottom: '4px' }}>Nomsa M.</h4>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '14px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Parent Advisor</p>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  Nomsa works directly with parents and guardians. She helps them understand how to support their children's career decisions without imposing their own fears or assumptions. Her sessions are honest, warm, and designed to build trust between generations.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>What Mentors Say</h2>
            <p style={{ marginBottom: '20px' }}>
              We asked our mentors why they do this work. Their answers say more than we ever could.
            </p>

            <div className="grid gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "When I was 16, I did not know what a software developer even did. If someone had shown me, I would have started years earlier. That is why I mentor now. I want to be the person I did not have."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Tapiwa M., Technology Mentor</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "The students I work with do not need someone to tell them what to do. They need someone to help them think it through. That is the difference between guidance and direction."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Chenai K., Career Guidance Mentor</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "I tell every student I meet: there is dignity in every honest trade. We need to stop treating vocational work as a second option. It is a first choice for many, and it should be respected."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Tafadzwa S., Trades Mentor</p>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
                <p className="mb-3" style={{ fontFamily: B, fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, color: C.bodyText }}>
                  "Parents want the best for their children. But sometimes what they think is best is based on their own experiences, not their child's reality. I help bridge that gap."
                </p>
                <p style={{ fontFamily: H, fontWeight: 600, fontSize: '14px', color: C.navy }}>Nomsa M., Parent Advisor</p>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Become a Mentor</h2>
            <p style={{ marginBottom: '16px' }}>
              We are always looking for professionals who want to give back. You do not need to be a teacher or a counsellor. You just need to be willing to share your experience and listen. Our mentors commit to a few hours a month, and the impact lasts years.
            </p>
            <p style={{ marginBottom: '16px' }}>
              If you work in a field you care about and want to help the next generation navigate it, we would love to hear from you.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Every mentor who joins our network makes the system stronger. They bring real-world insight that classrooms cannot replicate. And they show young people that there are adults out there who care about their future, not just their grades.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a href="/partners" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }}>
                Join Our Mentor Network
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
