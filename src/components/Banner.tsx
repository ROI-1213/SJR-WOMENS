import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play, Landmark, Award, ShieldCheck, Sparkles } from 'lucide-react';
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
      // Keep the last usable image if decoding fails
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
    <section aria-labelledby="home-hero-title" className="border-b border-[#e1e6e1] bg-gradient-to-b from-[#fbfaf6] to-[#f4f1ea] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-8 lg:gap-10">
          
          {/* Left Hero Panel: Formal Academic Dossier */}
          <div
            data-hero-panel="content"
            className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#1e4d36] bg-gradient-to-br from-[#0c2619] via-[#133c28] to-[#081a11] p-7 shadow-xl text-white sm:p-9 lg:p-11"
          >
            {/* Watermark Crest */}
            <Landmark
              className="pointer-events-none absolute -bottom-10 -right-8 h-72 w-72 text-white/[0.04]"
              strokeWidth={0.7}
              aria-hidden="true"
            />

            <div>
              {/* Prestigious Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c28422]/50 bg-[#c28422]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#dfa03e] shadow-sm">
                <Sparkles size={13} className="text-[#dfa03e]" aria-hidden="true" />
                <span>Undergraduate &amp; Postgraduate Study</span>
              </div>

              {/* Main Headline */}
              <h1
                id="home-hero-title"
                className="home-display-title mt-5 text-[clamp(2.35rem,4.5vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white"
              >
                <span className="bg-gradient-to-r from-[#e7b65e] via-[#f7d88c] to-[#c28422] bg-clip-text text-transparent">
                  Science, Arts
                </span>{' '}
                <span className="block">&amp; Commerce</span>
              </h1>

              {/* Formal Editorial Description */}
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-[1.05rem]">
                Dedicated to empowering women through value-based higher education, holistic personal development, and academic excellence at our Rajajinagar campus in Bengaluru.
              </p>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  to="/academics"
                  className="group inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-[#dfa03e]/40 bg-gradient-to-r from-[#dfa03e] to-[#c28422] px-6 py-3 text-sm font-bold text-[#0c2619] shadow-lg transition-all duration-300 hover:from-[#eec068] hover:to-[#d0912c] hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfa03e]"
                >
                  <span>Academic Programmes</span>
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <Link
                  to="/admissions"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#dfa03e] hover:bg-white/15 hover:text-[#dfa03e] hover:-translate-y-0.5"
                >
                  <Award size={16} className="text-[#dfa03e]" aria-hidden="true" />
                  <span>Admissions 2024–25</span>
                </Link>
              </div>
            </div>

            {/* Bottom Motto & Affiliation Ribbon */}
            <div className="mt-8 border-t border-white/15 pt-5">
              <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs">
                <div>
                  <p className="font-serif text-lg italic text-[#e7b65e]">“In Pursuit of Excellence”</p>
                  <p className="mt-0.5 font-medium uppercase tracking-wider text-white/70">
                    Affiliated to Bengaluru City University · NAAC Accredited
                  </p>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-[#dfa03e]">
                  <ShieldCheck size={14} />
                  <span>Est. 1988</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Panel: Architectural Visual Showcase */}
          <div
            data-hero-panel="gallery"
            className="flex min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-[#d9e2db] bg-white p-3 shadow-xl lg:p-4"
          >
            {/* Viewport Frame */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#0c2619] shadow-inner sm:aspect-[16/10]">
              {campusPhotos.map((photo, index) => {
                const isSelected = index === activeIndex;
                return (
                  <img
                    key={photo.label}
                    ref={(node) => {
                      images.current[index] = node;
                    }}
                    src={photo.large}
                    alt={photo.alt}
                    aria-hidden={!isSelected}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`home-hero-photo absolute inset-0 h-full w-full object-cover object-center ${
                      isSelected ? 'z-10 opacity-100 scale-100' : 'pointer-events-none z-0 opacity-0 scale-105'
                    }`}
                  />
                );
              })}

              {/* Top Status Badge */}
              <div className="absolute left-3.5 top-3.5 z-20 flex items-center gap-2 rounded-full border border-black/30 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#dfa03e] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span>Official Campus View</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white sm:p-5">
                <p className="font-serif text-lg font-normal leading-snug text-white sm:text-xl">
                  {activePhoto.caption}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#dfa03e]">
                  SJR College for Women · Bengaluru
                </p>
              </div>
            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#edf2ee] pt-3">
              <div className="grid flex-1 grid-cols-3 gap-2">
                {campusPhotos.map((photo, index) => {
                  const isSelected = index === activeIndex;
                  return (
                    <button
                      key={photo.label}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => void selectPhoto(index)}
                      className={`group flex items-center gap-2 rounded-lg border p-1.5 text-left transition-all duration-300 ${
                        isSelected
                          ? 'border-[#c28422] bg-[#fbf8f0] shadow-sm ring-1 ring-[#c28422]'
                          : 'border-[#e4ebe5] bg-[#fafbf9] hover:border-[#143a29] hover:bg-white'
                      }`}
                    >
                      <img
                        src={photo.preview}
                        alt=""
                        aria-hidden="true"
                        className="h-9 w-9 shrink-0 rounded-md object-cover"
                      />
                      <span className="min-w-0">
                        <span className={`block truncate text-xs font-bold ${isSelected ? 'text-[#143a29]' : 'text-[#485c51]'}`}>
                          {photo.label}
                        </span>
                        <span className="hidden text-[10px] text-[#8c9c92] sm:block">
                          {index === 0 ? 'Campus' : index === 1 ? 'Central Lib' : 'Computer Lab'}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Play/Pause Button */}
              <button
                type="button"
                aria-label={isPlaying ? 'Pause campus photo rotation' : 'Play campus photo rotation'}
                onClick={() => setIsPlaying(!isPlaying)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#d6dfd8] bg-white text-[#143a29] shadow-sm transition-colors hover:bg-[#edf4ee] hover:text-[#0c2619]"
              >
                {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
