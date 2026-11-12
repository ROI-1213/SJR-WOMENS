import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface FacilityIntroProps {
  title: string;
  photo: string;
  alt: string;
  children: ReactNode;
}

export const FacilityIntro = ({ title, photo, alt, children }: FacilityIntroProps) => (
  <section className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
    <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
      <h2 className="border-l-4 border-[#ff8c00] pl-4 text-2xl font-bold leading-tight text-[#177249] sm:text-3xl lg:text-4xl">{title}</h2>
      <div className="mt-5 space-y-3 leading-relaxed text-neutral-700">{children}</div>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-72">
      <img src={photo} alt={alt} className="absolute inset-0 size-full object-cover" />
    </div>
  </section>
);

export const FacilitySection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h2 className="mb-5 border-b border-[#177249]/20 pb-3 text-2xl font-bold text-[#177249] sm:text-3xl">{title}</h2>
    {children}
  </section>
);

export interface FacilityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FacilityCards = ({ items, columns = 'sm:grid-cols-2 lg:grid-cols-3' }: { items: readonly FacilityFeature[]; columns?: string }) => (
  <ul className={`grid gap-3 sm:gap-4 ${columns}`}>
    {items.map(({ icon: Icon, title, description }) => (
      <li key={title} className="flex items-start gap-4 rounded-xl border border-[#177249]/15 bg-white p-4 sm:p-5">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug text-[#177249]">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">{description}</p>
        </div>
      </li>
    ))}
  </ul>
);

export const FacilityStats = ({ title, items }: { title: string; items: readonly { value: string; label: string }[] }) => (
  <section className="rounded-2xl bg-[#177249] p-6 text-white sm:p-9">
    <h2 className="mb-5 text-xl font-semibold sm:text-2xl">{title}</h2>
    <ul className="grid grid-cols-2 gap-3 sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none sm:gap-4">
      {items.map(({ value, label }) => (
        <li key={label} className="rounded-lg border border-white/20 bg-white/5 p-3 sm:p-4">
          <span className="block text-2xl font-bold tabular-nums sm:text-3xl">{value}</span>
          <span className="mt-1 block text-sm leading-snug">{label}</span>
        </li>
      ))}
    </ul>
  </section>
);
