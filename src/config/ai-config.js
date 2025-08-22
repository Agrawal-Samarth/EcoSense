// AI Configuration for Chatbot
// You can get free API keys from:
// - Google Gemini: https://makersuite.google.com/app/apikey (FREE)
// - OpenAI: https://platform.openai.com/api-keys
// - Hugging Face: https://huggingface.co/settings/tokens

export const AI_CONFIG = {
  // Google Gemini API (FREE - Recommended)
  GEMINI: {
    enabled: true, // Enable Gemini for free AI responses
    apiKey: 'YOUR_GEMINI_API_KEY_HERE', // Add your Gemini API key here
    model: 'gemini-1.5-flash',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
  },

  // Hugging Face API (Free tier available)
  HUGGING_FACE: {
    enabled: false, // Disabled due to reliability issues
    apiKey: 'hf_demo', // Demo token for testing
    model: 'facebook/blenderbot-400M-distill',
    endpoint: 'https://api-inference.huggingface.co/models/'
  },

  // OpenAI API (Paid - Smart and Reliable)
  OPENAI: {
    enabled: false, // Disabled due to quota exceeded
    apiKey: 'YOUR_OPENAI_API_KEY_HERE', // Replace with your actual API key
    model: 'gpt-3.5-turbo',
    endpoint: 'https://api.openai.com/v1/chat/completions'
  },

  // Cohere API (Free tier available)
  COHERE: {
    enabled: false, // Set to true to enable
    apiKey: 'your_cohere_api_key_here',
    model: 'command',
    endpoint: 'https://api.cohere.ai/v1/generate'
  }
};

// Instructions for setup:
// 1. Get a FREE API key from Google Gemini: https://makersuite.google.com/app/apikey
// 2. Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual Gemini API key
// 3. The chatbot will automatically use Gemini for intelligent responses
// 4. If no API is enabled, it will use the smart fallback system 