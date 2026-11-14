import { Phone, Mail, MapPin, ChevronDown, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteContact } from '@/data/institute';
import { collegeLinks } from '@/data/navigation/collegeLinks';
import { mandatoryDisclosureItems } from '@/data/navigation/mandatoryDisclosureData';

export const TopBar = ({ contactPhone }: { contactPhone?: string }) => (
  <div className="border-b border-orange-600/30 bg-[#ff8c00] text-white shadow-xs">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-2 py-1.5 text-xs font-medium leading-5 sm:px-3 xl:justify-between">
      <div className="flex items-center justify-center gap-x-2 text-white max-sm:text-[11px] sm:gap-x-3.5 max-lg:whitespace-nowrap lg:flex-wrap lg:gap-y-1">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Phone size={12} className="size-[11px] shrink-0 text-white sm:size-[12px]" aria-hidden="true" />
          {contactPhone ? <span>{contactPhone}</span> : <span>
            <a href="tel:+919916875501" className="hover:underline transition-colors font-semibold">9916875501</a>,{' '}
            <a href="tel:+919844742665" className="hover:underline transition-colors font-semibold">9844742665</a>
          </span>}
        </span>
        <span className="hidden text-white/50 lg:inline">|</span>
        <a href={`mailto:${instituteContact.email}`} className="hidden items-center gap-1.5 text-white hover:underline transition-colors lg:inline-flex">
          <Mail size={12} className="text-white" aria-hidden="true" />
          {instituteContact.email}
        </a>
        <span className="hidden text-white/50 lg:inline">|</span>
        <span className="inline-flex items-center gap-1.5 text-white/95">
          <MapPin size={12} className="size-[11px] shrink-0 text-white sm:size-[12px]" aria-hidden="true" />
          Rajajinagar, Bengaluru
        </span>
      </div>
      <nav aria-label="College links" className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white xl:flex">
        {mandatoryDisclosureItems.map(item => (
          <details key={item.key} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 font-medium text-white hover:text-white/85 transition-colors [&::-webkit-details-marker]:hidden">
              {item.label}
              <ChevronDown size={12} className="text-white group-open:rotate-180 transition-transform" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-full z-[100] mt-1 w-64 rounded-md border border-neutral-200 bg-white p-1.5 text-neutral-800 shadow-xl">
              {item.dropdown?.map(link => (
                <Link key={link.href} to={link.href} onClick={event => event.currentTarget.closest('details')?.removeAttribute('open')} className="block rounded px-3 py-1.5 text-xs font-medium hover:bg-[#edf5ef] hover:text-[#177249]">
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        {collegeLinks.map(({ href, label }) => (
          <Link key={href} to={href} className="text-white hover:text-white/85 transition-colors font-medium">
            {label}
          </Link>
        ))}
        <div className="flex items-center gap-2.5 pl-2.5 border-l border-white/40">
          <a
            href={instituteContact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJR College for Women on Facebook (opens in new tab)"
            className="text-white transition-colors hover:text-white/80"
          >
            <Facebook size={13} aria-hidden="true" />
          </a>
          <a
            href={instituteContact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJR College for Women on YouTube (opens in new tab)"
            className="text-white transition-colors hover:text-white/80"
          >
            <Youtube size={13} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  </div>
);
