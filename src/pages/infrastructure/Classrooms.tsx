import { BookOpen, Lightbulb, Monitor, Presentation, ScreenShare, Users, Wifi, Wind } from 'lucide-react';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import classroom from '@/assets/sjr-classroom.jpg';
import { FacilityCards, FacilityIntro, FacilitySection } from './FacilityContent';

const features = [
  { icon: Monitor, title: 'ICT-Enabled Classrooms', description: 'Faculty use digital teaching materials alongside board work and discussion.' },
  { icon: Presentation, title: 'Audio-Visual Teaching', description: 'LCD projectors support presentations, diagrams, and video in class.' },
  { icon: Users, title: 'Classroom Seating', description: 'Bench seating gives students a place to take notes and work together.' },
  { icon: Wifi, title: 'Wi-Fi Connectivity', description: 'Campus connectivity supports access to course resources and digital references.' },
  { icon: ScreenShare, title: 'Interactive Teaching', description: 'Presentations and examples give students a starting point for questions and discussion.' },
  { icon: BookOpen, title: 'Boards and Digital Materials', description: 'Green boards support step-by-step explanation, while shared notes and assignments give students material to revisit.' },
  { icon: Wind, title: 'Ventilation & Lighting', description: 'Windows bring daylight into teaching rooms.' },
  { icon: Lightbulb, title: 'Student-Friendly Layout', description: 'Seating faces the teaching area so students can follow board work and presentations.' },
];

const Classrooms = () => (
  <InfrastructureLayout pageTitle="Classrooms" showRelated={false}>
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="Technology-Enhanced Learning Spaces" photo={classroom} alt="Faculty member teaching students in a college classroom">
        <p>Classrooms pair familiar board-based teaching with LCD projection and digital resources. Faculty can work through problems, share multimedia material, and lead discussions within the same lesson.</p>
      </FacilityIntro>
      <FacilitySection title="Classroom Features">
        <FacilityCards items={features} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </FacilitySection>
      <section className="grid gap-5 rounded-2xl bg-[#177249] p-6 text-white sm:grid-cols-[auto_1fr] sm:items-center sm:p-9">
        <div className="sm:border-r sm:border-white/25 sm:pr-8">
          <p className="text-4xl font-bold tabular-nums">21</p>
          <p className="mt-1 text-sm">Lecture rooms reported</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">Room for Different Ways to Learn</h2>
          <p className="mt-2 max-w-2xl leading-relaxed">The spaces support lectures, group discussions, and multimedia presentations. Faculty also share notes, assignments, and question banks for review after class.</p>
          <a className="mt-3 inline-block text-sm font-medium underline underline-offset-4 hover:decoration-[#ff8c00]" href="https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=43" target="_blank" rel="noopener noreferrer">College Self-Study Report (PDF)</a>
        </div>
      </section>
    </div>
  </InfrastructureLayout>
);

export default Classrooms;
