import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementSources } from '@/data/placementRecords';
import { placementAction, placementHeading } from './PlacementContent';

const activities = [
  { title: 'Accounting and IT fundamentals', period: 'December 2022 to March 2023', detail: 'A certificate course with Anudip Foundation gave students practice with bookkeeping, accounting reports, and Tally.', href: `${placementSources.reports}#page=5` },
  { title: 'Infosys campus recruitment drive', period: 'January 2023', detail: 'The drive included aptitude, communication, technical, and HR stages. The report records 22 SJRC students selected.', href: `${placementSources.reports}#page=26` },
  { title: 'Employability skills workshop', period: 'August 2022', detail: 'The workshop covered communication and workplace skills for final-year students.', href: `${placementSources.reports}#page=29` },
  { title: 'Mega Job Fair', period: '2022', detail: 'The college organised a fair with Magic Bus Foundation and the Employment Exchange, Bengaluru. The report records 115 SJRC students shortlisted.', href: placementSources.jobFair },
];

const PlacementActivities = () => (
  <PlacementLayout page="activities" related={['training', 'photos', 'statistics']}>
    <section aria-labelledby="activity-records">
      <div className="mb-3 flex items-center gap-3">
        <CalendarDays className="size-6 shrink-0 text-[#177249]" aria-hidden="true" />
        <h2 id="activity-records" className={placementHeading}>Activities from the placement archive</h2>
      </div>
      <p className="mb-5 max-w-3xl leading-relaxed text-neutral-700">These college reports show how training, workshops, and employer events fit into placement preparation.</p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {activities.map(({ title, period, detail, href }) => (
          <li key={title} className="rounded-xl border border-[#177249]/15 border-t-4 border-t-[#ff8c00] bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold text-[#177249]">{period}</p>
            <h3 className="mt-2 text-lg font-bold text-[#177249]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{detail}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${title} report (PDF)`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">
              Read report (PDF) <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <Link to="/contact" className={`${placementAction} mt-5`}>Ask about upcoming activities</Link>
    </section>
  </PlacementLayout>
);

export default PlacementActivities;
