# EcoSense - Environmental Education Platform 🌱

A modern, interactive website for understanding and calculating ecological footprints. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

### 🏠 **Home Page**
- Welcome section introducing EcoSense
- Overview of environmental topics and sustainability
- Quick access to main features
- Beautiful animations and modern UI with Framer Motion
- Responsive design for all devices

### 🧮 **Carbon Footprint Calculator**
- **Interactive Tool**: Real-time calculation of environmental impact
- **Multiple Categories**: Transportation, energy usage, dietary choices, lifestyle habits
- **Scientific Methodology**: Based on scientifically-proven emission factors
- **Personalized Results**: Shows CO2 equivalents and personalized suggestions
- **Educational Explanations**: Detailed information about each category
- **Action Items**: Specific recommendations to reduce environmental impact

### 🏫 **School Corner**
- **School Initiatives**: Three main environmental clubs
  - **Interact Club**: Environmental projects, community service, grain bank donations
  - **Go Sharpener**: Youth-led sustainability platform, digital climate action
  - **Environmental Club**: School eco-friendly initiatives, recycling programs
- **Student & Teacher Blogs**: Personal environmental journeys and experiences
- **Celebrity Blogs**: Environmental advocacy from Emma Watson and Amitabh Bachchan
- **Upcoming Events**: Tree plantation drives, environmental quizzes, workshops
- **Community Feedback**: Interactive feedback forms and engagement opportunities

### 📚 **About Page**
- **Ecological Footprint Education**: Comprehensive explanation of environmental impact
- **Sustainable Development Goals**: All 17 SDGs with interactive information
- **Global Statistics**: Climate data, CO2 emissions, biodiversity information
- **Interactive Environmental Quiz**: 8-question assessment with personalized scoring
- **Action Items**: Practical tips for reducing environmental impact
- **Educational Content**: Detailed environmental science information

### 🎯 **Credits Page**
- Acknowledgments and project credits
- Information about contributors and data sources
- Project background and references

### 🤖 **Smart AI Assistant**
- **Powered by Google Gemini**: Real AI intelligence with free API integration
- **Context-Aware Responses**: Understands EcoSense website and features
- **Environmental Expertise**: Comprehensive knowledge about sustainability topics
- **Website Navigation**: Helps users find and use EcoSense features
- **Smart Fallback System**: Works reliably without external dependencies
- **Natural Conversations**: Friendly, educational, and encouraging responses

## 🚀 Smart AI Chatbot Features

### **AI Integration**
- **Google Gemini API**: Free, reliable AI with generous limits (15 requests/minute)
- **Intelligent Responses**: Context-aware answers about environmental topics
- **Website Knowledge**: Comprehensive understanding of all EcoSense features
- **Fallback System**: Enhanced predefined responses when API unavailable

### **What the Chatbot Knows**
- **Project Details**: Complete information about EcoSense and its features
- **Calculator Logic**: Scientific methodology and emission factors
- **Environmental Topics**: Climate change, sustainability, carbon footprints
- **Website Navigation**: Guides users through all sections and features
- **Educational Content**: Provides detailed environmental information

### **Conversation Capabilities**
- **Natural Language**: Understands various ways users ask questions
- **Context Awareness**: Maintains conversation flow and remembers context
- **Educational Focus**: Provides informative, actionable responses
- **Error Handling**: Graceful fallback when AI services are unavailable

## 🛠️ Technical Features

### **Frontend Technology**
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent iconography

### **User Experience**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Comfortable viewing experience with theme toggle
- **Smooth Animations**: Engaging interactions and transitions
- **Fast Loading**: Optimized performance with Vite
- **Accessibility**: Designed for all users

### **Interactive Elements**
- **Real-time Calculator**: Instant carbon footprint calculations
- **Interactive Quiz**: Personalized environmental assessment
- **Modal Dialogs**: Rich content display for blogs and SDGs
- **Form Validation**: User-friendly input validation
- **Progress Indicators**: Visual feedback for user actions

## 📊 Calculator Methodology

