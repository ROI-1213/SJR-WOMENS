import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Building, Coffee, Dumbbell, Presentation, Volume2 } from 'lucide-react';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import { infrastructureMenuData } from '@/data/navigation/infrastructureMenuData';
import campus from '@/assets/sjr-administrative-block.jpg';
import library from '@/assets/lib1.jpg';
import sports from '@/assets/sjr-table-tennis.jpg';
import classroom from '@/assets/sjr-classroom.jpg';
import canteen from '@/assets/canteen-dining.jpg';
import auditorium from '@/assets/auditorium-page.jpg';
import { FacilityStats } from './FacilityContent';

const facilityMedia = {
  'Campus Overview': { image: campus, icon: Building },
  Library: { image: library, icon: BookOpen },
  'Sports Facilities': { image: sports, icon: Dumbbell },
  Classrooms: { image: classroom, icon: Presentation },
  Canteen: { image: canteen, icon: Coffee },
  Auditorium: { image: auditorium, icon: Volume2 },
};

const InfrastructureHome = () => (
  <InfrastructureLayout pageTitle="Infrastructure" breadcrumbPath="Home">
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <section aria-labelledby="infrastructure-overview">
        <div className="mb-7 max-w-2xl">
          <h2 id="infrastructure-overview" className="border-l-4 border-[#ff8c00] pl-4 text-2xl font-bold text-[#177249] sm:text-3xl">Facilities at a Glance</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">Explore the teaching, study, and recreation spaces that support student life at Ananda Rao Circle.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureMenuData.map(({ label, href, description }) => {
            const { image, icon: Icon } = facilityMedia[label];
            return (
              <li key={href}>
                <Link to={href} className="group block h-full overflow-hidden rounded-xl border border-[#177249]/15 bg-white transition-colors hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]">
                  <img src={image} alt="" loading="lazy" className="aspect-[2/1] w-full object-cover" />
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 font-semibold text-[#177249] group-hover:underline">
                      <Icon className="size-5 shrink-0" aria-hidden="true" />
                      {label}
                      <ArrowUpRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{description}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <FacilityStats title="Campus in Numbers" items={[
        { value: '2.5', label: 'Acres' },
        { value: '21', label: 'Lecture rooms' },
        { value: '3', label: 'Computer laboratories' },
        { value: '700', label: 'Auditorium seats' },
      ]} />
    </div>
  </InfrastructureLayout>
);

export default InfrastructureHome;
