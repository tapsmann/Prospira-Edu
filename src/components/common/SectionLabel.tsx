import { B, C } from '@/constants/theme'

interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p 
      className="text-sm font-medium mb-3" 
      style={{ color: C.emeraldL, fontFamily: B, letterSpacing: '0.02em' }}
    >
      {children}
    </p>
  )
}