import { useState } from 'react'
import { B, C } from '@/constants/theme'

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
  icon?: string
}

export function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  icon,
}: InputProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          className="block text-sm font-medium mb-1.5"
          style={{ fontFamily: B, color: C.navy }}
        >
          {label}
          {required && <span style={{ color: '#EF4444' }}> *</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-lg"
            style={{ color: 'rgba(0,0,0,0.3)' }}
          >
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full rounded-xl px-4 py-3 transition-all duration-200
            ${icon ? 'pl-11' : ''}
            ${error ? 'border-red-500' : ''}
            ${focused ? 'ring-2 ring-emerald-500' : ''}
          `}
          style={{
            fontFamily: B,
            fontSize: '14px',
            backgroundColor: 'white',
            border: `1.5px solid ${error ? '#EF4444' : C.border}`,
            outline: 'none',
            color: C.bodyText,
            ...(disabled && {
              opacity: 0.6,
              cursor: 'not-allowed',
            }),
          }}
        />
      </div>
      {error && (
        <p className="text-xs mt-1.5" style={{ fontFamily: B, color: '#EF4444' }}>
          {error}
        </p>
      )}
    </div>
  )
}