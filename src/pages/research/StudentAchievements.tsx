import { BookOpen, CircuitBoard, Medal, Network } from 'lucide-react';
import { ResearchIcon, ResearchLayout, ResearchSource, researchCard, researchHeading } from './ResearchLayout';
import { researchSources } from './researchSources';

const StudentAchievements = () => (
  <ResearchLayout page="studentAchievements" related={['activities', 'enrollment', 'guides']}>
    <section aria-labelledby="student-projects">
      <h2 id="student-projects" className={researchHeading}>Student work in research and technology</h2>
      <p className="mt-3 max-w-3xl leading-relaxed">The college’s Self-Study Report documents students building working models in Computer Science and contributing to journal papers in Chemistry. Its 2025–26 disclosures also record a student model presentation on computer networks.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className={researchCard}>
          <ResearchIcon icon={CircuitBoard} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Working prototypes</h3>
          <p className="mt-2 text-sm leading-relaxed">Computer Science students built a home-automation model, a vehicle prototype that used voice control and obstacle detection, and an Internet of Things attendance system.</p>
          <div className="mt-4"><ResearchSource href={researchSources.selfStudy}>Self-Study Report, metric 3.2.1 (PDF)</ResearchSource></div>
        </article>
        <article className={researchCard}>
          <ResearchIcon icon={BookOpen} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Student research papers</h3>
          <p className="mt-2 text-sm leading-relaxed">In Chemistry, the college reported two published papers and two more accepted for publication through an initiative to help students share their research in journals.</p>
          <div className="mt-4"><ResearchSource href={researchSources.selfStudy}>Self-Study Report, metric 3.2.1 (PDF)</ResearchSource></div>
        </article>
        <article className={researchCard}>
          <ResearchIcon icon={Network} />
          <h3 className="mt-4 text-lg font-bold text-[#153b2a]">Computer network models</h3>
          <p className="mt-2 text-sm leading-relaxed">The model presentation held on 15 November 2025 recorded 57 participants, according to the college’s Mandatory Disclosures.</p>
          <div className="mt-4"><ResearchSource href={researchSources.disclosures}>Mandatory Disclosures 2025–26, section 17 (PDF)</ResearchSource></div>
        </article>
      </div>
    </section>

    <section aria-labelledby="student-prizes" className="grid gap-5 rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-8">
      <div className="self-center">
        <ResearchIcon icon={Medal} />
        <h2 id="student-prizes" className={`mt-4 ${researchHeading}`}>Academic prizes</h2>
        <p className="mt-3 leading-relaxed">Selected Commerce honours from the college’s 2021–22 endowment prize and scholarship record.</p>
        <div className="mt-4"><ResearchSource href={researchSources.studentPrizes}>Endowment prizes and scholarships 2021–22 (PDF)</ResearchSource></div>
      </div>
      <dl className="divide-y divide-[#177249]/15 rounded-xl border border-[#177249]/15 bg-white">
        <div className="p-4 sm:p-5">
          <dt className="font-bold text-[#153b2a]">Sanjay Aradhya</dt>
          <dd className="mt-1 text-sm leading-relaxed">Recognised as the top-performing Commerce student in the endowment prize record.</dd>
        </div>
        <div className="p-4 sm:p-5">
          <dt className="font-bold text-[#153b2a]">Deenanivash and Nikita R</dt>
          <dd className="mt-1 text-sm leading-relaxed">Named for the Dhananjaya Endowment, which recognises high achievement in third-year B.Com.</dd>
        </div>
      </dl>
    </section>
  </ResearchLayout>
);

export default StudentAchievements;
