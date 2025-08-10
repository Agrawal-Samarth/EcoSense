import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Image, 
  BookOpen, 
  Globe, 
  Heart,
  ExternalLink,
  Github,
  Package,
  FileText,
  Award,
  Users,
  Lightbulb,
  CheckCircle,
  Star
} from 'lucide-react';

const Credits = () => {
  const frameworks = [
    {
      name: "React",
      version: "18.2.0",
      description: "JavaScript library for building user interfaces",
      link: "https://reactjs.org/",
      license: "MIT"
    },
    {
      name: "Vite",
      version: "4.4.0",
      description: "Next generation frontend tooling",
      link: "https://vitejs.dev/",
      license: "MIT"
    },
    {
      name: "Tailwind CSS",
      version: "3.3.0",
      description: "Utility-first CSS framework",
      link: "https://tailwindcss.com/",
      license: "MIT"
    },
    {
      name: "Framer Motion",
      version: "10.16.0",
      description: "Production-ready motion library for React",
      link: "https://www.framer.com/motion/",
      license: "MIT"
    },
    {
      name: "Lucide React",
      version: "0.263.0",
      description: "Beautiful & consistent icon toolkit",
      link: "https://lucide.dev/",
      license: "ISC"
    }
  ];

  const dataSources = [
    {
      name: "Intergovernmental Panel on Climate Change (IPCC)",
      description: "Global temperature rise data and climate change assessments",
      link: "https://www.ipcc.ch/",
      usage: "Climate statistics and scientific data"
    },
    {
      name: "World Wildlife Fund (WWF)",
      description: "Biodiversity loss and species extinction data",
      link: "https://www.worldwildlife.org/",
      usage: "Species extinction statistics"
    },
    {
      name: "United Nations Framework Convention on Climate Change",
      description: "Climate action targets and Paris Agreement data",
      link: "https://unfccc.int/",
      usage: "2030 climate targets and policy information"
    },
    {
      name: "Global Carbon Project",
      description: "Annual greenhouse gas emissions data",
      link: "https://www.globalcarbonproject.org/",
      usage: "CO2 emissions statistics"
    },
    {
      name: "United Nations Sustainable Development Goals",
      description: "SDG framework and targets",
      link: "https://sdgs.un.org/",
      usage: "All 17 SDG descriptions and targets"
    },
    {
      name: "Carbon Footprint Calculator",
      description: "Methodology for calculating personal carbon footprints",
      link: "https://www.carbonfootprint.com/",
      usage: "Calculator algorithms and emission factors"
    }
  ];

  const imageSources = [
    {
      name: "Unsplash",
      description: "High-quality stock photography",
      link: "https://unsplash.com/",
      usage: "Hero images, blog images, and background photos"
    },
    {
      name: "Pexels",
      description: "Free stock photos and videos",
      link: "https://www.pexels.com/",
      usage: "Additional imagery and visual content"
    }
  ];

  const inspiration = [
    {
      name: "Climate Reality Project",
      description: "Climate education and awareness initiatives",
      link: "https://www.climaterealityproject.org/",
      usage: "Educational content and climate communication"
    },
    {
      name: "350.org",
      description: "Global grassroots climate movement",
      link: "https://350.org/",
      usage: "Climate action inspiration and strategies"
    },
    {
      name: "NASA Climate Change",
      description: "Scientific climate data and visualizations",
      link: "https://climate.nasa.gov/",
      usage: "Climate science and data visualization"
    },
    {
      name: "National Geographic",
      description: "Environmental storytelling and education",
      link: "https://www.nationalgeographic.com/environment/",
      usage: "Environmental education content"
    }
  ];



  const acknowledgments = [
    "Climate scientists and researchers worldwide",
    "Environmental organizations and activists",
    "Open source community contributors",
    "Educational institutions and teachers",
    "Students and youth climate activists",
    "All individuals working towards a sustainable future"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-12 h-12 text-purple-200" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Credits & <span className="text-purple-200">Acknowledgments</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              This project wouldn't be possible without the amazing frameworks, data sources, and people who made it all possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frameworks & Technologies */}
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
              <span className="text-gradient">Frameworks & Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern web technologies and open-source libraries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-500">{framework.license}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{framework.name}</h3>
                <p className="text-sm text-gray-500 mb-2">v{framework.version}</p>
                <p className="text-gray-600 mb-4">{framework.description}</p>
                <a 
                  href={framework.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-sm">Visit Website</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
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
              <span className="text-blue-300">Data Sources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All environmental data and statistics are sourced from reputable scientific organizations.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">{source.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-2">{source.description}</p>
                    <p className="text-sm text-blue-300">
                      <strong>Usage:</strong> {source.usage}
                    </p>
                  </div>
                  <a 
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-300 hover:text-blue-200 transition-colors ml-4"
                  >
                    <span className="text-sm">Visit</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Sources */}
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
              <span className="text-gradient">Image Sources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beautiful imagery sourced from talented photographers and stock photo platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {imageSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card card-hover"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                    <Image className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{source.name}</h3>
                    <p className="text-sm text-gray-500">{source.description}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{source.usage}</p>
                <a 
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-sm">Visit Platform</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration & References */}
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
              <span className="text-green-300">Inspiration & References</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations and resources that inspired this project and provided valuable insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {inspiration.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <p className="text-sm text-green-300 mb-3">
                  <strong>Influence:</strong> {item.usage}
                </p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors"
                >
                  <span className="text-sm">Learn More</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Acknowledgments */}
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
              <span className="text-yellow-300">Special Acknowledgments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We extend our deepest gratitude to all those working towards a sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {acknowledgments.map((acknowledgment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-white/90">{acknowledgment}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* License & Legal */}
      <section className="section-padding bg-gradient-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">License & Legal</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project License</h3>
                <p className="text-gray-600 mb-4">
                  This project is open source and available under the MIT License. You are free to use, modify, and distribute this code for educational and non-commercial purposes.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href="https://github.com/IND-GAMINGBEAST/EcoSense"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>View on GitHub</span>
                  </a>
                  <a 
                    href="/EcoSense/LICENSE"
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    <span>View License</span>
                  </a>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Disclaimer</h3>
                <p className="text-gray-600">
                  This website is for educational purposes only. While we strive for accuracy, environmental data and statistics may change over time. Please refer to original sources for the most current information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Credits; 