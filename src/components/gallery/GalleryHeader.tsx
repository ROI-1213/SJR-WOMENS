import { Grid3X3, List } from 'lucide-react';
import { ViewMode } from './types';

interface GalleryHeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const GalleryHeader = ({ viewMode, setViewMode }: GalleryHeaderProps) => (
  <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d8d2c2] pb-4">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true"></span>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">Visual Archive</span>
      </div>
      <h2 id="campus-gallery-title" className="home-section-title text-[#143a29]">Campus Life &amp; Infrastructure Gallery</h2>
    </div>
    <div role="group" aria-label="Gallery layout" className="flex gap-1 rounded-lg border border-[#d6cfb8] bg-white p-1 shadow-sm">
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
          className="grid h-9 w-9 place-items-center rounded-md text-[#143a29] transition-all duration-200 hover:bg-[#edf5ef] aria-pressed:bg-[#123625] aria-pressed:text-[#dfa03e] aria-pressed:shadow-sm"
        >
          <Icon size={15} aria-hidden="true" />
        </button>
      ))}
    </div>
  </div>
);
