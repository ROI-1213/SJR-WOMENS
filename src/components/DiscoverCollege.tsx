import { ArrowUpRight, BookOpen, GraduationCap, Handshake, LibraryBig } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Programmes',
    description: 'Explore degree programmes in commerce, business administration and computer applications.',
    href: '/academics',
    icon: GraduationCap,
  },
  {
    name: 'Library',
    description: 'Explore the reading rooms and resources that support independent study.',
    href: '/infrastructure/library',
    icon: LibraryBig,
  },
  {
    name: 'Student support',
    description: 'Find student services and learn where to go for guidance during college.',
    href: '/student-services/support',
    icon: Handshake,
  },
];

export const DiscoverCollege = () => (
  <section
    aria-labelledby="discover-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-10 text-[#177249] sm:px-8 sm:py-12 lg:px-12"
  >
    <div className="mx-auto max-w-[1284px]">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 h-1 w-8 rounded-full bg-[#ea580c]" aria-hidden="true" />
          <h2
            id="discover-title"
            className="text-2xl font-bold tracking-tight text-[#177249] sm:text-3xl"
          >
            Discover Excellence
          </h2>
        </div>
        <Link
          to="/about/overview"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:text-[#177249]"
        >
          <span>About the College</span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Heritage Card */}
        <div className="flex min-h-44 flex-col justify-between rounded-xl bg-[#177249] p-6 text-white shadow-sm">
          <BookOpen size={24} className="text-white" aria-hidden="true" />
          <div className="mt-4">
            <p className="home-display-title text-5xl font-normal leading-none text-white">1945</p>
            <p className="mt-2 text-sm font-normal text-white/90">Year the college was founded</p>
          </div>
        </div>

        {/* Feature Cards */}
        {destinations.map(({ name, description, href, icon: Icon }) => (
          <Link
            key={href}
            to={href}
            className="group flex min-h-44 flex-col justify-between rounded-xl border border-[#d8e5dc] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#177249] hover:bg-[#f8fbf8] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
          >
            <div className="flex items-center justify-between text-[#177249]">
              <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#177249]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-[#177249] transition-colors group-hover:text-[#177249]">
                {name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4b5563]">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
