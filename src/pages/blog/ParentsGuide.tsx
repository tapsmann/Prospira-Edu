import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function ParentsGuide() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>
            Parent Guidance · Parents, Family, Career Decisions
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
            A Parent's Guide to Supporting Career Decisions
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
              Your child's career decision is one of the most important crossroads they will ever face. In Zimbabwe and across Africa, families play a central role in shaping young people's futures. The pressure to choose the right path can be overwhelming, both for the student and for the parent who wants the best for them.
            </p>

            <p style={{ marginBottom: '20px' }}>
              The challenge is this: most parents want to help, but they are not sure how. The world of work has changed dramatically. Jobs that did not exist ten years ago are now in high demand. Industries are shifting. The skills employers want are different from the skills that were valued a generation ago.
            </p>

            <p style={{ marginBottom: '20px' }}>
              This guide will help you navigate that complexity. It will show you how to support your child's career decisions without taking over. It will give you practical tools for having the right conversations. And it will help you avoid the common mistakes that can push your child toward a path that is not right for them.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              Your Role: Guide, Not Director
            </h2>

            <p style={{ marginBottom: '20px' }}>
              There is a fundamental difference between guiding a decision and making a decision for someone. When you guide, you provide information, perspective, and support. When you direct, you impose your own preferences, fears, and assumptions onto your child's future.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Research consistently shows that young people who feel supported in their decision-making process, rather than controlled, make better long-term choices. They report higher levels of career satisfaction and lower levels of regret. They are more likely to persist through challenges because they own their decisions.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Your child needs you to be a sounding board, not a decision-maker. They need you to ask questions, not give orders. They need you to share your experience without imposing your limitations.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>
                Prospira-Edu Perspective
              </p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                The most powerful thing a parent can say is not "you should study this." It is "tell me what matters to you, and let us figure this out together." That shift changes everything.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Key Conversations to Have
            </h2>

            <p style={{ marginBottom: '12px' }}>
              The right conversation is more valuable than the right advice. Here are the questions that actually move the needle:
            </p>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-3" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                1. What problems do you want to solve?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                This question moves beyond job titles and into purpose. Young people who connect their careers to a larger mission are more resilient and more satisfied. Ask your child what bothers them about the world. What would they fix if they could?
              </p>
            </div>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-3" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                2. What are you naturally good at?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                Strengths are not the same as interests. Your child might enjoy music but be better at analytical thinking. Help them identify what comes easily to them, not just what they enjoy doing in their free time.
              </p>
            </div>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-3" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                3. What does your ideal day look like?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                Do they want to work with people or with data? Do they want to be outdoors or in an office? Do they want structure or variety? These lifestyle questions matter more than most people realize.
              </p>
            </div>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}>
              <p className="mb-3" style={{ fontFamily: H, fontWeight: 600, fontSize: '16px', color: C.navy }}>
                4. What are you willing to sacrifice?
              </p>
              <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7 }}>
                Every career path requires trade-offs. Medicine demands years of study. Entrepreneurship demands financial risk. Creative fields demand persistence through uncertainty. Help your child understand that choosing a path means accepting its costs.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              Avoiding Common Parenting Pitfalls
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Good intentions can lead to harmful outcomes when they are not paired with awareness. Here are the mistakes we see most often:
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Projecting your own unfulfilled dreams.</strong> Many parents want their children to achieve what they could not. This is understandable, but it is not fair. Your child is not a vehicle for your second chance. Their life is their own.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Equating prestige with success.</strong> A law degree or a medical degree is impressive, but it is not the only path to a meaningful life. Pushing your child toward a prestigious field they do not care about often leads to burnout and resentment.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Ignoring the modern economy.</strong> The job market has changed. Technology, digital media, renewable energy, and entrepreneurship are creating opportunities that did not exist before. A narrow view of what counts as a "real job" can close doors.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Dismissing trades and technical careers.</strong> In many African contexts, there is a bias toward white-collar work. But skilled trades, technical certifications, and vocational careers can offer stability, independence, and strong earning potential.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Rushing the process.</strong> Career clarity does not happen overnight. Young people need time to explore, to fail, and to learn. Pressuring them to have everything figured out by a certain age creates anxiety, not clarity.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              The Zimbabwean Context
            </h2>

            <p style={{ marginBottom: '20px' }}>
              In Zimbabwe, career decisions carry additional layers of complexity. Economic uncertainty means that some traditional career paths are less secure than they used to be. The formal job market is competitive, and young people need to be adaptable and resourceful.
            </p>

            <p style={{ marginBottom: '20px' }}>
              At the same time, Zimbabwe is a country of enormous opportunity. Entrepreneurship is thriving. The digital economy is growing. Regional integration through the African Continental Free Trade Area is opening new markets. Young people who understand these trends can position themselves ahead of the curve.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Parents who stay informed about these shifts are better equipped to support their children. This does not mean you need to be an expert in every industry. It means you need to be curious. Read about the economy. Talk to professionals in different fields. Understand that the world your child is entering is different from the one you entered.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>
                Prospira-Edu Perspective
              </p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                The parents who have the most impact are not the ones who have all the answers. They are the ones who ask the right questions and create a safe space for honest conversation. That is what your child needs from you.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              How to Stay Involved Without Taking Over
            </h2>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Set regular check-ins.</strong> Create a rhythm for career conversations. Not every day, not every week, but regularly enough that your child knows the door is open. A monthly dinner conversation about goals and progress can be powerful.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Connect them with professionals.</strong> Your network is one of your greatest assets. Introduce your child to people in fields they are considering. A twenty-minute conversation with a working professional can be more informative than months of research.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Support exploration, not just decisions.</strong> It is okay for your child to try something and change their mind. Exploration is not wasted time. It is the process by which clarity develops.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Be honest about what you do not know.</strong> You do not have to have all the answers. Saying "I am not sure, but let us find out together" is more helpful than pretending to know something you do not.
            </p>

            <p style={{ marginBottom: '20px' }}>
              <strong style={{ fontFamily: H, fontWeight: 600 }}>Celebrate effort, not just outcomes.</strong> When your child takes steps to explore their options, acknowledge that. The process matters as much as the result.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '16px' }}>
              When to Seek Outside Help
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Sometimes, despite your best efforts, the conversation stalls. Your child may be overwhelmed, disengaged, or simply unable to articulate what they want. That is when outside support can make a difference.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Career mentors, counselors, and structured programs like Prospira-Edu can provide the framework that family conversations sometimes lack. A neutral third party can ask questions that a parent cannot, and can provide tools that go beyond conversation.
            </p>

            <p style={{ marginBottom: '20px' }}>
              Seeking help is not a sign of failure. It is a sign of commitment. It means you care enough to bring in whatever resources your child needs.
            </p>

            <div className="mt-10 text-center">
              <a
                href="/parents"
                className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: C.emerald, fontFamily: H }}
              >
                Talk to a Parent Advisor
              </a>
            </div>

          </div>
        </PageContainer>
      </section>
    </div>
  )
}