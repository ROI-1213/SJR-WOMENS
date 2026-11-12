import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, Award, Building, BookOpen } from 'lucide-react';
import councilSudhakar from '@/assets/council-sudhakar-esturi.jpg';
import leadershipImage from '@/assets/homepage/academic-leadership.webp';
import { principalCredentials, principalName } from '@/data/institute';
import alakanandaImage from '@/assets/faculty-alakananda-kp.jpg';

const CollegeManagement = () => {
  const managementTeam = [
    {
      name: 'Sri. Sudhakar Esturi',
      designation: 'Chairman',
      image: councilSudhakar,
      description: 'A visionary leader committed to academic excellence and institutional growth. He guides the institution with strategic direction and strong governance principles.'
    },
    {
      name: principalName,
      credentials: principalCredentials,
      designation: 'Principal',
      image: leadershipImage,
      imageAlt: 'AI-generated illustration of an academic office',
      description: 'An experienced academician dedicated to fostering quality education and innovation. He leads the institution with a focus on student success and holistic development.'
    },
    {
      name: 'Prof. Alakananda K P',
      designation: 'Vice-Principal',
      image: alakanandaImage,
      description: 'A committed educator supporting academic administration and student engagement. She plays a key role in strengthening academic standards and campus initiatives.'
    }
  ];

  return (
    <AboutLayout pageTitle="College Management" breadcrumbPath="College Management">
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Leadership Team
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Meet our experienced leadership team committed to academic excellence and institutional growth.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {managementTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden border shadow-md hover:shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.imageAlt ?? member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-logo-navy mb-1">{member.name}</h3>
                  {member.credentials && <p className="mb-1 text-sm text-gray-600">{member.credentials}</p>}
                  <p className="text-lg font-semibold text-logo-blue mb-3">{member.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Organizational Structure
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 animate-scale-in">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-logo-navy to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-logo-navy">Governing Body</h3>
                <p className="text-gray-600">Sri Jagadguru Renukacharya Education Society</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users size={32} className="text-logo-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-logo-navy mb-2">Academic Council</h4>
                  <p className="text-sm text-gray-600">Curriculum & Academic Policies</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <Award size={32} className="text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-logo-navy mb-2">Administrative Board</h4>
                  <p className="text-sm text-gray-600">Operations & Management</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <BookOpen size={32} className="text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-logo-navy mb-2">Faculty Senate</h4>
                  <p className="text-sm text-gray-600">Teaching & Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
            Our Management Philosophy
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in-up animate-delay-200">
              We believe in collaborative leadership, transparency, and shared governance. Our management 
              approach emphasizes student-centric decision making, faculty empowerment, and continuous 
              improvement in all aspects of institutional functioning.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'Collaborative Leadership', description: 'Fostering teamwork and shared responsibility' },
                { title: 'Transparent Governance', description: 'Open communication and accountable processes' },
                { title: 'Student-Centric Approach', description: 'Prioritizing student success and welfare' }
              ].map((principle, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.4}s` }}>
                  <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                  <p className="opacity-80">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default CollegeManagement;
