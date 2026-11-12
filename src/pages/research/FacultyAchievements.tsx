import { Award, GraduationCap, Presentation, UsersRound } from 'lucide-react';
import { ResearchIcon, ResearchLayout, ResearchSource, researchCard, researchHeading } from './ResearchLayout';
import { researchSources } from './researchSources';

const FacultyAchievements = () => (
  <ResearchLayout page="facultyAchievements" related={['publications', 'guides', 'activities']}>
    <section aria-labelledby="faculty-recognition">
      <h2 id="faculty-recognition" className={researchHeading}>Faculty recognition in the college record</h2>
      <p className="mt-3 max-w-3xl leading-relaxed">The 2020–21 Annual Report records distinctions earned by faculty in Chemistry and Commerce. These highlights cover research, conference presentation and teaching.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className={`${researchCard} border-t-4 border-t-[#ff8c00]`}>
          <ResearchIcon icon={Award} />
          <h3 className="mt-4 text-xl font-bold text-[#153b2a]">Dr. Mylarappa M</h3>
          <p className="mt-1 text-sm font-semibold text-[#177249]">Department of Chemistry</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-[#177249]">
            <li>Young Research Award</li>
            <li>Best paper presentation award</li>
          </ul>
        </article>
        <article className={`${researchCard} border-t-4 border-t-[#ff8c00]`}>
          <ResearchIcon icon={GraduationCap} />
          <h3 className="mt-4 text-xl font-bold text-[#153b2a]">Shobha Rani R</h3>
          <p className="mt-1 text-sm font-semibold text-[#177249]">Department of Commerce</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-[#177249]">
            <li>State-level best teacher award (2018)</li>
            <li>International-level best research scholar award</li>
            <li>Outstanding educator distinction at the 2019 South Indian Women’s Achievers Award</li>
          </ul>
        </article>
      </div>
      <div className="mt-4"><ResearchSource href={researchSources.facultyAwards}>Annual Report 2020–21, section XV (PDF)</ResearchSource></div>
    </section>

    <section aria-labelledby="faculty-contributions" className="rounded-2xl bg-[#177249]/5 p-5 sm:p-8">
      <h2 id="faculty-contributions" className={researchHeading}>Contributions to research at SJRC</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className={researchCard}>
          <ResearchIcon icon={UsersRound} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Research Cell coordination</h3>
          <p className="mt-2 text-sm leading-relaxed">The 2021–22 committee record lists Dr. Mylarappa M as convener. It brought together faculty from multiple disciplines to support projects and student participation in research.</p>
          <div className="mt-4"><ResearchSource href={researchSources.cell}>Research Cell committee record</ResearchSource></div>
        </article>
        <article className={researchCard}>
          <ResearchIcon icon={Presentation} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Student publication support</h3>
          <p className="mt-2 text-sm leading-relaxed">The Chemistry department supported students in developing work for journal publication. The initiative is recorded in the Self-Study Report alongside the college’s efforts to expand research participation and build technical skills.</p>
          <div className="mt-4"><ResearchSource href={researchSources.selfStudy}>Self-Study Report, criterion 3 (PDF)</ResearchSource></div>
        </article>
      </div>
    </section>
  </ResearchLayout>
);

export default FacultyAchievements;
