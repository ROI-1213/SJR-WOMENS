import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import leadershipImage from '@/assets/homepage/academic-leadership.webp';
import { principalCredentials, principalName } from '@/data/institute';

const message = [
  'A degree should teach students how to ask better questions, weigh evidence and put what they learn to work. We encourage students to participate actively in class, seek feedback from faculty and take responsibility for the quality of their work.',
  'The habits students build here matter beyond exams. Working with others, listening carefully and following through on commitments are as important in college as they are in a career or in service to the community.',
  'We welcome prospective students and families to learn about our programmes, visit the campus and speak with us about the support available during their time at the college.',
];

export const PrincipalMessage = ({ fullMessage = false }: { fullMessage?: boolean }) => (
  <section aria-labelledby="leadership-title" className="bg-[#eef4ef] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      <h2 id="leadership-title" className="home-section-title mb-5 sm:mb-6">
        {fullMessage ? 'From the Principal’s Office' : 'Leadership'}
      </h2>
      <article className="overflow-hidden rounded-xl border border-[#d8e5dc] bg-white md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <figure className="relative min-h-44 bg-[#183c2b] sm:min-h-56">
          <img
            src={leadershipImage}
            alt="An academic office with a teak desk, books and a sunlit window"
            width={1200}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-3 left-3 rounded bg-[#183c2b] px-2 py-1 text-xs text-white">AI-generated illustration</figcaption>
        </figure>
        <div className="p-5 sm:p-6 lg:p-8">
          <p className="mb-2 text-sm font-semibold text-[#177249]">Principal</p>
          <h3 className="home-display-title text-2xl leading-tight lg:text-[1.65rem]">{principalName}</h3>
          <p className="mt-2 text-sm font-medium text-[#43534a]">{principalCredentials}</p>
          <div className="mt-5 space-y-4 border-t border-[#d8e5dc] pt-5 leading-relaxed text-[#43534a]">
            {(fullMessage ? message : message.slice(0, 1)).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {!fullMessage && (
            <Link to="/about/principals-message" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#185d40] underline underline-offset-4 hover:text-[#177249]">
              Read the Principal’s message
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          )}
        </div>
      </article>
    </div>
  </section>
);
