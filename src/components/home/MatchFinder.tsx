import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'

const fields = ['Business, finance or economics', 'STEM, engineering or technology', 'Health, life sciences or medicine', 'Arts, law, humanities or social sciences']
const budgets = ['Under $10k / year', '$10k – $20k / year', '$20k – $35k / year', '$35k+ / year', 'I need scholarship guidance']
const grades = ['A-level / IB / Diploma', 'O-level / IGCSE', 'University graduate', 'Still studying']

export function MatchFinder() {
  const navigate = useNavigate()
  const [field, setField] = useState('')
  const [budget, setBudget] = useState('')
  const [grade, setGrade] = useState('')

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: 'white',
    fontFamily: B,
    fontSize: '14px',
    outline: 'none',
  } as const

  return (
    <div className="rounded-2xl w-full max-w-xl" style={{ backgroundColor: 'rgba(13,27,42,0.85)', border: '1px solid rgba(255,255,255,0.12)', padding: '20px' }}>
      <p className="text-sm font-semibold mb-1" style={{ fontFamily: H, color: 'white' }}>
        Find your university match
      </p>
      <p className="text-xs mb-4" style={{ fontFamily: B, color: 'rgba(255,255,255,0.55)' }}>
        Takes 2 minutes · Free · No commitment
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <label className="block">
          <span className="block text-xs mb-1.5" style={{ fontFamily: B, color: 'rgba(255,255,255,0.6)' }}>Field of study</span>
          <select value={field} onChange={(e) => setField(e.target.value)} style={selectStyle}>
            <option value="" className="text-black">Select…</option>
            {fields.map((f) => <option key={f} value={f} className="text-black">{f}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs mb-1.5" style={{ fontFamily: B, color: 'rgba(255,255,255,0.6)' }}>Annual budget</span>
          <select value={budget} onChange={(e) => setBudget(e.target.value)} style={selectStyle}>
            <option value="" className="text-black">Select…</option>
            {budgets.map((b) => <option key={b} value={b} className="text-black">{b}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs mb-1.5" style={{ fontFamily: B, color: 'rgba(255,255,255,0.6)' }}>Academic level</span>
          <select value={grade} onChange={(e) => setGrade(e.target.value)} style={selectStyle}>
            <option value="" className="text-black">Select…</option>
            {grades.map((g) => <option key={g} value={g} className="text-black">{g}</option>)}
          </select>
        </label>
      </div>
      <button
        onClick={() => navigate('/portal')}
        className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
        style={{ backgroundColor: C.emerald, fontFamily: H }}
      >
        Find My University Match →
      </button>
    </div>
  )
}
