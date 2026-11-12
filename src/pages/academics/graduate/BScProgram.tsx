import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Beaker, Atom, Cpu, Microscope, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';
import { courseDetails } from '@/data/courseDetails';

const comboIcons = [Cpu, Atom, Microscope, Beaker];

const whyChoose = [
  { icon: CheckCircle, text: 'Four verified B.Sc subject combinations across physical, life, and computer sciences' },
  { icon: BookOpen, text: 'Well-equipped Physics, Chemistry, Botany, Biotechnology, Mathematics & Wi-Fi Computer Labs' },
  { icon: Target, text: 'Research project exposure and open electives under Bengaluru City University' },
  { icon: Users, text: 'Experienced faculty serving on BCU Boards of Studies (BOS) and Examinations (BOE)' },
  { icon: GraduationCap, text: 'Strong foundation for M.Sc, MCA, research, and competitive examinations' },
  { icon: Briefcase, text: 'Industrial & institutional visits (IISc, Lalbagh, Biotechnology Centre, Padmashree Diagnostics)' },
];

const careers = [
  'Research Scientist',
  'Project Assistant',
  'Quality Control Analyst',
  'Software & IT Roles',
  'Pharmaceutical & Biotech Industry',
  'Microbiological Laboratories',
  'Electronics & Aerospace',
  'Teaching & Academia',
];

const BScProgram = () => {
  const bsc = courseDetails.bsc;
  const combinations = bsc.combinations ?? [];

  return (
    <AcademicsLayout pageTitle="Bachelor of Science (B.Sc)" breadcrumbPath="B.Sc" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{bsc.introduction}</p>
          <p className="mt-3 text-sm text-gray-600">{bsc.durationNote}</p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Official Subject Combinations</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {combinations.map((spec, i) => {
              const Icon = comboIcons[i % comboIcons.length];
              return (
                <Card key={spec.code} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-[#177249]">{spec.code}</span>
                      <h3 className="text-lg font-bold text-logo-navy">{spec.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm">{spec.description}</p>
                      {spec.labs && (
                        <p className="mt-2 text-xs font-medium text-[#185d40]">Labs: {spec.labs.join(' · ')}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.Sc at SJR College for Women?</h2>
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

export default BScProgram;
