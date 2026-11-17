import { Calendar, Award } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';

interface Milestone {
  year: string;
  title: string;
  description: string;
  source: string;
}

const milestones: Milestone[] = [
  {
    year: '1988',
    title: 'Establishment as Pre-University College',
    description: 'SJR College for Women was established by SJR Education Society (SJRES) as a Pre-University College at Rajajinagar, Bengaluru.',
    source: 'sjrcw.edu.in/about-us/',
  },
  {
    year: '1990',
    title: 'Degree College Foundation & UG Commencement',
    description: 'The foundation stone was laid for the Degree College and undergraduate programmes commenced.',
    source: 'sjrcw.edu.in/about-us/ & RTI-SJRCW.pdf',
  },
  {
    year: '1991–93',
    title: 'Introduction of B.Sc Life Science Combinations',
    description: 'CBM combination was introduced in 1991–92 under HOD Prof. D. E. Nagarathnamma, followed by the CBZ combination in 1992–93.',
    source: 'sjrcw.edu.in/botany/',
  },
  {
    year: '2002',
    title: 'UGC 2(f) & 12(B) Recognition and IQAC Establishment',
    description: 'Recognised by the University Grants Commission (UGC) under Sections 2(f) and 12(B). The Internal Quality Assurance Cell (IQAC) was established on 1 July 2002.',
    source: 'sjrcw.edu.in/about-us/ & AQAR 2022–23',
  },
  {
    year: '2003',
    title: 'First NAAC Accreditation Cycle',
    description: 'Completed the first cycle of NAAC accreditation with a "B" Grade.',
    source: 'sjrcw.edu.in/naac/',
  },
  {
    year: '2005',
    title: 'Biotechnology Combination Launched',
    description: 'Started the B.Sc Chemistry, Botany, and Biotechnology (CBBT) combination.',
    source: 'sjrcw.edu.in/botany/',
  },
  {
    year: '2009',
    title: 'Second NAAC Accreditation Cycle',
    description: 'Completed the second cycle of NAAC accreditation with a "B" Grade (CGPA 2.62).',
    source: 'sjrcw.edu.in/naac/',
  },
  {
    year: '2013–14',
    title: 'Postgraduate Department (M.Com) Established',
    description: 'Established the Master of Commerce (M.Com) department under Bangalore University to provide postgraduate commerce education for women.',
    source: 'sjrcw.edu.in/pg-courses/',
  },
  {
    year: '2015',
    title: 'Silver Jubilee Celebration',
    description: 'Celebrated 25 years of the Degree College in 2015, honouring decades of women’s higher education.',
    source: 'sjrcw.edu.in/about-us/',
  },
  {
    year: '2016',
    title: 'Third NAAC Accreditation Cycle — "A" Grade',
    description: 'Awarded "A" Grade by NAAC in the third cycle with a CGPA of 3.09 on a 4-point scale (Jan 2016 – Jan 2021).',
    source: 'sjrcw.edu.in & RTI-SJRCW.pdf',
  },
  {
    year: '2018',
    title: 'Affiliation with Bengaluru City University',
    description: 'Affiliated with Bengaluru City University (BCU) from the academic year 2018.',
    source: 'sjrcw.edu.in/',
  },
  {
    year: '2023',
    title: 'Fourth NAAC Accreditation Cycle — "B++" Grade',
    description: 'Accredited by NAAC in Cycle 4 with a "B++" Grade and CGPA of 2.95 (valid 10 April 2023 to 09 April 2028).',
    source: 'AQAR-22-23-Report.pdf',
  },
];

export default function MilestonesPage() {
  return (
    <AboutLayout pageTitle="College Milestones" breadcrumbPath="Milestones">
      <section aria-labelledby="milestones-heading" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-10 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef4ef] text-[#177249]">
            <Award size={24} aria-hidden="true" />
          </div>
          <h2 id="milestones-heading" className="text-2xl font-bold text-[#153b2a] sm:text-3xl">
            Three Decades of Empowering Women
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-700">
            Verified historical milestones of SJR College for Women from its founding in 1988 to its fourth NAAC accreditation cycle.
          </p>
        </header>

        <ol className="relative space-y-6 border-l-2 border-[#177249]/25 pl-6 sm:pl-8">
          {milestones.map(item => (
            <li key={item.year} className="relative rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <span
                aria-hidden="true"
                className="absolute -left-[33px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#177249] bg-[#ff8c00] sm:-left-[41px]"
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#177249] px-3 py-1 text-xs font-bold text-white">
                  <Calendar size={12} aria-hidden="true" />
                  {item.year}
                </span>
                <span className="text-xs text-neutral-500">Source: {item.source}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#153b2a]">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </AboutLayout>
  );
}
