
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent } from '../../../components/ui/card';
import { Monitor, Code, Database, Cpu, Wifi, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerScienceDepartment = () => {
  return (
    <AcademicsLayout pageTitle="Department of Computer Science" breadcrumbPath="Computer Science" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-logo-navy mb-6">Technology & Innovation Hub</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Department of Computer Science prepares students for the digital future through cutting-edge 
                curriculum, hands-on programming, and emerging technology expertise.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">400+</div>
                  <div className="text-sm text-gray-600">CS Students</div>
                </div>
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">100%</div>
                  <div className="text-sm text-gray-600">Industry Placement</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Computer Science Department"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Specialization Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Software Development', description: 'Full-stack web and mobile app development' },
              { icon: Database, title: 'Data Science & AI', description: 'Machine learning and artificial intelligence' },
              { icon: Shield, title: 'Cybersecurity', description: 'Information security and ethical hacking' },
              { icon: Wifi, title: 'Cloud Computing', description: 'AWS, Azure, and cloud technologies' },
              { icon: Monitor, title: 'Web Technologies', description: 'Modern web frameworks and technologies' },
              { icon: Cpu, title: 'System Programming', description: 'Operating systems and embedded systems' }
            ].map((area, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Related Programs</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/academics/bca"
                className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
              >
                BCA Program
              </Link>
              <Link 
                to="/academics/graduate/bsc-computer-psychology"
                className="px-6 py-3 bg-logo-navy text-white rounded-lg hover:bg-logo-blue transition-colors font-semibold"
              >
                BSc Computer Science & Psychology
              </Link>
              <Link 
                to="/academics/certificate/cyber-security"
                className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
              >
                Cyber Security Course
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default ComputerScienceDepartment;
