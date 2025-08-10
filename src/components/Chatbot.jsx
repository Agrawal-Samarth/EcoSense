import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { AI_CONFIG } from '../config/ai-config';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your EcoSense AI assistant, developed by Samarth Agrawal and Kriti Pant from Gurukul The School. I\'m here to help you navigate the EcoSense website and answer all your questions about environmental topics, carbon footprint calculation, sustainability, and this application. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Smart AI API integration with Gemini
  const getAIResponse = async (query, conversationHistory) => {
    console.log('🚀 Starting AI response generation...');
    console.log('🔧 Gemini enabled:', AI_CONFIG.GEMINI.enabled);
    console.log('🔧 OpenAI enabled:', AI_CONFIG.OPENAI.enabled);
    console.log('🔧 Hugging Face enabled:', AI_CONFIG.HUGGING_FACE.enabled);
    
    try {
      if (AI_CONFIG.GEMINI.enabled && AI_CONFIG.GEMINI.apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
        console.log('🎯 Using Google Gemini API...');
        return await getGeminiResponse(query, conversationHistory);
      } else if (AI_CONFIG.OPENAI.enabled) {
        console.log('🎯 Using OpenAI API...');
        return await getOpenAIResponse(query, conversationHistory);
      } else if (AI_CONFIG.HUGGING_FACE.enabled) {
        console.log('🎯 Using Hugging Face API...');
        return await getHuggingFaceResponse(query, conversationHistory);
      } else {
        console.log('🔄 Using enhanced fallback system...');
        console.log('💡 This system provides intelligent responses without external APIs');
        return getSmartFallbackResponse(query);
      }
    } catch (error) {
      console.error('❌ AI API failed:', error);
      console.log('🔄 Falling back to enhanced predefined responses...');
      return getSmartFallbackResponse(query);
    }
  };

  const getGeminiResponse = async (query, conversationHistory) => {
    console.log('🔄 Attempting Gemini API call...');
    console.log('📝 Query:', query);
    console.log('🔑 API Key configured:', !!AI_CONFIG.GEMINI.apiKey);
    
    const systemPrompt = `You are EcoSense AI, an intelligent environmental assistant for the EcoSense website. You have comprehensive knowledge about this project and help users understand everything about it.

PROJECT OVERVIEW:
EcoSense is an environmental education platform created by students Samarth Agrawal and Kriti Pant from Gurukul The School. It's designed to make environmental science accessible and actionable for everyone, with a focus on carbon footprint calculation, sustainability education, and environmental awareness.

DEVELOPERS & CREDITS:
- Primary Developers: Samarth Agrawal and Kriti Pant
- Educational Institution: Gurukul The School
- Project Type: Environmental Education Platform
- Technology Stack: React 18, Vite, Tailwind CSS, Framer Motion
- Purpose: To educate people about environmental impact and sustainability

WEBSITE FEATURES & PAGES:

1. HOME PAGE:
- Welcome section introducing EcoSense
- Overview of environmental topics
- Quick access to main features
- Beautiful animations and modern UI

2. CARBON FOOTPRINT CALCULATOR:
- Interactive tool to measure environmental impact
- Calculates emissions from:
  * Transportation (car, bus, train, flights)
  * Energy usage at home
  * Dietary choices (meat consumption, food waste)
  * Lifestyle habits and daily activities
- Provides personalized suggestions for reducing impact
- Shows results in CO2 equivalents
- Educational explanations of each category

3. SCHOOL CORNER:
- School environmental initiatives (Interact Club, Go Sharpener, Environmental Club)
- Student and teacher blog posts about environmental experiences
- Celebrity blog posts from environmental advocates
- Upcoming environmental events and activities
- Community feedback and engagement opportunities
- Stories from the school community about sustainability

4. ABOUT PAGE:
- Comprehensive explanation of ecological footprints and their importance
- All 17 Sustainable Development Goals (SDGs) with detailed information
- Global environmental statistics and climate data
- Interactive environmental quiz to assess personal eco-friendliness
- Educational content about environmental impact and sustainability
- Action items and tips for reducing ecological footprint

5. CREDITS PAGE:
- Acknowledgments and credits
- Information about contributors
- Data sources and references

SUSTAINABLE DEVELOPMENT GOALS (SDGs) COVERED:
- SDG 7: Affordable and Clean Energy
- SDG 12: Responsible Consumption and Production
- SDG 13: Climate Action
- SDG 14: Life Below Water
- SDG 15: Life on Land
- And other environmental SDGs

CALCULATOR LOGIC & METHODOLOGY:
The carbon footprint calculator uses scientifically-based emission factors:
- Transportation: Based on average vehicle emissions per kilometer
- Energy: Based on household electricity consumption patterns
- Diet: Based on food production emissions (meat vs plant-based)
- Lifestyle: Based on daily activities and consumption patterns
- Results are presented in CO2 equivalents for easy understanding
- Provides actionable suggestions for reducing impact

TECHNICAL FEATURES:
- Responsive design that works on all devices
- Dark/Light mode toggle for comfortable viewing
- Smooth animations using Framer Motion
- Modern UI with Tailwind CSS
- Fast loading with Vite build tool
- Interactive elements and hover effects

ENVIRONMENTAL EXPERTISE:
- Climate change science and impacts
- Carbon footprint calculation methods
- Sustainable living practices
- Renewable energy and conservation
- Waste reduction and recycling
- Biodiversity and ecosystem protection
- Environmental policy and advocacy

RESPONSE STYLE:
- Friendly, educational, and encouraging tone
- Keep responses concise but informative (2-4 sentences)
- Always relate answers to EcoSense when possible
- Provide specific information about website features
- If asked about non-environmental topics, politely redirect to EcoSense features
- Only mention developer names when specifically asked about project creators
- Keep responses natural and conversational
- Focus on helping users understand and use the platform

Current conversation context: ${conversationHistory.slice(-3).map(m => `${m.type}: ${m.content}`).join(' | ')}`;

    try {
      const response = await fetch(`${AI_CONFIG.GEMINI.endpoint}?key=${AI_CONFIG.GEMINI.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\nUser: ${query}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300,
            topP: 0.8,
            topK: 40
          }
        })
      });

      console.log('📡 Gemini API Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Gemini API Error Response:', errorText);
        throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Gemini API Response received:', data);
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        const aiResponse = data.candidates[0].content.parts[0].text.trim();
        console.log('🤖 Gemini AI Response:', aiResponse);
        return aiResponse;
      } else {
        console.error('❌ Unexpected Gemini API response format:', data);
        throw new Error('Invalid Gemini API response format');
      }
    } catch (error) {
      console.error('❌ Gemini API call failed:', error);
      throw error;
    }
  };

  const getOpenAIResponse = async (query, conversationHistory) => {
    console.log('🔄 Attempting OpenAI API call...');
    console.log('📝 Query:', query);
    console.log('🔑 API Key configured:', !!AI_CONFIG.OPENAI.apiKey);
    
    const systemPrompt = `You are EcoSense AI, an intelligent environmental assistant for the EcoSense website. You help users understand:

WEBSITE FEATURES:
- Carbon Footprint Calculator: Interactive tool to measure environmental impact
- School Corner: Educational resources about SDGs and sustainability
- About Page: Information about the project and creators
- Home Page: Overview of environmental topics

ENVIRONMENTAL EXPERTISE:
- Climate change, carbon footprints, sustainability
- Renewable energy, recycling, conservation
- SDGs (Sustainable Development Goals)
- Environmental science and best practices

RESPONSE STYLE:
- Friendly, educational, and encouraging
- Keep responses concise (2-3 sentences)
- Always relate answers to EcoSense when possible
- If asked about non-environmental topics, politely redirect to EcoSense features

Current conversation context: ${conversationHistory.slice(-3).map(m => `${m.type}: ${m.content}`).join(' | ')}`;

    try {
      const response = await fetch(AI_CONFIG.OPENAI.endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AI_CONFIG.OPENAI.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: AI_CONFIG.OPENAI.model,
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: query
            }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      console.log('📡 API Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error Response:', errorText);
        throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ API Response received:', data);
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const aiResponse = data.choices[0].message.content.trim();
        console.log('🤖 AI Response:', aiResponse);
        return aiResponse;
      } else {
        console.error('❌ Unexpected API response format:', data);
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('❌ OpenAI API call failed:', error);
      throw error;
    }
  };

  const getHuggingFaceResponse = async (query, conversationHistory) => {
    const response = await fetch(`${AI_CONFIG.HUGGING_FACE.endpoint}${AI_CONFIG.HUGGING_FACE.model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.HUGGING_FACE.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `You are an environmental expert assistant for EcoSense. User: "${query}". 
        Context: ${conversationHistory.slice(-2).map(m => `${m.type}: ${m.content}`).join(' | ')}
        Provide a helpful response about environmental topics, carbon footprint, sustainability, or the EcoSense website. 
        If not environmental, politely redirect to EcoSense topics. Keep it concise and friendly.`,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data[0]?.generated_text) {
        return data[0].generated_text;
      }
    }
    throw new Error('Hugging Face API failed');
  };

  // Enhanced fallback system with comprehensive project knowledge
  const getSmartFallbackResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Greetings
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'whats up'];
    if (greetings.some(greeting => lowerQuery.includes(greeting))) {
      return "Hello! I'm your EcoSense AI assistant. I'm here to help you navigate the EcoSense website and answer all your questions about environmental topics, carbon footprint calculation, sustainability, and this amazing environmental education platform. What would you like to learn about today?";
    }

    // Project and developer questions
    if (lowerQuery.includes('who made') || lowerQuery.includes('who created') || lowerQuery.includes('who developed') || lowerQuery.includes('developers') || lowerQuery.includes('creators')) {
      return "EcoSense was created by students Samarth Agrawal and Kriti Pant from Gurukul The School. It's an environmental education platform designed to make environmental science accessible and actionable for everyone. The project focuses on carbon footprint calculation, sustainability education, and environmental awareness. It's built using modern web technologies like React 18, Vite, and Tailwind CSS.";
    }

    if (lowerQuery.includes('gurukul') || lowerQuery.includes('school')) {
      return "Gurukul The School is the educational institution where Samarth Agrawal and Kriti Pant developed the EcoSense project. The school supports environmental education initiatives and encourages students to create meaningful projects that address real-world challenges like climate change and sustainability.";
    }

    // Website-specific questions with detailed responses
    if (lowerQuery.includes('calculator') || lowerQuery.includes('calculate') || lowerQuery.includes('footprint')) {
      if (lowerQuery.includes('how') || lowerQuery.includes('use') || lowerQuery.includes('work')) {
        return "The carbon footprint calculator in EcoSense is an interactive tool that measures your environmental impact across multiple categories. It calculates emissions from transportation (car, bus, train, flights), energy usage at home, dietary choices (meat consumption, food waste), and lifestyle habits. The calculator uses scientifically-based emission factors and provides personalized suggestions to reduce your impact. Results are shown in CO2 equivalents for easy understanding. You can find it in the navigation menu!";
      }
      if (lowerQuery.includes('logic') || lowerQuery.includes('methodology') || lowerQuery.includes('how does it calculate')) {
        return "The EcoSense calculator uses scientifically-based emission factors for accurate calculations. Transportation emissions are based on average vehicle emissions per kilometer, energy calculations use household electricity consumption patterns, diet calculations consider food production emissions (meat vs plant-based), and lifestyle factors include daily activities and consumption patterns. All results are converted to CO2 equivalents for standardized measurement and comparison.";
      }
      return "The carbon footprint calculator helps you measure your environmental impact across different areas of your life. You can input details about your transportation habits, energy usage, dietary choices, and lifestyle preferences. The calculator will then provide you with your estimated carbon footprint and personalized suggestions for reducing it. It's built using React and provides real-time calculations with educational explanations.";
    }

    if (lowerQuery.includes('website') || lowerQuery.includes('site') || lowerQuery.includes('page') || lowerQuery.includes('ecosense')) {
      if (lowerQuery.includes('what is') || lowerQuery.includes('about')) {
        return "EcoSense is a comprehensive environmental education platform that features an interactive carbon footprint calculator, educational content about sustainability, detailed information about Sustainable Development Goals (SDGs), and resources to help you understand and reduce your environmental impact. The website is designed to make environmental science accessible and actionable for everyone with a modern, responsive design.";
      }
      if (lowerQuery.includes('features') || lowerQuery.includes('what does it have')) {
        return "EcoSense features include: 1) Interactive Carbon Footprint Calculator with scientific methodology, 2) School Corner with educational resources about SDGs and sustainability, 3) About page with project information, 4) Credits page with acknowledgments, 5) Responsive design with dark/light mode, 6) Modern UI with smooth animations using Framer Motion, 7) Fast loading with Vite build tool, and 8) Comprehensive environmental education content.";
      }
      return "EcoSense is a comprehensive environmental website that features a carbon footprint calculator, educational content about sustainability, information about Sustainable Development Goals (SDGs), and resources to help you understand and reduce your environmental impact. You can navigate through different sections using the menu to explore all the features!";
    }

    if (lowerQuery.includes('sdg') || lowerQuery.includes('sustainable development goals')) {
      if (lowerQuery.includes('what are') || lowerQuery.includes('explain')) {
        return "The Sustainable Development Goals (SDGs) are 17 global goals set by the United Nations in 2015 to achieve a better and more sustainable future for all by 2030. In EcoSense, we focus on environmental SDGs like climate action (SDG 13), clean energy (SDG 7), responsible consumption (SDG 12), life below water (SDG 14), and life on land (SDG 15). The School Corner section provides detailed educational content about these goals and their importance for environmental sustainability.";
      }
      return "The Sustainable Development Goals (SDGs) are 17 global goals set by the United Nations to achieve a better and more sustainable future for all by 2030. In EcoSense, you can learn about these goals, particularly those related to environmental protection like climate action (SDG 13), clean energy (SDG 7), responsible consumption (SDG 12), and life on land and water (SDGs 14 & 15). Check out the School Corner section to explore these topics in detail!";
    }

    if (lowerQuery.includes('school corner') || lowerQuery.includes('school') || lowerQuery.includes('education')) {
      return "The School Corner section showcases our school's environmental initiatives and community stories. It features three main school clubs: the Interact Club (focused on environmental projects and community service), Go Sharpener (a youth-led sustainability platform), and the Environmental Club (working on making the school more eco-friendly). You'll also find inspiring blog posts from students and teachers sharing their environmental journeys, celebrity blogs from environmental advocates like Emma Watson and Amitabh Bachchan, and information about upcoming environmental events. It's a great place to see real examples of environmental action and get inspired!";
    }

    if (lowerQuery.includes('quiz') || lowerQuery.includes('test') || lowerQuery.includes('assessment')) {
      return "The About page features an interactive environmental quiz that helps you assess your eco-friendliness! It asks questions about your transportation habits, diet choices, waste management, energy usage, purchasing decisions, water conservation, digital device usage, and fashion choices. Based on your answers, it gives you a personalized score and category (like Environmental Champion, Eco Warrior, etc.), along with specific action items to improve your environmental impact. It's a fun way to learn about your sustainability practices and get personalized tips!";
    }

    if (lowerQuery.includes('about') || lowerQuery.includes('about page')) {
      return "The About page is a comprehensive educational resource about ecological footprints and sustainability. It includes detailed explanations of what ecological footprints are and why they matter, all 17 Sustainable Development Goals (SDGs) with interactive information, global environmental statistics showing climate data, and an interactive quiz that helps you assess your personal eco-friendliness. You'll also find action items and practical tips for reducing your environmental impact. It's a great place to learn about environmental science and test your sustainability knowledge!";
    }

    // Technical questions
    if (lowerQuery.includes('technology') || lowerQuery.includes('tech stack') || lowerQuery.includes('built with') || lowerQuery.includes('framework')) {
      return "EcoSense is built with modern web technologies: React 18 for the user interface, Vite for fast development and building, Tailwind CSS for styling, and Framer Motion for smooth animations. The website features responsive design that works on all devices, dark/light mode toggle, interactive elements, and fast loading times. The carbon footprint calculator uses JavaScript for real-time calculations with scientifically-based emission factors.";
    }

    // Environmental topics with enhanced responses
    if (lowerQuery.includes('climate')) {
      if (lowerQuery.includes('what is') && !lowerQuery.includes('change')) {
        return "Climate refers to the long-term average of weather conditions in a specific region, including temperature, precipitation, humidity, and wind patterns. It's different from weather, which describes short-term atmospheric conditions. Climate is influenced by factors like latitude, altitude, ocean currents, and atmospheric composition. Understanding climate is crucial for environmental science and sustainability planning, which is why EcoSense focuses on climate education.";
      } else if (lowerQuery.includes('change')) {
        return "Climate change refers to significant, long-term changes in global weather patterns and average temperatures. The main driver is the increase in greenhouse gas concentrations from human activities like burning fossil fuels, deforestation, and industrial processes. Effects include rising sea levels, more extreme weather events, ecosystem disruptions, and impacts on human health and agriculture. Reducing our carbon footprint through sustainable practices is crucial for addressing climate change, which is exactly what the EcoSense calculator helps you do.";
      }
    }
    
    if (lowerQuery.includes('carbon footprint')) {
      if (lowerQuery.includes('what is') || lowerQuery.includes('explain')) {
        return "A carbon footprint is the total amount of greenhouse gases (primarily carbon dioxide) emitted directly and indirectly by an individual, organization, event, or product. It's measured in carbon dioxide equivalents (CO2e) and includes emissions from transportation, energy use, food consumption, and daily activities. Understanding your footprint helps identify areas where you can reduce your environmental impact. The EcoSense calculator can help you measure your personal carbon footprint using scientifically-based methods!";
      }
      return "A carbon footprint is the total amount of greenhouse gases (primarily carbon dioxide) emitted directly and indirectly by an individual, organization, event, or product. It's measured in carbon dioxide equivalents (CO2e) and includes emissions from transportation, energy use, food consumption, and daily activities. Understanding your footprint helps identify areas where you can reduce your environmental impact.";
    }
    
    if (lowerQuery.includes('sustainability')) {
      if (lowerQuery.includes('what is') || lowerQuery.includes('explain')) {
        return "Sustainability means meeting current needs without compromising future generations' ability to meet their own needs. It has three pillars: environmental (protecting natural resources), social (ensuring human well-being), and economic (maintaining economic viability). Sustainable practices include using renewable energy, reducing waste, supporting local economies, and making conscious consumption choices. EcoSense helps you understand and implement sustainable practices in your daily life through education and practical tools.";
      }
      return "Sustainability means meeting current needs without compromising future generations' ability to meet their own needs. It has three pillars: environmental (protecting natural resources), social (ensuring human well-being), and economic (maintaining economic viability). Sustainable practices include using renewable energy, reducing waste, supporting local economies, and making conscious consumption choices.";
    }
    
    if (lowerQuery.includes('renewable energy')) {
      return "Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, water, geothermal heat, and biomass. Unlike fossil fuels, renewable energy sources don't deplete and produce minimal greenhouse gas emissions. Common types include solar, wind, hydroelectric, geothermal, and bioenergy. Transitioning to renewable energy is crucial for reducing carbon emissions and combating climate change. You can support renewable energy by choosing green energy providers and advocating for clean energy policies.";
    }
    
    if (lowerQuery.includes('recycling')) {
      return "Recycling is the process of converting waste materials into new products to prevent waste of potentially useful materials. It reduces the need for extracting, refining, and processing raw materials, which saves energy and reduces greenhouse gas emissions. Common recyclable materials include paper, cardboard, glass, metal, and certain plastics. Proper recycling helps conserve natural resources and reduce landfill waste. Remember to check your local recycling guidelines and clean materials before recycling.";
    }

    if (lowerQuery.includes('tips') || lowerQuery.includes('advice') || lowerQuery.includes('how to') || lowerQuery.includes('reduce')) {
      if (lowerQuery.includes('carbon') || lowerQuery.includes('footprint')) {
        return "Here are practical ways to reduce your carbon footprint: 1) Use public transport, walk, or cycle instead of driving, 2) Switch to renewable energy sources, 3) Eat more plant-based meals and reduce food waste, 4) Use energy-efficient appliances and turn off devices when not in use, 5) Choose local, seasonal, and minimally packaged foods, 6) Reduce, reuse, and recycle properly, 7) Support sustainable businesses and products, 8) Plant trees or support reforestation projects. Use the EcoSense calculator to track your progress and get personalized suggestions!";
      }
      return "Here are some practical eco-friendly tips you can implement today: 1) Use reusable water bottles and shopping bags, 2) Turn off lights and unplug devices when not in use, 3) Take shorter showers and fix water leaks, 4) Use public transport, walk, or cycle when possible, 5) Eat more plant-based meals and reduce food waste, 6) Recycle properly and compost organic waste, 7) Support renewable energy and energy-efficient products, 8) Buy local, seasonal, and minimally packaged foods. You can also use the EcoSense calculator to measure your current impact and get personalized suggestions!";
    }

    // Specific environmental topics
    if (lowerQuery.includes('pollution')) {
      return "Pollution refers to the introduction of harmful substances or contaminants into the environment. Major types include air pollution (from vehicles, industry), water pollution (from chemicals, waste), soil pollution (from pesticides, waste), and noise pollution. Pollution affects human health, wildlife, and ecosystems. Reducing pollution involves using cleaner energy sources, proper waste disposal, sustainable transportation, and supporting environmental regulations. Every small action counts in reducing pollution!";
    }

    if (lowerQuery.includes('biodiversity')) {
      return "Biodiversity refers to the variety of life on Earth, including all species of plants, animals, fungi, and microorganisms. It's crucial for ecosystem stability, food security, and human well-being. Threats to biodiversity include habitat destruction, climate change, pollution, and overexploitation. You can help protect biodiversity by supporting conservation efforts, choosing sustainable products, reducing your environmental impact, and learning about local ecosystems. The School Corner in EcoSense has more information about biodiversity and conservation.";
    }

    if (lowerQuery.includes('conservation')) {
      return "Conservation involves protecting and preserving natural resources, ecosystems, and biodiversity for future generations. It includes protecting wildlife habitats, reducing resource consumption, supporting sustainable practices, and advocating for environmental policies. Conservation efforts can be as simple as reducing water usage, supporting local conservation organizations, or choosing products from sustainable sources. Every action contributes to protecting our planet's natural heritage.";
    }

    // Check if it's clearly not environmental
    const nonEnvironmentalTerms = [
      'weather', 'sports', 'music', 'movie', 'game', 'cooking', 'fashion', 'shopping',
      'politics', 'economy', 'technology', 'science', 'math', 'history', 'geography'
    ];
    
    if (nonEnvironmentalTerms.some(term => lowerQuery.includes(term))) {
      return "I'm designed to help with environmental topics, carbon footprint calculation, sustainability, and questions about the EcoSense website. Could you please ask me something related to these topics? I'd be happy to help you understand your environmental impact, learn about sustainable practices, or navigate the EcoSense website created by Samarth Agrawal and Kriti Pant!";
    }

    // General environmental query
    const environmentalTerms = [
      'environment', 'eco', 'green', 'sustainable', 'climate', 'carbon', 'footprint',
      'pollution', 'energy', 'renewable', 'recycling', 'waste', 'conservation',
      'biodiversity', 'wildlife', 'ocean', 'forest', 'air', 'water', 'soil',
      'emissions', 'greenhouse', 'global warming', 'renewable', 'solar', 'wind'
    ];

    if (environmentalTerms.some(term => lowerQuery.includes(term))) {
      return "That's an interesting question about environmental topics! I can help you with specific information about carbon footprints, sustainability practices, climate science, renewable energy, and how to reduce your environmental impact. You can also explore the EcoSense website to learn more about these topics and use our calculator to measure your footprint!";
    }

    // Default response
    return "I'm here to help with environmental topics and the EcoSense website! I can provide information about climate, carbon footprints, sustainability, renewable energy, recycling, and other environmental subjects. I can also help you navigate all the features of this environmental education platform. What would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsLoading(true);

    try {
      const conversationHistory = [...messages, userMessage];
      const response = await getAIResponse(userMessage.content, conversationHistory);

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: "I'm having trouble processing your request right now. Please try asking about environmental topics, carbon footprint calculation, or sustainability practices. I'm here to help with EcoSense-related questions!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };



  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat with EcoSense AI Assistant"
      >
        <div className="relative">
          <MessageCircle size={24} />
          <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300" />
        </div>
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-full relative">
                    <Bot size={20} className="text-white" />
                    <Sparkles size={10} className="absolute -top-1 -right-1 text-yellow-300" />
                  </div>
                  <div className="flex items-center space-x-2">
                                                              <div>
                       <h3 className="font-semibold text-gray-900 dark:text-white">EcoSense AI Assistant</h3>
                       <p className="text-sm text-gray-500 dark:text-gray-400">Environmental Expert</p>
                     </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <div className="relative">
                            <Bot size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <Sparkles size={8} className="absolute -top-1 -right-1 text-yellow-300" />
                          </div>
                        )}
                        <div className="text-sm leading-relaxed">
                          {message.content}
                        </div>
                        {message.type === 'user' && (
                          <User size={16} className="text-white mt-0.5 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white px-4 py-2 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <Bot size={16} className="text-emerald-500" />
                          <Sparkles size={8} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about environmental topics..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-700 dark:text-white"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 text-white p-2 rounded-xl transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  AI-powered EcoSense assistant - Navigate the website and get environmental guidance
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 