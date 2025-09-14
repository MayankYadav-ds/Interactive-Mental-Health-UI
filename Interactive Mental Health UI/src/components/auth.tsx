import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { Heart, Shield, GraduationCap, Building2 } from 'lucide-react'

interface AuthProps {
  onLogin: (role: 'student' | 'admin', userData: any) => void
}

export function Auth({ onLogin }: AuthProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [studentId, setStudentId] = useState('')

  const handleStudentLogin = () => {
    // Mock student login
    onLogin('student', {
      id: '1',
      name: 'John Smith',
      email: email || 'john.smith@university.edu',
      studentId: studentId || 'STU123456',
      program: 'Computer Science',
      year: 'Junior'
    })
  }

  const handleAdminLogin = () => {
    // Mock admin login
    onLogin('admin', {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: email || 'sarah.johnson@university.edu',
      role: 'Mental Health Coordinator',
      department: 'Student Services'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MindSupport
          </h1>
          <p className="text-muted-foreground mt-2">
            Digital Mental Health Support System
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-6">
            <Tabs defaultValue="student" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="text-center mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    Student Access
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="student-email">University Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="john.smith@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input
                      id="student-id"
                      placeholder="STU123456"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleStudentLogin}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  size="lg"
                >
                  Sign In as Student
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Access mood tracking, AI support, resources, and peer community
                </p>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <div className="text-center mb-4">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    <Shield className="w-3 h-3 mr-1" />
                    Administrative Access
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Staff Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="sarah.johnson@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleAdminLogin}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                  size="lg"
                >
                  Sign In as Admin
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Access analytics, student management, and system oversight
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            University of Excellence Mental Health Initiative
          </p>
        </div>
      </motion.div>
    </div>
  )
}