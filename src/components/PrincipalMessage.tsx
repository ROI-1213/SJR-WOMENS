import { useState } from 'react';
import { ArrowRight, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { principalCredentials, principalName } from '@/data/institute';

const kannadaParagraphs = [
  'ಶ್ರೀ ಜಗದ್ಗುರು ರೇಣುಕಾಚಾರ್ಯ ವಿದ್ಯಾಸಂಸ್ಥೆ 75 ವರ್ಷಗಳನ್ನು ಪೂರೈಸಿದ ವರ್ಷದಲ್ಲಿದೆ. ಇದರ ಅಂಗಸಂಸ್ಥೆಯಾದ ಎಸ್.ಜೆ.ಆರ್. ಮಹಿಳಾ ಕಾಲೇಜು ಸ್ಥಾಪನೆಗೊಂಡು ಈಗ 30 ವರ್ಷಗಳಿಗೆ ಕಾಲಿಟ್ಟಿದೆ. ಇಲ್ಲಿ ಪದವಿ ಪಡೆದ ಸಾವಿರಾರು ವಿದ್ಯಾರ್ಥಿನಿಯರು ಪ್ರಪಂಚದ ಮೂಲೆ ಮೂಲೆಗಳಲ್ಲಿ ಹಲವು ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಿರುವುದು ವಿದ್ಯಾಲಯಕ್ಕೆ ಹೆಮ್ಮೆಯ ಸಂಗತಿ. ಆ ವಿದ್ಯಾರ್ಥಿನಿಯರು ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿನಿಯರ ಸಂಘ “ಅನುಬಂಧ”ದೊಡನೆ ಕಾಲೇಜಿನ ಸಂಪರ್ಕದಲ್ಲಿ ಇದ್ದಾರೆ.',
  'ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿನಿಯರು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದಲ್ಲಿ ಅನೇಕ ಬಹುಮಾನಗಳನ್ನು ಪ್ರತಿವರ್ಷ ಪಠ್ಯೇತರ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಪಡೆಯುತ್ತಿರುವುದು, ರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ವಿಚಾರ ಸಂಕಿರಣಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವುದು, ವಿಶ್ವವಿದ್ಯಾಲಯದ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಪ್ರತೀ ವರ್ಷ ಶೇ.90ಕ್ಕೂ ಹೆಚ್ಚು ಫಲಿತಾಂಶಗಳನ್ನು ಪಡೆದು ತೇರ್ಗಡೆ ಹೊಂದುವುದರ ಜೊತೆಗೆ ಹಲವು ವಿಷಯಗಳಲ್ಲಿ ಶೇ.100 ಅಂಕಗಳನ್ನು ಪಡೆದಿರುವ ನೂರಾರು ವಿದ್ಯಾರ್ಥಿನಿಯರು ಇದ್ದಾರೆ. ಈವರೆಗಿನ ಬೆಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಪರೀಕ್ಷೆಯಲ್ಲಿ ನಮ್ಮ ಕಾಲೇಜಿಗೆ ನಾಲ್ಕು ರಾಂಕ್‌ಗಳು ಮತ್ತು ಹಲವು ಚಿನ್ನದ ಪದಕಗಳನ್ನು ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿನಿಯರು ಪಡೆದಿದ್ದಾರೆ.',
  'ಪ್ರತೀವರ್ಷ ಕ್ಯಾಂಪಸ್ ಆಯ್ಕೆಯಲ್ಲಿ ನೂರಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿನಿಯರು ಇನ್ಫೋಸಿಸ್, ವಿಪ್ರೋ, ಐಬಿಎಂ ಮತ್ತು ಅಕ್ಸೆಂಚರ್ ಮುಂತಾದ ಕಂಪನಿಗಳಿಗೆ ಆಯ್ಕೆಯಾಗುತ್ತಿರುತ್ತಾರೆ. ಸಾಂಸ್ಕೃತಿಕ ವೇದಿಕೆಯಿಂದ ವರ್ಷವಿಡೀ ವೈವಿಧ್ಯಮಯ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಹೆಣ್ಣು ಮಕ್ಕಳ ಪ್ರತಿಭೆಗೆ ಪ್ರೋತ್ಸಾಹ ನೀಡಲು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ನೃತ್ಯ, ಗಾಯನ, ರಂಗೋಲಿ, ಕಂಸಾಳೆ, ವೀರಗಾಸೆ, ಮೆಹಂದಿ, ಮೇಕಪ್ ಮತ್ತು ಹೇರ್ ಸ್ಟೈಲ್ ಇತ್ಯಾದಿ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಅಂತರ ಕಾಲೇಜು ಮಟ್ಟದಲ್ಲಿ ಬಹುಮಾನ ವಿಜೇತರಾಗಿ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿನಿಯರು ಕಾಲೇಜಿಗೆ ಮೆರುಗು ನೀಡುತ್ತಾ ಬರುತ್ತಿದ್ದಾರೆ.',
  'ಕಲಾ, ವಾಣಿಜ್ಯ ಮತ್ತು ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ವಿಭಾಗ ಮತ್ತು ವಿಜ್ಞಾನ ವಿಭಾಗಗಳು ಆಯಾ ವಿಭಾಗಕ್ಕೆ ತಕ್ಕಂತೆ ಗೋಷ್ಠಿ ವಿಚಾರ ಸಂಕಿರಣಗಳನ್ನು ಕಾಲಕಾಲಕ್ಕೆ ಆಯೋಜಿಸಿ ವಿದ್ಯಾರ್ಥಿನಿಯರ ಮಾನಸಿಕ ಬೆಳವಣಿಗೆಗೆ ಬೇಕಾದ ಎಲ್ಲಾ ಆದ್ಯತೆಗಳನ್ನು ನೀಡುತ್ತಾ ಬರುತ್ತಿದ್ದಾರೆ. ನುರಿತ ಪ್ರತಿಭಾವಂತ ಹಿರಿಯ ಬೋಧಕ ವೃಂದ ನಮ್ಮ ವಿದ್ಯಾಲಯದ ಹಿರಿಮೆಗಳಲ್ಲಿ ಒಂದು.',
  'ವಿದ್ಯಾರ್ಥಿನಿಯರ ಸರ್ವತೋಮುಖ ಬೆಳವಣಿಗೆಗೆ ಬೇಕಾದ ವಿಶಾಲವಾದ ಸಭಾಂಗಣ, ವಾಚನಾಲಯ, ಗ್ರಂಥಾಲಯ, ಒಳ ಮತ್ತು ಹೊರಾಂಗಣ ಕ್ರೀಡಾ ಸೌಲಭ್ಯ, ಥ್ರೋಬಾಲ್, ವಾಲಿಬಾಲ್, ಖೋಖೋ ಕ್ರೀಡಾಂಗಣ, ಸುಸಜ್ಜಿತ ಪ್ರಯೋಗಾಲಯಗಳು – ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ, ಸಸ್ಯಶಾಸ್ತ್ರ, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ, ಮನಃಶಾಸ್ತ್ರ, ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನದ ಪ್ರಯೋಗಾಲಯಗಳು ಆಧುನಿಕ ರೀತಿಯಲ್ಲಿ ಸುಸಜ್ಜಿತಗೊಂಡಿರುತ್ತವೆ. ಇದರ ಜೊತೆಗೆ ಭಾಷಾ ವಿಭಾಗದಲ್ಲಿ ಆಂಗ್ಲ ಭಾಷಾ ಪ್ರಯೋಗಾಲಯ, ವಾಣಿಜ್ಯ ವಿಭಾಗದಲ್ಲಿ ವ್ಯವಹಾರಿಕ ಪ್ರಯೋಗಾಲಯ, ವಿಶಾಲವಾದ ಕೊಠಡಿಗಳು, ಸೂಕ್ತ ಸೌಕರ್ಯಗಳು ಇಲ್ಲಿನ ಹೆಗ್ಗಳಿಕೆಗಳಾಗಿವೆ.',
];

const kannadaSignoff = 'ನಮ್ಮ ಕಾಲೇಜು ನಮ್ಮ ಹೆಮ್ಮೆ — ಡಾ. ಪ್ರೇಮ ಸಿದ್ಧರಾಜು, ಪ್ರಾಂಶುಪಾಲರು.';

const englishTranslationParagraphs = [
  'Sri Jagadguru Renukacharya Education Society has completed 75 years, and its constituent institution SJR College for Women has stepped into 30 years of service. It is a matter of pride that thousands of graduates from this college are working across diverse fields around the world and remain connected through the alumni association "Anubandha".',
  'Our students regularly win prizes in co-curricular activities at international levels, participate in national seminars, achieve over 90% pass results in university examinations each year—with hundreds scoring 100 marks in individual subjects—and have earned four university ranks and several gold medals in Bangalore University examinations.',
  'Every year, over a hundred students are selected through campus placements in companies such as Infosys, Wipro, IBM, and Accenture. Our cultural forum organizes diverse programmes throughout the year to encourage young women’s talents in dance, music, rangoli, kamsale, veeragase, mehendi, and inter-collegiate competitions.',
  'The Arts, Commerce & Management, and Science departments regularly organize seminars and symposia tailored to their disciplines, supported by an experienced and dedicated senior teaching faculty.',
  'For the holistic growth of students, the campus provides a spacious auditorium, reading room, library, indoor and outdoor sports facilities (throwball, volleyball, kho-kho), modern laboratories for Physics, Chemistry, Botany, Biotechnology, Psychology, and Computer Science, along with an English Language Lab and a Business Lab.',
];

export const PrincipalMessage = ({ fullMessage = false }: { fullMessage?: boolean }) => {
  const [language, setLanguage] = useState<'kn' | 'en'>('kn');
  const [expanded, setExpanded] = useState(fullMessage);

  const activeParagraphs = language === 'kn' ? kannadaParagraphs : englishTranslationParagraphs;
  const visibleParagraphs = expanded ? activeParagraphs : activeParagraphs.slice(0, 1);

  return (
    <section aria-labelledby="leadership-title" className="border-b border-[#e1e6e1] bg-[#fbfaf6] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        {/* Section Title & Language Switcher */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
              Institutional Leadership
            </span>
            <h2 id="leadership-title" className="home-section-title mt-1">
              {fullMessage ? 'From the Principal’s Desk' : 'Principal’s Message'}
            </h2>
          </div>

          <div
            className="inline-flex rounded-lg border border-[#d2dcd3] bg-white p-1 shadow-sm"
            role="group"
            aria-label="Message language"
          >
            <button
              type="button"
              onClick={() => setLanguage('kn')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                language === 'kn'
                  ? 'bg-[#123625] text-white shadow-sm'
                  : 'text-[#185d40] hover:bg-[#eef4ef]'
              }`}
            >
              <Languages size={14} aria-hidden="true" />
              ಕನ್ನಡ (Original)
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-[#123625] text-white shadow-sm'
                  : 'text-[#185d40] hover:bg-[#eef4ef]'
              }`}
            >
              English Translation
            </button>
          </div>
        </div>

        {/* Dignified Principal Profile & Message Card */}
        <article className="overflow-hidden rounded-xl border border-[#dce4dd] bg-white shadow-sm md:grid md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <figure className="relative flex min-h-64 flex-col items-center justify-center border-b border-[#dce4dd] bg-gradient-to-br from-[#123625] to-[#184530] p-6 sm:min-h-72 md:border-b-0 md:border-r">
            <div className="relative rounded-2xl border-2 border-[#dfa03e]/70 p-1.5 shadow-md">
              <img
                src="/images/principal/dr-prema-siddaraju.jpg"
                alt="Dr. Prema Siddaraju, Principal, SJR College for Women"
                width={270}
                height={270}
                loading="lazy"
                className="h-52 w-52 rounded-xl object-cover sm:h-60 sm:w-60"
              />
            </div>
            <figcaption className="mt-3 text-center">
              <p className="font-bold text-white">{principalName}</p>
              <p className="text-xs text-[#dfa03e]">{principalCredentials}</p>
            </figcaption>
          </figure>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5ece6] pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c28422]">
                  Authentic Message
                </span>
                <h3 className="home-display-title text-2xl font-normal leading-tight text-[#123324] lg:text-[1.75rem]">
                  {principalName}
                </h3>
              </div>
              <span className="rounded bg-[#eef5f0] px-2.5 py-1 text-xs font-semibold text-[#143a29]">
                Head of Institution
              </span>
            </div>

            {language === 'en' && (
              <p className="mt-4 rounded-md border border-[#e2dcce] bg-[#faf8f2] px-3.5 py-2 text-xs font-medium text-[#685e4c]">
                Translation of the original Kannada message published on the official college website (sjrcw.edu.in).
              </p>
            )}

            <div
              lang={language === 'kn' ? 'kn' : 'en'}
              className="mt-4 space-y-3.5 text-sm leading-relaxed text-[#3a4d42] sm:text-[0.95rem]"
            >
              {visibleParagraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {expanded && language === 'kn' && (
                <p className="pt-2 font-bold text-[#123324]">{kannadaSignoff}</p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-[#e5ece6] pt-4">
              {!fullMessage && (
                <Link
                  to="/about/principals-message"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
                >
                  Read Full Principal’s Message
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
              {!expanded && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-sm font-semibold text-[#185d40] underline decoration-[#185d40]/60 underline-offset-4 transition-colors hover:text-[#123625]"
                >
                  Expand Full Message
                </button>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
