import { useState } from 'react';
import { BookOpen, BriefcaseBusiness, GraduationCap, ArrowUpRight } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { facultyDepartments, publishedFaculty, type FacultyMember } from '@/data/publishedFaculty';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const initialsOf = (name: string) =>
  name
    .replace(/^(Dr\.|Smt\.|Prof\.)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');

export default function Faculties() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All Faculty');
  const [activeModalMember, setActiveModalMember] = useState<FacultyMember | null>(null);

  const visibleFaculty =
    selectedDepartment === 'All Faculty'
      ? publishedFaculty
      : publishedFaculty.filter(member => member.field === selectedDepartment);

  const activeDepartments = facultyDepartments.filter(
    dept => dept === 'All Faculty' || publishedFaculty.some(m => m.field === dept)
  );

  return (
    <AboutLayout pageTitle="Our Faculty" breadcrumbPath="Faculties">
      <section aria-labelledby="faculty-heading" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8 text-center">
          <h2 id="faculty-heading" className="text-2xl font-bold text-[#177249] sm:text-3xl">
            Faculty Profiles
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-700">
            Distinguished educators and researchers documented in SJR College for Women’s official academic records, university boards, and IQAC records.
          </p>
        </header>

        {/* Department Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter faculty by department">
          {activeDepartments.map(dept => {
            const active = selectedDepartment === dept;
            return (
              <button
                key={dept}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedDepartment(dept)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  active
                    ? 'bg-[#177249] text-white shadow-sm'
                    : 'border border-neutral-200 bg-[#f8fbf8] text-[#177249] hover:border-[#177249]'
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* 4-column card grid matching Demo Faculty Profiles format */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleFaculty.map(member => (
            <li
              key={member.name}
              onClick={() => setActiveModalMember(member)}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#177249]/40 hover:shadow-md"
            >
              {/* Photo filling top of card */}
              <div className="aspect-square h-auto w-full overflow-hidden bg-neutral-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="aspect-square h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#f0f6f2] via-[#e6f0e9] to-[#d8e8dd]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#177249]/20 bg-white/80 shadow-xs">
                      <span className="text-2xl font-bold tracking-wider text-[#177249]">
                        {initialsOf(member.name)}
                      </span>
                    </div>
                    <span className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-[#4d6356]">
                      {member.field}
                    </span>
                  </div>
                )}
              </div>

              {/* Orange border separator directly beneath photo */}
              <div className="flex flex-1 flex-col justify-between border-t-2 border-[#ff8c00] p-4 bg-white">
                <div className="text-center">
                  <h3 className="text-base font-bold text-[#177249] transition-colors group-hover:text-[#0f3e28] line-clamp-1" title={member.name}>
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#52645a] line-clamp-1" title={member.designation}>
                    {member.designation}
                  </p>
                </div>

                {/* Metadata rows with icons */}
                <dl className="mt-3 space-y-2 whitespace-nowrap border-t border-neutral-200 pt-3 text-left text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]">
                      <BookOpen size={16} role="img" aria-label="Subject" />
                    </dt>
                    <dd className="truncate font-medium text-neutral-800" title={member.field}>
                      {member.field}
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]">
                      <GraduationCap size={16} role="img" aria-label="Qualification" />
                    </dt>
                    <dd className="truncate font-medium text-neutral-800" title={member.qualification}>
                      {member.qualification || 'M.Sc. / Postgraduate'}
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]">
                      <BriefcaseBusiness size={16} role="img" aria-label="Experience" />
                    </dt>
                    <dd className="truncate font-medium text-neutral-800">
                      {member.experience || '10+ years'}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal dialog for full faculty details when a card is clicked */}
        <Dialog open={!!activeModalMember} onOpenChange={open => !open && setActiveModalMember(null)}>
          {activeModalMember && (
            <DialogContent className="max-w-lg border-[#177249]/20 bg-white p-6 text-[#177249]">
              <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
                {activeModalMember.image ? (
                  <img
                    src={activeModalMember.image}
                    alt={activeModalMember.name}
                    className="h-20 w-20 shrink-0 rounded-xl border-2 border-[#177249] object-cover object-top"
                  />
                ) : (
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-2 border-[#177249]/30 bg-[#e6f0e9] text-xl font-bold text-[#177249]">
                    {initialsOf(activeModalMember.name)}
                  </div>
                )}
                <div>
                  <DialogTitle className="font-sans text-xl font-bold text-[#177249]">
                    {activeModalMember.name}
                  </DialogTitle>
                  <DialogDescription className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#ea580c]">
                    {activeModalMember.field} · {activeModalMember.designation}
                  </DialogDescription>
                  <p className="mt-1 text-xs text-[#52645a]">
                    {activeModalMember.programme}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-[#3d5044]">
                <div className="grid grid-cols-2 gap-3 rounded-lg bg-[#f8fbf8] p-3 border border-neutral-200">
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-[#177249]">Qualification</span>
                    <span className="font-medium text-neutral-800">{activeModalMember.qualification || 'Postgraduate'}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-[#177249]">Experience</span>
                    <span className="font-medium text-neutral-800">{activeModalMember.experience || '10+ years'}</span>
                  </div>
                </div>

                {activeModalMember.detail && (
                  <div>
                    <strong className="block text-[11px] font-bold uppercase text-[#177249] mb-1">
                      Academic Profile & Contributions
                    </strong>
                    <p className="leading-relaxed text-[#52645a]">{activeModalMember.detail}</p>
                  </div>
                )}

                {activeModalMember.source && (
                  <div className="pt-2 border-t border-neutral-100">
                    <a
                      href={activeModalMember.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#177249] underline underline-offset-4 hover:text-[#ea580c]"
                    >
                      <span>Official Source Documentation</span>
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </section>
    </AboutLayout>
  );
}
