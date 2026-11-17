import { useState } from 'react';
import { ArrowUpRight, Pause, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const recruiters = [
  { name: 'Infosys', logo: '/images/placements/infosys.jpg' },
  { name: 'TCS', logo: '/images/placements/tcs.png' },
  { name: 'Wipro', logo: '/images/placements/wipro.png' },
  { name: 'Accenture', logo: '/images/placements/accenture.png' },
  { name: 'Capgemini', logo: '/images/placements/capgemini.png' },
  { name: 'Amazon', logo: '/images/placements/amazon.png' },
  { name: 'DXC Technology', logo: '/images/placements/dxc.png' },
  { name: 'SAP', logo: '/images/placements/sap.png' },
  { name: 'Concentrix', logo: '/images/placements/concentrix.png' },
  { name: 'SLK', logo: '/images/placements/slk.png' },
  { name: 'UnitedHealth Group', logo: '/images/placements/unitedhealthgroup.jpg' },
  { name: 'Q-Spiders', logo: '/images/placements/qspiders.jpg' },
];

export const RecruiterMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const ScrollIcon = isPaused ? Play : Pause;

  return (
    <div className="mt-8 border-t border-[#dce4dd] pt-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div>
          <h3 id="recruiters-title" className="text-lg font-bold text-[#177249] sm:text-xl">
            Recruiting Partners &amp; Industry Associations
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#52645a]">
            Leading IT, banking, and corporate recruiters participating in SJR College for Women campus hiring.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            to="/placements"
            className="group inline-flex min-h-9 items-center gap-1.5 text-xs sm:text-sm font-bold text-[#177249] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#ff8c00]"
          >
            <span>All Recruiting Companies</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#ff8c00]" aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-controls="recruiter-logos"
            aria-label={isPaused ? 'Resume logo scrolling' : 'Pause logo scrolling'}
            onClick={() => setIsPaused(paused => !paused)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-[#d2dcd3] bg-white text-[#177249] shadow-xs hover:bg-[#eef5f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] motion-reduce:hidden"
          >
            <ScrollIcon size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="recruiter-logos" className="recruiter-viewport" tabIndex={0} role="group" aria-label="Recruiter logos">
        <div className="recruiter-track" data-paused={isPaused}>
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className="recruiter-list">
              {recruiters.map(company => (
                <li
                  key={company.name}
                  className="recruiter-tile group relative flex min-h-[6.75rem] flex-col items-center justify-center gap-2 rounded-xl border border-[#dce4dd] bg-white px-5 py-4 shadow-xs hover:border-[#177249] hover:shadow-md transition-all duration-300"
                >
                  <img src={company.logo} alt="" decoding="async" className="h-12 sm:h-14 w-full max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105" />
                  <span className="text-center text-xs sm:text-sm font-bold text-[#177249]">
                    {company.name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
