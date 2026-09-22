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

const destinationRegions = [
  { id: 'uk', title: 'United Kingdom & Ireland', description: 'World-leading universities, post-study work routes, and diverse campus cultures.', countries: ['United Kingdom', 'Ireland'] },
  { id: 'canada-us', title: 'Canada & United States', description: 'Research-intensive programs, co-op opportunities, and pathways to permanent residence.', countries: ['Canada', 'United States'] },
  { id: 'anz', title: 'Australia & New Zealand', description: 'High-quality education, lifestyle appeal, and generous post-study work rights.', countries: ['Australia', 'New Zealand'] },
  { id: 'europe-asia', title: 'Europe & Asia', description: 'Affordable tuition, English-taught programmes, and multicultural hubs.', countries: ['Germany', 'Netherlands', 'France', 'Singapore', 'Hong Kong', 'Malaysia'] },
]

const visaGuidance = [
  { title: 'Document preparation', items: ['Valid passport (6+ months beyond study end)', 'University offer letter & CAS/COE', 'Academic transcripts & certificates', 'English test results (IELTS/TOEFL/PTE)', 'Financial evidence (bank statements, sponsor letters)'] },
  { title: 'Finance planning', items: ['Tuition deposit requirements', 'Living cost proof per destination', 'Scholarship & funding letters', 'Currency transfer & forex planning'] },
  { title: 'Application process', items: ['Check official government portals early', 'Book biometrics & TB test if required', 'Submit complete file to avoid delays', 'Track decision timelines per country'] },
]

const accommodationGuidance = [
  { title: 'University-managed', items: ['Guaranteed for first-years in most cases', 'All-inclusive bills & campus proximity', 'Apply early — deadlines vary by uni'] },
  { title: 'Private student halls', items: ['Purpose-built, modern amenities', 'Flexible contract lengths', 'Verify accreditation (Unipol/ANUK)'] },
  { title: 'Private rentals', items: ['Check landlord registration & safety certs', 'Clarify deposit protection scheme', 'View virtually or in-person before signing'] },
  { title: 'Arrival support', items: ['Airport pickup services', 'Temporary housing for first nights', 'Local SIM, bank account, GP registration'] },
]

