
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { Calculator, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostgraduateOverview = () => {
  const programs = [
    {
      icon: Calculator,
      title: 'M.Com',
      description: 'Master of Commerce',
      link: '/academics/mcom',
      duration: '2 Years',
      specializations: []
    },
    {
      icon: Monitor,
      title: 'MCA (AICTE)',
      description: 'Master of Computer Applications',
      link: '/academics/postgraduate/mca',
      duration: '2 Years',
      specializations: []
    }
  ];

  return (
    <AcademicsLayout pageTitle="Post Graduate Programs" breadcrumbPath="Post Graduate Programs" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Post Graduate Programs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Advance your expertise with our specialized postgraduate programs that combine 
              rigorous academic study with practical application and research opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <Link to={program.link}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <program.icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-logo-navy mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <span className="inline-block bg-logo-blue/10 text-logo-navy px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {program.duration}
                    </span>
                    {program.specializations.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {program.specializations.map((spec, specIndex) => (
                          <span key={specIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default PostgraduateOverview;
