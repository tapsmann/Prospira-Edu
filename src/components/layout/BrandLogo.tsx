import { H, B, C } from '@/constants/theme'

interface BrandLogoProps { dark?: boolean; compact?: boolean }

export function BrandLogo({ dark = false, compact = false }: BrandLogoProps) {
  const ink = dark ? 'white' : C.navy
  return <div className="flex items-center gap-2.5 text-left" aria-label="Prospira-Edu — Widening horizons. Shaping purpose.">
    <svg viewBox="0 0 64 48" aria-hidden="true" style={{ width: compact ? 32 : 40, height: compact ? 28 : 34, fill: ink }}><path d="M32 2 2 14l30 12 24-9.6V32h4V14L32 2Zm-15 27v9.2C17 44 23.7 47 32 47s15-3 15-8.8V25L32 31 17 25v4Z" /></svg>
    <span><span className="block leading-none tracking-[.08em]" style={{ fontFamily: H, color: ink, fontWeight: 700, fontSize: compact ? '15px' : '20px' }}>PROSPIRA-EDU</span>{!compact && <span className="block mt-1 uppercase tracking-[.18em]" style={{ fontFamily: B, color: dark ? 'rgba(255,255,255,.65)' : C.blue, fontSize: '7px', fontWeight: 600 }}>Widening horizons. Shaping purpose.</span>}</span>
  </div>
}
