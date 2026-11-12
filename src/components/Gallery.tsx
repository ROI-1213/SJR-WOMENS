
import { useState } from 'react';
import { GalleryHeader } from './gallery/GalleryHeader';
import { PhotoGrid } from './gallery/PhotoGrid';
import { Lightbox } from './gallery/Lightbox';
import { photos } from './gallery/data';
import { ViewMode } from './gallery/types';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
    } else {
      setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section aria-labelledby="campus-gallery-title" className="bg-[#edf4ee] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <GalleryHeader viewMode={viewMode} setViewMode={setViewMode} />
        <PhotoGrid photos={photos} viewMode={viewMode} onImageClick={openLightbox} />

        <Lightbox
          selectedImage={selectedImage}
          photos={photos}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};
