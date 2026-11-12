import { useState } from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { Lightbox } from '@/components/gallery/Lightbox';
import { galleryCategories, photos } from '@/components/gallery/data';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selected, setSelected] = useState<number | null>(null);

  const visiblePhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter(photo => photo.category === selectedCategory);

  return (
    <MediaCenterLayout page="gallery" showRelated={false}>
      <section aria-label="Official SJR College for Women photo gallery" className="space-y-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
          {galleryCategories.map(category => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelected(null);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                  active
                    ? 'bg-[#177249] text-white shadow-sm'
                    : 'border border-neutral-200 bg-[#f8fbf8] text-[#185d40] hover:border-[#177249]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visiblePhotos.map((photo, index) => (
            <li key={photo.id} className="min-w-0">
              <button
                type="button"
                aria-label={`View ${photo.title}`}
                onClick={() => setSelected(index)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white text-left transition-colors hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#177249]/5">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#177249]">{photo.category}</span>
                  <p className="mt-0.5 text-sm font-semibold text-[#182d23]">{photo.title}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Lightbox
        photos={visiblePhotos}
        selectedImage={selected}
        onClose={() => setSelected(null)}
        onNavigate={direction =>
          setSelected(index =>
            index === null
              ? null
              : (index + (direction === 'next' ? 1 : -1) + visiblePhotos.length) % visiblePhotos.length
          )
        }
      />
    </MediaCenterLayout>
  );
};

export default Gallery;
