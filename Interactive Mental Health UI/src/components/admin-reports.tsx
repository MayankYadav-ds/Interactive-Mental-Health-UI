import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Progress } from './ui/progress'
import { Alert, AlertDescription } from './ui/alert'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'
import { Search, Download, FileText, Users, AlertTriangle, TrendingUp, Filter, Calendar, Eye, Phone } from 'lucide-react'

export function AdminReports() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterDepartment, setFilterDepartment] = useState('all')
  const [selectedTimeframe, setSelectedTimeframe] = useState('month')

  // Mock data for all student medical records
  const studentRecords = [
    {
      id: 'STU001',
      name: 'Emma Thompson',
      department: 'Computer Science',
      year: '3rd Year',
      lastAssessment: '2024-03-25',
      riskLevel: 'Low',
      status: 'Active',
      totalSessions: 12,
      recentMood: 7.2,
      provider: 'Dr. Sarah Wilson',
      nextAppointment: '2024-04-05',
      emergencyContact: '+1-555-0123',
      condition: 'Mild Anxiety'
    },
    {
      id: 'STU002',
      name: 'James Rodriguez',
      department: 'Psychology',
      year: '2nd Year',
      lastAssessment: '2024-03-22',
      riskLevel: 'Medium',
      status: 'Active',
      totalSessions: 8,
      recentMood: 5.5,
      provider: 'Dr. Michael Brown',
      nextAppointment: '2024-04-02',
      emergencyContact: '+1-555-0124',
      condition: 'Depression, Anxiety'
    },
    {
      id: 'STU003',
      name: 'Sarah Chen',
      department: 'Biology',
      year: '4th Year',
      lastAssessment: '2024-03-20',
      riskLevel: 'High',
      status: 'Critical',
      totalSessions: 18,
      recentMood: 3.8,
      provider: 'Dr. Emily Chen',
      nextAppointment: '2024-03-28',
      emergencyContact: '+1-555-0125',
      condition: 'Severe Depression'
    },
    {
      id: 'STU004',
      name: 'Michael Johnson',
      department: 'Engineering',
      year: '1st Year',
      lastAssessment: '2024-03-18',
      riskLevel: 'Low',
      status: 'Active',
      totalSessions: 5,
      recentMood: 6.9,
      provider: 'Dr. Sarah Wilson',
      nextAppointment: '2024-04-08',
      emergencyContact: '+1-555-0126',
      condition: 'Adjustment Issues'
    },
    {
      id: 'STU005',
      name: 'Lisa Wang',
      department: 'Business',
      year: '3rd Year',
      lastAssessment: '2024-03-15',
      riskLevel: 'Medium',
      status: 'Monitoring',
      totalSessions: 15,
      recentMood: 6.1,
      provider: 'Dr. Michael Brown',
      nextAppointment: '2024-04-10',
      emergencyContact: '+1-555-0127',
      condition: 'Stress, Sleep Issues'
    },
    {
      id: 'STU006',
      name: 'David Park',
      department: 'Art',
      year: '2nd Year',
      lastAssessment: '2024-03-12',
      riskLevel: 'Low',
      status: 'Active',
      totalSessions: 7,
      recentMood: 7.8,
      provider: 'Dr. Emily Chen',
      nextAppointment: '2024-04-15',
      emergencyContact: '+1-555-0128',
      condition: 'Social Anxiety'
    }
  ]

  // Analytics data
  const monthlyTrends = [
    { month: 'Oct', newCases: 15, resolved: 8, active: 45 },
    { month: 'Nov', newCases: 22, resolved: 12, active: 55 },
    { month: 'Dec', newCases: 18, resolved: 15, active: 58 },
    { month: 'Jan', newCases: 28, resolved: 10, active: 76 },
    { month: 'Feb', newCases: 25, resolved: 18, active: 83 },
    { month: 'Mar', newCases: 32, resolved: 20, active: 95 }
  ]

  const riskDistribution = [
    { name: 'Low Risk', value: 45, color: '#82ca9d' },
    { name: 'Medium Risk', value: 35, color: '#ffc658' },
    { name: 'High Risk', value: 15, color: '#ff7300' },
    { name: 'Critical', value: 5, color: '#d4183d' }
  ]

  const departmentStats = [
    { department: 'Computer Science', students: 28, avgMood: 6.2, sessions: 156 },
    { department: 'Psychology', students: 22, avgMood: 6.8, sessions: 134 },
    { department: 'Engineering', students: 35, avgMood: 5.9, sessions: 198 },
    { department: 'Biology', students: 18, avgMood: 6.5, sessions: 98 },
    { department: 'Business', students: 25, avgMood: 6.1, sessions: 145 },
    { department: 'Art', students: 15, avgMood: 7.1, sessions: 89 }
  ]

  const overallStats = {
    totalStudents: 143,
    activeStudents: 95,
    criticalCases: 7,
    avgMoodScore: 6.4,
    totalSessions: 820,
    monthlyIncrease: 12
  }

  const filteredRecords = studentRecords.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || record.status.toLowerCase() === filterStatus.toLowerCase()
    const matchesDepartment = filterDepartment === 'all' || record.department === filterDepartment
    
    return matchesSearch && matchesStatus && matchesDepartment
  })

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'High': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Monitoring': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 bg-pattern-grid gradient-mesh py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="bg-gradient-to-r from-slate-600 to-blue-600 dark:from-slate-300 dark:to-blue-300 bg-clip-text text-transparent mb-2">
                Student Health Reports
              </h1>
              <p className="text-muted-foreground">Comprehensive medical records and mental health analytics</p>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:mt-0">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Critical Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-300">
                <strong>{overallStats.criticalCases} students</strong> require immediate attention. Review high-risk cases in the detailed reports below.
              </AlertDescription>
            </Alert>
          </motion.div>

          {/* Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-2xl font-bold">{overallStats.totalStudents}</p>
                    <p className="text-xs text-green-600">+{overallStats.monthlyIncrease}% this month</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Cases</p>
                    <p className="text-2xl font-bold">{overallStats.activeStudents}</p>
                    <Progress value={(overallStats.activeStudents / overallStats.totalStudents) * 100} className="mt-2" />
                  </div>
                  <FileText className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Critical Cases</p>
                    <p className="text-2xl font-bold text-red-600">{overallStats.criticalCases}</p>
                    <p className="text-xs text-muted-foreground">Require immediate attention</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Mood Score</p>
                    <p className="text-2xl font-bold">{overallStats.avgMoodScore}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <p className="text-xs text-green-600">Improving</p>
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="records">Student Records</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Trends</CardTitle>
                    <CardDescription>New cases, resolved cases, and active students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={monthlyTrends}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="active" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="newCases" stackId="2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="resolved" stackId="3" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Level Distribution</CardTitle>
                    <CardDescription>Current risk assessment of all students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={riskDistribution}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {riskDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="records" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Medical Records</CardTitle>
                  <CardDescription>Comprehensive view of all student mental health records</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name, ID, or department..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-[150px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="monitoring">Monitoring</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Psychology">Psychology</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Biology">Biology</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Art">Art</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Records Table */}
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Risk Level</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Recent Mood</TableHead>
                          <TableHead>Sessions</TableHead>
                          <TableHead>Provider</TableHead>
                          <TableHead>Next Appointment</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRecords.map((record) => (
                          <TableRow key={record.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{record.name}</p>
                                <p className="text-sm text-muted-foreground">{record.id} • {record.year}</p>
                              </div>
                            </TableCell>
                            <TableCell>{record.department}</TableCell>
                            <TableCell>
                              <Badge className={getRiskBadgeColor(record.riskLevel)}>{record.riskLevel}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusBadgeColor(record.status)}>{record.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span>{record.recentMood}/10</span>
                                <div className="w-12 h-2 bg-muted rounded-full">
                                  <div 
                                    className="h-full bg-primary rounded-full" 
                                    style={{ width: `${(record.recentMood / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{record.totalSessions}</TableCell>
                            <TableCell>{record.provider}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{new Date(record.nextAppointment).toLocaleDateString()}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Phone className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Session Volume Trends</CardTitle>
                    <CardDescription>Monthly therapy session statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyTrends}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="newCases" stroke="#8884d8" strokeWidth={2} name="New Cases" />
                          <Line type="monotone" dataKey="resolved" stroke="#82ca9d" strokeWidth={2} name="Resolved" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Department Comparison</CardTitle>
                    <CardDescription>Average mood scores by department</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={departmentStats.slice(0, 5)}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis 
                            dataKey="department" 
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            fontSize={12}
                          />
                          <YAxis domain={[0, 10]} />
                          <Tooltip />
                          <Bar dataKey="avgMood" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Statistics</CardTitle>
                  <CardDescription>Mental health metrics by academic department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentStats.map((dept, index) => (
                      <motion.div
                        key={dept.department}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium">{dept.department}</h4>
                          <p className="text-sm text-muted-foreground">{dept.students} students enrolled</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Avg Mood</p>
                            <p className="font-bold">{dept.avgMood}/10</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Total Sessions</p>
                            <p className="font-bold">{dept.sessions}</p>
                          </div>
                          <div className="w-24">
                            <Progress value={(dept.avgMood / 10) * 100} />
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