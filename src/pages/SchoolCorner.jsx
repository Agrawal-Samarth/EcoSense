import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  School, 
  Users, 
  BookOpen, 
  Award, 
  Heart, 
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  CheckCircle,
  User,
  Users2,
  FileText,
  Camera,
  Clock,
  X,
  Quote,
  Share2,
  Send
} from 'lucide-react';

const SchoolCorner = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const schoolInitiatives = [
    {
      title: "Interact Club",
      description: "Interact, Rotary International's youth program, actively engages in environmental initiatives, contributing to a smaller eco footprint through various projects. These projects include collecting and repurposing materials like paper and plastic, promoting sustainable practices, and educating communities about environmental responsibility.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-500",
      achievements: [
        "Through Rotary and the United Nations Environment Programme Community Action, our school's Interact Club plays a good role in nurturing positive attitude among young people to care for the environment and to give back their community, the very same society which helps building them.",
        "Every month in our school to play our part in being sensitive to the eco-footprint we create around us a grain bank donation program has been initiated in the school where students donate grains - fresh and healthy, on their birthdays and these grains are safely delivered to those who are in need.",
        "Organized environmental awareness workshops",
        "Implemented recycling programs in school"
      ]
    },
    {
      title: "Go Sharpener",
      description: "In a world striving toward sustainability, youth-led initiatives like Go Sharpener are playing a powerful role in supporting the United Nations' Sustainable Development Goals (SDGs). This initiative is more than just an awareness drive—it's a movement to sharpen young minds, empower communities, and ignite action for a better planet.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-green-500",
      achievements: [
        "GoSharpener also emphasizes turning digital use into climate-positive action, encouraging users to leverage their phones for environmental causes and share their efforts to inspire others.",
        "Tracking and Measuring Impact: GoSharpener helps users track their eco-actions, such as composting, tree planting, and waste reduction, as well as mindful minutes spent on climate learning.",
        "Promoting Sustainable Practices: The platform offers digital tools and tips for reducing screen time and adopting eco-friendly habits like using public transport, recycling, and conserving energy.",
        "Encouraging Community Engagement: GoSharpener facilitates the sharing of eco-friendly projects and initiatives, fostering a community of mindful and active learners.",
        "Turning Digital Use into Climate Action: The platform enables users to leverage their phones for environmental causes, like supporting afforestation drives, and building a digital sustainability portfolio"
      ]
    },
    {
      title: "Environmental Club",
      description: "Our school has an environmental club where students brainstorm about ways and techniques to make our school more environmentally friendly.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-purple-500",
      achievements: [
        "It has installed a pen box in every classroom, where children can throw waste pens, pencil and stationary, and all of it is sent for recycling",
        "They also spread awareness among the school of different ways you can preserve the environment",
        "Students actively participate in environmental projects",
        "Regular workshops and awareness campaigns"
      ]
    }
  ];

  const studentTeacherBlogs = [
    {
      title: "My Journey Towards Sustainability",
      author: "Priya Sharma, Class XII",
      date: "March 15, 2024",
      excerpt: "How I transformed my daily habits to reduce my carbon footprint and inspired my family to do the same...",
      image: null, // No photo available
      readTime: "5 min read",
      category: "Student Experience",
      fullContent: {
        content: `
          <p class="mb-4">It all started with a simple question in my Environmental Science class: "What is your carbon footprint?" When I calculated mine, I was shocked to discover that my daily choices were contributing significantly to climate change.</p>
          
          <p class="mb-4">I decided to make a change, starting with the easiest things first. I began by reducing my plastic usage - carrying a reusable water bottle, using cloth bags for shopping, and avoiding single-use plastics. My family thought I was being dramatic at first, but they soon joined in when they saw how much money we were saving.</p>
          
          <h3 class="text-xl font-bold mb-3">The Transportation Challenge</h3>
          <p class="mb-4">The biggest change came when I convinced my parents to let me cycle to school. It was a 3-kilometer ride each way, and initially, I was exhausted. But within a month, I was fitter, happier, and saving money on fuel. My friends started joining me, and we formed a cycling group.</p>
          
          <h3 class="text-xl font-bold mb-3">Food Choices Matter</h3>
          <p class="mb-4">I learned that food production contributes to 26% of global greenhouse gas emissions. I started choosing local, seasonal produce and reduced my meat consumption. My family was skeptical about vegetarian meals, but when I showed them delicious plant-based recipes, they became converts.</p>
          
          <h3 class="text-xl font-bold mb-3">The Ripple Effect</h3>
          <p class="mb-4">What started as a personal journey became a community movement. I started a sustainability club at school, and we organized workshops on composting, waste reduction, and energy conservation. We even convinced the school administration to install solar panels.</p>
          
          <p class="mb-4">Today, my carbon footprint is 60% lower than when I started. But more importantly, I've inspired my family, friends, and community to think about their environmental impact. Every small change counts, and together, we can make a big difference.</p>
          
          <blockquote class="border-l-4 border-emerald-500 pl-4 italic text-gray-600">
            "The greatest threat to our planet is the belief that someone else will save it." - Robert Swan
          </blockquote>
        `,
        tags: ["Sustainability", "Personal Journey", "Climate Action", "Student Life"],
        relatedTopics: ["Carbon Footprint", "Sustainable Living", "Youth Activism", "Environmental Education"]
      }
    },
    {
      title: "Understanding Your Ecological Footprint",
      author: "Ms. Paran Mehta",
      date: "March 10, 2024",
      excerpt: "Understanding your ecological footprint is one of the most powerful steps you can take toward living sustainably...",
      image: "/images/teachers/paran-mehta.png",
      readTime: "5 min read",
      category: "Teacher's Perspective",
      fullContent: {
        content: `
          <p class="mb-4">Understanding your ecological footprint is one of the most powerful steps you can take toward living sustainably. It's a measure of how much land, water, and resources you consume to support your lifestyle—everything from the food you eat and the energy you use to the clothes you wear and the waste you produce.</p>
          
          <p class="mb-4">When our individual footprints exceed the planet's capacity to regenerate those resources, we contribute to environmental degradation, climate change, and biodiversity loss. Teaching this concept isn't just about numbers—it's about helping people see the connection between daily choices and global impact.</p>
          
          <p class="mb-4">Whether it's choosing locally grown food, reducing energy use, or rethinking fast fashion, every action counts. The goal isn't guilt—it's awareness, and from awareness comes meaningful change.</p>
          
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "The goal isn't guilt—it's awareness, and from awareness comes meaningful change."
          </blockquote>
        `,
        tags: ["Education", "Environmental Teaching", "Student Engagement", "Sustainability"],
        relatedTopics: ["Environmental Education", "Student Leadership", "School Initiatives", "Climate Literacy"]
      }
    }
  ];

  const celebrityBlogs = [
    {
      title: "Fashion Footprint and Sustainability",
      author: "Emma Watson",
      date: "March 20, 2024",
      excerpt: "As someone who's spent much of my life in the public eye, I've come to realize the immense responsibility that comes with visibility—especially when it comes to sustainability...",
      image: "/images/celebrities/emma-watson.png",
      readTime: "6 min read",
      category: "Celebrity Voice",
      verified: true,
      fullContent: {
        content: `
          <p class="mb-4">As someone who's spent much of my life in the public eye, I've come to realize the immense responsibility that comes with visibility—especially when it comes to sustainability. Fashion has always fascinated me, but I've learned that our wardrobes carry a hidden cost to the planet.</p>
          
          <p class="mb-4">That's why I partnered with ThredUP to launch the Fashion Footprint Calculator, a tool designed to help people understand the environmental impact of their clothing choices and take meaningful steps toward reducing it.</p>
          
          <p class="mb-4">I'm not perfect—like many, I've faced criticism for my own carbon footprint, particularly around travel—but I believe progress matters more than perfection. I try to make conscious choices, support designers who prioritize ethics and sustainability, and use my platform to advocate for the UN's Global Goals.</p>
          
          <p class="mb-4">My hope is that we can all begin to see fashion not just as a form of expression, but as a powerful opportunity to care for the world we share.</p>
          
          <blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-600">
            "Progress matters more than perfection."
          </blockquote>
        `,
        tags: ["Climate Action", "Celebrity Advocacy", "Personal Journey", "Environmental Awareness"],
        relatedTopics: ["Celebrity Influence", "Climate Advocacy", "Sustainable Living", "Environmental Leadership"]
      }
    },
    {
      title: "Our Ecological Footprint",
      author: "Amitabh Bachchan",
      date: "March 18, 2024",
      excerpt: "In the quiet moments between camera flashes and film sets, I often reflect on the legacy we leave—not just in art, but in the soil beneath our feet...",
      image: "/images/celebrities/amitabh-bachchan.png",
      readTime: "5 min read",
      category: "Celebrity Voice",
      verified: true,
      fullContent: {
        content: `
          <p class="mb-4">In the quiet moments between camera flashes and film sets, I often reflect on the legacy we leave—not just in art, but in the soil beneath our feet. Our ecological footprint is not a statistic; it is a story we write with every choice we make.</p>
          
          <p class="mb-4">I have planted saplings in memory of loved ones, not merely as a tribute, but as a promise to the generations yet to come. I have spoken against the scourge of plastic, urging all to refuse what cannot be reused, and to embrace the green good deeds that honor our dharti maa.</p>
          
          <p class="mb-4">The earth is not ours to exploit—it is ours to protect. Let us not wait for calamity to awaken our conscience. Let us act, with humility and resolve, so that our footprints may one day be traced not in carbon, but in compassion.</p>
          
          <blockquote class="border-l-4 border-pink-500 pl-4 italic text-gray-600">
            "Let us act, with humility and resolve, so that our footprints may one day be traced not in carbon, but in compassion."
          </blockquote>
        `,
        tags: ["Sustainable Living", "Celebrity Lifestyle", "Environmental Choices", "Personal Impact"],
        relatedTopics: ["Sustainable Fashion", "Eco-friendly Living", "Celebrity Influence", "Environmental Awareness"]
      }
    }
  ];

  const upcomingEvents = [
    {
      title: "Tree Plantation Drive",
      date: "April 5, 2024",
      time: "9:00 AM",
      location: "School Ground",
      description: "Join us in planting 100 saplings to celebrate Earth Day"
    },
    {
      title: "Environmental Quiz Competition",
      date: "April 12, 2024",
      time: "2:00 PM",
      location: "School Auditorium",
      description: "Test your knowledge about environmental issues and win prizes"
    },
    {
      title: "Waste Management Workshop",
      date: "April 20, 2024",
      time: "10:00 AM",
      location: "Science Lab",
      description: "Learn about composting and waste segregation techniques"
    }
  ];

  const BlogModal = ({ isOpen, onClose, blog }) => {
    if (!isOpen || !blog) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                {blog.image ? (
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <User className="w-20 h-20 mx-auto mb-3 opacity-80" />
                      <p className="text-lg opacity-80">Student Blog</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {blog.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {blog.verified ? <Users2 className="w-4 h-4 text-purple-500" /> : <User className="w-4 h-4 text-blue-500" />}
                      <span className="font-semibold text-gray-800">{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Blog Content */}
                <div 
                  className="prose prose-lg max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: blog.fullContent.content }}
                />

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.fullContent.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Topics */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Related Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.fullContent.relatedTopics.map((topic, index) => (
                      <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                    <Quote className="w-5 h-5" />
                    <span>Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <School className="w-12 h-12 text-blue-200" />
              <h1 className="text-5xl md:text-6xl font-bold">
                School <span className="text-blue-200">Corner</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our school's environmental initiatives, student projects, and inspiring stories from our community and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Initiatives */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students and teachers working together to create a sustainable future through innovative projects and programs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {schoolInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card card-hover"
              >
                <div className={`w-16 h-16 ${initiative.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  {initiative.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student & Teacher Blogs */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stories from Our <span className="text-blue-300">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real experiences and perspectives from our students and teachers on their environmental journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {studentTeacherBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <User className="w-16 h-16 mx-auto mb-2 opacity-80" />
                        <p className="text-sm opacity-80">Student Blog</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{blog.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-300 text-sm">{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{blog.readTime}</span>
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center space-x-1 text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Blogs */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Celebrity <span className="text-gradient">Voices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspiring perspectives from celebrities who are passionate about environmental conservation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {celebrityBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card card-hover overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Users2 className="w-16 h-16 mx-auto mb-2 opacity-80" />
                        <p className="text-sm opacity-80">Celebrity Blog</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    {blog.verified && (
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        <Star className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{blog.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Users2 className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-600 font-semibold text-sm">{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{blog.readTime}</span>
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming <span className="text-green-300">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us in our environmental initiatives and make a difference together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-green-300 text-sm">{event.date}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                
                <button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-300 py-2 px-4 rounded-lg transition-colors duration-300">
                  Join Event
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Share Your <span className="text-gradient">Feedback</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear your thoughts, suggestions, and ideas for improving our environmental initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="form-select">
                    <option>General Feedback</option>
                    <option>Environmental Initiative Suggestion</option>
                    <option>Website Improvement</option>
                    <option>Event Suggestion</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors focus:outline-none"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" 
                    rows="6"
                    placeholder="Share your thoughts, suggestions, or ideas..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2 inline" />
                  Submit Feedback
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-blue-200">Community</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our school's environmental initiatives and help create a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-secondary">
                <Users className="w-5 h-5 mr-2" />
                Join Our Club
              </button>
              <button className="btn-outline">
                <FileText className="w-5 h-5 mr-2" />
                Submit Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Modal */}
      <BlogModal 
        isOpen={selectedBlog !== null} 
        onClose={() => setSelectedBlog(null)} 
        blog={selectedBlog} 
      />
    </div>
  );
};

export default SchoolCorner; 