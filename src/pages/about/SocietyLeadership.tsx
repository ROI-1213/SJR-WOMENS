import { Crown } from 'lucide-react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import publishedPatronPhoto from '@/assets/about/chief-patron-message.webp';
import publishedPresidentPhoto from '@/assets/about/president-message.webp';
import publishedSecretaryPhoto from '@/assets/about/secretary-message.webp';
import vicePresidentPhoto from '@/assets/about/office-rajendra-prasad.webp';
import secondVicePresidentPhoto from '@/assets/about/office-mahesh-hiremath.webp';
import treasurerPhoto from '@/assets/about/office-kotreshappa.webp';

const society = 'Sri Jagadguru Renukacharya Education Society';
const patron = {
  name: 'Poojya Sri Rambhapuri Jagadgurugalu',
  role: 'Permanent Chief Patron',
  photo: publishedPatronPhoto,
};
const president = { name: 'Sri S.R. Veerabhadraiah', role: 'President', photo: publishedPresidentPhoto };
const secretary = { name: 'Sri Prabhudev Kalmath', role: 'Secretary', photo: publishedSecretaryPhoto };
const officeBearers = [
  president,
  { name: 'Sri S.V. Rajendra Prasad', role: 'Vice-President', photo: vicePresidentPhoto },
  { name: 'Sri Mahesh M. Hiremath', role: 'Vice-President', photo: secondVicePresidentPhoto },
  secretary,
  { name: 'Sri M. Kotreshappa', role: 'Treasurer', photo: treasurerPhoto },
];
const committeeMembers = [
  'Sri B. M. Jagadeeshwar Swamy',
  'Sri Prabhu Annigeri',
  'Sri Umesh Nagathan',
  'Sri U.M. Basavaraj',
  'Sri Kirandev Hiremath',
];

type PublishedMessageProps = {
  title: string;
  breadcrumb: string;
  profile: typeof patron;
  profileDetails?: string[];
  greeting: string;
  paragraphs: string[];
  closing: string;
};

