import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { publishedFaculty as educators } from '@/data/publishedFaculty';

import nikkiKumari from '@/assets/homepage/nikki-kumari.webp';
import shubhaBg from '@/assets/homepage/shubha-bg.webp';
import sujathaNaik from '@/assets/homepage/sujatha-naik.webp';
import jayaramaNaik from '@/assets/homepage/jayarama-naik.webp';
import vimalaBs from '@/assets/homepage/vimala-bs.webp';
import sumithraKs from '@/assets/homepage/sumithra-ks.webp';

const filters = ['All Faculty', 'Botany', 'Commerce', 'Computer Science', 'Physics', 'Kannada'];

// Map high-definition faculty portraits to their matching profiles
const facultyImageMap: Record<string, string> = {
  'Dr. Prema Siddaraju': '/images/principal/dr-prema-siddaraju.jpg',
  'Dr. Nikki Kumari': nikkiKumari,
  'Shubha B. G.': shubhaBg,
  'Sujatha Naik': sujathaNaik,
  'Jayarama Naik': jayaramaNaik,
  'Vimala B. S.': vimalaBs,
  'Sumithra K. S.': sumithraKs,
};

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
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#177249] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header matching original format with orange accent bar */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <div className="mb-2 h-1 w-8 rounded-full bg-[#ea580c]" aria-hidden="true" />
            <h2 id="educators-title" className="text-2xl font-bold tracking-tight text-[#177249] sm:text-3xl">
              Distinguished Educators
            </h2>
            <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
              Faculty members documented in SJR College for Women official records, BOS/BOE committees, and university boards.
            </p>
          </div>
          <Link
            to="/about/faculties"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#177249] underline decoration-[#177249] underline-offset-4 transition-colors hover:text-[#ea580c] sm:text-sm"
          >
            <span>Full Faculty Directory ({educators.length})</span>
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
              {profiles.map((profile, idx) => {
                const photo = facultyImageMap[profile.name] || profile.image;
                return (
                  <li key={profile.name} className={`min-w-0 stagger-${(idx % 6) + 1}`}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          aria-label={`View profile for ${profile.name}`}
                          className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#dce5dd] bg-white text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#177249] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
                        >
                          {/* Photo or Initials Header */}
                          <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#eef4f0]">
                            {photo ? (
                              <img
                                src={photo}
                                alt={profile.name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#eef4f0] to-[#dfeee3]">
                                <span className="text-2xl font-bold tracking-wider text-[#177249]" aria-hidden="true">
                                  {initialsOf(profile.name)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Content Box with layout styling */}
                          <div className="flex w-full flex-1 flex-col justify-between border-t-2 border-[#177249] p-3.5 sm:p-4">
                            <div>
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
                                {profile.field}
                              </span>
                              <h3 className="mt-1 text-sm font-bold leading-tight text-[#177249] transition-colors group-hover:text-[#0f3222] sm:text-base">
                                {profile.name}
                              </h3>
                              <p className="mt-1 text-xs leading-snug text-[#52645a]">
                                {profile.designation}
                              </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-[#f0f4f0] pt-2.5 text-xs font-semibold text-[#177249]">
                              <span className="truncate pr-1 text-[11px] font-medium text-[#52645a]">
                                {profile.programme}
                              </span>
                              <ArrowRight size={14} className="shrink-0 text-[#177249] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                            </div>
                          </div>
                        </button>
                      </DialogTrigger>

                      <DialogContent className="max-w-md border-[#177249]/30 bg-[#fdfcf9] p-6 text-[#177249]">
                        <DialogTitle className="font-sans text-2xl font-bold text-[#177249]">
                          {profile.name}
                        </DialogTitle>
                        <DialogDescription className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">
                          {profile.field} · {profile.designation}
                        </DialogDescription>
                        <div className="mt-4 space-y-3 border-t border-[#e5dfce] pt-4 text-xs text-[#3d5044]">
                          {profile.qualification && (
                            <div>
                              <strong className="block text-[11px] font-bold uppercase text-[#177249]">Qualification</strong>
                              <span>{profile.qualification}</span>
                            </div>
                          )}
                          <div>
                            <strong className="block text-[11px] font-bold uppercase text-[#177249]">Programme Affiliation</strong>
                            <span>{profile.programme}</span>
                          </div>
                          <div>
                            <strong className="block text-[11px] font-bold uppercase text-[#177249]">Department / Role</strong>
                            <span>{profile.designation || 'Faculty Member'}</span>
                          </div>
                          {profile.detail && (
                            <div>
                              <strong className="block text-[11px] font-bold uppercase text-[#177249]">Academic Profile</strong>
                              <p className="mt-1 text-xs leading-relaxed text-[#52645a]">{profile.detail}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                );
              })}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
