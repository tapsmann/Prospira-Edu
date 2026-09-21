import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { CONTACT } from '@/constants'
import { QUIZ_QUESTIONS, StudyAbroadAnswers } from '@/data'
import { SectionLabel, PageContainer } from '@/components/common'
import { useAuth } from '@/contexts/AuthContext'

const progressKey = 'prospira_study_abroad_intake'
const planKey = (uid: string) => `prospira_study_plan_${uid}`

const planGroups = [
  { id: 'application', title: 'University application', items: ['Confirm your course and university shortlist', 'Collect transcripts and certificates', 'Prepare personal statement and referee details', 'Check each university deadline'] },
  { id: 'visa', title: 'Student visa', items: ['Check passport validity', 'Confirm English-language evidence', 'Prepare financial and sponsor evidence', 'Review official destination visa requirements'] },
  { id: 'accommodation', title: 'Accommodation', items: ['Compare university residence and private housing', 'Check distance, contract length, and total costs', 'Confirm booking terms before paying', 'Plan move-in date and airport arrival'] },
  { id: 'move', title: 'Pre-departure', items: ['Accept your offer and arrange tuition payment', 'Arrange health cover where required', 'Book travel after visa approval', 'Keep digital and printed document copies'] },
]

export function PortalPage() {
  const { user, loading } = useAuth()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<StudyAbroadAnswers>({})
  const [showResult, setShowResult] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [savedPlan, setSavedPlan] = useState<StudyAbroadAnswers | null>(null)
  const [completed, setCompleted] = useState<string[]>([])

  useEffect(() => {
    if (!user) return
    const saved = localStorage.getItem(planKey(user.uid))
    if (!saved) return
    try {
      const plan = JSON.parse(saved) as { answers: StudyAbroadAnswers; completed: string[] }
      setSavedPlan(plan.answers)
      setCompleted(plan.completed || [])
      setAnswers(plan.answers)
      setShowResult(true)
    } catch { localStorage.removeItem(planKey(user.uid)) }
  }, [user])

  useEffect(() => {
    const saved = localStorage.getItem(progressKey)
    if (!saved) return
    try {
      const savedProgress = JSON.parse(saved) as { currentQ: number; answers: StudyAbroadAnswers }
      if (savedProgress.answers) {
        setCurrentQ(savedProgress.currentQ || 0)
        setAnswers(savedProgress.answers)
      }
    } catch { localStorage.removeItem(progressKey) }
  }, [])

  useEffect(() => {
    if (Object.keys(answers).length && !showResult) {
      localStorage.setItem(progressKey, JSON.stringify({ currentQ, answers }))
    }
  }, [answers, currentQ, showResult])

  const question = QUIZ_QUESTIONS[currentQ]
  const progress = ((currentQ + (showResult ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100
  const needsPassport = !answers.passport?.startsWith('I have a valid')
  const needsEnglishAdvice = !answers.english?.startsWith('I already have')
  const needsFundingPlan = answers.funding === 'I need a realistic budget plan'

  const selectAnswer = (answer: string) => {
    setSelected(answer)
    window.setTimeout(() => {
      const updated = { ...answers, [question.id]: answer }
      setAnswers(updated)
      setSelected(null)
      if (currentQ === QUIZ_QUESTIONS.length - 1) {
        setShowResult(true)
        localStorage.removeItem(progressKey)
      } else {
        setCurrentQ(currentQ + 1)
      }
    }, 180)
  }

  const restart = () => {
    setCurrentQ(0)
    setAnswers({})
    setShowResult(false)
    localStorage.removeItem(progressKey)
  }

  const requestPlan = () => {
    const message = `I completed the Study Abroad Planner. I want to study ${answers.level || 'at university'} in ${answers.destination || 'an overseas destination'}, for ${answers.intake || 'a future intake'}. I am interested in ${answers.subject || 'course options'}, need ${answers.funding || 'funding advice'}, and prefer ${answers.housing || 'accommodation support'}.`
    window.open(CONTACT.whatsappUrl(message), '_blank')
  }

  const savePlan = () => {
    if (!user) return
    localStorage.setItem(planKey(user.uid), JSON.stringify({ answers, completed }))
    setSavedPlan(answers)
  }

  const toggleTask = (task: string) => {
    if (!user || !savedPlan) return
    const next = completed.includes(task) ? completed.filter((item) => item !== task) : [...completed, task]
    setCompleted(next)
    localStorage.setItem(planKey(user.uid), JSON.stringify({ answers: savedPlan, completed: next }))
  }

  if (!loading && !user) {
    return <section className="w-full site-section" style={{ backgroundColor: C.navy, minHeight: '65vh' }}><PageContainer maxWidth="md"><div className="rounded-2xl text-center" style={{ backgroundColor: C.navyMid, border: '1px solid rgba(255,255,255,0.1)', padding: '42px 26px' }}><SectionLabel>Member study space</SectionLabel><h1 style={{ fontFamily: H, color: 'white', fontWeight: 700, fontSize: 'clamp(28px, 5vw, 42px)', marginBottom: '14px' }}>Save and manage your study abroad plan.</h1><p style={{ fontFamily: B, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: '28px' }}>Create a free account to build your university shortlist, track visa readiness, manage accommodation tasks, and unlock member articles.</p><Link to="/sign-up" className="inline-block px-7 py-3 rounded-xl text-white font-semibold no-underline" style={{ backgroundColor: C.emerald, fontFamily: H }}>Create my account</Link><Link to="/sign-in" className="inline-block ml-4 px-5 py-3 text-sm font-semibold no-underline" style={{ color: C.emeraldL, fontFamily: H }}>Sign in</Link></div></PageContainer></section>
  }

  return (
    <div className="w-full">
      <section className="w-full site-section" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="md">
          <div className="text-center mb-8">
            <SectionLabel>Study abroad planner</SectionLabel>
            <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 5vw, 44px)', color: 'white', marginBottom: '8px' }}>Plan your route to university abroad.</h1>
            <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.62)' }}>Answer a few questions and receive the right application, visa, funding, and accommodation next steps.</p>
          </div>

          {!showResult ? (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: C.navyMid, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.08)' }}><div className="h-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: C.emerald }} /></div>
              <div style={{ padding: '28px 24px' }}>
                <div className="flex items-center justify-between mb-6"><span style={{ fontFamily: B, fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Step {currentQ + 1} of {QUIZ_QUESTIONS.length}</span><span style={{ fontFamily: B, fontSize: '13px', color: C.emeraldL }}>{Math.round(progress)}% complete</span></div>
                <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'white', marginBottom: '24px' }}>{question.q}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {question.options.map((option) => <button key={option} onClick={() => selectAnswer(option)} className="text-left rounded-xl p-4 transition-all duration-150" style={{ fontFamily: B, color: 'rgba(255,255,255,0.9)', backgroundColor: selected === option ? C.emerald + '30' : 'rgba(255,255,255,0.04)', border: `1.5px solid ${selected === option ? C.emerald : 'rgba(255,255,255,0.1)'}` }}>{option}</button>)}
                </div>
                <button onClick={() => { if (currentQ) setCurrentQ(currentQ - 1) }} disabled={!currentQ} className="mt-6 text-sm disabled:opacity-30" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: B }}>← Back</button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl" style={{ backgroundColor: C.navyMid, border: `2px solid ${C.emerald}50`, padding: '32px 24px' }}>
              <div className="text-center mb-7"><span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-3" style={{ backgroundColor: C.emerald, fontFamily: H }}>Your study abroad plan</span><h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(24px, 4vw, 32px)', color: 'white', marginBottom: '12px' }}>A clear route from shortlist to arrival.</h2><p style={{ fontFamily: B, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>We will help you find {answers.level?.toLowerCase()} options in {answers.destination}, aligned to {answers.subject?.toLowerCase()} and your intended start date.</p></div>
              <div className="grid gap-3 mb-7">
                <PlanStep title="1. University shortlist" detail={`Match courses, entry requirements, and intakes for ${answers.destination || 'your preferred destination'}.`} />
                <PlanStep title="2. Funding and application plan" detail={needsFundingPlan ? 'Start with a realistic tuition, living-cost, and scholarship plan before applications open.' : `Prepare applications around ${answers.funding?.toLowerCase() || 'your funding plan'}.`} />
                <PlanStep title="3. Visa readiness" detail={needsPassport ? 'Make your passport application or renewal an immediate priority, then map the visa document timeline.' : needsEnglishAdvice ? 'Confirm the English requirement for each university and schedule the right test early.' : 'Review your supporting documents, financial evidence, and country-specific visa requirements.'} />
                <PlanStep title="4. Accommodation and arrival" detail={`Compare ${answers.housing?.toLowerCase() || 'safe student accommodation'} before committing, then plan your airport arrival and move-in.`} />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center"><button className="px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }} onClick={savePlan}>{savedPlan ? 'Plan saved' : 'Save my study plan'}</button><button className="px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: C.blue, fontFamily: H }} onClick={requestPlan}>Ask an adviser</button><button onClick={restart} className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', fontFamily: H }}>Start again</button></div>
            </div>
          )}
        </PageContainer>
      </section>
      {savedPlan && <MemberPlan answers={savedPlan} completed={completed} onToggle={toggleTask} />}
    </div>
  )
}

