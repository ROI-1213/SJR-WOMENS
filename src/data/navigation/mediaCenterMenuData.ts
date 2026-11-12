
export const mediaCenterPages = {
  events: { label: 'Events', href: '/events' },
  news: { label: 'News', href: '/news' },
  gallery: { label: 'Gallery', href: '/gallery' },
  video: { label: 'Video', href: '/videos' },
} as const;

export const mediaCenterMenuData = Object.values(mediaCenterPages);
