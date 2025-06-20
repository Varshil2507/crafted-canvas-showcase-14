
import React from 'react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      duration: "2022 - Present",
      responsibilities: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries improving response time by 40%"
      ]
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      duration: "2020 - 2022",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express.js",
        "Designed and implemented PostgreSQL database schemas",
        "Integrated third-party payment gateways and services",
        "Collaborated with frontend team to deliver seamless user experiences"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "DevStudio Inc",
      duration: "2019 - 2020",
      responsibilities: [
        "Developed backend features for web applications",
        "Participated in agile development processes",
        "Fixed bugs and performed code maintenance",
        "Learned modern development practices and tools"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <p className="text-blue-500 font-medium text-lg">
                        {exp.company}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {exp.duration}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <span className="text-blue-500 mr-3 mt-1.5">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
