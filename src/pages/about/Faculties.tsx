import { useState } from 'react';
import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { facultyDepartments, publishedFaculty } from '@/data/publishedFaculty';

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
          <h2 id="faculty-heading" className="text-2xl font-bold text-[color:var(--section-heading-color)] sm:text-3xl">
            Verified Faculty Directory
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-700">
            Faculty members documented in SJR College for Women’s official website, IQAC records, and 2023–24 Annual Report. Neutral avatars are shown where individual photographs were not published on the official website.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter faculty by department">
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
                    : 'border border-neutral-200 bg-[#f8fbf8] text-[#185d40] hover:border-[#177249]'
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFaculty.map(member => (
            <li
              key={member.name}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4 border-b border-neutral-100 bg-[#f8fbf8] p-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-[#177249] object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#177249]/30 bg-[#e6f0e9] text-lg font-bold text-[#177249]"
                  >
                    {initialsOf(member.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <span className="inline-block rounded bg-[#eef4ef] px-2 py-0.5 text-xs font-semibold text-[#177249]">
                    {member.field}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-[color:var(--section-heading-color)]">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#185d40]">{member.designation}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 text-sm text-neutral-700">
                <p className="leading-relaxed">{member.detail}</p>
                <dl className="mt-4 space-y-1.5 border-t border-neutral-100 pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <dt className="shrink-0 text-[#177249]"><BookOpen size={14} aria-hidden="true" /></dt>
                    <dd>{member.programme}</dd>
                  </div>
                  {member.qualification && (
                    <div className="flex items-center gap-2">
                      <dt className="shrink-0 text-[#177249]"><GraduationCap size={14} aria-hidden="true" /></dt>
                      <dd>{member.qualification}</dd>
                    </div>
                  )}
                </dl>
                <a
                  href={member.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-[#177249] underline underline-offset-4 hover:text-[#185d40]"
                >
                  Official source <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </AboutLayout>
  );
}