function PublishedMessage({ title, breadcrumb, profile, profileDetails, greeting, paragraphs, closing }: PublishedMessageProps) {
  return (
    <AboutLayout pageTitle={title} breadcrumbPath={breadcrumb}>
      <article className="mx-auto grid max-w-6xl items-start gap-7 px-4 py-8 sm:px-6 sm:py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] md:gap-8 lg:gap-12">
        <figure className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 md:sticky md:top-[4.5rem]">
          <img
            src={profile.photo}
            alt={profile.name}
            width={302}
            height={377}
            className="mx-auto h-auto w-full max-w-52 rounded-lg object-contain md:max-h-[calc(100dvh-8rem)] md:w-auto md:max-w-full"
          />
        </figure>
        <div className="border-y border-neutral-200 py-5 sm:py-6">
          <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
            <p className="border-l-2 border-[#ff8c00] pl-4 font-semibold text-[color:var(--section-heading-color)]">{greeting}</p>
            {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <footer className="mt-6 border-t border-neutral-200 pt-4">
            <p className="mb-2 leading-relaxed text-neutral-700">{closing}</p>
            <h2 className="text-xl font-semibold leading-snug text-[color:var(--section-heading-color)]">{profile.name}</h2>
            <p className="mt-1 text-sm font-semibold text-[#177249]">{profile.role}</p>
            {profileDetails?.map(detail => <p key={detail} className="mt-2 text-sm leading-relaxed text-neutral-700">{detail}</p>)}
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{society}</p>
          </footer>
        </div>
      </article>
    </AboutLayout>
  );
}

export const ChiefPatronMessage = () => (
  <PublishedMessage
    title="Message from the Chief Patron"
    breadcrumb="Chief Patron's Message"
    profile={patron}
    profileDetails={[
      'Srimad Rambhapuri Veerasimhasanaadeeshwara',
      'Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu',
      'Balehonnuru, Chikkamagaluru District – 577112',
    ]}
    greeting="Blessings and greetings,"
    paragraphs={[
      'I take deep spiritual joy in seeing Sri Jagadguru Renukacharya Education Society grow and continue its service to education, a mission it has carried forward since 1945.',
      'Guided by dharma and with the blessings of Sri Jagadguru Renukacharya, the Society has helped generations of students gain knowledge, practise discipline and develop their character. In doing so, it has sustained a tradition of education grounded in values.',
      'I am encouraged to see the Society honour its heritage while adopting new approaches to education, including AI-enabled learning.',
      'May wisdom and righteousness guide the students, faculty and management in all their work.',
    ]}
    closing="With blessings,"
  />
);

export const PresidentsMessage = () => (
  <PublishedMessage
    title="Message from the President"
    breadcrumb="President's Message"
    profile={president}
    greeting="Greetings from Sri Jagadguru Renukacharya Education Society,"
    paragraphs={[
      'It is a pleasure to share the Society’s story. A clear vision, strong values and a respect for tradition have sustained its work over the years.',
      'Since its modest beginnings in 1945, the Society has earned trust as an educational institution and extended its work to serve more learners. The blessings of Sri Rambhapuri Peeta have been central to that growth and service.',
      'As we mark eight decades, we are introducing AI-enabled classrooms and new teaching practices to prepare students for a changing world.',
      'Our commitment is to provide a high-quality education grounded in values so that successive generations can realise their potential.',
    ]}
    closing="Warm regards,"
  />
);

export const SecretarysMessage = () => (
  <PublishedMessage
    title="Message from the Secretary"
    breadcrumb="Secretary's Message"
    profile={secretary}
    greeting="Greetings from Sri Jagadguru Renukacharya Education Society,"
    paragraphs={[
      'I am proud to reflect on how far Sri Jagadguru Renukacharya Education Society has come. Founded in 1945 with a vision of providing quality education, the Society continues to make a difference in learners’ lives.',
      'As we mark 80 years of service, we are looking ahead. By introducing AI-enabled classrooms, upgrading infrastructure and adopting new approaches to teaching and learning, we aim to provide an education that meets today’s needs and opens new possibilities for students.',
      'We will continue to encourage excellence and innovation while supporting the all-round development of every learner.',
    ]}
    closing="Warm regards,"
  />
);

export const OfficeBearers = () => (
  <AboutLayout pageTitle="Office Bearers" breadcrumbPath="Office Bearers">
    <section aria-labelledby="office-bearers-heading" className="mx-auto max-w-[83rem] px-4 py-10 sm:px-6 sm:py-16">
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#177249]">Leadership</p>
        <h2 id="office-bearers-heading" className="text-3xl font-bold text-logo-navy-dark md:text-4xl">Our Office Bearers</h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Our office bearers guide the institution with integrity and a commitment to academic success and continued growth.
        </p>
      </header>
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {officeBearers.map(({ name, role, photo }) => (
          <li key={name} className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
            <img src={photo} alt="" width={302} height={377} loading="lazy" className="aspect-[3/4] h-auto w-full bg-neutral-100 object-cover" />
            <div className="px-3 py-4 text-center">
              <h3 className="text-sm font-bold text-logo-navy-dark xl:text-[15px]">{name}</h3>
              <p className="mt-1 text-xs font-semibold text-[#177249]">{role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </AboutLayout>
);

export const ExecutiveCommittee = () => (
  <AboutLayout pageTitle="Executive Committee Members" breadcrumbPath="EC Members">
    <section aria-labelledby="ec-members-heading" className="mx-auto max-w-[75rem] px-4 py-10 sm:px-6 sm:py-16">
      <h2 id="ec-members-heading" className="mx-auto mb-8 max-w-4xl text-center text-2xl font-bold leading-tight text-logo-navy-dark sm:mb-12 md:text-3xl">
        {society}<br />Executive Committee Members 2026–2029
      </h2>
      <div className="mx-auto mb-8 max-w-4xl rounded-2xl bg-white p-6 text-center shadow-md sm:mb-10 sm:p-8">
        <span className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-[#ff8c00]/15 text-[#ff8c00]">
          <Crown size={32} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-logo-navy-dark sm:text-2xl">{patron.name}</h3>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-neutral-700">
          Srimad Rambhapuri Veerasimhasanaadeeshwara Sri Sri Sri 1008 Jagadguru Prasanna Renuka Dr. Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Rambhapuri Peeta, Balehonnuru, Chikkamagaluru District – 577112
        </p>
        <p className="mt-5 inline-block rounded-full bg-[#177249]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#177249]">{patron.role}</p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...officeBearers, ...committeeMembers.map(name => ({ name, role: 'Executive Committee Member' }))].map(({ name, role }) => (
          <li key={name} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold leading-tight text-logo-navy-dark">{name}</h3>
            <p className="mt-2 text-sm font-semibold text-[#177249]">{role}, SJRES</p>
            <p className="mt-2 text-xs text-neutral-600">Anand Rao Circle, Bengaluru</p>
          </li>
        ))}
      </ul>
    </section>
  </AboutLayout>
);
