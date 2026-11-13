import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import chiefPatron from '@/assets/homepage/chief-patron.webp';

export const BlessingsGuidance = () => (
  <section aria-labelledby="blessings-title" className="border-b border-[#e5e1d5] bg-[#faf8f2] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
          Inspirational Leadership
        </span>
        <h2 id="blessings-title" className="home-section-title mt-1">
          Blessings &amp; Guidance
        </h2>
      </div>

      <article className="grid gap-6 rounded-xl border border-[#e2dcce] bg-white p-6 shadow-sm md:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)] md:items-center md:gap-8 lg:p-8">
        <div className="flex flex-col items-center">
          <div className="relative rounded-xl border-2 border-[#c28422]/60 p-1.5 shadow-sm">
            <img
              src={chiefPatron}
              alt="Poojya Sri Rambhapuri Jagadgurugalu"
              width={720}
              height={911}
              loading="lazy"
              className="w-full max-w-48 rounded-lg object-cover sm:max-w-56"
            />
          </div>
          <p className="mt-2 text-center text-xs font-semibold text-[#143a29]">
            Permanent Chief Patron
          </p>
        </div>

        <div className="max-w-3xl">
          <span className="inline-block rounded bg-[#eef4ef] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#143a29]">
            Patron’s Benediction
          </span>
          <h3 className="home-display-title mt-2 text-2xl font-normal leading-tight text-[#123324] lg:text-[1.75rem]">
            Poojya Sri Rambhapuri Jagadgurugalu
          </h3>
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-[#685e4c]">
            Srimad Rambhapuri Veerasimhasanaadeeshwara, Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#43534a]">
            In his message, the Chief Patron reflects on the Society’s service to education since 1945. He emphasises knowledge, discipline and character, and welcomes new approaches to learning grounded in the Society’s heritage.
          </p>

          <blockquote className="relative my-4 rounded-lg border-l-4 border-[#c28422] bg-[#faf8f2] py-3 pl-4 pr-3 text-base italic leading-relaxed text-[#143a29]">
            <Quote className="mb-1 inline-block size-4 text-[#c28422] opacity-60" aria-hidden="true" />
            “I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.”
          </blockquote>

          <Link
            to="/about/chief-patrons-message"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
          >
            Read Chief Patron’s Full Message
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  </section>
);
