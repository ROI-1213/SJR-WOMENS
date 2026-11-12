import { ArrowUpRight, FileText, type LucideIcon } from 'lucide-react';
import { recruitmentHighlights } from '@/data/placementRecords';

export const placementHeading = 'text-2xl font-bold leading-tight text-[#177249] sm:text-3xl';
export const placementAction = 'inline-flex items-center gap-2 rounded-lg bg-[#177249] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#135c3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]';

export const PlacementCards = ({ items }: { items: readonly { title: string; description: string; icon: LucideIcon }[] }) => (
  <ul className="grid gap-4 md:grid-cols-3">
    {items.map(({ title, description, icon: Icon }) => (
      <li key={title} className="rounded-xl border border-[#177249]/15 bg-white p-5 sm:p-6">
        <span className="mb-4 grid size-11 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold text-[#177249]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{description}</p>
      </li>
    ))}
  </ul>
);

export const PlacementHighlights = () => (
  <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
    {recruitmentHighlights.map(({ value, label, context, href }) => (
      <li key={label} className="rounded-xl border border-[#177249]/15 border-t-4 border-t-[#ff8c00] bg-[#177249]/5 p-5">
        <p className="text-3xl font-bold tabular-nums text-[#177249] sm:text-4xl">{value}</p>
        <h3 className="mt-2 font-semibold text-[#177249]">{label}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-700">{context}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Source for ${context} (PDF)`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">
          Source (PDF) <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export const PlacementReportLinks = ({ reports }: { reports: readonly { href: string; label: string; description: string }[] }) => (
  <ul className="grid gap-3 sm:grid-cols-2">
    {reports.map(({ href, label, description }) => (
      <li key={label}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-full items-start gap-3 rounded-xl border border-[#177249]/15 bg-white p-5 transition-colors hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]">
          <FileText className="mt-0.5 size-5 shrink-0 text-[#177249]" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-[#177249]">{label} (PDF)</span>
            <span className="mt-1 block text-sm leading-relaxed text-neutral-700">{description}</span>
          </span>
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#177249]" aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);
