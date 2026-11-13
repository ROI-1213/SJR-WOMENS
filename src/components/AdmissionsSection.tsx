import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Award, BriefcaseBusiness, ChartNoAxesCombined, GraduationCap, Laptop } from 'lucide-react';
import { availableProgrammes, naacGrade, naacCycleLabel } from '@/data/institute';
import { AdmissionDialog } from './AdmissionDialog';

const programmeIcons = {
  bsc: Atom,
  bcom: ChartNoAxesCombined,
  bba: BriefcaseBusiness,
  bca: Laptop,
  mcom: GraduationCap,
};

export const AdmissionsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section aria-labelledby="excellence-title" className="border-b border-[#e1e6e1] bg-[#f8faf8] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        {/* Header with formal title & quick link */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
              Academic Offerings &amp; Accreditation
            </span>
            <h2 id="excellence-title" className="home-section-title mt-1">
              Excellence in Education
            </h2>
          </div>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
          >
            Admissions Information &amp; Guidelines
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-8">
          {/* Formal NAAC Feature Card */}
          <article className="relative isolate flex min-h-56 flex-col justify-between overflow-hidden rounded-xl border border-[#c28422]/40 bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0d2a1c] p-6 text-white shadow-md sm:p-8">
            <Award className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-60 w-60 text-white/[0.07]" strokeWidth={0.8} aria-hidden="true" />
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c28422]/20 border border-[#c28422]/40 text-[#dfa03e]">
                  <Award size={18} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                  Institutional Accreditation
                </span>
              </div>
              <p className="home-display-title text-7xl font-normal leading-none tracking-tight text-[#dfa03e] sm:text-8xl">
                {naacGrade}
              </p>
              <p className="mt-2 text-sm font-semibold text-white/95">NAAC Accreditation Grade</p>
              <p className="mt-0.5 text-xs text-white/75">{naacCycleLabel} · CGPA 2.95</p>
            </div>
            <Link
              to="/naac"
              className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-wider text-[#dfa03e] underline decoration-[#dfa03e]/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              View Accreditation Records &amp; AQAR
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </article>

          {/* Programmes Grid */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#143a29]">
                Available Programmes
              </h3>
              <span className="text-xs text-neutral-500">Affiliated to BCU</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {availableProgrammes.map(programme => {
                const Icon = programmeIcons[programme.id];
                return (
                  <li key={programme.id} className="min-w-0">
                    <Link
                      to={programme.href}
                      className="group flex h-full items-start gap-3 rounded-xl border border-[#d8e2d9] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#143a29] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29] lg:p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#c8decb] bg-[#eef5f0] text-[#143a29] transition-colors group-hover:bg-[#143a29] group-hover:text-white">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold leading-tight text-[#143a29] group-hover:text-[#17563b]">
                          {programme.name}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-[#45584d]">
                          {programme.fullName}
                        </span>
                      </span>
                      <ArrowRight
                        size={16}
                        className="mt-1 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-[#143a29]"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#123625] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#194c34] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123625]"
          >
            Apply Online for Admission
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <span className="text-xs text-[#52645a]">
            For course counselling, contact the admission desk during college hours.
          </span>
        </div>
      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
