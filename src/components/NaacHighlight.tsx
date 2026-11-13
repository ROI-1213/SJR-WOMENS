import { ArrowUpRight, Award, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { accreditation, naacGrade, naacResources } from '@/data/institute';

export const NaacHighlight = () => (
  <section
    aria-labelledby="home-naac-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#143a29] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
  >
    <div className="mx-auto max-w-[1284px]">
      <div className="naac-banner-card md:grid md:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)]">
        
        {/* Left Plaque */}
        <div className="relative isolate flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#071f14] via-[#0f3322] to-[#071910] p-7 text-white sm:p-9 border-b-2 border-[#c28422] md:border-b-0 md:border-r-2">
          <div className="plaque-ambient-glow" aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
              <Sparkles size={12} className="text-[#dfa03e]" aria-hidden="true" />
              <span>Accreditation</span>
            </div>
            <p className="home-display-title font-serif mt-4 text-7xl font-bold leading-none text-[#dfa03e] drop-shadow-sm sm:text-8xl">
              {naacGrade}
            </p>
            <p className="mt-2 text-sm font-bold tracking-wide text-white">NAAC Grade · Cycle 4</p>
          </div>

          <div className="relative z-10 mt-6 border-t border-white/15 pt-4">
            <div className="flex items-center gap-2 text-xs text-white/90">
              <CheckCircle2 size={14} className="text-[#dfa03e] shrink-0" />
              <span>Valid: 10 Apr 2023 – 09 Apr 2028</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/75">
              <ShieldCheck size={14} className="text-[#dfa03e] shrink-0" />
              <span>CGPA: 2.95 on 4-Point Scale</span>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="p-7 sm:p-9 lg:px-11 lg:py-10">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8b6528]">Institutional Quality &amp; Assurance</span>
          </div>

          <h2 id="home-naac-title" className="home-section-title font-serif text-2xl font-bold tracking-tight text-[#143a29] sm:text-3xl">
            NAAC Accreditation &amp; Quality Metrics
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#43534a] sm:text-sm">
            {accreditation}.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-[#dce4dd] bg-[#f8faf8] p-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#67776f]">Current Cycle</dt>
              <dd className="mt-1 text-sm font-bold text-[#143a29]">Cycle 4 (B++ · CGPA 2.95)</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#67776f]">Validity Period</dt>
              <dd className="mt-1 text-sm font-bold text-[#143a29]">10 Apr 2023 – 09 Apr 2028</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#67776f]">Previous Cycle 3</dt>
              <dd className="mt-1 text-sm font-bold text-[#143a29]">A Grade · CGPA 3.09</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#e2dcce] pt-5">
            {naacResources.map(resource =>
              resource.pdf ? (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-shine group inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#c28422]/40 bg-[#faf6ee] px-4 py-2 text-xs font-bold text-[#143a29] transition-all hover:border-[#c28422] hover:bg-[#143a29] hover:text-white"
                >
                  <FileText size={14} className="text-[#c28422] group-hover:text-white" aria-hidden="true" />
                  <span>{resource.label}</span>
                </a>
              ) : (
                <Link
                  key={resource.href}
                  to={resource.href}
                  className="inline-flex min-h-10 items-center gap-1.5 text-xs font-bold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
                >
                  <ArrowUpRight size={14} className="text-[#c28422]" aria-hidden="true" />
                  <span>{resource.label}</span>
                </Link>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  </section>
);
