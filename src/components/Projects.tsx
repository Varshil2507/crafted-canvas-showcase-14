
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const projects = [
    {
      title: "E-Commerce Microservices",
      description: "Scalable e-commerce platform built with microservices architecture, featuring user management, product catalog, and payment processing.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
      technologies: ["Node.js", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
      github: "https://github.com/example/ecommerce-microservices",
      demo: "https://demo.example.com"
    },
    {
      title: "Real-time Chat API",
      description: "High-performance chat application backend with real-time messaging, file uploads, and user presence tracking.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=250",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Redis", "AWS S3"],
      github: "https://github.com/example/chat-api",
      demo: "https://chat-demo.example.com"
    },
    {
      title: "Financial Analytics Platform",
      description: "Data processing pipeline for financial analytics with real-time reporting and automated risk assessment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=250",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "InfluxDB"],
      github: "https://github.com/example/financial-analytics",
      demo: "https://analytics-demo.example.com"
    },
    {
      title: "IoT Device Manager",
      description: "Backend system for managing IoT devices with real-time data collection, device monitoring, and alert systems.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250",
      technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana", "Docker"],
      github: "https://github.com/example/iot-manager",
      demo: "https://iot-demo.example.com"
    }
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Some of my recent work showcasing backend development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className={`text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </CardTitle>
                
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-blue-900 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openLink(project.github)}
                    className={`flex-1 ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={() => openLink(project.demo)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