### **Scientific Basis**
- **Transportation**: Average vehicle emissions per kilometer
- **Energy**: Household electricity consumption patterns
- **Diet**: Food production emissions (meat vs plant-based)
- **Lifestyle**: Daily activities and consumption patterns
- **Results**: CO2 equivalents for standardized measurement

### **Categories Covered**
1. **Transportation**: Car, bus, train, flights, walking, cycling
2. **Energy Usage**: Home electricity, appliances, heating/cooling
3. **Dietary Choices**: Meat consumption, food waste, local produce
4. **Lifestyle Habits**: Waste management, water usage, digital footprint

## 🎓 Educational Content

### **Sustainable Development Goals**
- **All 17 SDGs**: Complete coverage with interactive information
- **Detailed Descriptions**: Goals, targets, and implementation strategies
- **Environmental Connections**: How each goal relates to ecological footprints
- **Action Items**: Specific steps individuals can take

### **Environmental Topics**
- **Climate Change**: Science, impacts, and solutions
- **Carbon Footprints**: Understanding and reducing environmental impact
- **Sustainability**: Principles and practical applications
- **Renewable Energy**: Clean energy sources and benefits
- **Conservation**: Biodiversity, ecosystems, and protection

## 🌐 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eco-footprint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/EcoSense/`

### **Building for Production**
```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Configuration

### **AI Chatbot Setup**
The chatbot is pre-configured with Google Gemini API integration:

1. **Get API Key**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Update Configuration**: Replace the API key in `src/config/ai-config.js`
3. **Automatic Fallback**: Works without API using intelligent predefined responses

### **Environment Variables**
- `BASE_URL`: Base URL for the application
- `VITE_APP_TITLE`: Application title

## 📁 Project Structure

```
eco-footprint/
├── public/
│   ├── images/
│   │   ├── sdg/          # SDG goal images
│   │   ├── celebrities/  # Celebrity photos
│   │   └── teachers/     # Teacher photos
│   └── videos/           # Educational videos
├── src/
│   ├── components/
│   │   ├── Chatbot.jsx   # Smart AI assistant
│   │   ├── Navbar.jsx    # Navigation component
│   │   └── Footer.jsx    # Footer component
│   ├── pages/
│   │   ├── Home.jsx      # Home page
│   │   ├── About.jsx     # About page with SDGs and quiz
│   │   ├── Calculator.jsx # Carbon footprint calculator
│   │   ├── SchoolCorner.jsx # School initiatives and blogs
│   │   └── Credits.jsx   # Credits page
│   ├── config/
│   │   └── ai-config.js  # AI configuration
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json
└── README.md
```

## 🎨 Customization

### **Adding Content**
- **SDG Images**: Place images in `public/images/sdg/` as `1.png`, `2.png`, etc.
- **Blog Content**: Update blog data in respective page components
- **Calculator Logic**: Modify emission factors in calculator component
- **AI Responses**: Enhance fallback responses in chatbot component

### **Styling**
- **Theme Colors**: Update Tailwind configuration in `tailwind.config.js`
- **Animations**: Modify Framer Motion animations in components
- **Layout**: Adjust responsive breakpoints and grid systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Contributors

### **Primary Developers**
- **Samarth Agrawal** - Full-stack development, UI/UX design, AI integration
- **Kriti Pant** - Frontend development, content creation, environmental research

### **Educational Institution**
- **Gurukul The School** - Project support and environmental education initiatives

### **Project Overview**
EcoSense was developed as a student project at Gurukul The School, focusing on environmental education and sustainability awareness. The project demonstrates how technology can be used to educate and inspire the next generation about environmental responsibility.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### **Data Sources**
- IPCC (Intergovernmental Panel on Climate Change)
- WWF (World Wildlife Fund)
- UN (United Nations)
- Global Carbon Project

### **Inspiration**
- Climate Reality Project
- 350.org
- Environmental education initiatives

### **Technologies**
- React ecosystem
- Tailwind CSS
- Framer Motion
- Google Gemini AI

## 📞 Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for environmental education and sustainability**

*EcoSense - Empowering the next generation to understand and reduce their environmental impact*
