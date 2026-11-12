import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import campus from '@/assets/sjr-administrative-block.jpg';
import library from '@/assets/sjr-library.jpg';
import classroom from '@/assets/sjr-classroom.jpg';

interface CampusTourModalProps {
  children: (openModal: () => void) => React.ReactNode;
}

const campusPhotos = [
  { src: campus, label: 'Administrative block' },
  { src: library, label: 'Library reading room' },
  { src: classroom, label: 'Classroom' },
];

export const CampusTourModal = ({ children }: CampusTourModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children(() => setIsOpen(true))}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[85dvh] w-[95vw] max-w-4xl overflow-y-auto">
          <DialogTitle>Campus Tour</DialogTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {campusPhotos.map(photo => (
              <figure key={photo.label}>
                <img src={photo.src} alt="" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <figcaption className="mt-2 text-sm text-muted-foreground">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
