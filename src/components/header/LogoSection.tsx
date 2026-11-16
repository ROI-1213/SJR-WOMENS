import { Link } from 'react-router-dom';
import { accreditation, instituteNameKannada } from '@/data/institute';

export const LogoSection = () => (
  <div className="border-b border-gray-200 bg-white px-3 py-2 sm:px-6 lg:py-3">
    <Link
      to="/"
      className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_repeat(3,clamp(3rem,10vw,4.75rem))_minmax(0,1fr)] items-center gap-x-2 gap-y-1 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153c2a] sm:gap-x-3 lg:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto] lg:gap-x-5 xl:gap-x-8"
    >
      <img
        src="/branding/left.png"
        alt=""
        width={114}
        height={156}
        className="col-start-2 row-start-1 mx-auto h-[clamp(2.5rem,10vw,4rem)] w-auto max-w-full object-contain lg:col-start-1 lg:h-[88px]"
      />
      <div className="col-span-5 row-start-2 min-w-0 lg:col-span-1 lg:col-start-2 lg:row-start-1">
        <p lang="en" className="mx-auto font-sans text-[16px] text-balance font-extrabold tracking-[-0.01em] leading-snug text-[#102348] sm:text-[18px] max-lg:max-w-[36rem] max-lg:!leading-tight xl:text-[20px]">
          SJR College for Women, Rajajinagar
        </p>
        <p lang="en" className="mx-auto mt-1 max-w-[38rem] font-sans text-[12.5px] font-medium leading-snug text-[#7c251d] xl:text-[13.5px]">
          {accreditation}
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
        <p lang="kn" className="mx-auto font-kannada text-[16px] text-balance font-extrabold leading-relaxed text-[#102348] sm:text-[18px] max-lg:max-w-[36rem] xl:text-[20px]">
          {instituteNameKannada}
        </p>
        <p lang="en" className="mx-auto mt-1 max-w-[38rem] font-sans text-[12.5px] font-medium leading-snug text-[#7c251d] xl:text-[13.5px]">
          {accreditation}
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
