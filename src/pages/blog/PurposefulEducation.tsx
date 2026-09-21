import { H, B, C } from '@/constants/theme'
import { PageContainer } from '@/components/common'

export function PurposefulEducation() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-22" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="sm">
          <p className="text-xs uppercase tracking-[.16em] mb-4" style={{ color: C.emeraldL, fontFamily: B }}>Prospira-Edu Stories · Mission, Vision, Values</p>
          <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            Our Commitment to Purposeful Education Pathways
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>Published by Prospira-Edu</p>
        </PageContainer>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <PageContainer maxWidth="sm">
          <div style={{ fontFamily: B, color: C.bodyText, fontSize: '16px', lineHeight: 1.85 }}>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginBottom: '12px' }}>What We Believe</h2>
            <p style={{ marginBottom: '16px' }}>
              At Prospira-Edu, everything we do starts with a set of beliefs. These are not slogans. They are the foundation of every programme we run, every partnership we form, and every student we reach.
            </p>

            <div className="grid gap-4 mb-8">
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Every Young Person Has a Purpose</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  We do not believe in the idea that some people are meant for great things and others are not. Every student has something to offer. The job of education is to help them find it, not filter them out.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>There Is More Than One Path</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  The idea that university is the only route to a successful life is outdated. Trades, entrepreneurship, vocational training, and creative careers are all valid and valuable. We help students see the full picture.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Skills Matter as Much as Qualifications</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  A certificate proves you studied. Skills prove you can do the work. We push for a balance, helping students develop both the academic foundation and the practical abilities employers and communities actually need.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Community Counts</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  No young person figures it out alone. Families, teachers, mentors, and peers all play a role. We design our work to involve the whole community, not just the student sitting in front of us.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: C.blueLight, borderLeft: `4px solid ${C.blue}` }}>
                <h4 style={{ fontFamily: H, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>Access for All</h4>
                <p style={{ fontFamily: B, fontSize: '15px', lineHeight: 1.7 }}>
                  Guidance should not depend on where you live or how much your parents earn. We work to reach students in every district, every school type, and every background. Cost should never be the reason a young person stays lost.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                These beliefs are not up for debate. They are the reason we exist. If you agree with them, you already understand what we are about. If you do not, we welcome the conversation.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>Our Commitments</h2>
            <p style={{ marginBottom: '24px' }}>
              Beliefs without action are just words. Here is what we commit to, and to whom.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>To Students</h3>
            <p style={{ marginBottom: '16px' }}>
              We commit to giving you honest information, real mentors, and practical support. We will not tell you what to do. We will help you figure out what you want to do and how to get there. Your goals are yours, not ours. Our job is to make sure you have what you need to reach them.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>To Parents</h3>
            <p style={{ marginBottom: '16px' }}>
              We commit to keeping you in the conversation. We know you want the best for your child. We also know that what you think is best may need updating. We will help you understand the options, the changes in the job market, and how to support your child without pushing them in the wrong direction.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>To Schools</h3>
            <p style={{ marginBottom: '16px' }}>
              We commit to working alongside you, not around you. We know your staff are stretched. We know your resources are limited. That is why we bring the tools, the training, and the structure. Our goal is to make your school a place where students do not just learn, but prepare for life after school.
            </p>

            <h3 style={{ fontFamily: H, fontWeight: 600, fontSize: '20px', color: C.navy, marginTop: '28px', marginBottom: '12px' }}>To Employers</h3>
            <p style={{ marginBottom: '16px' }}>
              We commit to sending you graduates who are not just qualified, but ready. We want to close the gap between what schools teach and what the workplace demands. When we do our job well, you spend less time on remedial training and more time on growth.
            </p>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>The Future We Are Building</h2>
            <p style={{ marginBottom: '16px' }}>
              We are building a Zimbabwe where no young person has to guess their way into adulthood. Where every student has access to the guidance they need to make informed decisions. Where schools are supported, not burdened. Where parents are part of the solution. Where employers find talent that is prepared and motivated.
            </p>
            <p style={{ marginBottom: '16px' }}>
              This is not a dream. It is a plan. And it is already in motion.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We started with a small group of students in Harare. Today, we work with schools across multiple provinces. Our mentor network is growing. Our programmes are evolving. And the results speak for themselves: students who once had no direction are now walking paths they chose with clarity and confidence.
            </p>
            <p style={{ marginBottom: '16px' }}>
              But we are not done. Not even close. There are still too many students without access, too many schools without support, and too many parents without the information they need. That is why we are scaling. That is why we are building partnerships. And that is why we need you.
            </p>

            <div className="rounded-xl p-6" style={{ backgroundColor: C.navy, color: 'white' }}>
              <p className="mb-2" style={{ fontFamily: H, fontWeight: 600, fontSize: '18px' }}>Prospira-Edu Perspective</p>
              <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Purposeful education is not a trend. It is a requirement. The world is changing fast, and young people need more than content. They need context. They need direction. They need a reason to care about what they are learning. That is what we provide.
              </p>
            </div>

            <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: '24px', color: C.navy, marginTop: '40px', marginBottom: '12px' }}>How You Can Be Part of It</h2>
            <p style={{ marginBottom: '16px' }}>
              This work does not happen in isolation. It happens when students engage, parents listen, schools open their doors, and professionals give their time. Every person who joins this mission makes it stronger.
            </p>
            <p style={{ marginBottom: '16px' }}>
              If you believe that education should lead to purpose, not just a certificate, then you already belong here.
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
