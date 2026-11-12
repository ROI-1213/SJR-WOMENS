import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { FloatingApplyButton } from './FloatingApplyButton';
import librarySmall from '@/assets/hero/library-800.webp';
import libraryLarge from '@/assets/hero/library-1440.webp';
import libraryPreview from '@/assets/hero/library-144.webp';
import computerLabSmall from '@/assets/hero/computer-lab-800.webp';
import computerLabLarge from '@/assets/hero/computer-lab-1440.webp';
import computerLabPreview from '@/assets/hero/computer-lab-144.webp';
import studentLifeSmall from '@/assets/hero/student-life-800.webp';
import studentLifeLarge from '@/assets/hero/student-life-1440.webp';
import studentLifePreview from '@/assets/hero/student-life-144.webp';
import './Banner.css';

const campusPhotos = [
  {
    label: 'Library',
    caption: 'In the library reading room',
    alt: 'Three students reading together at a library table',
    small: librarySmall,
    large: libraryLarge,
    preview: libraryPreview,
  },
  {
    label: 'Computer lab',
    caption: 'Practical work in the computer lab',
    alt: 'Students working at desktop computers in the campus lab',
    small: computerLabSmall,
    large: computerLabLarge,
    preview: computerLabPreview,
  },
  {
    label: 'Student life',
    caption: 'A game of carrom on campus',
    alt: 'Four students playing carrom together',
    small: studentLifeSmall,
    large: studentLifeLarge,
    preview: studentLifePreview,
  },
];

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const photoRequest = useRef(0);
  const activePhoto = campusPhotos[activeIndex];

  const selectPhoto = useCallback(async (index: number) => {
    const image = images.current[index];
    if (!image) return;

    const request = ++photoRequest.current;
    try {
      await image.decode();
      if (request === photoRequest.current) setActiveIndex(index);
    } catch {
      // Keep the last usable image if the next one fails to load.
    }
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pauseForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) setIsPlaying(false);
    };
    motionPreference.addEventListener('change', pauseForReducedMotion);
    return () => motionPreference.removeEventListener('change', pauseForReducedMotion);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const rotation = window.setInterval(() => {
      if (!document.hidden) void selectPhoto((activeIndex + 1) % campusPhotos.length);
    }, 6000);
    return () => {
      window.clearInterval(rotation);
      photoRequest.current += 1;
    };
  }, [activeIndex, isPlaying, selectPhoto]);

  return (
    <section aria-labelledby="home-hero-title" className="border-b border-[#e5e5da] bg-[#f8f6ed]">
      <div className="mx-auto grid max-w-[1380px] items-stretch gap-5 px-5 py-6 sm:px-8 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-8 md:py-7 lg:gap-12 lg:px-12 lg:py-8 xl:gap-14">
        <div data-hero-panel="content" className="flex min-w-0 flex-col rounded-xl bg-[#183c2b] px-5 py-7 sm:px-7 lg:px-9 lg:py-7">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-green-50 sm:mb-5">
            <span className="h-0.5 w-6 bg-[#ff8c00]" aria-hidden="true" />
            Degree programmes
          </p>
          <h1 id="home-hero-title" className="home-display-title text-[clamp(2rem,4.2vw,4rem)] font-normal leading-[1.06] tracking-[-0.025em] text-white">
            <span className="home-hero-orange">Science, Arts</span>{' '}
            <span className="block">&amp; Commerce</span>
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-green-50/90 lg:mt-5">
            Explore undergraduate and postgraduate study at our Anand Rao Circle campus in Bengaluru.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-8">
            <Link
              to="/academics"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#185d40] transition-colors hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:px-5"
            >
              Explore Programmes
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <FloatingApplyButton inline />
          </div>
          <div className="mt-auto pt-7 lg:pt-9">
            <div className="border-t border-white/20 pt-4">
              <p className="home-display-title text-xl leading-tight text-white sm:text-2xl">Inspiring minds, shaping futures.</p>
              <p className="mt-2 text-sm text-green-50/85">Building competence, character and confidence.</p>
            </div>
          </div>
        </div>

        <div data-hero-panel="photos" className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#d7e3d9] bg-white">
          <figure id="home-hero-photo" className="relative isolate aspect-[4/3] overflow-hidden bg-[#177249] sm:aspect-[16/10] md:aspect-auto md:min-h-72 md:flex-1 lg:min-h-80">
            {campusPhotos.map((photo, index) => (
              <img
                key={photo.label}
                ref={image => { images.current[index] = image; }}
                src={photo.small}
                srcSet={`${photo.small} 800w, ${photo.large} 1440w`}
                sizes="(min-width: 1380px) 710px, (min-width: 768px) 53vw, 94vw"
                width={1440}
                height={960}
                alt={photo.alt}
                aria-hidden={index !== activeIndex}
                fetchPriority={index === 0 ? 'high' : 'low'}
                className="home-hero-photo absolute inset-0 h-full w-full object-cover object-center"
              />
            ))}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 bg-[#177249]/10" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#177249] to-[#177249]/0" />
            <figcaption aria-live={isPlaying ? 'off' : 'polite'} className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 text-sm font-semibold text-white sm:px-5 sm:pb-4">
              {activePhoto.caption}
            </figcaption>
          </figure>

          <div role="group" aria-label="Campus photos" className="grid grid-cols-[repeat(3,minmax(0,1fr))_auto] gap-1 p-2 sm:gap-2">
            {campusPhotos.map((photo, index) => (
              <button
                key={photo.label}
                type="button"
                aria-controls="home-hero-photo"
                aria-pressed={index === activeIndex}
                onClick={() => void selectPhoto(index)}
                className="flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-md border border-transparent px-1.5 py-1.5 text-center text-xs font-semibold leading-snug text-[#43534a] transition-colors hover:bg-[#ebeee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] aria-pressed:border-[#9cbaa9] aria-pressed:bg-[#e7efe5] aria-pressed:text-[#185d40] sm:px-2 lg:justify-start lg:text-left lg:text-sm"
              >
                <img src={photo.preview} alt="" width={144} height={96} className="hidden h-8 w-12 shrink-0 rounded object-cover lg:block" />
                {photo.label}
              </button>
            ))}
            <button
              type="button"
              aria-label={isPlaying ? 'Pause photo rotation' : 'Play photo rotation'}
              aria-controls="home-hero-photo"
              onClick={() => setIsPlaying(playing => !playing)}
              className="flex min-h-11 w-11 items-center justify-center rounded-md text-[#185d40] hover:bg-[#ebeee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
            >
              {isPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
