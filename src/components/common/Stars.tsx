import { C } from '@/constants/theme'

export function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: C.gold, fontSize: '13px' }}>★</span>
      ))}
    </div>
  )
}