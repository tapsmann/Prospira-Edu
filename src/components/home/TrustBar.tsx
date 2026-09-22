import { H, B, C } from '@/constants/theme'

const stats = [
  { num: '4', label: 'Study regions covered' },
  { num: '8', label: 'Question guided planner' },
  { num: '16', label: 'Task arrival checklist' },
  { num: '1:1', label: 'Adviser support' },
]

export function TrustBar() {
  return (
    <div className="w-full" style={{ backgroundColor: C.navy, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="layout-container grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ paddingTop: '28px', paddingBottom: '28px' }}>
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-bold text-3xl text-white" style={{ fontFamily: H }}>{s.num}</div>
            <div className="text-sm mt-1" style={{ fontFamily: B, color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
