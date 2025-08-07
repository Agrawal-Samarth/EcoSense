import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  School, 
  Users, 
  Award,
  Code,
  Palette,
  Database,
  Globe
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Student Name 1",
      role: "Frontend Developer & UI/UX Designer",
      grade: "Class XI",
      avatar: "👨‍💻",
      bio: "Passionate about creating beautiful, user-friendly web experiences. Specializes in React development and modern design principles. Believes in the power of technology to drive positive environmental change.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
      contact: {
        email: "student1@school.edu",
        github: "https://github.com/student1",
        linkedin: "https://linkedin.com/in/student1"
      }
    },
    {
      name: "Student Name 2", 
      role: "Backend Developer & Data Analyst",
      grade: "Class XII",
      avatar: "👩‍💻",
      bio: "Focused on building robust applications and analyzing environmental data. Experienced in data visualization and creating meaningful insights from complex datasets.",
      skills: ["JavaScript", "Chart.js", "Data Analysis", "API Development"],
      contact: {
        email: "student2@school.edu",
        github: "https://github.com/student2",
        linkedin: "https://linkedin.com/in/student2"
      }
    }
  ];

  const projectInfo = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "React.js with Vite, Tailwind CSS, and Framer Motion for smooth animations"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Modern, responsive design with focus on accessibility and user experience"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Interactive charts and graphs using Chart.js for footprint analysis"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Environmental Focus",
      description: "Educational content about sustainability and carbon footprint reduction"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-eco">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate students dedicated to creating awareness about environmental sustainability 
            through innovative web technology.
          </p>
        </motion.div>

        {/* School Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <School className="h-8 w-8 text-eco-green" />
            <h2 className="text-2xl font-bold text-gray-800">School Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">School Name</h3>
              <p className="text-gray-600">Your School Name</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Competition</h3>
                              <p className="text-gray-600">T04B - EcoSense</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Team Size</h3>
              <p className="text-gray-600">2 Students</p>
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-eco-green font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.grade}</p>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <motion.a
                    href={`mailto:${member.contact.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    href={member.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-5 w-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    href={member.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </motion.a>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">About</h4>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-eco-green/10 text-eco-green rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-lg text-gray-600">
              Our approach to creating an impactful environmental education platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-green/10 rounded-full mb-4 text-eco-green">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-r from-eco-green to-eco-blue text-white text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="h-8 w-8" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            To create an engaging, educational platform that empowers individuals to understand and reduce 
            their environmental impact. We believe that awareness is the first step toward positive change, 
            and technology can be a powerful tool for environmental education.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Team; 