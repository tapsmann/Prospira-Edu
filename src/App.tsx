import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { B, C } from './constants/theme'
import { Navbar, Footer, FloatingChat } from './components/layout'
import { HomePage, ServicesPage, PortalPage, ParentsPage, PartnersPage, BlogPage, SignUpPage, SignInPage } from './pages'
import { AuthProvider } from './contexts/AuthContext'
import { UniversityNotOnlyRoute } from './pages/blog/UniversityNotOnlyRoute'
import { ChooseCareerPath } from './pages/blog/ChooseCareerPath'
import { ParentsGuide } from './pages/blog/ParentsGuide'
import { PathwaysGuide } from './pages/blog/PathwaysGuide'
import { SchoolsCareerGuidance } from './pages/blog/SchoolsCareerGuidance'
import { UniversitiesPartnership } from './pages/blog/UniversitiesPartnership'
import { EmployersSkills } from './pages/blog/EmployersSkills'
import { StudentStoryNomsa } from './pages/blog/StudentStoryNomsa'
import { WhatWeExistToChange } from './pages/blog/WhatWeExistToChange'
import { MeetOurMentors } from './pages/blog/MeetOurMentors'
import { PartnershipModel } from './pages/blog/PartnershipModel'
import { PurposefulEducation } from './pages/blog/PurposefulEducation'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppLayout() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up'

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ fontFamily: B, backgroundColor: C.cream }}>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <main className="w-full" style={{ paddingTop: isAuthPage ? 0 : '76px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<HomePage />} />
          <Route path="/pathways" element={<ServicesPage />} />
          <Route path="/portal" element={<PortalPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/university-is-not-the-only-route" element={<UniversityNotOnlyRoute />} />
          <Route path="/blog/choose-a-career-path" element={<ChooseCareerPath />} />
          <Route path="/blog/parents-guide-to-career-decisions" element={<ParentsGuide />} />
          <Route path="/blog/trades-technology-or-university" element={<PathwaysGuide />} />
          <Route path="/blog/how-schools-can-improve-career-guidance" element={<SchoolsCareerGuidance />} />
          <Route path="/blog/why-universities-should-partner" element={<UniversitiesPartnership />} />
          <Route path="/blog/what-employers-look-for" element={<EmployersSkills />} />
          <Route path="/blog/from-uncertainty-to-direction" element={<StudentStoryNomsa />} />
          <Route path="/blog/what-prospira-exists-to-change" element={<WhatWeExistToChange />} />
          <Route path="/blog/meet-our-mentors" element={<MeetOurMentors />} />
          <Route path="/blog/partnership-model" element={<PartnershipModel />} />
          <Route path="/blog/purposeful-education" element={<PurposefulEducation />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <FloatingChat />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
        <Analytics />
      </AuthProvider>
    </BrowserRouter>
  )
}
