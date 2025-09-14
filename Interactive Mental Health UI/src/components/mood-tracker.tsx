import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Calendar } from './ui/calendar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  Heart, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Save,
  Smile,
  Meh,
  Frown,
  Sun,
  Cloud,
  CloudRain,
  Zap
} from 'lucide-react'

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [moodNote, setMoodNote] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  
  const moodOptions = [
    { value: 1, label: 'Very Low', emoji: '😞', color: 'from-red-500 to-red-600', icon: CloudRain },
    { value: 2, label: 'Low', emoji: '😕', color: 'from-orange-500 to-red-500', icon: Cloud },
    { value: 3, label: 'Poor', emoji: '😐', color: 'from-yellow-500 to-orange-500', icon: Cloud },
    { value: 4, label: 'Fair', emoji: '🙂', color: 'from-yellow-400 to-yellow-500', icon: Sun },
    { value: 5, label: 'Okay', emoji: '😊', color: 'from-green-400 to-yellow-400', icon: Sun },
    { value: 6, label: 'Good', emoji: '😄', color: 'from-green-500 to-green-400', icon: Sun },
    { value: 7, label: 'Great', emoji: '😁', color: 'from-blue-400 to-green-500', icon: Zap },
    { value: 8, label: 'Excellent', emoji: '🤩', color: 'from-blue-500 to-blue-400', icon: Zap },
    { value: 9, label: 'Amazing', emoji: '🥳', color: 'from-purple-500 to-blue-500', icon: Zap },
    { value: 10, label: 'Perfect', emoji: '✨', color: 'from-purple-600 to-purple-500', icon: Zap },
  ]

  const moodHistory = [
    { date: '2024-01-07', mood: 8, note: 'Had a great study session and felt productive' },
    { date: '2024-01-06', mood: 6, note: 'Feeling okay, a bit tired from exams' },
    { date: '2024-01-05', mood: 7, note: 'Good day overall, met friends for coffee' },
    { date: '2024-01-04', mood: 5, note: 'Neutral day, nothing special happened' },
    { date: '2024-01-03', mood: 9, note: 'Fantastic day! Got good news about internship' },
  ]

  const saveMoodEntry = () => {
    if (selectedMood) {
      // Here you would save to backend/database
      console.log('Saving mood entry:', { mood: selectedMood, note: moodNote, date: selectedDate })
      setSelectedMood(null)
      setMoodNote('')
    }
  }

  const getMoodStats = () => {
    const moods = moodHistory.map(entry => entry.mood)
    const average = moods.reduce((a, b) => a + b, 0) / moods.length
    const trend = moods.slice(-3).reduce((a, b) => a + b, 0) / 3 - moods.slice(-6, -3).reduce((a, b) => a + b, 0) / 3
    
    return { average: average.toFixed(1), trend: trend > 0 ? 'improving' : trend < 0 ? 'declining' : 'stable' }
  }

  const stats = getMoodStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Mood Tracker
          </h1>
          <p className="text-muted-foreground">
            Track your daily emotions and discover patterns in your mental wellness journey.
          </p>
        </motion.div>

        <Tabs defaultValue="track" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="track">Track Mood</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="track" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mood Selection */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        How are you feeling today?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                        {moodOptions.map((mood, index) => (
                          <motion.div
                            key={mood.value}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Card 
                              className={`cursor-pointer transition-all duration-300 border-2 ${
                                selectedMood === mood.value 
                                  ? 'border-primary shadow-lg scale-105' 
                                  : 'border-transparent hover:border-muted-foreground/20 hover:shadow-md'
                              }`}
                              onClick={() => setSelectedMood(mood.value)}
                            >
                              <CardContent className="p-4 text-center">
                                <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br ${mood.color} flex items-center justify-center text-white text-xl`}>
                                  {mood.emoji}
                                </div>
                                <p className="text-sm font-medium">{mood.label}</p>
                                <p className="text-xs text-muted-foreground">{mood.value}/10</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {selectedMood && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Add a note about your mood (optional)
                            </label>
                            <Textarea
                              placeholder="What's contributing to how you feel today?"
                              value={moodNote}
                              onChange={(e) => setMoodNote(e.target.value)}
                              className="bg-white/80"
                            />
                          </div>
                          
                          <Button 
                            onClick={saveMoodEntry}
                            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                            size="lg"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Save Mood Entry
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Calendar & Stats */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        Select Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => date && setSelectedDate(date)}
                        className="rounded-md border-0"
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <TrendingUp className="w-8 h-8 mx-auto" />
                        <div>
                          <p className="text-2xl font-bold">{stats.average}/10</p>
                          <p className="text-sm opacity-90">Average Mood</p>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          Trend: {stats.trend}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Mood History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {moodHistory.map((entry, index) => {
                      const moodOption = moodOptions.find(m => m.value === entry.mood)
                      return (
                        <motion.div
                          key={entry.date}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-4 p-4 rounded-lg bg-muted/50"
                        >
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${moodOption?.color} flex items-center justify-center text-white`}>
                            {moodOption?.emoji}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="font-medium">{moodOption?.label}</p>
                              <Badge variant="outline">{entry.mood}/10</Badge>
                              <span className="text-sm text-muted-foreground">{entry.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{entry.note}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Weekly Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
                        const avgMood = Math.floor(Math.random() * 3) + 6 // Random for demo
                        return (
                          <div key={day} className="flex items-center justify-between">
                            <span className="text-sm">{day}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                                  style={{ width: `${(avgMood / 10) * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-8">{avgMood}/10</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Mood Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-sm text-green-800">
                          <strong>Great job!</strong> Your mood has been consistently positive this week.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Pattern detected:</strong> You tend to feel better on weekends.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                        <p className="text-sm text-purple-800">
                          <strong>Suggestion:</strong> Consider scheduling relaxing activities during weekdays.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}