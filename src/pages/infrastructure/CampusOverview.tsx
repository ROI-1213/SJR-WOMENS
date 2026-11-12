import { BusFront, Car, Coffee, Eye, MapPin, Shield, TrainFront, TramFront, Trees, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import { CampusTourModal } from '@/components/CampusTourModal';
import { Button } from '@/components/ui/button';
import campus from '@/assets/sjr-administrative-block.jpg';
import classroom from '@/assets/sjr-classroom.jpg';
import library from '@/assets/sjr-library.jpg';
import lab from '@/assets/sjr-computer-project.jpg';
import { FacilityCards, FacilityIntro, FacilitySection, FacilityStats } from './FacilityContent';

const campusFeatures = [
  { icon: Trees, title: 'Green Campus', description: 'Landscaped areas offer places to pause between classes.' },
  { icon: Wifi, title: 'Wi-Fi Connectivity', description: 'Campus Wi-Fi supports access to course materials and online resources.' },
  { icon: Car, title: 'Parking', description: 'Contact the college for parking arrangements before your visit.' },
  { icon: Coffee, title: 'Canteen', description: 'Students and staff can take a meal or refreshment break on campus.' },
  { icon: Shield, title: 'Campus Security', description: 'CCTV covers key areas, including entrances, corridors, classrooms, and the library.' },
  { icon: MapPin, title: 'Central Location', description: 'The campus sits on Race Course Road at Ananda Rao Circle.' },
];

const campusDetails = [
  {
    title: 'Campus Design & Accessibility',
    items: ['Academic buildings with classrooms, laboratories and study spaces', 'Solar panels support campus energy use', 'Lifts and a barrier-free built environment'],
  },
  {
    title: 'Campus Map & Navigation',
    items: ['Academic blocks and department offices', 'Library, reading room and sports areas', 'Administrative offices and student support services'],
  },
];

const connections = [
  { icon: BusFront, title: 'Kempegowda Bus Station', description: 'The Majestic bus hub serves city and intercity routes.' },
  { icon: TramFront, title: 'Kempegowda Metro Station', description: 'Change between the Purple and Green lines at the Majestic interchange.' },
  { icon: TrainFront, title: 'Krantivira Sangolli Rayanna Railway Station', description: 'KSR Bengaluru City station connects the city with regional and long-distance trains.' },
];

const CampusOverview = () => (
  <InfrastructureLayout pageTitle="Campus Overview">
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="A Campus That Inspires" photo={campus} alt="Administrative block at Sri Jagadguru Renukacharya College">
        <p>Set on Race Course Road at Ananda Rao Circle, the campus brings classrooms, laboratories, a library, and spaces for recreation within easy reach of one another.</p>
        <p>Students move between lectures, practical work, independent study, and activities throughout the day.</p>
      </FacilityIntro>

      <section aria-label="Campus walk-through" className="grid gap-4 sm:grid-cols-2">
        {[
          { src: classroom, caption: 'Classroom teaching' },
          { src: library, caption: 'Library reading room' },
        ].map(({ src, caption }) => (
          <figure key={caption} className="overflow-hidden rounded-xl border border-[#177249]/15">
            <img src={src} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
            <figcaption className="bg-[#177249]/5 px-4 py-3 text-sm font-semibold text-[#177249]">{caption}</figcaption>
          </figure>
        ))}
        <div className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:col-span-2">
          <h2 className="font-semibold text-[#177249]">Spaces for Study and Student Life</h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">The reading room gives students space to focus, while classrooms and common areas make it easier to work with classmates and faculty.</p>
        </div>
      </section>

      <FacilityStats title="Key Campus Facilities" items={[
        { value: '30,000+', label: 'Library books' },
        { value: '700', label: 'Auditorium seats' },
        { value: '2', label: 'Sports rooms' },
      ]} />

      <FacilitySection title="Campus Features"><FacilityCards items={campusFeatures} /></FacilitySection>

      <div className="grid gap-4 sm:grid-cols-2">
        {campusDetails.map(({ title, items }) => (
          <section key={title} className="rounded-xl border border-[#177249]/15 p-5 sm:p-7">
            <h2 className="text-xl font-bold text-[#177249]">{title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-700 marker:text-[#177249]">
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <FacilitySection title="Prime Location in Ananda Rao Circle">
        <p className="mb-5 max-w-2xl leading-relaxed text-neutral-700">The college is at 9 Race Course Road, Bengaluru 560009. Three transport hubs around Majestic connect students and visitors with the rest of the city.</p>
        <FacilityCards items={connections} />
        <figure className="mt-5 overflow-hidden rounded-xl border border-[#177249]/15">
          <img src={lab} alt="" loading="lazy" className="aspect-[2/1] max-h-80 w-full object-cover" />
          <figcaption className="bg-[#177249]/5 px-4 py-3 text-sm font-semibold text-[#177249]">Students working in the computer laboratory</figcaption>
        </figure>
      </FacilitySection>

      <section className="rounded-2xl bg-[#177249]/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-[#177249]">Experience Our Campus</h2>
          <p className="mt-2 text-neutral-700">Take a virtual walk-through or contact the college to arrange a visit.</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
          <CampusTourModal>
            {openModal => <Button onClick={openModal} className="bg-[#177249] text-white hover:bg-[#135c3b]"><Eye className="mr-2 size-4" aria-hidden="true" />Take Virtual Tour</Button>}
          </CampusTourModal>
          <Button asChild variant="outline" className="border-[#177249] text-[#177249] hover:bg-[#177249]/10 hover:text-[#177249]">
            <Link to="/contact"><Users className="mr-2 size-4" aria-hidden="true" />Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  </InfrastructureLayout>
);

export default CampusOverview;
