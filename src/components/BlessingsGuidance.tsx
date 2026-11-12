import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import chiefPatron from '@/assets/homepage/chief-patron.webp';

export const BlessingsGuidance = () => (
  <section aria-labelledby="blessings-title" className="bg-[#faf7ef] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <h2 id="blessings-title" className="home-section-title mb-5 sm:mb-6">
        Blessings &amp; Guidance
      </h2>
      <article className="grid gap-6 rounded-xl border border-[#e6dfcf] bg-white p-5 sm:p-7 md:grid-cols-[minmax(0,0.58fr)_minmax(0,1.42fr)] md:items-center md:gap-7 lg:p-7">
        <img
          src={chiefPatron}
          alt="Poojya Sri Rambhapuri Jagadgurugalu"
          width={720}
          height={911}
          loading="lazy"
          className="mx-auto w-full max-w-44 rounded-lg object-cover sm:max-w-52 md:mx-0 md:max-w-56"
        />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#177249]">Permanent Chief Patron</p>
          <h3 className="home-display-title mt-2 text-2xl leading-tight lg:text-[1.65rem]">Poojya Sri Rambhapuri Jagadgurugalu</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#43534a]">
            Srimad Rambhapuri Veerasimhasanaadeeshwara, Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru
          </p>
          <p className="mt-4 leading-relaxed text-[#43534a]">
            In his message, the Chief Patron reflects on the Society’s service to education since 1945. He emphasises knowledge, discipline and character, and welcomes new approaches to learning grounded in the Society’s heritage.
          </p>
          <blockquote className="my-4 border-l-2 border-[#ff8c00] pl-4 text-lg leading-relaxed text-[#183c2b]">
            “I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.”
          </blockquote>
          <Link to="/about/chief-patrons-message" className="inline-flex items-center gap-2 text-sm font-semibold text-[#185d40] underline underline-offset-4 hover:text-[#177249]">
            Read More
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  </section>
);
