import { Link } from 'react-router-dom';
import { Bell, Sparkles } from 'lucide-react';

export const MarqueeStrip = () => {
  const content = (
    <span className="inline-flex items-center gap-6 whitespace-nowrap px-6">
      <span className="font-medium text-white/95">Welcome to SJR College for Women, Rajajinagar, Bengaluru</span>
      <span className="text-[#dfa03e] text-sm" aria-hidden="true">◆</span>
      <span className="text-white/85">Affiliated to Bengaluru City University</span>
      <span className="text-[#dfa03e] text-sm" aria-hidden="true">◆</span>
      <span className="text-white/85">UGC Recognised Under Sections 2(f) &amp; 12(B)</span>
      <span className="text-[#dfa03e] text-sm" aria-hidden="true">◆</span>
      <span className="text-white/85">NAAC Re-Accredited B++ (Cycle 4)</span>
      <span className="text-[#dfa03e] text-sm" aria-hidden="true">◆</span>
      <Link
        to="/admissions/online-application"
        className="font-bold text-[#dfa03e] underline decoration-[#dfa03e]/70 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
      >
        Admissions Open for Academic Year 2024–25 — Apply Online
      </Link>
      <span className="text-[#dfa03e] text-sm" aria-hidden="true">◆</span>
    </span>
  );

  return (
    <aside
      aria-label="Important Announcements"
      className="relative w-full overflow-hidden border-y-2 border-[#c28422]/60 bg-gradient-to-r from-[#0a2316] via-[#103422] to-[#0a2316] shadow-md"
    >
      <div className="flex items-center">
        {/* Heraldic Announcement Pill on Left */}
        <div className="z-10 hidden shrink-0 items-center gap-2 border-r border-[#c28422]/50 bg-[#c28422] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0a2316] shadow-md md:flex">
          <Bell size={13} className="text-[#0a2316]" aria-hidden="true" />
          <span>Notice Board</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="py-2.5 text-xs font-medium tracking-wide text-white sm:text-[0.82rem] overflow-hidden flex-1">
          <div className="animate-marquee inline-flex hover:[animation-play-state:paused] cursor-pointer">
            {content}
            {content}
            {content}
            {content}
          </div>
        </div>
      </div>
    </aside>
  );
};
