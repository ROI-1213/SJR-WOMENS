import { CircleDot, Crown, Dumbbell, Hand, Medal, Target, Trophy, Users } from 'lucide-react';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import tableTennis from '@/assets/sjr-table-tennis.jpg';
import { FacilityCards, FacilityIntro, FacilitySection } from './FacilityContent';

const indoorFacilities = [
  { icon: CircleDot, title: 'Table Tennis', description: 'Students can practise strokes and play singles or doubles.' },
  { icon: Crown, title: 'Chess', description: 'Students develop strategy through practice and can take part in competitive play.' },
  { icon: Target, title: 'Carrom', description: 'The indoor games facilities include space for carrom.' },
  { icon: Dumbbell, title: 'Gymnasium', description: 'Students can train with guidance from the Physical Education Director.' },
];

const outdoorFacilities = [
  { icon: Users, title: 'Kabaddi', description: 'Players practise raids, defensive formations, and team coordination.' },
  { icon: Hand, title: 'Throwball', description: 'Students build throwing, catching, and teamwork skills.' },
  { icon: Trophy, title: 'Volleyball', description: 'Team practice gives players time to work on serving, passing, and court coverage.' },
  { icon: Target, title: 'Shuttle Badminton', description: 'Students can work on footwork, serves, and rallies.' },
];

const achievements = [
  { icon: Medal, title: 'Athletics', description: 'Nandhan S. placed second in men’s triple jump at the Bengaluru City University intercollegiate athletics meet.' },
  { icon: Crown, title: 'Chess', description: 'Meghana M. placed third at the intercollegiate chess tournament and represented Bengaluru City University at the South Zone tournament.' },
  { icon: Trophy, title: 'Judo', description: 'Uday Kumar and Yuvaraj placed third in their respective weight classes at the intercollegiate judo tournament.' },
];

const SportsFacilities = () => (
  <InfrastructureLayout pageTitle="Sports Facilities" showRelated={false}>
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="Sports in Holistic Education" photo={tableTennis} alt="Students playing table tennis at the college">
        <p>Indoor games, outdoor team sports, and fitness training give students different ways to stay active. Regular practice builds discipline and confidence, while team play gives students opportunities to lead and work together.</p>
      </FacilityIntro>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-7">
        <FacilitySection title="Indoor Facilities"><FacilityCards items={indoorFacilities} columns="sm:grid-cols-2" /></FacilitySection>
        <FacilitySection title="Outdoor Facilities"><FacilityCards items={outdoorFacilities} columns="sm:grid-cols-2" /></FacilitySection>
      </div>
      <section className="rounded-2xl bg-[#177249]/5 p-5 sm:p-8">
        <FacilitySection title="Sports Achievements at a Glance">
          <p className="mb-4 text-neutral-700">Selected results from the 2022–23 college annual report.</p>
          <FacilityCards items={achievements} />
          <a className="mt-5 inline-block text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]" href="https://sjrc.edu.in/wp-content/uploads/2024/02/SJRC-Annual-Report-2022-23.pdf" target="_blank" rel="noopener noreferrer">College Annual Report (PDF)</a>
        </FacilitySection>
      </section>
    </div>
  </InfrastructureLayout>
);

export default SportsFacilities;
