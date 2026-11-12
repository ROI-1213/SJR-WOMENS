import { BookOpen, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import ananyaRao from '@/assets/about/demo-faculty/ananya-rao.webp';
import vikramHegde from '@/assets/about/demo-faculty/vikram-hegde.webp';
import meeraKulkarni from '@/assets/about/demo-faculty/meera-kulkarni.webp';
import rahulPrasad from '@/assets/about/demo-faculty/rahul-prasad.webp';
import kavyaNaik from '@/assets/about/demo-faculty/kavya-naik.webp';
import arvindShetty from '@/assets/about/demo-faculty/arvind-shetty.webp';
import nishaIyer from '@/assets/about/demo-faculty/nisha-iyer.webp';
import sandeepKumar from '@/assets/about/demo-faculty/sandeep-kumar.webp';

const demoFaculty = [
  { name: 'Ananya Rao', photo: ananyaRao, designation: 'Associate Professor', subject: 'Commerce', qualification: 'M.Com, Ph.D.', years: 14 },
  { name: 'Vikram Hegde', photo: vikramHegde, designation: 'Associate Professor', subject: 'Business Management', qualification: 'MBA, Ph.D.', years: 18 },
  { name: 'Meera Kulkarni', photo: meeraKulkarni, designation: 'Professor', subject: 'Economics', qualification: 'M.A., Ph.D.', years: 24 },
  { name: 'Rahul Prasad', photo: rahulPrasad, designation: 'Assistant Professor', subject: 'Computer Applications', qualification: 'MCA', years: 6 },
  { name: 'Kavya Naik', photo: kavyaNaik, designation: 'Assistant Professor', subject: 'English', qualification: 'M.A., NET', years: 5 },
  { name: 'Arvind Shetty', photo: arvindShetty, designation: 'Professor', subject: 'Mathematics', qualification: 'M.Sc., Ph.D.', years: 26 },
  { name: 'Nisha Iyer', photo: nishaIyer, designation: 'Assistant Professor', subject: 'Statistics', qualification: 'M.Sc., NET', years: 10 },
  { name: 'Sandeep Kumar', photo: sandeepKumar, designation: 'Associate Professor', subject: 'Accounting', qualification: 'M.Com, Ph.D.', years: 15 },
];

export default function Faculties() {
  return (
    <AboutLayout pageTitle="Our Faculty" breadcrumbPath="Faculties">
      <section aria-labelledby="faculty-heading" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-6 text-center">
          <h2 id="faculty-heading" className="text-2xl font-bold text-[color:var(--section-heading-color)] sm:text-3xl">Demo Faculty Profiles</h2>
          <p className="mt-2 text-sm text-neutral-700">Fictional profiles for demonstration purposes.</p>
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demoFaculty.map(({ name, photo, designation, subject, qualification, years }) => (
            <li key={name} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <img src={photo} alt="" width={512} height={512} loading="lazy" className="aspect-square h-auto w-full bg-neutral-100 object-cover" />
              <div className="border-t-2 border-[#ff8c00] p-4">
                <div className="text-center">
                  <h3 className="text-base font-bold text-[color:var(--section-heading-color)]">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#177249]">{designation}</p>
                </div>
                <dl className="mt-3 space-y-2 whitespace-nowrap border-t border-neutral-200 pt-3 text-left text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]"><BookOpen size={16} role="img" aria-label="Subject" /></dt>
                    <dd>{subject}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]"><GraduationCap size={16} role="img" aria-label="Qualification" /></dt>
                    <dd>{qualification}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]"><BriefcaseBusiness size={16} role="img" aria-label="Experience" /></dt>
                    <dd>{years} years</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </AboutLayout>
  );
}
