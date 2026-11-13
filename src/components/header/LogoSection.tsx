import { Link } from 'react-router-dom';
import { instituteName, instituteNameKannada } from '@/data/institute';

export const LogoSection = () => (
  <div className="border-b border-gray-200 bg-white px-3 py-1.5 sm:px-6 lg:py-3">
    <Link
      to="/"
      className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_repeat(3,clamp(3rem,10vw,4.75rem))_minmax(0,1fr)] items-center gap-x-2 gap-y-0.5 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] sm:gap-x-3 lg:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto] lg:gap-x-5 xl:gap-x-8"
    >
      <img
        src="/branding/left.png"
        alt=""
        width={114}
        height={156}
        className="col-start-2 row-start-1 mx-auto h-[clamp(2.5rem,10vw,4rem)] w-auto max-w-full object-contain lg:col-start-1 lg:h-[88px]"
      />
      <div className="col-span-5 row-start-2 min-w-0 lg:col-span-1 lg:col-start-2 lg:row-start-1">
        <p lang="en" className="mx-auto text-[15px] text-balance font-semibold leading-snug text-[#101e50] sm:text-lg max-lg:max-w-[36rem] max-lg:!leading-tight xl:text-xl">
          {instituteName}
        </p>
      </div>
      <img
        src="/branding/center.png"
        alt=""
        width={600}
        height={599}
        className="col-start-3 row-start-1 mx-auto h-[clamp(3rem,11vw,4.75rem)] w-auto max-w-full object-contain lg:h-24"
      />
      <div className="hidden min-w-0 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:block">
        <p lang="kn" className="mx-auto text-[15px] text-balance font-kannada font-semibold leading-relaxed text-[#101e50] sm:text-lg max-lg:max-w-[36rem] xl:text-xl">
          {instituteNameKannada}
        </p>
      </div>
      <img
        src="/branding/right.png"
        alt=""
        width={130}
        height={161}
        className="col-start-4 row-start-1 mx-auto h-[clamp(2.5rem,10vw,4rem)] w-auto max-w-full object-contain lg:col-start-5 lg:h-[88px]"
      />
    </Link>
  </div>
);
