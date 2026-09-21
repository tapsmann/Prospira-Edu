import { B } from '@/constants/theme'

interface BadgeProps {
  label: string
  color: string
}

export function Badge({ label, color }: BadgeProps) {
  return (
    <span
      className="text-xs font-medium px-2.5 py-0.5 rounded-full text-white"
      style={{ backgroundColor: color, fontFamily: B }}
    >
      {label}
    </span>
  )
}