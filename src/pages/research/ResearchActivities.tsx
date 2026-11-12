import { BookOpenCheck, FlaskConical, Presentation, UsersRound } from 'lucide-react';
import projectImage from '@/assets/sjr-computer-project.jpg';
import { ResearchIcon, ResearchIntro, ResearchLayout, ResearchSource, researchCard, researchHeading } from './ResearchLayout';
import { researchSources } from './researchSources';

const activityCounts = [
  { year: '2017–18', count: 6 },
  { year: '2018–19', count: 4 },
  { year: '2019–20', count: 7 },
  { year: '2020–21', count: 15 },
  { year: '2021–22', count: 11 },
];
const largestCount = Math.max(...activityCounts.map(({ count }) => count));
const activityTotal = activityCounts.reduce((total, { count }) => total + count, 0);

const researchAreas = [
  {
    icon: FlaskConical,
    title: 'Faculty and student projects',
    text: 'The Research Cell encourages faculty and students to take up thematic projects together. A project can begin with a question from a course, a dataset worth investigating or a prototype that needs testing.',
  },
  {
    icon: Presentation,
    title: 'Workshops and seminars',
    text: 'The college’s research records cover sessions on research methods, intellectual property and entrepreneurship. These sessions connect the practical work of investigating a question with writing, presenting and protecting the results.',
  },
  {
    icon: UsersRound,
    title: 'Collaboration and dissemination',
    text: 'The cell promotes collaboration with other institutions and industry and encourages faculty to share completed work through journals, books and conferences.',
  },
];

const ResearchActivities = () => (
  <ResearchLayout page="activities" related={['enrollment', 'publications', 'studentAchievements']}>
    <ResearchIntro title="From a research question to a project" image={projectImage} alt="Students working together at a computer">
      <p>The Research and Development Cell supports inquiry across departments and encourages faculty and students to work together. Its remit includes academic projects, publication and collaboration with external institutions.</p>
      <ResearchSource href={researchSources.cell}>College Research Cell</ResearchSource>
    </ResearchIntro>

    <section aria-labelledby="research-areas">
      <h2 id="research-areas" className={researchHeading}>How the Research Cell works</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {researchAreas.map(({ icon, title, text }) => (
          <article key={title} className={researchCard}>
            <ResearchIcon icon={icon} />
            <h3 className="mt-4 text-lg font-bold text-[#153b2a]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="research-activity-history" className="grid gap-6 rounded-2xl bg-[#177249]/5 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
      <div>
        <ResearchIcon icon={BookOpenCheck} />
        <h2 id="research-activity-history" className={`mt-4 ${researchHeading}`}>Research activity in the college record</h2>
        <p className="mt-3 leading-relaxed">The college reported <strong>{activityTotal} workshops, seminars and conferences</strong> across academic years 2017–18 to 2021–22.</p>
        <div className="mt-4 space-y-3">
          <div><ResearchSource href={researchSources.selfStudy}>Self-Study Report, metric 3.2.2 (PDF)</ResearchSource></div>
          <div><ResearchSource href={researchSources.researchReport}>Research Activities Report 2021–22 (PDF)</ResearchSource></div>
        </div>
      </div>
      <ul className="space-y-4 self-center" aria-label="Activities by academic year">
        {activityCounts.map(({ year, count }) => (
          <li key={year} className="grid grid-cols-[4.5rem_1fr_1.5rem] items-center gap-2 text-sm tabular-nums sm:gap-3">
            <span className="font-medium">{year}</span>
            <span aria-hidden="true" className="h-2.5 overflow-hidden rounded-full bg-[#177249]/15">
              <span className="block h-full rounded-full bg-[#177249]" style={{ width: `${count / largestCount * 100}%` }} />
            </span>
            <span className="text-right font-semibold text-[#177249]">{count}</span>
          </li>
        ))}
      </ul>
    </section>
  </ResearchLayout>
);

export default ResearchActivities;
