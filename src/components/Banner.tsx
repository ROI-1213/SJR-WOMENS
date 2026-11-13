import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play, Landmark } from 'lucide-react';
import { FloatingApplyButton } from './FloatingApplyButton';
import './Banner.css';

const campusPhotos = [
  {
    label: 'Campus',
    caption: 'SJR College for Women Campus Building, Rajajinagar',
    alt: 'SJR College for Women campus building in Rajajinagar, Bengaluru',
    small: '/images/campus/college-view.jpg',
    large: '/images/campus/college-view.jpg',
    preview: '/images/campus/college-view.jpg',
  },
  {
    label: 'Library',
    caption: 'Well-stacked Central Library with e-resources and reading rooms',
    alt: 'Students reading in the SJR College for Women library',
    small: '/images/infrastructure/library.jpg',
    large: '/images/infrastructure/library.jpg',
    preview: '/images/infrastructure/library.jpg',
  },
  {
    label: 'Computer Lab',
    caption: 'Wi-Fi enabled Computer Science and Applications Laboratory',
    alt: 'Students working at computers in the SJR College for Women computer lab',
    small: '/images/infrastructure/computer-lab.jpg',
    large: '/images/infrastructure/computer-lab.jpg',
    preview: '/images/infrastructure/computer-lab.jpg',
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
    <section aria-labelledby="home-hero-title" className="border-b border-[#e1e6e1] bg-[#fbfaf6]">
      <div className="mx-auto grid max-w-[1380px] items-stretch gap-6 px-5 py-7 sm:px-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-8 md:py-8 lg:gap-12 lg:px-12 lg:py-10 xl:gap-14">
        {/* Left Hero Panel */}
        <div
          data-hero-panel="content"
          className="relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#23583e] bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0e2c1e] p-6 shadow-md sm:p-8 lg:p-10"
        >
          {/* Subtle collegiate watermark */}
          <Landmark className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-white/[0.04]" strokeWidth={0.7} aria-hidden="true" />

          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#dfa03e] sm:mb-5">
            <span className="h-0.5 w-7 bg-gradient-to-r from-[#dfa03e] to-[#c28422]" aria-hidden="true" />
            <span>Undergraduate &amp; Postgraduate Study</span>
          </div>

          <h1
            id="home-hero-title"
            className="home-display-title text-[clamp(2.15rem,4.4vw,4.15rem)] font-normal leading-[1.05] tracking-[-0.02em] text-white"
          >
            <span className="home-hero-gold">Science, Arts</span>{' '}
            <span className="block">&amp; Commerce</span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-white/90 sm:text-[1.05rem] lg:mt-5">
            Dedicated to empowering women through value-based higher education, holistic personal development, and academic excellence at our Rajajinagar campus in Bengaluru.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-8">
            <Link
              to="/academics"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-[#143a29] shadow-sm transition-all hover:bg-[#faf7ee] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Academic Programmes
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <FloatingApplyButton inline />
          </div>

          <div className="mt-auto pt-8">
            <div className="border-t border-white/15 pt-4">
              <p className="home-display-title text-xl leading-tight text-white/95 sm:text-2xl">
                “In Pursuit of Excellence”
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#dfa03e]">
                Affiliated to Bengaluru City University · NAAC Accredited
              </p>
            </div>
          </div>
        </div>

        {/* Right Photo Carousel Panel */}
        <div
          data-hero-panel="photos"
          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#dce4dd] bg-white shadow-sm"
        >
          <figure
            id="home-hero-photo"
            className="relative isolate aspect-[4/3] overflow-hidden bg-[#123625] sm:aspect-[16/10] md:aspect-auto md:min-h-80 md:flex-1 lg:min-h-96"
          >
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
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0e2c1e]/90 via-[#0e2c1e]/20 to-transparent" />
            <figcaption
              aria-live={isPlaying ? 'off' : 'polite'}
              className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5"
            >
              <span className="mb-1 inline-block rounded bg-[#c28422] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Official Campus View
              </span>
              <p className="text-sm font-semibold text-white drop-shadow-sm sm:text-base">
                {activePhoto.caption}
              </p>
            </figcaption>
          </figure>

          {/* Carousel Thumbnail Navigation */}
          <div role="group" aria-label="Campus photos" className="grid grid-cols-[repeat(3,minmax(0,1fr))_auto] items-center gap-1.5 border-t border-[#e2e8e2] bg-[#fbfcfb] p-2 sm:gap-2">
            {campusPhotos.map((photo, index) => (
              <button
                key={photo.label}
                type="button"
                aria-controls="home-hero-photo"
                aria-pressed={index === activeIndex}
                onClick={() => void selectPhoto(index)}
                className="flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-md border border-transparent px-2 py-1.5 text-center text-xs font-semibold leading-snug text-[#43534a] transition-all hover:bg-[#eef4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] aria-pressed:border-[#c2dbca] aria-pressed:bg-[#e6f0e9] aria-pressed:text-[#123625] lg:justify-start lg:text-left lg:text-sm"
              >
                <img
                  src={photo.preview}
                  alt=""
                  width={144}
                  height={96}
                  className="hidden h-7 w-11 shrink-0 rounded border border-neutral-300 object-cover lg:block"
                />
                <span className="truncate">{photo.label}</span>
              </button>
            ))}
            <button
              type="button"
              aria-label={isPlaying ? 'Pause photo rotation' : 'Play photo rotation'}
              aria-controls="home-hero-photo"
              onClick={() => setIsPlaying(playing => !playing)}
              className="flex min-h-11 w-11 items-center justify-center rounded-md border border-transparent text-[#185d40] transition-colors hover:bg-[#eef4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
            >
              {isPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
