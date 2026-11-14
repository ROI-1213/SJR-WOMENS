import { Film, Youtube, ArrowUpRight } from 'lucide-react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { instituteContact } from '@/data/institute';
import campus from '@/assets/sjr-administrative-block.jpg';
import classroom from '@/assets/sjr-teacher-guidance.jpg';
import performance from '@/assets/gallery-cultural-fest.jpg';

const clips = {
  campus: {
    id: 'campus-walkthrough',
    title: 'A walk through campus',
    poster: campus,
    description: 'Start outside the administrative block, then look inside a classroom and the library reading room.',
  },
  learning: {
    id: 'learning-in-action',
    title: 'Learning in action',
    poster: classroom,
    description: 'See faculty guidance in a classroom, students working on a computer lab project, and an interview preparation session.',
  },
  activities: {
    id: 'beyond-the-classroom',
    title: 'Beyond the classroom',
    poster: performance,
    description: 'See a cultural performance, students playing table tennis, and a group photograph of a sports team.',
  },
};

const ClipPlayer = ({ clip }: { clip: typeof clips.campus }) => (
  <video
    controls
    playsInline
    preload="none"
    poster={clip.poster}
    aria-label={clip.title}
    aria-describedby={`${clip.id}-description`}
    className="block aspect-video w-full bg-[#153b2a] object-contain"
  >
    <source src={`/media-center/${clip.id}.mp4`} type="video/mp4" />
    <a href={`/media-center/${clip.id}.mp4`} download>Download {clip.title}</a>
  </video>
);

const Videos = () => (
  <MediaCenterLayout page="video" previewNote="These sample photo tours use campus photographs and contain no audio.">
    <section aria-labelledby="campus-tour-video" className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center">
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-4 grid size-11 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]">
          <Film className="size-5" aria-hidden="true" />
        </div>
        <h2 id="campus-tour-video" className="text-2xl font-bold text-[#177249] sm:text-3xl">{clips.campus.title}</h2>
        <p id={`${clips.campus.id}-description`} className="mt-3 leading-relaxed text-neutral-700">{clips.campus.description}</p>
      </div>
      <ClipPlayer clip={clips.campus} />
    </section>

    <section aria-labelledby="more-campus-videos">
      <h2 id="more-campus-videos" className="mb-5 border-b border-[#177249]/20 pb-3 text-2xl font-bold text-[#177249] sm:text-3xl">More campus photo tours</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {[clips.learning, clips.activities].map(clip => (
          <article key={clip.id} className="overflow-hidden rounded-xl border border-[#177249]/15 bg-white">
            <ClipPlayer clip={clip} />
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-bold text-[#177249]">{clip.title}</h3>
              <p id={`${clip.id}-description`} className="mt-2 text-sm leading-relaxed text-neutral-700">{clip.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section aria-labelledby="youtube-channel" className="mt-8 rounded-xl border border-[#c28422]/30 bg-gradient-to-br from-[#177249] to-[#0e271c] p-6 text-white sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 text-[#dfa03e]">
            <Youtube size={22} className="text-[#FF0000]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider">Official YouTube Channel</span>
          </div>
          <h2 id="youtube-channel" className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
            Watch More on SJR College for Women YouTube
          </h2>
          <p className="mt-1 text-xs text-white/80">
            Subscribe for campus events, annual day celebrations, student activities, and special guest lectures.
          </p>
        </div>
        <a
          href={instituteContact.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#dfa03e] bg-[#dfa03e] px-4 py-2.5 text-xs font-bold text-[#177249] shadow transition-colors hover:bg-white"
        >
          <span>Visit YouTube Channel</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  </MediaCenterLayout>
);

export default Videos;
