import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/sjr-administrative-block.jpg';

export const JoinCommunity = () => (
  <section aria-labelledby="community-title" className="border-b border-[#dde5de] bg-[#fbfaf6] px-5 home-section sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1284px] overflow-hidden rounded-2xl border-2 border-[#1e4d36] bg-gradient-to-br from-[#0c2619] via-[#133c28] to-[#081a11] text-white shadow-xl md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c28422]/50 bg-[#c28422]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#dfa03e] shadow-xs">
          <MapPin size={14} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
          <span>Rajajinagar, Bengaluru – 560010</span>
        </div>

        <h2 id="community-title" className="home-display-title mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
          Join Our Academic Community
        </h2>

        <p className="mt-3.5 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
          Get to know our experienced faculty, explore university-recognized laboratories and library resources, or speak with our admissions desk for personalized guidance.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            to="/admissions"
            className="group inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-[#dfa03e]/40 bg-gradient-to-r from-[#dfa03e] to-[#c28422] px-6 py-3 text-sm font-bold text-[#0c2619] shadow-lg transition-all duration-300 hover:from-[#eec068] hover:to-[#d0912c] hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>Explore Admissions</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#dfa03e] hover:bg-white/15 hover:text-[#dfa03e] hover:-translate-y-0.5"
          >
            <span>Contact College Office</span>
          </Link>
        </div>
      </div>

      <div className="relative min-h-56 sm:min-h-72">
        <img
          src={campus}
          alt="SJR College for Women administrative block"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081a11]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-[#0c2619] md:via-transparent" />
      </div>
    </div>
  </section>
);
