import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import campus from '@/assets/sjr-administrative-block.jpg';

export const JoinCommunity = () => (
  <section aria-labelledby="community-title" className="bg-white px-5 home-section home-section--connected sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1284px] overflow-hidden rounded-xl bg-[#183c2b] text-white md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="p-5 sm:p-6 lg:p-8">
        <p className="mb-3 flex items-center gap-2 text-sm font-medium text-green-50">
          <MapPin size={17} className="shrink-0 text-orange-200" aria-hidden="true" />
          Anand Rao Circle, Bengaluru
        </p>
        <h2 id="community-title" className="home-section-title home-section-title--light">Join Our Community</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-green-50/90">
          Get to know the campus, ask about your programme, or find out what to prepare for your application.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link to="/admissions" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#185d40] hover:bg-green-50">
            Explore admissions
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/contact" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-orange-200 underline-offset-4 hover:decoration-white">
            Contact the college
          </Link>
        </div>
      </div>
      <div className="relative min-h-40 sm:min-h-52">
        <img src={campus} alt="The college’s administrative block" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
      </div>
    </div>
  </section>
);
