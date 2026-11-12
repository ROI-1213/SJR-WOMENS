import { ArrowRight, FileCheck2, NotebookPen, UserRoundCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import guidanceImage from '@/assets/sjr-teacher-guidance.jpg';
import { ResearchIcon, ResearchIntro, ResearchLayout, ResearchSource, researchCard, researchHeading, researchLink } from './ResearchLayout';
import { researchSources } from './researchSources';

const mentoringStages = [
  {
    icon: NotebookPen,
    title: 'Scope the work',
    text: 'Bring a one-page outline with the question, the work already published on it, the evidence you need and the time you have. A mentor can help narrow the topic and choose a workable approach.',
  },
  {
    icon: UserRoundCheck,
    title: 'Review progress',
    text: 'Agree on milestones and the format for progress updates. Keep a record of methods, sources and decisions so your mentor can give specific feedback on the evidence and analysis.',
  },
  {
    icon: FileCheck2,
    title: 'Prepare the final submission',
    text: 'Review the argument, check that the conclusions follow from the evidence and confirm citations, acknowledgements and any permissions before submitting or presenting the work.',
  },
];

const ResearchGuides = () => (
  <ResearchLayout page="guides" related={['enrollment', 'activities', 'facultyAchievements']}>
    <ResearchIntro title="Find guidance for your research project" image={guidanceImage} alt="A teacher working with students in a classroom">
      <p>For a course project or independent study, ask your department to connect you with a faculty mentor whose expertise fits your topic. The Research Cell brings together staff from different disciplines and can help you identify the right department for a cross-disciplinary question.</p>
      <ResearchSource href={researchSources.cell}>Research Cell and committee information</ResearchSource>
    </ResearchIntro>

    <section aria-labelledby="mentoring-stages">
      <h2 id="mentoring-stages" className={researchHeading}>Working with a faculty mentor</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {mentoringStages.map(({ icon, title, text }) => (
          <article key={title} className={researchCard}>
            <ResearchIcon icon={icon} />
            <h3 className="mt-4 text-lg font-bold text-[#153b2a]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="recognised-supervisors" className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-8">
      <h2 id="recognised-supervisors" className={researchHeading}>University-recognised doctoral supervisors</h2>
      <p className="mt-3 max-w-3xl leading-relaxed">Ph.D. supervision requires formal university recognition. Check Bengaluru City University’s research-centre and admission notices, and confirm the supervisor’s recognised subject area and availability with the university before applying.</p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <li><ResearchSource href={researchSources.universityCentres}>University research centre notices</ResearchSource></li>
        <li><Link to="/contact" className={researchLink}>Contact SJRC about project mentoring <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link></li>
      </ul>
    </section>
  </ResearchLayout>
);

export default ResearchGuides;
