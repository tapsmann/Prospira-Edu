import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function PathwaysGuide() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>
            Pathways · Students, Career Guidance, Pathways
          </p>
          <h1
            style={{
              fontFamily: H,
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Trades, Technology, or University: Which Pathway Is Right for You?
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
            Published by Prospira-Edu
          </p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>

            <p style={{ marginBottom: '20px' }}>
              Choosing what comes after high school is one of the biggest decisions you will ever make. The pressure is real. Parents have expectations. Friends are choosing paths. Social media makes everyone else's choices look easy.
            </p>

            <p style={{ marginBottom: '20px' }}>
              But here is the truth most people will not tell you: there is no single right path. There is only the right path for you. And finding it requires honest self-reflection, not comparison.
            </p>

            <p style={{ marginBottom: '20px' }}>
              This guide breaks down the three main pathways available to you: university, technology and digital skills, and trades and vocational training. Each has strengths. Each has challenges. The key is understanding which one aligns with who you are, what you value, and where you want to go.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Three Pathways at a Glance
            </h2>

            <div className="rounded-xl overflow-hidden mb-8" style={{ border: `1px solid ${C.border}` }}>
              <div className="grid grid-cols-4 text-xs font-semibold" style={{ backgroundColor: C.navy, color: 'white', fontFamily: H }}>
                <div className="p-4">Factor</div>
                <div className="p-4">University</div>
                <div className="p-4">Technology</div>
                <div className="p-4">Trades</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Duration</div>
                <div className="p-4">3 to 5+ years</div>
                <div className="p-4">6 months to 2 years</div>
                <div className="p-4">1 to 3 years</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Cost</div>
                <div className="p-4">High</div>
                <div className="p-4">Low to Medium</div>
                <div className="p-4">Low to Medium</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Entry Barrier</div>
                <div className="p-4">High (A-Level requirements)</div>
                <div className="p-4">Low (portfolio matters)</div>
                <div className="p-4">Low to Medium</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Job Market</div>
                <div className="p-4">Competitive</div>
                <div className="p-4">Growing rapidly</div>
                <div className="p-4">Consistent demand</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Income Potential</div>
                <div className="p-4">Varies widely</div>
                <div className="p-4">High in demand areas</div>
                <div className="p-4">Stable, growing with skill</div>
              </div>

              <div className="grid grid-cols-4 text-sm" style={{ backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Flexibility</div>
                <div className="p-4">Moderate</div>
                <div className="p-4">High (remote work options)</div>
                <div className="p-4">Moderate</div>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The University Pathway
            </h2>

            <p style={{ marginBottom: '20px' }}>
              University remains the most traditional route after high school. It offers deep academic knowledge, recognized qualifications, and access to professional fields like medicine, law, engineering, and academia.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Strengths:
            </p>

            <p style={{ marginBottom: '8px' }}>
              Qualifications are widely recognized and often required for regulated professions.
            </p>
            <p style={{ marginBottom: '8px' }}>
              You gain deep theoretical knowledge in your field of study.
            </p>
            <p style={{ marginBottom: '8px' }}>
              University networks can open doors throughout your career.
            </p>
            <p style={{ marginBottom: '20px' }}>
              The experience builds critical thinking, research skills, and intellectual discipline.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Challenges:
            </p>

            <p style={{ marginBottom: '8px' }}>
              It is expensive. Tuition, accommodation, and materials add up quickly.
            </p>
            <p style={{ marginBottom: '8px' }}>
              It takes time. Most degrees require a minimum of three years, many require more.
            </p>
            <p style={{ marginBottom: '8px' }}>
              The job market for graduates is competitive. A degree alone does not guarantee employment.
            </p>
            <p style={{ marginBottom: '20px' }}>
              There is a gap between what universities teach and what employers actually need.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                Who thrives here?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                Students who love learning for its own sake, who are drawn to research and theory, and who have clear professional goals that require a degree. Also, students who are patient and willing to invest time upfront for long-term returns.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Technology Pathway
            </h2>

            <p style={{ marginBottom: '20px' }}>
              The technology sector is one of the fastest-growing industries in Africa and globally. Skills in coding, data analysis, digital marketing, cybersecurity, and AI are in high demand. You do not need a four-year degree to enter this field.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Strengths:
            </p>

            <p style={{ marginBottom: '8px' }}>
              Entry is fast. Many people start working in tech within six to twelve months of learning.
            </p>
            <p style={{ marginBottom: '8px' }}>
              The cost of learning is relatively low. Online courses, bootcamps, and self-study are viable options.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Remote work is common, which means you can work for international companies from Zimbabwe.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Portfolio and skills matter more than formal qualifications.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Challenges:
            </p>

            <p style={{ marginBottom: '8px' }}>
              The field changes fast. You need to keep learning constantly.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Some roles require specific certifications or degrees.
            </p>
            <p style={{ marginBottom: '8px' }}>
              The learning curve can be steep if you have no prior exposure.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Freelancing and contract work can be unstable at the start.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                Who thrives here?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                Self-starters who enjoy problem-solving and building things. People who are comfortable learning independently and who adapt quickly to new tools and methods. If you enjoy seeing the results of your work in real time, tech might be your path.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Trades and Vocational Pathway
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Skilled trades include electrical work, plumbing, carpentry, automotive repair, welding, and construction. Vocational training covers areas like hospitality, agriculture, and healthcare support. These paths are often overlooked, but they offer real, tangible value.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Strengths:
            </p>

            <p style={{ marginBottom: '8px' }}>
              Demand is consistent. People always need electricity, water, buildings, and maintenance.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Training is hands-on and practical. You learn by doing.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Start-up costs for independent work are often lower than other fields.
            </p>
            <p style={{ marginBottom: '20px' }}>
              You can build a business around your skills and create employment for others.
            </p>

            <p style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '12px' }}>
              Challenges:
            </p>

            <p style={{ marginBottom: '8px' }}>
              Social stigma persists in some communities, where trades are seen as less prestigious.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Physical demands can be intense, and some trades carry safety risks.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Formal certification can be inconsistent across regions.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Scaling beyond self-employment requires business skills.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                Who thrives here?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                People who like working with their hands, solving practical problems, and seeing visible results from their work. If you prefer action over theory and want to start earning sooner rather than later, this path deserves serious consideration.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              How to Decide
            </h2>

            <p style={{ marginBottom: '20px' }}>
              The best pathway is the one that fits your strengths, your values, and your circumstances. Here are some guiding questions:
            </p>

            <p style={{ marginBottom: '16px' }}>
              Do you prefer learning through reading and research, or through hands-on practice?
            </p>

            <p style={{ marginBottom: '16px' }}>
              Do you need to start earning soon, or can you afford to invest several years in study?
            </p>

            <p style={{ marginBottom: '16px' }}>
              Do you want a structured career with clear progression, or flexibility and independence?
            </p>

            <p style={{ marginBottom: '16px' }}>
              Are you willing to keep learning new skills throughout your career, or do you prefer mastering one area deeply?
            </p>

            <p style={{ marginBottom: '20px' }}>
              There is no wrong answer. The goal is alignment, not prestige.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>
                Prospira-Edu Perspective
              </p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                The students who succeed are not the ones who pick the most impressive path. They are the ones who pick the path that matches who they are. Self-awareness is the foundation of every good career decision.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/portal"
                className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: C.emerald, fontFamily: H }}
              >
                Take the Purpose Quiz
              </a>
            </div>

          </div>
        </PageContainer>
      </section>
    </div>
  )
}