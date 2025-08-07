import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  Award,
  BookOpen,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Clock,
  Heart,
  Star,
  Trophy,
  ArrowRight,
  Sparkles,
  X,
  Info
} from 'lucide-react';

const About = () => {
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedSDG, setSelectedSDG] = useState(null);

  const sdgGoals = [
    { 
      number: 1, 
      title: "No Poverty", 
      color: "bg-red-500", 
      image: import.meta.env.BASE_URL + "images/sdg/1.png",
      description: "End poverty in all its forms everywhere",
      details: {
        fullTitle: "Goal 1: No Poverty",
        description: "End poverty in all its forms everywhere by 2030. This includes eradicating extreme poverty and reducing the proportion of people living in poverty by at least half.",
        targets: [
          "Eradicate extreme poverty for all people everywhere",
          "Reduce at least by half the proportion of people living in poverty",
          "Implement nationally appropriate social protection systems",
          "Ensure equal rights to economic resources and basic services"
        ],
        connection: "Poverty reduction is closely linked to environmental sustainability. Poor communities often rely heavily on natural resources and are most vulnerable to climate change impacts.",
        actions: [
          "Support fair trade and ethical consumption",
          "Donate to poverty alleviation programs",
          "Advocate for social protection policies",
          "Support local businesses and communities"
        ]
      }
    },
    { 
      number: 2, 
      title: "Zero Hunger", 
      color: "bg-orange-500", 
      image: import.meta.env.BASE_URL + "images/sdg/2.png",
      description: "End hunger, achieve food security and improved nutrition",
      details: {
        fullTitle: "Goal 2: Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030.",
        targets: [
          "End hunger and ensure access to safe, nutritious food",
          "End all forms of malnutrition",
          "Double agricultural productivity and incomes",
          "Ensure sustainable food production systems"
        ],
        connection: "Sustainable agriculture practices reduce environmental impact while ensuring food security. This goal directly relates to reducing our ecological footprint through responsible food production.",
        actions: [
          "Support sustainable agriculture initiatives",
          "Reduce food waste in your daily life",
          "Choose locally grown and seasonal produce",
          "Support organizations fighting hunger"
        ]
      }
    },
    { 
      number: 3, 
      title: "Good Health & Well-being", 
      color: "bg-green-500", 
      image: import.meta.env.BASE_URL + "images/sdg/3.png",
      description: "Ensure healthy lives and promote well-being",
      details: {
        fullTitle: "Goal 3: Good Health and Well-being",
        description: "Ensure healthy lives and promote well-being for all at all ages by 2030.",
        targets: [
          "Reduce maternal mortality and preventable deaths",
          "End epidemics of AIDS, tuberculosis, and malaria",
          "Achieve universal health coverage",
          "Reduce deaths from pollution and contamination"
        ],
        connection: "Environmental health directly impacts human health. Clean air, water, and soil are essential for healthy communities and reducing disease burden.",
        actions: [
          "Support clean energy initiatives",
          "Reduce personal carbon footprint",
          "Advocate for clean air and water policies",
          "Support healthcare access programs"
        ]
      }
    },
    { 
      number: 4, 
      title: "Quality Education", 
      color: "bg-red-600", 
      image: import.meta.env.BASE_URL + "images/sdg/4.png",
      description: "Ensure inclusive and equitable quality education",
      details: {
        fullTitle: "Goal 4: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all by 2030.",
        targets: [
          "Ensure free primary and secondary education",
          "Increase access to vocational and higher education",
          "Eliminate gender disparities in education",
          "Promote education for sustainable development"
        ],
        connection: "Education is key to environmental awareness and sustainable practices. Environmental education helps people understand their ecological footprint and how to reduce it.",
        actions: [
          "Support environmental education programs",
          "Volunteer to teach sustainability concepts",
          "Advocate for climate education in schools",
          "Share knowledge about environmental issues"
        ]
      }
    },
    { 
      number: 5, 
      title: "Gender Equality", 
      color: "bg-orange-600", 
      image: import.meta.env.BASE_URL + "images/sdg/5.png",
      description: "Achieve gender equality and empower all women",
      details: {
        fullTitle: "Goal 5: Gender Equality",
        description: "Achieve gender equality and empower all women and girls by 2030.",
        targets: [
          "End all forms of discrimination against women",
          "Eliminate violence against women and girls",
          "Ensure equal participation in leadership",
          "Ensure universal access to reproductive health"
        ],
        connection: "Gender equality is essential for sustainable development. Women often play crucial roles in environmental conservation and sustainable resource management.",
        actions: [
          "Support women-led environmental initiatives",
          "Advocate for gender equality in all sectors",
          "Support organizations empowering women",
          "Challenge gender stereotypes and biases"
        ]
      }
    },
    { 
      number: 6, 
      title: "Clean Water & Sanitation", 
      color: "bg-blue-500", 
      image: import.meta.env.BASE_URL + "images/sdg/6.png",
      description: "Ensure availability of water and sanitation",
      details: {
        fullTitle: "Goal 6: Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all by 2030.",
        targets: [
          "Achieve universal access to safe drinking water",
          "Achieve access to adequate sanitation and hygiene",
          "Improve water quality and reduce pollution",
          "Increase water-use efficiency and ensure freshwater supplies"
        ],
        connection: "Water is fundamental to life and directly impacts our ecological footprint. Sustainable water management is crucial for environmental conservation.",
        actions: [
          "Conserve water in daily activities",
          "Support clean water initiatives",
          "Reduce water pollution",
          "Advocate for water conservation policies"
        ]
      }
    },
    { 
      number: 7, 
      title: "Affordable & Clean Energy", 
      color: "bg-yellow-500", 
      image: import.meta.env.BASE_URL + "images/sdg/7.png",
      description: "Ensure access to affordable, reliable energy",
      details: {
        fullTitle: "Goal 7: Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable and modern energy for all by 2030.",
        targets: [
          "Ensure universal access to affordable energy",
          "Increase share of renewable energy",
          "Double global rate of energy efficiency",
          "Enhance international cooperation for clean energy"
        ],
        connection: "Energy production is the largest contributor to greenhouse gas emissions. Transitioning to clean energy is essential for reducing our ecological footprint.",
        actions: [
          "Switch to renewable energy sources",
          "Improve energy efficiency at home",
          "Support clean energy policies",
          "Invest in renewable energy projects"
        ]
      }
    },
    { 
      number: 8, 
      title: "Decent Work & Economic Growth", 
      color: "bg-red-700", 
      image: import.meta.env.BASE_URL + "images/sdg/8.png",
      description: "Promote sustained economic growth and employment",
      details: {
        fullTitle: "Goal 8: Decent Work and Economic Growth",
        description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all by 2030.",
        targets: [
          "Sustain economic growth and increase productivity",
          "Promote full employment and decent work",
          "Reduce informal employment",
          "Protect labor rights and promote safe working environments"
        ],
        connection: "Sustainable economic growth considers environmental limits. Green jobs and circular economy practices help reduce ecological footprints while creating employment.",
        actions: [
          "Support sustainable businesses",
          "Choose products from responsible companies",
          "Advocate for fair labor practices",
          "Support green job creation"
        ]
      }
    },
    { 
      number: 9, 
      title: "Industry, Innovation & Infrastructure", 
      color: "bg-orange-700", 
      image: import.meta.env.BASE_URL + "images/sdg/9.png",
      description: "Build resilient infrastructure and innovation",
      details: {
        fullTitle: "Goal 9: Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation by 2030.",
        targets: [
          "Develop quality, reliable infrastructure",
          "Promote inclusive and sustainable industrialization",
          "Increase access to financial services",
          "Enhance scientific research and technological capabilities"
        ],
        connection: "Sustainable infrastructure and green technologies are essential for reducing environmental impact while meeting development needs.",
        actions: [
          "Support green infrastructure projects",
          "Advocate for sustainable urban planning",
          "Support innovation in clean technologies",
          "Choose sustainable transportation options"
        ]
      }
    },
    { 
      number: 10, 
      title: "Reduced Inequalities", 
      color: "bg-red-800", 
      image: import.meta.env.BASE_URL + "images/sdg/10.png",
      description: "Reduce inequality within and among countries",
      details: {
        fullTitle: "Goal 10: Reduced Inequalities",
        description: "Reduce inequality within and among countries by 2030.",
        targets: [
          "Progressively achieve income growth for bottom 40%",
          "Promote social, economic and political inclusion",
          "Ensure equal opportunities and reduce discrimination",
          "Adopt fiscal and social policies for greater equality"
        ],
        connection: "Environmental justice ensures that all communities have equal access to clean environments and are protected from environmental harm.",
        actions: [
          "Support environmental justice initiatives",
          "Advocate for inclusive environmental policies",
          "Support marginalized communities",
          "Challenge discrimination and inequality"
        ]
      }
    },
    { 
      number: 11, 
      title: "Sustainable Cities", 
      color: "bg-orange-800", 
      image: import.meta.env.BASE_URL + "images/sdg/11.png",
      description: "Make cities inclusive, safe, resilient and sustainable",
      details: {
        fullTitle: "Goal 11: Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient and sustainable by 2030.",
        targets: [
          "Ensure access to adequate housing and basic services",
          "Provide access to safe, affordable transportation",
          "Enhance inclusive and sustainable urbanization",
          "Reduce environmental impact of cities"
        ],
        connection: "Cities consume 75% of global energy and produce 80% of greenhouse gas emissions. Sustainable urban planning is crucial for reducing ecological footprints.",
        actions: [
          "Support sustainable urban development",
          "Use public transportation",
          "Advocate for green building standards",
          "Participate in local environmental initiatives"
        ]
      }
    },
    { 
      number: 12, 
      title: "Responsible Consumption", 
      color: "bg-amber-600", 
      image: import.meta.env.BASE_URL + "images/sdg/12.png",
      description: "Ensure sustainable consumption and production",
      details: {
        fullTitle: "Goal 12: Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns by 2030.",
        targets: [
          "Implement sustainable consumption and production",
          "Achieve sustainable management of natural resources",
          "Halve per capita food waste and reduce food losses",
          "Achieve environmentally sound management of chemicals and waste"
        ],
        connection: "This goal directly addresses reducing ecological footprints through sustainable consumption patterns and production methods.",
        actions: [
          "Reduce personal consumption",
          "Choose sustainable products",
          "Minimize waste and recycle",
          "Support circular economy initiatives"
        ]
      }
    },
    { 
      number: 13, 
      title: "Climate Action", 
      color: "bg-green-600", 
      image: import.meta.env.BASE_URL + "images/sdg/13.png",
      description: "Take urgent action to combat climate change",
      details: {
        fullTitle: "Goal 13: Climate Action",
        description: "Take urgent action to combat climate change and its impacts by 2030.",
        targets: [
          "Strengthen resilience and adaptive capacity",
          "Integrate climate change measures into policies",
          "Improve education and awareness on climate change",
          "Mobilize climate finance and enhance capacity"
        ],
        connection: "This goal directly addresses reducing greenhouse gas emissions and our carbon footprint to limit global warming.",
        actions: [
          "Reduce personal carbon footprint",
          "Support climate policies and initiatives",
          "Advocate for climate action",
          "Invest in climate solutions"
        ]
      }
    },
    { 
      number: 14, 
      title: "Life Below Water", 
      color: "bg-blue-600", 
      image: import.meta.env.BASE_URL + "images/sdg/14.png",
      description: "Conserve and sustainably use marine resources",
      details: {
        fullTitle: "Goal 14: Life Below Water",
        description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development by 2030.",
        targets: [
          "Prevent and reduce marine pollution",
          "Protect marine and coastal ecosystems",
          "Minimize ocean acidification",
          "Regulate harvesting and end overfishing"
        ],
        connection: "Oceans absorb 30% of CO2 emissions and provide essential ecosystem services. Marine conservation is crucial for climate regulation.",
        actions: [
          "Reduce plastic consumption",
          "Support marine conservation",
          "Choose sustainable seafood",
          "Participate in beach cleanups"
        ]
      }
    },
    { 
      number: 15, 
      title: "Life on Land", 
      color: "bg-green-700", 
      image: import.meta.env.BASE_URL + "images/sdg/15.png",
      description: "Protect, restore and promote sustainable land use",
      details: {
        fullTitle: "Goal 15: Life on Land",
        description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss by 2030.",
        targets: [
          "Conserve and restore terrestrial ecosystems",
          "End deforestation and restore degraded forests",
          "Combat desertification and restore degraded land",
          "Ensure conservation of mountain ecosystems"
        ],
        connection: "Terrestrial ecosystems provide essential services and carbon sequestration. Protecting land ecosystems directly reduces our ecological footprint.",
        actions: [
          "Support reforestation projects",
          "Choose sustainable wood products",
          "Protect local ecosystems",
          "Support biodiversity conservation"
        ]
      }
    },
    { 
      number: 16, 
      title: "Peace, Justice & Strong Institutions", 
      color: "bg-blue-700", 
      image: import.meta.env.BASE_URL + "images/sdg/16.png",
      description: "Promote peaceful and inclusive societies",
      details: {
        fullTitle: "Goal 16: Peace, Justice and Strong Institutions",
        description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions by 2030.",
        targets: [
          "Reduce violence and related death rates",
          "End abuse, exploitation and trafficking",
          "Promote the rule of law and ensure equal access to justice",
          "Develop effective, accountable and transparent institutions"
        ],
        connection: "Peace and strong institutions are essential for implementing environmental policies and ensuring sustainable development.",
        actions: [
          "Support peacebuilding initiatives",
          "Advocate for environmental justice",
          "Participate in democratic processes",
          "Support transparent governance"
        ]
      }
    },
    { 
      number: 17, 
      title: "Partnerships for the Goals", 
      color: "bg-blue-800", 
      image: import.meta.env.BASE_URL + "images/sdg/17.png",
      description: "Strengthen global partnerships for sustainable development",
      details: {
        fullTitle: "Goal 17: Partnerships for the Goals",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development by 2030.",
        targets: [
          "Strengthen domestic resource mobilization",
          "Enhance international cooperation",
          "Promote effective public-private partnerships",
          "Enhance policy coherence for sustainable development"
        ],
        connection: "Global partnerships are essential for addressing environmental challenges that transcend national boundaries and require collective action.",
        actions: [
          "Support international environmental organizations",
          "Participate in global environmental initiatives",
          "Advocate for international cooperation",
          "Support sustainable development partnerships"
        ]
      }
    }
  ];

  const globalStats = [
    { number: "51", unit: "billion tons", label: "Greenhouse gases emitted annually", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "4.8", unit: "tons", label: "Average CO₂ per person per year", icon: <Users className="w-6 h-6" /> },
    { number: "2.0", unit: "tons", label: "Target by 2030 to meet climate goals", icon: <Target className="w-6 h-6" /> },
    { number: "137", unit: "species", label: "Lost every day due to climate change", icon: <Leaf className="w-6 h-6" /> }
  ];

  const quizQuestions = [
    {
      question: "How often do you use public transportation or active transport (walking/cycling)?",
      options: [
        { text: "Always (walking/cycling/public transport)", score: 5 },
        { text: "Mostly (80% of trips)", score: 4 },
        { text: "Sometimes (50% of trips)", score: 3 },
        { text: "Rarely (20% of trips)", score: 2 },
        { text: "Never (always drive)", score: 1 }
      ]
    },
    {
      question: "What type of diet do you primarily follow?",
      options: [
        { text: "Vegan (no animal products)", score: 5 },
        { text: "Vegetarian (no meat)", score: 4 },
        { text: "Pescatarian (fish + plants)", score: 3 },
        { text: "Reduced meat (1-2 times/week)", score: 2 },
        { text: "Regular meat eater (daily)", score: 1 }
      ]
    },
    {
      question: "How do you manage your household waste?",
      options: [
        { text: "Comprehensive recycling & composting", score: 5 },
        { text: "Mostly recycling (paper, plastic, metal)", score: 4 },
        { text: "Some recycling (basic items)", score: 3 },
        { text: "Minimal recycling", score: 2 },
        { text: "No recycling", score: 1 }
      ]
    },
    {
      question: "What's your energy consumption pattern?",
      options: [
        { text: "Renewable energy (solar/wind)", score: 5 },
        { text: "Energy-efficient appliances & habits", score: 4 },
        { text: "Conscious about usage", score: 3 },
        { text: "Sometimes mindful", score: 2 },
        { text: "Not concerned about energy use", score: 1 }
      ]
    },
    {
      question: "How do you make purchasing decisions?",
      options: [
        { text: "Always choose sustainable & local", score: 5 },
        { text: "Mostly sustainable choices", score: 4 },
        { text: "Sometimes consider sustainability", score: 3 },
        { text: "Occasionally choose eco-friendly", score: 2 },
        { text: "Price/convenience first", score: 1 }
      ]
    },
    {
      question: "How much water do you conserve?",
      options: [
        { text: "Extremely conscious (low-flow fixtures, rainwater)", score: 5 },
        { text: "Very conscious (short showers, fix leaks)", score: 4 },
        { text: "Somewhat conscious", score: 3 },
        { text: "Basic conservation", score: 2 },
        { text: "Not concerned about water use", score: 1 }
      ]
    }
  ];

  const actionItems = [
    {
      category: "Transportation",
      items: [
        "Use public transport or carpool",
        "Walk or cycle for short distances",
        "Consider electric or hybrid vehicles",
        "Plan trips to reduce unnecessary travel"
      ]
    },
    {
      category: "Energy",
      items: [
        "Switch to LED bulbs",
        "Use energy-efficient appliances",
        "Turn off lights when not needed",
        "Consider solar panels"
      ]
    },
    {
      category: "Waste",
      items: [
        "Recycle paper, plastic, and metal",
        "Compost organic waste",
        "Use reusable bags and containers",
        "Avoid single-use plastics"
      ]
    },
    {
      category: "Food",
      items: [
        "Reduce meat consumption",
        "Buy local and seasonal produce",
        "Avoid food waste",
        "Choose sustainable seafood"
      ]
    }
  ];

  const handleQuizAnswer = (questionIndex, score) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: score }));
  };

  const calculateQuizScore = () => {
    const totalScore = Object.values(quizAnswers).reduce((sum, score) => sum + score, 0);
    const maxScore = quizQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    setQuizScore(percentage);
    setShowQuizResults(true);
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return { message: "Excellent! You're a climate champion!", icon: <Trophy className="w-8 h-8" />, color: "text-green-500" };
    if (score >= 60) return { message: "Good job! You're making positive choices!", icon: <Star className="w-8 h-8" />, color: "text-blue-500" };
    if (score >= 40) return { message: "You're on the right track! Keep improving!", icon: <Heart className="w-8 h-8" />, color: "text-yellow-500" };
    return { message: "There's room for improvement! Start with small changes!", icon: <Lightbulb className="w-8 h-8" />, color: "text-orange-500" };
  };

  const SDGModal = ({ isOpen, onClose, sdg }) => {
    if (!isOpen || !sdg) return null;

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
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${sdg.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                    {sdg.number}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{sdg.details.fullTitle}</h2>
                    <p className="text-gray-600 mt-1">{sdg.description}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{sdg.details.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Targets</h3>
                  <ul className="space-y-2">
                    {sdg.details.targets.map((target, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Connection to Ecological Footprint</h3>
                  <p className="text-gray-600 leading-relaxed">{sdg.details.connection}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What You Can Do</h3>
                  <ul className="space-y-2">
                    {sdg.details.actions.map((action, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Understanding <span className="text-emerald-200">Eco Footprints</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Learn about ecological footprints, Sustainable Development Goals, and discover how your choices impact our planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Eco Footprint */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What is an <span className="text-gradient">Ecological Footprint?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ecological footprint (EF), abbreviated to Eco Footprint, is a measure of the demands made by a person or group of people on global natural resources. It has become one of the most widely used measures of humanity's effect upon the environment and has been used to highlight both the apparent unsustainability of current practices and the inequalities in resource consumption between and within countries.
              </p>
              <p className="text-sm text-gray-500 italic">
                — Britannica
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Resource Consumption</h3>
                    <p className="text-gray-600">How much land and water we need for our lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Waste Generation</h3>
                    <p className="text-gray-600">The impact of our waste on the environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Carbon Emissions</h3>
                    <p className="text-gray-600">Our contribution to climate change</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center">
                <Leaf className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Calculate Your Footprint?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">Understand your environmental impact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">Identify areas for improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">Make informed lifestyle choices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">Contribute to global sustainability goals</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Goals - All 17 Goals */}
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
              Sustainable Development <span className="text-emerald-400">Goals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The United Nations' 17 Sustainable Development Goals provide a blueprint for a sustainable future. 
              Each goal is interconnected and essential for creating a better world. Click on any goal to learn more!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-4 text-center group cursor-pointer"
                onClick={() => setSelectedSDG(goal)}
              >
                <div className="relative mb-3">
                  <img 
                    src={goal.image || import.meta.env.BASE_URL + `images/sdg/${goal.number}.png`} 
                    alt={`SDG ${goal.number}`}
                    className="w-16 h-16 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`w-16 h-16 ${goal.color} rounded-lg flex items-center justify-center text-white text-lg font-bold mx-auto hidden`}
                    style={{ display: 'none' }}
                  >
                    {goal.number}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 leading-tight">{goal.title}</h3>
                <p className="text-xs text-gray-400 leading-tight hidden group-hover:block">
                  {goal.description}
                </p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Info className="w-4 h-4 text-emerald-400 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* SDG Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">How SDGs Connect to Eco Footprints</h3>
              <p className="text-gray-300 leading-relaxed">
                The Sustainable Development Goals are deeply interconnected with ecological footprints. Goals like 
                <span className="text-emerald-400 font-semibold"> Climate Action (13)</span>, 
                <span className="text-blue-400 font-semibold"> Clean Energy (7)</span>, 
                <span className="text-orange-400 font-semibold"> Responsible Consumption (12)</span>, and 
                <span className="text-green-400 font-semibold"> Life on Land (15)</span> directly relate to reducing our environmental impact. 
                By understanding and reducing our ecological footprint, we contribute to achieving these global goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Statistics */}
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
              Global <span className="text-gradient">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the numbers behind climate change and our collective responsibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                  <span className="text-lg text-gray-600 ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-purple-200">Eco-Friendly</span> Are You?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take this quick quiz to discover your environmental impact and get personalized tips to help the Earth.
            </p>
          </motion.div>

          {!showQuizResults ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card p-8">
                {currentQuizStep < quizQuestions.length ? (
                  <div>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white/80">Question {currentQuizStep + 1} of {quizQuestions.length}</span>
                        <div className="w-32 bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-white h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuizStep + 1) / quizQuestions.length) * 100}%` }}
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6">
                        {quizQuestions[currentQuizStep].question}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {quizQuestions[currentQuizStep].options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            handleQuizAnswer(currentQuizStep, option.score);
                            if (currentQuizStep < quizQuestions.length - 1) {
                              setCurrentQuizStep(currentQuizStep + 1);
                            } else {
                              calculateQuizScore();
                            }
                          }}
                          className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-left hover:bg-white/20 transition-all duration-300"
                        >
                          <span className="text-white font-medium">{option.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card p-8 text-center mb-8">
                <div className="mb-6">
                  {getScoreMessage(quizScore).icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your Score: {Math.round(quizScore)}%
                </h3>
                <p className={`text-xl font-semibold mb-6 ${getScoreMessage(quizScore).color}`}>
                  {getScoreMessage(quizScore).message}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentQuizStep(0);
                    setQuizAnswers({});
                    setShowQuizResults(false);
                    setQuizScore(0);
                  }}
                  className="btn-secondary"
                >
                  Take Quiz Again
                </motion.button>
              </div>

              {/* Action Items */}
              <div className="grid md:grid-cols-2 gap-8">
                {actionItems.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-6"
                  >
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* SDG Modal */}
      <SDGModal 
        isOpen={selectedSDG !== null} 
        onClose={() => setSelectedSDG(null)} 
        sdg={selectedSDG} 
      />
    </div>
  );
};

export default About; 