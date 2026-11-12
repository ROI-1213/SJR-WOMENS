import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Award, BriefcaseBusiness, ChartNoAxesCombined, GraduationCap, Laptop } from 'lucide-react';
import { availableProgrammes, naacGrade } from '@/data/institute';
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
    <section aria-labelledby="excellence-title" className="bg-[#eef4ef] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 sm:mb-6">
          <h2 id="excellence-title" className="home-section-title">
            Excellence in Education
          </h2>
          <Link to="/admissions" className="inline-flex items-center gap-2 font-semibold text-[#185d40] underline decoration-[#699480] underline-offset-4 hover:decoration-current">
            Admissions information
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:gap-8">
          <article className="relative isolate flex min-h-48 flex-col justify-between overflow-hidden rounded-xl bg-[#145b3d] p-6 text-white sm:p-8">
            <Award className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-56 w-56 text-white/10" strokeWidth={0.8} aria-hidden="true" />
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-white">
                <Award size={20} className="text-orange-200" aria-hidden="true" />
                NAAC Accreditation
              </h3>
              <p className="home-display-title text-7xl leading-none sm:text-7xl">{naacGrade}</p>
              <p className="mt-1 text-sm font-medium text-green-100">Accreditation grade</p>
            </div>
            <Link to="/naac-iqac" className="mt-4 self-start text-sm font-semibold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white">
              View accreditation details
            </Link>
          </article>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Programmes Available</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {availableProgrammes.map(programme => {
                const Icon = programmeIcons[programme.id];
                return (
                  <li key={programme.id} className="min-w-0">
                    <Link
                      to={programme.href}
                      className="group flex h-full items-start gap-3 rounded-xl border border-[#d6e2d9] bg-white p-4 transition-colors hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] lg:p-5"
                    >
                      <span className="rounded-lg bg-[#eaf4ed] p-2 text-[#177249]">
                        <Icon size={19} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-semibold leading-tight text-[#183d2d]">{programme.name}</span>
                        <span className="mt-1 block text-sm leading-snug text-[#43534a]">{programme.fullName}</span>
                      </span>
                      <ArrowRight size={17} className="mt-1 shrink-0 text-[#177249] motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#177249] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#115c39] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#177249]"
        >
          Apply Now
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
