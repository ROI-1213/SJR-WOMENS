import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingApplyButton = ({ inline = false }: { inline?: boolean }) => {
  return (
    <Link
      to="/admissions/online-application"
      className={`inline-flex min-h-11 items-center gap-2 bg-[#ff8c00] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-shadow [text-shadow:0_1px_2px_#713500,0_0_2px_#713500] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] md:px-4 ${inline ? 'rounded-md' : 'fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-[max(0.75rem,env(safe-area-inset-left))] z-40 rounded-full md:bottom-6 md:left-6'}`}
      aria-label="Apply for Admission"
    >
      <GraduationCap size={19} aria-hidden="true" />
      <span>Apply for Admission</span>
    </Link>
  );
};
