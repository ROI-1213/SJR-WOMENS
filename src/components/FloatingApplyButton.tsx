import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingApplyButton = ({ inline = false }: { inline?: boolean }) => {
  return (
    <Link
      to="/admissions/online-application"
      className={`inline-flex min-h-11 items-center gap-2.5 bg-[#ff8c00] px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-orange-950/20 transition-all duration-300 hover:bg-[#e67e00] hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00] md:px-5 ${
        inline
          ? 'rounded-md'
          : 'fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-[max(1.5rem,env(safe-area-inset-left))] z-40 rounded-full md:bottom-6 md:left-6'
      }`}
      aria-label="Apply for Admission"
    >
      <GraduationCap size={19} className="text-white" aria-hidden="true" />
      <span className="font-semibold">Apply for Admission</span>
    </Link>
  );
};
