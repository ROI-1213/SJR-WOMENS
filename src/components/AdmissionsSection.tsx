import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Award, BriefcaseBusiness, ChartNoAxesCombined, GraduationCap, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import { availableProgrammes, naacGrade, naacCycleLabel } from '@/data/institute';
import { AdmissionDialog } from './AdmissionDialog';

const programmeIcons = {
  bsc: Atom,
  bcom: ChartNoAxesCombined,
  bba: BriefcaseBusiness,
  bca: Laptop,
  mcom: GraduationCap,
};

const programmeTags: Record<string, string> = {
  bsc: 'Faculty of Science',
  bcom: 'Faculty of Commerce',
  bba: 'Faculty of Management',
  bca: 'Faculty of Computing',
  mcom: 'Postgraduate Studies',
};

export const AdmissionsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section aria-labelledby="excellence-title" className="border-b border-[#dde5de] bg-[#fdfcf9] px-5 home-section text-[#143a29] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <span className="home-section-eyebrow">
              Academic Offerings &amp; Accreditation
            </span>
            <h2 id="excellence-title" className="home-section-title mt-1.5">
              Excellence in Education
            </h2>
            <p className="mt-1 text-sm text-[#4b6154]">
              Degree courses structured under Bengaluru City University with continuous mentoring, skill labs, and career pathways.
            </p>
          </div>
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Admissions Information &amp; Guidelines</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 text-[#c28422]" aria-hidden="true" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8">
          
          {/* Executive NAAC Accreditation Plaque Card */}
          <article className="plaque-card relative isolate flex min-h-64 flex-col justify-between overflow-hidden p-7 text-white shadow-xl sm:p-9">
            {/* Watermark Crest */}
            <Award className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-64 w-64 text-white/[0.05]" strokeWidth={0.7} aria-hidden="true" />
            
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                <Sparkles size={14} className="text-[#dfa03e]" aria-hidden="true" />
                <span>Institutional Accreditation</span>
              </div>

              {/* Large Grade Display */}
              <div className="flex items-baseline gap-3">
                <p className="home-display-title text-7xl font-normal leading-none tracking-tight text-[#dfa03e] drop-shadow sm:text-8xl">
                  {naacGrade}
                </p>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white">Grade Level</span>
                  <span className="text-xs text-white/70">Cycle 4 (2023–2028)</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3 text-xs text-white/85">
                <CheckCircle2 size={15} className="text-[#dfa03e] shrink-0" />
                <span>Institutional CGPA: <strong>2.95</strong> on a 4-point scale</span>
              </div>
            </div>

            <Link
              to="/naac"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-[#dfa03e]/40 bg-[#dfa03e]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#dfa03e] transition-all hover:bg-[#dfa03e] hover:text-[#0c2619]"
            >
              <span>View Accreditation Records &amp; AQAR</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </article>

          {/* Programmes Grid */}
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-[#dde5de] pb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#143a29]">
                Available Programmes
              </h3>
              <span className="rounded-full bg-[#eef5f0] px-2.5 py-0.5 text-[11px] font-semibold text-[#143a29]">
                Affiliated to BCU
              </span>
            </div>

            <ul className="grid gap-3.5 sm:grid-cols-2">
              {availableProgrammes.map((programme, idx) => {
                const Icon = programmeIcons[programme.id];
                const tag = programmeTags[programme.id] || 'Degree Programme';
                return (
                  <li key={programme.id} className={`min-w-0 stagger-${(idx % 5) + 1}`}>
                    <Link
                      to={programme.href}
                      className="luxury-glass-card group flex h-full flex-col justify-between p-5 transition-all duration-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#c4dcce] bg-gradient-to-br from-[#eef5f0] to-[#e0ede4] text-[#143a29] shadow-xs transition-colors group-hover:bg-[#143a29] group-hover:text-white">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <span className="rounded-full bg-[#f4f7f4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#486353]">
                            {tag}
                          </span>
                        </div>
                        
                        <div className="mt-3">
                          <span className="block text-lg font-bold leading-tight text-[#143a29] group-hover:text-[#185e3c]">
                            {programme.name}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-[#566c5f]">
                            {programme.fullName}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-[#f0f4f0] pt-2 text-xs font-semibold text-[#143a29]">
                        <span className="text-[11px] text-[#718579]">3-Year / 4-Year Honors</span>
                        <span className="inline-flex items-center gap-1 text-[#c28422] transition-transform group-hover:translate-x-1">
                          Curriculum <ArrowRight size={13} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Admissions CTA Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#d5ded7] bg-gradient-to-r from-[#edf4ef] via-[#f7faf8] to-[#edf4ef] p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#143a29] text-[#dfa03e]">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#143a29]">Ready to Begin Your Academic Journey?</p>
              <p className="text-xs text-[#52645a]">Admissions are open for the academic session 2024–25. Direct counselling is available on campus.</p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="luxury-btn-shine inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#dfa03e]/40 bg-gradient-to-r from-[#143a29] to-[#0d2a1c] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
          >
            <span>Apply Online for Admission</span>
            <ArrowRight size={16} className="text-[#dfa03e]" aria-hidden="true" />
          </button>
        </div>

      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
