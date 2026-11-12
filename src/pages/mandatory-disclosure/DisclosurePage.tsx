import { ArrowUpRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { naacResources } from '@/data/institute';
import { mandatoryDisclosureMenuData } from '@/data/navigation/mandatoryDisclosureData';
import type { BaseMenuItem } from '@/data/navigationData';

const section = { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' };
const selfStudy = naacResources[0].href;

const records: Record<string, { description: string; links: BaseMenuItem[] }> = {
  '/mandatory-disclosure/idp': {
    description: 'Criterion 6.2.1 of the college’s Self-Study Report records its institutional perspective plan and how it was put into practice. Contact the college office for the current Institutional Development Plan.',
    links: [{ label: 'Institutional perspective plan in the Self-Study Report (PDF)', href: `${selfStudy}#page=58` }],
  },
  '/mandatory-disclosure/mou': {
    description: 'The Research Cell publishes records of collaborations and activities under memoranda of understanding.',
    links: [{ label: 'Research Cell collaboration and MoU records', href: 'https://sjrc.edu.in/research-cell/' }],
  },
  '/mandatory-disclosure/academics-policy': {
    description: 'Consult the college’s quality policy and Bengaluru City University’s published examination circulars.',
    links: [
      { label: 'College IQAC Policy (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2023/04/IQAC-Policy.pdf' },
      { label: 'University examination notices and circulars', href: 'https://bcu.ac.in/index.php/home/notifications' },
    ],
  },
  '/mandatory-disclosure/annual-report': {
    description: 'Published college annual reports describe academic and institutional activities for the reporting year.',
    links: [
      { label: 'Annual Report 2022–23 (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2024/02/SJRC-Annual-Report-2022-23.pdf' },
      { label: 'Annual Report 2021–22 (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2023/03/Annual-Report-2021-22.pdf' },
      { label: 'Annual Report 2020–21 (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2022/01/ANNUAL-REPORT-2020-21.pdf' },
    ],
  },
  '/mandatory-disclosure/aicte': {
    description: 'View the college’s published AICTE approval letter and mandatory disclosure. Each record identifies the period it covers.',
    links: [
      { label: 'AICTE Letter of Approval 2024–25 (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2025/01/LOA-Report-2024-25_1-44239170107.pdf' },
      { label: 'Mandatory Disclosure 2025–26 (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2026/01/MANDATORY-DISCLOSURES-2025-26.pdf' },
    ],
  },
  '/mandatory-disclosure/notices': {
    description: 'Check the college’s official announcements and Bengaluru City University’s website for published notices and circulars.',
    links: [
      { label: 'SJRC official announcements', href: 'https://sjrc.edu.in/' },
      { label: 'Bengaluru City University notifications', href: 'https://bcu.ac.in/index.php/home/notifications' },
    ],
  },
  '/mandatory-disclosure/act-statutes': {
    description: 'Consult the university’s published statutes for its governing provisions. Contact the college office for institution-specific records.',
    links: [{ label: 'Bengaluru City University Statutes, Volume 1 (PDF)', href: 'https://bcu.ac.in/uploads/2026/06/BCU-STATUTES-new.pdf' }],
  },
  '/mandatory-disclosure/sponsoring-body': {
    description: 'Find information about the Sri Jagadguru Renukacharya Education Society and its office bearers.',
    links: [
      { label: 'Sri Jagadguru Renukacharya Education Society', href: '/about/society' },
      { label: 'Office Bearers', href: '/about/office-bearers' },
    ],
  },
};

export const DisclosurePage = ({ item }: { item?: BaseMenuItem }) => {
  const title = item?.label ?? section.label;
  const record = item ? records[item.href] : undefined;
  const links = record?.links ?? mandatoryDisclosureMenuData;
  const linkStyle = 'flex min-h-12 items-center gap-3 rounded-lg border border-[#177249]/20 bg-white px-4 py-3 text-sm font-semibold text-[#177249] underline-offset-4 hover:bg-[#177249]/5 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]';

  return (
    <SectionPageLayout pageTitle={title} breadcrumbPath={item?.label ?? 'Overview'} section={section} brandedBreadcrumb showFloatingApply={false}>
      <section aria-label={title} className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="mb-5 max-w-2xl leading-relaxed text-neutral-700">{record?.description ?? 'Browse the college’s disclosure categories and published records.'}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              {href.startsWith('/') ? (
                <Link to={href} className={linkStyle}><FileText size={18} className="shrink-0" aria-hidden="true" />{label}</Link>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                  <FileText size={18} className="shrink-0" aria-hidden="true" /><span className="flex-1">{label}<span className="sr-only"> (opens in a new tab)</span></span><ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-[#177249] underline underline-offset-4">Contact the college office</Link>
      </section>
    </SectionPageLayout>
  );
};
