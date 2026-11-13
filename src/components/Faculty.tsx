import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
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
    <section aria-labelledby="educators-title" className="border-b border-[#e1e6e1] bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
              Academic Faculty
            </span>
            <h2 id="educators-title" className="home-section-title mt-1">
              Distinguished Educators
            </h2>
            <p className="mt-1.5 text-xs text-[#52645a] sm:text-sm">
              Faculty members documented in SJR College for Women official records, BOS/BOE committees, and annual reports.
            </p>
          </div>
          <Link
            to="/about/faculties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
          >
            View Full Faculty Directory ({educators.length})
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Department Tabs */}
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList
            aria-label="Faculty by department"
            className="mb-6 h-auto max-w-full flex-wrap justify-start gap-1.5 rounded-lg border border-[#dce4dd] bg-[#f8faf8] p-1.5 shadow-sm"
          >
            {filters.map(field => (
              <TabsTrigger
                key={field}
                value={field}
                className="min-h-9 rounded-md px-3.5 text-xs font-semibold text-[#143a29] transition-all data-[state=active]:bg-[#123625] data-[state=active]:text-white data-[state=active]:shadow-sm"
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
                        className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#dce4dd] bg-[#fafbf9] text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#143a29] hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
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
                          <h3 className="mt-0.5 text-sm font-bold text-[#143a29] group-hover:text-[#17563b] sm:text-base">
                            {profile.name}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-[#52645a]">
                            {profile.designation}
                          </p>
                          <span className="mt-auto flex items-center justify-between gap-1 pt-3 text-[11px] font-semibold text-[#143a29]">
                            <span className="truncate">{profile.programme}</span>
                            <ArrowRight size={13} className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90dvh] w-[92vw] max-w-lg overflow-y-auto rounded-xl border border-neutral-200 p-6 sm:p-8">
                      <div className="border-b border-neutral-100 pb-3">
                        <span className="inline-block rounded bg-[#eef4ef] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#143a29]">
                          {profile.field} Department
                        </span>
                        <DialogTitle className="home-display-title mt-2 text-2xl font-normal text-[#123625]">
                          {profile.name}
                        </DialogTitle>
                        <DialogDescription className="text-sm font-semibold text-[#185d40]">
                          {profile.designation} · {profile.programme}
                          {profile.qualification ? ` · ${profile.qualification}` : ''}
                        </DialogDescription>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#43534a]">{profile.detail}</p>
                      <div className="mt-5 border-t border-neutral-100 pt-3">
                        <a
                          href={profile.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#143a29] underline decoration-[#c28422] underline-offset-4 hover:text-[#c28422]"
                        >
                          <BookOpen size={15} aria-hidden="true" /> Official Institutional Record
                        </a>
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
