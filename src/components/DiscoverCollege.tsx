import { ArrowUpRight, BookOpen, GraduationCap, Milestone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Academic Programmes',
    description: 'Explore undergraduate and postgraduate degrees in science, commerce, management and computing.',
    href: '/academics',
    icon: GraduationCap,
    badge: 'Degree Studies',
  },
  {
    name: 'Institutional Milestones',
    description: 'Trace the college’s journey from its 1988 founding to voluntary NAAC accreditations.',
    href: '/milestones',
    icon: Milestone,
    badge: 'Our History',
  },
  {
    name: 'Right to Information',
    description: 'Access statutory Section 4(1)(b) RTI declarations, college timings and official documents.',
    href: '/rti',
    icon: ShieldCheck,
    badge: 'Statutory Disclosure',
  },
];

export const DiscoverCollege = () => (
  <section
    aria-labelledby="discover-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#143a29] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
  >
    <div className="mx-auto max-w-[1284px]">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
            <span className="home-section-eyebrow tracking-widest text-[#8b6528]">HERITAGE &amp; GOVERNANCE</span>
          </div>
          <h2 id="discover-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#143a29] sm:text-4xl">
            Discover Excellence
          </h2>
          <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
            Established in 1988 to foster high standards of value-centric education for women.
          </p>
        </div>
        <Link
          to="/about/overview"
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#143a29] transition-colors hover:text-[#c28422] sm:text-sm"
        >
          <span className="underline decoration-[#c28422] underline-offset-4">About SJR College for Women</span>
          <ArrowUpRight size={15} className="text-[#c28422] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Heritage Monolith Plaque */}
        <div className="plaque-card relative flex min-h-56 flex-col justify-between overflow-hidden p-6 text-white shadow-xl">
          <div className="plaque-ambient-glow" aria-hidden="true" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#dfa03e]/40 bg-[#dfa03e]/15 text-[#dfa03e] shadow-2xs">
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#dfa03e]">
              Est. 1988
            </span>
          </div>

          <div className="relative z-10 mt-4">
            <p className="home-display-title font-serif text-5xl font-bold leading-none tracking-tight text-[#dfa03e] drop-shadow-sm sm:text-6xl">
              1988
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              Established by SJRES
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/80">
              Over three decades dedicated to women’s higher education in Bengaluru.
            </p>
          </div>
        </div>

        {/* Dossier Cards */}
        {destinations.map(({ name, description, href, icon: Icon, badge }, idx) => (
          <Link
            key={href}
            to={href}
            className={`dossier-card-advanced group flex min-h-56 flex-col justify-between p-6 stagger-${idx + 1}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="dossier-icon grid h-10 w-10 place-items-center rounded-xl border border-[#c6ded0] bg-gradient-to-br from-[#edf4f0] to-[#dfede4] text-[#143a29] shadow-2xs transition-all duration-300">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="rounded-full border border-[#dce4dd] bg-[#f8faf8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4d6355]">
                  {badge}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-[#143a29] transition-colors group-hover:text-[#185e3c]">
                  {name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#566c5f]">
                  {description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#f0f4f0] pt-3 text-xs font-semibold text-[#143a29]">
              <span className="text-[11px] text-[#718579]">Explore Department</span>
              <span className="grid h-6 w-6 place-items-center rounded-full border border-[#d4ded6] bg-[#f8faf8] text-[#143a29] transition-all duration-300 group-hover:bg-[#143a29] group-hover:text-white group-hover:border-[#143a29]">
                <ArrowUpRight size={13} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
