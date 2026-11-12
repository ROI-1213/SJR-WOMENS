import { Grid3X3, List } from 'lucide-react';
import { ViewMode } from './types';

interface GalleryHeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const GalleryHeader = ({ viewMode, setViewMode }: GalleryHeaderProps) => (
  <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
    <h2 id="campus-gallery-title" className="home-section-title">Campus Gallery</h2>
    <div role="group" aria-label="Gallery layout" className="flex gap-1 rounded-lg border border-[#d8e5dc] bg-white p-1">
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
          className="grid h-10 w-10 place-items-center rounded-md text-[#177249] hover:bg-green-50 aria-pressed:bg-[#177249] aria-pressed:text-white"
        >
          <Icon size={14} aria-hidden="true" />
        </button>
      ))}
    </div>
  </div>
);
