import { Link } from 'react-router-dom';
import {
  Accessibility, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  Building2, Calculator, FlaskConical, GraduationCap, HeartHandshake, Laptop,
  ShieldCheck, Trophy, Wallet,
} from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { availableProgrammes, instituteName, naacResources } from '@/data/institute';
import campus from '@/assets/sjr-administrative-block.jpg';
import library from '@/assets/hero/library-1440.webp';

const programmeDetails: Record<string, { icon: typeof Calculator; description: string }> = {
  bsc: { icon: FlaskConical, description: 'Explore foundational and applied sciences across physical, mathematical, biological, and computing disciplines.' },
  bcom: { icon: Calculator, description: 'Build a foundation in accounting, finance and commerce.' },
  bba: { icon: BriefcaseBusiness, description: 'Explore how organisations operate and develop business and management skills.' },
  bca: { icon: Laptop, description: 'Develop skills in programming and computer applications.' },
  mcom: { icon: GraduationCap, description: 'Pursue advanced study in commerce and finance.' },
};

const facilities = [
  { icon: BookOpen, title: 'Teaching & study', detail: 'Spacious classrooms, science laboratories, a library and a separate reference hall.' },
  { icon: Building2, title: 'Culture & events', detail: 'Auditorium, seminar hall and two museums.' },
  { icon: Trophy, title: 'Sport & wellbeing', detail: 'Gymnasium, sports room and health centre.' },
  { icon: Accessibility, title: 'Support & access', detail: 'Dedicated counselling, placement, NCC and NSS rooms, parking and accessibility ramps.' },
];

const studentInitiatives = [
  { icon: BriefcaseBusiness, title: 'Careers & connections', items: ['Placement Cell', 'Alumni Association'] },
  { icon: HeartHandshake, title: 'Service & wellbeing', items: ['NCC and NSS', 'Red Cross', 'Red Ribbon Club', 'Counselling Cell', 'Scouts and Guides', 'Yoga Centre'] },
  { icon: ShieldCheck, title: 'Safety & inclusion', items: ['Women Empowerment Cell', 'Anti-Ragging Cell', 'Anti-Sexual Harassment Cell', 'Human Rights Cell'] },
];

const milestones = [
  { year: '1994', title: 'UGC recognition', detail: 'Recognised under Sections 2(f) and 12(B).' },
  { year: '2003', title: 'First NAAC accreditation', detail: 'Grade B+.' },
  { year: '2010', title: 'NAAC Cycle 2', detail: 'Grade B · CGPA 2.82.' },
  { year: '2012', title: 'M.Com launched', detail: 'The college introduced its postgraduate commerce programme.' },
  { year: '2016', title: 'NAAC Cycle 3', detail: 'Grade B · CGPA 2.85.' },
  { year: '2023', title: 'NAAC Cycle 4', detail: 'Accredited with Grade B++ · CGPA 2.95 (valid 2023–2028).' },
];

const sectionTitle = 'text-2xl font-bold leading-tight tracking-tight text-[color:var(--section-heading-color)] sm:text-3xl lg:text-4xl';
const bodyText = 'leading-relaxed text-[#43534a]';
const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
const sectionSpacing = 'py-10 sm:py-14 lg:py-16';
const textLink = 'inline-flex items-center gap-2 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:text-[#103f2a]';

