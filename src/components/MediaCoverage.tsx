
import React, { useState } from 'react';
import { Newspaper, X, ZoomIn } from 'lucide-react';
import { Card } from './ui/card';
import { Dialog, DialogContent } from './ui/dialog';
import mediaAndhra from '@/assets/media-andhra-jyothi.jpg';
import mediaEenadu1 from '@/assets/media-eenadu-1.jpg';
import mediaSanje from '@/assets/media-sanje-samaya.jpg';
import mediaTimesKarnataka from '@/assets/media-times-karnataka.jpg';
import mediaVishwa from '@/assets/media-vishwa-vaaridhi.jpg';
import mediaInduSanje from '@/assets/media-indu-sanje.jpg';
import mediaEenadu2 from '@/assets/media-eenadu-2.jpg';
import mediaBharata from '@/assets/media-bharata-sarathi.jpg';
import mediaAndhra2 from '@/assets/media-andhra-jyothi-2.jpg';
import mediaUdayakala from '@/assets/media-udayakala.jpg';

export const MediaCoverage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems = [
    { id: 1, image: mediaAndhra },
    { id: 2, image: mediaEenadu1 },
    { id: 3, image: mediaSanje },
    { id: 4, image: mediaTimesKarnataka },
    { id: 5, image: mediaVishwa },
    { id: 6, image: mediaInduSanje },
    { id: 7, image: mediaEenadu2 },
    { id: 8, image: mediaBharata },
    { id: 9, image: mediaAndhra2 },
    { id: 10, image: mediaUdayakala },
  ];

  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Newspaper className="text-primary" size={16} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Media Coverage</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            In The <span className="text-primary">News</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest news and media coverage of our institution's achievements
          </p>
        </div>

        {/* Grid: 4 per row desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {mediaItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative aspect-[4/3] bg-muted">
                <img
                  src={item.image}
                  alt="Media coverage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured In Strip */}
        <div className="mt-8 p-5 bg-card rounded-2xl border border-border max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <h3 className="text-lg font-semibold text-foreground">Featured In</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            {['Andhra Jyothi', 'Eenadu', 'Sanje Samaya', 'Times of Karnataka', 'Vishwa Vaaridhi', 'Indu Sanje', 'Bharata Sarathi', 'Udayakala'].map((media, index) => (
              <span key={index} className="font-medium text-sm hover:text-primary transition-colors cursor-pointer">
                {media}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-card">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Media coverage"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
