import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sprout, 
  Menu, 
  X, 
  Calculator, 
  Info, 
  Users, 
  FileText,
  Sparkles,
  School,
  BookOpen,
  Award,
  Sun,
  Moon
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode to body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Sprout className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { path: '/school-corner', label: 'School Corner', icon: <School className="w-4 h-4" /> },
    { path: '/calculator', label: 'Calculator', icon: <Calculator className="w-4 h-4" /> },
    { path: '/credits', label: 'Credits', icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-lg backdrop-blur-md bg-black/20' : 'bg-transparent'
      }`}
      style={{ marginTop: scrolled ? '0' : '8px' }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24 relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => {
              // Scroll to top when clicking the logo
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Sprout className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                EcoSense
              </span>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span className="text-xs text-white/90">Environmental Education</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  // Scroll to top when navigating
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-emerald-300 bg-white/10'
                    : 'text-white hover:text-emerald-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
              onClick={() => {
                console.log('Take Quiz button clicked');
                // Navigate to about page and scroll to quiz section
                navigate('/about');
                // Wait for page load then scroll to quiz section
                setTimeout(() => {
                  const quizSection = document.querySelector('[data-quiz-section]');
                  if (quizSection) {
                    quizSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Take Quiz
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 px-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        // Scroll to top when navigating
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-white/10 text-emerald-300 border border-white/20'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button 
                    className="w-full btn-primary"
                    onClick={() => {
                      setIsOpen(false);
                      console.log('Mobile Take Quiz button clicked');
                      // Navigate to about page and scroll to quiz section
                      navigate('/about');
                      // Wait for page load then scroll to quiz section
                      setTimeout(() => {
                        const quizSection = document.querySelector('[data-quiz-section]');
                        if (quizSection) {
                          quizSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    Take Quiz
                  </button>
                </motion.div>

                {/* Mobile Dark Mode Toggle */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  className="pt-2"
                >
                  <button 
                    className="w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                    onClick={toggleDarkMode}
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="w-5 h-5" />
                        <span className="font-medium">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5" />
                        <span className="font-medium">Dark Mode</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 