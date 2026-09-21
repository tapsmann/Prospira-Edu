import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  noPadding?: boolean
}

export function PageContainer({ 
  children, 
  className = '',
  maxWidth = 'xl',
  noPadding = false
}: PageContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-none',
    xl: 'max-w-none',
    full: 'max-w-full'
  }

  return (
    <div className={`${noPadding ? 'w-full' : 'content-container'} ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  )
}
