import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { publishedFaculty as educators } from '@/data/publishedFaculty';

const filters = ['All Faculty', 'Botany', 'Commerce', 'Computer Science', 'Physics', 'Kannada'];

const initialsOf = (name: string) =>
  name
    .replace(/^(Dr\.|Smt\.|Prof\.)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');

export const FacultySection = () => {
  const [filter, setFilter] = useState(filters[0]);
  const profiles = (filter === filters[0] ? educators : educators.filter(educator => educator.field === filter)).slice(0, 6);

  return (
    <section
      aria-labelledby="educators-title"
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#143a29] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="home-section-eyebrow tracking-widest text-[#8b6528]">ACADEMIC FACULTY &amp; GOVERNANCE</span>
            </div>
            <h2 id="educators-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#143a29] sm:text-4xl">
              Distinguished Educators
            </h2>
            <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
              Faculty members documented in SJR College for Women official records, BOS/BOE committees, and university boards.
            </p>
          </div>
          <Link
            to="/about/faculties"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#143a29] transition-colors hover:text-[#c28422] sm:text-sm"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Full Faculty Directory ({educators.length})</span>
            <ArrowUpRight size={15} className="text-[#c28422] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
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
                className="min-h-9 rounded-lg px-3.5 text-xs font-bold text-[#143a29] transition-all data-[state=active]:bg-[#143a29] data-[state=active]:text-white data-[state=active]:shadow-xs data-[state=active]:ring-1 data-[state=active]:ring-[#c28422]"
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
                        className="faculty-card-advanced group flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
                      >
                        <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#eef4f0]">
                          {profile.image ? (
                            <img
                              src={profile.image}
                              alt={profile.name}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-[50%_24%] transition-transform duration-500 group-hover:scale-106"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#eef4f0] to-[#dfeee3]">
                              <span className="font-serif text-2xl font-bold text-[#143a29]" aria-hidden="true">
                                {initialsOf(profile.name)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex w-full flex-1 flex-col border-t-2 border-[#c28422] p-3 sm:p-3.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b6528]">
                            {profile.field}
                          </span>
                          <h3 className="mt-1 text-xs font-bold leading-tight text-[#143a29] transition-colors group-hover:text-[#185e3c] sm:text-sm">
                            {profile.name}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-[#52645a]">
                            {profile.qualification || profile.designation}
                          </p>
                          <span className="mt-auto pt-2 text-[10px] font-bold uppercase tracking-wider text-[#c28422] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                            Dossier <ArrowRight size={10} aria-hidden="true" />
                          </span>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md border-[#c28422]/40 bg-[#fdfcf9] p-6 text-[#143a29]">
                      <DialogTitle className="font-serif text-2xl font-bold text-[#143a29]">
                        {profile.name}
                      </DialogTitle>
                      <DialogDescription className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">
                        {profile.field} · {profile.designation}
                      </DialogDescription>
                      <div className="mt-4 space-y-3 border-t border-[#e5dfce] pt-4 text-xs text-[#3d5044]">
                        <div>
                          <strong className="block text-[11px] font-bold uppercase text-[#143a29]">Qualification</strong>
                          <span>{profile.qualification || 'Academic Credentials Verified'}</span>
                        </div>
                        <div>
                          <strong className="block text-[11px] font-bold uppercase text-[#143a29]">Department / Role</strong>
                          <span>{profile.designation || 'Faculty Member'}</span>
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
