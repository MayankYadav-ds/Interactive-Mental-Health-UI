import { motion } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback } from './ui/avatar'
import { 
  Bot, 
  Send, 
  Mic, 
  Heart, 
  Lightbulb,
  MessageCircle,
  User,
  Volume2,
  MoreVertical
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI mental health companion. I'm here to listen, support, and provide guidance whenever you need it. How are you feeling today?",
      timestamp: new Date(),
      suggestions: ["I'm feeling anxious", "I need motivation", "Help me relax", "I'm having trouble sleeping"]
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(content)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse.content,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage: string): { content: string, suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety')) {
      return {
        content: "I understand you're feeling anxious. That's completely normal and you're not alone. Let's try some breathing exercises together. Take a deep breath in for 4 counts, hold for 4, then exhale for 6. This can help activate your parasympathetic nervous system and reduce anxiety.",
        suggestions: ["Try breathing exercise", "Tell me more", "What triggers my anxiety?", "Coping strategies"]
      }
    }
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('stressed')) {
      return {
        content: "Stress can be overwhelming, but there are effective ways to manage it. Consider breaking down big tasks into smaller, manageable steps. Also, remember to take regular breaks and practice self-compassion. What's the main source of your stress right now?",
        suggestions: ["Study stress", "Work pressure", "Relationship issues", "Time management tips"]
      }
    }
    
    if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia')) {
      return {
        content: "Good sleep is crucial for mental health. Try establishing a bedtime routine: no screens 1 hour before bed, keep your room cool and dark, and consider some gentle stretching or meditation. What's been affecting your sleep the most?",
        suggestions: ["Sleep hygiene tips", "Meditation for sleep", "My sleep schedule", "Relaxation techniques"]
      }
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed')) {
      return {
        content: "I hear that you're going through a difficult time. Your feelings are valid, and it's okay to not be okay sometimes. Small activities like going for a walk, connecting with a friend, or engaging in a hobby you enjoy can help. Have you been able to do anything that brings you even a little joy recently?",
        suggestions: ["Activities to try", "Talk to someone", "Professional help", "Self-care ideas"]
      }
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('unmotivated')) {
      return {
        content: "Lack of motivation is something many students experience. Start with one small, achievable task. Success builds momentum! Also, remind yourself of your goals and why they matter to you. What's one small thing you could accomplish today?",
        suggestions: ["Set small goals", "Find my purpose", "Study motivation", "Celebrate small wins"]
      }
    }
    
    // Default response
    return {
      content: "Thank you for sharing that with me. I'm here to listen and support you. Can you tell me more about what you're experiencing? Sometimes talking through our thoughts and feelings can provide clarity and relief.",
      suggestions: ["Tell me more", "How can I cope?", "I need encouragement", "Breathing exercise"]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950 dark:via-cyan-950/50 dark:to-teal-950/50 bg-pattern-grid gradient-mesh pt-28 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
            AI Mental Health Support
          </h1>
          <p className="text-muted-foreground">
            Your compassionate AI companion is here to listen, support, and guide you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/60 dark:bg-card/60 backdrop-blur-sm border-0 dark:border shadow-lg h-[600px] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">AI Companion</CardTitle>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">Online</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 max-h-[400px]">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.type === 'bot' && (
                          <Avatar className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500">
                            <AvatarFallback>
                              <Bot className="w-4 h-4 text-white" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div className={`max-w-[70%] ${message.type === 'user' ? 'order-first' : ''}`}>
                          <div
                            className={`p-3 rounded-2xl ${
                              message.type === 'user'
                                ? 'bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-600 dark:to-teal-600 text-white ml-auto'
                                : 'bg-white dark:bg-card shadow-sm border dark:border-border'
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                          
                          {message.suggestions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.suggestions.map((suggestion, idx) => (
                                <Button
                                  key={idx}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => sendMessage(suggestion)}
                                  className="text-xs bg-white/80 dark:bg-secondary/60 hover:bg-white dark:hover:bg-secondary"
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                          
                          <p className="text-xs text-muted-foreground mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>

                        {message.type === 'user' && (
                          <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500">
                            <AvatarFallback>
                              <User className="w-4 h-4 text-white" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <Avatar className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500">
                          <AvatarFallback>
                            <Bot className="w-4 h-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-white dark:bg-card shadow-sm border dark:border-border p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t dark:border-border bg-white/50 dark:bg-card/50">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                        className="flex-1 bg-white dark:bg-input"
                      />
                      <Button
                        onClick={() => sendMessage(inputMessage)}
                        disabled={!inputMessage.trim() || isTyping}
                        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Mic className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: "I'm feeling anxious", icon: Heart, color: "from-red-500 to-pink-500" },
                    { text: "Need motivation", icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
                    { text: "Help me relax", icon: MessageCircle, color: "from-green-500 to-teal-500" },
                    { text: "Breathing exercise", icon: Volume2, color: "from-blue-500 to-purple-500" }
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left bg-white/80 hover:bg-white"
                      onClick={() => sendMessage(action.text)}
                    >
                      <div className={`w-6 h-6 rounded bg-gradient-to-br ${action.color} flex items-center justify-center mr-3`}>
                        <action.icon className="w-3 h-3 text-white" />
                      </div>
                      {action.text}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-teal-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Bot className="w-12 h-12 mx-auto" />
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Support</h3>
                      <p className="text-sm opacity-90">
                        Your AI companion is always here to listen and provide support whenever you need it.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">Private</Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">Secure</Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">Empathetic</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-amber-50 border-amber-200 shadow-lg">
                <CardContent className="p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> This AI companion provides supportive guidance but is not a replacement for professional mental health care. If you're experiencing a crisis, please contact emergency services or a mental health professional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
