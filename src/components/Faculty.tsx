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
    <section aria-labelledby="educators-title" className="border-t border-[#e2e9e2] bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="educators-title" className="home-section-title">Expert Educators</h2>
            <p className="mt-2 text-sm text-[#43534a]">Verified faculty from SJR College for Women official records and annual reports.</p>
          </div>
          <Link to="/about/faculties" className="inline-flex items-center gap-2 font-semibold text-[#185d40] underline underline-offset-4">
            View all {educators.length} faculty <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList aria-label="Faculty by department" className="mb-4 h-auto max-w-full flex-wrap justify-start gap-1 bg-[#eef4ef] p-1.5">
            {filters.map(field => (
              <TabsTrigger key={field} value={field} className="min-h-10 whitespace-normal px-3 text-[#185d40] data-[state=active]:bg-[#177249] data-[state=active]:text-white">
                {field}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={filter}>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
              {profiles.map(profile => (
                <li key={profile.name} className="min-w-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" aria-label={`View profile for ${profile.name}`} className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#d8e5dc] bg-white text-left hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] motion-safe:transition-colors">
                        <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#eef4ef]">
                          {profile.image ? (
                            <img src={profile.image} alt={profile.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_24%] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.035]" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e4efe7] to-[#d2e5d7]">
                              <span className="home-display-title text-2xl font-bold text-[#177249]" aria-hidden="true">
                                {initialsOf(profile.name)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex w-full flex-1 flex-col border-t-2 border-[#177249] p-3 sm:p-4">
                          <h3 className="mt-1 text-base font-semibold sm:text-lg">{profile.name}</h3>
                          <p className="mt-1 text-sm leading-snug text-[#43534a]">{profile.designation}</p>
                          <span className="mt-auto flex items-center justify-between gap-1 pt-2 text-xs font-medium text-[#177249]">
                            {profile.programme} <ArrowRight size={15} className="shrink-0" aria-hidden="true" />
                          </span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90dvh] w-[92vw] overflow-y-auto rounded-xl p-6 sm:p-8">
                      <DialogTitle className="text-2xl text-[#182d23]">{profile.name}</DialogTitle>
                      <DialogDescription className="text-[#185d40]">
                        {profile.designation} · {profile.programme}
                        {profile.qualification ? ` · ${profile.qualification}` : ''}
                      </DialogDescription>
                      <p className="leading-relaxed text-[#43534a]">{profile.detail}</p>
                      <a href={profile.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#185d40] underline underline-offset-4">
                        <BookOpen size={17} aria-hidden="true" /> Official college record
                      </a>
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
