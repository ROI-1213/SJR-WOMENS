
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Monitor, Calculator, Users, Palette, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraduateOverview = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'B.A',
      description: 'Bachelor of Arts under SEP',
      link: '/academics/graduate/ba',
      duration: '3 Years',
      specializations: [
        'Economics (Optional Kannada / English)',
        'Sociology',
        'Journalism',
        'Political Science',
        'Sports'
      ]
    },
    {
      icon: Palette,
      title: 'B.Sc. Animation',
      description: 'Bachelor of Science in Animation',
      link: '/academics/graduate/bsc-animation',
      duration: '3 Years',
      specializations: []
    },
    {
      icon: Atom,
      title: 'B.Sc',
      description: 'Bachelor of Science – 6 combinations',
      link: '/academics/graduate/bsc',
      duration: '3 Years',
      specializations: [
        'Chemistry, Botany, Zoology',
        'Physics, Chemistry, Mathematics',
        'Physics, Mathematics, Electronics',
        'Physics, Mathematics, Computer Science',
        'Electronics, Mathematics, Computer Science',
        'Physics, Electronics, Computer Science'
      ]
    },
    {
      icon: Calculator,
      title: 'B.Com - Logistics',
      description: 'Bachelor of Commerce with Logistics specialization',
      link: '/academics/graduate/bcom-logistics',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Materials Management',
        'Fundamentals of Logistics & Supply Chain',
        'Purchasing & Supply Chain Management',
        'Facilities Management',
        'Managing Procurement Contracts & Relationship',
        'Project Management & Supply Chain Process Redesign',
        'Sourcing for Logistics & Supply Chain Management'
      ]
    },
    {
      icon: Calculator,
      title: 'B.Com - Regular',
      description: 'Bachelor of Commerce',
      link: '/academics/bcom',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Corporate Accounting',
        'Financial Management',
        'Income Tax',
        'Goods & Service Tax',
        'Cost Accounting',
        'Corporate Administration',
        'Management Accounting',
        'Financial Analytics & Investment',
        'Principles & Practice of Auditing'
      ]
    },
    {
      icon: Users,
      title: 'BBA (AICTE)',
      description: 'Bachelor of Business Administration',
      link: '/academics/bba',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Business Dynamics & Entrepreneurship',
        'Fundamentals of MS-Excel',
        'Modern Marketing',
        'Fundamentals of Database',
        'Management System & SQL',
        'Advanced Excel',
        'Computer Fundamentals & C Programming',
        'Goods & Service Tax',
        'Data Science Life Cycle',
        'Financial Analytics',
        'Application of Python in Business',
        'Data Warehousing & Data Mining',
        'Marketing Analytics',
        'Business Analytics'
      ]
    },
    {
      icon: Monitor,
      title: 'BCA (AICTE)',
      description: 'Bachelor of Computer Applications',
      link: '/academics/bca',
      duration: '3 Years',
      specializations: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cloud Computing',
        'Android',
        'Data Mining',
        'Python',
        'Mobile Computing',
        'J2EE',
        'Network Security',
        'Data Security',
        'Blockchain Technology'
      ]
    }
  ];

  return (
    <AcademicsLayout pageTitle="UG Programs (Under SEP)" breadcrumbPath="UG Programs" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">UG Programs (Under SEP)</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Build a strong foundation for your career with our comprehensive undergraduate programs 
              designed to provide both theoretical knowledge and practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <Link to={program.link}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <program.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-logo-navy mb-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                    <span className="inline-block bg-logo-blue/10 text-logo-navy px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {program.duration}
                    </span>
                    {program.specializations.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1.5 mt-2">
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

export default GraduateOverview;
