import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function EmployersSkills() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>
            Student Readiness · Students, Employers, Skills
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
            What Employers Look for Beyond Academic Results
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
              Many students believe that good grades equal good job prospects. The reality is more complicated. Academic results matter, but they are only one piece of the puzzle. Employers are looking for something more.
            </p>

            <p style={{ marginBottom: '20px' }}>
              When a hiring manager reviews a candidate, they are not just checking transcript numbers. They are asking: Can this person communicate? Can they solve problems? Can they work with others? Can they adapt when things change? Do they show initiative?
            </p>

            <p style={{ marginBottom: '20px' }}>
              These are the skills that determine long-term career success. And they are the skills that most schools do not teach explicitly.
            </p>

            <p style={{ marginBottom: '20px' }}>
              This guide breaks down what employers actually want, why it matters, and how you can build these skills starting today.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Skills That Matter Most
            </h2>

            <div className="rounded-xl overflow-hidden mb-8" style={{ border: `1px solid ${C.border}` }}>
              <div className="grid grid-cols-3 text-xs font-semibold" style={{ backgroundColor: C.navy, color: 'white', fontFamily: H }}>
                <div className="p-4">Skill</div>
                <div className="p-4">What It Means</div>
                <div className="p-4">Why Employers Value It</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Communication</div>
                <div className="p-4">Ability to express ideas clearly in writing and speech</div>
                <div className="p-4">Teams and clients need clear, honest communication</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Problem-Solving</div>
                <div className="p-4">Breaking down challenges and finding practical solutions</div>
                <div className="p-4">Every role involves obstacles that need creative responses</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Adaptability</div>
                <div className="p-4">Adjusting to new situations, tools, and expectations</div>
                <div className="p-4">Markets and technologies change fast; flexibility is survival</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Teamwork</div>
                <div className="p-4">Collaborating effectively with diverse groups of people</div>
                <div className="p-4">Almost no important work happens in isolation</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Initiative</div>
                <div className="p-4">Taking action without being told, identifying opportunities</div>
                <div className="p-4">Employers want people who move things forward, not wait</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Emotional Intelligence</div>
                <div className="p-4">Understanding and managing your own emotions and others'</div>
                <div className="p-4">Leadership, conflict resolution, and relationships depend on it</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Time Management</div>
                <div className="p-4">Prioritizing tasks, meeting deadlines, managing energy</div>
                <div className="p-4">Productivity and reliability are non-negotiable</div>
              </div>

              <div className="grid grid-cols-3 text-sm" style={{ backgroundColor: C.blueLight }}>
                <div className="p-4 font-semibold" style={{ fontFamily: H, color: C.navy }}>Digital Literacy</div>
                <div className="p-4">Comfort with technology, tools, and digital communication</div>
                <div className="p-4">Nearly every job now requires some level of digital competence</div>
              </div>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              Communication: The Skill That Multiplies Everything Else
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Communication is not just one skill among many. It is the skill that amplifies every other skill you have. You might be brilliant at solving problems, but if you cannot explain your solution to a team, your brilliance stays locked inside your head.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Employers report that communication gaps are among the top reasons new hires struggle. This includes written communication (emails, reports, messages), verbal communication (presentations, meetings, pitches), and listening (understanding what others need and expect).
            </p>

            <p style={{ marginBottom: '20px' }}>
              The good news is that communication is a learnable skill. Every conversation, every presentation, every written assignment is practice.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              Problem-Solving in the Real World
            </h2>

            <p style={{ marginBottom: '20px' }}>
              In school, problems usually have one right answer. In the workplace, problems are messy. They are open-ended. They require you to gather information, weigh options, consider constraints, and make decisions with incomplete data.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Employers value people who can look at a complex situation and say, "Here is what I think is going on, and here is what I suggest we do." That ability to diagnose and propose is far more valuable than the ability to memorize and recite.
            </p>

            <p style={{ marginBottom: '20px' }}>
              You can build this skill by practicing structured thinking. When you face a problem, break it down. What are the key facts? What are the options? What are the trade-offs? What would you recommend and why?
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              Adaptability: The Survival Skill
            </h2>

            <p style={{ marginBottom: '20px' }}>
              The world of work is changing faster than at any point in history. Jobs that exist today may not exist in ten years. New industries are emerging constantly. The ability to learn new skills, adopt new tools, and shift your approach is no longer optional. It is essential.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Employers look for candidates who demonstrate flexibility. Who have tried different things. Who show that they can pick up new knowledge quickly. Who do not freeze when the playbook changes.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Adaptability is not just about technical skills. It is about mindset. Are you curious? Are you open to feedback? Are you willing to admit when you do not know something and then go learn it?
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              How to Build These Skills Starting Now
            </h2>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Join teams and projects.</strong> School clubs, community groups, volunteer work, and group projects are all opportunities to practice teamwork, communication, and leadership. Say yes to collaborative work.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Take on challenges that scare you slightly.</strong> Give a presentation. Organize an event. Lead a project. Start a small business. Growth happens at the edge of your comfort zone.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Get feedback and act on it.</strong> Ask teachers, mentors, and peers for honest feedback on your communication, your work, and your approach. Then actually change based on what they tell you.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Learn to write well.</strong> Writing forces clear thinking. Start a blog, write reports, or just practice writing emails that are clear, concise, and professional. It matters more than you think.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Build digital skills.</strong> Learn to use common tools: spreadsheets, presentation software, project management apps, communication platforms. These are not extras. They are expectations.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Reflect regularly.</strong> After every experience, ask yourself: What did I learn? What would I do differently? What skill did I improve? Reflection turns experience into growth.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>
                Prospira-Edu Perspective
              </p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Grades open doors. Skills keep you in the room. The students who invest in building these abilities alongside their academic work are the ones who stand out when it matters most.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/portal"
                className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: C.emerald, fontFamily: H }}
              >
                Explore Our Workshops
              </a>
            </div>

          </div>
        </PageContainer>
      </section>
    </div>
  )
}