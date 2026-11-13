import { ArrowUpRight, BookOpen, GraduationCap, Milestone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Academic Programmes',
    description: 'Explore undergraduate and postgraduate degrees in science, commerce, management and computing.',
    href: '/academics',
    icon: GraduationCap,
  },
  {
    name: 'Institutional Milestones',
    description: 'Trace the college’s journey from its 1988 founding to voluntary NAAC accreditations.',
    href: '/milestones',
    icon: Milestone,
  },
  {
    name: 'Right to Information',
    description: 'Access statutory Section 4(1)(b) RTI declarations, college timings and official documents.',
    href: '/rti',
    icon: ShieldCheck,
  },
];

export const DiscoverCollege = () => (
  <section aria-labelledby="discover-title" className="border-b border-[#e1e6e1] bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
            Heritage &amp; Governance
          </span>
          <h2 id="discover-title" className="home-section-title mt-1">
            Discover Excellence
          </h2>
        </div>
        <Link
          to="/about/overview"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
        >
          About SJR College for Women
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Heritage Stat Card */}
        <div className="relative flex min-h-40 flex-col justify-between overflow-hidden rounded-xl border border-[#c28422]/50 bg-gradient-to-br from-[#123625] to-[#1a4a34] p-6 text-white shadow-sm">
          <BookOpen size={26} className="text-[#dfa03e]" aria-hidden="true" />
          <div className="mt-4">
            <p className="home-display-title text-5xl font-normal leading-none tracking-tight text-[#dfa03e]">
              1988
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/90">
              Established by SJRES
            </p>
            <p className="mt-1 text-xs text-white/70">
              Over three decades serving women’s education
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        {destinations.map(({ name, description, href, icon: Icon }) => (
          <Link
            key={href}
            to={href}
            className="group flex min-h-40 flex-col justify-between rounded-xl border border-[#dce4dd] bg-[#fafbf9] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#143a29] hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#c8decb] bg-[#eef5f0] text-[#143a29] transition-colors group-hover:bg-[#143a29] group-hover:text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <ArrowUpRight
                size={16}
                className="text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#143a29]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#143a29] group-hover:text-[#17563b]">
                {name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#43534a]">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
