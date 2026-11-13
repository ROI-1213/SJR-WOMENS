import { ArrowUpRight, Award, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { accreditation, naacGrade, naacResources } from '@/data/institute';

export const NaacHighlight = () => (
  <section aria-labelledby="home-naac-title" className="bg-[#fcfbf7] px-5 home-section text-[#143a29] sm:px-8 lg:px-12 border-b border-[#e5dfce]">
    <div className="mx-auto max-w-[1284px]">
      <div className="overflow-hidden rounded-2xl border-2 border-[#dcd6c5] bg-white shadow-xl md:grid md:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)]">
        
        {/* Left Plaque */}
        <div className="flex flex-col justify-between border-t-4 border-[#c28422] bg-gradient-to-br from-[#0c2619] via-[#133c28] to-[#081a11] p-7 text-white sm:p-9">
          <div>
            <div className="flex items-center gap-2 text-[#dfa03e]">
              <Award size={26} aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#dfa03e]">Accredited</span>
            </div>
            <p className="home-display-title mt-4 text-7xl leading-none font-bold text-[#dfa03e] drop-shadow sm:text-8xl">
              {naacGrade}
            </p>
            <p className="mt-2 text-sm font-semibold tracking-wide text-white">NAAC Grade · Cycle 4</p>
          </div>

          <div className="mt-6 border-t border-white/15 pt-4">
            <div className="flex items-center gap-2 text-xs text-white/85">
              <CheckCircle2 size={15} className="text-[#dfa03e] shrink-0" />
              <span>Valid: 10 Apr 2023 – 09 Apr 2028</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck size={15} className="text-[#dfa03e] shrink-0" />
              <span>CGPA: 2.95 (4-Point Scale)</span>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="p-7 sm:p-9 lg:px-11 lg:py-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#935e12]">Institutional Quality &amp; Assurance</span>
          </div>

          <h2 id="home-naac-title" className="home-section-title text-[#143a29]">
            NAAC Accreditation &amp; Quality Metrics
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#43534a]">
            {accreditation}.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 rounded-xl border border-[#e4ded0] bg-[#faf8f2] p-4 text-sm">
            <div>
              <dt className="text-xs font-medium text-[#67776f]">Current Cycle</dt>
              <dd className="mt-1 font-bold text-[#143a29]">Cycle 4 (B++ · CGPA 2.95)</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[#67776f]">Validity Period</dt>
              <dd className="mt-1 font-bold text-[#143a29]">10 Apr 2023 – 09 Apr 2028</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[#67776f]">Previous Cycle 3</dt>
              <dd className="mt-1 font-bold text-[#143a29]">A Grade · CGPA 3.09</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e2dcce] pt-5">
            {naacResources.map(resource =>
              resource.pdf ? (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#c28422]/30 bg-[#faf6ee] px-4 py-2 text-xs font-bold text-[#143a29] transition-all hover:border-[#c28422] hover:bg-[#c28422] hover:text-white"
                >
                  <FileText size={15} className="text-[#c28422] group-hover:text-white" aria-hidden="true" />
                  <span>{resource.label}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  key={resource.href}
                  to={resource.href}
                  className="inline-flex min-h-10 items-center gap-1.5 text-xs font-bold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
                >
                  <ArrowUpRight size={15} className="text-[#c28422]" aria-hidden="true" />
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
