import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementPages } from '@/data/navigation/placementsMenuData';
import workshop from '@/assets/homepage/placement-workshop.webp';
import { PlacementCards, PlacementHighlights, placementAction, placementHeading } from './PlacementContent';

const support = [
  { icon: MessageSquareText, title: 'Career guidance', description: 'Explore job roles and further study, discuss how they fit your interests, and identify the experience you can bring to an application.' },
  { icon: GraduationCap, title: 'Recruitment preparation', description: 'Build your résumé and practise aptitude questions, group discussions, and interviews using examples from your coursework and projects.' },
  { icon: Handshake, title: 'Employer engagement', description: 'Review role descriptions and eligibility for campus and off-campus opportunities. Employers set the requirements and selection stages for each role.' },
];

const PlacementsOverview = () => (
  <PlacementLayout page="overview" related={['vision', 'activities', 'brochure']}>
    <section aria-labelledby="placement-overview-intro" className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)]">
      <div className="flex flex-col items-start justify-center p-5 sm:p-8 lg:p-10">
        <h2 id="placement-overview-intro" className={`border-l-4 border-[#ff8c00] pl-4 ${placementHeading}`}>From coursework to a career plan</h2>
        <p className="mt-4 leading-relaxed text-neutral-700">The Placement Cell helps undergraduate and postgraduate students explore careers, prepare for selection, and connect with employers. Start with the training resources, then review the requirements of roles that match your interests.</p>
        <Link to={placementPages.training.href} className={`${placementAction} mt-5`}>
          Explore placement training <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-72">
        <img src={workshop} alt="Students attending a placement preparation session" className="absolute inset-0 size-full object-cover" decoding="async" />
      </div>
    </section>

    <section aria-labelledby="placement-highlights">
      <h2 id="placement-highlights" className={`${placementHeading} mb-2`}>Placement highlights</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-neutral-700">Selected figures from the college’s recruitment and progression reports. Each figure is labelled with its scope and reporting period.</p>
      <PlacementHighlights />
      <Link to={placementPages.statistics.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">
        View placement statistics <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>

    <section aria-labelledby="placement-support">
      <h2 id="placement-support" className={`${placementHeading} mb-5 border-b border-[#177249]/20 pb-3`}>How the Placement Cell supports students</h2>
      <PlacementCards items={support} />
    </section>

    <section aria-labelledby="start-career" className="rounded-2xl bg-[#153b2a] p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
      <div>
        <BriefcaseBusiness className="mb-3 size-6 text-white" aria-hidden="true" />
        <h2 id="start-career" className="text-2xl font-bold">Plan your next step</h2>
        <p className="mt-2 max-w-xl leading-relaxed text-white/90">Review the recruitment process and ask the college about current drives, training sessions, or internship enquiries.</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3 sm:mt-0">
        <Link to={placementPages.companies.href} className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#177249] hover:bg-[#ff8c00] hover:text-neutral-950">Recruiting companies</Link>
        <Link to="/contact" className="inline-flex items-center rounded-lg border border-white/50 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Contact the college</Link>
      </div>
    </section>
  </PlacementLayout>
);

export default PlacementsOverview;
