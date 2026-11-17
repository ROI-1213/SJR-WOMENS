import { Grid3X3, List, Sparkles } from 'lucide-react';
import { ViewMode } from './types';

interface GalleryHeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const GalleryHeader = ({ viewMode, setViewMode }: GalleryHeaderProps) => (
  <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#dde5de] pb-4">
    <div>
      <span className="home-section-eyebrow">
        Campus Life &amp; Infrastructure
      </span>
      <h2 id="campus-gallery-title" className="home-section-title mt-1.5 text-[#177249]">
        Visual Archive &amp; Facilities
      </h2>
      <p className="mt-1 text-sm text-[#52645a]">
        High-definition glimpses of academic halls, computer labs, library reading rooms, and student activities.
      </p>
    </div>
    <div role="group" aria-label="Gallery layout" className="flex gap-1.5 rounded-xl border border-[#d6dfd8] bg-white p-1.5 shadow-xs">
      {([
        { mode: 'grid', label: 'Grid view', Icon: Grid3X3 },
        { mode: 'list', label: 'List view', Icon: List },
      ] as const).map(({ mode, label, Icon }) => (
        <button
          key={mode}
          type="button"
          aria-label={label}
          aria-pressed={viewMode === mode}
          onClick={() => setViewMode(mode)}
          className="grid h-9 w-9 place-items-center rounded-lg text-[#177249] transition-all duration-200 hover:bg-[#edf5ef] aria-pressed:bg-[#177249] aria-pressed:text-[#dfa03e] aria-pressed:shadow-xs"
        >
          <Icon size={16} aria-hidden="true" />
        </button>
      ))}
    </div>
  </div>
);
