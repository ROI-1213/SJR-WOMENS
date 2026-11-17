import { ClipboardList, Compass, Handshake, MessageSquareText, Target } from 'lucide-react';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import project from '@/assets/sjr-computer-project.jpg';
import { PlacementCards, placementHeading } from './PlacementContent';

const mission = [
  'Connect academic learning with the skills and responsibilities students encounter at work.',
  'Build technical, aptitude, communication, and interpersonal skills through structured practice and feedback.',
  'Develop employer relationships that give students access to internships and recruitment opportunities.',
  'Guide students as they consider employment, further study, competitive examinations, or entrepreneurship.',
];

const practices = [
  { icon: ClipboardList, title: 'Prepare and review', description: 'Use aptitude practice, group discussions, mock interviews, and feedback to help students identify what they need to improve.' },
  { icon: Handshake, title: 'Connect with employers', description: 'Coordinate recruitment drives, career talks, and practical exposure through employer and training relationships.' },
  { icon: MessageSquareText, title: 'Guide the next step', description: 'Discuss career and study options with students, maintain records of activities and outcomes, and use feedback to improve the next programme.' },
];

const VisionMission = () => (
  <PlacementLayout page="vision" related={['overview', 'training', 'collaboration']}>
    <div className="grid gap-4 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
      <section aria-labelledby="placement-vision" className="rounded-2xl bg-[#153b2a] p-6 text-white sm:p-8">
        <Target className="mb-5 size-8 text-[#ff8c00]" aria-hidden="true" />
        <h2 id="placement-vision" className="text-2xl font-bold sm:text-3xl">Vision</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/90">Develop capable, ethical graduates who can make informed career choices, contribute confidently in the workplace, and continue learning as industries change.</p>
      </section>
      <section aria-labelledby="placement-mission" className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-6 sm:p-8">
        <Compass className="mb-5 size-8 text-[#177249]" aria-hidden="true" />
        <h2 id="placement-mission" className={placementHeading}>Mission</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-neutral-700 marker:text-[#177249]">
          {mission.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>

    <section aria-labelledby="placement-practice">
      <div className="mb-5 grid overflow-hidden rounded-2xl border border-[#177249]/15 md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <h2 id="placement-practice" className={`border-l-4 border-[#ff8c00] pl-4 ${placementHeading}`}>Placement practices</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">The Placement Cell connects preparation with opportunities by combining career guidance, practical training, and conversations with employers.</p>
        </div>
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-60">
          <img src={project} alt="Students working together on a computer lab project" loading="lazy" className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
      <PlacementCards items={practices} />
    </section>
  </PlacementLayout>
);

export default VisionMission;
