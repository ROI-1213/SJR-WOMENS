import { DoorOpen, Projector, Users, Volume2 } from 'lucide-react';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import auditorium from '@/assets/auditorium-page.jpg';
import { FacilityCards, FacilityIntro, FacilitySection } from './FacilityContent';

const features = [
  { icon: Users, title: '700 Seats', description: 'The auditorium accommodates college-wide gatherings and larger audiences.' },
  { icon: Volume2, title: 'Built-In Sound', description: 'The sound system supports speeches, presentations, and performances.' },
  { icon: DoorOpen, title: 'Two Green Rooms', description: 'Performers and speakers have dedicated spaces to prepare before going on stage.' },
  { icon: Projector, title: 'Projection & AV', description: 'A computer, projector, and internet connection support talks, screenings, and presentations.' },
];

const Auditorium = () => (
  <InfrastructureLayout pageTitle="Auditorium">
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="A Venue for Campus Events" photo={auditorium} alt="Seating inside the college auditorium">
        <p>The auditorium brings students, faculty, and guests together for college events, seminars, and cultural programmes.</p>
        <p>Its stage, audience seating, and audio-visual facilities support both presentations and performances.</p>
      </FacilityIntro>
      <FacilitySection title="Auditorium Facilities">
        <FacilityCards items={features} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <a className="mt-5 inline-block text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]" href="https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=44" target="_blank" rel="noopener noreferrer">College Self-Study Report (PDF)</a>
      </FacilitySection>
    </div>
  </InfrastructureLayout>
);

export default Auditorium;
