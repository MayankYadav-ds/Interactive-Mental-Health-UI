import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Search,
  Clock,
  Users,
  Heart,
  Brain,
  Moon,
  Zap,
  PlayCircle,
  Download,
  Bookmark
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Resources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'anxiety', label: 'Anxiety', icon: Heart },
    { id: 'stress', label: 'Stress Management', icon: Brain },
    { id: 'sleep', label: 'Sleep', icon: Moon },
    { id: 'motivation', label: 'Motivation', icon: Zap },
  ]

  const articles = [
    {
      id: 1,
      title: "Understanding and Managing Academic Anxiety",
      description: "Learn effective strategies to cope with test anxiety and academic pressure.",
      category: "anxiety",
      readTime: 8,
      popularity: 142,
      tags: ["anxiety", "academic", "coping"],
      image: "https://images.unsplash.com/photo-1635373390303-cc78167278ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU3MTMwMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "The Science of Better Sleep for Students",
      description: "Evidence-based techniques to improve your sleep quality and academic performance.",
      category: "sleep",
      readTime: 12,
      popularity: 89,
      tags: ["sleep", "health", "productivity"],
      image: "https://images.unsplash.com/photo-1660128356943-e1f893a56a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VwcG9ydCUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzU3MTc0OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Building Resilience During Challenging Times",
      description: "Develop mental strength and bounce back from setbacks with proven strategies.",
      category: "stress",
      readTime: 10,
      popularity: 267,
      tags: ["resilience", "mindset", "growth"],
      image: "https://images.unsplash.com/photo-1620442771341-4e157b3b6cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXB8ZW58MXx8fHwxNzU3MjE3NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Finding Your Inner Motivation",
      description: "Discover what drives you and how to maintain motivation during difficult periods.",
      category: "motivation",
      readTime: 6,
      popularity: 156,
      tags: ["motivation", "goals", "purpose"],
      image: "https://images.unsplash.com/photo-1635373390303-cc78167278ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU3MTMwMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise for Anxiety",
      duration: "5:32",
      category: "anxiety",
      thumbnail: "https://images.unsplash.com/photo-1635373390303-cc78167278ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU3MTMwMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 1205
    },
    {
      id: 2,
      title: "Progressive Muscle Relaxation",
      duration: "15:45",
      category: "stress",
      thumbnail: "https://images.unsplash.com/photo-1660128356943-e1f893a56a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VwcG9ydCUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzU3MTc0OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 892
    },
    {
      id: 3,
      title: "Sleep Stories for Better Rest",
      duration: "25:12",
      category: "sleep",
      thumbnail: "https://images.unsplash.com/photo-1620442771341-4e157b3b6cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXB8ZW58MXx8fHwxNzU3MjE3NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 2134
    }
  ]

  const audioGuides = [
    {
      id: 1,
      title: "Mindfulness Meditation for Beginners",
      duration: "10:00",
      category: "stress",
      plays: 3456
    },
    {
      id: 2,
      title: "Confidence Building Affirmations",
      duration: "8:30",
      category: "motivation",
      plays: 1892
    },
    {
      id: 3,
      title: "Body Scan for Better Sleep",
      duration: "20:15",
      category: "sleep",
      plays: 2741
    }
  ]

  const filteredArticles = articles.filter(article => 
    (activeCategory === 'all' || article.category === activeCategory) &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  )

  const filteredVideos = videos.filter(video =>
    (activeCategory === 'all' || video.category === activeCategory) &&
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredAudio = audioGuides.filter(audio =>
    (activeCategory === 'all' || audio.category === activeCategory) &&
    audio.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-teal-900/20 pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Self-Help Resources
          </h1>
          <p className="text-muted-foreground">
            Discover articles, videos, and audio guides to support your mental wellness journey.
          </p>
        </motion.div>

        {/* Search and Categories */}
        <div className="mb-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-teal-500'
                      : 'bg-white/80 hover:bg-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              Audio Guides
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                          <Bookmark className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                          {categories.find(cat => cat.id === article.category)?.label}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {article.popularity} readers
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <PlayCircle className="w-8 h-8 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Badge variant="secondary" className="bg-black/70 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <Badge variant="outline">
                          {categories.find(cat => cat.id === video.category)?.label}
                        </Badge>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAudio.map((audio, index) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{audio.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{audio.duration}</span>
                            <span>{audio.plays.toLocaleString()} plays</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Play
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}