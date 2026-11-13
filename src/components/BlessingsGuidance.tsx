import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import chiefPatron from '@/assets/homepage/chief-patron.webp';

export const BlessingsGuidance = () => (
  <section aria-labelledby="blessings-title" className="border-b border-[#e5dfce] bg-[#fdfbf7] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="home-section-eyebrow">
            Inspirational Leadership
          </span>
          <h2 id="blessings-title" className="home-section-title mt-1.5">
            Blessings &amp; Guidance
          </h2>
          <p className="mt-1 text-sm text-[#54685b]">
            Guiding principles and spiritual blessings of the founders and patron of Sri Jagadguru Renukacharya Education Society.
          </p>
        </div>
      </div>

      <article className="overflow-hidden rounded-2xl border-2 border-[#e0d8c3] bg-white shadow-lg md:grid md:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] md:items-center">
        {/* Left Column: Framed Sacred Portrait */}
        <div className="flex flex-col items-center justify-center border-b border-[#e8e1cf] bg-gradient-to-b from-[#fbf8f0] to-[#f4ecd8] p-7 md:border-b-0 md:border-r md:p-8">
          <div className="relative rounded-2xl border-4 border-[#c28422]/70 bg-white p-2 shadow-md ring-2 ring-[#c28422]/30">
            <img
              src={chiefPatron}
              alt="Poojya Sri Rambhapuri Jagadgurugalu"
              width={720}
              height={911}
              loading="lazy"
              className="w-full max-w-48 rounded-xl object-cover shadow-sm sm:max-w-56"
            />
          </div>
          <div className="mt-3.5 text-center">
            <span className="inline-block rounded-full border border-[#c28422]/50 bg-[#c28422]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#935e12]">
              Permanent Chief Patron
            </span>
          </div>
        </div>

        {/* Right Column: Benediction Address */}
        <div className="p-7 sm:p-9 lg:p-10">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-[#c28422]/30 bg-[#faf6ee] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#935e12]">
            <Sparkles size={13} className="text-[#c28422]" aria-hidden="true" />
            <span>Patron’s Benediction</span>
          </div>

          <h3 className="home-display-title mt-3 text-2xl font-normal leading-tight text-[#102d20] lg:text-[1.85rem]">
            Poojya Sri Rambhapuri Jagadgurugalu
          </h3>
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-[#73634c]">
            Srimad Rambhapuri Veerasimhasanaadeeshwara, Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#43534a]">
            In his message, the Chief Patron reflects on the Society’s dedicated service to education since 1945. He emphasises knowledge, discipline and character, welcoming new approaches to learning grounded in the Society’s rich cultural heritage.
          </p>

          <blockquote className="relative my-5 rounded-xl border-l-4 border-[#c28422] bg-gradient-to-r from-[#fbf8f0] to-[#f8f5eb] py-4 pl-5 pr-4 text-base italic leading-relaxed text-[#143a29] shadow-xs">
            <Quote className="mb-1 inline-block size-4 text-[#c28422] opacity-75" aria-hidden="true" />
            “I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.”
          </blockquote>

          <Link
            to="/about/chief-patrons-message"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Read Chief Patron’s Full Message</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 text-[#c28422]" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  </section>
);
