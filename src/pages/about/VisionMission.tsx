import { BookOpen, FlaskConical, GraduationCap, HandHeart, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import guidancePhoto from '@/assets/homepage/gallery/guidance.webp';

const objectives = [
  { icon: BookOpen, title: 'Academic Excellence', description: 'Promote quality teaching, effective learning and academic innovation.' },
  { icon: HeartHandshake, title: 'Holistic Development', description: 'Encourage intellectual, cultural, personal and professional growth.' },
  { icon: GraduationCap, title: 'Skill Development', description: 'Equip students with practical knowledge and skills relevant to industry.' },
  { icon: ShieldCheck, title: 'Ethical Values', description: 'Instil integrity, discipline, leadership and social responsibility.' },
  { icon: HandHeart, title: 'Inclusive Education', description: 'Provide an accessible and supportive learning environment.' },
  { icon: FlaskConical, title: 'Research & Innovation', description: 'Encourage critical thinking, creativity and research-oriented learning.' },
  { icon: Lightbulb, title: 'Community Engagement', description: 'Help students take an active role in their communities and contribute to society.' },
];

const heading = 'text-2xl font-semibold leading-tight text-[color:var(--section-heading-color)] sm:text-3xl';

export default function VisionMission() {
  return (
    <AboutLayout pageTitle="Vision & Mission" breadcrumbPath="Vision & Mission">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:space-y-10 sm:px-6 sm:py-12">
        <section aria-labelledby="vision-heading" className="grid overflow-hidden rounded-2xl bg-[#177249] text-white md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="self-center p-6 sm:p-9">
            <div className="mb-4 h-0.5 w-10 bg-[#ff8c00]" aria-hidden="true" />
            <h2 id="vision-heading" className="text-2xl font-semibold sm:text-3xl">Our Vision</h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed sm:text-lg">
              To become a centre of academic excellence where quality teaching, innovative learning and strong values empower students to become responsible citizens and lead in ways that benefit society.
            </p>
          </div>
          <img
            src={guidancePhoto}
            alt="An instructor guiding a student in the college computer lab"
            className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-full"
          />
        </section>

        <section aria-labelledby="mission-heading" className="grid gap-3 rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-6">
          <h2 id="mission-heading" className={heading}>Our Mission</h2>
          <p className="max-w-prose leading-relaxed text-neutral-700 sm:text-lg">
            To make quality education accessible to students from all backgrounds and help them develop the knowledge, practical skills, values and confidence to realise their potential in a changing world.
          </p>
        </section>

        <section aria-labelledby="objectives-heading">
          <h2 id="objectives-heading" className={heading}>Mission Objectives</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-[#177249] sm:p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#ff8c00]/15 text-[#177249]">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-[color:var(--section-heading-color)]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AboutLayout>
  );
}
