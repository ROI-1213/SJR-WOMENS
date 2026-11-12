import { ArrowUpRight, BookOpen, GraduationCap, Handshake, LibraryBig } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { name: 'Programmes', description: 'Explore degree programmes in science, commerce, business administration and computer applications.', href: '/academics', icon: GraduationCap },
  { name: 'Milestones', description: 'Trace the college’s journey from its founding in 1988 to four cycles of NAAC accreditation.', href: '/milestones', icon: LibraryBig },
  { name: 'Right to Information', description: 'Access Section 4(1)(b) RTI disclosures, college timings and official documents.', href: '/rti', icon: Handshake },
];

export const DiscoverCollege = () => (
  <section aria-labelledby="discover-title" className="bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4 sm:mb-6">
        <h2 id="discover-title" className="home-section-title">Discover Excellence</h2>
        <Link to="/about/overview" className="inline-flex items-center gap-2 text-sm font-semibold text-[#185d40] underline underline-offset-4 hover:text-[#177249]">
          About the College
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        <div className="flex min-h-36 flex-col justify-between rounded-lg bg-[#177249] p-5 text-white sm:p-6">
          <BookOpen size={23} aria-hidden="true" />
          <div className="mt-4">
            <p className="home-display-title text-5xl leading-none">1988</p>
            <p className="mt-2 text-sm text-green-50">Year SJR College for Women was established</p>
          </div>
        </div>
        {destinations.map(({ name, description, href, icon: Icon }) => (
          <Link
            key={href}
            to={href}
            className="group flex min-h-36 flex-col rounded-lg border border-[#d8e5dc] bg-[#f8fbf8] p-5 hover:border-[#177249] hover:bg-[#edf5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] motion-safe:transition motion-safe:hover:-translate-y-0.5 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between text-[#177249]">
              <Icon size={24} aria-hidden="true" />
              <ArrowUpRight size={17} className="motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#43534a]">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
