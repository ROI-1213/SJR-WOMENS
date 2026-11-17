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
            className={`group relative flex h-full w-full overflow-hidden rounded-xl border border-[#d8e5dc] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] ${
              isGrid ? 'aspect-[4/3] flex-col justify-end bg-[#183c2b] lg:aspect-auto' : 'items-center gap-4 bg-white p-2.5 hover:border-[#177249]'
            }`}
          >
            <img
              src={photo.previewSrc ?? photo.src}
              alt=""
              loading="lazy"
              decoding="async"
              className={`object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025] ${
                isGrid ? 'absolute inset-0 h-full w-full' : 'h-20 w-24 shrink-0 rounded-md'
              }`}
            />
            
            {/* Overlay Caption */}
            <span className={isGrid ? 'relative block w-full bg-gradient-to-t from-black/90 to-transparent px-2.5 pb-2.5 pt-7 text-white sm:px-4 sm:pb-3 sm:pt-10' : 'min-w-0 flex-1 text-[#182d23]'}>
              <span className={`block text-xs font-medium capitalize ${isGrid ? 'text-white/90' : 'text-[#177249]'}`}>
                {photo.category}
              </span>
              <span className="mt-1 block text-sm font-semibold sm:text-base leading-snug">
                {photo.title}
              </span>
            </span>

            {/* Expand / Maximize Button */}
            <span
              aria-hidden="true"
              className={
                isGrid
                  ? 'absolute right-3 top-3 box-content rounded-md bg-[#183c2b] p-1.5 text-white transition-transform group-hover:scale-110'
                  : 'mr-2 shrink-0 text-[#177249]'
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