const AboutCollege = () => (
  <AboutLayout pageTitle="Overview" breadcrumbPath="Overview">
    <div className="text-[#177249]">
      <section className={`${container} ${sectionSpacing} grid items-center gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12`}>
        <div>
          <div className="mb-4 h-1 w-12 rounded-full bg-[#ff8c00]" aria-hidden="true" />
          <h2 className={sectionTitle}>About {instituteName}</h2>
          <p className={`mt-5 ${bodyText}`}>
            The college was established in 1945 under the name Veerashaiva Education Society. Its 2.6-acre campus in central Bengaluru provides a setting for academic learning and students’ personal development.
          </p>
          <p className={`mt-3 ${bodyText}`}>
            The college aims to make a quality education affordable and accessible to students from diverse backgrounds, with opportunities to grow inside and outside the classroom.
          </p>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-[#d6e6dc] bg-[#edf5ef]">
          <img src={campus} alt="The college’s administrative block in Bengaluru" className="aspect-[16/10] w-full object-cover" />
          <figcaption className="px-4 py-2.5 text-sm text-[#43534a]">College campus · Ananda Rao Circle, Bengaluru</figcaption>
        </figure>
      </section>

      <section className="border-y border-[#d6e6dc] bg-[#eff6f1] py-9 sm:py-12">
        <div className={`${container} grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.8fr)] lg:items-start`}>
          <h2 className={sectionTitle}>Our Legacy &amp; Institutional Journey</h2>
          <ol className="grid gap-5 sm:grid-cols-3">
            <li className="border-l-2 border-[#ff8c00] pl-4">
              <h3 className="font-bold text-[#153d2c]">1945 · Founded</h3>
              <p className={`mt-1 text-sm ${bodyText}`}>One of Bengaluru’s first three aided colleges, run by Sri Jagadguru Renukacharya Education Society.</p>
            </li>
            <li className="border-l-2 border-[#ff8c00] pl-4">
              <h3 className="font-bold text-[#153d2c]">1994 · UGC recognition</h3>
              <p className={`mt-1 text-sm ${bodyText}`}>Recognised under Sections 2(f) and 12(B). The UGC later awarded the college College with Potential for Excellence status.</p>
            </li>
            <li className="border-l-2 border-[#ff8c00] pl-4">
              <h3 className="font-bold text-[#153d2c]">University affiliation</h3>
              <p className={`mt-1 text-sm ${bodyText}`}>Affiliated with Bengaluru City University.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={`${container} ${sectionSpacing}`}>
        <h2 className={sectionTitle}>Academic Programmes</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {availableProgrammes.map(programme => {
            const details = programmeDetails[programme.id] || {
              icon: BookOpen,
              description: 'Undergraduate and postgraduate degree programmes under NEP 2020.',
            };
            const Icon = details.icon;
            const description = details.description;
            return (
              <li key={programme.id}>
                <Link to={programme.href} className="group flex h-full flex-col rounded-xl border border-[#d6e6dc] bg-white p-5 transition-colors hover:border-[#177249] hover:bg-[#f5f9f6]">
                  <Icon size={24} className="mb-4 text-[#177249]" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#153d2c]">{programme.name}</h3>
                  <p className="mt-1 text-sm font-semibold">{programme.fullName}</p>
                  <p className={`mb-4 mt-2 text-sm ${bodyText}`}>{description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#177249] group-hover:underline">
                    Programme details <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={`border-y border-[#d6e6dc] bg-[#f5f8f5] ${sectionSpacing}`}>
        <div className={container}>
          <h2 className={sectionTitle}>Infrastructure &amp; Campus Facilities</h2>
          <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-[#d6e6dc] bg-white">
              <img src={library} alt="Bookshelves in the college library" loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <dl className="grid grid-cols-2 divide-x divide-[#d6e6dc] text-center">
                <div className="p-3"><dt className="text-sm text-[#43534a]">Classrooms</dt><dd className="text-xl font-bold text-[#177249]">19</dd></div>
                <div className="p-3"><dt className="text-sm text-[#43534a]">Science laboratories</dt><dd className="text-xl font-bold text-[#177249]">9</dd></div>
              </dl>
            </div>
            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {facilities.map(({ icon: Icon, title, detail }) => (
                <li key={title} className="flex gap-3 border-b border-[#d6e6dc] pb-4">
                  <Icon size={21} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-[#153d2c]">{title}</h3>
                    <p className={`mt-1 text-sm ${bodyText}`}>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${container} ${sectionSpacing}`}>
        <h2 className={sectionTitle}>Student Development &amp; Support</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {studentInitiatives.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl bg-[#eaf3ed] p-5">
              <h3 className="flex items-center gap-2 font-bold text-[#153d2c]">
                <Icon size={20} className="shrink-0 text-[#177249]" aria-hidden="true" /> {title}
              </h3>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[#43534a] marker:text-[#177249]">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className={`${container} grid gap-5 pb-10 md:grid-cols-2 sm:pb-14`}>
        <section className="rounded-2xl border border-[#d6e6dc] p-5 sm:p-7">
          <FlaskConical size={24} className="mb-3 text-[#177249]" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-[color:var(--section-heading-color)]">Research &amp; Academic Excellence</h2>
          <p className={`mt-3 ${bodyText}`}>Faculty members with Ph.D. and M.Phil. qualifications contribute to research in their disciplines.</p>
          <p className={`mt-3 ${bodyText}`}>The college has offered UGC-sponsored add-on courses and self-financed certificate courses in Tally, Web Designing and Advanced Excel.</p>
          <Link to="/research/publications" className={`mt-4 ${textLink}`}>Faculty publications <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
        <section className="rounded-2xl border border-[#e9dfce] bg-[#fbf7ef] p-5 sm:p-7">
          <Wallet size={24} className="mb-3 text-[#177249]" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-[color:var(--section-heading-color)]">Scholarships &amp; Student Welfare</h2>
          <ul className={`mt-3 list-disc space-y-2 pl-5 ${bodyText}`}>
            <li>Fee concessions and instalment payment options.</li>
            <li>Merit and endowment scholarships.</li>
            <li>Awards and prizes for student achievers.</li>
            <li>Parent-teacher meetings to discuss student progress.</li>
          </ul>
          <Link to="/admissions/scholarships" className={`mt-4 ${textLink}`}>Scholarship information <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
      </div>

      <section className={`bg-[#eaf3ed] ${sectionSpacing}`}>
        <div className={`${container} grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12`}>
          <div>
            <h2 className={sectionTitle}>Accreditation &amp; Institutional Milestones</h2>
            <div className="mt-5 flex max-w-sm items-center gap-4 rounded-xl bg-[#177249] p-4 text-white">
              <Award size={32} className="shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm">Latest documented NAAC grade</p>
                <p className="mt-1 text-xl font-bold">B++ · CGPA 2.95</p>
                <p className="mt-1 text-sm">Cycle 4 (2023–2028)</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {naacResources.filter(resource => resource.pdf).map(resource => (
                <li key={resource.href}><a href={resource.href} target="_blank" rel="noopener noreferrer" className={textLink}>{resource.label} <ArrowUpRight size={16} aria-hidden="true" /></a></li>
              ))}
            </ul>
          </div>
          <ol className="ml-1 border-l border-[#9fbfac]">
            {milestones.map(({ year, title, detail }) => (
              <li key={year} className="relative pb-4 pl-5 last:pb-0 sm:pl-6">
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#177249]" aria-hidden="true" />
                <h3 className="font-bold text-[#153d2c]"><time dateTime={year}>{year}</time> · {title}</h3>
                <p className={`mt-0.5 text-sm ${bodyText}`}>{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  </AboutLayout>
);

export default AboutCollege;
