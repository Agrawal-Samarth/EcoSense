import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { 
  Car, 
  Bike, 
  Train, 
  Plane, 
  Leaf, 
  Calculator as CalculatorIcon, 
  TrendingDown,
  Lightbulb,
  Monitor,
  Utensils
} from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const schema = yup.object({
  transport: yup.string().required('Please select your primary mode of transport'),
  transportHours: yup.number().min(0).max(24).required('Please enter hours per week'),
  diet: yup.string().required('Please select your diet type'),
  energyUsage: yup.number().min(0).required('Please enter your monthly energy usage'),
  digitalUsage: yup.number().min(0).max(24).required('Please enter daily digital usage hours'),
  waste: yup.string().required('Please select your waste management'),
  shopping: yup.string().required('Please select your shopping habits'),
}).required();

const Calculator = () => {
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const transportOptions = [
    { value: 'car', label: 'Car', icon: Car, factor: 2.3 },
    { value: 'bike', label: 'Bicycle', icon: Bike, factor: 0.0 },
    { value: 'public', label: 'Public Transport', icon: Train, factor: 0.4 },
    { value: 'walk', label: 'Walking', icon: Leaf, factor: 0.0 },
  ];

  const dietOptions = [
    { value: 'vegan', label: 'Vegan', factor: 1.5 },
    { value: 'vegetarian', label: 'Vegetarian', factor: 2.0 },
    { value: 'pescatarian', label: 'Pescatarian', factor: 2.5 },
    { value: 'omnivore', label: 'Omnivore', factor: 3.0 },
  ];

  const calculateFootprint = (data) => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const transport = transportOptions.find(t => t.value === data.transport);
      const diet = dietOptions.find(d => d.value === data.diet);
      
      // Calculate CO2 emissions (tons per year)
      const transportCO2 = (transport.factor * data.transportHours * 52) / 1000;
      const dietCO2 = diet.factor * 12;
      const energyCO2 = (data.energyUsage * 0.5) / 12; // Assuming 0.5 kg CO2 per kWh
      const digitalCO2 = (data.digitalUsage * 0.1 * 365) / 1000; // Rough estimate
      
      const totalCO2 = transportCO2 + dietCO2 + energyCO2 + digitalCO2;
      
      const breakdown = [
        { category: 'Transport', value: transportCO2, color: '#3b82f6' },
        { category: 'Diet', value: dietCO2, color: '#10b981' },
        { category: 'Energy', value: energyCO2, color: '#f59e0b' },
        { category: 'Digital', value: digitalCO2, color: '#8b5cf6' },
      ];

      const globalAverage = 4.8; // Global average CO2 per person per year
      const comparison = totalCO2 / globalAverage * 100;

      setResults({
        total: totalCO2,
        breakdown,
        comparison,
        globalAverage,
        tips: generateTips(data, totalCO2, globalAverage)
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const generateTips = (data, total, average) => {
    const tips = [];
    
    if (data.transport === 'car') {
      tips.push('Consider carpooling or using public transport to reduce emissions');
    }
    
    if (data.diet === 'omnivore') {
      tips.push('Try reducing meat consumption - even one meat-free day per week helps');
    }
    
    if (data.energyUsage > 500) {
      tips.push('Switch to energy-efficient appliances and LED bulbs');
    }
    
    if (data.digitalUsage > 8) {
      tips.push('Consider reducing screen time and streaming in lower quality');
    }
    
    if (total > average) {
      tips.push('Your footprint is above average - focus on the biggest impact areas first');
    } else {
      tips.push('Great job! You\'re below the global average. Keep up the good work!');
    }
    
    return tips;
  };

  const chartData = results ? {
    labels: results.breakdown.map(item => item.category),
    datasets: [{
      label: 'CO2 Emissions (tons/year)',
      data: results.breakdown.map(item => item.value),
      backgroundColor: results.breakdown.map(item => item.color),
      borderColor: results.breakdown.map(item => item.color),
      borderWidth: 1,
    }]
  } : null;

  const doughnutData = results ? {
    labels: results.breakdown.map(item => item.category),
    datasets: [{
      data: results.breakdown.map(item => item.value),
      backgroundColor: results.breakdown.map(item => item.color),
      borderWidth: 2,
      borderColor: '#ffffff',
    }]
  } : null;

  return (
    <div className="pt-16 min-h-screen bg-gradient-eco">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Carbon Footprint Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your environmental impact by answering a few questions about your lifestyle. 
            Get personalized tips to reduce your carbon footprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <CalculatorIcon className="h-8 w-8 text-eco-green" />
                <h2 className="text-2xl font-bold text-gray-800">Your Lifestyle</h2>
              </div>

              <form onSubmit={handleSubmit(calculateFootprint)} className="space-y-6">
                {/* Transport */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Primary Mode of Transport
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {transportOptions.map((option) => (
                      <label key={option.value} className="relative">
                        <input
                          type="radio"
                          value={option.value}
                          {...register('transport')}
                          className="sr-only"
                        />
                        <div className="flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all hover:border-eco-green peer-checked:border-eco-green peer-checked:bg-eco-green/10">
                          <option.icon className="h-5 w-5 mr-2 text-gray-600" />
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.transport && (
                    <p className="text-red-500 text-sm mt-1">{errors.transport.message}</p>
                  )}
                </div>

                {/* Transport Hours */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours of Transport per Week
                  </label>
                  <input
                    type="number"
                    {...register('transportHours')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-transparent"
                    placeholder="e.g., 5"
                  />
                  {errors.transportHours && (
                    <p className="text-red-500 text-sm mt-1">{errors.transportHours.message}</p>
                  )}
                </div>

                {/* Diet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Diet Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {dietOptions.map((option) => (
                      <label key={option.value} className="relative">
                        <input
                          type="radio"
                          value={option.value}
                          {...register('diet')}
                          className="sr-only"
                        />
                        <div className="flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all hover:border-eco-green peer-checked:border-eco-green peer-checked:bg-eco-green/10">
                          <Utensils className="h-5 w-5 mr-2 text-gray-600" />
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.diet && (
                    <p className="text-red-500 text-sm mt-1">{errors.diet.message}</p>
                  )}
                </div>

                {/* Energy Usage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Energy Usage (kWh)
                  </label>
                  <input
                    type="number"
                    {...register('energyUsage')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-transparent"
                    placeholder="e.g., 300"
                  />
                  {errors.energyUsage && (
                    <p className="text-red-500 text-sm mt-1">{errors.energyUsage.message}</p>
                  )}
                </div>

                {/* Digital Usage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Digital Usage (hours)
                  </label>
                  <input
                    type="number"
                    {...register('digitalUsage')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-transparent"
                    placeholder="e.g., 4"
                  />
                  {errors.digitalUsage && (
                    <p className="text-red-500 text-sm mt-1">{errors.digitalUsage.message}</p>
                  )}
                </div>

                {/* Waste Management */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waste Management
                  </label>
                  <select
                    {...register('waste')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="recycling">Recycling & Composting</option>
                    <option value="some-recycling">Some Recycling</option>
                    <option value="no-recycling">No Recycling</option>
                  </select>
                  {errors.waste && (
                    <p className="text-red-500 text-sm mt-1">{errors.waste.message}</p>
                  )}
                </div>

                {/* Shopping Habits */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shopping Habits
                  </label>
                  <select
                    {...register('shopping')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="sustainable">Sustainable & Local</option>
                    <option value="mixed">Mixed</option>
                    <option value="conventional">Conventional</option>
                  </select>
                  {errors.shopping && (
                    <p className="text-red-500 text-sm mt-1">{errors.shopping.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Calculating...</span>
                    </>
                  ) : (
                    <>
                      <CalculatorIcon className="h-5 w-5" />
                      <span>Calculate My Footprint</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {results ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-6"
                >
                  {/* Total Result */}
                  <div className="card text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Carbon Footprint</h3>
                    <div className="text-6xl font-bold text-eco-green mb-2">
                      {results.total.toFixed(1)}
                    </div>
                    <p className="text-gray-600 mb-4">tons CO2 per year</p>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <TrendingDown className="h-4 w-4 text-eco-green" />
                        <span>Global Average: {results.globalAverage} tons</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        You are {results.comparison > 100 ? 'above' : 'below'} the global average by{' '}
                        <span className="font-semibold text-eco-green">
                          {Math.abs(results.comparison - 100).toFixed(1)}%
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Breakdown Chart */}
                  <div className="card">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Breakdown by Category</h3>
                    <div className="h-64">
                      <Bar
                        data={chartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                              title: {
                                display: true,
                                text: 'CO2 (tons/year)',
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="card">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tips to Reduce Your Footprint</h3>
                    <ul className="space-y-3">
                      {results.tips.map((tip, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <Leaf className="h-5 w-5 text-eco-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card h-96 flex items-center justify-center"
                >
                  <div className="text-center text-gray-500">
                    <CalculatorIcon className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">Fill out the form to see your results</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 