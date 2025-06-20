
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface CertificatesProps {
  darkMode: boolean;
}

const Certificates = ({ darkMode }: CertificatesProps) => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&h=100",
      description: "Demonstrates expertise in designing distributed systems on AWS"
    },
    {
      name: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      date: "2022",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&h=100",
      description: "Validates skills in Kubernetes cluster administration"
    },
    {
      name: "MongoDB Certified Developer",
      organization: "MongoDB Inc.",
      date: "2022",
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=100&h=100",
      description: "Certifies proficiency in MongoDB development and operations"
    },
    {
      name: "Docker Certified Associate",
      organization: "Docker Inc.",
      date: "2021",
      logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=100&h=100",
      description: "Validates containerization and Docker platform skills"
    }
  ];

  return (
    <section id="certificates" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.name}
                </h3>
                
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {cert.organization}
                </p>
                
                <p className="text-blue-500 font-medium text-sm">
                  {cert.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className={darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
            <DialogHeader>
              <DialogTitle className={darkMode ? 'text-white' : 'text-gray-900'}>
                {selectedCert?.name}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedCert?.logo}
                alt={selectedCert?.organization}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedCert?.organization}
                </p>
                <p className="text-blue-500">
                  Issued: {selectedCert?.date}
                </p>
              </div>
            </div>
            
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {selectedCert?.description}
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;
