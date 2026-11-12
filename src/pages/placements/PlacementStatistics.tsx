import { BarChart3 } from 'lucide-react';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementSources, progressionByYear } from '@/data/placementRecords';
import { PlacementHighlights, PlacementReportLinks, placementHeading } from './PlacementContent';

const PlacementStatistics = () => (
  <PlacementLayout page="statistics" related={['overview', 'companies', 'activities']}>
    <section aria-labelledby="statistics-highlights">
      <h2 id="statistics-highlights" className={placementHeading}>Reported recruitment and progression figures</h2>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">Read each figure alongside its source and period. Selection, shortlisting, and progression to higher education describe different outcomes.</p>
      <PlacementHighlights />
    </section>

    <section aria-labelledby="statistics-progression">
      <div className="mb-4 flex items-center gap-3">
        <BarChart3 className="size-6 shrink-0 text-[#177249]" aria-hidden="true" />
        <h2 id="statistics-progression" className={placementHeading}>Graduate progression by academic year</h2>
      </div>
      <p id="statistics-progression-note" className="mb-5 max-w-3xl text-sm leading-relaxed text-neutral-700">The college’s NAAC Self Study Report counts graduates who were placed, progressed to higher education, or did both. The outgoing student count gives the size of each reporting cohort.</p>
      <div className="overflow-hidden rounded-xl border border-[#177249]/20">
        <table aria-labelledby="statistics-progression" aria-describedby="statistics-progression-note" className="w-full table-fixed text-left text-sm max-sm:[&_td]:px-2 max-sm:[&_th]:px-2 sm:text-base">
          <colgroup><col className="w-[25%]" /><col className="w-[30%]" /><col className="w-[45%]" /></colgroup>
          <thead className="bg-[#177249] text-white">
            <tr>
              <th scope="col" className="p-3 font-semibold sm:p-4">Year</th>
              <th scope="col" className="p-3 font-semibold sm:p-4">Outgoing students</th>
              <th scope="col" className="p-3 font-semibold sm:p-4">Placed or in higher education</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#177249]/15">
            {progressionByYear.map(({ year, outgoing, progressed }) => (
              <tr key={year} className="odd:bg-white even:bg-[#177249]/5">
                <th scope="row" className="whitespace-nowrap p-3 font-semibold text-[#177249] sm:p-4">{year}</th>
                <td className="p-3 tabular-nums sm:p-4">{outgoing}</td>
                <td className="p-3 font-semibold tabular-nums text-[#177249] sm:p-4">{progressed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="recent-placement-disclosure" className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:p-7">
      <h2 id="recent-placement-disclosure" className={placementHeading}>2024–25 provisional placement records</h2>
      <p className="mb-5 mt-3 max-w-3xl leading-relaxed text-neutral-700">The 2025–26 Mandatory Disclosures list provisional placements for BBA and BCA students in 2024–25. The entries include Muthoot Finance, Nivara Housing Finance, and HR-Spectrum, with outcomes labelled provisional.</p>
      <PlacementReportLinks reports={[
        { href: placementSources.disclosure, label: '2025–26 Mandatory Disclosures', description: 'Section 16 lists employer and programme details for the reported provisional placements.' },
        { href: placementSources.progression, label: 'NAAC Self Study Report', description: 'Criterion 5.2.1 shows the combined progression figures in the table above.' },
      ]} />
    </section>
  </PlacementLayout>
);

export default PlacementStatistics;
