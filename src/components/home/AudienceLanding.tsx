import { BrandLogo } from '@/components/layout/BrandLogo'
import { H, B, C } from '@/constants/theme'

type Audience = 'student' | 'partner' | 'parent'
interface AudienceLandingProps { onChoose: (audience: Audience) => void }

const audiences: { key: Audience; eyebrow: string; title: string; description: string }[] = [
  { key: 'student', eyebrow: 'I am a student', title: 'Find your direction', description: 'Discover a pathway shaped around your strengths, ambitions, and future.' },
  { key: 'partner', eyebrow: 'I represent an institution', title: 'Partner with purpose', description: 'Connect your school, college, or university with motivated learners.' },
  { key: 'parent', eyebrow: 'I am a parent or guardian', title: 'Support their next step', description: 'Find clear guidance and practical support for your child’s journey.' },
]

export function AudienceLanding({ onChoose }: AudienceLandingProps) {
  return <section className="min-h-screen relative overflow-hidden" style={{ background: `radial-gradient(circle at 82% 22%, ${C.blue} 0%, ${C.navy} 33%, ${C.navyDark} 100%)` }}>
    <div className="absolute -right-28 top-20 w-140 h-140 rounded-full border" style={{ borderColor: 'rgba(184,212,250,.12)' }} />
    <div className="absolute right-20 top-44 w-85 h-85 rounded-full border" style={{ borderColor: 'rgba(184,212,250,.16)' }} />
    <div className="absolute right-[18%] top-[35%] w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(184,212,250,.1)' }} />
    <div className="relative z-10 layout-container min-h-screen flex flex-col">
      <header className="flex items-center justify-between py-6 border-b" style={{ borderColor: 'rgba(255,255,255,.14)' }}><BrandLogo dark /><span className="hidden sm:block text-xs uppercase tracking-[.2em]" style={{ color: 'rgba(255,255,255,.62)', fontFamily: B }}>Your future, made clearer</span></header>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,.88fr)] gap-12 lg:gap-20 items-center py-14 md:py-20">
        <div><p className="text-xs uppercase tracking-[.22em] mb-6" style={{ color: '#B8D4FA', fontFamily: B }}>Welcome to Prospira-Edu</p><h1 className="text-white max-w-2xl mb-6" style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1.02 }}>Your next step starts with the right question.</h1><p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,.7)', fontFamily: B }}>Choose the experience that reflects why you are here. We’ll guide you to the information, people, and possibilities that matter most.</p><div className="mt-10 flex items-center gap-3"><span className="h-px w-12" style={{ backgroundColor: '#B8D4FA' }} /><span className="text-xs uppercase tracking-[.16em]" style={{ color: 'rgba(255,255,255,.55)', fontFamily: B }}>One platform. Three perspectives.</span></div></div>
        <aside className="p-1 sm:p-2"><p className="px-4 mb-4 text-xs uppercase tracking-[.16em]" style={{ color: '#B8D4FA', fontFamily: B }}>Choose your experience</p><div className="space-y-3">{audiences.map((audience) => <button key={audience.key} onClick={() => onChoose(audience.key)} className="w-full text-left rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1" style={{ backgroundColor: 'transparent', border: '1px solid rgba(184,212,250,.34)' }}><div><p className="text-xs uppercase tracking-[.13em] mb-2" style={{ color: '#B8D4FA', fontFamily: B }}>{audience.eyebrow}</p><h2 className="text-xl text-white mb-2" style={{ fontFamily: H, fontWeight: 700 }}>{audience.title}</h2><p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.68)', fontFamily: B }}>{audience.description}</p></div><span className="inline-block mt-4 text-sm font-semibold text-white" style={{ fontFamily: B }}>Continue <span aria-hidden="true">→</span></span></button>)}</div></aside>
      </main>
      <footer className="py-6 flex justify-between gap-5 text-xs" style={{ color: 'rgba(255,255,255,.45)', fontFamily: B }}><span>Widening horizons. Shaping purpose.</span><span className="hidden sm:block">Career guidance for every next step.</span></footer>
    </div>
  </section>
}
