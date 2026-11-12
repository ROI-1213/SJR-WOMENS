
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { Award, Shield, Heart, Building } from 'lucide-react';

const Scholarships = () => {
  const scholarshipTypes = [
    {
      icon: Shield,
      title: 'SSP Scholarship',
      description: 'State Scholarship Portal (SSP) scholarship for eligible students from Karnataka, supporting their academic journey through government-funded financial assistance.'
    },
    {
      icon: Building,
      title: 'SJRC Scholarship',
      description: 'Sri Jagadguru Renukacharya Education Society scholarship for meritorious and deserving students, recognizing academic excellence and commitment to education.'
    },
    {
      icon: Heart,
      title: 'NGO Scholarship',
      description: 'Scholarships offered through partnered NGOs to support students from underprivileged backgrounds and promote inclusive education.'
    }
  ];

  return (
    <AdmissionsLayout pageTitle="Scholarships" breadcrumbPath="Scholarships" category="Admissions" branded>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Award className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-4">Scholarship Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sri Jagadguru Renukacharya College of Science, Arts & Commerce is committed to making quality education accessible to all deserving students. 
              Our comprehensive scholarship program supports academic excellence, financial need, and special talents.
            </p>
          </div>

          {/* Scholarship Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Types of Scholarships</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {scholarshipTypes.map((scholarship, index) => (
                <Card key={index} className="border-2 border-primary/20 bg-primary/5 p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <scholarship.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">{scholarship.title}</h4>
                  <p className="text-gray-600">{scholarship.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-primary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Apply for Scholarship Today</h3>
            <p className="mb-6">
              Don't let financial constraints limit your dreams. Apply for our scholarships and focus on your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-[#ff8c00] hover:text-neutral-950 transition-colors">
                Apply for Scholarship
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Download Guidelines
              </button>
            </div>
          </Card>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default Scholarships;
