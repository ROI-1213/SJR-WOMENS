import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronRight, Compass, Goal } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/homepage/gallery/campus.webp';
import library from '@/assets/homepage/gallery/library.webp';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { IqacDocumentRepository } from '@/components/iqac/IqacDocumentRepository';
import { instituteName, naacGrade } from '@/data/institute';
import { iqacCertificate, iqacDownloadUrl } from '@/data/iqac';

const sectionWidth = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-10';
const sectionHeading = 'text-3xl font-bold leading-tight tracking-tight text-[#153b2a] sm:text-4xl';
const lightFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
const greenFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#177249]';

const mission = [
  'Plan and put into practice teaching methods with clear learning goals.',
  'Offer certificate and add-on courses that complement the affiliating university’s curriculum.',
  'Encourage departments to hold seminars and workshops.',
  'Promote extracurricular and extension activities that build skills beyond the classroom.',
  'Keep faculty knowledge, teaching methods and assessment practices up to date.',
  'Review academic and administrative progress at regular intervals.',
  'Identify and develop talent among students and faculty.',
];

const functions = [
  ['Quality benchmarks', 'Develop and apply benchmarks to guide quality improvement.'],
  ['Academic and administrative standards', 'Set parameters for evaluating academic work and administrative processes.'],
  ['Learner-centred education', 'Support learning environments and faculty development that enable active participation in teaching and learning.'],
  ['Stakeholder feedback', 'Collect and analyse feedback from stakeholders about institutional processes.'],
  ['Communication', 'Share institutional quality parameters with stakeholders.'],
  ['Workshops and seminars', 'Organise quality-focused workshops and seminars within the college and with other institutions, and encourage quality circles.'],
  ['Programme documentation', 'Record activities and programmes that contribute to quality improvement.'],
  ['Coordination and best practices', 'Coordinate quality initiatives across the college and help departments adopt and share effective practices.'],
  ['Institutional records', 'Develop and maintain institutional databases through a management information system (MIS).'],
  ['Academic and administrative audits', 'Conduct periodic audits and follow up on their findings.'],
  ['Annual quality reporting', 'Prepare and submit the Annual Quality Assurance Report in line with NAAC guidelines.'],
];

const pageLinks = [
  { href: '#about-iqac', title: 'About IQAC' },
  { href: '#iqac-vision-mission', title: 'Vision & mission' },
  { href: '#iqac-functions', title: 'Functions' },
  { href: '#accreditation', title: 'Accreditation' },
  { href: '#iqac-documents', title: 'Documents' },
];

