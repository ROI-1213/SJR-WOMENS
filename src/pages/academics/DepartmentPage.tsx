import {
  ArrowRight, ArrowUpRight, Atom, BookOpen, BriefcaseBusiness, Calculator, ChartNoAxesCombined, Code2,
  Dumbbell, FlaskConical, Landmark, Languages, Leaf, NotebookPen, PawPrint, Sigma, Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { photos } from '@/components/gallery/data';
import { departmentDetails, departmentReports } from '@/data/departmentDetails';
import { availableProgrammes, programmeTitle } from '@/data/institute';
import { departmentNames, type DepartmentSlug } from '@/data/navigation/departmentsMenuData';
import { publishedFaculty } from '@/data/publishedFaculty';
import opticsPhoto from '@/assets/departments/physics.webp';
import chemistryPhoto from '@/assets/departments/chemistry.webp';
import herbariumPhoto from '@/assets/departments/botany.webp';
import zoologyPhoto from '@/assets/departments/zoology.webp';
import computerLabPhoto from '@/assets/hero/computer-lab-800.webp';

const departmentIcons = {
  physics: Atom, chemistry: FlaskConical, mathematics: Sigma, botany: Leaf, zoology: PawPrint,
  'computer-science': Code2, english: NotebookPen, 'kannada-optional-kannada': Languages,
  hindi: Languages, sanskrit: BookOpen, history: Landmark, economics: ChartNoAxesCombined,
  commerce: Calculator, 'business-administration': BriefcaseBusiness, mcom: ChartNoAxesCombined, 'physical-education': Dumbbell,
};

const section = { label: 'Departments', href: '/departments' };
const heading = 'text-2xl font-bold leading-tight text-[color:var(--section-heading-color)]';
const body = 'leading-relaxed text-neutral-700';
const sourceLink = 'inline-flex items-center gap-1 text-sm font-semibold text-[#177249] underline underline-offset-4';

const subjectPhotos: Partial<Record<DepartmentSlug, { src: string; title: string; credit: string; source: string; license: string; licenseUrl: string }>> = {
  physics: {
    src: opticsPhoto, title: 'Optical bench', credit: '2007siddharthsingh2006',
    source: 'https://commons.wikimedia.org/wiki/File:Optical_instruments.jpg',
    license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  chemistry: {
    src: chemistryPhoto, title: 'Analytical chemistry workbench', credit: 'Jean-Pierre',
    source: 'https://commons.wikimedia.org/wiki/File:Chemistry_Laboratory_-_Bench.jpg',
    license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  botany: {
    src: herbariumPhoto, title: 'Endiandra acuminata herbarium specimen', credit: 'Queensland Herbarium',
    source: 'https://commons.wikimedia.org/wiki/File:Endiandra_acuminata_herbarium_specimen_AQ737142.jpg',
    license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  zoology: {
    src: zoologyPhoto, title: 'Spider specimens at the Museum für Naturkunde Berlin', credit: 'Hannes Grobe/AWI',
    source: 'https://commons.wikimedia.org/wiki/File:Collection1-nat-museum-berlin_hg.jpg',
    license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
};

const mediaByDepartment: Partial<Record<DepartmentSlug, number>> = {
  mathematics: 2,
  english: 2, hindi: 6, economics: 6, 'business-administration': 6, 'physical-education': 8,
};

const galleries: Partial<Record<DepartmentSlug, number[]>> = {
  'computer-science': [3],
  'physical-education': [4],
};

const facultyProgrammes: Partial<Record<DepartmentSlug, string[]>> = {
  'computer-science': ['Shubha B. G.', 'Sujatha Naik'],
  hindi: ['Jayarama Naik'],
  commerce: ['Vimala B. S.'],
  'business-administration': ['Dr. Nikki Kumari'],
  mcom: ['Sumithra K. S.'],
};

interface FacultyRecord {
  name: string;
  designation: string;
  detail: string;
  source: string;
  image?: string;
}

const additionalFaculty: Partial<Record<DepartmentSlug, FacultyRecord>> = {
  botany: {
    name: 'Dr. B. L. Manjula',
    designation: 'Professor and Head, Department of Botany',
    detail: 'M.Sc., M.Phil. and Ph.D. in Botany. Role and qualifications as listed in the college’s October 2024 profile.',
    source: 'https://sjrc.edu.in/wp-content/uploads/2025/01/Dr.B.L.M-CV-28.10.24.pdf',
  },
  mathematics: {
    name: 'Prof. C. Kavitha',
    designation: 'Assistant Professor and Head, Mathematics · 2022–23',
    detail: 'B.Sc., M.Sc. and M.Phil. as recorded in the college’s annual report.',
    source: departmentReports['2022–23'],
  },
  english: {
    name: 'Dr. Shylaja Devi',
    designation: 'Assistant Professor, English · 2022–23',
    detail: 'B.A., M.A., Ph.D. and B.Ed. as recorded in the college’s annual report.',
    source: departmentReports['2022–23'],
  },
  sanskrit: {
    name: 'Prof. G. S. Yadugiri',
    designation: 'Associate Professor and Head, Sanskrit · 2022–23',
    detail: 'B.A., M.A. and M.Phil. as recorded in the college’s annual report.',
    source: departmentReports['2022–23'],
  },
  history: {
    name: 'Dr. M. G. Meenakshi',
    designation: 'Associate Professor and Head, History · 2022–23',
    detail: 'B.A., M.A., Ph.D. and SLET as recorded in the college’s annual report.',
    source: departmentReports['2022–23'],
  },
};

export default function DepartmentPage({ slug }: { slug: DepartmentSlug }) {
  const name = departmentNames[slug];
  const department = departmentDetails[slug];
  const Icon = departmentIcons[slug];
  const subjectPhoto = subjectPhotos[slug];
  const campusPhoto = slug === 'computer-science'
    ? { src: computerLabPhoto, title: 'Computer laboratory' }
    : photos.find(photo => photo.id === mediaByDepartment[slug]) ?? photos[4];
  const introductionPhoto = subjectPhoto ?? campusPhoto;
  const gallery = photos.filter(photo => galleries[slug]?.includes(photo.id));
  const additional = additionalFaculty[slug];
  const faculty: FacultyRecord[] = additional
    ? [additional]
    : publishedFaculty.filter(member => facultyProgrammes[slug]?.includes(member.name));
  const programme = availableProgrammes.find(item => item.href === department.programme);
  const science = department.area === 'sciences';
  const humanities = department.area === 'humanities';

  return (
    <SectionPageLayout section={section} pageTitle={name} breadcrumbPath={name} showFloatingApply={false}>
      <div className="mx-auto max-w-6xl space-y-9 px-4 py-8 sm:space-y-12 sm:px-6 sm:py-12">
        <section aria-labelledby="department-about" className="grid items-stretch gap-4 md:grid-cols-2">
          <div className={`flex flex-col justify-center rounded-2xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-5 sm:p-8 ${humanities ? 'md:order-2' : ''}`}>
            <Icon size={26} className="mb-3 text-[#177249]" aria-hidden="true" />
            <p className="mb-5 text-lg font-semibold leading-snug text-[color:var(--section-heading-color)] sm:text-xl">{department.intro}</p>
            <h2 id="department-about" className={heading}>About the Department</h2>
            <p className={`mt-2 ${body}`}>{department.about}</p>
          </div>
          <figure className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="relative min-h-0 flex-1 bg-neutral-100">
              <div className="aspect-[16/10]" />
              <img src={introductionPhoto.src} alt="" className={`absolute inset-0 size-full ${slug === 'botany' ? 'object-contain' : 'object-cover'}`} />
            </div>
            <figcaption className="px-4 py-2 text-sm text-neutral-700">
              {introductionPhoto.title} · {subjectPhoto ? 'Illustrative photograph' : 'College campus'}
              {subjectPhoto && (
                <span className="mt-1 block text-xs">
                  <a href={subjectPhoto.source} className="underline underline-offset-2">{subjectPhoto.credit}</a>
                  {' · '}<a href={subjectPhoto.licenseUrl} className="underline underline-offset-2">{subjectPhoto.license}</a>
                  {' · Resized for web'}
                </span>
              )}
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="department-focus" className={science ? 'grid gap-4 md:grid-cols-[1fr_2fr] md:items-start' : ''}>
          <h2 id="department-focus" className={heading}>Academic Focus</h2>
          <div>
            <ul className={`grid gap-3 sm:grid-cols-2 ${science ? '' : 'mt-4'}`}>
              {department.topics.map(topic => (
                <li key={topic} className={`flex items-start gap-3 px-4 py-3 font-semibold text-[color:var(--section-heading-color)] ${humanities ? 'border-b border-neutral-200' : 'rounded-lg border border-neutral-200 bg-[#177249]/5'}`}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff8c00]" aria-hidden="true" />{topic}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {department.syllabi.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={sourceLink}>{label} <ArrowUpRight size={14} aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="department-purpose" className="rounded-2xl bg-[#177249] p-5 text-white sm:p-7">
          <h2 id="department-purpose" className="text-2xl font-bold">Vision &amp; Mission</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-[#ff8c00] pl-4">
              <h3 className="font-semibold">Vision</h3>
              <p className="mt-1 leading-relaxed">{department.vision}</p>
            </div>
            <div className="border-l-2 border-[#ff8c00] pl-4">
              <h3 className="font-semibold">Mission</h3>
              <p className="mt-1 leading-relaxed">{department.mission}</p>
            </div>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
          <section aria-labelledby="department-learning">
            <BookOpen size={23} className="mb-2 text-[#177249]" aria-hidden="true" />
            <h2 id="department-learning" className={heading}>Teaching &amp; Learning</h2>
            <p className={`mt-3 ${body}`}>{department.learning}</p>
          </section>
          <section aria-labelledby="department-activities" className="rounded-xl border border-neutral-200 bg-[#177249]/5 p-5">
            <h2 id="department-activities" className={heading}>Department Activities</h2>
            <p className={`mt-3 ${body}`}>{department.activity.text}</p>
            <a href={departmentReports[department.activity.report]} target="_blank" rel="noopener noreferrer" className={`mt-3 ${sourceLink}`}>
              College annual report {department.activity.report} (PDF) <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </section>
        </div>

        {faculty.length > 0 && (
          <section aria-labelledby="department-faculty">
            <h2 id="department-faculty" className={heading}>Faculty in Published Records</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {faculty.map(member => (
                <li key={member.name} className="flex flex-wrap items-start gap-4 rounded-xl border border-neutral-200 p-4">
                  {member.image && <img src={member.image} alt="" loading="lazy" className="size-20 shrink-0 rounded-lg object-cover object-top" />}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[color:var(--section-heading-color)]">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#177249]">{member.designation}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">{member.detail}</p>
                    <a href={member.source} target="_blank" rel="noopener noreferrer" className={`mt-2 ${sourceLink}`}>Faculty record (PDF) <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {gallery.length > 0 && (
          <section aria-labelledby="department-gallery">
            <h2 id="department-gallery" className={heading}>Department Gallery</h2>
            <div className="mt-4 max-w-2xl">
              {gallery.map(photo => (
                <figure key={photo.id} className="overflow-hidden rounded-xl border border-neutral-200">
                  <img src={photo.src} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                  <figcaption className="px-4 py-2 text-sm text-neutral-700">{photo.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="department-pathways" className="rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-5 sm:p-7">
          <Target size={24} className="mb-2 text-[#177249]" aria-hidden="true" />
          <h2 id="department-pathways" className={heading}>Skills &amp; Future Opportunities</h2>
          <p className={`mt-3 max-w-3xl ${body}`}>{department.pathways}</p>
          {programme && (
            <Link to={programme.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-[#177249] underline underline-offset-4">
              {programmeTitle(programme)} <ArrowRight size={17} className="shrink-0" aria-hidden="true" />
            </Link>
          )}
        </section>
      </div>
    </SectionPageLayout>
  );
}
