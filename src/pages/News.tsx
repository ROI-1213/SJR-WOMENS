import { ArrowUpRight } from 'lucide-react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import performance from '@/assets/gallery-cultural-fest.jpg';
import workshop from '@/assets/homepage/placement-workshop.webp';
import project from '@/assets/sjr-computer-project.jpg';
import library from '@/assets/sjr-library.jpg';
import sports from '@/assets/sjr-table-tennis.jpg';
import campus from '@/assets/gallery-annual-day.jpg';

const stories = [
  {
    title: 'Students take the stage at a campus arts showcase',
    date: '2026-11-10',
    image: performance,
    alt: 'Students performing on the auditorium stage',
    summary: 'Music, dance and theatre come together in a programme put together by student teams.',
    details: [
      'Students prepared short performances and worked together on rehearsals, stage transitions and introductions. The programme gave performers a chance to present their work and gave volunteers experience coordinating an event from behind the scenes.',
      'After the showcase, teams compared notes on what ran smoothly and what they would change for the next programme. Suggestions included allowing more time for sound checks and giving each group a clearer cue before going on stage.',
    ],
  },
  {
    title: 'Mock interviews give students feedback they can use',
    date: '2026-11-07',
    image: workshop,
    alt: 'Students attending a placement preparation session',
    summary: 'A placement practice session helps students turn project experience into clear interview answers.',
    details: [
      'Students took turns as interviewer and applicant. Each applicant selected an example from coursework or a group project, explained their own contribution and described the outcome.',
      'Partners noted which answers were specific and which needed more context. Each student then rewrote one answer and delivered it again, paying attention to the example, the pace and the way they closed the response.',
    ],
  },
  {
    title: 'Computer lab teams share early project prototypes',
    date: '2026-11-04',
    image: project,
    alt: 'Students collaborating on a computer lab project',
    summary: 'Student teams demonstrate small prototypes and use peer feedback to plan their next revisions.',
    details: [
      'The demonstration session asked each team to show a working feature and explain the problem it addressed. Peers tried the prototypes and identified where instructions, labels or navigation could be clearer.',
      'Teams closed the session by listing one technical improvement and one usability improvement to tackle before their next demonstration. Keeping the list short helped each group decide what to build first.',
    ],
  },
  {
    title: 'Library orientation helps students find the right sources',
    date: '2026-10-30',
    image: library,
    alt: 'Study tables and shelves in the college library',
    summary: 'A library orientation introduces students to the catalogue, reference books and reading spaces.',
    details: [
      'Students used a sample assignment to practise locating a reference book and recording the details they would need to cite it. The session also showed where to ask for help when a topic or search term is too broad.',
      'A short walk through the reading room highlighted the difference between borrowing resources and consulting material on site. Students left with a simple checklist for starting their next library search.',
    ],
  },
  {
    title: 'Table tennis practice welcomes first-time players',
    date: '2026-10-26',
    image: sports,
    alt: 'Students playing table tennis',
    summary: 'Beginners and returning players build confidence through short rallies and friendly doubles games.',
    details: [
      'The session began with an introduction to serving, keeping score and positioning at the table. Returning players paired with beginners so everyone could practise at a pace that suited them.',
      'Players rotated partners after each short game. The format gave students a chance to try doubles, meet new teammates and identify a skill to work on at their next practice.',
    ],
  },
  {
    title: 'Student clubs make it easier to join campus activities',
    date: '2026-10-22',
    image: campus,
    alt: 'Students gathered on campus for an event',
    summary: 'New club notices make meeting times, locations and activities easier to find.',
    details: [
      'Students asked first-year classmates what information they needed before trying a club activity. The answers helped representatives put the date, room, format and any preparation at the top of each notice.',
      'The teams also added a contact point for practical questions. A second round of feedback helped them choose what needed to be in the notice and what could be explained at the meeting.',
    ],
  },
];

const dateFormat = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const News = () => (
  <MediaCenterLayout page="news" previewNote="Sample stories and dates. Campus photographs illustrate each topic.">
    <section aria-label="News stories" className="grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
      {stories.map(story => {
        const date = dateFormat.format(new Date(story.date));

        return (
          <article key={story.title} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#177249]/15 bg-white shadow-sm transition-shadow hover:shadow-md">
            <img src={story.image} alt={story.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full shrink-0 object-cover" />
            <div className="flex flex-1 flex-col items-start p-5">
              <time dateTime={story.date} className="text-sm font-semibold text-[#177249]">{date}</time>
              <h2 className="mt-2 min-h-12 text-lg font-bold leading-6 text-[#177249]">{story.title}</h2>
              <p className="mt-2 line-clamp-2 h-10 text-sm leading-5 text-neutral-700">{story.summary}</p>
              <div className="mt-auto pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" aria-label={`Read more about ${story.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#177249] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#135c3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]">
                      Read More <ArrowUpRight className="size-4" aria-hidden="true" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90dvh] w-[92vw] max-w-2xl gap-0 overflow-y-auto rounded-xl bg-white p-5 pt-12 sm:p-7 sm:pt-12">
                    <img src={story.image} alt={story.alt} className="max-h-56 w-full rounded-lg object-cover" />
                    <time dateTime={story.date} className="mt-4 text-sm font-semibold text-[#177249]">{date}</time>
                    <DialogTitle className="mt-2 text-2xl font-bold leading-tight text-[#177249]">{story.title}</DialogTitle>
                    <DialogDescription className="mt-3 text-sm leading-relaxed text-neutral-700">{story.summary}</DialogDescription>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-800 sm:text-base">
                      {story.details.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  </MediaCenterLayout>
);

export default News;
