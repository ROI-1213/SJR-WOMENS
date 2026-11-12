import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { BookOpen, Pen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HindiDepartment = () => {
  return (
    <AcademicsLayout pageTitle="Department of Hindi" breadcrumbPath="Hindi" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Embracing Hindi Language & Literature</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Department of Hindi nurtures a deep understanding of Hindi literature, grammar, and cultural traditions, 
              empowering students with strong linguistic and literary foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: BookOpen, title: 'Hindi Literature', description: 'Classical and modern Hindi literary works' },
              { icon: Pen, title: 'Creative Expression', description: 'Poetry, short stories, and essays in Hindi' },
              { icon: Users, title: 'Cultural Awareness', description: 'Hindi cinema, media, and cultural studies' },
              { icon: Award, title: 'Translation Studies', description: 'Hindi-English and Hindi-Kannada translation' }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/academics/graduate/ba"
              className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
            >
              Explore BA Program
            </Link>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default HindiDepartment;
