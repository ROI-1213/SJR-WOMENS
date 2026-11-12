import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { BookOpen, Globe, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnglishDepartment = () => {
  return (
    <AcademicsLayout pageTitle="Department of English" breadcrumbPath="English" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Mastering the Art of English Language</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Department of English fosters critical thinking, literary appreciation, and superior communication skills 
              through the study of classic and contemporary English literature and language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: BookOpen, title: 'English Literature', description: 'British, American, Indian, and world literature' },
              { icon: Globe, title: 'Communication Skills', description: 'Professional and academic English proficiency' },
              { icon: Users, title: 'Language Lab', description: 'Interactive spoken English and soft skills training' },
              { icon: Award, title: 'Literary Criticism', description: 'Critical analysis and academic writing' }
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

export default EnglishDepartment;
