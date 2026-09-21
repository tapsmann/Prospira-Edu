import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  bgColor?: string
  noPadding?: boolean
}

export function PageWrapper({ 
  children, 
  className = '', 
  bgColor = 'transparent',
  noPadding = false
}: PageWrapperProps) {
  return (
    <div 
      className={`w-full min-h-screen ${noPadding ? '' : 'px-5 sm:px-8 lg:px-12'} py-10 md:py-14 lg:py-20 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-360 mx-auto">
        {children}
      </div>
    </div>
  )
}    
