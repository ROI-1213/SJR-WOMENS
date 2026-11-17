import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementSources } from '@/data/placementRecords';
import infosys from '@/assets/homepage/infosys.svg';
import tcs from '@/assets/recruiter-tcs.jpg';
import capgemini from '@/assets/homepage/capgemini.svg';
import accenture from '@/assets/recruiter-accenture.jpg';
import wipro from '@/assets/recruiter-wipro.jpg';
import ibm from '@/assets/recruiter-ibm.jpg';
import { PlacementCards, PlacementReportLinks, placementAction, placementHeading } from './PlacementContent';

const technologyEmployers = [
  { name: 'Infosys', logo: infosys },
  { name: 'Tata Consultancy Services', logo: tcs },
  { name: 'Capgemini', logo: capgemini },
  { name: 'Accenture', logo: accenture },
  { name: 'Wipro', logo: wipro },
  { name: 'IBM', logo: ibm },
];

const otherRecords = [
  { name: 'HDFC', context: 'Named in the college’s campus recruitment overview.' },
  { name: 'ICICI Prudential', context: 'Listed in the 2017–18 placement report.' },
  { name: 'Muthoot Finance', context: 'Listed in the 2024–25 provisional placement records.' },
  { name: 'Nivara Housing Finance', context: 'Listed in the 2024–25 provisional placement records.' },
  { name: 'HR-Spectrum', context: 'Listed in the 2024–25 provisional placement records.' },
];

const recruitment = [
  { icon: FileText, title: 'Share the role', description: 'Employers send the role description, eligibility requirements, and proposed selection dates to the Placement Cell.' },
  { icon: MessagesSquare, title: 'Brief and prepare students', description: 'The cell shares opportunity details with eligible students, who can review the role and prepare for the employer’s selection stages.' },
  { icon: ClipboardCheck, title: 'Complete selection', description: 'Employers conduct the required assessments and interviews. Selected candidates follow the employer’s documentation and joining instructions.' },
];

const RecruitingCompanies = () => (
  <PlacementLayout page="companies" related={['brochure', 'statistics', 'collaboration']}>
    <section aria-labelledby="placement-employers">
      <h2 id="placement-employers" className={placementHeading}>IT and consulting employers</h2>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">The college’s Placement Cell identifies these employers in its campus recruitment overview.</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {technologyEmployers.map(({ name, logo }) => (
          <li key={name} className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-[#177249]/20 bg-white px-3 py-5 text-center">
            <div className="grid h-12 w-full place-items-center">
              <img src={logo} alt="" className="max-h-11 w-full max-w-28 object-contain" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-sm font-semibold leading-snug text-[#177249]">{name}</h3>
          </li>
        ))}
      </ul>
      <a href={placementSources.cell} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">
        College Placement Cell overview <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
      </a>
    </section>

    <section aria-labelledby="other-placement-records" className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:p-7">
      <h2 id="other-placement-records" className={placementHeading}>Financial services and other recorded employers</h2>
      <ul className="mb-5 mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {otherRecords.map(({ name, context }) => (
          <li key={name} className="rounded-lg border border-[#177249]/15 bg-white p-4">
            <h3 className="font-semibold text-[#177249]">{name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700">{context}</p>
          </li>
        ))}
      </ul>
      <PlacementReportLinks reports={[
        { label: '2017–18 placement report', href: placementSources.archive, description: 'Historical placement entries, including ICICI Prudential.' },
        { label: '2025–26 Mandatory Disclosures', href: placementSources.disclosure, description: 'Section 16 includes provisional placements for 2024–25.' },
      ]} />
    </section>

    <section aria-labelledby="recruitment-process">
      <h2 id="recruitment-process" className={`${placementHeading} mb-5 border-b border-[#177249]/20 pb-3`}>How recruitment works</h2>
      <PlacementCards items={recruitment} />
      <Link to="/contact" className={`${placementAction} mt-5`}>Discuss a recruitment opportunity <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
    </section>
  </PlacementLayout>
);

export default RecruitingCompanies;
