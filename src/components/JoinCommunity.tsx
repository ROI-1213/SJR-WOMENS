import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/sjr-administrative-block.jpg';

export const JoinCommunity = () => (
  <section aria-labelledby="community-title" className="border-b border-[#e1e6e1] bg-white px-5 home-section sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1284px] overflow-hidden rounded-xl border border-[#23583e] bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0e2c1e] text-white shadow-md md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#dfa03e]">
          <MapPin size={16} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
          Rajajinagar, Bengaluru – 560010
        </p>
        <h2 id="community-title" className="home-display-title text-3xl font-normal leading-tight text-white sm:text-4xl">
          Join Our Academic Community
        </h2>
        <p className="mt-3.5 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
          Get to know our faculty, explore campus facilities and laboratories, or contact our admissions desk for application guidance.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            to="/admissions"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-[#143a29] shadow-sm transition-all hover:bg-[#faf7ee] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Admissions
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-[#dfa03e] underline-offset-4 transition-colors hover:text-[#dfa03e]"
          >
            Contact College Office
          </Link>
        </div>
      </div>
      <div className="relative min-h-48 sm:min-h-60">
        <img
          src={campus}
          alt="SJR College for Women administrative block"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e2c1e]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-[#123625] md:via-transparent" />
      </div>
    </div>
  </section>
);
