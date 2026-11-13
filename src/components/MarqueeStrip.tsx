import { Link } from 'react-router-dom';

export const MarqueeStrip = () => {
  const content = (
    <span className="inline-flex items-center gap-4 whitespace-nowrap px-8">
      <span className="tracking-wide">Welcome to SJR College for Women, Rajajinagar, Bengaluru</span>
      <span className="text-[#dfa03e] text-xs" aria-hidden="true">✦</span>
      <span className="text-white/90">Affiliated to Bengaluru City University</span>
      <span className="text-[#dfa03e] text-xs" aria-hidden="true">✦</span>
      <span className="text-white/90">UGC Recognised Under 2(f) &amp; 12(B)</span>
      <span className="text-[#dfa03e] text-xs" aria-hidden="true">✦</span>
      <span className="text-white/90">NAAC Re-Accredited</span>
      <span className="text-[#dfa03e] text-xs" aria-hidden="true">✦</span>
      <Link
        to="/admissions/online-application"
        className="font-bold text-[#dfa03e] underline decoration-[#dfa03e]/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
      >
        Admissions Open for 2026–27 — Apply Online
      </Link>
      <span className="text-[#dfa03e] text-xs" aria-hidden="true">✦</span>
    </span>
  );

  return (
    <aside
      aria-label="Important Announcements"
      className="w-full overflow-hidden border-y border-[#c28422]/35 bg-[#102d21] shadow-inner"
    >
      <div className="py-2.5 text-xs font-semibold tracking-wide text-white sm:text-sm">
        <div className="animate-marquee inline-flex hover:[animation-play-state:paused]">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </aside>
  );
};
