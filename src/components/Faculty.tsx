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
    <section aria-labelledby="educators-title" className="border-b border-[#dde5de] bg-[#fbfaf6] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        {/* Header */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="home-section-eyebrow">
              Academic Faculty &amp; Governance
            </span>
            <h2 id="educators-title" className="home-section-title mt-1.5">
              Distinguished Educators
            </h2>
            <p className="mt-1 text-sm text-[#52645a]">
              Faculty members documented in SJR College for Women official records, BOS/BOE committees, and annual reports.
            </p>
          </div>
          <Link
            to="/about/faculties"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">View Full Faculty Directory ({educators.length})</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#c28422]" aria-hidden="true" />
          </Link>
        </div>

        {/* Department Tabs */}
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList
            aria-label="Faculty by department"
            className="mb-7 h-auto max-w-full flex-wrap justify-start gap-2 rounded-xl border border-[#dce4dd] bg-white p-1.5 shadow-sm"
          >
            {filters.map(field => (
              <TabsTrigger
                key={field}
                value={field}
                className="min-h-10 rounded-lg px-4 text-xs font-bold text-[#143a29] transition-all data-[state=active]:bg-[#143a29] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:ring-1 data-[state=active]:ring-[#c28422]"
              >
                {field}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={filter} className="mt-0">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {profiles.map(profile => (
                <li key={profile.name} className="min-w-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`View profile for ${profile.name}`}
                        className="academic-card group flex h-full w-full flex-col text-left shadow-xs transition-all duration-300 hover:border-[#143a29] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
                      >
                        <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#eef4f0]">
                          {profile.image ? (
                            <img
                              src={profile.image}
                              alt={profile.name}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-[50%_24%] transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#eef4f0] to-[#dfeee3]">
                              <span className="home-display-title text-2xl font-normal text-[#123625]" aria-hidden="true">
                                {initialsOf(profile.name)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex w-full flex-1 flex-col border-t-2 border-[#c28422] p-3 sm:p-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c28422]">
                            {profile.field}
                          </span>
                          <h3 className="mt-0.5 text-sm font-bold text-[#143a29] group-hover:text-[#185e3c] sm:text-base">
                            {profile.name}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-[#52645a]">
                            {profile.designation}
                          </p>
                          <div className="mt-3 flex items-center justify-between border-t border-[#edf2ee] pt-2 text-[11px] font-bold text-[#c28422]">
                            <span>Profile Details</span>
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md border border-[#c28422]/40 bg-white p-6 shadow-2xl sm:rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-[#c28422]/60 bg-[#eef4f0]">
                          {profile.image ? (
                            <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="grid h-full w-full place-items-center bg-[#eef4f0] font-serif text-xl font-bold text-[#143a29]">
                              {initialsOf(profile.name)}
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c28422]">{profile.field}</span>
                          <DialogTitle className="font-serif text-lg font-bold text-[#143a29]">{profile.name}</DialogTitle>
                          <DialogDescription className="text-xs text-[#52645a]">{profile.designation}</DialogDescription>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3 border-t border-[#e5ece6] pt-3 text-xs text-[#384c40]">
                        <div>
                          <strong className="block text-[#143a29]">Academic Credentials:</strong>
                          <span>{profile.qualification || 'Documented Faculty Profile'}</span>
                        </div>
                        {profile.experience && (
                          <div>
                            <strong className="block text-[#143a29]">Teaching Experience:</strong>
                            <span>{profile.experience}</span>
                          </div>
                        )}
                        <div>
                          <strong className="block text-[#143a29]">Official Records:</strong>
                          <span>Recognised in official Bangalore City University academic listings and annual institutional reports.</span>
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
