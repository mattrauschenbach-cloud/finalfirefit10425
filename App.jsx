
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell'
import WeeklyChallenge from './pages/WeeklyChallenge'
import MonthlyChallenge from './pages/MonthlyChallenge'
import Standards from './pages/Standards'
import TierCheckoff from './pages/TierCheckoff'
import AdminStandards from './pages/AdminStandards'
import AdminChallenges from './pages/AdminChallenges'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/weekly" replace />} />
          <Route path="/weekly" element={<WeeklyChallenge />} />
          <Route path="/monthly" element={<MonthlyChallenge />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/tier-checkoff" element={<TierCheckoff />} />
          <Route path="/admin-standards" element={<AdminStandards />} />
          <Route path="/admin-challenges" element={<AdminChallenges />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/weekly" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
