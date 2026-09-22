import { Hero, PathwaysSection, ValuesSection, TestimonialsSection, FinalCTA, HowItWorks, TrustBar } from '@/components/home'
import { PageContainer } from '@/components/common'
import { C } from '@/constants/theme'

export function HomePage() {
  return (
    <div className="w-full">
      <Hero />

      <TrustBar />

      <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
        <PageContainer>
          <PathwaysSection />
        </PageContainer>
      </section>

      <section className="w-full site-section" style={{ backgroundColor: 'white' }}>
        <PageContainer>
          <HowItWorks />
        </PageContainer>
      </section>
      
      <section className="w-full site-section" style={{ backgroundColor: C.navy }}>
        <PageContainer>
          <ValuesSection />
        </PageContainer>
      </section>
      
      <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
        <PageContainer>
          <TestimonialsSection />
        </PageContainer>
      </section>
      
      <section className="w-full site-section" style={{ backgroundColor: C.navyDark }}>
        <PageContainer>
          <FinalCTA />
        </PageContainer>
      </section>
    </div>
  )
}
