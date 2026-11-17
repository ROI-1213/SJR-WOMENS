import { BookOpen, FileText } from 'lucide-react';
import { ResearchIcon, ResearchLayout, ResearchSource, researchCard, researchHeading } from './ResearchLayout';
import { researchSources } from './researchSources';

const selectedPapers = [
  {
    topic: 'Ruthenium oxide and clay composites',
    faculty: 'M. Mylarappa and S. Kantharaju',
    journal: 'Sustainable Chemistry for the Environment',
    year: 2023,
    doi: '10.1016/j.scenv.2023.100007',
  },
  {
    topic: 'Cerium oxide and graphene oxide for photocatalysis and energy storage',
    faculty: 'M. Mylarappa',
    journal: 'Applied Surface Science Advances',
    year: 2022,
    doi: '10.1016/j.apsadv.2022.100307',
  },
  {
    topic: 'Clay and magnesium oxide for chemical sensing and photocatalysis',
    faculty: 'M. Mylarappa and S. Kantharaju',
    journal: 'Applied Surface Science Advances',
    year: 2022,
    doi: '10.1016/j.apsadv.2022.100268',
  },
  {
    topic: 'Clay-based cobalt ferrite for electrochemical sensing',
    faculty: 'M. Mylarappa',
    journal: 'Sensors International',
    year: 2021,
    doi: '10.1016/j.sintl.2021.100083',
  },
];

const FacultyPublications = () => (
  <ResearchLayout page="publications" related={['facultyAchievements', 'activities', 'patents']}>
    <section aria-labelledby="publication-record" className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
      <div className="self-center">
        <h2 id="publication-record" className={researchHeading}>Published research and scholarship</h2>
        <p className="mt-3 max-w-2xl leading-relaxed">The college documents faculty contributions in journals, books and conference proceedings. The selection below highlights work from the Department of Chemistry, with DOI links to the original papers and their full citations.</p>
        <div className="mt-4"><ResearchSource href={researchSources.chemistry}>Department of Chemistry publication record (PDF)</ResearchSource></div>
      </div>
      <div className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-6">
        <h3 className="text-base font-bold text-[#153b2a]">Reported output, 2017–18 to 2021–22</h3>
        <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-[#177249]/20 pt-4">
          <div>
            <dt className="text-sm leading-snug">Journal papers on the then UGC CARE list</dt>
            <dd className="mt-1 text-3xl font-bold tabular-nums text-[#177249]">48</dd>
          </div>
          <div>
            <dt className="text-sm leading-snug">Books, chapters and proceedings papers</dt>
            <dd className="mt-1 text-3xl font-bold tabular-nums text-[#177249]">23</dd>
          </div>
        </dl>
        <div className="mt-4"><ResearchSource href={researchSources.selfStudy}>Self-Study Report, metrics 3.3.1–3.3.2 (PDF)</ResearchSource></div>
      </div>
    </section>

    <section aria-labelledby="selected-papers">
      <h2 id="selected-papers" className={researchHeading}>Selected journal papers</h2>
      <ul className="mt-5 overflow-hidden rounded-2xl border border-[#177249]/15">
        {selectedPapers.map(({ topic, faculty, journal, year, doi }) => (
          <li key={doi} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 border-b border-[#177249]/15 p-4 last:border-b-0 sm:gap-4 sm:p-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
            <ResearchIcon icon={FileText} />
            <div>
              <h3 className="font-bold text-[#153b2a] sm:text-lg">{topic}</h3>
              <p className="mt-1 text-sm">With contributions from {faculty}</p>
              <p className="mt-0.5 text-sm text-neutral-700"><cite>{journal}</cite> · {year}</p>
            </div>
            <div className="col-start-2 lg:col-start-auto">
              <ResearchSource href={`https://doi.org/${doi}`}>View article {doi.split('.').at(-1)}</ResearchSource>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section aria-labelledby="book-chapter" className={researchCard}>
      <ResearchIcon icon={BookOpen} />
      <h2 id="book-chapter" className={`mt-4 ${researchHeading}`}>Books and chapters across disciplines</h2>
      <p className="mt-3 max-w-3xl leading-relaxed">The 2021–22 Annual Report records Dr. Mylarappa M’s chapter on manganese dioxide recovered from waste batteries, Dr. B. L. Manjula’s writing on wild edible plants sold in tribal markets, and a contribution by Hemanth Kumar K G and Anusha S on applications of the Internet of Things.</p>
      <div className="mt-4"><ResearchSource href={researchSources.annualReport2021}>Annual Report 2021–22, books and chapters (PDF)</ResearchSource></div>
    </section>
  </ResearchLayout>
);

export default FacultyPublications;
