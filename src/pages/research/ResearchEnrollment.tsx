import { ArrowRight, ClipboardList, GraduationCap, MessagesSquare, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResearchIcon, ResearchLayout, ResearchSource, researchCard, researchHeading, researchLink } from './ResearchLayout';
import { researchSources } from './researchSources';

const projectSteps = [
  {
    icon: Search,
    title: 'Define a focused question',
    text: 'Start with a course topic and identify something you can investigate in the time available. Use a short literature search to see what has already been established and where your project can contribute.',
  },
  {
    icon: MessagesSquare,
    title: 'Discuss it with your department',
    text: 'Share the question, proposed methods and intended outcome with a faculty member. Ask about supervision, access to equipment or data, and the deadlines that apply to your programme.',
  },
  {
    icon: ClipboardList,
    title: 'Agree on scope and approvals',
    text: 'Confirm the project plan with your mentor. Before starting, check any requirements for data permissions, participant consent, laboratory access or project registration.',
  },
];

const ResearchEnrollment = () => (
  <ResearchLayout page="enrollment" related={['guides', 'activities', 'studentAchievements']}>
    <section aria-labelledby="enrollment-pathways" className="rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-8">
      <h2 id="enrollment-pathways" className={researchHeading}>Choose the right research pathway</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className={researchCard}>
          <ResearchIcon icon={ClipboardList} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Student projects at SJRC</h3>
          <p className="mt-2 leading-relaxed">If you are enrolled at SJRC and want to pursue a course project or an independent study, start with your department. Confirm how the work fits your programme and what supervision and resources are available for your topic.</p>
          <Link to="/departments" className={`mt-4 text-sm ${researchLink}`}>Browse academic departments <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
        </article>
        <article className={researchCard}>
          <ResearchIcon icon={GraduationCap} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Doctoral applications</h3>
          <p className="mt-2 leading-relaxed">For Ph.D. study, consult Bengaluru City University’s current admission notice for eligibility, application dates and selection procedures. Ask the university which research centres and supervisors are recognised for your discipline and intake.</p>
          <div className="mt-4"><ResearchSource href={researchSources.universityPhd}>Bengaluru City University Ph.D. notices</ResearchSource></div>
        </article>
      </div>
    </section>

    <section aria-labelledby="project-preparation">
      <h2 id="project-preparation" className={researchHeading}>Prepare for your first project discussion</h2>
      <ol className="mt-5 divide-y divide-[#177249]/15 rounded-2xl border border-[#177249]/15">
        {projectSteps.map(({ icon, title, text }, index) => (
          <li key={title} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 p-4 sm:gap-5 sm:p-6">
            <ResearchIcon icon={icon} />
            <div>
              <h3 className="font-bold text-[#153b2a] sm:text-lg">{index + 1}. {title}</h3>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed">{text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link to="/contact" className={`mt-5 text-sm ${researchLink}`}>Contact the college about research projects <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
    </section>
  </ResearchLayout>
);

export default ResearchEnrollment;
