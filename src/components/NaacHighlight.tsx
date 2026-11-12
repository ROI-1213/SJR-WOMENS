import { ArrowUpRight, Award, FileText } from 'lucide-react';
import { accreditation, naacGrade, naacResources } from '@/data/institute';

export const NaacHighlight = () => (
  <section aria-labelledby="home-naac-title" className="bg-[#faf7ef] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1284px] overflow-hidden rounded-xl border border-[#e0ddce] bg-white md:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]">
      <div className="flex flex-col justify-center border-t-4 border-[#ff8c00] bg-[#177249] p-6 text-white sm:p-9">
        <Award size={25} className="text-[#ffbf73]" aria-hidden="true" />
        <p className="home-display-title mt-3 text-7xl leading-none sm:text-8xl">{naacGrade}</p>
        <p className="mt-2 font-medium text-green-50">NAAC grade</p>
      </div>
      <div className="p-6 sm:p-7 lg:px-9 lg:py-7">
        <h2 id="home-naac-title" className="home-section-title">NAAC Accreditation</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-[#43534a]">{accreditation}.</p>
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div><dt className="text-[#43534a]">Assessment cycle</dt><dd className="mt-1 font-semibold">Cycle 4</dd></div>
          <div><dt className="text-[#43534a]">CGPA</dt><dd className="mt-1 font-semibold">2.70</dd></div>
          <div><dt className="text-[#43534a]">Accredited on</dt><dd className="mt-1 font-semibold">12 August 2023</dd></div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce7df] pt-5">
          {naacResources.map(resource => (
            <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 font-semibold text-[#185d40] underline underline-offset-4">
              {resource.pdf ? <FileText size={17} aria-hidden="true" /> : <ArrowUpRight size={17} aria-hidden="true" />}
              {resource.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
