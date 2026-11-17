import { ClipboardCheck, FileText, MessagesSquare, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { PlacementCards, placementAction, placementHeading } from './PlacementContent';

const team = ['Mira Hegde', 'Arun Desai', 'Isha Rao', 'Kiran Kulkarni', 'Nikhil Shetty'];
const preparation = [
  { icon: FileText, title: 'Present your experience', description: 'Write a résumé that shows what you contributed to projects, internships, and activities. Choose examples you can discuss in an interview.' },
  { icon: ClipboardCheck, title: 'Practise the selection stages', description: 'Prepare for aptitude and technical assessments, group discussions, and interviews. Use feedback to decide what to improve before the next round.' },
  { icon: MessagesSquare, title: 'Ask questions about the role', description: 'Read the employer’s requirements and ask about the work, learning opportunities, and selection timeline before you apply.' },
];

const DirectorMessage = () => (
  <PlacementLayout page="director" related={['vision', 'training', 'overview']}>
    <p className="rounded-r-lg border-l-4 border-[#ff8c00] bg-[#ff8c00]/10 px-4 py-3 text-sm leading-relaxed text-neutral-800">
      The names and profile images below are placeholders pending confirmation of the current director and team.
    </p>

    <section aria-labelledby="placement-director-message" className="grid items-start gap-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)]">
      <div className="rounded-xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-6">
        <div className="mb-4 grid aspect-[4/3] max-h-56 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]" role="img" aria-label="Placeholder profile image">
          <UserRound className="size-20" strokeWidth={1.25} aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold text-[#177249]">Sample profile</p>
        <h2 className="mt-1 text-xl font-bold text-[#177249]">Ananya Rao</h2>
        <p className="mt-1 text-sm text-neutral-700">Placement Director</p>
      </div>

      <article className="rounded-xl border border-[#177249]/15 p-5 sm:p-8">
        <h2 id="placement-director-message" className={`border-l-4 border-[#ff8c00] pl-4 ${placementHeading}`}>Draft message to students</h2>
        <div className="mt-5 space-y-4 leading-relaxed text-neutral-700">
          <p>A good career decision starts with understanding what you enjoy doing, what you already do well, and where you still need practice. Use assignments, projects, and internships to build examples that show how you approach a problem and work with other people.</p>
          <p>Placement preparation is most effective when it starts early. Use training and mock interviews to build confidence, then seek feedback and try again. An aptitude exercise can show where you need more practice. A conversation with a mentor can help you decide whether a role suits your interests and goals.</p>
          <p>When an employer shares an opportunity, read the role and eligibility details carefully. Ask what the work involves and what the selection stages expect of you. The Placement Cell can help you prepare for campus and off-campus opportunities and consider the next step that makes sense for you.</p>
        </div>
        <Link to="/contact" className={`${placementAction} mt-5`}>Contact the college about placements</Link>
      </article>
    </section>

    <section aria-labelledby="director-preparation">
      <h2 id="director-preparation" className={`${placementHeading} mb-5 border-b border-[#177249]/20 pb-3`}>Before a recruitment drive</h2>
      <PlacementCards items={preparation} />
    </section>

    <section aria-labelledby="placement-team">
      <h2 id="placement-team" className={`${placementHeading} mb-5`}>Placement Team</h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {team.map(name => (
          <li key={name} className="rounded-xl border border-[#177249]/15 p-4">
            <div className="mb-3 grid size-14 place-items-center rounded-full bg-[#177249]/10 text-[#177249]" role="img" aria-label="Placeholder profile image">
              <UserRound className="size-7" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold text-[#177249]">Sample profile</p>
            <h3 className="mt-1 font-semibold text-[#177249]">{name}</h3>
            <p className="mt-1 text-sm text-neutral-700">Co-coordinator</p>
          </li>
        ))}
      </ul>
    </section>
  </PlacementLayout>
);

export default DirectorMessage;
