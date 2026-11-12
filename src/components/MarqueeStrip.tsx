import { Link } from 'react-router-dom';

export const MarqueeStrip = () => {
  const content = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap px-8">
      <span>Welcome to Sri Jagadguru Renukacharya College of Science, Arts & Commerce</span>
      <span className="mx-4">|</span>
      <Link
        to="/admissions/online-application"
        className="underline underline-offset-2 hover:text-amber-300 transition-colors"
      >
        Admission Open for 2026-27 Batch — Apply Now
      </Link>
      <span className="mx-4">|</span>
    </span>
  );

  return (
    <div className="w-full overflow-hidden bg-[#177249]">
      <div className="py-2.5 text-sm font-semibold text-white md:text-base">
        <div className="animate-marquee inline-flex">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
