import { ArrowRight, FileCheck2, FilePlus2, FileSearch, Globe, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResearchIcon, ResearchLayout, ResearchSource, researchCard, researchHeading, researchLink } from './ResearchLayout';
import { researchSources } from './researchSources';

const patentStages = [
  {
    icon: FilePlus2,
    title: 'Filed',
    text: 'An application has been submitted. The application number can be used to track later events in the registry.',
  },
  {
    icon: Globe,
    title: 'Published',
    text: 'Application details have been made public. The publication record identifies the application and its publication date.',
    href: researchSources.patentPublication,
    link: 'Patents Act, section 11A',
  },
  {
    icon: FileCheck2,
    title: 'Granted',
    text: 'The Patent Office has granted the patent. Check the grant number and date in the registry and verify its current legal status.',
    href: researchSources.patentGrant,
    link: 'Patents Act, section 43',
  },
];

const ResearchPatents = () => (
  <ResearchLayout page="patents" related={['activities', 'publications', 'guides']}>
    <section aria-labelledby="patent-search" className="grid items-start gap-4 rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-5 sm:p-8">
      <ResearchIcon icon={FileSearch} />
      <div>
        <h2 id="patent-search" className={researchHeading}>Find and verify a patent record</h2>
        <p className="mt-3 max-w-3xl leading-relaxed">Use the Indian Patent Office’s public search to look up published applications and grants. Search by application number where available, or by applicant, inventor or invention title. For a filing associated with SJRC, ask the college for the reference number so you can locate the exact record.</p>
        <div className="mt-4"><ResearchSource href={researchSources.patentSearch}>Indian Patent Office public search</ResearchSource></div>
      </div>
    </section>

    <section aria-labelledby="patent-stages">
      <h2 id="patent-stages" className={researchHeading}>Reading a patent’s status</h2>
      <ol className="mt-5 grid gap-4 md:grid-cols-3">
        {patentStages.map(({ icon, title, text, href, link }) => (
          <li key={title} className={`${researchCard} border-t-4 border-t-[#ff8c00]`}>
            <ResearchIcon icon={icon} />
            <h3 className="mt-4 text-lg font-bold text-[#153b2a]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{text}</p>
            {href && <div className="mt-4"><ResearchSource href={href}>{link}</ResearchSource></div>}
          </li>
        ))}
      </ol>
    </section>

    <section aria-labelledby="before-disclosure" className={researchCard}>
      <ResearchIcon icon={LockKeyhole} />
      <h2 id="before-disclosure" className={`mt-4 ${researchHeading}`}>Before sharing an invention publicly</h2>
      <p className="mt-3 max-w-3xl leading-relaxed">Document what the invention does, how it was developed and who contributed. Discuss possible intellectual property protection and ownership with your faculty mentor or the Research Cell before publishing a paper, presenting a poster or demonstrating the work in public.</p>
      <Link to="/contact" className={`mt-4 text-sm ${researchLink}`}>Contact the college about intellectual property <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
    </section>
  </ResearchLayout>
);

export default ResearchPatents;
