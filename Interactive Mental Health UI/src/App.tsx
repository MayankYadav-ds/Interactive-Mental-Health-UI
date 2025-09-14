import { useState } from 'react'
import { Auth } from './components/auth'
import { Navigation } from './components/navigation'
import { Dashboard } from './components/dashboard'
import { AdminDashboard } from './components/admin-dashboard'
import { MoodTracker } from './components/mood-tracker'
import { AIChatbot } from './components/ai-chatbot'
import { Resources } from './components/resources'
import { Community } from './components/community'

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
          return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-28 pb-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Student Analytics</h2>
              <p className="text-muted-foreground">Comprehensive mental health analytics and insights</p>
              <p className="text-sm text-muted-foreground mt-2">(Coming soon)</p>
            </div>
          </div>
        case 'students':
          return <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-28 pb-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Student Management</h2>
              <p className="text-muted-foreground">Monitor and support individual students</p>
              <p className="text-sm text-muted-foreground mt-2">(Coming soon)</p>
            </div>
          </div>
        case 'crisis':
          return <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 pt-28 pb-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Crisis Management</h2>
              <p className="text-muted-foreground mb-4">Emergency intervention and support coordination</p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-lg">
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
        case 'crisis':
          return <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 pt-28 pb-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Crisis Support</h2>
              <p className="text-muted-foreground mb-4">Immediate help and emergency resources</p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-lg">
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
      {renderSection()}
    </div>
  )
}