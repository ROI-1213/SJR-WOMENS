import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { GalleryHeader } from './gallery/GalleryHeader';
import { PhotoGrid } from './gallery/PhotoGrid';
import { Lightbox } from './gallery/Lightbox';
import { photos } from './gallery/data';
import { ViewMode } from './gallery/types';

// Show the primary 9 campus showcase photos initially matching reference layout with 2x2 featured card
const INITIAL_PHOTO_COUNT = 9;

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? photos : photos.slice(0, INITIAL_PHOTO_COUNT);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : displayedPhotos.length - 1);
    } else {
      setSelectedImage(selectedImage < displayedPhotos.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="campus-gallery" aria-labelledby="campus-gallery-title" className="bg-[#fbfaf6] px-5 home-section text-[#177249] sm:px-8 lg:px-12 border-b border-[#dde5de]">
      <div className="mx-auto max-w-[1284px]">
        <GalleryHeader viewMode={viewMode} setViewMode={setViewMode} />
        
        <PhotoGrid photos={displayedPhotos} viewMode={viewMode} onImageClick={openLightbox} />

        {/* View More / Show Less Button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          {!showAll ? (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="luxury-btn-shine group inline-flex items-center gap-2 rounded-xl border border-[#c28422]/60 bg-gradient-to-r from-[#177249] to-[#125c3a] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
            >
              <span>View More Events &amp; Activities ({photos.length - INITIAL_PHOTO_COUNT} More)</span>
              <ChevronDown size={16} className="text-[#dfa03e] transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setShowAll(false);
                document.getElementById('campus-gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-[#c4dcce] bg-white px-6 py-2.5 text-xs font-bold text-[#177249] shadow-2xs transition-all hover:border-[#177249] hover:bg-[#f4f7f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
            >
              <span>Show Less</span>
              <ChevronUp size={15} className="text-[#c28422]" aria-hidden="true" />
            </button>
          )}
        </div>

        <Lightbox
          selectedImage={selectedImage}
          photos={displayedPhotos}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};
