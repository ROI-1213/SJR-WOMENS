import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronRight, Compass, Goal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { IqacDocumentRepository } from '@/components/iqac/IqacDocumentRepository';
import { instituteName, naacGrade } from '@/data/institute';
import { naacAccreditationHistory } from '@/data/iqac';

const sectionWidth = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-10';
const sectionHeading = 'text-3xl font-bold leading-tight tracking-tight text-[#153b2a] sm:text-4xl';
const lightFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
const greenFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#177249]';

const mission = [
  'To channelize and systematize the efforts and measures of an institution towards academic excellence.',
  'To be the driving force for ushering in quality to remove deficiencies and enhance quality.',
  'To develop quality systems for conscious, consistent and catalytic programmed action to improve academic and administrative performance.',
  'To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and best practices.',
];

const functions = [
  ['Quality benchmarks', 'Development and application of quality benchmarks/parameters for various academic and administrative activities.'],
  ['Learner-centric environment', 'Facilitating a learner-centric environment conducive to quality education and participatory teaching-learning.'],
  ['Stakeholder feedback', 'Arrangement for feedback response from students, parents and other stakeholders on quality-related processes.'],
  ['Quality dissemination', 'Dissemination of information on various quality parameters of higher education.'],
  ['Workshops & seminars', 'Organization of inter- and intra-institutional workshops, seminars on quality themes and quality circles.'],
  ['Programme documentation', 'Documentation of the various programmes and activities leading to quality improvement.'],
  ['Best practices coordination', 'Coordinating quality-related activities, including adoption and dissemination of best practices.'],
  ['Quality culture', 'Development and sustenance of Quality Culture across the institution.'],
  ['AQAR preparation', 'Preparation of the Annual Quality Assurance Report (AQAR) as per NAAC guidelines for submission to NAAC.'],
];

const pageLinks = [
  { href: '#about-iqac', title: 'About IQAC' },
  { href: '#iqac-vision-mission', title: 'Vision & mission' },
  { href: '#iqac-functions', title: 'Functions' },
  { href: '#accreditation', title: 'NAAC History' },
  { href: '#iqac-documents', title: 'Documents' },
];

