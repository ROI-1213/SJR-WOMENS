import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/sjr-administrative-block.jpg';

export const JoinCommunity = () => (
  <section
    aria-labelledby="community-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
  >
    <div className="mx-auto grid max-w-[1284px] community-banner-card md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="relative z-10 flex flex-col justify-center p-7 sm:p-9 lg:p-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c28422]/50 bg-[#c28422]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e] shadow-2xs backdrop-blur-xs">
          <MapPin size={13} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
          <span>Rajajinagar, Bengaluru – 560010</span>
        </div>

        <h2 id="community-title" className="home-display-title mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
          Join Our Academic Community
        </h2>

        <p className="mt-3.5 max-w-lg text-xs leading-relaxed text-white/85 sm:text-sm">
          Get to know our experienced faculty, explore university-recognized laboratories and library resources, or speak with our admissions desk for personalized guidance.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3.5">
          <Link
            to="/admissions"
            className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ff8c00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#e67e00]"
          >
            <span>Explore Admissions</span>
            <ArrowRight size={15} className="text-white transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-transparent bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#177249] shadow-sm transition-all hover:bg-neutral-100"
          >
            <span>Contact College Office</span>
          </Link>
        </div>
      </div>

      <div className="group/img relative min-h-60 overflow-hidden sm:min-h-72 md:min-h-full">
        <img
          src={campus}
          alt="SJR College for Women administrative block"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e4b30]/85 via-transparent to-transparent md:bg-gradient-to-r md:from-[#0e4b30] md:via-transparent" />
      </div>
    </div>
  </section>
);
