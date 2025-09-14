import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Calendar, Download, FileText, TrendingUp, TrendingDown, Activity, Heart, Brain, Clock } from 'lucide-react'

interface StudentReportsProps {
  userData?: any
}

export function StudentReports({ userData }: StudentReportsProps) {
  const [selectedMonth, setSelectedMonth] = useState('2024-03')
  const [selectedYear, setSelectedYear] = useState('2024')

  // Mock data for student's monthly records
  const monthlyMoodData = [
    { date: '2024-03-01', mood: 7, anxiety: 4, stress: 5, sleep: 8 },
    { date: '2024-03-03', mood: 6, anxiety: 5, stress: 6, sleep: 6 },
    { date: '2024-03-05', mood: 8, anxiety: 3, stress: 4, sleep: 9 },
    { date: '2024-03-07', mood: 5, anxiety: 7, stress: 8, sleep: 5 },
    { date: '2024-03-10', mood: 7, anxiety: 4, stress: 5, sleep: 7 },
    { date: '2024-03-12', mood: 9, anxiety: 2, stress: 3, sleep: 9 },
    { date: '2024-03-15', mood: 6, anxiety: 6, stress: 7, sleep: 6 },
    { date: '2024-03-18', mood: 8, anxiety: 3, stress: 4, sleep: 8 },
    { date: '2024-03-20', mood: 7, anxiety: 4, stress: 5, sleep: 7 },
    { date: '2024-03-23', mood: 8, anxiety: 3, stress: 4, sleep: 8 },
    { date: '2024-03-25', mood: 9, anxiety: 2, stress: 3, sleep: 9 },
    { date: '2024-03-28', mood: 7, anxiety: 4, stress: 5, sleep: 7 },
    { date: '2024-03-30', mood: 8, anxiety: 3, stress: 4, sleep: 8 }
  ]

  const weeklyProgress = [
    { week: 'Week 1', sessions: 3, goals: 5, completion: 60 },
    { week: 'Week 2', sessions: 4, goals: 5, completion: 80 },
    { week: 'Week 3', sessions: 2, goals: 4, completion: 50 },
    { week: 'Week 4', sessions: 5, goals: 6, completion: 83 }
  ]

  const goalDistribution = [
    { name: 'Stress Management', value: 35, color: '#8884d8' },
    { name: 'Sleep Improvement', value: 25, color: '#82ca9d' },
    { name: 'Anxiety Reduction', value: 20, color: '#ffc658' },
    { name: 'Mood Stability', value: 20, color: '#ff7300' }
  ]

  const medicalReports = [
    {
      id: 1,
      date: '2024-03-25',
      type: 'Mental Health Assessment',
      provider: 'Dr. Sarah Wilson',
      status: 'Complete',
      summary: 'Regular check-up showing improvement in anxiety levels. Continue with current therapy plan.',
      recommendations: ['Continue CBT sessions', 'Maintain sleep schedule', 'Practice mindfulness daily']
    },
    {
      id: 2,
      date: '2024-03-10',
      type: 'Therapy Session Report',
      provider: 'Dr. Michael Brown',
      status: 'Complete',
      summary: 'Progress noted in coping strategies. Student actively engaging in treatment.',
      recommendations: ['Weekly therapy sessions', 'Stress management techniques', 'Regular exercise']
    },
    {
      id: 3,
      date: '2024-02-28',
      type: 'Psychiatric Evaluation',
      provider: 'Dr. Emily Chen',
      status: 'Complete',
      summary: 'Initial assessment completed. Mild anxiety and stress-related concerns identified.',
      recommendations: ['Start therapy program', 'Monitor sleep patterns', 'Campus support groups']
    }
  ]

  const monthlyStats = {
    averageMood: 7.2,
    moodTrend: 'up',
    sessionsCompleted: 14,
    goalsAchieved: 18,
    totalGoals: 22,
    sleepAverage: 7.4,
    stressReduction: 15
  }

  const months = [
    { value: '2024-03', label: 'March 2024' },
    { value: '2024-02', label: 'February 2024' },
    { value: '2024-01', label: 'January 2024' },
    { value: '2023-12', label: 'December 2023' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 bg-pattern-dots gradient-mesh py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-300 dark:to-purple-300 bg-clip-text text-transparent mb-2">
                My Reports & Records
              </h1>
              <p className="text-muted-foreground">Track your mental health journey and progress over time</p>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:mt-0">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="monthly">Monthly Summary</TabsTrigger>
              <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
              <TabsTrigger value="medical">Medical Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="space-y-6 mt-6">
              {/* Monthly Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Mood</p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold">{monthlyStats.averageMood}</p>
                          {monthlyStats.moodTrend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>
                      <Brain className="w-8 h-8 text-violet-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Sessions Completed</p>
                        <p className="text-2xl font-bold">{monthlyStats.sessionsCompleted}</p>
                      </div>
                      <Activity className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Goals Progress</p>
                        <p className="text-2xl font-bold">{Math.round((monthlyStats.goalsAchieved / monthlyStats.totalGoals) * 100)}%</p>
                        <Progress value={(monthlyStats.goalsAchieved / monthlyStats.totalGoals) * 100} className="mt-2" />
                      </div>
                      <Heart className="w-8 h-8 text-red-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Sleep Average</p>
                        <p className="text-2xl font-bold">{monthlyStats.sleepAverage}h</p>
                      </div>
                      <Clock className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mood Tracking Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Mood Tracking</CardTitle>
                  <CardDescription>Your mood, anxiety, stress, and sleep patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyMoodData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis 
                          dataKey="date" 
                          tickFormatter={(value) => new Date(value).getDate().toString()}
                        />
                        <YAxis domain={[0, 10]} />
                        <Tooltip 
                          labelFormatter={(value) => new Date(value).toLocaleDateString()}
                        />
                        <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} name="Mood" />
                        <Line type="monotone" dataKey="anxiety" stroke="#ff7300" strokeWidth={2} name="Anxiety" />
                        <Line type="monotone" dataKey="stress" stroke="#ffc658" strokeWidth={2} name="Stress" />
                        <Line type="monotone" dataKey="sleep" stroke="#82ca9d" strokeWidth={2} name="Sleep" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Sessions completed and goal achievement by week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyProgress}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sessions" fill="#8884d8" name="Sessions" />
                        <Bar dataKey="goals" fill="#82ca9d" name="Goals Set" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Goal Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Goal Focus Areas</CardTitle>
                    <CardDescription>Distribution of your mental health goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={goalDistribution}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {goalDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Summary</CardTitle>
                    <CardDescription>Your achievements this month</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Stress Management</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Sleep Quality</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Anxiety Management</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Mood Stability</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Reports & Records</CardTitle>
                  <CardDescription>Your complete medical history and treatment records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalReports.map((report) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: report.id * 0.1 }}
                        className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <FileText className="w-5 h-5 text-primary" />
                              <h3 className="font-medium">{report.type}</h3>
                              <Badge variant="outline">{report.status}</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(report.date).toLocaleDateString()}
                                </span>
                                <span>Provider: {report.provider}</span>
                              </div>
                            </div>
                            <p className="text-sm mb-3">{report.summary}</p>
                            <div>
                              <p className="text-sm font-medium mb-1">Recommendations:</p>
                              <ul className="text-sm text-muted-foreground list-disc list-inside">
                                {report.recommendations.map((rec, index) => (
                                  <li key={index}>{rec}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}