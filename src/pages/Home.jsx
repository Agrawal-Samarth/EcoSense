import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  AlertTriangle, 
  TrendingUp, 
  Globe, 
  Clock,
  Calculator,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  AlertCircle,
  Thermometer,
  Droplets,
  Wind,
  X,
  Info,
  TrendingDown,
  Calendar,
  MapPin,
  CheckCircle,
  Leaf
} from 'lucide-react';

const Home = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorResults, setCalculatorResults] = useState(null);
  const [showDangerText, setShowDangerText] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [calculatorData, setCalculatorData] = useState({
    transport: 'Car',
    diet: 'Omnivore',
    energy: '',
    digital: ''
  });
  const [calculatorResult, setCalculatorResult] = useState(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
        setShowDangerText(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide danger text after 3 seconds if user hasn't scrolled
  useEffect(() => {
    if (!hasScrolled) {
      const timer = setTimeout(() => {
        setShowDangerText(false);
        setIsVideoPlaying(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasScrolled]);

  const urgencyStats = [
    { 
      icon: <Thermometer className="w-8 h-8" />,
      number: "1.1°C", 
      label: "Global temperature rise since pre-industrial times",
      color: "text-red-500",
      details: {
        title: "Global Temperature Rise: 1.1°C",
        description: "The Earth's average surface temperature has increased by approximately 1.1°C since the pre-industrial era (1850-1900).",
        impacts: [
          "Melting glaciers and polar ice caps",
          "Rising sea levels threatening coastal communities",
          "More frequent and intense heatwaves",
          "Changes in precipitation patterns",
          "Disruption of ecosystems and biodiversity"
        ],
        solutions: [
          "Reduce fossil fuel consumption",
          "Support renewable energy",
          "Improve energy efficiency",
          "Protect and restore forests",
          "Advocate for climate policies"
        ],
        source: "IPCC (Intergovernmental Panel on Climate Change)"
      }
    },
    { 
      icon: <Droplets className="w-8 h-8" />,
      number: "50%", 
      label: "Species at risk of extinction by 2050",
      color: "text-orange-500",
      details: {
        title: "50% of Species at Risk by 2050",
        description: "Scientists predict that up to 50% of all species could face extinction by 2050 if current trends continue.",
        impacts: [
          "Loss of biodiversity and ecosystem services",
          "Disruption of food chains and webs",
          "Reduced genetic diversity",
          "Impact on human food security",
          "Loss of potential medical discoveries"
        ],
        causes: [
          "Habitat destruction and fragmentation",
          "Climate change and extreme weather",
          "Pollution and contamination",
          "Overexploitation of resources",
          "Invasive species introduction"
        ],
        solutions: [
          "Protect and restore habitats",
          "Reduce carbon emissions",
          "Support conservation programs",
          "Adopt sustainable practices",
          "Educate and raise awareness"
        ],
        source: "World Wildlife Fund (WWF)"
      }
    },
    { 
      icon: <Wind className="w-8 h-8" />,
      number: "2030", 
      label: "Critical deadline to prevent irreversible damage",
      color: "text-yellow-500",
      details: {
        title: "2030: The Critical Climate Deadline",
        description: "Scientists warn that we have until 2030 to take decisive action to prevent the worst impacts of climate change.",
        impacts: [
          "Need to cut global emissions by 45% by 2030",
          "Must reach net-zero emissions by 2050",
          "Prevent temperature rise beyond 1.5°C",
          "Avoid irreversible tipping points",
          "Protect vulnerable communities and ecosystems"
        ],
        urgency: [
          "Accelerate renewable energy adoption",
          "Implement carbon pricing",
          "Strengthen climate policies",
          "Invest in climate adaptation",
          "Support climate research and innovation"
        ],
        source: "United Nations Framework Convention on Climate Change"
      }
    }
  ];

  const dangerFacts = [
    {
      fact: "Every year, we emit 51 billion tons of greenhouse gases",
      details: {
        title: "51 Billion Tons of Greenhouse Gases Annually",
        description: "Human activities release approximately 51 billion tons of greenhouse gases into the atmosphere each year.",
        breakdown: [
          "Energy production: 73% (37.2 billion tons)",
          "Transportation: 16% (8.2 billion tons)",
          "Industry: 6% (3.1 billion tons)",
          "Agriculture: 3% (1.5 billion tons)",
          "Waste: 2% (1.0 billion tons)"
        ],
        impact: "This massive amount of emissions is causing unprecedented warming and climate disruption.",
        solutions: [
          "Transition to renewable energy sources",
          "Improve energy efficiency",
          "Adopt sustainable transportation",
          "Reduce industrial emissions",
          "Implement circular economy practices"
        ]
      }
    },
    {
      fact: "We're losing 137 species every day due to climate change",
      details: {
        title: "137 Species Lost Daily",
        description: "Climate change and human activities are causing the extinction of approximately 137 species every single day.",
        causes: [
          "Habitat destruction and fragmentation",
          "Climate change and extreme weather",
          "Pollution and contamination",
          "Overexploitation of resources",
          "Invasive species introduction"
        ],
        impact: "This rapid biodiversity loss threatens ecosystem stability and human well-being.",
        conservation: [
          "Protect and restore habitats",
          "Reduce carbon emissions",
          "Support conservation programs",
          "Adopt sustainable practices",
          "Educate and raise awareness"
        ]
      }
    },
    {
      fact: "By 2050, there could be more plastic than fish in the ocean",
      details: {
        title: "More Plastic Than Fish by 2050",
        description: "At current rates, the ocean will contain more plastic by weight than fish by the year 2050.",
        current: [
          "8 million tons of plastic enter oceans annually",
          "5.25 trillion pieces of plastic in oceans",
          "Plastic found in 90% of seabirds",
          "Microplastics in 100% of marine turtles",
          "Plastic in 25% of fish sold at markets"
        ],
        impact: "Plastic pollution threatens marine life, human health, and ocean ecosystems.",
        solutions: [
          "Reduce single-use plastics",
          "Improve waste management",
          "Support plastic alternatives",
          "Participate in beach cleanups",
          "Choose sustainable packaging"
        ]
      }
    },
    {
      fact: "The last 7 years have been the warmest on record",
      details: {
        title: "7 Consecutive Warmest Years on Record",
        description: "The years 2015-2021 represent the seven warmest years ever recorded in human history.",
        data: [
          "2021: 1.11°C above pre-industrial levels",
          "2020: 1.02°C above pre-industrial levels",
          "2019: 1.16°C above pre-industrial levels",
          "2018: 1.10°C above pre-industrial levels",
          "2017: 1.12°C above pre-industrial levels",
          "2016: 1.27°C above pre-industrial levels",
          "2015: 1.13°C above pre-industrial levels"
        ],
        trend: "This unprecedented warming trend shows no signs of slowing down without immediate action.",
        urgency: [
          "Accelerate renewable energy adoption",
          "Implement carbon pricing",
          "Strengthen climate policies",
          "Invest in climate adaptation",
          "Support climate research and innovation"
        ]
      }
    }
  ];

  const calculateFootprint = () => {
    let total = 0;
    
    // Transport calculation (tons CO2 per year)
    const transportScores = {
      'Car': 2.4, // Average car usage
      'Public Transport': 0.14, // Bus/train usage
      'Bicycle': 0.0, // No emissions
      'Walking': 0.0 // No emissions
    };
    total += transportScores[calculatorData.transport] || 0;
    
    // Diet calculation (tons CO2 per year)
    const dietScores = {
      'Omnivore': 2.5, // Meat-heavy diet
      'Vegetarian': 1.4, // Plant-based with dairy
      'Vegan': 1.0, // Plant-based only
      'Pescatarian': 1.6 // Fish and plant-based
    };
    total += dietScores[calculatorData.diet] || 0;
    
    // Energy calculation (tons CO2 per year)
    const energyUsage = parseFloat(calculatorData.energy) || 0;
    // Average household uses ~10,000 kWh/year, emits ~4.5 tons CO2
    const energyFactor = (energyUsage * 12) / 10000 * 4.5;
    total += energyFactor;
    
    // Digital usage calculation (tons CO2 per year)
    const digitalUsage = parseFloat(calculatorData.digital) || 0;
    // Digital devices contribute ~0.1 tons CO2 per year for average usage
    const digitalFactor = (digitalUsage / 4) * 0.1; // Normalize to 4 hours/day
    total += digitalFactor;
    
    // Add baseline emissions for other activities (housing, goods, services)
    total += 1.2; // Baseline for other daily activities
    
    setCalculatorResult({
      total: Math.round(total * 10) / 10,
      category: total < 3 ? 'Low' : total < 6 ? 'Medium' : 'High',
      message: total < 3 ? 'Excellent! You have a low carbon footprint.' : 
               total < 6 ? 'Good! You have a moderate carbon footprint.' : 
               'Your carbon footprint is high. Consider making some changes.',
      color: total < 3 ? 'text-green-500' : total < 6 ? 'text-yellow-500' : 'text-red-500'
    });
  };

  const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen || !content) return null;

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
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{content.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{content.description}</p>
              
              {content.impacts && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Impacts:</h3>
                  <ul className="space-y-2">
                    {content.impacts.map((impact, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.breakdown && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Breakdown:</h3>
                  <ul className="space-y-2">
                    {content.breakdown.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <BarChart3 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.causes && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Main Causes:</h3>
                  <ul className="space-y-2">
                    {content.causes.map((cause, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TrendingDown className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.urgency && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Urgent Actions Needed:</h3>
                  <ul className="space-y-2">
                    {content.urgency.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.solutions && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions:</h3>
                  <ul className="space-y-2">
                    {content.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.conservation && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Conservation Actions:</h3>
                  <ul className="space-y-2">
                    {content.conservation.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Leaf className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.urgency && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Urgent Actions Needed:</h3>
                  <ul className="space-y-2">
                    {content.urgency.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.source && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>Source:</strong> {content.source}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay={isVideoPlaying}
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1569163139394-de4e1c312ffa?w=1920&h=1080&fit=crop"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            {/* Fallback background image */}
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-red-300/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <AlertTriangle className="w-5 h-5 text-red-300" />
              <span className="text-white/90 font-medium">Climate Emergency</span>
            </motion.div>
            
            {/* Dynamic Text Section */}
            <AnimatePresence mode="wait">
              {showDangerText ? (
                <motion.div
                  key="danger-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                    Our Planet is in
                    <br />
                    <span className="text-red-300">Danger</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                    Watch this video to understand the <span className="text-red-300 font-semibold">urgent reality</span> of climate change, 
                    then discover how you can make a difference.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="video-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                    The Time to
                    <br />
                    <span className="text-emerald-300">Act is Now</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                    Every second counts in the fight against climate change. 
                    <span className="text-emerald-300 font-semibold"> Scroll down</span> to learn more and take action.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Statistics */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-red-300">Urgent Reality</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              These numbers show why immediate action is critical for our planet's survival.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {urgencyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedModal(stat.details)}
              >
                <div className={`w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-300 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-4">{stat.label}</p>
                <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
                  <Info className="w-4 h-4" />
                  <span>Click for details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Calculate Your <span className="text-gradient">Carbon Footprint</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover your environmental impact and see how you compare to the global average. 
              Every calculation helps you understand your role in climate change.
            </p>
          </motion.div>

          {/* Embedded Calculator Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <Calculator className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Your Lifestyle Impact</h3>
              <p className="text-gray-600">Answer a few questions to calculate your carbon footprint</p>
            </div>

            {/* Simple Calculator Form */}
            {!calculatorResult ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Transport
                    </label>
                    <select 
                      className="form-select"
                      value={calculatorData.transport}
                      onChange={(e) => setCalculatorData({...calculatorData, transport: e.target.value})}
                    >
                      <option>Car</option>
                      <option>Public Transport</option>
                      <option>Bicycle</option>
                      <option>Walking</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diet Type
                    </label>
                    <select 
                      className="form-select"
                      value={calculatorData.diet}
                      onChange={(e) => setCalculatorData({...calculatorData, diet: e.target.value})}
                    >
                      <option>Omnivore</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Pescatarian</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Energy Usage (kWh)
                    </label>
                    <input 
                      type="number" 
                      className="form-input" 
                      placeholder="e.g., 300"
                      value={calculatorData.energy}
                      onChange={(e) => setCalculatorData({...calculatorData, energy: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Daily Digital Usage (hours)
                    </label>
                    <input 
                      type="number" 
                      className="form-input" 
                      placeholder="e.g., 4"
                      value={calculatorData.digital}
                      onChange={(e) => setCalculatorData({...calculatorData, digital: e.target.value})}
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                  onClick={calculateFootprint}
                >
                  Calculate My Footprint
                </motion.button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className={`text-4xl sm:text-6xl font-bold ${calculatorResult.color}`}>
                  {calculatorResult.total} tons CO₂/year
                </div>
                <div className={`text-xl sm:text-2xl font-semibold ${calculatorResult.color}`}>
                  {calculatorResult.category} Impact
                </div>
                <p className="text-gray-600 text-lg">{calculatorResult.message}</p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">How you compare:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Global Average:</span>
                      <span className="font-semibold">4.8 tons CO₂/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target by 2030:</span>
                      <span className="font-semibold text-green-600">2.0 tons CO₂/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your Result:</span>
                      <span className={`font-semibold ${calculatorResult.color}`}>{calculatorResult.total} tons CO₂/year</span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                  onClick={() => {
                    setCalculatorResult(null);
                    setCalculatorData({
                      transport: 'Car',
                      diet: 'Omnivore',
                      energy: '',
                      digital: ''
                    });
                  }}
                >
                  Calculate Again
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Danger Facts */}
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
              The <span className="text-red-400">Harsh Truth</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These facts show why we need to act now, not tomorrow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dangerFacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedModal(item.details)}
              >
                <AlertCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white/90 text-lg leading-relaxed mb-2">{item.fact}</p>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Info className="w-4 h-4" />
                    <span>Click for details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Time to <span className="text-yellow-200">Act is Now</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every small action counts. Start by understanding your impact, then take steps to reduce it. 
              Together, we can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-secondary">
                <Target className="w-5 h-5 mr-2" />
                Take Action Now
              </button>
              <button className="btn-outline">
                <Award className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={selectedModal !== null} 
        onClose={() => setSelectedModal(null)} 
        content={selectedModal} 
      />
    </div>
  );
};

export default Home; 