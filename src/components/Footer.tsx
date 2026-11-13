import { ArrowUpRight, FileText, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { availableProgrammes, instituteContact, instituteName, naacGrade, naacResources } from '@/data/institute';

const quickLinks = [
  { label: 'About Us', href: '/about/overview' },
  { label: 'Courses', href: '/courses' },
  { label: 'Milestones', href: '/milestones' },
  { label: 'Faculties', href: '/faculty' },
  { label: 'NAAC & IQAC', href: '/naac' },
  { label: 'Right to Information (RTI)', href: '/rti' },
  { label: 'Placements (Disha)', href: '/placements' },
  { label: 'Gallery', href: '/gallery' },
];

const linkStyle = 'text-green-50/90 hover:text-white hover:underline underline-offset-4 focus-visible:underline';
const headingStyle = 'mb-3 text-sm font-semibold text-white';
const iconStyle = 'mt-0.5 shrink-0 text-white';

export const Footer = ({ contactPhone }: { contactPhone?: string }) => (
  <footer className="border-t-2 border-[#c28422] bg-[#102d21] text-white">
    <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 py-7 sm:grid-cols-3 sm:gap-x-6 lg:py-8 xl:grid-cols-[1.18fr_1.28fr_.88fr_1fr_1.12fr] xl:gap-0">
        <section className="col-span-2 border-b border-white/15 pb-4 sm:col-span-1 sm:border-0 sm:pb-0 xl:pr-5" aria-label="About the Institution">
          <Link to="/" className="flex items-center gap-3 text-sm font-semibold leading-snug text-white hover:underline underline-offset-4">
            <img src="/branding/center.png" alt="" width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 object-contain" />
            <span>{instituteName}</span>
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-green-50/90">Established in 1988. Affiliated to Bengaluru City University.</p>
        </section>

        <nav aria-label="Academic Programmes" className="min-w-0 border-l border-white/15 pl-3 sm:pl-4 xl:px-5">
          <h2 className={headingStyle}>Academic Programmes</h2>
          <ul className="space-y-2 text-xs">
            {availableProgrammes.map(programme => (
              <li key={programme.id}>
                <Link to={programme.href} className={linkStyle}>
                  <span className="block font-semibold text-white">{programme.name}</span>
                  <span className="block leading-snug">{programme.fullName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick Links" className="min-w-0 border-l border-white/15 pl-3 sm:pl-4 xl:px-5">
          <h2 className={headingStyle}>Quick Links</h2>
          <ul className="space-y-1.5 text-sm">
            {quickLinks.map(link => (
              <li key={link.href}><Link to={link.href} className={linkStyle}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="NAAC and IQAC resources" className="min-w-0 border-l border-white/15 pl-3 max-[359px]:col-span-2 sm:pl-4 xl:px-5">
          <h2 className={headingStyle}>NAAC &amp; IQAC</h2>
          <p className="mb-2 text-sm font-semibold text-white">NAAC grade {naacGrade}</p>
          <ul className="space-y-2 text-sm">
            {naacResources.map(resource => {
              const Icon = resource.pdf ? FileText : ArrowUpRight;
              return (
                <li key={resource.href}>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer" className={`flex items-start gap-2 ${linkStyle}`}>
                    <Icon size={15} className={iconStyle} aria-hidden="true" />
                    <span>{resource.label}<span className="sr-only"> (opens in a new tab)</span></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <section aria-label="Contact Information" className="min-w-0 border-l border-white/15 pl-3 max-[359px]:col-span-2 sm:pl-4 xl:pl-5">
          <h2 className={headingStyle}>Contact Information</h2>
          <address className="space-y-2 text-sm not-italic text-green-50/90">
            <p className="flex gap-2"><MapPin size={16} className={iconStyle} aria-hidden="true" />{instituteContact.address}</p>
            <p className="flex gap-2">
              <Phone size={16} className={iconStyle} aria-hidden="true" />
              {contactPhone ? <span>{contactPhone}</span> : <a href={instituteContact.phoneHref} className={linkStyle}>{instituteContact.phone}</a>}
            </p>
            <p className="flex gap-2"><Mail size={16} className={iconStyle} aria-hidden="true" /><a href={`mailto:${instituteContact.email}`} className={`min-w-0 break-words [overflow-wrap:anywhere] ${linkStyle}`}>{instituteContact.email}</a></p>
            <p className="flex gap-2"><Globe size={16} className={iconStyle} aria-hidden="true" /><a href={instituteContact.website} target="_blank" rel="noopener noreferrer" className={linkStyle}>sjrcw.edu.in</a></p>
          </address>
        </section>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-3 border-t border-white/15 pb-[max(5rem,calc(env(safe-area-inset-bottom)+3.5rem))] pt-4 text-xs text-green-50/85">
        <p>© {new Date().getFullYear()} {instituteName}. All rights reserved.</p>
        <nav aria-label="Footer links" className="flex gap-4">
          <Link to="/sitemap" className={linkStyle}>Sitemap</Link>
          <Link to="/contact" className={linkStyle}>Contact</Link>
        </nav>
      </div>
    </div>
  </footer>
);
