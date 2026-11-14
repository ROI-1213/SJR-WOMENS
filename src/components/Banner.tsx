import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Landmark,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { AdmissionDialog } from './AdmissionDialog';
import './Banner.css';

const campusSlides = [
  {
    label: 'Campus',
    tag: 'Rajajinagar, Bengaluru',
    title: 'SJR College for Women Campus',
    description: 'Premier women’s higher educational institution in Rajajinagar, established under SJRES since 1988.',
    alt: 'SJR College for Women campus building in Rajajinagar, Bengaluru',
    image: '/images/campus/college-view.jpg',
    thumbnail: '/images/campus/college-view.jpg',
  },
  {
    label: 'Central Library',
    tag: 'Academic Knowledge Center',
    title: 'Central Library & Reading Halls',
    description: 'Extensive academic repository with thousands of volumes, journals, digital e-resources, and study cubicles.',
    alt: 'Students studying in the SJR College for Women Central Library',
    image: '/images/infrastructure/library.jpg',
    thumbnail: '/images/infrastructure/library.jpg',
  },
  {
    label: 'Computer Lab',
    tag: 'Advanced Computing Center',
    title: 'Wi-Fi Enabled Computer Science Laboratory',
    description: 'Modern high-speed network lab equipped with programming workstations, software tools, and digital classrooms.',
    alt: 'Students working at workstations in the computer science laboratory',
    image: '/images/infrastructure/computer-lab.jpg',
    thumbnail: '/images/infrastructure/computer-lab.jpg',
  },
];