function MemberPlan({ answers, completed, onToggle }: { answers: StudyAbroadAnswers; completed: string[]; onToggle: (task: string) => void }) {
  const completeCount = completed.length
  const totalTasks = planGroups.flatMap((group) => group.items).length
  return <section className="w-full site-section" style={{ backgroundColor: C.cream }}><PageContainer><div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"><div><SectionLabel>My saved plan</SectionLabel><h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(28px, 4vw, 42px)' }}>Your route to {answers.destination}</h2><p style={{ fontFamily: B, color: C.bodyText, marginTop: '8px' }}>{completeCount} of {totalTasks} key tasks complete.</p></div><div className="px-4 py-3 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, fontFamily: B, color: C.bodyText }}>{answers.level} · {answers.intake}</div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{planGroups.map(group => <div key={group.id} className="rounded-2xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}><h3 style={{ fontFamily: H, color: C.navy, fontWeight: 700, fontSize: '19px', marginBottom: '14px' }}>{group.title}</h3><div className="space-y-3">{group.items.map(task => <label key={task} className="flex gap-3 items-start cursor-pointer" style={{ fontFamily: B, color: C.bodyText, fontSize: '14px' }}><input type="checkbox" checked={completed.includes(task)} onChange={() => onToggle(task)} className="mt-1 accent-emerald-600" /><span style={{ textDecoration: completed.includes(task) ? 'line-through' : 'none', opacity: completed.includes(task) ? .55 : 1 }}>{task}</span></label>)}</div></div>)}</div><DestinationGuides /></PageContainer></section>
}

function DestinationGuides() {
  return <div className="mt-12"><SectionLabel>Student guide</SectionLabel><h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '18px' }}>Plan each stage with confidence.</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-5"><GuideCard title="Destinations" points={['Compare course availability, entry criteria, tuition, and living costs.', 'Choose an intake that leaves time for applications, offers, and visa processing.', 'Use each university’s official admissions page for final requirements.']} /><GuideCard title="Visa readiness" points={['Keep your passport, academic records, and financial evidence organised early.', 'Apply only after you understand the official requirements for your destination.', 'Do not book non-refundable travel until your visa decision is confirmed.']} /><GuideCard title="Accommodation" points={['Start with university housing when it fits your budget and location needs.', 'For private housing, confirm the provider, contract, total cost, and distance to campus.', 'Never send money until you have verified the accommodation and terms.']} /></div></div>
}

function GuideCard({ title, points }: { title: string; points: string[] }) { return <div className="rounded-2xl p-5" style={{ backgroundColor: C.blueLight, border: `1px solid ${C.border}` }}><h3 style={{ fontFamily: H, color: C.navy, fontWeight: 700, fontSize: '19px', marginBottom: '12px' }}>{title}</h3><ul className="space-y-3">{points.map(point => <li key={point} className="flex gap-2 text-sm leading-relaxed" style={{ fontFamily: B, color: C.bodyText }}><span style={{ color: C.emerald }}>•</span>{point}</li>)}</ul></div> }

function PlanStep({ title, detail }: { title: string; detail: string }) {
  return <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)' }}><h3 style={{ fontFamily: H, color: 'white', fontSize: '16px', marginBottom: '5px' }}>{title}</h3><p style={{ fontFamily: B, color: 'rgba(255,255,255,0.62)', fontSize: '14px', lineHeight: 1.55 }}>{detail}</p></div>
}
