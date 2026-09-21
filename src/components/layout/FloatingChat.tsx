import { useState } from 'react'
import { H, B, C } from '@/constants/theme'
import { CONTACT } from '@/constants'

export function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  const options = ['Grade 9–11', 'Grade 12', 'Graduate', "I'm a Parent"]

  const handleWhatsApp = () => {
    window.open(CONTACT.whatsappUrl('Hi Prospira - I need direction with my career path'), '_blank')
  }

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="rounded-2xl overflow-hidden w-72 sm:w-80"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            border: `1px solid ${C.border}`,
          }}
        >
          <div className="px-5 py-4" style={{ backgroundColor: C.emerald }}>
            <p className="font-semibold text-white text-sm" style={{ fontFamily: H }}>
              Need direction? Chat with a mentor.
            </p>
            <p className="text-xs text-white/70 mt-0.5" style={{ fontFamily: B }}>
              Typically replies within 2 hours
            </p>
          </div>
          {step === 0 ? (
            <div style={{ padding: '20px' }}>
              <p className="text-sm mb-4" style={{ fontFamily: B, color: '#3D3D3D' }}>
                Where are you in your journey?
              </p>
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStep(1)}
                    className="w-full text-left text-sm py-2.5 px-3.5 rounded-lg transition-all hover:bg-slate-50"
                    style={{
                      fontFamily: B,
                      border: `1px solid ${C.border}`,
                      color: C.bodyText,
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ padding: '20px' }}>
              <p className="text-sm mb-4" style={{ fontFamily: B, color: '#3D3D3D' }}>
                Great! A mentor will reach out shortly. You can also WhatsApp us directly:
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: C.blue, fontFamily: H }}
              >
                Open WhatsApp
              </button>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-110"
        style={{
          backgroundColor: C.emerald,
          boxShadow: '0 8px 24px rgba(7, 26, 56, 0.32)',
        }}
      >
        {open ? '✕' : '?'}
      </button>
    </div>
  )
}