const keyHighlights = [
  {
    label: 'Academic Legacy',
    value: '1988',
    detail: 'Over 35+ years dedicated to women’s higher education',
    icon: Landmark,
  },
  {
    label: 'NAAC Accreditation',
    value: 'B++',
    detail: 'Cycle 4 · CGPA 2.95 (Valid 2023–2028)',
    icon: Award,
  },
  {
    label: 'Affiliated University',
    value: 'BCU',
    detail: 'Bengaluru City University & UGC 2(f) / 12(B)',
    icon: GraduationCap,
  },
  {
    label: 'Placement Support',
    value: '100%',
    detail: 'Corporate campus connect with 15+ top recruiters',
    icon: Users,
  },
];

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const photoRequest = useRef(0);
  const activeSlide = campusSlides[activeIndex];

  const selectPhoto = useCallback(async (index: number) => {
    const image = images.current[index];
    if (!image) return;

    const request = ++photoRequest.current;
    try {
      await image.decode();
      if (request === photoRequest.current) setActiveIndex(index);
    } catch {
      setActiveIndex(index);
    }
  }, []);

  const handleNext = () => {
    selectPhoto((activeIndex + 1) % campusSlides.length);
  };

  const handlePrev = () => {
    selectPhoto((activeIndex - 1 + campusSlides.length) % campusSlides.length);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(Math.min(window.scrollY, 700));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
      if (!document.hidden) void selectPhoto((activeIndex + 1) % campusSlides.length);
    }, 6000);
    return () => {
      window.clearInterval(rotation);
      photoRequest.current += 1;
    };
  }, [activeIndex, isPlaying, selectPhoto]);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative min-h-[620px] w-full overflow-hidden border-b-2 border-[#c28422]/60 bg-[#071a10] text-white lg:min-h-[680px]"
    >
      {/* Background Rotating Images with Parallax Shift */}
      <div
        className="absolute inset-0 z-0 h-full w-full overflow-hidden will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.22}px, 0)` }}
      >
        {campusSlides.map((slide, index) => {
          const isSelected = index === activeIndex;
          return (
            <img
              key={slide.label}
              ref={(node) => {
                images.current[index] = node;
              }}
              src={slide.image}
              alt={slide.alt}
              aria-hidden={!isSelected}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`hero-slide-bg ${isSelected ? 'z-1' : 'pointer-events-none'}`}
            />
          );
        })}

        {/* Ambient Radial Golden Glow Sphere */}
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#dfa03e]/10 blur-3xl"
          style={{ transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0)` }}
          aria-hidden="true"
        />

        {/* Cinematic Multi-Stop Gradient Scrim for Flawless Readability */}
        <div className="hero-scrim-desktop absolute inset-0 z-2" aria-hidden="true" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1380px] flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[680px] lg:px-12 lg:py-14">
        
        {/* Main Content Row */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-12">
          
          {/* Left Column: Prestigious University Copy */}
          <div className="max-w-2xl">
            {/* Illuminated Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/50 bg-black/45 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dfa03e] shadow-xl backdrop-blur-md sm:text-xs">
              <Sparkles size={14} className="text-[#dfa03e] animate-pulse" aria-hidden="true" />
              <span>Sri Jagadguru Renukacharya Education Society · Estd. 1945</span>
            </div>

            {/* Grand Headline */}
            <h1
              id="home-hero-title"
              className="home-display-title mt-5 text-[clamp(2.45rem,4.9vw,4.6rem)] font-normal leading-[1.07] tracking-[-0.02em] text-white drop-shadow-md"
            >
              Empowering Women Through{' '}
              <span className="hero-gold-gradient block sm:inline">
                Science, Arts &amp; Commerce
              </span>
            </h1>

            {/* Subtitle / Mission Statement */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed">
              Dedicated to value-based higher education, holistic personal development, and academic excellence at our prime Rajajinagar campus in Bengaluru.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/academics"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-transparent bg-white px-7 py-3.5 text-sm font-bold text-[#177249] shadow-md transition-all duration-300 hover:bg-neutral-100 hover:shadow-lg hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Programmes</span>
                <ArrowRight size={17} className="text-[#177249] transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </Link>

              <button
                type="button"
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-transparent bg-[#ff8c00] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e67e00] hover:shadow-lg hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]"
              >
                <GraduationCap size={18} className="text-white" aria-hidden="true" />
                <span>Apply for Admission</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Slide Showcase Pill & Controls */}
          <div
            className="flex flex-col items-start justify-end lg:items-end will-change-transform"
            style={{ transform: `translate3d(0, ${-scrollY * 0.08}px, 0)` }}
          >
            <div className="luxury-glass-dark w-full max-w-sm p-5 sm:p-6">
              
              {/* Header with Live Status Indicator */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#dfa03e]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span>Campus Showcase</span>
                </span>
                <span className="text-xs font-semibold text-white/70">
                  0{activeIndex + 1} / 0{campusSlides.length}
                </span>
              </div>

              {/* Active Slide Info */}
              <div className="mt-3.5">
                <span className="rounded bg-[#c28422]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#dfa03e]">
                  {activeSlide.tag}
                </span>
                <h2 className="font-serif mt-2 text-xl font-bold leading-tight text-white">
                  {activeSlide.title}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-white/80">
                  {activeSlide.description}
                </p>
              </div>

              {/* Slide Thumbnail Strip */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/15 pt-3">
                {campusSlides.map((slide, index) => {
                  const isSelected = index === activeIndex;
                  return (
                    <button
                      key={slide.label}
                      type="button"
                      aria-label={`View slide ${index + 1}: ${slide.label}`}
                      onClick={() => void selectPhoto(index)}
                      className={`group relative overflow-hidden rounded-lg border-2 p-1 text-left transition-all ${
                        isSelected
                          ? 'border-[#dfa03e] bg-white/20 shadow-md ring-1 ring-[#dfa03e]'
                          : 'border-white/20 bg-black/40 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={slide.thumbnail}
                        alt=""
                        className="h-10 w-full rounded object-cover"
                      />
                      <span className="mt-1 block truncate text-[10px] font-bold text-white text-center">
                        {slide.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next & Pause Controls */}
              <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Previous campus photo"
                    onClick={handlePrev}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-white/25 bg-white/10 text-white transition-all hover:border-[#dfa03e] hover:bg-[#dfa03e] hover:text-[#125c3a]"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next campus photo"
                    onClick={handleNext}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-white/25 bg-white/10 text-white transition-all hover:border-[#dfa03e] hover:bg-[#dfa03e] hover:text-[#125c3a]"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  aria-label={isPlaying ? 'Pause slide rotation' : 'Resume slide rotation'}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/80 hover:bg-white/20"
                >
                  {isPlaying ? (
                    <>
                      <Pause size={12} className="text-[#dfa03e]" />
                      <span className="text-[10px]">Autoplay ON</span>
                    </>
                  ) : (
                    <>
                      <Play size={12} className="text-[#dfa03e]" />
                      <span className="text-[10px]">Paused</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Docked Institutional Metrics Bar with Luxury Hover Elevation */}
        <div className="mt-10 border-t border-white/15 pt-6 lg:mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-6">
            {keyHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="luxury-glass-dark flex items-center gap-3 p-3.5 sm:p-4 hover:border-[#dfa03e]"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#dfa03e]/40 bg-[#dfa03e]/15 text-[#dfa03e]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                      {item.value}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#dfa03e]">
                      {item.label}
                    </p>
                    <p className="hidden truncate text-[10px] text-white/70 sm:block">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
