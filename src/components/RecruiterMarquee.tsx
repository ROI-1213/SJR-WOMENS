import { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import infosys from '@/assets/homepage/infosys.svg';
import tcs from '@/assets/recruiter-tcs.jpg';
import capgemini from '@/assets/homepage/capgemini.svg';
import techMahindra from '@/assets/homepage/tech-mahindra.svg';
import standardChartered from '@/assets/homepage/standard-chartered.svg';
import iciciPrudential from '@/assets/homepage/icici-prudential.webp';

const recruiters = [
  { name: 'Infosys', logo: infosys },
  { name: 'TCS', logo: tcs },
  { name: 'Capgemini', logo: capgemini },
  { name: 'Tech Mahindra', logo: techMahindra },
  { name: 'Standard Chartered', logo: standardChartered },
  { name: 'ICICI Prudential Life', logo: iciciPrudential, currentName: 'ICICI Life Insurance' },
];

export const RecruiterMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const ScrollIcon = isPaused ? Play : Pause;

  return (
    <section aria-labelledby="recruiters-title" className="mt-6 border-t border-[#d2e0d4] pt-5 sm:mt-7">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div>
          <h3 id="recruiters-title" className="home-section-title home-section-title--small">Our Top Recruiters</h3>
          <p className="mt-2 text-sm text-[#43534a]">Employers listed in the college’s campus and off-campus placement records.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link to="/placements/companies" className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#185d40] underline underline-offset-4">
            Recruiting companies <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-controls="recruiter-logos"
            aria-label={isPaused ? 'Resume logo scrolling' : 'Pause logo scrolling'}
            onClick={() => setIsPaused(paused => !paused)}
            className="grid h-10 w-10 place-items-center rounded-md border border-[#d7e5d9] bg-white text-[#177249] hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] motion-reduce:hidden"
          >
            <ScrollIcon size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="recruiter-logos" className="recruiter-viewport" tabIndex={0} role="group" aria-label="Recruiter logos">
        <div className="recruiter-track" data-paused={isPaused}>
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className="recruiter-list">
              {recruiters.map(company => (
                <li key={company.name} className="recruiter-tile relative flex min-h-[5.25rem] flex-col items-center justify-center gap-1.5 rounded-lg border border-[#d7e5d9] bg-white px-3 py-2.5 hover:border-[#177249] motion-safe:transition-colors">
                  <img src={company.logo} alt="" decoding="async" className="h-9 w-full max-w-32 object-contain" />
                  <span className="text-center text-xs font-semibold text-[#43534a]">
                    {company.name}
                    {company.currentName && <span className="sr-only">, now {company.currentName}</span>}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};
