import { useState } from 'react';
import { ArrowRight, Languages, Quote, ChevronDown, ChevronUp } from 'lucide-react';
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
  const visibleParagraphs = expanded ? activeParagraphs : activeParagraphs.slice(0, 2);

  return (
    <section
      aria-labelledby="leadership-title"
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#177249] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="home-section-eyebrow tracking-widest text-[#8b6528]">INSTITUTIONAL LEADERSHIP</span>
            </div>
            <h2 id="leadership-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#177249] sm:text-4xl">
              {fullMessage ? 'From the Principal’s Desk' : 'Principal’s Message'}
            </h2>
          </div>

          <div
            className="inline-flex rounded-xl border border-[#d2dcd3] bg-white p-1 shadow-2xs"
            role="group"
            aria-label="Message language"
          >
            <button
              type="button"
              onClick={() => setLanguage('kn')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                language === 'kn'
                  ? 'bg-[#177249] text-white shadow-xs ring-1 ring-[#c28422]'
                  : 'text-[#177249] hover:bg-[#eef4ef]'
              }`}
            >
              <Languages size={13} aria-hidden="true" />
              ಕನ್ನಡ (Original)
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-[#177249] text-white shadow-xs ring-1 ring-[#c28422]'
                  : 'text-[#177249] hover:bg-[#eef4ef]'
              }`}
            >
              English Translation
            </button>
          </div>
        </div>

        {/* Executive Portrait & Address Dossier */}
        <article className="luxury-glass-card overflow-hidden shadow-xl md:grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-cols-[400px_minmax(0,1fr)]">
          {/* Big HD Square Portrait Column */}
          <figure className="relative aspect-square w-full overflow-hidden bg-[#0a2316] md:aspect-auto md:h-full">
            <img
              src="/images/principal/dr-prema-siddaraju.jpg"
              alt="Dr. Prema Siddaraju, Principal, SJR College for Women"
              width={853}
              height={853}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            {/* Top Insignia Badge */}
            <div className="absolute left-4 top-4 z-10 rounded-full border border-black/30 bg-black/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#dfa03e] backdrop-blur-md">
              Principal’s Desk
            </div>

            {/* Bottom Credentials Scrim */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white">
              <p className="font-serif text-2xl font-bold leading-tight text-white">{principalName}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">{principalCredentials}</p>
              <p className="mt-0.5 text-xs text-white/75">Principal, SJR College for Women</p>
            </div>
          </figure>

          {/* Reading Column */}
          <div className="p-7 sm:p-9 lg:p-11">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5ece6] pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c28422]">
                  Authentic Institutional Address
                </span>
                <h3 className="mt-0.5 font-serif text-2xl font-bold leading-tight text-[#177249]">
                  {principalName}
                </h3>
              </div>
              <span className="rounded-full border border-[#dcd6c5] bg-[#faf6ee] px-3 py-1 text-xs font-bold text-[#8b6528]">
                {language === 'kn' ? 'ಮೂಲ ಸಂದೇಶ' : 'Official Translation'}
              </span>
            </div>

            {/* Inspiring Pull-Quote */}
            <div className="my-5 rounded-xl border-l-4 border-[#c28422] bg-[#fbf8f2] p-4 text-sm font-semibold italic text-[#177249] shadow-2xs">
              <Quote className="inline-block mr-1.5 size-4 text-[#c28422]" aria-hidden="true" />
              {language === 'kn' ? '“ನಮ್ಮ ಕಾಲೇಜು ನಮ್ಮ ಹೆಮ್ಮೆ” — ಡಾ. ಪ್ರೇಮ ಸಿದ್ಧರಾಜು' : '“Our College, Our Pride” — Dr. Prema Siddaraju'}
            </div>

            {/* Address Paragraphs */}
            <div className="space-y-4 text-xs leading-relaxed text-[#384c40] sm:text-sm">
              {visibleParagraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Expand / Collapse Button */}
            {!fullMessage && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5ece6] pt-5">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="luxury-btn-shine group inline-flex items-center gap-2 rounded-lg border border-[#c28422] bg-[#177249] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#135c3b] hover:text-[#dfa03e]"
                >
                  <span>{expanded ? 'Show Brief Message' : 'Read Complete Address (5 Paragraphs)'}</span>
                  {expanded ? (
                    <ChevronUp size={15} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={15} className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                  )}
                </button>

                <p className="text-xs italic text-[#73847a]">
                  {language === 'kn' ? kannadaSignoff : 'Our College, Our Pride — Dr. Prema Siddaraju, Principal.'}
                </p>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
