import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share,
  Plus,
  Search,
  Filter,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Lock,
  Globe
} from 'lucide-react'

export function Community() {
  const [newPostContent, setNewPostContent] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts', count: 245 },
    { id: 'anxiety', label: 'Anxiety Support', count: 89 },
    { id: 'depression', label: 'Depression', count: 67 },
    { id: 'stress', label: 'Study Stress', count: 45 },
    { id: 'relationships', label: 'Relationships', count: 34 },
    { id: 'motivation', label: 'Motivation', count: 28 }
  ]

  const posts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "SM",
      title: "Dealing with exam anxiety - what works for you?",
      content: "I've been struggling with severe anxiety during exams. My heart races, I can't focus, and sometimes I go blank even though I know the material. Has anyone found techniques that really help?",
      category: "anxiety",
      timestamp: "2 hours ago",
      likes: 23,
      comments: 8,
      isAnonymous: false,
      isPinned: false,
      tags: ["exams", "anxiety", "coping"]
    },
    {
      id: 2,
      author: "Anonymous",
      avatar: "A",
      title: "Feeling overwhelmed with everything",
      content: "University, part-time job, family expectations... I feel like I'm drowning. Some days I don't even want to get out of bed. How do you manage when everything feels like too much?",
      category: "depression",
      timestamp: "5 hours ago",
      likes: 45,
      comments: 12,
      isAnonymous: true,
      isPinned: true,
      tags: ["overwhelmed", "support", "depression"]
    },
    {
      id: 3,
      author: "Alex J.",
      avatar: "AJ",
      title: "Study group success story!",
      content: "Just wanted to share that joining a study group through this platform has been amazing! Not only are my grades improving, but I've made real friends who understand the struggles. Don't be afraid to reach out!",
      category: "motivation",
      timestamp: "1 day ago",
      likes: 67,
      comments: 15,
      isAnonymous: false,
      isPinned: false,
      tags: ["success", "study-groups", "friendship"]
    },
    {
      id: 4,
      author: "Anonymous",
      avatar: "A",
      title: "Relationship stress affecting my mental health",
      content: "My relationship with my partner has been rocky lately and it's affecting my ability to focus on studies and self-care. How do you balance relationship issues with taking care of your mental health?",
      category: "relationships",
      timestamp: "2 days ago",
      likes: 34,
      comments: 19,
      isAnonymous: true,
      isPinned: false,
      tags: ["relationships", "balance", "self-care"]
    }
  ]

  const supportGroups = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      description: "A safe space to share experiences and coping strategies for anxiety",
      members: 234,
      isPrivate: false,
      recentActivity: "Active now",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      name: "Study Stress Solutions",
      description: "Tips and support for managing academic pressure",
      members: 189,
      isPrivate: false,
      recentActivity: "2 hours ago",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      name: "Mindfulness & Meditation",
      description: "Daily mindfulness practices and guided sessions",
      members: 156,
      isPrivate: false,
      recentActivity: "4 hours ago",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Crisis Support Network",
      description: "Immediate peer support for mental health emergencies",
      members: 98,
      isPrivate: true,
      recentActivity: "Always active",
      color: "from-red-500 to-orange-500"
    }
  ]

  const filteredPosts = posts.filter(post => 
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.content.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const createPost = () => {
    if (newPostContent.trim()) {
      // Here you would send to backend
      console.log('Creating post:', newPostContent)
      setNewPostContent('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950/50 dark:to-rose-950/50 bg-pattern-dots gradient-mesh pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">
            Community Support
          </h1>
          <p className="text-muted-foreground">
            Connect with fellow students, share experiences, and find support in our caring community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/60 dark:bg-card/60 backdrop-blur-sm border-0 dark:border shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Share with the Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="What's on your mind? Share your thoughts, ask for advice, or offer support..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="min-h-[100px] bg-white/80 dark:bg-input"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>Public post</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-xs">
                        Change
                      </Button>
                    </div>
                    <Button 
                      onClick={createPost}
                      disabled={!newPostContent.trim()}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/80 dark:bg-input"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600'
                        : 'bg-white/80 hover:bg-white dark:bg-secondary/60 dark:hover:bg-secondary'
                    }`}
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className={`bg-white/60 dark:bg-card/60 backdrop-blur-sm border-0 dark:border shadow-lg hover:shadow-xl transition-all duration-300 ${
                    post.isPinned ? 'ring-2 ring-yellow-200 dark:ring-yellow-600/50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className={`w-10 h-10 ${
                          post.isAnonymous 
                            ? 'bg-gradient-to-br from-gray-400 to-gray-500' 
                            : 'bg-gradient-to-br from-purple-500 to-pink-500'
                        }`}>
                          <AvatarFallback className="text-white">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{post.author}</span>
                            {post.isAnonymous && (
                              <Badge variant="outline" className="text-xs">
                                <Lock className="w-3 h-3 mr-1" />
                                Anonymous
                              </Badge>
                            )}
                            {post.isPinned && (
                              <Badge variant="outline" className="text-xs bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-600/50">
                                Pinned
                              </Badge>
                            )}
                            <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                          </div>
                          
                          <h3 className="font-semibold mb-2">{post.title}</h3>
                          <p className="text-muted-foreground mb-4">{post.content}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-6">
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                              <Share className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Users className="w-12 h-12 mx-auto" />
                    <div>
                      <p className="text-2xl font-bold">2,847</p>
                      <p className="text-sm opacity-90">Active Members</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-lg font-semibold">156</p>
                        <p className="text-xs opacity-90">Online Now</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">89</p>
                        <p className="text-xs opacity-90">New Today</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Groups */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-white/60 dark:bg-card/60 backdrop-blur-sm border-0 dark:border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Support Groups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportGroups.map((group, index) => (
                    <div
                      key={group.id}
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 dark:bg-muted/30 dark:hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                          {group.isPrivate ? <Lock className="w-4 h-4 text-white" /> : <Users className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">{group.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{group.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{group.members} members</span>
                            <span className="text-xs text-green-600 dark:text-green-400">{group.recentActivity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700">
                    Browse All Groups
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 shadow-lg">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Community Guidelines</span>
                    </div>
                    <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Be respectful and supportive</li>
                      <li>• No medical advice - seek professionals</li>
                      <li>• Respect privacy and anonymity</li>
                      <li>• Report concerning content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Crisis Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800 shadow-lg">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">Need Immediate Help?</span>
                    </div>
                    <p className="text-xs text-red-700 dark:text-red-300">
                      If you're in crisis, please contact emergency services or a mental health professional immediately.
                    </p>
                    <Button size="sm" variant="outline" className="w-full border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/20">
                      Crisis Resources
                    </Button>
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
