import { Maximize2, Sparkles } from 'lucide-react';
import type { Photo, ViewMode } from './types';

interface PhotoGridProps {
  photos: Photo[];
  viewMode: ViewMode;
  onImageClick: (index: number) => void;
}

export const PhotoGrid = ({ photos, viewMode, onImageClick }: PhotoGridProps) => {
  const isGrid = viewMode === 'grid';

  return (
    <ul className={isGrid ? 'grid grid-cols-2 gap-3.5 sm:gap-4 lg:auto-rows-[minmax(10.5rem,1fr)] lg:grid-cols-4' : 'grid gap-3.5 sm:grid-cols-2'}>
      {photos.map((photo, index) => (
        <li key={photo.id} className={isGrid && index === 0 ? 'col-span-2 min-w-0 lg:row-span-2' : 'min-w-0'}>
          <button
            type="button"
            aria-label={`Preview ${photo.title}`}
            onClick={() => onImageClick(index)}
            className={`luxury-glass-card group relative flex h-full w-full overflow-hidden text-left transition-all duration-400 hover:border-[#c28422] hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123625] ${
              isGrid ? 'aspect-[4/3] flex-col justify-end bg-[#0c2619] lg:aspect-auto' : 'items-center gap-4 bg-white p-3.5 hover:border-[#c28422]'
            }`}
          >
            <img
              src={photo.previewSrc ?? photo.src}
              alt=""
              loading="lazy"
              decoding="async"
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                isGrid ? 'absolute inset-0 h-full w-full' : 'h-20 w-24 shrink-0 rounded-lg shadow-xs'
              }`}
            />
            
            {/* Overlay Caption */}
            <span className={isGrid ? 'relative block w-full bg-gradient-to-t from-black/95 via-black/50 to-transparent px-4 pb-4 pt-10 text-white' : 'min-w-0 flex-1 text-[#143a29]'}>
              <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider ${isGrid ? 'text-[#dfa03e]' : 'text-[#8b6528]'}`}>
                <span>{photo.category}</span>
              </span>
              <span className="mt-1 block text-sm font-bold text-white sm:text-base leading-snug">
                {photo.title}
              </span>
            </span>

            {/* Expand / Maximize Button */}
            <span
              aria-hidden="true"
              className={
                isGrid
                  ? 'absolute right-3.5 top-3.5 box-content rounded-lg border border-white/20 bg-black/60 p-2 text-[#dfa03e] backdrop-blur-md transition-transform group-hover:scale-110'
                  : 'mr-2 shrink-0 rounded-md border border-[#c28422]/30 p-1.5 text-[#8b6528]'
              }
            >
              <Maximize2 size={16} />
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};
