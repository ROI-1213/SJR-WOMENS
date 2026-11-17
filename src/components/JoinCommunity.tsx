import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/sjr-administrative-block.jpg';

export const JoinCommunity = () => (
  <section
    aria-labelledby="community-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
  >
    <div className="mx-auto max-w-[1284px] overflow-hidden rounded-xl bg-[#173c2b] shadow-md grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div className="relative z-10 flex flex-col justify-center px-6 py-5 sm:px-8 sm:py-6 lg:px-9 lg:py-6">
        <div className="flex items-center gap-1.5 text-xs text-white/90">
          <MapPin size={13} className="shrink-0 text-white" aria-hidden="true" />
          <span>Rajajinagar, Bengaluru</span>
        </div>
        <div className="mt-1.5 h-0.5 w-6 rounded-full bg-[#c28422]" aria-hidden="true" />

        <h2 id="community-title" className="mt-2 font-sans text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
          Join Our Community
        </h2>

        <p className="mt-1.5 max-w-md text-xs sm:text-[13px] leading-relaxed text-white/85">
          Get to know the campus, ask about your programme, or find out what to prepare for your application.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#173c2b] shadow-xs transition-all hover:bg-neutral-100"
          >
            <span>Explore admissions</span>
            <ArrowRight size={14} className="text-[#173c2b] transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            to="/contact"
            className="text-xs sm:text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Contact the college
          </Link>
        </div>
      </div>

      <div className="relative min-h-44 sm:min-h-52 md:min-h-full">
        <img
          src={campus}
          alt="SJR College for Women administrative block"
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  </section>
);
