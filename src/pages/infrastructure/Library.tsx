import { Archive, BookCopy, BookOpen, Calendar, Clock, Database, HelpCircle, Monitor, Search, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import libraryEntrance from '@/assets/lib1.jpg';
import readingRoom from '@/assets/lib2.jpg';
import { FacilityCards, FacilityIntro, FacilitySection, FacilityStats } from './FacilityContent';

const libraryReport = 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=45';

const features = [
  { icon: BookOpen, title: 'Print Collection', description: 'Textbooks, reference works, magazines, and journals support coursework and independent reading.' },
  { icon: Database, title: 'Digital Resources', description: 'Students and faculty can access electronic journals and books through INFLIBNET N-LIST.' },
  { icon: Wifi, title: 'Internet Access', description: 'Internet-connected library computers support catalogue searches and online research.' },
  { icon: Users, title: 'Study Spaces', description: 'The reference hall and reading room provide space for study between classes.' },
  { icon: Clock, title: 'Weekday and Saturday Access', description: 'The library opens on working weekdays and has a shorter schedule on Saturdays.' },
  { icon: Search, title: 'Library Catalogue', description: 'The library uses LibSoft to manage its catalogue and circulation. Ask library staff for help locating material.' },
];

const spaces = [
  { icon: BookOpen, title: 'Quiet Reading Area', description: 'The reading room gives students a place to focus on coursework and reference material.' },
  { icon: Users, title: 'Reference Hall', description: 'Consult books and periodicals from the reference collection on site.' },
  { icon: Monitor, title: 'Digital Access', description: 'Computers and a scanner help students work with digital and print resources.' },
];

const services = [
  { icon: HelpCircle, title: 'Reference Assistance', description: 'Ask library staff for help finding material for an assignment or research topic.' },
  { icon: BookCopy, title: 'Borrowing & Book Bank', description: 'Students and faculty use library cards to borrow books. The college also maintains a separate SC/ST book bank.' },
  { icon: Archive, title: 'Digital Collections', description: 'Online journals and e-books complement the printed collection.' },
  { icon: Search, title: 'Research Support', description: 'Use the reference collection and electronic resources to find sources and develop a reading list.' },
];

const Library = () => (
  <InfrastructureLayout pageTitle="Library" showRelated={false}>
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="A Place to Read, Study, and Research" photo={libraryEntrance} alt="Students reading beside bookshelves in the library">
        <p>The library supports students and faculty with print and digital collections, a reference hall, and space for independent study.</p>
        <p>Staff can help readers find material and use the catalogue and lending services.</p>
      </FacilityIntro>

      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        <figure className="relative min-h-60 overflow-hidden rounded-2xl">
          <img src={readingRoom} alt="Shelves and reading area in the college library" loading="lazy" className="absolute inset-0 size-full object-cover" />
        </figure>
        <FacilityStats title="Library Collection at a Glance" items={[
          { value: '30,000+', label: 'Books' },
          { value: '8,000', label: 'Titles' },
          { value: '10,000', label: 'Reference books' },
        ]} />
        <div className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 lg:col-span-2">
          <h2 className="font-semibold text-[#177249]">Support for Independent Study</h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">A quiet place to work, access to reference material, and help from library staff give students a starting point for longer assignments and projects.</p>
        </div>
      </div>

      <FacilitySection title="Library Features & Facilities"><FacilityCards items={features} /></FacilitySection>
      <FacilitySection title="Specialized Learning Spaces"><FacilityCards items={spaces} /></FacilitySection>
      <FacilitySection title="Library Services"><FacilityCards items={services} columns="sm:grid-cols-2" /></FacilitySection>

      <div className="rounded-2xl bg-[#177249]/5 p-5 sm:p-8">
        <FacilitySection title="Access & Booking Information">
          <FacilityCards items={[
            { icon: Clock, title: 'Published Library Hours', description: 'Monday to Friday, 8 am–4 pm. Saturday, 8 am–2 pm. Closed on Sundays and public holidays.' },
            { icon: Calendar, title: 'Study Space & Reference Access', description: 'Ask the library desk about space availability and how to consult reference materials.' },
            { icon: HelpCircle, title: 'Research Enquiries', description: 'Contact the library for help with catalogue searches and electronic resources.' },
          ]} />
          <a href={libraryReport} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">Published hours and collection figures (PDF)</a>
        </FacilitySection>
      </div>

      <section className="rounded-2xl border border-[#177249]/15 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-[#177249]">Discover Our Resources</h2>
          <p className="mt-2 max-w-xl text-neutral-700">Ask the college about catalogue access, library orientation, or a space to study.</p>
        </div>
        <Link to="/contact" className="mt-5 inline-flex shrink-0 rounded-lg bg-[#177249] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#135c3b] sm:mt-0">Contact the College</Link>
      </section>
    </div>
  </InfrastructureLayout>
);

export default Library;
