import { Phone, Mail, MapPin, ChevronDown, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteContact } from '@/data/institute';
import { collegeLinks } from '@/data/navigation/collegeLinks';
import { mandatoryDisclosureItems } from '@/data/navigation/mandatoryDisclosureData';

export const TopBar = ({ contactPhone }: { contactPhone?: string }) => (
  <div className="border-b border-[#c28422]/30 bg-[#0e271c] text-[#fbfaf6]">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-2 py-1.5 text-xs font-medium leading-5 sm:px-3 xl:justify-between">
      <div className="flex items-center justify-center gap-x-2 text-white/95 max-sm:text-[11px] sm:gap-x-3.5 max-lg:whitespace-nowrap lg:flex-wrap lg:gap-y-1">
        <span className="inline-flex items-center gap-1">
          <Phone size={12} className="size-[11px] shrink-0 text-[#dfa03e] sm:size-[12px]" aria-hidden="true" />
          {contactPhone ? <span>{contactPhone}</span> : <span>
            <a href="tel:+919916875501" className="hover:text-[#dfa03e] transition-colors">9916875501</a>,{' '}
            <a href="tel:+919844742665" className="hover:text-[#dfa03e] transition-colors">9844742665</a>
          </span>}
        </span>
        <span className="hidden text-white/30 lg:inline">|</span>
        <a href={`mailto:${instituteContact.email}`} className="hidden items-center gap-1.5 hover:text-[#dfa03e] transition-colors lg:inline-flex">
          <Mail size={12} className="text-[#dfa03e]" aria-hidden="true" />
          {instituteContact.email}
        </a>
        <span className="hidden text-white/30 lg:inline">|</span>
        <span className="inline-flex items-center gap-1 text-white/90">
          <MapPin size={12} className="size-[11px] shrink-0 text-[#dfa03e] sm:size-[12px]" aria-hidden="true" />
          Rajajinagar, Bengaluru
        </span>
      </div>
      <nav aria-label="College links" className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/90 xl:flex">
        {mandatoryDisclosureItems.map(item => (
          <details key={item.key} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 hover:text-[#dfa03e] transition-colors [&::-webkit-details-marker]:hidden">
              {item.label}
              <ChevronDown size={12} className="text-[#dfa03e] group-open:rotate-180 transition-transform" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-full z-[100] mt-1 w-64 rounded-md border border-[#c28422]/30 bg-white p-1.5 text-neutral-800 shadow-xl">
              {item.dropdown?.map(link => (
                <Link key={link.href} to={link.href} onClick={event => event.currentTarget.closest('details')?.removeAttribute('open')} className="block rounded px-3 py-1.5 text-xs font-medium hover:bg-[#edf5ef] hover:text-[#123625]">
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        {collegeLinks.map(({ href, label }) => (
          <Link key={href} to={href} className="hover:text-[#dfa03e] transition-colors font-medium">
            {label}
          </Link>
        ))}
        <div className="flex items-center gap-2 pl-2 border-l border-white/20">
          <a
            href={instituteContact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJR College for Women on Facebook (opens in new tab)"
            className="text-white/80 transition-colors hover:text-[#dfa03e]"
          >
            <Facebook size={13} aria-hidden="true" />
          </a>
          <a
            href={instituteContact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJR College for Women on YouTube (opens in new tab)"
            className="text-white/80 transition-colors hover:text-[#dfa03e]"
          >
            <Youtube size={13} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  </div>
);
