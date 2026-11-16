import { useState } from 'react';
import { ArrowRight, ArrowUpRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

import nikkiKumari from '@/assets/homepage/nikki-kumari.webp';
import shubhaBg from '@/assets/homepage/shubha-bg.webp';
import sujathaNaik from '@/assets/homepage/sujatha-naik.webp';
import jayaramaNaik from '@/assets/homepage/jayarama-naik.webp';
import vimalaBs from '@/assets/homepage/vimala-bs.webp';
import sumithraKs from '@/assets/homepage/sumithra-ks.webp';

const filters = ['All Faculty', 'Commerce', 'Management', 'Computer Science', 'Hindi'];

interface EducatorProfile {
  name: string;
  field: string;
  designation: string;
  programme: string;
  image: string;
  qualification: string;
  detail: string;
}

const featuredEducators: EducatorProfile[] = [
  {
    name: 'Dr. Nikki Kumari',
    field: 'Management',
    designation: 'Management Studies faculty',
    programme: 'BBA',
    image: nikkiKumari,
    qualification: 'Ph.D. in Management Studies',
    detail: 'Faculty member in the Department of Business Administration, guiding students across strategic management, organizational behavior, and corporate leadership.',
  },
  {
    name: 'Shubha B. G.',
    field: 'Computer Science',
    designation: 'Computer Applications faculty',
    programme: 'BCA',
    image: shubhaBg,
    qualification: 'M.Sc. / MCA in Computer Science',
    detail: 'Faculty member in Computer Science & Applications, specializing in database management systems, programming paradigms, and software development.',
  },
  {
    name: 'Sujatha Naik',
    field: 'Computer Science',
    designation: 'Computer Applications faculty',
    programme: 'BCA',
    image: sujathaNaik,
    qualification: 'MCA / M.Sc. in Computer Science',
    detail: 'Faculty member in Computer Science & Applications, active in curriculum delivery, student project mentorship, and emerging IT lab practicals.',
  },
  {
    name: 'Jayarama Naik',
    field: 'Hindi',
    designation: 'Hindi faculty',
    programme: 'BBA',
    image: jayaramaNaik,
    qualification: 'M.A. in Hindi, M.Phil',
    detail: 'Faculty member in the Department of Hindi, fostering national language proficiency, cultural literature, and communicative competence.',
  },
  {
    name: 'Vimala B. S.',
    field: 'Commerce',
    designation: 'Lecturer in Commerce',
    programme: 'Commerce · 2022–23',
    image: vimalaBs,
    qualification: 'M.Com in Commerce & Finance',
    detail: 'Lecturer in Commerce with dedicated service across financial accounting, corporate governance, and commerce pedagogy.',
  },
  {
    name: 'Sumithra K. S.',
    field: 'Commerce',
    designation: 'Assistant Professor, Commerce',
    programme: 'M.Com · 2021–22',
    image: sumithraKs,
    qualification: 'M.Com, UGC-NET Qualified',
    detail: 'Assistant Professor in Commerce, guiding undergraduate and postgraduate students in advanced financial management, taxation, and business studies.',
  },
];

export const FacultySection = () => {
  const [filter, setFilter] = useState(filters[0]);
  const profiles = filter === 'All Faculty' ? featuredEducators : featuredEducators.filter(e => e.field === filter);

  return (
    <section
      aria-labelledby="educators-title"
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#177249] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <div className="mb-2 h-1 w-8 rounded-full bg-[#ea580c]" aria-hidden="true" />
            <h2 id="educators-title" className="text-2xl font-bold tracking-tight text-[#177249] sm:text-3xl">
              Expert Educators
            </h2>
            <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
              Selected faculty from the college’s published records.
            </p>
          </div>
          <Link
            to="/about/faculties"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#177249] underline decoration-[#177249] underline-offset-4 transition-colors hover:text-[#ff8c00] sm:text-sm"
          >
            <span>View all faculty</span>
            <ArrowUpRight size={15} className="text-[#177249] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Department Tabs */}
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList
            aria-label="Faculty by department"
            className="mb-8 h-auto max-w-full flex-wrap justify-start gap-2 rounded-xl border border-[#dce4dd] bg-white p-1.5 shadow-2xs"
          >
            {filters.map(field => (
              <TabsTrigger
                key={field}
                value={field}
                className="min-h-9 rounded-lg px-3.5 text-xs font-bold text-[#177249] transition-all data-[state=active]:bg-[#177249] data-[state=active]:text-white data-[state=active]:shadow-xs data-[state=active]:ring-1 data-[state=active]:ring-[#177249]"
              >
                {field}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={filter} className="mt-0">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {profiles.map((profile, idx) => (
                <li key={profile.name} className={`min-w-0 stagger-${(idx % 6) + 1}`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`View profile for ${profile.name}`}
                        className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#dce5dd] bg-white text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#177249] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
                      >
                        {/* Top Photo */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-[#eef4f0]">
                          <img
                            src={profile.image}
                            alt={profile.name}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content Box */}
                        <div className="flex w-full flex-1 flex-col justify-between border-t-2 border-[#177249] p-3.5 sm:p-4">
                          <div>
                            <h3 className="text-sm font-bold leading-tight text-[#177249] transition-colors group-hover:text-[#135c3b] sm:text-base">
                              {profile.name}
                            </h3>
                            <p className="mt-1 text-xs leading-snug text-[#52645a]">
                              {profile.designation}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[#f0f4f0] pt-2 text-xs font-semibold text-[#177249]">
                            <span>{profile.programme}</span>
                            <ArrowRight size={14} className="text-[#177249] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md border-[#177249]/30 bg-[#fdfcf9] p-6 text-[#177249]">
                      <DialogTitle className="font-sans text-2xl font-bold text-[#177249]">
                        {profile.name}
                      </DialogTitle>
                      <DialogDescription className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">
                        {profile.field} · {profile.designation}
                      </DialogDescription>
                      <div className="mt-4 space-y-3 border-t border-[#e5dfce] pt-4 text-xs text-[#3d5044]">
                        <div>
                          <strong className="block text-[11px] font-bold uppercase text-[#177249]">Qualification</strong>
                          <span>{profile.qualification}</span>
                        </div>
                        <div>
                          <strong className="block text-[11px] font-bold uppercase text-[#177249]">Programme Affiliation</strong>
                          <span>{profile.programme}</span>
                        </div>
                        <div>
                          <strong className="block text-[11px] font-bold uppercase text-[#177249]">Academic Profile</strong>
                          <p className="mt-1 text-xs leading-relaxed text-[#52645a]">{profile.detail}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
