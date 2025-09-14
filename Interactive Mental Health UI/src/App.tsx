import { useState } from 'react'
import { Auth } from './components/auth'
import { Navigation } from './components/navigation'
import { Dashboard } from './components/dashboard'
import { AdminDashboard } from './components/admin-dashboard'
import { MoodTracker } from './components/mood-tracker'
import { AIChatbot } from './components/ai-chatbot'
import { Resources } from './components/resources'
import { Community } from './components/community'
import { StudentReports } from './components/student-reports'
import { AdminReports } from './components/admin-reports'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<'student' | 'admin'>('student')
  const [userData, setUserData] = useState<any>(null)
  const [activeSection, setActiveSection] = useState('dashboard')

  const handleLogin = (role: 'student' | 'admin', data: any) => {
    setUserRole(role)
    setUserData(data)
    setIsAuthenticated(true)
    setActiveSection('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole('student')
    setUserData(null)
    setActiveSection('dashboard')
  }

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />
  }

  const renderSection = () => {
    if (userRole === 'admin') {
      switch (activeSection) {
        case 'dashboard':
          return <AdminDashboard onSectionChange={setActiveSection} />
        case 'analytics':
          return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 bg-pattern-dots gradient-mesh py-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-blue-600 dark:from-slate-300 dark:to-blue-300 bg-clip-text text-transparent">Student Analytics</h2>
              <p className="text-muted-foreground">Comprehensive mental health analytics and insights</p>
              <p className="text-sm text-muted-foreground mt-2">(Coming soon)</p>
            </div>
          </div>
        case 'students':
          return <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 bg-pattern-grid gradient-mesh py-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-300 dark:to-emerald-300 bg-clip-text text-transparent">Student Management</h2>
              <p className="text-muted-foreground">Monitor and support individual students</p>
              <p className="text-sm text-muted-foreground mt-2">(Coming soon)</p>
            </div>
          </div>
        case 'crisis':
          return <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 bg-pattern-waves gradient-mesh py-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Crisis Management</h2>
              <p className="text-muted-foreground mb-4">Emergency intervention and support coordination</p>
              <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-lg border dark:border-border">
                <h3 className="font-semibold mb-3">Emergency Protocols</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Crisis Hotline:</strong> 988</p>
                  <p><strong>Campus Emergency:</strong> (555) 123-4567</p>
                  <p><strong>Mental Health Team:</strong> (555) 123-4568</p>
                </div>
              </div>
            </div>
          </div>
        case 'resources':
          return <Resources />
        case 'reports':
          return <AdminReports />
        default:
          return <AdminDashboard onSectionChange={setActiveSection} />
      }
    } else {
      // Student sections
      switch (activeSection) {
        case 'dashboard':
          return <Dashboard onSectionChange={setActiveSection} userData={userData} />
        case 'mood':
          return <MoodTracker />
        case 'chatbot':
          return <AIChatbot />
        case 'resources':
          return <Resources />
        case 'community':
          return <Community />
        case 'reports':
          return <StudentReports userData={userData} />
        case 'crisis':
          return <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 bg-pattern-waves gradient-mesh py-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Crisis Support</h2>
              <p className="text-muted-foreground mb-4">Immediate help and emergency resources</p>
              <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-lg border dark:border-border">
                <h3 className="font-semibold mb-3">Emergency Contacts</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Crisis Hotline:</strong> 988</p>
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Campus Security:</strong> (555) 123-4567</p>
                  <p><strong>Counseling Center:</strong> (555) 123-4568</p>
                </div>
              </div>
            </div>
          </div>
        default:
          return <Dashboard onSectionChange={setActiveSection} userData={userData} />
      }
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        userRole={userRole}
        userData={userData}
        onLogout={handleLogout}
      />
      <div className="pt-24">
        {renderSection()}
      </div>
    </div>
  )
}
