import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { BookOpen, ScrollText, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const SanskritDepartment = () => {
  return (
    <AcademicsLayout pageTitle="Department of Sanskrit" breadcrumbPath="Sanskrit" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Preserving the Legacy of Sanskrit</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Department of Sanskrit is devoted to the study of ancient Indian wisdom, classical literature, 
              and the rich philosophical traditions preserved in the Sanskrit language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ScrollText, title: 'Vedic Literature', description: 'Study of Vedas, Upanishads, and Puranas' },
              { icon: BookOpen, title: 'Sanskrit Grammar', description: 'Panini\'s Ashtadhyayi and classical grammar' },
              { icon: Users, title: 'Indian Philosophy', description: 'Nyaya, Vaisheshika, Samkhya, and Vedanta' },
              { icon: Award, title: 'Classical Poetry', description: 'Kalidasa, Bhasa, and other great poets' }
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

export default SanskritDepartment;
