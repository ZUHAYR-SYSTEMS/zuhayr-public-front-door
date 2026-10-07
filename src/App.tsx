import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import BackupRestore from './pages/BackupRestore'
import Home from './pages/Home'
import ProofAutomation from './pages/ProofAutomation'
import ProofRecovery from './pages/ProofRecovery'
import ProofRescue from './pages/ProofRescue'
import Recovery from './pages/Recovery'
import Rescue from './pages/Rescue'
import Review from './pages/Review'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/production-reliability-review"
          element={<Review />}
        />
        <Route path="/saas-production-rescue" element={<Rescue />} />
        <Route path="/recovery-resilience" element={<Recovery />} />
        <Route path="/backup-restore-recovery" element={<BackupRestore />} />
        <Route path="/proof/production-rescue" element={<ProofRescue />} />
        <Route path="/proof/recovery-resilience" element={<ProofRecovery />} />
        <Route
          path="/proof/lead-intake-automation"
          element={<ProofAutomation />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
