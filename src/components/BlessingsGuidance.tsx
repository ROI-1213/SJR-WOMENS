import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import chiefPatron from '@/assets/homepage/chief-patron.webp';

export const BlessingsGuidance = () => (
  <section
    aria-labelledby="blessings-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#177249] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
  >
    <div className="mx-auto max-w-[1284px]">
      {/* Section Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
            <span className="home-section-eyebrow tracking-widest text-[#8b6528]">INSPIRATIONAL LEADERSHIP</span>
          </div>
          <h2 id="blessings-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#177249] sm:text-4xl">
            Blessings &amp; Guidance
          </h2>
          <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
            Guiding principles and spiritual benediction of the founders and patron of Sri Jagadguru Renukacharya Education Society.
          </p>
        </div>
      </div>

      {/* Formal Ornate Card */}
      <article className="ornate-patron-card md:grid md:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] md:items-center">
        {/* Left Column: Framed Sacred Portrait */}
        <div className="flex flex-col items-center justify-center border-b border-[#e8e1cf] bg-gradient-to-b from-[#fbf8f0] to-[#f4ecd8] p-8 md:border-b-0 md:border-r md:p-10">
          <div className="patron-portrait-frame">
            <img
              src={chiefPatron}
              alt="Poojya Sri Rambhapuri Jagadgurugalu"
              width={720}
              height={911}
              loading="lazy"
              className="w-full max-w-44 rounded-lg object-cover shadow-sm sm:max-w-52"
            />
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block rounded-full border border-[#c28422]/60 bg-[#c28422]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8b6528]">
              Permanent Chief Patron
            </span>
          </div>
        </div>

        {/* Right Column: Benediction Address */}
        <div className="p-7 sm:p-9 lg:p-11">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#c28422]/40 bg-[#faf6ee] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#8b6528]">
            <Sparkles size={12} className="text-[#c28422]" aria-hidden="true" />
            <span>Patron’s Benediction</span>
          </div>

          <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#177249] sm:text-3xl">
            Poojya Sri Rambhapuri Jagadgurugalu
          </h3>
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-[#73634c]">
            Srimad Rambhapuri Veerasimhasanaadeeshwara, Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru
          </p>

          <p className="mt-4 text-xs leading-relaxed text-[#43534a] sm:text-sm">
            In his message, the Chief Patron reflects on the Society’s dedicated service to education since 1945. He emphasises knowledge, discipline and character, welcoming new approaches to learning grounded in the Society’s rich cultural heritage.
          </p>

          <blockquote className="relative my-5 rounded-xl border-l-4 border-[#c28422] bg-gradient-to-r from-[#faf6ed] to-[#f4ede0] py-4 pl-5 pr-4 text-sm font-medium italic leading-relaxed text-[#177249] shadow-xs sm:text-base">
            <Quote className="mb-1 mr-1.5 inline-block size-4 text-[#c28422] opacity-80" aria-hidden="true" />
            “I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.”
          </blockquote>

          <Link
            to="/about/chief-patrons-message"
            className="inline-flex items-center gap-2 rounded-lg bg-[#ff8c00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#e67e00]"
          >
            <span>Read Chief Patron’s Full Message</span>
            <ArrowRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  </section>
);
