import { motion, AnimatePresence } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { 
  Home, 
  Heart, 
  Bot, 
  BookOpen, 
  Users, 
  AlertTriangle,
  BarChart3,
  Shield,
  LogOut,
  Moon,
  Sun,
  Menu,
  X,
  FileText
} from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  userRole: 'student' | 'admin'
  userData: any
  onLogout: () => void
}

export function Navigation({ activeSection, onSectionChange, userRole, userData, onLogout }: NavigationProps) {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const studentNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'mood', label: 'Mood', icon: Heart },
    { id: 'chatbot', label: 'AI Chat', icon: Bot },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'crisis', label: 'Crisis', icon: AlertTriangle },
  ]

  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'crisis', label: 'Crisis', icon: AlertTriangle },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ]

  const navItems = userRole === 'admin' ? adminNavItems : studentNavItems

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavItemClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when item is selected
  }

  return (
    <>
      <Card className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-0 shadow-lg m-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">MindSupport</span>
              {userRole === 'admin' && (
                <Badge variant="outline" className="hidden sm:flex bg-purple-50 text-purple-700 border-purple-200">
                  <Shield className="w-3 h-3 mr-1" />
                  Admin
                </Badge>
              )}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleNavItemClick(item.id)}
                      className={`transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </motion.div>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            {/* Desktop User Info */}
            <div className="hidden sm:flex items-center gap-2">
              <div className={`w-8 h-8 bg-gradient-to-br ${
                userRole === 'admin' 
                  ? 'from-purple-500 to-pink-500' 
                  : 'from-green-400 to-blue-500'
              } rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-medium">
                  {userData?.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{userData?.name}</p>
                <p className="text-xs text-muted-foreground">
                  {userRole === 'admin' ? userData?.role : userData?.program}
                </p>
              </div>
            </div>

            {/* Mobile User Avatar */}
            <div className="sm:hidden">
              <div className={`w-8 h-8 bg-gradient-to-br ${
                userRole === 'admin' 
                  ? 'from-purple-500 to-pink-500' 
                  : 'from-green-400 to-blue-500'
              } rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-medium">
                  {userData?.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                </span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="hidden sm:flex p-2 text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </Card>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-md z-50 shadow-2xl md:hidden"
          >
            <div className="p-6 pt-20">
              {/* Mobile User Info */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-muted/30 rounded-lg">
                <div className={`w-12 h-12 bg-gradient-to-br ${
                  userRole === 'admin' 
                    ? 'from-purple-500 to-pink-500' 
                    : 'from-green-400 to-blue-500'
                } rounded-full flex items-center justify-center`}>
                  <span className="text-white font-medium">
                    {userData?.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{userData?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {userRole === 'admin' ? userData?.role : userData?.program}
                  </p>
                  {userRole === 'admin' && (
                    <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700 border-purple-200">
                      <Shield className="w-3 h-3 mr-1" />
                      Admin
                    </Badge>
                  )}
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        onClick={() => handleNavItemClick(item.id)}
                        className={`w-full justify-start h-12 transition-all duration-200 ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </Button>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <Button
                  variant="outline"
                  onClick={onLogout}
                  className="w-full justify-start h-12"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
