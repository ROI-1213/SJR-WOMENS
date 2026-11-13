import { Maximize2 } from 'lucide-react';
import type { Photo, ViewMode } from './types';

interface PhotoGridProps {
  photos: Photo[];
  viewMode: ViewMode;
  onImageClick: (index: number) => void;
}

export const PhotoGrid = ({ photos, viewMode, onImageClick }: PhotoGridProps) => {
  const isGrid = viewMode === 'grid';

  return (
    <ul className={isGrid ? 'grid grid-cols-2 gap-2 sm:gap-3 lg:auto-rows-[minmax(9.75rem,1fr)] lg:grid-cols-4' : 'grid gap-3 sm:grid-cols-2'}>
      {photos.map((photo, index) => (
        <li key={photo.id} className={isGrid && index === 0 ? 'col-span-2 min-w-0 lg:row-span-2' : 'min-w-0'}>
          <button
            type="button"
            aria-label={`Preview ${photo.title}`}
            onClick={() => onImageClick(index)}
            className={`group relative flex h-full w-full overflow-hidden rounded-xl border border-[#d6cfb8] text-left transition-all duration-300 hover:border-[#c28422] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123625] ${isGrid ? 'aspect-[4/3] flex-col justify-end bg-[#102d21] lg:aspect-auto' : 'items-center gap-4 bg-white p-3 hover:border-[#c28422]'}`}
          >
            <img
              src={photo.previewSrc ?? photo.src}
              alt=""
              loading="lazy"
              decoding="async"
              className={`object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03] ${isGrid ? 'absolute inset-0 h-full w-full' : 'h-20 w-24 shrink-0 rounded-md'}`}
            />
            <span className={isGrid ? 'relative block w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 text-white sm:px-4 sm:pb-3.5 sm:pt-10' : 'min-w-0 flex-1 text-[#143a29]'}>
              <span className={`block text-xs font-medium uppercase tracking-wider ${isGrid ? 'text-[#dfa03e]' : 'text-[#8b6528]'}`}>{photo.category}</span>
              <span className="mt-1 block text-sm font-semibold text-white sm:text-base leading-snug">{photo.title}</span>
            </span>
            <Maximize2 size={16} aria-hidden="true" className={isGrid ? 'absolute right-3 top-3 box-content rounded bg-[#102d21]/80 p-1.5 text-[#dfa03e] backdrop-blur-sm' : 'mr-2 shrink-0 text-[#8b6528]'} />
          </button>
        </li>
      ))}
    </ul>
  );
};
