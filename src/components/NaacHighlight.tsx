import { ArrowUpRight, Award, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { accreditation, naacGrade, naacResources } from '@/data/institute';

export const NaacHighlight = () => (
  <section aria-labelledby="home-naac-title" className="bg-[#fbfaf6] px-5 home-section text-[#143a29] sm:px-8 lg:px-12 border-y border-[#e5dfce]">
    <div className="mx-auto grid max-w-[1284px] overflow-hidden rounded-xl border border-[#d6cfb8] bg-white shadow-sm md:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)]">
      <div className="flex flex-col justify-center border-t-4 border-[#c28422] bg-[#123625] p-6 text-white sm:p-9">
        <div className="flex items-center gap-2 text-[#dfa03e]">
          <Award size={26} aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#dfa03e]">Accredited</span>
        </div>
        <p className="home-display-title mt-4 text-7xl leading-none font-bold text-white sm:text-8xl">{naacGrade}</p>
        <p className="mt-2 text-sm font-medium tracking-wide text-emerald-100/90">NAAC Grade · Cycle 4</p>
        <div className="mt-4 pt-3 border-t border-white/15 text-xs text-emerald-100/75 flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-[#dfa03e] shrink-0" />
          <span>Valid 2023 – 2028</span>
        </div>
      </div>
      <div className="p-6 sm:p-8 lg:px-10 lg:py-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">Institutional Quality &amp; Assurance</span>
        </div>
        <h2 id="home-naac-title" className="home-section-title text-[#143a29]">NAAC Accreditation &amp; Quality Metrics</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#43534a]">{accreditation}.</p>
        <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 rounded-lg border border-[#e4ded0] bg-[#faf8f2] p-4 text-sm">
          <div>
            <dt className="text-xs text-[#67776f]">Latest Cycle</dt>
            <dd className="mt-1 font-semibold text-[#143a29]">Cycle 4 (B++ · CGPA 2.95)</dd>
          </div>
          <div>
            <dt className="text-xs text-[#67776f]">Validity Period</dt>
            <dd className="mt-1 font-semibold text-[#143a29]">10 Apr 2023 – 09 Apr 2028</dd>
          </div>
          <div>
            <dt className="text-xs text-[#67776f]">Previous Cycle 3</dt>
            <dd className="mt-1 font-semibold text-[#143a29]">A Grade · CGPA 3.09</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e2dcce] pt-4">
          {naacResources.map(resource =>
            resource.pdf ? (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#143a29] transition-colors hover:text-[#8b6528] underline underline-offset-4 decoration-[#c28422]/60 hover:decoration-[#c28422]"
              >
                <FileText size={16} className="text-[#8b6528]" aria-hidden="true" />
                {resource.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                key={resource.href}
                to={resource.href}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#143a29] transition-colors hover:text-[#8b6528] underline underline-offset-4 decoration-[#c28422]/60 hover:decoration-[#c28422]"
              >
                <ArrowUpRight size={16} className="text-[#8b6528]" aria-hidden="true" />
                {resource.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  </section>
);