const NaacIqac = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Internal Quality Assurance Cell (IQAC) | ${instituteName}`;
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
            <li aria-current="page" className="font-semibold">IQAC</li>
          </ol>
        </nav>

        <section aria-labelledby="iqac-title" className="relative isolate overflow-hidden border-b-4 border-[#ff8c00] bg-[#153b2a] text-white">
          <img src={campus} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-[center_48%]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102d21]/95 via-[#153b2a]/90 to-[#153b2a]/65 md:to-[#153b2a]/25" />
          <div className={`${sectionWidth} py-12 sm:py-16 lg:py-20`}>
            <div className="max-w-3xl">
              <span aria-hidden="true" className="mb-5 block h-1 w-12 rounded-full bg-[#ff8c00]" />
              <h1 id="iqac-title" className="text-[clamp(2.15rem,5.3vw,4.75rem)] font-bold leading-[1.04] tracking-tight text-white">Internal Quality Assurance Cell (IQAC)</h1>
              <p className="mt-5 max-w-[34rem] text-base font-medium leading-relaxed text-white sm:text-xl">Quality Enhancement, Institutional Excellence &amp; Continuous Improvement.</p>
              <a href="#iqac-documents" className={`mt-7 inline-flex min-h-11 items-center gap-2.5 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#153b2a] transition-colors hover:bg-[#ff8c00] ${lightFocus}`}>
                Browse reports and documents <ArrowDown size={16} aria-hidden="true" />
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
              <p className="mt-4 max-w-2xl leading-relaxed">The Internal Quality Assurance Cell at {instituteName} coordinates the college’s efforts to improve teaching, learning and administration. It uses feedback and reviews to identify priorities and helps departments document progress and share effective practices.</p>
              <p className="mt-3 max-w-2xl leading-relaxed">The cell also coordinates academic and administrative audits, follows up on their findings and prepares the college’s annual quality reports for the National Assessment and Accreditation Council (NAAC).</p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-lg border-l-4 border-[#ff8c00] bg-[#177249]/5 px-4 py-3 text-[#153b2a]">
                <CalendarDays className="shrink-0 text-[#177249]" size={21} aria-hidden="true" />
                <span className="text-sm">Established on <time dateTime="2003-09-30" className="font-bold">30 September 2003</time></span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#177249]/10 md:aspect-auto md:min-h-[17rem]">
              <img src={library} alt="Students working in the college library" width="560" height="373" loading="lazy" className="absolute inset-0 size-full object-cover" />
            </div>
          </section>

          <section id="iqac-vision-mission" aria-labelledby="vision-mission-title" className="scroll-mt-20">
            <h2 id="vision-mission-title" className={sectionHeading}>Vision &amp; mission</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <article className="rounded-2xl border-t-4 border-[#ff8c00] bg-[#153b2a] p-5 text-white sm:p-7">
                <Compass size={29} className="text-[#ff8c00]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">Vision</h3>
                <p className="mt-3 max-w-md text-xl font-semibold leading-snug sm:text-2xl">To pursue excellence through the all-round development of students, faculty and the institution.</p>
              </article>
              <article className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 transition-colors hover:border-[#177249]/40 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <Goal size={23} className="text-[#177249]" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#153b2a]">Mission</h3>
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

          <section id="accreditation" aria-labelledby="accreditation-title" className="grid scroll-mt-20 overflow-hidden rounded-2xl border border-[#177249]/20 md:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-[#153b2a] p-5 text-white sm:p-8 lg:p-10">
              <h2 id="accreditation-title" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">NAAC accreditation</h2>
              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
                <div className="col-span-2">
                  <dt className="text-sm font-semibold text-white/90">Accreditation grade</dt>
                  <dd className="mt-1 text-6xl font-bold leading-none text-[#ff8c00] sm:text-7xl">{naacGrade}</dd>
                </div>
                <div className="border-t border-white/25 pt-3">
                  <dt className="text-sm text-white/90">CGPA</dt>
                  <dd className="mt-1 text-xl font-semibold">2.70 <span className="text-sm font-normal text-white/90">out of 4</span></dd>
                </div>
                <div className="border-t border-white/25 pt-3">
                  <dt className="text-sm text-white/90">Accreditation cycle</dt>
                  <dd className="mt-1 text-xl font-semibold">IV</dd>
                </div>
                <div className="col-span-2 border-t border-white/25 pt-3">
                  <dt className="text-sm text-white/90">Validity</dt>
                  <dd className="mt-1 text-base font-semibold"><time dateTime="2023-08-12">12 August 2023</time> to <time dateTime="2028-08-11">11 August 2028</time></dd>
                </div>
              </dl>
            </div>
            <figure className="grid place-content-center bg-[#177249]/5 p-5 text-center sm:p-7">
              <a href={iqacCertificate.href} target="_blank" rel="noopener noreferrer" className={`block rounded bg-white p-2 shadow-md ${greenFocus}`} aria-label="Open the full NAAC Cycle IV accreditation certificate (opens in a new tab)">
                <img src={iqacDownloadUrl(iqacCertificate)} alt="Official NAAC Cycle IV Certificate of Accreditation" width="1884" height="2560" loading="lazy" className="h-auto w-full max-w-[15rem] rounded-sm" />
              </a>
              <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-[#177249]">
                Cycle IV certificate <ArrowUpRight size={15} aria-hidden="true" />
              </figcaption>
            </figure>
          </section>
        </div>

        <IqacDocumentRepository />
      </main>
      <Footer />
    </div>
  );
};

export default NaacIqac;
