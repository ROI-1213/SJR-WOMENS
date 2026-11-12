import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { Photo } from './types';

interface LightboxProps {
  selectedImage: number | null;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  imageOnly?: boolean;
}

const overlayControl = 'absolute z-10 grid size-11 place-items-center rounded-full border border-white/40 bg-[#153b2a]/95 text-white shadow-lg transition-colors hover:bg-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]';

export const Lightbox = ({ selectedImage, photos, onClose, onNavigate, imageOnly = false }: LightboxProps) => {
  const opener = useRef<HTMLElement | null>(null);
  const photo = selectedImage === null ? undefined : photos[selectedImage];
  const controlClass = 'inline-flex min-h-11 items-center gap-1 rounded-md border border-white/30 px-3 text-sm text-white hover:bg-white/10';

  useEffect(() => {
    if (!imageOnly || selectedImage === null || photos.length < 2) return;

    for (const offset of [-1, 1]) {
      const image = new Image();
      image.src = photos[(selectedImage + offset + photos.length) % photos.length].src;
    }
  }, [imageOnly, photos, selectedImage]);

  return (
    <Dialog open={Boolean(photo)} onOpenChange={open => { if (!open) onClose(); }}>
      <DialogContent
        className={imageOnly
          ? 'w-[94vw] max-w-6xl place-items-center gap-0 border-0 bg-transparent p-0 shadow-none'
          : 'max-h-[94dvh] w-[94vw] max-w-5xl overflow-y-auto rounded-xl border-white/15 bg-[#142b20] p-4 pt-11 text-white sm:p-6 sm:pt-11'}
        closeButtonClassName={imageOnly ? `${overlayControl} right-2 top-2 opacity-100 data-[state=open]:bg-[#153b2a]/95 data-[state=open]:text-white [&>svg]:size-5` : undefined}
        onClick={imageOnly ? event => { if (event.target === event.currentTarget) onClose(); } : undefined}
        onOpenAutoFocus={() => { opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; }}
        onCloseAutoFocus={event => {
          if (opener.current?.isConnected) {
            event.preventDefault();
            opener.current.focus({ preventScroll: true });
          }
        }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            onNavigate('prev');
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            onNavigate('next');
          }
        }}
      >
        {photo && selectedImage !== null && (imageOnly ? (
          <>
            <DialogTitle className="sr-only">Gallery photo viewer</DialogTitle>
            <DialogDescription className="sr-only" aria-live="polite">{photo.title}, {selectedImage + 1} of {photos.length}</DialogDescription>
            <img key={photo.id} src={photo.src} alt={photo.title} className="block h-auto max-h-[84dvh] w-auto max-w-full rounded-xl object-contain motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-200" />
            <button type="button" aria-label="Previous image" onClick={() => onNavigate('prev')} className={`${overlayControl} left-2 top-1/2 -translate-y-1/2 sm:left-3`}>
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next image" onClick={() => onNavigate('next')} className={`${overlayControl} right-2 top-1/2 -translate-y-1/2 sm:right-3`}>
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </>
        ) : (
          <>
            <img src={photo.src} alt={photo.title} className="mx-auto block max-h-[63dvh] max-w-full rounded-md object-contain" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <DialogTitle className="text-lg text-white">{photo.title}</DialogTitle>
                <DialogDescription className="text-green-50/90" aria-live="polite">{selectedImage + 1} of {photos.length}</DialogDescription>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => onNavigate('prev')} className={controlClass}>
                  <ChevronLeft size={17} aria-hidden="true" /> Previous
                </button>
                <button type="button" onClick={() => onNavigate('next')} className={controlClass}>
                  Next <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </>
        ))}
      </DialogContent>
    </Dialog>
  );
};