const NaacIqac = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `NAAC & IQAC | ${instituteName}`;
    const anchor = window.location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      if (anchor) document.getElementById(anchor)?.scrollIntoView();
    });
    return () => {
      cancelAnimationFrame(frame);
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="text-neutral-800">
        <nav aria-label="Breadcrumb" className="border-b border-[#177249]/15 bg-[#177249]/5">
          <ol className={`${sectionWidth} flex flex-wrap items-center gap-2 py-2.5 text-sm`}>
            <li><Link to="/" className={`rounded-sm font-medium text-[#177249] hover:underline ${greenFocus}`}>Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li><a href="#accreditation" className={`rounded-sm font-medium text-[#177249] hover:underline ${greenFocus}`}>NAAC</a></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li aria-current="page" className="font-semibold">IQAC &amp; Accreditation</li>
          </ol>
        </nav>

        <section aria-labelledby="iqac-title" className="relative isolate overflow-hidden border-b-4 border-[#ff8c00] bg-[#153b2a] text-white">
          <img src="/images/campus/college-view.jpg" alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#177249]/95 via-[#153b2a]/90 to-[#153b2a]/70" />
          <div className={`${sectionWidth} py-12 sm:py-16 lg:py-20`}>
            <div className="max-w-3xl">
              <span aria-hidden="true" className="mb-5 block h-1 w-12 rounded-full bg-[#ff8c00]" />
              <h1 id="iqac-title" className="text-[clamp(2.15rem,5.3vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">NAAC &amp; Internal Quality Assurance Cell (IQAC)</h1>
              <p className="mt-5 max-w-[36rem] text-base font-medium leading-relaxed text-white sm:text-xl">
                Four cycles of NAAC accreditation and continuous quality enhancement at {instituteName}, Rajajinagar.
              </p>
              <a href="#iqac-documents" className={`mt-7 inline-flex min-h-11 items-center gap-2.5 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#153b2a] transition-colors hover:bg-[#ff8c00] ${lightFocus}`}>
                Browse AQAR, Annual Reports &amp; SSR files <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <nav aria-label="On this page" className="border-b border-[#177249]/15">
          <ul className={`${sectionWidth} flex flex-wrap items-center gap-x-5 gap-y-1 py-2 sm:gap-x-8`}>
            {pageLinks.map(({ href, title }) => (
              <li key={href}><a href={href} className={`inline-flex min-h-10 items-center rounded-sm text-sm font-semibold text-[#177249] underline-offset-4 hover:underline ${greenFocus}`}>{title}</a></li>
            ))}
          </ul>
        </nav>

        <div className={`${sectionWidth} space-y-10 py-10 sm:space-y-16 sm:py-16`}>
          <section id="about-iqac" aria-labelledby="about-iqac-title" className="grid scroll-mt-20 items-stretch gap-5 md:grid-cols-[1fr_0.85fr] lg:gap-10">
            <div className="self-center">
              <h2 id="about-iqac-title" className={sectionHeading}>About the IQAC</h2>
              <p className="mt-4 max-w-2xl leading-relaxed">
                The Internal Quality Assurance Cell (IQAC) at {instituteName} coordinates academic and administrative quality enhancement across all departments. Chaired by Principal Dr. Prema Siddaraju, the cell brings together senior faculty, administrative staff, management, alumni (Anubandha), and local society representatives.
              </p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-lg border-l-4 border-[#ff8c00] bg-[#177249]/5 px-4 py-3 text-[#153b2a]">
                <CalendarDays className="shrink-0 text-[#177249]" size={21} aria-hidden="true" />
                <span className="text-sm">Established on <time dateTime="2002-07-01" className="font-bold">1 July 2002</time> (per official AQAR 2022–23)</span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#177249]/10 md:aspect-auto md:min-h-[17rem]">
              <img src="/images/infrastructure/library.jpg" alt="SJR College for Women Library" loading="lazy" className="absolute inset-0 size-full object-cover" />
            </div>
          </section>

          <section id="iqac-vision-mission" aria-labelledby="vision-mission-title" className="scroll-mt-20">
            <h2 id="vision-mission-title" className={sectionHeading}>Vision &amp; Mission</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <article className="rounded-2xl border-t-4 border-[#ff8c00] bg-[#153b2a] p-5 text-white sm:p-7">
                <Compass size={29} className="text-[#ff8c00]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">Vision of the IQAC</h3>
                <p className="mt-3 max-w-md text-xl font-semibold leading-snug sm:text-2xl">
                  “To build and ensure a quality culture aimed at all-round excellence at the institutional level.”
                </p>
              </article>
              <article className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 transition-colors hover:border-[#177249]/40 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <Goal size={23} className="text-[#177249]" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#153b2a]">Mission &amp; Goals</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {mission.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed sm:text-base">
                      <Check size={17} className="mt-1 shrink-0 text-[#177249]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section id="iqac-functions" aria-labelledby="iqac-functions-title" className="scroll-mt-20">
            <h2 id="iqac-functions-title" className={sectionHeading}>Functions of IQAC</h2>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {functions.map(([title, description], index) => (
                <li key={title} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-xl border border-[#177249]/15 p-4 transition-colors hover:border-[#177249]/40 sm:p-5">
                  <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg border-b-2 border-[#ff8c00] bg-[#177249]/10 text-sm font-bold tabular-nums text-[#177249]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-bold leading-snug text-[#153b2a]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="accreditation" aria-labelledby="accreditation-title" className="scroll-mt-20 space-y-6">
            <div className="grid overflow-hidden rounded-2xl border border-[#177249]/20 md:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#153b2a] p-5 text-white sm:p-8 lg:p-10">
                <h2 id="accreditation-title" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">NAAC Accreditation</h2>
                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
                  <div className="col-span-2">
                    <dt className="text-sm font-semibold text-white/90">Current Accreditation (Cycle 4)</dt>
                    <dd className="mt-1 text-6xl font-bold leading-none text-[#ff8c00] sm:text-7xl">{naacGrade}</dd>
                  </div>
                  <div className="border-t border-white/25 pt-3">
                    <dt className="text-sm text-white/90">CGPA</dt>
                    <dd className="mt-1 text-xl font-semibold">2.95 <span className="text-sm font-normal text-white/90">out of 4</span></dd>
                  </div>
                  <div className="border-t border-white/25 pt-3">
                    <dt className="text-sm text-white/90">Accreditation cycle</dt>
                    <dd className="mt-1 text-xl font-semibold">Cycle 4 (2023)</dd>
                  </div>
                  <div className="col-span-2 border-t border-white/25 pt-3">
                    <dt className="text-sm text-white/90">Validity Period</dt>
                    <dd className="mt-1 text-base font-semibold">10 April 2023 to 09 April 2028 (per AQAR 2022–23)</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-[#f8fbf8] p-5 sm:p-8">
                <h3 className="text-lg font-bold text-[#153b2a]">Accreditation History (Cycles 1–4)</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#177249]/20 text-xs uppercase text-[#177249]">
                        <th className="py-2 pr-3">Cycle</th>
                        <th className="py-2 pr-3">Year</th>
                        <th className="py-2 pr-3">Grade</th>
                        <th className="py-2 pr-3">CGPA</th>
                        <th className="py-2">Period / Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#177249]/10">
                      {naacAccreditationHistory.map(row => (
                        <tr key={row.cycle}>
                          <td className="py-2.5 pr-3 font-semibold text-[#153b2a]">{row.cycle}</td>
                          <td className="py-2.5 pr-3">{row.year}</td>
                          <td className="py-2.5 pr-3 font-bold text-[#177249]">{row.grade}</td>
                          <td className="py-2.5 pr-3">{row.cgpa}</td>
                          <td className="py-2.5 text-xs text-neutral-700">{row.validity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a
                  href="/documents/AQAR-22-23-Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#177249] underline underline-offset-4 ${greenFocus}`}
                >
                  Verify in AQAR 2022–23 Report (PDF) <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <IqacDocumentRepository />
      </main>
      <Footer />
    </div>
  );
};

export default NaacIqac;
