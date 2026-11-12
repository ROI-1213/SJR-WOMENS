import { ArrowDown, CalendarDays, Clock, MapPin } from 'lucide-react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import performancePhoto from '@/assets/gallery-cultural-fest.jpg';

const schedule = [
  {
    date: '2027-01-20',
    day: '20',
    month: 'Jan',
    category: 'Arts & culture',
    title: 'Student Arts Showcase',
    time: '2:00–4:30 pm',
    place: 'Auditorium',
    description: 'A programme of short performances in music, theatre, dance, and spoken word, with an interval for students to meet the performers.',
  },
  {
    date: '2027-02-05',
    day: '05',
    month: 'Feb',
    category: 'Commerce',
    title: 'Business Case Workshop',
    time: '10:30 am–12:30 pm',
    place: 'Classroom',
    description: 'Teams work through a sample retail case, weigh the available evidence, and present a short recommendation.',
  },
  {
    date: '2027-02-19',
    day: '19',
    month: 'Feb',
    category: 'Sports',
    title: 'Campus Games Afternoon',
    time: '2:00–4:00 pm',
    place: 'Indoor sports area',
    description: 'A friendly practice session with short rounds of table tennis and carrom, including space for first-time players.',
  },
  {
    date: '2027-03-03',
    day: '03',
    month: 'Mar',
    category: 'Academics',
    title: 'Student Research Poster Session',
    time: '11:00 am–1:00 pm',
    place: 'College campus',
    description: 'Students explain a research question, the evidence they collected, and one finding to visitors in brief poster presentations.',
  },
];

const Events = () => (
  <MediaCenterLayout page="events" previewNote="Sample programme for preview. The dates and venues below are illustrative.">
    <section aria-labelledby="featured-event" className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-2">
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-72">
        <img src={performancePhoto} alt="Students performing on the auditorium stage during a cultural event" className="absolute inset-0 size-full object-cover" decoding="async" />
      </div>
      <div className="flex flex-col items-start justify-center p-5 sm:p-8 lg:p-10">
        <p className="mb-2 text-sm font-semibold text-[#177249]">Featured sample event</p>
        <h2 id="featured-event" className="text-2xl font-bold text-[#177249] sm:text-3xl">Student Arts Showcase</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">A shared stage for performances in music, dance, theatre, and spoken word. The sample programme gives each group a short slot and includes a break to meet the performers.</p>
        <a href="#event-schedule" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#177249] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#135c3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]">
          View sample schedule <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section id="event-schedule" aria-labelledby="event-schedule-heading" className="scroll-mt-20">
      <div className="mb-5 flex items-center gap-3">
        <CalendarDays className="size-6 shrink-0 text-[#177249]" aria-hidden="true" />
        <h2 id="event-schedule-heading" className="text-2xl font-bold text-[#177249] sm:text-3xl">Sample event schedule</h2>
      </div>
      <ol className="divide-y divide-[#177249]/15 rounded-xl border border-[#177249]/15 bg-white">
        {schedule.map(event => (
          <li key={event.date} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 p-4 sm:gap-5 sm:p-5">
            <time dateTime={event.date} aria-label={`${event.day} ${event.month} ${event.date.slice(0, 4)}`} className="min-w-14 rounded-lg bg-[#177249]/10 px-2 py-2 text-center text-[#177249] sm:min-w-16">
              <span className="block text-xl font-bold leading-tight sm:text-2xl">{event.day}</span>
              <span className="block text-xs font-semibold uppercase">{event.month}</span>
              <span className="mt-0.5 block text-xs">{event.date.slice(0, 4)}</span>
            </time>
            <div>
              <p className="text-xs font-semibold text-[#177249]">{event.category}</p>
              <h3 className="mt-1 text-lg font-bold text-[#177249]">{event.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-700">{event.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-700 sm:text-sm">
                <span className="inline-flex items-center gap-1.5"><Clock className="size-4 shrink-0 text-[#177249]" aria-hidden="true" />{event.time}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 shrink-0 text-[#177249]" aria-hidden="true" />{event.place}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  </MediaCenterLayout>
);

export default Events;
