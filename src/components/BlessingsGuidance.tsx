import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import chiefPatron from '@/assets/homepage/chief-patron.webp';

export const BlessingsGuidance = () => (
  <section
    aria-labelledby="blessings-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-10 text-[#177249] sm:px-8 sm:py-12 lg:px-12"
  >
    <div className="mx-auto max-w-[1284px]">
      {/* Section Header */}
      <div className="mb-6">
        <h2 id="blessings-title" className="font-sans text-2xl font-bold tracking-tight text-[#177249] sm:text-3xl">
          Blessings &amp; Guidance
        </h2>
      </div>

      {/* Clean White Card matching reference */}
      <article className="rounded-2xl border border-[#e2e8e4] bg-white p-6 shadow-sm sm:p-8 lg:p-10 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-8 lg:gap-10 items-start">
        {/* Left Column: Portrait */}
        <div className="shrink-0 mb-6 md:mb-0">
          <img
            src={chiefPatron}
            alt="Poojya Sri Rambhapuri Jagadgurugalu"
            width={720}
            height={911}
            loading="lazy"
            className="w-48 sm:w-56 md:w-60 rounded-xl object-cover shadow-xs"
          />
        </div>

        {/* Right Column: Benediction Address */}
        <div>
          <span className="text-xs sm:text-sm font-semibold text-[#177249]">
            Permanent Chief Patron
          </span>

          <h3 className="mt-1 font-serif text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
            Poojya Sri Rambhapuri Jagadgurugalu
          </h3>

          <p className="mt-1.5 text-xs font-normal leading-relaxed text-[#52645a]">
            Srimad Rambhapuri Veerasimhasanaadeeshwara, Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru
          </p>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#43534a]">
            In his message, the Chief Patron reflects on the Society’s service to education since 1945. He emphasises knowledge, discipline and character, and welcomes new approaches to learning grounded in the Society’s heritage.
          </p>

          <blockquote className="my-5 border-l-2 border-[#c28422] pl-4 py-0.5 text-xs sm:text-sm leading-relaxed text-[#43534a]">
            “I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.”
          </blockquote>

          <Link
            to="/about/chief-patrons-message"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[#177249]"
          >
            <span className="underline underline-offset-4">Read More</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  </section>
);
