import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteContact } from '@/data/institute';
import { collegeLinks } from '@/data/navigation/collegeLinks';
import { mandatoryDisclosureItems } from '@/data/navigation/mandatoryDisclosureData';

export const TopBar = ({ contactPhone }: { contactPhone?: string }) => (
  <div className="bg-[#ff8c00] text-white">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-2 py-1 text-xs font-semibold leading-5 sm:px-3 xl:justify-between">
      <div className="flex items-center justify-center gap-x-2 [text-shadow:0_1px_2px_#713500,0_0_2px_#713500] max-sm:text-[11px] sm:gap-x-3 max-lg:whitespace-nowrap lg:flex-wrap lg:gap-y-1">
        <span className="inline-flex items-center gap-0.5 sm:gap-1">
          <Phone size={13} className="size-[11px] shrink-0 sm:size-[13px]" aria-hidden="true" />
          {contactPhone ? <span>{contactPhone}</span> : <span>
            <a href="tel:+919916875501" className="hover:underline">9916875501</a>,{' '}
            <a href="tel:+919844742665" className="hover:underline">9844742665</a>
          </span>}
        </span>
        <a href={`mailto:${instituteContact.email}`} className="hidden items-center gap-1 hover:underline lg:inline-flex">
          <Mail size={13} aria-hidden="true" />
          {instituteContact.email}
        </a>
        <span className="inline-flex items-center gap-0.5 sm:gap-1">
          <MapPin size={13} className="size-[11px] shrink-0 sm:size-[13px]" aria-hidden="true" />
          Anand Rao Circle, Bengaluru
        </span>
      </div>
      <nav aria-label="College links" className="hidden flex-wrap items-center gap-x-3 gap-y-1 [text-shadow:0_1px_2px_#713500,0_0_2px_#713500] xl:flex">
        {mandatoryDisclosureItems.map(item => (
          <details key={item.key} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 hover:underline [&::-webkit-details-marker]:hidden">
              {item.label}
              <ChevronDown size={12} className="group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-full z-[100] w-60 rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg [text-shadow:none]">
              {item.dropdown?.map(link => (
                <Link key={link.href} to={link.href} onClick={event => event.currentTarget.closest('details')?.removeAttribute('open')} className="block rounded px-3 py-2 hover:bg-green-50">
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        {collegeLinks.map(({ href, label }) => <Link key={href} to={href} className="hover:underline">{label}</Link>)}
      </nav>
    </div>
  </div>
);
