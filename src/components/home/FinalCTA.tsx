import { H, B, C } from '@/constants/theme'
import { CONTACT } from '@/constants'

export function FinalCTA() {
  const handleBookSession = () => {
    window.open(CONTACT.whatsappUrl('Hi Prospira - I would like to book a free discovery call'), '_blank')
  }

  return (
    <div className="w-full text-center">
      <h2
        style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', color: 'white', lineHeight: 1.1, marginBottom: '20px' }}
      >
        Ready to begin your<br className="hidden sm:inline" />study abroad journey?
      </h2>
      <p
        style={{ fontFamily: B, fontSize: 'clamp(16px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '36px', maxWidth: '600px', margin: '0 auto 36px' }}
      >
        Let us map your university shortlist, application timeline, visa steps, and accommodation options together.
      </p>
      <button
        className="px-8 sm:px-12 py-4 rounded-xl font-bold text-white text-base sm:text-lg transition-all duration-200 hover:scale-[1.03] hover:opacity-95"
        style={{ backgroundColor: C.gold, fontFamily: H }}
        onClick={handleBookSession}
      >
        Book My Study Abroad Call
      </button>
      <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontFamily: B }}>
        No credit card. No commitment. Just a conversation.
      </p>
      <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.55)', fontSize: '14px', fontFamily: B }}>
        Prefer email?{' '}
        <a href={`mailto:${CONTACT.gmail}`} className="font-semibold no-underline hover:opacity-80" style={{ color: C.emeraldL }}>
          {CONTACT.gmail}
        </a>
      </p>
    </div>
  )
}
