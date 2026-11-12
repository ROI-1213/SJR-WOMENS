import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Code, Database, Cloud, Brain, Shield, Smartphone, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Advanced Programming', description: 'Java, Python, C#, and modern frameworks for enterprise application development.' },
  { icon: Database, title: 'Database & Big Data', description: 'Advanced DBMS, data warehousing, big data analytics, and NoSQL technologies.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Cloud infrastructure, containerization, CI/CD pipelines, and microservices architecture.' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Deep learning, NLP, computer vision, and intelligent system development.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Network security, ethical hacking, cryptography, and security governance.' },
  { icon: Smartphone, title: 'Mobile & Web Technologies', description: 'Full-stack development, React, Flutter, and progressive web applications.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'AICTE-approved program with industry-aligned curriculum' },
  { icon: BookOpen, text: 'Advanced lab infrastructure with latest technologies' },
  { icon: Target, text: 'Capstone project and industry internship in final semester' },
  { icon: Users, text: 'Faculty with Ph.D qualifications and IT industry experience' },
  { icon: GraduationCap, text: 'Pathway to Ph.D in Computer Science and research careers' },
  { icon: Briefcase, text: 'Excellent placement record with top IT companies' },
];

const careers = [
  'Software Architect',
  'Full-Stack Developer',
  'Data Engineer',
  'Cloud Solutions Architect',
  'AI/ML Engineer',
  'Cybersecurity Consultant',
  'IT Project Manager',
  'Technical Lead',
];

const MCAProgram = () => {
  return (
    <AcademicsLayout pageTitle="MCA (AICTE)" breadcrumbPath="MCA (AICTE)" category="Post Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The AICTE-approved MCA program provides advanced computer science education focusing on software development, AI, cloud computing, and cybersecurity. Designed for graduates seeking leadership roles in the IT industry, the program combines theoretical depth with extensive hands-on project experience.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{item.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose MCA at Sri Jagadguru Renukacharya College of Science, Arts & Commerce?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon size={22} className="text-logo-blue shrink-0 mt-0.5" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Career Opportunities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm border">
                <Briefcase size={18} className="text-logo-blue shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default MCAProgram;
