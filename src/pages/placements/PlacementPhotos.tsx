import { useState } from 'react';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { PhotoGrid } from '@/components/gallery/PhotoGrid';
import { Lightbox } from '@/components/gallery/Lightbox';
import type { Photo } from '@/components/gallery/types';
import { placementSources } from '@/data/placementRecords';
import accounting from '@/assets/placements/accounting-training.webp';
import infosysDrive from '@/assets/placements/infosys-drive.webp';
import employability from '@/assets/placements/employability-workshop.webp';
import { PlacementReportLinks, placementHeading } from './PlacementContent';

const placementPhotos: Photo[] = [
  { id: 1, title: 'Infosys campus drive, January 2023', category: 'Recruitment', src: infosysDrive },
  { id: 2, title: 'Accounting and IT fundamentals training, 2022–23', category: 'Training', src: accounting },
  { id: 3, title: 'Employability skills workshop, August 2022', category: 'Workshop', src: employability },
];

const PlacementPhotos = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PlacementLayout page="photos" related={['activities', 'training', 'overview']}>
      <section aria-labelledby="placement-photo-archive">
        <h2 id="placement-photo-archive" className={placementHeading}>Placement photo archive</h2>
        <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">Photographs from the college’s published training and recruitment reports. Select a photo to open a larger view.</p>
        <PhotoGrid photos={placementPhotos} viewMode="grid" onImageClick={setSelected} />
      </section>
      <section aria-labelledby="placement-photo-sources">
        <h2 id="placement-photo-sources" className={`${placementHeading} mb-4`}>Photo sources</h2>
        <PlacementReportLinks reports={[
          { label: 'Placement Cell activity reports', href: placementSources.reports, description: 'The accounting course, Infosys drive, and employability workshop reports contain the photographs above.' },
        ]} />
      </section>
      <Lightbox
        photos={placementPhotos}
        selectedImage={selected}
        onClose={() => setSelected(null)}
        onNavigate={direction => setSelected(index => index === null ? null : (index + (direction === 'next' ? 1 : -1) + placementPhotos.length) % placementPhotos.length)}
      />
    </PlacementLayout>
  );
};

export default PlacementPhotos;
