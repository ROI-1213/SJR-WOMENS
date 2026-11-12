export const placementPages = {
  overview: { label: 'Placements Overview', href: '/placements/overview' },
  brochure: { label: 'Placement Brochure', href: '/placements/brochure' },
  director: { label: "Placement Director's Message", href: '/placements/director-message' },
  vision: { label: 'Vision, Mission, Practice', href: '/placements/vision-mission' },
  activities: { label: 'Placement Activities', href: '/placements/activities' },
  statistics: { label: 'Placement Statistics', href: '/placements/statistics' },
  companies: { label: 'Recruiting Companies', href: '/placements/companies' },
  training: { label: 'Placement Training', href: '/placements/training' },
  collaboration: { label: 'Industrial Collaboration', href: '/placements/collaboration' },
  photos: { label: 'Photos', href: '/placements/photos' },
} as const;

export type PlacementPageKey = keyof typeof placementPages;
export const placementsMenuData = Object.values(placementPages);
