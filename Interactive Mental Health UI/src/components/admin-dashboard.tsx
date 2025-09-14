import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback } from './ui/avatar'
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  BarChart3,
  MessageCircle,
  Shield,
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react'

interface AdminDashboardProps {
  onSectionChange: (section: string) => void
}

export function AdminDashboard({ onSectionChange }: AdminDashboardProps) {
  const stats = [
    { title: 'Active Students', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Crisis Alerts', value: '3', change: 'This week', icon: AlertTriangle, color: 'text-red-600' },
    { title: 'Counseling Sessions', value: '156', change: 'This month', icon: Calendar, color: 'text-green-600' },
    { title: 'Avg. Mood Score', value: '7.2/10', change: '+0.3', icon: TrendingUp, color: 'text-purple-600' },
  ]

  const alerts = [
    { type: 'crisis', message: 'Student requires immediate attention', time: '5 min ago', severity: 'high' },
    { type: 'system', message: 'AI chatbot usage increased 25%', time: '2 hours ago', severity: 'medium' },
    { type: 'appointment', message: '12 counseling sessions scheduled today', time: '3 hours ago', severity: 'low' },
  ]

  const recentActivity = [
    { action: 'Crisis intervention completed', user: 'Dr. Smith', time: '1 hour ago' },
    { action: 'Monthly report generated', user: 'System', time: '2 hours ago' },
    { action: 'New counselor onboarded', user: 'HR Department', time: '1 day ago' },
    { action: 'Student welfare check', user: 'Dr. Johnson', time: '1 day ago' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Administrative Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Monitor student mental health and system performance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Shield className="w-3 h-3 mr-1" />
                System Healthy
              </Badge>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => onSectionChange('analytics')}
                    >
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                      <span className="text-sm">View Analytics</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => onSectionChange('crisis')}
                    >
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <span className="text-sm">Crisis Management</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => onSectionChange('students')}
                    >
                      <Users className="w-6 h-6 text-green-600" />
                      <span className="text-sm">Student Overview</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">by {activity.user}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-l-4 ${
                          alert.severity === 'high'
                            ? 'bg-red-50 border-red-500 text-red-800'
                            : alert.severity === 'medium'
                            ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                            : 'bg-blue-50 border-blue-500 text-blue-800'
                        }`}
                      >
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs opacity-75 mt-1">{alert.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Staff on Duty */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Staff on Duty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Dr. Sarah Johnson', role: 'Crisis Counselor', status: 'Available' },
                      { name: 'Dr. Michael Chen', role: 'Therapist', status: 'In Session' },
                      { name: 'Lisa Rodriguez', role: 'Peer Counselor', status: 'Available' },
                    ].map((staff, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500">
                          <AvatarFallback className="text-white text-xs">
                            {staff.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{staff.name}</p>
                          <p className="text-xs text-muted-foreground">{staff.role}</p>
                        </div>
                        <Badge 
                          variant={staff.status === 'Available' ? 'default' : 'secondary'}
                          className={`text-xs ${
                            staff.status === 'Available' 
                              ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                              : ''
                          }`}
                        >
                          {staff.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <CheckCircle className="w-10 h-10 mx-auto" />
                    <div>
                      <p className="text-xl font-bold">94.2%</p>
                      <p className="text-sm opacity-90">System Uptime</p>
                    </div>
                    <p className="text-xs opacity-75">
                      Last 30 days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}