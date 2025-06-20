
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const skills = [
    'Node.js', 'Java', 'PostgreSQL', 'MongoDB', 'Express.js', 
    'Microservices', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS',
    'TypeScript', 'REST APIs', 'GraphQL', 'Redis', 'Git'
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Building Scalable Backend Solutions
            </h3>
            
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate backend developer with 5+ years of experience building robust, 
              scalable applications. I specialize in microservices architecture, API development, 
              and database optimization.
            </p>
            
            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My expertise lies in creating efficient server-side solutions that power modern 
              web applications, with a focus on performance, security, and maintainability.
            </p>

            <div>
              <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technologies & Skills
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full overflow-hidden border-4 ${
                darkMode ? 'border-blue-500' : 'border-blue-600'
              }`}>
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`absolute -inset-4 rounded-full blur-2xl opacity-30 ${
                darkMode ? 'bg-blue-500' : 'bg-blue-300'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
