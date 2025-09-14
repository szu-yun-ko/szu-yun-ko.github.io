import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Ongoing from './components/Ongoing'
import Events from './components/Events'
import Media from './components/Media'

// Import subpages
import AboutMe from './components/subpages/AboutMe'
import ProjectEduApp from './components/subpages/ProjectEduApp'
import ProjectCamouflage from './components/subpages/ProjectCamouflage'
import ProjectJoint from './components/subpages/ProjectJoint'
import PDAO from './components/subpages/PDAO'
import EduForum from './components/subpages/EduForum'
import ISEF from './components/subpages/ISEF'
import TISF from './components/subpages/TISF'
import NOR3 from './components/subpages/NOR3'

function HomePage() {
  return (
    <>
      <About />
      <Projects />
      <Ongoing />
      <Events />
      <Media />
    </>
  )
}

function App() {
  const location = useLocation()
  // Check if we're on the home page
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      {isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/project-edu-app" element={<ProjectEduApp />} />
        <Route path="/project-camouflage" element={<ProjectCamouflage />} />
        <Route path="/project-joint" element={<ProjectJoint />} />
        <Route path="/pdao" element={<PDAO />} />
        <Route path="/edu-forum" element={<EduForum />} />
        <Route path="/isef" element={<ISEF />} />
        <Route path="/tisf" element={<TISF />} />
        <Route path="/nor3" element={<NOR3 />} />
        {/* Fallback route for any unmatched paths */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
