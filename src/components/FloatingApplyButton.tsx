import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingApplyButton = ({ inline = false }: { inline?: boolean }) => {
  return (
    <Link
      to="/admissions/online-application"
      className={`inline-flex min-h-11 items-center gap-2.5 border border-[#dfa03e]/60 bg-[#123625]/95 px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#dfa03e] hover:bg-[#1a4a33] hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfa03e] md:px-5 ${
        inline
          ? 'rounded-md'
          : 'fixed bottom-[max(5rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 rounded-full md:bottom-6 md:right-22'
      }`}
      aria-label="Apply for Admission 2024–25"
    >
      <GraduationCap size={19} className="text-[#dfa03e]" aria-hidden="true" />
      <span className="font-medium">Admissions 2024–25</span>
    </Link>
  );
};
