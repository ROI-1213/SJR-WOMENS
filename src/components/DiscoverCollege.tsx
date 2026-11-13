import { ArrowUpRight, BookOpen, GraduationCap, Milestone, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Academic Programmes',
    description: 'Explore undergraduate and postgraduate degrees in science, commerce, management and computing.',
    href: '/academics',
    icon: GraduationCap,
    badge: 'Undergraduate & PG',
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
  <section aria-labelledby="discover-title" className="border-b border-[#dde5de] bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="home-section-eyebrow">
            Heritage &amp; Governance
          </span>
          <h2 id="discover-title" className="home-section-title mt-1.5">
            Discover Excellence
          </h2>
          <p className="mt-1 text-sm text-[#4d6355]">
            Established in 1988 to foster high standards of value-centric education for women.
          </p>
        </div>
        <Link
          to="/about/overview"
          className="group inline-flex items-center gap-2 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
        >
          <span className="underline decoration-[#c28422] underline-offset-4">About SJR College for Women</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#c28422]" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Heritage Monolith Plaque */}
        <div className="plaque-card relative flex min-h-52 flex-col justify-between overflow-hidden p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#dfa03e]/40 bg-[#dfa03e]/15 text-[#dfa03e]">
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#dfa03e]">
              Est. 1988
            </span>
          </div>

          <div className="mt-4">
            <p className="home-display-title text-5xl font-normal leading-none tracking-tight text-[#dfa03e]">
              1988
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
              Established by SJRES
            </p>
            <p className="mt-1 text-xs text-white/75 leading-relaxed">
              Over three decades dedicated to women’s higher education in Bengaluru.
            </p>
          </div>
        </div>

        {/* Dossier Cards */}
        {destinations.map(({ name, description, href, icon: Icon, badge }, idx) => (
          <Link
            key={href}
            to={href}
            className={`luxury-glass-card group flex min-h-52 flex-col justify-between p-6 transition-all duration-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29] stagger-${idx + 1}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#c6ded0] bg-gradient-to-br from-[#edf4f0] to-[#dfede4] text-[#143a29] shadow-xs transition-colors group-hover:bg-[#143a29] group-hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-[#f4f7f4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#54705e]">
                  {badge}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-[#143a29] group-hover:text-[#185e3c]">
                  {name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#4b5e52]">
                  {description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 border-t border-[#f0f4f0] pt-2.5 text-xs font-bold text-[#c28422]">
              <span>Explore Dossier</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
