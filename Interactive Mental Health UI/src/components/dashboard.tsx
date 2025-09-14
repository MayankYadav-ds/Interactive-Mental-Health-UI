import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import { 
  Heart, 
  MessageCircle, 
  BookOpen,
  AlertCircle,
  TrendingUp,
  Activity,
  Award
} from 'lucide-react'

interface DashboardProps {
  onSectionChange: (section: string) => void
  userData: any
}

export function Dashboard({ onSectionChange, userData }: DashboardProps) {
  const quickActions = [
    {
      title: 'Track Your Mood',
      description: 'Log how you\'re feeling today',
      icon: Heart,
      action: () => onSectionChange('mood'),
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Chat with AI Support',
      description: 'Get instant support and guidance',
      icon: MessageCircle,
      action: () => onSectionChange('chatbot'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Browse Resources',
      description: 'Self-help articles and exercises',
      icon: BookOpen,
      action: () => onSectionChange('resources'),
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const moodData = [
    { date: 'Mon', mood: 7 },
    { date: 'Tue', mood: 6 },
    { date: 'Wed', mood: 8 },
    { date: 'Thu', mood: 5 },
    { date: 'Fri', mood: 9 },
    { date: 'Sat', mood: 8 },
    { date: 'Sun', mood: 7 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950/50 dark:to-purple-950/50 bg-pattern-dots gradient-mesh pt-28 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Welcome back, {userData?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                {userData?.program} • {userData?.year}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                <Award className="w-3 h-3 mr-1" />
                7-day streak
              </Badge>
              <Button 
                variant="outline" 
                className="bg-white dark:bg-card hover:bg-white/80 dark:hover:bg-card/80"
                onClick={() => onSectionChange('crisis')}
              >
                <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                Need help?
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Current Mood', value: '😊 Good', icon: Heart, color: 'text-pink-600' },
            { title: 'Weekly Average', value: '7.2/10', icon: TrendingUp, color: 'text-green-600' },
            { title: 'AI Chats', value: '12', icon: MessageCircle, color: 'text-blue-600' },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-card border-0 dark:border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white dark:bg-card border-0 dark:border shadow-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={action.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center space-y-2 bg-white dark:bg-card hover:bg-gray-50 dark:hover:bg-accent"
                          onClick={action.action}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                            <action.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium">{action.title}</p>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mood Trend */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6"
            >
              <Card className="bg-white dark:bg-card border-0 dark:border shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Weekly Mood Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between h-24 gap-2">
                    {moodData.map((day, index) => (
                      <motion.div
                        key={day.date}
                        initial={{ height: 0 }}
                        animate={{ height: `${(day.mood / 10) * 100}%` }}
                        transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                        className="flex flex-col items-center flex-1"
                      >
                        <div 
                          className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-md flex items-end justify-center pb-1"
                        >
                          <span className="text-white text-xs font-medium">{day.mood}</span>
                        </div>
                        <span className="text-xs text-muted-foreground mt-2">{day.date}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <Award className="w-8 h-8 mx-auto" />
                    <div>
                      <h3 className="font-semibold">Today's Goal</h3>
                      <p className="text-sm opacity-90">Take 10 minutes for mindfulness</p>
                    </div>
                    <Progress value={70} className="bg-white/20 h-2" />
                    <p className="text-sm opacity-90">7/10 minutes completed</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wellness Tip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-white dark:bg-card border-0 dark:border shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto">
                      <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Wellness Tip</h3>
                      <p className="text-sm text-muted-foreground">
                        Take short breaks between study sessions to prevent burnout
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-2">
                      "You are capable of amazing things."
                    </p>
                    <p className="text-xs opacity-90">Daily Inspiration</p>
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
