import { ReactNode } from 'react'
import { H, C } from '@/constants/theme'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'emerald'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: string
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: C.emerald,
          color: 'white',
          border: 'none',
        }
      case 'secondary':
        return {
          backgroundColor: C.navy,
          color: 'white',
          border: 'none',
        }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: C.navy,
          border: `1.5px solid ${C.border}`,
        }
      case 'gold':
        return {
          backgroundColor: C.gold,
          color: 'white',
          border: 'none',
        }
      case 'emerald':
        return {
          backgroundColor: C.emeraldL,
          color: 'white',
          border: 'none',
        }
      default:
        return {
          backgroundColor: C.emerald,
          color: 'white',
          border: 'none',
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl font-semibold transition-all duration-200
        hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{
        ...variantStyles,
        fontFamily: H,
        ...(disabled && { cursor: 'not-allowed' }),
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}