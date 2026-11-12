
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Calculator, TrendingUp, Building, Users, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const CommerceDepartment = () => {
  const curriculumHighlights = [
    { icon: Calculator, title: 'Advanced Accounting', description: 'Financial and Management Accounting principles' },
    { icon: TrendingUp, title: 'Finance & Investment', description: 'Corporate finance and investment strategies' },
    { icon: Building, title: 'Business Management', description: 'Organizational behavior and strategic planning' },
    { icon: BookOpen, title: 'Taxation', description: 'Direct and indirect tax systems and compliance' }
  ];

  const careerPaths = [
    'Chartered Accountant (CA)',
    'Financial Analyst',
    'Business Consultant',
    'Tax Advisor',
    'Corporate Manager',
    'Entrepreneur',
    'Banking Professional',
    'Investment Advisor'
  ];

  const activities = [
    'Industry seminars and workshops',
    'Internship programs with leading firms',
    'Business case study competitions',
    'Financial modeling workshops',
    'Guest lectures by industry experts',
    'Commerce club activities'
  ];

  return (
    <AcademicsLayout pageTitle="Department of Commerce" breadcrumbPath="Commerce" category="Departments">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-logo-navy mb-6">Building Future Business Leaders</h2>
                <p className="text-xl text-gray-700 mb-6">
                  The Department of Commerce at Sri Jagadguru Renukacharya College of Science, Arts & Commerce offers comprehensive programs in B.Com, M.Com, 
                  and BBA (approved by AICTE), preparing students for dynamic careers in finance, business, and entrepreneurship.
                </p>
                <p className="text-gray-600 mb-8">
                  Our curriculum combines theoretical knowledge with practical applications, ensuring graduates 
                  are industry-ready and equipped with the skills needed to excel in the modern business world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-logo-blue hover:bg-logo-navy">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white">
                    Request Information
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business students in discussion"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Programs Offered</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'B.Com', duration: '3 Years', description: 'Bachelor of Commerce with specializations in Accounting, Finance, and Business' },
              { title: 'M.Com', duration: '2 Years', description: 'Master of Commerce with advanced business and financial studies' },
              { title: 'BBA', duration: '3 Years', description: 'Bachelor of Business Administration approved by AICTE' }
            ].map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-logo-navy">{program.title}</CardTitle>
                  <p className="text-logo-blue font-semibold">{program.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Curriculum Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-logo-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Student Life & Activities</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Hands-on Learning Experience</h3>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Award size={20} className="text-logo-blue flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students in business seminar"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Career Pathways</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow hover:bg-logo-blue hover:text-white group">
                  <div className="flex items-center justify-center mb-3">
                    <Briefcase size={24} className="text-logo-blue group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 group-hover:text-white">{career}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Faculty Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-logo-navy to-logo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-logo-navy mb-4">Experienced Faculty Team</h3>
              <p className="text-gray-700 mb-6">
                Our Department of Commerce is led by highly qualified faculty members with extensive academic 
                and industry experience. They bring real-world insights into the classroom and mentor students 
                for successful careers in commerce and business.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GraduationCap className="w-8 h-8 text-logo-blue mx-auto mb-2" />
                  <p className="font-semibold">15+ Faculty Members</p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-logo-blue mx-auto mb-2" />
                  <p className="font-semibold">Industry Experts</p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-logo-blue mx-auto mb-2" />
                  <p className="font-semibold">Research Scholars</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Commerce Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Department of Commerce and build the foundation for a successful career in business and finance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default CommerceDepartment;
