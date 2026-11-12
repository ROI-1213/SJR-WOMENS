import { useState } from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { Lightbox } from '@/components/gallery/Lightbox';
import { photos } from '@/components/gallery/data';
import type { Photo } from '@/components/gallery/types';
import performance from '@/assets/gallery-cultural-fest.jpg';
import awards from '@/assets/gallery-award-ceremony.jpg';

const galleryPhotos: Photo[] = [
  ...photos.filter(photo => [1, 3, 4, 5, 6, 7].includes(photo.id)),
  { id: 10, src: performance, title: 'Cultural performance on the auditorium stage', category: 'events' },
  { id: 12, src: awards, title: 'Presentation at a college ceremony', category: 'events' },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <MediaCenterLayout page="gallery" showRelated={false}>
      <section aria-label="Campus photographs">
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {galleryPhotos.map((photo, index) => (
            <li key={photo.id} className="min-w-0">
              <button
                type="button"
                aria-label={`View ${photo.title}`}
                onClick={() => setSelected(index)}
                className="group block w-full overflow-hidden rounded-xl bg-[#177249]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
              >
                <img
                  src={photo.previewSrc ?? photo.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Lightbox
        imageOnly
        photos={galleryPhotos}
        selectedImage={selected}
        onClose={() => setSelected(null)}
        onNavigate={direction => setSelected(index => index === null ? null : (index + (direction === 'next' ? 1 : -1) + galleryPhotos.length) % galleryPhotos.length)}
      />
    </MediaCenterLayout>
  );
};

export default Gallery;