export function PortalPage() {
  const { user, loading } = useAuth()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<StudyAbroadAnswers>({})
  const [showResult, setShowResult] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [savedPlan, setSavedPlan] = useState<StudyAbroadAnswers | null>(null)
  const [completed, setCompleted] = useState<string[]>([])
  const [expandedDestination, setExpandedDestination] = useState<string | null>(null)
  const [expandedVisa, setExpandedVisa] = useState<string | null>(null)
  const [expandedAccommodation, setExpandedAccommodation] = useState<string | null>(null)

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

  const inquireWithDetails = (topic: string) => {
    const destination = answers.destination || 'unspecified destination'
    const message = `I'd like help with ${topic} for my study abroad plan.\n\nMy selections:\n- Study level: ${answers.level || 'Not specified'}\n- Subject area: ${answers.subject || 'Not specified'}\n- Destination: ${destination}\n- Intake: ${answers.intake || 'Not specified'}\n- Funding: ${answers.funding || 'Not specified'}\n- English test: ${answers.english || 'Not specified'}\n- Passport: ${answers.passport || 'Not specified'}\n- Housing preference: ${answers.housing || 'Not specified'}\n\nPlease guide me on the next steps.`
    window.open(CONTACT.whatsappUrl(message), '_blank')
  }

  if (!loading && !user) {
    return (
      <section className="w-full site-section" style={{ backgroundColor: C.navy, minHeight: '65vh' }}>
        <PageContainer maxWidth="md">
          <div className="rounded-2xl text-center" style={{ backgroundColor: C.navyMid, border: '1px solid rgba(255,255,255,0.1)', padding: '42px 26px' }}>
            <SectionLabel>Member study space</SectionLabel>
            <h1 style={{ fontFamily: H, color: 'white', fontWeight: 700, fontSize: 'clamp(28px, 5vw, 42px)', marginBottom: '14px' }}>
              Save and manage your study abroad plan.
            </h1>
            <p style={{ fontFamily: B, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: '28px' }}>
              Create a free account to build your university shortlist, track visa readiness, manage accommodation tasks, and unlock member articles.
            </p>
            <Link to="/sign-up" className="inline-block px-7 py-3 rounded-xl text-white font-semibold no-underline" style={{ backgroundColor: C.emerald, fontFamily: H }}>
              Create my account
            </Link>
            <Link to="/sign-in" className="inline-block ml-4 px-5 py-3 text-sm font-semibold no-underline" style={{ color: C.emeraldL, fontFamily: H }}>
              Sign in
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  return (
    <div className="w-full">
      <section className="w-full site-section" style={{ backgroundColor: C.navy }}>
        <PageContainer maxWidth="md">
          <div className="text-center mb-10">
            <SectionLabel>Study Abroad</SectionLabel>
            <h1 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(28px, 5vw, 44px)', color: 'white', marginBottom: '16px' }}>
              Study abroad support
            </h1>
            <p style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(20px, 3vw, 28px)', color: C.emeraldL, marginBottom: '16px' }}>
              From university shortlist to a confident arrival.
            </p>
            <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              Prospira-Edu helps students make informed choices about overseas universities, prepare visa applications, and secure accommodation that fits their needs.
            </p>
          </div>

          {!showResult ? (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: C.navyMid, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: C.emerald }} />
              </div>
              <div style={{ padding: '28px 24px' }}>
                <div className="flex items-center justify-between mb-6">
                  <span style={{ fontFamily: B, fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
                    Step {currentQ + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span style={{ fontFamily: B, fontSize: '13px', color: C.emeraldL }}>
                    {Math.round(progress)}% complete
                  </span>
                </div>
                <h2 style={{ fontFamily: H, fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'white', marginBottom: '24px' }}>
                  {question.q}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(option)}
                      className="text-left rounded-xl p-4 transition-all duration-150"
                      style={{
                        fontFamily: B,
                        color: 'rgba(255,255,255,0.9)',
                        backgroundColor: selected === option ? C.emerald + '30' : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${selected === option ? C.emerald : 'rgba(255,255,255,0.1)'}`,
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => { if (currentQ) setCurrentQ(currentQ - 1) }}
                  disabled={!currentQ}
                  className="mt-6 text-sm disabled:opacity-30"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: B }}
                >
                  ← Back
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl" style={{ backgroundColor: C.navyMid, border: `2px solid ${C.emerald}50`, padding: '32px 24px' }}>
              <div className="text-center mb-7">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-3" style={{ backgroundColor: C.emerald, fontFamily: H }}>
                  Your study abroad plan
                </span>
                <h2 style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(24px, 4vw, 32px)', color: 'white', marginBottom: '12px' }}>
                  Every decision, in the right order.
                </h2>
                <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  We will help you find {answers.level?.toLowerCase()} options in {answers.destination}, aligned to {answers.subject?.toLowerCase()} and your intended start date.
                </p>
              </div>
              <div className="grid gap-3 mb-7">
                <PlanStep title="1. University shortlist" detail={`Match courses, entry requirements, and intakes for ${answers.destination || 'your preferred destination'}.`} />
                <PlanStep title="2. Funding and application plan" detail={needsFundingPlan ? 'Start with a realistic tuition, living-cost, and scholarship plan before applications open.' : `Prepare applications around ${answers.funding?.toLowerCase() || 'your funding plan'}.`} />
                <PlanStep title="3. Visa readiness" detail={needsPassport ? 'Make your passport application or renewal an immediate priority, then map the visa document timeline.' : needsEnglishAdvice ? 'Confirm the English requirement for each university and schedule the right test early.' : 'Review your supporting documents, financial evidence, and country-specific visa requirements.'} />
                <PlanStep title="4. Accommodation and arrival" detail={`Compare ${answers.housing?.toLowerCase() || 'safe student accommodation'} before committing, then plan your airport arrival and move-in.`} />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: C.emerald, fontFamily: H }} onClick={savePlan}>
                  {savedPlan ? 'Plan saved' : 'Save my study plan'}
                </button>
                <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: C.blue, fontFamily: H }} onClick={requestPlan}>
                  Ask an adviser
                </button>
                <button onClick={restart} className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', fontFamily: H }}>
                  Start again
                </button>
              </div>
            </div>
          )}
        </PageContainer>
      </section>

      {savedPlan && <MemberPlan answers={savedPlan} completed={completed} onToggle={toggleTask} />}

      <GuidanceSections
        expandedDestination={expandedDestination}
        setExpandedDestination={setExpandedDestination}
        expandedVisa={expandedVisa}
        setExpandedVisa={setExpandedVisa}
        expandedAccommodation={expandedAccommodation}
        setExpandedAccommodation={setExpandedAccommodation}
        inquireWithDetails={inquireWithDetails}
      />
    </div>
  )
}

function MemberPlan({ answers, completed, onToggle }: { answers: StudyAbroadAnswers; completed: string[]; onToggle: (task: string) => void }) {
  const completeCount = completed.length
  const totalTasks = planGroups.flatMap((group) => group.items).length
  return (
    <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <SectionLabel>My saved plan</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Your route to {answers.destination}
            </h2>
            <p style={{ fontFamily: B, color: C.bodyText, marginTop: '8px' }}>
              {completeCount} of {totalTasks} key tasks complete.
            </p>
          </div>
          <div className="px-4 py-3 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, fontFamily: B, color: C.bodyText }}>
            {answers.level} · {answers.intake}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {planGroups.map(group => (
            <div key={group.id} className="rounded-2xl p-5" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
              <h3 style={{ fontFamily: H, color: C.navy, fontWeight: 700, fontSize: '19px', marginBottom: '14px' }}>
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.items.map(task => (
                  <label key={task} className="flex gap-3 items-start cursor-pointer" style={{ fontFamily: B, color: C.bodyText, fontSize: '14px' }}>
                    <input type="checkbox" checked={completed.includes(task)} onChange={() => onToggle(task)} className="mt-1 accent-emerald-600" />
                    <span style={{ textDecoration: completed.includes(task) ? 'line-through' : 'none', opacity: completed.includes(task) ? .55 : 1 }}>
                      {task}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

function GuidanceSections({
  expandedDestination,
  setExpandedDestination,
  expandedVisa,
  setExpandedVisa,
  expandedAccommodation,
  setExpandedAccommodation,
  inquireWithDetails,
}: {
  expandedDestination: string | null
  setExpandedDestination: (id: string | null) => void
  expandedVisa: string | null
  setExpandedVisa: (id: string | null) => void
  expandedAccommodation: string | null
  setExpandedAccommodation: (id: string | null) => void
  inquireWithDetails: (topic: string) => void
}) {
  return (
    <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
      <PageContainer>
        {/* Submit a strong university application */}
        <div className="rounded-2xl mb-8" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <SectionLabel>Step 1</SectionLabel>
                <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(24px, 3vw, 30px)', marginBottom: '12px' }}>
                  Submit a strong university application
                </h2>
                <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, maxWidth: '600px' }}>
                  Prepare each application with the documents and deadlines that matter to your chosen institutions.
                </p>
              </div>
              <button
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm self-start"
                style={{ backgroundColor: C.navy, fontFamily: H }}
                onClick={() => inquireWithDetails('university applications and shortlisting')}
              >
                Plan my application →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GuidanceCard
                title="Application timelines and document checklists"
                points={[
                  'Map each university\'s deadline and work backwards',
                  'Track required transcripts, certificates, and translations',
                  'Monitor portal openings for UCAS, Common App, OUAC, etc.',
                ]}
              />
              <GuidanceCard
                title="Personal statement and referee guidance"
                points={[
                  'Structure your statement around course motivation and fit',
                  'Choose referees who know your academic work',
                  'Provide referees with a briefing pack and deadlines',
                ]}
              />
              <GuidanceCard
                title="Offer comparison and decision support"
                points={[
                  'Compare conditional vs unconditional offers',
                  'Evaluate scholarship, location, and career outcomes',
                  'Respond within deadlines to secure your place',
                ]}
              />
            </div>
          </div>
        </div>

        {/* Prepare to arrive with confidence */}
        <div className="rounded-2xl mb-8" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <SectionLabel>Step 2</SectionLabel>
                <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(24px, 3vw, 30px)', marginBottom: '12px' }}>
                  Prepare to arrive with confidence
                </h2>
                <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, maxWidth: '600px' }}>
                  Once you have an offer, we help you organise the practical details of moving overseas.
                </p>
              </div>
              <button
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm self-start"
                style={{ backgroundColor: C.navy, fontFamily: H }}
                onClick={() => inquireWithDetails('visa and arrival preparation')}
              >
                Plan my arrival →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GuidanceCard
                title="Student visa document and finance planning"
                points={[
                  'Confirm visa type and financial evidence thresholds',
                  'Prepare bank statements, sponsor letters, and tuition receipts',
                  'Schedule biometrics, TB test, and credibility interview prep',
                ]}
              />
              <GuidanceCard
                title="Accommodation comparison and booking support"
                points={[
                  'Compare university halls, private halls, and verified rentals',
                  'Check contract terms, deposit protection, and bills inclusion',
                  'Book early — best options go quickly in peak intake months',
                ]}
              />
            </div>
          </div>
        </div>

        {/* Study destinations */}
        <div className="rounded-2xl mb-8" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
          <div className="p-6 md:p-8">
            <SectionLabel>Explore</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(24px, 3vw, 30px)', marginBottom: '18px' }}>
              Study destinations
            </h2>
            <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, marginBottom: '24px', maxWidth: '700px' }}>
              Compare the academic fit, costs, timelines, and student experience for your preferred regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destinationRegions.map(region => (
                <DestinationCard
                  key={region.id}
                  region={region}
                  isExpanded={expandedDestination === region.id}
                  onToggle={() => setExpandedDestination(expandedDestination === region.id ? null : region.id)}
                  onInquire={() => inquireWithDetails(`studying in ${region.title}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Visa and documentation */}
        <div className="rounded-2xl mb-8" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
          <div className="p-6 md:p-8">
            <SectionLabel>Visa & docs</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(24px, 3vw, 30px)', marginBottom: '18px' }}>
              Visa and documentation
            </h2>
            <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, marginBottom: '24px', maxWidth: '700px' }}>
              Know what needs to be prepared early so your visa application is complete and credible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visaGuidance.map((section) => (
                <ExpandableCard
                  key={section.title}
                  title={section.title}
                  points={section.items}
                  isExpanded={expandedVisa === section.title}
                  onToggle={() => setExpandedVisa(expandedVisa === section.title ? null : section.title)}
                  onInquire={() => inquireWithDetails('student visa requirements and finance planning')}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Accommodation and arrival */}
        <div className="rounded-2xl" style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}>
          <div className="p-6 md:p-8">
            <SectionLabel>Accommodation</SectionLabel>
            <h2 style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: 'clamp(24px, 3vw, 30px)', marginBottom: '18px' }}>
              Accommodation and arrival
            </h2>
            <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, marginBottom: '24px', maxWidth: '700px' }}>
              Find a suitable place to live and avoid last-minute arrival stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {accommodationGuidance.map((section) => (
                <ExpandableCard
                  key={section.title}
                  title={section.title}
                  points={section.items}
                  isExpanded={expandedAccommodation === section.title}
                  onToggle={() => setExpandedAccommodation(expandedAccommodation === section.title ? null : section.title)}
                  onInquire={() => inquireWithDetails('accommodation search and arrival support')}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

function DestinationCard({ region, isExpanded, onToggle, onInquire }: { region: typeof destinationRegions[0]; isExpanded: boolean; onToggle: () => void; onInquire: () => void }) {
  return (
    <div className="rounded-2xl overflow-hidden transition-all" style={{ backgroundColor: C.cream, border: `1px solid ${C.border}` }}>
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left"
        style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: '18px' }}
      >
        <span>{region.title}</span>
        <span style={{ fontSize: '20px', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      <div style={{ maxHeight: isExpanded ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
        <div className="px-5 pb-5">
          <p style={{ fontFamily: B, color: C.bodyText, lineHeight: 1.7, marginBottom: '16px' }}>
            {region.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {region.countries.map(country => (
              <span key={country} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: C.blueLight, color: C.blue, fontFamily: B }}>
                {country}
              </span>
            ))}
          </div>
          <button
            onClick={onInquire}
            className="w-full py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: C.navy, color: 'white', fontFamily: H }}
          >
            Get help with {region.title}
          </button>
        </div>
      </div>
    </div>
  )
}

function ExpandableCard({ title, points, isExpanded, onToggle, onInquire }: { title: string; points: string[]; isExpanded: boolean; onToggle: () => void; onInquire: () => void }) {
  return (
    <div className="rounded-2xl overflow-hidden transition-all" style={{ backgroundColor: C.cream, border: `1px solid ${C.border}` }}>
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left"
        style={{ fontFamily: H, fontWeight: 700, color: C.navy, fontSize: '17px' }}
      >
        <span>{title}</span>
        <span style={{ fontSize: '20px', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      <div style={{ maxHeight: isExpanded ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
        <div className="px-5 pb-5">
          <ul className="space-y-3 mb-4">
            {points.map(point => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed" style={{ fontFamily: B, color: C.bodyText }}>
                <span style={{ color: C.emerald }}>•</span>
                {point}
              </li>
            ))}
          </ul>
          <button
            onClick={onInquire}
            className="w-full py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: C.navy, color: 'white', fontFamily: H }}
          >
            Get help with {title.toLowerCase()}
          </button>
        </div>
      </div>
    </div>
  )
}

function GuidanceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-xl p-5" style={{ backgroundColor: C.cream, border: `1px solid ${C.border}` }}>
      <h3 style={{ fontFamily: H, color: C.navy, fontWeight: 700, fontSize: '17px', marginBottom: '12px' }}>
        {title}
      </h3>
      <ul className="space-y-3">
        {points.map(point => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed" style={{ fontFamily: B, color: C.bodyText }}>
            <span style={{ color: C.emerald }}>•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PlanStep({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)' }}>
      <h3 style={{ fontFamily: H, color: 'white', fontSize: '16px', marginBottom: '5px' }}>
        {title}
      </h3>
      <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.62)', fontSize: '14px', lineHeight: 1.55 }}>
        {detail}
      </p>
    </div>
  )
}