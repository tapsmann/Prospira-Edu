import { ReactNode } from 'react'
import { C } from '@/constants/theme'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
  border?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  border = true,
  onClick,
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: 'p-0',
  }

  return (
    <div
      className={`
        rounded-2xl bg-white transition-all duration-300
        ${paddingClasses[padding]}
        ${border ? `border` : ''}
        ${hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        borderColor: border ? C.border : 'transparent',
        boxShadow: hover ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}